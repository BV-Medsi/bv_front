<template>
  <div ref="rootRef" :class="$style.root">
    <chips-item
      v-for="(item, index) in items"
      :id="`${id}_${index}`"
      :key="index"
      class="smed-space_right-2"
      :data-automation-id="`${dataAutomationItemPrefix}_${index}`"
      :icon="getIcon(item, index, icon)"
      :active="matcher(modelValue as T, item)"
      :rounded="rounded"
      :size="size"
      :removable="getRemovable(item, index, removable)"
      :disabled="disableItemHandler(item, index)"
      @click="onClick(item)"
      @remove="onRemove(item)"
    >
      <slot :item="item" :active="matcher(modelValue as T, item)">
        {{ item }}
      </slot>
    </chips-item>
  </div>
</template>

<script setup lang="ts" generic="T, U = T">
import ChipsItem from '@smartmed/ui/ChipsItem';
import { getUniqElementId } from '@smartmed/utility/strings';
import { ref, toRefs, watch } from 'vue';

import {
  ChipsDefaultProps,
  ChipsEmits,
  ChipsExpose,
  ChipsProps,
  ChipsSlots,
} from './Chips.props';

defineOptions({
  name: 'Chips',
});

const props = withDefaults(
  defineProps<ChipsProps<T, U>>(),
  // @ts-expect-error Пока не справляется vue с generic типами в withDefaults
  ChipsDefaultProps
);

const emit = defineEmits<ChipsEmits<U>>();

defineSlots<ChipsSlots<U>>();

const { modelValue, items, matcher } = toRefs(props);

const rootRef = ref<HTMLElement | null>(null);
const id = getUniqElementId();

const getRemovable = (
  item: U,
  index: number,
  removable: ChipsProps<T, U>['removable']
) => {
  if (typeof removable === 'function') {
    return removable(item, index);
  }

  return removable;
};

const getIcon = (item: U, index: number, icon?: ChipsProps<T, U>['icon']) => {
  if (typeof icon === 'function') {
    return icon(item, index);
  }

  return icon;
};

const onClick = (item: U) => {
  emit('update:modelValue', item);
};

const onRemove = (item: U) => {
  emit('remove', item);
};

const scrollTo = (index: number) => {
  const element = rootRef.value?.querySelector(`#${id}_${index}`);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }
};

watch(
  [modelValue, items, rootRef],
  ([value, _items, root]) => {
    if (!root) {
      return;
    }

    const index = (_items as U[]).findIndex((item) =>
      props.matcher?.(value as T, item)
    );

    if (index !== -1) {
      scrollTo(index);
    }
  },
  { immediate: true }
);

defineExpose<ChipsExpose>({
  scrollTo,
});
</script>

<style lang="scss" module>
.root {
  @include hide-scroll;

  display: inline-flex;
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: auto;

  white-space: nowrap;
  margin-right: calc(var(--smed-space) * -2);
}
</style>
