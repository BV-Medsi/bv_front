<template>
  <transition v-if="!mobile" name="fade">
    <scrollbar-controllers
      v-if="!popupsHostRef?.isShown && !tableBarHostRef?.isOverlay"
      :class="$style.scrollbar"
    />
  </transition>

  <slot />

  <table-bar-host ref="tableBarHostRef" :class="$style.host" />

  <popups-host ref="popupsHostRef" :class="$style.host" />

  <alerts-host ref="alertsHostRef" />

  <dropdown-host ref="dropdownHostRef" :class="$style.host" />

  <div id="smed_hints-host" ref="hintsHostRef" :class="$style.host" />
</template>

<script lang="ts">
export default {
  name: 'Root',
};
</script>

<script setup lang="ts">
import ScrollbarControllers from '@smartmed/ui/ScrollbarControllers';
import { TableBarHostInstance } from '@smartmed/ui/TableBar/TableBar.props';
import {
  ALERTS_HOST_TOKEN,
  ANIMATION_FRAME_EVENTS_TOKEN,
  DROPDOWN_HOST_TOKEN,
  HINT_HOST_TOKEN,
  POPUPS_HOST_TOKEN,
  TABLE_BAR_HOST_TOKEN,
} from '@smartmed/ui/tokens';
import { AlertHostInstance } from '@smartmed/ui/types/alertsHost.type';
import { isMobile } from '@smartmed/utility/dom/api/isMobile';
import { provide, readonly, ref } from 'vue';

import AlertsHost from './AlertsHost.vue';
import DropdownHost from './DropdownHost.vue';
import PopupsHost from './PopupsHost.vue';
import { RootSlots } from './Root.props';
import TableBarHost from './TableBarHost.vue';

defineSlots<RootSlots>();

const alertsHostRef = ref<AlertHostInstance | null>(null);
const hintsHostRef = ref<HTMLElement | null>(null);
const popupsHostRef = ref<{ isShown: boolean } | null>(null);
const tableBarHostRef = ref<TableBarHostInstance | null>(null);
const dropdownHostRef = ref(null);
const animationEvents = ref(NaN);

const mobile = isMobile();

const callback = () => {
  animationEvents.value = requestAnimationFrame(callback);
};

animationEvents.value = requestAnimationFrame(callback);

provide(HINT_HOST_TOKEN, readonly(hintsHostRef));
provide(POPUPS_HOST_TOKEN, readonly(popupsHostRef));
provide(TABLE_BAR_HOST_TOKEN, readonly(tableBarHostRef));
provide(DROPDOWN_HOST_TOKEN, readonly(dropdownHostRef));
provide(ANIMATION_FRAME_EVENTS_TOKEN, readonly(animationEvents));
provide(ALERTS_HOST_TOKEN, readonly(alertsHostRef));
</script>

<style lang="scss" module>
.host {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
}

.scrollbar {
  position: fixed !important;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
}
</style>
