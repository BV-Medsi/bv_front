<template>
  <base-button rounded color="secondary" size="sm" @click="onToggle(theme)">
    <template #icon>
      <dark-mode-icon v-if="theme === 'dark'" />
      <light-mode-icon v-else />
    </template>
  </base-button>
</template>

<script setup lang="ts">
import BaseButton from '@smartmed/ui/BaseButton';

import darkModeIcon from './assets/darkModeIcon.svg';
import lightModeIcon from './assets/lightModeIcon.svg';

type Theme = 'light' | 'dark';

defineProps<{ theme: Theme }>();

const emit = defineEmits<{
  (e: 'update:theme', value: Theme): void;
}>();

const onToggle = (theme: Theme) => {
  emit('update:theme', theme === 'light' ? 'dark' : 'light');
};
</script>
