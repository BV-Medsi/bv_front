<template>
  <div
    :class="[$style.list, !withoutAnimation && $style.list_animated]"
    :style="listStyle"
  >
    <div
      v-for="(item, index) in computedItems"
      :key="item.style.transform"
      :class="$style.item"
      :style="item.style"
    >
      <slot
        :item="item.current"
        :is-active="modelValue === 0 ? index === 0 : index === 1"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RotatableList',
};
</script>

<script setup lang="ts" generic="T">
import { clamp } from '@smartmed/utility/numbers';
import { computed, ref, toRefs, watch } from 'vue';

import {
  RotatableListDefaultProps,
  RotatableListProps,
  RotatableListSlots,
} from './RotatableList.props';

const props = withDefaults(
  defineProps<RotatableListProps<T>>(),
  RotatableListDefaultProps
);

defineSlots<RotatableListSlots<T>>();

const { modelValue, items, width, height } = toRefs(props);

const prevValue = ref(modelValue.value);

const computedItems = computed(() => {
  const clampedIndex = clamp(modelValue.value - 1, 0, items.value.length - 1);
  const correction = modelValue.value === 0 ? 0 : -1;

  return items.value
    .slice(clampedIndex, modelValue.value + 2)
    .map((item, index) => {
      const rotate = 90 * (modelValue.value + index + correction);

      return {
        current: item,
        style: {
          transform: `rotateY(${rotate}deg) translateZ(${width.value / 2}px)`,
        },
      };
    });
});

const listStyle = computed(() => {
  return {
    width: `${width.value}px`,
    height: `${height.value}px`,
    transform: `rotateY(${-90 * modelValue.value}deg)`,
  };
});

const withoutAnimation = computed(
  () => Math.abs(modelValue.value - prevValue.value) !== 1
);

watch(modelValue, (_, prev) => {
  prevValue.value = prev;
});
</script>

<style lang="scss" module>
.list {
  position: relative;

  transform-style: preserve-3d;

  &_animated {
    @include transition(transform);
  }
}

.item {
  @include rotatableListItem;
}
</style>
