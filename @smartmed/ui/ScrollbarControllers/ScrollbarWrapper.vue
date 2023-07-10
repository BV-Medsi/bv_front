<template>
  <div ref="wrapper"><slot /></div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';

import { SCROLLBAR_WRAPPER_TOKEN } from './scrollbarTokens';

const wrapper = ref<HTMLElement | null>(null);

provide(SCROLLBAR_WRAPPER_TOKEN, wrapper);
</script>
