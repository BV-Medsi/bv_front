<template>
  <popup :model-value="modelValue" size="full" @update:modelValue="onUpdate">
    <svg-icon
      v-if="isLoading"
      name="spinner"
      size="xxl"
      :class="$style.spinner"
    />

    <iframe v-if="src" :class="$style.iframe" :src="src" />
  </popup>
</template>

<script lang="ts">
export default {
  name: 'PdfViewer',
};
</script>

<script setup lang="ts">
import Popup from '@smartmed/ui/Popup';
import SvgIcon from '@smartmed/ui/SvgIcon';

import { PdfViewerEmits, PdfViewerProps } from './PdfViewer.props';

defineProps<PdfViewerProps>();

const emit = defineEmits<PdfViewerEmits>();

const onUpdate = (value: boolean) => {
  emit('update:modelValue', value);
};
</script>

<style lang="scss" module>
.iframe {
  display: block;
  width: 100%;
  height: 100%;
  max-height: 100%;
}

.spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  color: var(--smed-primary);
}
</style>
