<template>
  <number-input
    v-bind="props"
    size="lg"
    right-slot-padding="12px 16px 12px 0"
    :model-value="modelValue"
    :input-styles="InputBonusInputStyle"
    @update:model-value="onUpdate"
  >
    <template v-slot:label>
      <slot v-if="hasLabelSlot" name="label" />
    </template>

    <template v-slot:description>
      <slot v-if="hasDescriptionSlot" name="description" />
    </template>

    <template #right>
      <base-button
        v-if="showBonusButton"
        rounded
        color="grey"
        data-automation-id="smed-input-bonus-all-bonuses"
        size="sm"
        :disabled="computedDisabled || readonly"
        @click="onAllBonuses"
        >Все бонусы</base-button
      >
    </template>
  </number-input>
</template>

<script setup lang="ts">
import BaseButton from '@smartmed/ui/BaseButton';
import NumberInput from '@smartmed/ui/NumberInput';
import { useControlDisabled } from '@smartmed/ui/use';
import { hasSlotContent } from '@smartmed/utility/vue';
import { computed, toRefs, useSlots } from 'vue';

import {
  InputBonusDefaultProps,
  InputBonusEmits,
  InputBonusInputStyle,
  InputBonusProps,
  InputBonusSlots,
} from './InputBonus.props';

defineOptions({
  name: 'InputBonus',
});

const props = withDefaults(
  defineProps<InputBonusProps>(),
  InputBonusDefaultProps
);

const emit = defineEmits<InputBonusEmits>();

defineSlots<InputBonusSlots>();

const { max, disabled, readonly } = toRefs(props);

const slots = useSlots();
const computedDisabled = useControlDisabled(disabled);

const hasLabelSlot = computed(() => hasSlotContent(slots.label));
const hasDescriptionSlot = computed(() => hasSlotContent(slots.description));

const showBonusButton = computed(() => {
  const value = max && max.value;

  return typeof value === 'number' && value > 0;
});

const onUpdate = (value: number | null) => {
  emit('update:modelValue', value);
};

const onAllBonuses = () => {
  const allow =
    showBonusButton.value && !computedDisabled.value && !readonly.value;

  if (allow) {
    onUpdate(max!.value as number);
  }
};
</script>
