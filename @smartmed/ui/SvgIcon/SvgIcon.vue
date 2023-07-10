<template>
  <span
    v-html="icon"
    data-automation-id="smed-svg-icon"
    :class="[$style.icon, rotate && $style.icon_rotate]"
    :data-test="name || ''"
    :style="style"
  />
</template>

<script lang="ts">
export default {
  name: 'SvgIcon',
};
</script>

<script setup lang="ts">
import { computed, toRefs } from 'vue';

import { SvgIconDefaultProps, SvgIconProps } from './SvgIcon.props';
import { SvgIconSize, svgIconSizeMap, useIcon } from './useIcon';

const props = withDefaults(defineProps<SvgIconProps>(), SvgIconDefaultProps);

const { name, size } = toRefs(props);

const icon = useIcon(name);

const iconSize = computed<[number, number]>(() => {
  const _size = size.value;

  if (typeof _size === 'string') {
    return [
      svgIconSizeMap[_size as SvgIconSize],
      svgIconSizeMap[_size as SvgIconSize],
    ];
  }

  if (typeof _size === 'number') {
    return [_size, _size];
  }

  if (Array.isArray(_size) && _size.length === 2) {
    return [_size[0], _size[1]];
  }

  return [svgIconSizeMap.lg, svgIconSizeMap.lg];
});

const style = computed(() => {
  const [width, height] = iconSize.value;
  const widthPx = `${width}px`;
  const heightPx = `${height}px`;

  return {
    '--smed-svg-icon-width': widthPx,
    '--smed-svg-icon-height': heightPx,
  };
});
</script>

<style lang="scss" module>
.icon {
  @include transition(transform);
  @include strict-size(
    var(--smed-svg-icon-width, 24px),
    var(--smed-svg-icon-height, 24px)
  );

  display: inline-flex;
  align-items: center;

  &_rotate {
    transform: rotate(180deg);
  }
}
</style>
