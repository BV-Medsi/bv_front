<template>
  <div id="smed-alerts-host" ref="elementRef">
    <div :class="[$style.root, $style['root_' + position]]">
      <transition-group
        tag="ui"
        :name="alertTransitionName"
        :class="$style.container"
      >
        <component
          v-for="item in alerts"
          :key="item.id"
          :is="alertComponent"
          class="smed-space_bottom-4"
          :type="item.type"
          :content="item.content"
          :data="item.data"
          :closable="item.closable"
          @close="close(item.id)"
        />
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ALERTS_OPTIONS_TOKEN } from '@smartmed/ui/tokens';
import { AlertHostDefaultParams, AlertHostInstance } from '@smartmed/ui/types';
import { Component as ComponentType, inject, onBeforeUnmount, ref } from 'vue';

defineOptions({
  name: 'AlertsHost',
});

const alerts = ref<
  {
    id: string;
    content: string | ComponentType;
    type?: 'success' | 'error';
    closable: boolean;
    data: any;
  }[]
>([]);

const timeoutDict = new Map<string, number>();

type Position = 'top' | 'top-right' | 'bottom' | 'bottom-right';

const elementRef = ref<HTMLElement | null>(null);
const options = inject<{
  component: any;
  transitionName: string;
  position: Position;
} | null>(ALERTS_OPTIONS_TOKEN, null);
const alertComponent = options?.component ? options.component : 'div';
const alertTransitionName = options?.transitionName
  ? options.transitionName
  : 'none';
const position = options?.position || 'bottom';

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
    data: params.data,
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

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  display: flex;
  flex-direction: column;

  &_bottom {
    justify-content: flex-end;
  }

  &_bottom-right {
    justify-content: flex-end;

    & > .container {
      margin: 0 12px 0 auto;
    }
  }

  &_top {
    & > .container {
      margin-top: 12px;
    }
  }

  &_top-right {
    & > .container {
      margin: 12px 12px 0 auto;
    }
  }
}

.container {
  position: relative;
  display: block;
  width: 100%;
  max-width: min(680px, calc(100vw - 24px));
  margin: 0 auto;

  & > * {
    pointer-events: auto;
  }
}
</style>
