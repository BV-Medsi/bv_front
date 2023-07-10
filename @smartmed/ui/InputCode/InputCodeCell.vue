<template>
  <input
    v-hovered="{ onEvent: onSetHovered }"
    ref="nativeRef"
    type="text"
    inputmode="numeric"
    data-automation-id="smed-input-code-cell"
    :tabindex="disabled ? '-1' : tabindex"
    :value="modelValue"
    :disabled="disabled"
    :class="[
      $style.native,
      $style['native_' + size],
      focused && $style.native_focused,
      hovered && $style.native_hovered,
      invalid && $style.native_invalid,
      disabled && $style.native_disabled,
    ]"
    @paste="onPaste"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
    @keydown.backspace="onBackspace"
  />
</template>

<script setup lang="ts">
import { HoveredDirective as vHovered } from '@smartmed/utility/directives';
import { setNativeFocused } from '@smartmed/utility/dom/focus';
import { useMaskito } from '@smartmed/utility/maskito';
import { ref } from 'vue';

import { InputCodeProps } from './InputCode.props';

defineProps<{
  modelValue: number | null;
  size: InputCodeProps['size'];
  tabindex?: string;
  invalid?: boolean;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: number | null): void;
  (e: 'onFocus'): void;
  (e: 'onBackspace'): void;
  (e: 'onPaste', v: string | null): void;
}>();

const nativeRef = useMaskito({
  mask: /\d/,
});
const hovered = ref(false);
const focused = ref(false);

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const value = target.value;

  // mobile chrome only https://github.com/devfolioco/react-otp-input/issues/322#issuecomment-992499133
  if (value.length > 1) {
    emit('onPaste', value);
  } else {
    emit('update:modelValue', value ? Number(value) : null);
  }
};

const onFocus = () => {
  focused.value = true;

  emit('onFocus');
};

const onBlur = () => {
  focused.value = false;
};

const onBackspace = () => emit('onBackspace');

const onPaste = (event: ClipboardEvent) => {
  event.preventDefault();
  event.stopPropagation();

  const value = event.clipboardData?.getData('text');
  const digitsOnly = value ? value.replace(/\D/g, '') : null;

  emit('onPaste', digitsOnly);
};

const focus = () => {
  const value = nativeRef.value;

  value && setNativeFocused(value);
};

const onSetHovered = (value: boolean) => {
  hovered.value = value;
};

defineExpose({
  focus,
});
</script>

<style lang="scss" module>
.native {
  @include clearinput;
  @include smed-text_h2;
  @include transition(border-color);

  border-radius: 6px;
  border: 1px solid var(--smed-base-04);
  caret-color: var(--smed-primary);

  background-color: var(--smed-base-07);
  text-align: center;

  &_sm {
    @include strict-size(35px, 44px);
  }

  &_md {
    @include strict-size(40px, 56px);
  }

  &_hovered {
    border-color: var(--smed-base-02);
  }

  &_focused {
    border-color: var(--smed-primary);
  }

  &_invalid {
    border-color: var(--smed-error);
  }

  &_disabled {
    border-color: var(--smed-base-04);
    background-color: var(--smed-base-06);
  }
}
</style>
