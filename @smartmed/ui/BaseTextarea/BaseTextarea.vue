<template>
  <label :class="$style.textarea" :for="id">
    <span
      v-if="hasLabel"
      :class="[$style.inline, 'smed-space_bottom-1 smed-text_body-sm']"
    >
      <slot name="label">{{ label }}</slot>
    </span>

    <textarea
      :id="id"
      ref="native"
      :class="[
        $style.wrapper,
        'smed-text_body-xl',
        computedInvalid && $style.wrapper_error,
        computedDisabled && $style.wrapper_disabled,
        focused && $style.focus,
      ]"
      :placeholder="placeholder"
      :style="style"
      :disabled="computedDisabled"
      :value="stringify(modelValue)"
      @input="emitValue"
    >
    </textarea>

    <span
      v-if="hasDescription"
      :class="[
        'smed-space_top-1 smed-text_body-sm',
        $style.inline,
        computedInvalid && $style.inline_invalid,
      ]"
    >
      <slot name="description">{{ description }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
export default {
  name: 'BaseTextarea',
};
</script>

<script setup lang="ts" generic="T extends string | number | null">
import {
  useControlDisabled,
  useControlInvalid,
  useInteractive,
  useModelModifiers,
} from '@smartmed/ui/use';
import { hasSlotContent } from '@smartmed/utility/vue/hasSlotContent';
import { computed, toRefs, useSlots } from 'vue';

import {
  BaseTextareaDefaultProps,
  BaseTextareaEmits,
  BaseTextareaProps,
  BaseTextareaSlots,
} from './BaseTextarea.props';

const props = withDefaults(
  defineProps<BaseTextareaProps<T>>(),
  // @ts-expect-error Пока не справляется vue с generic типами в withDefaults
  BaseTextareaDefaultProps
);
const emit = defineEmits<BaseTextareaEmits<T>>();

defineSlots<BaseTextareaSlots>();

const { modelModifiers, disabled, indentRight, isError, label, description } =
  toRefs(props);

const slots = useSlots();
const modifiers = useModelModifiers(modelModifiers!.value);
const interactive = useInteractive();

const computedDisabled = useControlDisabled(disabled);
const computedInvalid = useControlInvalid(isError);

const focused = interactive.focused;
const native = interactive.native;
const id = interactive.id;

const hasLabel = computed(
  () => (label && label.value) || hasSlotContent(slots.label)
);
const hasDescription = computed(
  () => (description && description.value) || hasSlotContent(slots.description)
);

const emitValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.value;

  if (disabled.value) {
    return;
  }

  emit('update:modelValue', modifiers.modify(value));
};

const stringify = (value: unknown) => `${value || ''}`;

const style = computed(() => {
  return {
    paddingRight: indentRight!.value ? `${indentRight!.value}px` : undefined,
  };
});

defineExpose({
  focus: interactive.focus,
  blur: interactive.blur,
});
</script>

<style lang="scss" module>
.wrapper {
  @include hide-scroll;

  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  resize: none;
  width: 100%;
  height: 88px;

  background: var(--smed-base-07);
  border: 1px solid var(--smed-base-03);
  border-radius: 6px;

  color: var(--smed-base-01);
  padding: 10px 12px;

  &:hover {
    border-color: var(--smed-base-02);
  }

  &:focus,
  &.focus {
    border-color: var(--smed-primary);
  }

  &_error {
    border-color: var(--smed-error);

    &:hover,
    &:focus,
    &.focus {
      border-color: var(--smed-error);
    }
  }

  &_disabled {
    @include disabled(0.6);
  }
}

.inline {
  display: inline-flex;
  align-items: center;
  column-gap: 4px;
  color: var(--smed-base-02);

  &_invalid {
    color: var(--smed-error);
  }
}
</style>
