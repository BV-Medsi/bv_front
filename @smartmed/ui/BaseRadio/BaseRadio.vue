<template>
  <label
    v-hovered="hoveredProps"
    :class="[
      $style.radio,
      $style['radio_' + size],
      computedDisabled && $style.radio_disabled,
    ]"
    :disabled="computedDisabled"
    :for="id"
  >
    <primitive-radio
      :value="active"
      :invalid="computedInvalid"
      :disabled="computedDisabled"
      :hovered="computedHovered"
      :size="size"
      :focused="focused"
      :class="$style.primitive"
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
  BaseRadioDefaultProps,
  BaseRadioEmits,
  BaseRadioProps,
  BaseRadioSlots,
} from './BaseRadio.props';

defineOptions({
  name: 'BaseRadio',
});

const props = withDefaults(
  defineProps<BaseRadioProps<T>>(),
  // @ts-expect-error Пока не справляется vue с generic типами в withDefaults
  BaseRadioDefaultProps
);

const emit = defineEmits<BaseRadioEmits<T>>();

defineSlots<BaseRadioSlots>();

const {
  modelValue,
  isError,
  disabled,
  pseudoHovered,
  label,
  item,
  identityMatcher,
} = toRefs(props);

const slots = useSlots();
const { id, native, focus, blur, focused } = useInteractive();
const computedInvalid = useControlInvalid(isError);
const computedDisabled = useControlDisabled(disabled);

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
.radio {
  position: relative;
  display: inline-flex;

  align-items: center;
  cursor: pointer;

  &_sm {
    @include smed-text_body-xs;

    line-height: 16px;
    column-gap: 8px;
  }

  &_md {
    @include smed-text_body-sm;

    column-gap: 12px;
  }

  &_lg {
    @include smed-text_body-md;

    column-gap: 16px;
  }

  &_disabled {
    cursor: default;
  }
}

.primitive {
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
