<template>
  <span><slot /></span>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { RouteLocationRaw, useLink } from 'vue-router';

const props = defineProps<{ to: RouteLocationRaw }>();

const emit = defineEmits<{ (e: 'active', value: boolean): void }>();

const link = useLink(props);

watch(
  link.isActive,
  (value) => {
    if (value) {
      emit('active', value);
    }
  },
  { immediate: true }
);
</script>
