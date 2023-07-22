<template>
  <base-input
    v-bind="$props"
    ref="baseInputExposed"
    :model-value="modelValue"
    @update:modelValue="onUpdate"
    @search-clear="onUpdate('')"
  >
    <template v-slot:left="params">
      <svg-icon name="search" :size="params?.size" />
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
  name: 'SearchInput',
};
</script>

<script setup lang="ts">
import BaseInput from '@smartmed/ui/BaseInput';
import SvgIcon from '@smartmed/ui/SvgIcon';
import { hasSlotContent } from '@smartmed/utility/vue';
import { computed, ref, useSlots } from 'vue';

import { BaseInputExpose } from '../BaseInput/BaseInput.props';
import {
  SearchInputDefaultProps,
  SearchInputEmits,
  SearchInputExpose,
  SearchInputProps,
  SearchInputSlots,
} from './SearchInput.props';

withDefaults(defineProps<SearchInputProps>(), SearchInputDefaultProps);

const emit = defineEmits<SearchInputEmits>();

defineSlots<SearchInputSlots>();

const slots = useSlots();

const baseInputExposed = ref<BaseInputExpose | null>(null);

const hasRightSlot = computed(() => slots.right && hasSlotContent(slots.right));
const hasValueContentSlot = computed(
  () => slots.valueContent && hasSlotContent(slots.valueContent)
);
const hasLabel = computed(() => hasSlotContent(slots.label));
const hasDescription = computed(() => hasSlotContent(slots.description));
const baseInputWrapper = computed(
  () => baseInputExposed.value?.wrapper ?? null
);

const onUpdate = (value: string) => {
  emit('update:modelValue', value);
};

const focus = () => {
  const value = baseInputExposed.value;

  value?.focus();
};

defineExpose<SearchInputExpose>({
  baseInputWrapper,
  focus,
});
</script>
