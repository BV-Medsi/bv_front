<template>
  <button
    v-keyboard
    ref="native"
    data-smed-data-list-item=""
    :tabindex="hoverable ? '0' : '-1'"
    :class="[
      'smed-text_body-xl',
      $style.item,
      $style['item_' + size],
      hoverable && $style.item_hoverable,
    ]"
    @keydown.enter.stop.prevent="onClick"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { KeyboardFocusedDirective as vKeyboard } from '@smartmed/utility/directives';
import { ref } from 'vue';

import {
  DataListItemDefaultProps,
  DataListItemEmits,
  DataListItemProps,
  DataListItemSlots,
} from './DataListItem.props';

defineOptions({
  name: 'DataListItem',
});

withDefaults(defineProps<DataListItemProps>(), DataListItemDefaultProps);

const emit = defineEmits<DataListItemEmits>();

defineSlots<DataListItemSlots>();

const native = ref<HTMLElement | null>(null);

const onClick = () => {
  emit('onClick');
};
</script>

<style lang="scss" module>
.item {
  @include clearbutton;
  @include transition(background-color);

  display: flex;
  width: 100%;
  justify-content: space-between;
  text-align: left;

  color: var(--smed-base-01);

  &_hoverable {
    cursor: pointer;

    &:hover {
      background-color: var(--smed-base-06);
    }
  }

  &_sm {
    padding: 6px 8px;
  }

  &_md {
    padding: 8px 12px;

    line-height: 24px;
  }

  &_lg {
    padding: 12px 16px;
  }
}
</style>
