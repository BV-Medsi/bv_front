<template>
  <div :class="$style.host">
    <div>
      <slot />
    </div>
    <span
      v-if="computedValue !== null"
      :class="['smed-text_body-xs', $style.notification, notificationClass]"
    >
      {{ computedValue }}
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Badge',
};
</script>

<script setup lang="ts">
import { computed, toRefs } from 'vue';

import { BadgeProps, BadgeSlots } from './Badge.props';

const PLUS_CHAR = '\u002B';

const props = withDefaults(defineProps<BadgeProps>(), {
  value: null,
});

defineSlots<BadgeSlots>();

const { value } = toRefs(props);

const computedValue = computed(() => {
  if (value.value === null) {
    return null;
  }

  if (typeof value.value === 'number') {
    return value.value > 99 ? `99${PLUS_CHAR}` : `${value.value}`;
  }

  return value.value || '\u0020';
});
</script>

<style lang="scss" module>
.host {
  position: relative;
  display: inline-block;
}

.notification {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);

  min-width: 16px;
  min-height: 16px;
  padding: 0 8px 2px 8px;
  border-radius: 12px;
  pointer-events: none;

  background-color: var(--smed-primary);
  color: var(--smed-base-07);
}
</style>
