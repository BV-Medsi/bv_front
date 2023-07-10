<template>
  <div id="smed-alerts-host" ref="elementRef">
    <div :class="$style.root">
      <transition-group
        tag="ui"
        name="smed-list-transition"
        :class="$style.container"
      >
        <alert
          v-for="item in alerts"
          :key="item.id"
          class="smed-space_bottom-4"
          :type="item.type"
          :content="item.content"
          :closable="item.closable"
          @close="close(item.id)"
        />
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import Alert from '@smartmed/ui/Alert';
import { AlertHostDefaultParams, AlertHostInstance } from '@smartmed/ui/types';
import { onBeforeUnmount, ref } from 'vue';

defineOptions({
  name: 'AlertsHost',
});

const alerts = ref<
  {
    id: string;
    content: string;
    type?: 'success' | 'error';
    closable: boolean;
  }[]
>([]);

const timeoutDict = new Map<string, number>();

const elementRef = ref<HTMLElement | null>(null);

const show: AlertHostInstance['show'] = (
  id,
  content,
  params = AlertHostDefaultParams
) => {
  const {
    type = AlertHostDefaultParams.type,
    autoClose = AlertHostDefaultParams.autoClose,
    closeTimeout = AlertHostDefaultParams.closeTimeout,
  } = params;

  alerts.value = alerts.value.concat({
    id,
    content,
    type: type,
    closable: autoClose,
  });

  if (autoClose) {
    const timeout = setTimeout(() => {
      close(id);
    }, closeTimeout);

    timeoutDict.set(id, timeout);
  }
};

const close = (id: string) => {
  const timeout = timeoutDict.get(id);

  if (timeout) {
    clearTimeout(timeout);
  }

  timeoutDict.delete(id);

  alerts.value = alerts.value.filter(({ id: alertId }) => alertId !== id);
};

const closeLast = () => {
  const last = alerts.value[0];

  if (last) {
    close(last.id);
  }
};

onBeforeUnmount(() => {
  alerts.value.forEach((alert) => close(alert.id));
});

defineExpose<AlertHostInstance>({
  elementRef,
  show,
  close,
  closeLast,
});
</script>

<style lang="scss" module>
.root {
  @include transition(transform);

  margin: 0 auto;
  max-width: min(680px, calc(100vw - 24px));
  transform: translateY(-100%) translateY(-12px);
}

.container {
  position: relative;
  display: block;
  width: 100%;
}
</style>
