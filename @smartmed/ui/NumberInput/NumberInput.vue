<template>
  <base-input
    v-bind="props"
    :mask-options="computedMask"
    :model-value="(transformed as any)"
    :inputmode="computedInputmode"
    @update:modelValue="emitValue"
    @search-clear="emitValue('')"
  >
    <template v-slot:left="params">
      <slot v-if="hasLeftSlot" name="left" :size="params?.size" />
    </template>

    <template v-slot:valueContent>
      <slot v-if="hasValueContentSlot" name="valueContent" />
    </template>

    <template v-slot:right>
      <slot v-if="hasRightSlot" name="right" />
    </template>

    <template v-slot:label>
      <slot v-if="hasLabel" name="label" />
    </template>

    <template v-slot:description>
      <slot v-if="hasDescription" name="description" />
    </template>
  </base-input>
</template>

<script lang="ts">
export default {
  name: 'NumberInput',
};
</script>

<script setup lang="ts">
import { maskitoTransform } from '@maskito/core';
import {
  maskitoNumberOptionsGenerator,
  maskitoParseNumber,
} from '@maskito/kit';
import BaseInput from '@smartmed/ui/BaseInput';
import { hasSlotContent } from '@smartmed/utility/vue';
import { computed, ref, toRefs, useSlots, watch } from 'vue';

import {
  NumberInputDefaultProps,
  NumberInputEmits,
  NumberInputProps,
  NumberInputSlots,
} from './NumberInput.props';

const props = withDefaults(
  defineProps<NumberInputProps>(),
  NumberInputDefaultProps
);

const emit = defineEmits<NumberInputEmits>();

defineSlots<NumberInputSlots>();

const { modelValue, max, precision, thousandSeparator, decimalSeparator, min } =
  toRefs(props);

const slots = useSlots();

// to correct position decoratorPostfix with precision enabled
const originalValue = ref<string>(String(modelValue.value ?? ''));

const hasLeftSlot = computed(() => slots.left && hasSlotContent(slots.left));
const hasValueContentSlot = computed(
  () => slots.valueContent && hasSlotContent(slots.valueContent)
);
const hasRightSlot = computed(() => slots.right && hasSlotContent(slots.right));
const hasLabel = computed(() => hasSlotContent(slots.label));
const hasDescription = computed(() => hasSlotContent(slots.description));

const computedMask = computed(() => {
  const _max = max?.value;
  const _precision = precision?.value;
  const _thousandSeparator = thousandSeparator.value;
  const _decimalSeparator = decimalSeparator.value;
  const _min = min?.value;

  return maskitoNumberOptionsGenerator({
    min: _min,
    max: _max,
    precision: _precision,
    thousandSeparator: _thousandSeparator,
    decimalSeparator: _decimalSeparator,
  });
});

const transformed = computed(() => {
  const value = originalValue.value;
  const mask = computedMask.value;

  return maskitoTransform(String(value ?? ''), mask);
});

const computedInputmode = computed(() => {
  const _precision = precision?.value;

  return _precision ? 'decimal' : 'numeric';
});

const toNumber = (value: string): number | null => {
  if (!value) {
    return null;
  }

  const _decimalSeparator = decimalSeparator.value;

  const number = maskitoParseNumber(value, _decimalSeparator);

  return Number.isNaN(number) ? null : number;
};

const emitValue = (value: unknown) => {
  const correct = value as string;

  originalValue.value = correct;

  emit('update:modelValue', toNumber(correct));
};

watch(modelValue, (value) => {
  const isSame = toNumber(originalValue.value) === value;

  if (!isSame) {
    originalValue.value = String(value ?? '');
  }
});
</script>
