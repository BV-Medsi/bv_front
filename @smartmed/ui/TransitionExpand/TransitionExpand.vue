<template>
  <div
    ref="expandRef"
    :class="[$style.expand, opened && $style.expand_opened]"
    :style="style"
    @transitionend="onTransitionend"
  >
    <transition name="fade">
      <slot v-if="renderContent" />
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TransitionExpand',
};
</script>

<script setup lang="ts">
import { computed, onMounted, ref, toRefs, VNodeRef, watch } from 'vue';

import {
  TransitionExpandDefaultProps,
  TransitionExpandProps,
} from './TransitionExpand.props';

const props = withDefaults(
  defineProps<TransitionExpandProps>(),
  TransitionExpandDefaultProps
);

const { opened, duration } = toRefs(props);

const renderContent = ref(opened.value);

const expandRef = ref<VNodeRef | null>(null);

const height = ref(0);
const initialize = ref(false);

const style = computed(() => {
  const _height = height.value;
  const _duration = duration.value;

  const value = initialize.value ? (_height > 1000 ? 400 : _duration) : 0;

  return {
    transitionDuration: `${value}ms`,
    height: opened.value ? `${_height}px` : '0px',
  };
});

onMounted(() => {
  if (expandRef.value && renderContent.value) {
    height.value = expandRef.value.scrollHeight;
  }

  setTimeout(() => {
    initialize.value = true;
  });
});

watch(opened, (isExpanding) => {
  if (isExpanding) {
    renderContent.value = true;
  }

  requestAnimationFrame(() => {
    if (isExpanding) {
      height.value = 0;

      requestAnimationFrame(() => {
        height.value = expandRef.value?.scrollHeight;
      });
    } else {
      height.value = expandRef.value?.scrollHeight;

      requestAnimationFrame(() => {
        height.value = 0;
      });
    }
  });
});

function onTransitionend(event: TransitionEvent) {
  const condition =
    event.target === expandRef.value && event.propertyName === 'height';

  if (!condition) {
    return;
  }

  if (!opened.value) {
    if (expandRef.value?.style.height === '0px') {
      renderContent.value = false;
    }
  }
}
</script>

<style lang="scss" module>
.expand {
  @include transition(all, 0.2s, 'ease-in-out');

  will-change: height;
  transform: translate(0);
  overflow: hidden;

  &_opened {
    overflow: initial;
  }
}
</style>
