<template>
  <number-input
    v-bind="props"
    data-automation-id="smed-input-money"
    @update:modelValue="updateValue"
  >
    <template v-slot:label>
      <slot v-if="hasLabel" name="label" />
    </template>

    <template v-slot:description>
      <slot v-if="hasDescription" name="description" />
    </template>
  </number-input>
</template>

<script lang="ts">
export default {
  name: 'InputMoney',
};
</script>

<script setup lang="ts">
import NumberInput from '@smartmed/ui/NumberInput';
import { hasSlotContent } from '@smartmed/utility/vue/hasSlotContent';
import { computed, useSlots } from 'vue';

import {
  InputMoneyDefaultProps,
  InputMoneyEmits,
  InputMoneyProps,
} from './InputMoney.props';

const props = withDefaults(
  defineProps<InputMoneyProps>(),
  InputMoneyDefaultProps
);

const emit = defineEmits<InputMoneyEmits>();

const slots = useSlots();
const hasLabel = computed(() => hasSlotContent(slots.label));
const hasDescription = computed(() => hasSlotContent(slots.description));

const updateValue = (value: number | null) => {
  emit('update:modelValue', value);
};
</script>
