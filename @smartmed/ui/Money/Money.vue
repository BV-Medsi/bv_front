<template>
  <span>{{ money }}</span>
</template>

<script lang="ts">
export default {
  name: 'Money',
};
</script>

<script setup lang="ts">
import { CHAR_NO_BREAK_SPACE, CHAR_RUBLE } from '@smartmed/utility/consts';
import { formatNumber } from '@smartmed/utility/numbers';
import { computed, toRefs } from 'vue';

import { MoneyProps } from './Money.props';

const props = defineProps<MoneyProps>();

const { value } = toRefs(props);

const money = computed(() => {
  const _value = value.value;

  if (_value === null) {
    return '';
  }

  return `${formatNumber(_value)}${CHAR_NO_BREAK_SPACE}${CHAR_RUBLE}`;
});
</script>
