<template>
  <div id="smed_table-bar-host">
    <div id="smed_table-bars"></div>
    <div id="smed_table-bar-overlayable">
      <transition name="fade">
        <div v-if="isOverlay" ref="overscrollRef" :class="$style.overlay" />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOverscroll } from '@smartmed/ui/use';
import { ref } from 'vue';

const overscrollRef = useOverscroll('all', (el: HTMLElement) => el);
const isOverlay = ref(false);

const showOverlay = () => {
  isOverlay.value = true;
};

const hideOverlay = () => {
  isOverlay.value = false;
};

defineExpose({
  isOverlay,
  showOverlay,
  hideOverlay,
});
</script>

<style lang="scss" module>
.overlay {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.4);
}
</style>
