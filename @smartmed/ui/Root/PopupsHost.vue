<template>
  <div
    id="smed_popups-host"
    :class="[
      $style.host,
      isShown && $style.host_overlay,
      animation && $style.host_animation,
    ]"
  />
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, ref, watch } from 'vue';

export type PopupsHostService = {
  registerPopup: (id: symbol) => void;
  setOpen: (id: symbol, value: boolean) => void;
  remove: (id: symbol) => void;
};

export default defineComponent({
  name: 'PopupsHost',
  setup() {
    const popups = new Map<symbol, Date | null>();
    const isShown = ref(false);
    const animation = ref(false);
    let timeout: ReturnType<typeof setTimeout> | null = null;

    watch(isShown, (value) => {
      if (value) {
        timeout = setTimeout(() => (animation.value = true));
      } else {
        if (timeout) {
          clearTimeout(timeout);

          timeout = null;
        }

        animation.value = false;
      }
    });

    const registerPopup = (id: symbol) => {
      popups.set(id, null);
    };

    const setOpen = (id: symbol, value: boolean) => {
      popups.set(id, value ? new Date() : null);

      isShown.value = Array.from(popups.values()).some((m) => m);
    };

    const remove = (id: symbol) => {
      popups.delete(id);

      isShown.value = Array.from(popups.values()).some(Boolean);
    };

    onBeforeUnmount(() => {
      if (timeout) {
        clearTimeout(timeout);
      }
    });

    return {
      isShown,
      animation,
      registerPopup,
      setOpen,
      remove,
    };
  },
});
</script>

<style lang="scss" module>
.host {
  position: fixed;
  left: 0;
  bottom: 0;

  & > section:last-of-type {
    z-index: 1;
  }

  &_overlay {
    &:before {
      @include transition(opacity);

      content: '';
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;

      background-color: rgba(0, 0, 0, 0.4);
      opacity: 0;
      overflow: auto;
      overflow: overlay;

      pointer-events: none;
      touch-action: none;
    }
  }

  &_animation {
    &:before {
      opacity: 1;
    }
  }
}
</style>
