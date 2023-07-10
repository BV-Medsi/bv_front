<template>
  <div>
    <button
      v-keyboard-focused
      type="button"
      :class="$style.button"
      @click="onClick"
    >
      <svg-icon name="arrow-back" size="sm" />
      <slot>Назад</slot>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BackButton',
};
</script>

<script setup lang="ts">
import SvgIcon from '@smartmed/ui/SvgIcon';
import { KeyboardFocusedDirective as vKeyboardFocused } from '@smartmed/utility/directives';
import { useAttrs } from 'vue';
import { useRouter } from 'vue-router';

import { BackButtonSlots } from './BackButton.props';

defineSlots<BackButtonSlots>();

const router = useRouter();
const attrs = useAttrs();

const hasHistory = () => window.history.length > 2;

const onClick = () => {
  if (attrs.onClick) {
    return;
  }

  if (hasHistory()) {
    router.back();
  } else {
    router.push('/');
  }
};
</script>

<style lang="scss" module>
.button {
  @include clearbutton;
  @include transition(color);
  @include smed-text_body-sm;
  @include smed-text_medium;

  display: flex;
  align-items: center;
  text-align: left;

  // safearea around button to make it easier to click
  margin: -12px;
  padding: 12px;

  border-radius: 12px;

  color: var(--smed-base-02);
  cursor: pointer;

  &:hover {
    color: var(--smed-base-03);
  }

  &:active {
    color: var(--smed-base-04);
  }
}
</style>
