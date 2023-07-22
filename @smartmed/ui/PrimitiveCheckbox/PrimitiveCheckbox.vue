<template>
  <div
    :class="[
      $style.checkbox,
      $style['checkbox_' + size],
      value !== false && $style.checkbox_checked,
      invalid && $style.checkbox_invalid,
      disabled && $style.checkbox_disabled,
      hovered && $style.checkbox_hovered,
      focused && 'smed-focused-element',
    ]"
  >
    <svg-icon
      :class="[$style.mark, value !== false && $style.mark_on]"
      :size="size"
      :name="iconName"
    />

    <slot />
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@smartmed/ui/SvgIcon';
import { computed, toRefs } from 'vue';

import {
  PrimitiveCheckboxProps,
  PrimitiveCheckboxSlots,
} from './PrimitiveCheckbox.props';

defineOptions({
  name: 'PrimitiveCheckbox',
});

const props = defineProps<PrimitiveCheckboxProps>();

defineSlots<PrimitiveCheckboxSlots>();

const { value } = toRefs(props);

const iconName = computed(() => {
  return value.value === null ? 'minus' : 'check';
});
</script>

<style lang="scss" module>
.checkbox {
  display: inline-flex;
  position: relative;

  transition: outline-color 0.2s linear, background-color 0.2s linear;
  color: var(--smed-base-07);

  outline: 2px solid var(--smed-base-03);
  outline-offset: -2px;

  &_sm {
    @include strict-size(16px, 16px);

    border-radius: 3px;
  }

  &_md {
    @include strict-size(20px, 20px);

    border-radius: 4px;
  }

  &_lg {
    @include strict-size(24px, 24px);

    border-radius: 5px;
  }

  &_hovered:not(&_disabled):not(&_invalid) {
    outline-color: var(--smed-base-02);
  }

  &_disabled {
    outline-color: var(--smed-base-04);
    background-color: var(--smed-base-06);
  }

  &_checked:not(&_disabled) {
    outline: none;
    background-color: var(--smed-primary);
  }

  &_checked.checkbox_disabled {
    outline: none;
    background-color: var(--smed-primary-disabled);
  }

  &_checked.checkbox_hovered:not(&_disabled):not(&_invalid) {
    background-color: var(--smed-primary-hover);
  }

  &_invalid {
    outline-color: var(--smed-error);
  }
}

.mark {
  @include transition(transform);

  transform: scale(0);

  &_on {
    transform: scale(1);
  }
}
</style>
