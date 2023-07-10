<template>
  <span
    :class="[$style.marker, $style['marker_' + name], $style['marker_' + size]]"
  >
    <svg-icon :size="iconSize" :name="iconName" />
  </span>
</template>

<script lang="ts">
export default {
  name: 'MarkerIcon',
};
</script>

<script setup lang="ts">
import SvgIcon from '@smartmed/ui/SvgIcon';
import { computed, toRefs } from 'vue';

import {
  checkSize,
  errorSize,
  infoSize,
  statusIcon,
} from './markerIcon.consts';
import { MarkerIconDefaultProps, MarkerIconProps } from './MarkerIcon.props';

const props = withDefaults(
  defineProps<MarkerIconProps>(),
  MarkerIconDefaultProps
);

const { name, size } = toRefs(props);

const iconName = computed(() => statusIcon[name.value]);

const iconSize = computed(() => {
  const _name = name.value;

  if (_name === 'success' || _name === 'completed') {
    return checkSize[size.value];
  }

  if (_name === 'error') {
    return errorSize[size.value];
  }

  if (_name === 'info') {
    return infoSize[size.value];
  }

  return size.value === 'lg' ? 'lg' : 'sm';
});
</script>

<style lang="scss" module>
.marker {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: var(--smed-base-06);
  border-radius: 100%;

  &_success {
    color: var(--smed-primary);
  }

  &_completed {
    color: var(--smed-base-02);
  }

  &_info,
  &_loading {
    color: var(--smed-base-01);
  }

  &_error {
    color: var(--smed-error);
  }

  &_sm {
    @include strict-size(32px, 32px);
  }

  &_md {
    @include strict-size(40px, 40px);
  }

  &_lg {
    @include strict-size(64px, 64px);
  }
}
</style>
