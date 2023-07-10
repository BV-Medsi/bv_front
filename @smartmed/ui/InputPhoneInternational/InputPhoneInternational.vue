<template>
  <input-phone
    v-bind="props"
    :model-value="modelValue"
    :mask-options="inputPhoneInternationalMask"
    :has-cleaner="computedCleaner"
    @update:modelValue="onUpdate"
  >
    <template #left>
      <country-flag :code="country" />
    </template>

    <template v-slot:label>
      <slot v-if="hasLabel" name="label" />
    </template>

    <template v-slot:description>
      <slot v-if="hasDescription" name="description" />
    </template>
  </input-phone>
</template>

<script setup lang="ts">
import CountryFlag from '@smartmed/ui/CountryFlag';
import InputPhone from '@smartmed/ui/InputPhone';
import { internationalCountries } from '@smartmed/utility/consts';
import { inputPhoneInternationalMask } from '@smartmed/utility/maskito';
import { getPhoneNumber } from '@smartmed/utility/strings';
import { hasSlotContent } from '@smartmed/utility/vue';
import { computed, toRefs, useSlots } from 'vue';

import {
  InputPhoneInternationalDefaultProps,
  InputPhoneInternationalEmits,
  InputPhoneInternationalProps,
  InputPhoneInternationalSlots,
} from './InputPhoneInternational.props';

defineOptions({
  name: 'InputPhoneInternational',
});

const props = withDefaults(
  defineProps<InputPhoneInternationalProps>(),
  InputPhoneInternationalDefaultProps
);

const emit = defineEmits<InputPhoneInternationalEmits>();

defineSlots<InputPhoneInternationalSlots>();

const { modelValue } = toRefs(props);

const prefixes = internationalCountries.map(({ prefix }) => prefix);
const prefixesWithoutPlus = prefixes.map((prefix) => prefix.replace('+', ''));

const slots = useSlots();
const hasLabel = computed(() => hasSlotContent(slots.label));
const hasDescription = computed(() => hasSlotContent(slots.description));

const country = computed(() => {
  const value = modelValue.value;

  const digitsOnly = getPhoneNumber(value);
  const withPlus = `+${digitsOnly}`;

  if (digitsOnly.startsWith('77') || digitsOnly.startsWith('76')) {
    return 'KZ';
  }

  if (digitsOnly.startsWith('7')) {
    return 'RU';
  }

  const country = internationalCountries.find(({ prefix }) =>
    withPlus.startsWith(prefix)
  );

  return country ? country.id : null;
});

const computedCleaner = computed(() => {
  const value = modelValue.value;
  const valueLength = value.length;
  const hasPlus = value.startsWith('+');
  const source = hasPlus ? prefixes : prefixesWithoutPlus;

  const onlyPrefix = source.some(
    (prefix) => valueLength <= prefix.length && prefix.startsWith(value)
  );

  return !onlyPrefix;
});

const onUpdate = (value: string) => {
  emit('update:modelValue', value);
};
</script>
