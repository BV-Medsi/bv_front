<template>
  <component
    :is="currentTag"
    :alt="code || ''"
    :title="title"
    :src="flagSrc"
    :class="$style.flag"
    :width="16"
    :height="12"
  />
</template>

<script setup lang="ts">
import { internationalCountries } from '@smartmed/utility/consts';
import { computed, toRefs } from 'vue';

import { CountryFlagDefaultProps, CountryFlagProps } from './CountryFlag.props';

defineOptions({
  name: 'CountryFlag',
});

const props = withDefaults(
  defineProps<CountryFlagProps>(),
  CountryFlagDefaultProps
);

const { code } = toRefs(props);

const title = computed(() => {
  const value = code.value;

  if (!value) {
    return '';
  }

  const item = internationalCountries.find((item) => item.id === value);

  return item?.title || '';
});

const flagSrc = computed(() => {
  const value = code.value;

  return value ? `https://static.medsi.pro/images/country/${value}.png` : '';
});

const currentTag = computed(() => {
  return code.value ? 'img' : 'div';
});
</script>

<style lang="scss" module>
.flag {
  @include strict-size(16px, 12px);
  display: inline-block;
  border-radius: 2px;
  overflow: hidden;
  background-color: var(--smed-base-04);
}
</style>
