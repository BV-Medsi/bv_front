<template>
  <label
    v-hovered="{
      onEvent: onHover,
    }"
    :class="[$style.label, $style['label_' + size]]"
    :disabled="computedDisabled"
    :for="id"
  >
    <div
      :class="[
        $style.checkbox,
        $style['checkbox_' + size],
        modelValue !== false && $style.checkbox_checked,
        computedInvalid && $style.checkbox_invalid,
        computedDisabled && $style.checkbox_disabled,
        computedHovered && $style.checkbox_hovered,
      ]"
    >
      <svg-icon v-if="modelValue !== false" :size="size" :name="iconName" />

      <input
        :id="id"
        ref="native"
        type="checkbox"
        :class="$style.native"
        :checked="!!modelValue"
        :disabled="computedDisabled"
        @change="onChange"
      />
    </div>

    <span v-if="hasContent">
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script lang="ts">
export default {
  name: 'BaseCheckbox',
};
</script>

<script setup lang="ts">
import SvgIcon from '@smartmed/ui/SvgIcon';
import {
  useControlDisabled,
  useControlInvalid,
  useInteractive,
} from '@smartmed/ui/use';
import { HoveredDirective as vHovered } from '@smartmed/utility/directives';
import { hasSlotContent } from '@smartmed/utility/vue';
import { computed, ref, toRefs, useSlots } from 'vue';

import {
  BaseCheckboxDefaultProps,
  BaseCheckboxEmits,
  BaseCheckboxProps,
  BaseCheckboxSlots,
} from './BaseCheckbox.props';

const props = withDefaults(
  defineProps<BaseCheckboxProps>(),
  BaseCheckboxDefaultProps
);

const emit = defineEmits<BaseCheckboxEmits>();

defineSlots<BaseCheckboxSlots>();

const { modelValue, isError, disabled, pseudoHovered, label } = toRefs(props);

const slots = useSlots();
const { id, native, focus, blur } = useInteractive();
const computedInvalid = useControlInvalid(isError);
const computedDisabled = useControlDisabled(disabled);

const hovered = ref(false);

const iconName = computed(() => {
  return modelValue.value === null ? 'minus' : 'check';
});

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

defineExpose({
  focus,
  blur,
});
</script>

<style lang="scss" module>
@import './BaseCheckbox.scss';
</style>
