<template>
  <base-input
    v-bind="props"
    :model-value="modelValue"
    :mask-options="inputPhoneMask"
    @update:modelValue="updateValue"
    @search-clear="updateValue('')"
  >
    <template #left="params">
      <slot v-if="hasLeftIcon" name="left" :size="params?.size" />
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
  name: 'InputPhone',
};
</script>

<script setup lang="ts">
import BaseInput from '@smartmed/ui/BaseInput';
import { inputPhoneMask } from '@smartmed/utility/maskito';
import { hasSlotContent } from '@smartmed/utility/vue';
import { computed, useSlots } from 'vue';

import {
  InputPhoneDefaultProps,
  InputPhoneEmits,
  InputPhoneProps,
  InputPhoneSlots,
} from './InputPhone.props';

const props = withDefaults(
  defineProps<InputPhoneProps>(),
  InputPhoneDefaultProps
);

const emit = defineEmits<InputPhoneEmits>();

defineSlots<InputPhoneSlots>();

const slots = useSlots();

const hasLeftIcon = computed(() => hasSlotContent(slots.left));
const hasLabel = computed(() => hasSlotContent(slots.label));
const hasDescription = computed(() => hasSlotContent(slots.description));

const updateValue = (value: string) => {
  emit('update:modelValue', value);
};
</script>
