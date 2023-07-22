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
      modelValue === true && $style.block_checked,
    ]"
    :disabled="computedDisabled"
    :for="id"
  >
    <primitive-checkbox
      :value="modelValue"
      :class="['smed-space_right-3', $style.checkbox]"
      :disabled="computedDisabled"
      :hovered="computedHovered"
      :size="size"
      :focused="false"
      :invalid="computedInvalid"
    >
      <input
        :id="id"
        ref="native"
        type="checkbox"
        :class="$style.native"
        :checked="!!modelValue"
        :disabled="computedDisabled"
        @change="onChange"
      />
    </primitive-checkbox>

    <span v-if="hasContent">
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import PrimitiveCheckbox from '@smartmed/ui/PrimitiveCheckbox';
import {
  useControlDisabled,
  useControlInvalid,
  useInteractive,
} from '@smartmed/ui/use';
import { HoveredDirective as vHovered } from '@smartmed/utility/directives';
import { hasSlotContent } from '@smartmed/utility/vue';
import { computed, ref, toRefs, useSlots } from 'vue';

import {
  CheckboxBlockDefaultProps,
  CheckboxBlockEmits,
  CheckboxBlockProps,
  CheckboxBlockSlots,
} from './CheckboxBlock.props';

defineOptions({
  name: 'CheckboxBlock',
});

const props = withDefaults(
  defineProps<CheckboxBlockProps>(),
  CheckboxBlockDefaultProps
);

const emit = defineEmits<CheckboxBlockEmits>();

defineSlots<CheckboxBlockSlots>();

const { disabled, isError, pseudoHovered, label } = toRefs(props);

const { id, native, focus, blur, focused } = useInteractive();
const computedInvalid = useControlInvalid(isError);
const computedDisabled = useControlDisabled(disabled);
const slots = useSlots();

const hovered = ref(false);

const computedHovered = computed(() => {
  return pseudoHovered.value || hovered.value;
});

const hasContent = computed(() => label.value || hasSlotContent(slots.default));

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.checked;

  emit('update:modelValue', value);
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

.checkbox {
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
