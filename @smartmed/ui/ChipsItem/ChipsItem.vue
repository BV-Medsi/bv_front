<template>
  <button
    v-keyboard
    :class="[
      'smed-text_body-md',
      $style.item,
      $style['item_' + size],
      rounded && $style.item_rounded,
      !disabled && active && ['smed-text_medium', $style.item_active],
      disabled && $style.item_disabled,
      !disabled && removable && $style.item_removable,
    ]"
    :disabled="disabled"
    :tabindex="disabled ? '-1' : '0'"
    @keydown.backspace="onRemove"
    @keydown.esc="onRemove"
  >
    <slot name="icon">
      <svg-icon v-if="icon" size="sm" :name="icon" />
    </slot>

    <slot />

    <button
      v-if="!disabled && removable"
      tabindex="-1"
      :class="[$style.removeIcon, $style['removeIcon_' + size]]"
      @click.prevent.stop="onRemove"
    >
      <svg-icon size="sm" name="close-filled" />
    </button>
  </button>
</template>

<script setup lang="ts">
import SvgIcon from '@smartmed/ui/SvgIcon';
import { KeyboardFocusedDirective as vKeyboard } from '@smartmed/utility/directives';
import { toRefs } from 'vue';

import {
  ChipsItemDefaultProps,
  ChipsItemEmits,
  ChipsItemProps,
  ChipsItemSlots,
} from './ChipsItem.props';

defineOptions({
  name: 'ChipsItem',
});

const props = withDefaults(
  defineProps<ChipsItemProps>(),
  ChipsItemDefaultProps
);

const emit = defineEmits<ChipsItemEmits>();

defineSlots<ChipsItemSlots>();

const { removable } = toRefs(props);

const onRemove = () => {
  if (removable.value) {
    emit('remove');
  }
};
</script>

<style lang="scss" module>
.item {
  @include clearbutton;
  @include transition(background-color);

  position: relative;
  display: flex;
  align-items: center;

  column-gap: 4px;

  border-radius: 8px;
  color: var(--smed-base-01);
  background-color: var(--smed-base-05);
  cursor: pointer;
  text-align: left;

  &_rounded {
    border-radius: 32px;
  }

  &_sm {
    padding: 5px 12px;
  }

  &_md {
    padding: 11px 16px;
  }

  &:not(&_disabled):not(&_active):hover {
    background-color: var(--smed-base-04);
  }

  &:not(&_disabled):not(&_active):active {
    background-color: var(--smed-base-03);
  }

  &_active {
    color: var(--smed-base-07);
    background-color: var(--smed-primary);

    &:hover {
      background-color: var(--smed-primary-hover);
    }

    &:active {
      background-color: var(--smed-primary-active);
    }
  }

  &_disabled {
    color: var(--smed-base-02);
    background-color: var(--smed-base-06);
    cursor: default;
  }

  &_removable#{&}_sm {
    padding-right: 32px;
  }

  &_removable#{&}_md {
    padding-right: 38px;
  }
}

.removeIcon {
  @include clearbutton;
  @include transition(background-color);

  position: absolute;
  right: 0;
  top: 50%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  color: inherit;
  border-bottom-right-radius: inherit;
  border-top-right-radius: inherit;
  transform: translateY(-50%);

  &:hover {
    background-color: rgba(var(--smed-base-01-rgb), 0.12);
  }

  &:active {
    background-color: rgba(var(--smed-base-01-rgb), 0.16);
  }

  &_sm {
    width: 26px;
  }

  &_md {
    width: 30px;
  }
}
</style>
