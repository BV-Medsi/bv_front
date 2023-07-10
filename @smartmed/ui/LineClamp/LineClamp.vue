<template>
  <div ref="rootElement" :class="$style.root" :style="rootStyles">
    <div
      :class="[$style.content, linesLimit === 1 && $style.content_ellipsis]"
      :style="contentStyles"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LineClamp',
};
</script>

<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';

import { LineClampProps, LineClampSlots } from './LineClamp.props';

const props = defineProps<LineClampProps>();

defineSlots<LineClampSlots>();

const { lineHeight, linesLimit } = toRefs(props);
const rootElement = ref<HTMLElement | null>(null);

const rootStyles = computed(() => {
  if (!rootElement.value) {
    return {};
  }

  return {
    height: `${rootElement.value.scrollHeight + 4}px`,
    'max-height': `${lineHeight.value * linesLimit.value}px`,
  };
});

const contentStyles = computed(() => {
  return {
    '-webkit-line-clamp': linesLimit.value,
  };
});
</script>

<style lang="scss" module>
.root {
  position: relative;
  display: block;
  overflow: hidden;
}

.content {
  display: -webkit-box;

  -webkit-box-orient: vertical;
  overflow: hidden;

  &_ellipsis {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
