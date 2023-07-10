<template>
  <div ref="host">
    <slot :progress="progressEvents" :duration="durationEvents" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'EventTunnel',
};
</script>

<script setup lang="ts">
import {
  EVENT_TUNNEL_CONTROLLER_TOKEN,
  EVENT_TUNNEL_PROGRESS_TOKEN,
  EVENT_TUNNEL_TOKEN,
} from '@smartmed/ui/tokens';
import { animationBasedSetInterval } from '@smartmed/utility/dom/timers';
import { noop } from '@smartmed/utility/functions/noop';
import { clamp } from '@smartmed/utility/numbers';
import { onBeforeUnmount, provide, readonly, ref, toRefs, watch } from 'vue';

import {
  EventTunnelDefaultProps,
  EventTunnelProps,
  EventTunnelSlots,
} from './EventTunnel.props';

const props = withDefaults(
  defineProps<EventTunnelProps>(),
  EventTunnelDefaultProps
);

defineSlots<EventTunnelSlots>();

const { duration, preventOntouch, eventsCount, isEnable } = toRefs(props);

const durationEvents = ref([duration.value, 0] as [number, number]);
const progressEvents = ref(0);

let progressInterval: { stop: () => void } = { stop: noop };

const startTime = ref(performance.now());
const host = ref<HTMLElement | null>(null);

const startEmits = () => {
  startTime.value = performance.now();

  progressInterval = animationBasedSetInterval((currentTime) => {
    const diff = currentTime - startTime.value;

    if (diff >= duration.value) {
      durationEvents.value = [duration.value, durationEvents.value[1] + 1];
      progressEvents.value = 0;

      startTime.value = currentTime;
    } else {
      progressEvents.value = clamp(diff / duration.value, 0, 1);
    }
  }, duration.value / eventsCount.value);
};

const stopEmits = () => {
  progressInterval.stop();
};

const preventEmits = () => stopEmits();
const initEmits = () => {
  if (isEnable.value) {
    stopEmits();
    startEmits();
  }
};

onBeforeUnmount(() => {
  stopEmits();

  host.value && unregisterEvents(host.value);
});

const registerEvents = (_host: HTMLElement) => {
  _host.addEventListener('mouseenter', preventEmits, {
    passive: true,
  });
  _host.addEventListener('touchstart', preventEmits, {
    passive: true,
  });
  _host.addEventListener('touchend', initEmits, { passive: true });
  _host.addEventListener('mouseleave', initEmits, { passive: true });
};

const unregisterEvents = (_host: HTMLElement) => {
  _host.removeEventListener('mouseenter', preventEmits);
  _host.removeEventListener('touchstart', preventEmits);
  _host.removeEventListener('touchend', initEmits);
  _host.removeEventListener('mouseleave', initEmits);
};

watch(duration, (value) => {
  stopEmits();

  if (value) {
    startEmits();
  }
});

watch(
  isEnable,
  (value) => {
    if (!value) {
      stopEmits();
    } else {
      startEmits();
    }
  },
  { immediate: true }
);

provide(EVENT_TUNNEL_TOKEN, readonly(durationEvents));
provide(EVENT_TUNNEL_PROGRESS_TOKEN, readonly(progressEvents));
provide(EVENT_TUNNEL_CONTROLLER_TOKEN, {
  reset: () => {
    startTime.value = performance.now();
  },
});

watch(
  [preventOntouch, host],
  ([prevent, _host]) => {
    if (!_host) {
      return;
    }

    if (prevent) {
      registerEvents(_host);
    } else {
      unregisterEvents(_host);
    }
  },
  { immediate: true }
);
</script>
