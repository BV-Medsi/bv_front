<template>
  <transition-expand :opened="!!errorComputed" :duration="400">
    <span :class="['smed-text_body-xs', $style.error]">
      {{ errorComputed }}
    </span>
  </transition-expand>
</template>

<script lang="ts">
export default {
  name: 'FieldError',
};
</script>

<script setup lang="ts">
import { VALIDATION_ERRORS_TOKEN } from '@smartmed/ui/tokens';
import TransitionExpand from '@smartmed/ui/TransitionExpand';
import { computed, inject, toRefs } from 'vue';

import { FieldErrorProps } from './FieldError.props';

const props = defineProps<FieldErrorProps>();

const { error } = toRefs(props);

const validationErrors = inject<Record<string, string> | null>(
  VALIDATION_ERRORS_TOKEN,
  null
);

const errorComputed = computed(() => {
  const value = error.value;

  if (typeof value === 'string' || value === null) {
    return value;
  }

  const keys = Object.keys(value);

  if (keys.length === 0) {
    return null;
  }

  const firstKey = keys[0];

  if (!validationErrors) {
    return value[firstKey];
  }

  return validationErrors[firstKey] || value[firstKey];
});
</script>

<style lang="scss" module>
.error {
  color: var(--smed-error);
}
</style>
