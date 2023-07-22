<template>
  <label
    v-hovered="hoveredProps"
    :class="[
      $style.block,
      $style['block_' + size],
      computedHovered && $style.block_hovered,
      focused && $style.block_focused,
      computedInvalid && $style.block_invalid,
      computedDisabled && $style.block_disabled,
      active && $style.block_checked,
    ]"
    :disabled="computedDisabled"
    :for="id"
  >
    <primitive-radio
      :value="active"
      :class="['smed-space_right-3', $style.radio]"
      :disabled="computedDisabled"
      :hovered="computedHovered"
      :size="size"
      :focused="false"
      :invalid="computedInvalid"
    >
      <input
        :id="id"
        ref="native"
        type="radio"
        :name="name"
        :class="$style.native"
        :checked="active"
        :disabled="computedDisabled"
        @change="onChange"
      />
    </primitive-radio>

    <span v-if="hasContent">
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script setup lang="ts" generic="T">
import PrimitiveRadio from '@smartmed/ui/PrimitiveRadio';
import {
  useControlDisabled,
  useControlInvalid,
  useInteractive,
} from '@smartmed/ui/use';
import { HoveredDirective as vHovered } from '@smartmed/utility/directives';
import { hasSlotContent } from '@smartmed/utility/vue';
import { computed, ref, toRefs, useSlots } from 'vue';

import {
  RadioBlockDefaultProps,
  RadioBlockEmits,
  RadioBlockProps,
  RadioBlockSlots,
} from './RadioBlock.props';

defineOptions({
  name: 'RadioBlock',
});

const props = withDefaults(
  defineProps<RadioBlockProps<T>>(),
  // @ts-expect-error Пока не справляется vue с generic типами в withDefaults
  RadioBlockDefaultProps
);

const emit = defineEmits<RadioBlockEmits<T>>();

defineSlots<RadioBlockSlots>();

const {
  disabled,
  isError,
  pseudoHovered,
  label,
  identityMatcher,
  item,
  modelValue,
} = toRefs(props);

const { id, native, focus, blur, focused } = useInteractive();
const computedInvalid = useControlInvalid(isError);
const computedDisabled = useControlDisabled(disabled);
const slots = useSlots();

const hovered = ref(false);

const computedHovered = computed(() => {
  return pseudoHovered.value || hovered.value;
});

const hasContent = computed(
  () => label!.value || hasSlotContent(slots.default)
);

const active = computed(() => {
  const value = modelValue.value;
  const _item = item.value;
  const matcher = identityMatcher!.value;

  return matcher(value, _item);
});

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.checked;

  if (value) {
    emit('update:modelValue', item.value);
  }
};

const onHover = (value: boolean) => {
  hovered.value = value;
};

const hoveredProps = {
  onEvent: onHover,
};

defineExpose({
  focus,
  blur,
});
</script>

<style lang="scss" module>
.block {
  @include transition(all);

  display: inline-flex;
  align-items: center;
  background-color: var(--smed-base-07);
  border: 2px solid transparent;
  user-select: none;
  cursor: pointer;

  &_sm {
    @include smed-text_body-xs;

    padding: 8px;
    border-radius: 8px;
    line-height: 16px;
  }

  &_md {
    @include smed-text_body-sm;

    padding: 12px;
    border-radius: 12px;
  }

  &_lg {
    @include smed-text_body-md;

    padding: 16px;
    border-radius: 16px;
  }

  &_hovered {
    background-color: var(--smed-base-06);
  }

  &_checked {
    border-color: var(--smed-primary);
  }

  &_focused {
    border-color: var(--smed-base-01);
  }

  &_invalid {
    border-color: var(--smed-error);
  }

  &_disabled {
    background-color: var(--smed-base-06);

    cursor: default;
  }
}

.radio {
  align-self: flex-start;
}

.native {
  @include clearinput;

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
}
</style>
