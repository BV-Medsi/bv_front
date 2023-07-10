<template>
  <div
    ref="scrollbarRef"
    :data-automation-id="dataAutomationId"
    :class="[$style.root, legacy && $style.root_legacy]"
  >
    <scrollbar-controllers v-if="showControlls" />

    <div :class="$style.content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Scrollbar',
};
</script>

<script setup lang="ts">
import ScrollbarControllers from '@smartmed/ui/ScrollbarControllers';
import { isFirefox, isIOS } from '@smartmed/utility/dom/api/isMobile';
import { windowCSS } from '@smartmed/utility/dom/api/windowCss';
import { provide, ref } from 'vue';

import { SCROLLBAR_REF_TOKEN } from '../ScrollbarControllers/scrollbarTokens';
import {
  ScrollbarDefaultProps,
  ScrollbarExposed,
  ScrollbarProps,
  ScrollbarSlots,
} from './Scrollbar.props';

withDefaults(defineProps<ScrollbarProps>(), ScrollbarDefaultProps);

defineSlots<ScrollbarSlots>();

const scrollbarRef = ref<HTMLElement | null>(null);
const legacy =
  !windowCSS.supports('position', 'sticky') ||
  (isFirefox() && !windowCSS.supports('scrollbar-width', 'none'));

const showControlls = !isIOS() && !legacy;

provide(SCROLLBAR_REF_TOKEN, scrollbarRef);

defineExpose<ScrollbarExposed>({ native: scrollbarRef });
</script>

<style lang="scss" module>
.root {
  position: relative;
  z-index: 0;
  display: flex;
  overflow: auto;

  &:not(.root_legacy) {
    @include hide-scroll;
  }

  &_legacy {
    @include customscroll;

    overflow: overlay;
  }
}

.content {
  position: relative;
  z-index: 0;

  flex: 1;
  flex-basis: auto;
  width: 100%;
  height: max-content;
}
</style>
