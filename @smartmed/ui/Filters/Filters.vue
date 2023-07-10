<template>
  <div :class="$style.root">
    <chips-item
      v-for="(item, index) in items"
      :key="index"
      class="smed-space_right-2 smed-space_bottom-2"
      :active="getIsActive(modelValue, item, matcher)"
      :icon="getIcon(item, index, icon)"
      :size="size"
      :rounded="rounded"
      :data-automation-id="`${dataAutomationItemPrefix}_${index}`"
      :disabled="disableItemHandler(item, index)"
      @click="onToggle(modelValue, item, matcher)"
    >
      <slot :item="item" :active="getIsActive(modelValue, item, matcher)">
        {{ item }}
      </slot>
    </chips-item>
  </div>
</template>

<script setup lang="ts" generic="T, U = T extends Array<infer K> ? K : never">
import ChipsItem from '@smartmed/ui/ChipsItem';
import { toRefs } from 'vue';

import {
  FiltersDefaultProps,
  FiltersEmits,
  FiltersProps,
  FiltersSlots,
} from './Filters.props';

defineOptions({
  name: 'Filters',
});

const props = withDefaults(defineProps<FiltersProps<U>>(), FiltersDefaultProps);

const emit = defineEmits<FiltersEmits<U>>();

defineSlots<FiltersSlots<U>>();

const { modelValue } = toRefs(props);

const getIcon = (item: U, index: number, icon: FiltersProps<U>['icon']) => {
  if (typeof icon === 'function') {
    return icon(item, index);
  }

  return icon;
};

const getIsActive = (
  value: U[],
  item: U,
  matcher: NonNullable<FiltersProps<U>['matcher']>
) => {
  return !!value.find((i) => matcher(i, item));
};

const onToggle = (
  value: U[],
  item: U,
  matcher: NonNullable<FiltersProps<U>['matcher']>
) => {
  const nextValue = getIsActive(value, item, matcher)
    ? value.filter((i) => !matcher(i, item))
    : [...value, item];

  emit('update:modelValue', nextValue);
};
</script>

<style lang="scss" module>
.root {
  display: inline-flex;
  flex-wrap: wrap;

  margin-bottom: calc(var(--smed-space) * -2);
  margin-right: calc(var(--sm-space) * -2);
}
</style>
