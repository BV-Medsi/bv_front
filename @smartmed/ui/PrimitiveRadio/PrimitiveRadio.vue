<template>
  <div
    :class="[
      $style.radio,
      $style['radio_' + size],
      value && $style.radio_checked,
      invalid && $style.radio_invalid,
      disabled && $style.radio_disabled,
      hovered && $style.radio_hovered,
      focused && $style.radio_focused,
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import {
  PrimitiveRadioProps,
  PrimitiveRadioSlots,
} from './PrimitiveRadio.props';

defineOptions({
  name: 'PrimitiveRadio',
});

defineProps<PrimitiveRadioProps>();

defineSlots<PrimitiveRadioSlots>();
</script>

<style lang="scss" module>
.radio {
  display: inline-flex;
  position: relative;

  transition: outline-color 0.2s linear, background-color 0.2s linear;
  color: var(--smed-base-07);

  outline: 2px solid var(--smed-base-03);
  outline-offset: -2px;
  border-radius: 100%;

  cursor: pointer;

  &_sm {
    @include strict-size(16px, 16px);

    --smed-radio-size: 16px;
  }

  &_md {
    @include strict-size(20px, 20px);

    --smed-radio-size: 20px;
  }

  &_lg {
    @include strict-size(24px, 24px);

    --smed-radio-size: 24px;
  }

  &_hovered:not(&_disabled):not(&_invalid):not(&_focused) {
    outline-color: var(--smed-base-02);
  }

  &_focused {
    outline-color: var(--smed-base-02);
  }

  &_disabled {
    outline-color: var(--smed-base-04);
    background-color: var(--smed-base-06);

    cursor: default;
  }

  &_checked {
    outline: calc(var(--smed-radio-size) / 4) solid var(--smed-primary);
    outline-offset: calc(var(--smed-radio-size) / -4);
    background-color: var(--smed-base-07);
  }

  &_checked.radio_disabled {
    outline-color: var(--smed-primary-light);
  }

  &_checked.radio_hovered:not(&_disabled):not(&_invalid) {
    outline-color: var(--smed-primary-hover);
  }

  &_checked.radio_focused:not(&_disabled):not(&_invalid) {
    outline-color: var(--smed-primary-active);
  }

  &_invalid {
    outline-color: var(--smed-error);
  }
}
</style>
