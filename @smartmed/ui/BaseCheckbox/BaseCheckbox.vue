<template>
  <label
    v-hovered="hoveredProps"
    :class="[$style.label, $style['label_' + size]]"
    :disabled="computedDisabled"
    :for="id"
  >
    <primitive-checkbox
      :value="modelValue"
      :invalid="computedInvalid"
      :disabled="computedDisabled"
      :hovered="computedHovered"
      :size="size"
      :focused="focused"
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
  BaseCheckboxDefaultProps,
  BaseCheckboxEmits,
  BaseCheckboxProps,
  BaseCheckboxSlots,
} from './BaseCheckbox.props';

defineOptions({
  name: 'BaseCheckbox',
});

const props = withDefaults(
  defineProps<BaseCheckboxProps>(),
  BaseCheckboxDefaultProps
);

const emit = defineEmits<BaseCheckboxEmits>();

defineSlots<BaseCheckboxSlots>();

const { modelValue, isError, disabled, pseudoHovered, label } = toRefs(props);

const slots = useSlots();
const { id, native, focus, blur, focused } = useInteractive();
const computedInvalid = useControlInvalid(isError);
const computedDisabled = useControlDisabled(disabled);

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
@import './BaseCheckbox.scss';
</style>
