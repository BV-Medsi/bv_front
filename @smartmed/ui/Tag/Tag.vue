<template>
  <span
    :class="[
      'smed-text_body-xs smed-text_medium',
      $style.tag,
      $style['tag_' + status],
    ]"
  >
    <slot name="icon">
      <svg-icon v-if="icon" size="sm" class="smed-space_right-1" :name="icon" />
    </slot>

    <slot />
  </span>
</template>

<script setup lang="ts">
import SvgIcon from '@smartmed/ui/SvgIcon';

import { TagDefaultProps, TagProps, TagSlots } from './Tag.props';

defineOptions({
  name: 'Tag',
});

withDefaults(defineProps<TagProps>(), TagDefaultProps);

defineSlots<TagSlots>();
</script>

<style lang="scss" module>
.tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 6px;

  &_default {
    color: var(--smed-base-01);
    background-color: var(--smed-base-05);
  }

  &_success {
    color: var(--smed-base-07);
    background-color: var(--smed-green);
  }

  &_info {
    color: var(--smed-base-07);
    background-color: var(--smed-info);
  }

  &_error {
    color: var(--smed-base-07);
    background-color: var(--smed-error);
  }
}
</style>
