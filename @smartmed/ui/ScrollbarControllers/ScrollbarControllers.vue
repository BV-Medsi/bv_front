<template>
  <div :class="$style.root">
    <transition name="fade">
      <scrollbar-wrapper
        v-if="showVertical"
        :class="[
          $style.bar,
          $style.bar_vertical,
          showHorizontal && $style.bar_hashorizontal,
        ]"
      >
        <scrollbar-thumb direction="vertical" :class="$style.thumb" />
      </scrollbar-wrapper>
    </transition>

    <transition name="fade">
      <scrollbar-wrapper
        v-if="showHorizontal"
        :class="[
          $style.bar,
          $style.bar_horizontal,
          showVertical && $style.bar_hasvertical,
        ]"
      >
        <scrollbar-thumb direction="horizontal" :class="$style.thumb" />
      </scrollbar-wrapper>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ScrollbarControllers',
};
</script>

<script setup lang="ts">
import { ANIMATION_FRAME_EVENTS_TOKEN } from '@smartmed/ui/tokens';
import { useThrottleFn } from '@smartmed/utility/functions';
import { computed, inject, Ref, ref, watch } from 'vue';

import ScrollbarThumb from './ScrollbarThumb.vue';
import { SCROLLBAR_REF_TOKEN } from './scrollbarTokens';
import ScrollbarWrapper from './ScrollbarWrapper.vue';

const animationEvents = inject<Ref<number>>(ANIMATION_FRAME_EVENTS_TOKEN)!;
const scrollbarRef = inject<Ref<HTMLElement | null> | null>(
  SCROLLBAR_REF_TOKEN,
  null
);

const showVertical = ref(false);
const showHorizontal = ref(false);

const scrollbar = computed(
  () => (scrollbarRef && scrollbarRef.value) || document.documentElement
);

const handleShowControlls = () => {
  const { clientHeight, scrollHeight, clientWidth, scrollWidth } =
    scrollbar.value;

  showVertical.value = Math.ceil((clientHeight / scrollHeight) * 100) < 100;
  showHorizontal.value = Math.ceil((clientWidth / scrollWidth) * 100) < 100;
};

const throttledHandleShowControlls = useThrottleFn(handleShowControlls, 300);

watch(animationEvents, throttledHandleShowControlls, { immediate: true });
</script>

<style lang="scss" module>
.root {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  min-width: calc(100% - 1px);
  min-height: calc(100% - 1px);
  max-width: calc(100% - 1px);
  max-height: calc(100% - 1px);
  float: left;
  margin-right: calc(-100% + 1px);
  margin-inline-start: 0;
  margin-inline-end: calc(-100% + 1px);
  pointer-events: none;
}

.bar {
  position: absolute;
  right: 0;
  bottom: 0;
  pointer-events: auto;

  &_vertical {
    top: 0;
    width: 0.875rem;
  }

  &_horizontal {
    left: 0;
    height: 0.875rem;
  }

  &_hashorizontal {
    bottom: calc(0.75rem - 4px);
  }

  &_hasvertical {
    right: calc(0.75rem - 4px);
  }
}

.thumb {
  @include transition(all);

  position: absolute;
  border-radius: 64px;
  border: 4px solid transparent;
  cursor: pointer;
  pointer-events: auto;
  background: var(--smed-base-01);
  background-clip: content-box;
  box-sizing: border-box;
  transition-property: width, height;
  opacity: 0.2;

  &:hover {
    opacity: 0.24;
  }

  &:active {
    opacity: 0.48;
  }

  .bar_vertical & {
    right: 0;
    width: 14px;
  }

  .bar_horizontal & {
    bottom: 0;
    height: 14px;
  }
}
</style>
