<template>
  <span>
    <svg-icon name="spinner" :class="$style[theme]" :size="svgIconSize" />
  </span>
</template>

<script lang="ts">
export default {
  name: 'Spinner',
};
</script>

<script setup lang="ts">
import SvgIcon from '@smartmed/ui/SvgIcon';
import { computed, toRefs } from 'vue';

import { SpinnerDefaultProps, SpinnerProps } from './Spinner.props';

const sizeMap = {
  xs: 'md',
  sm: 'lg',
  md: 'xl',
  lg: 'xxl',
} as const;

const props = withDefaults(defineProps<SpinnerProps>(), SpinnerDefaultProps);

const { size } = toRefs(props);

const svgIconSize = computed(() => sizeMap[size.value]);
</script>

<style lang="scss" module>
.default {
  color: var(--smed-base-07);
}

.primary {
  color: var(--smed-primary);
}
</style>
