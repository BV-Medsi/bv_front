<template>
  <div
    :class="[
      $style.notification,
      $style['notification_' + color],
      $style['notification_' + size],
    ]"
  >
    <div v-if="hasIcon" :class="$style.leftIcon">
      <slot name="icon">
        <svg-icon :name="icon" />
      </slot>
    </div>
    <div :class="$style.content">
      <slot />
    </div>

    <span
      v-if="closable"
      v-keyboard-focused
      data-automation-id="notification-close"
      tabindex="0"
      aria-label="Закрыть нотификацию"
      :class="$style.icon"
      @click.stop="$emit('close')"
      @keydown.enter.stop="$emit('close')"
    >
      <svg-icon name="close-black" />
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Notification',
};
</script>

<script setup lang="ts">
import SvgIcon from '@smartmed/ui/SvgIcon';
import { KeyboardFocusedDirective as vKeyboardFocused } from '@smartmed/utility/directives';
import { hasSlotContent } from '@smartmed/utility/vue';
import { computed, toRefs, useSlots } from 'vue';

import {
  NotificationDefaultProps,
  NotificationProps,
  NotificationSlots,
} from './Notification.props';

const props = withDefaults(
  defineProps<NotificationProps>(),
  NotificationDefaultProps
);

const { icon } = toRefs(props);

defineSlots<NotificationSlots>();

const slots = useSlots();

const hasIcon = computed(() => !!icon.value || hasSlotContent(slots.icon));
</script>

<style lang="scss" module>
.notification {
  display: inline-flex;
  position: relative;
  width: 100%;
  border-radius: 12px;

  &_grey {
    color: var(--smed-base-01);
    background-color: var(--smed-base-05);
  }

  &_white {
    color: var(--smed-base-01);
    background-color: var(--smed-base-07);
  }

  &_sm {
    @include smed-text_body-sm;

    padding: 8px;
  }

  &_md {
    @include smed-text_body-sm;

    padding: 16px;
  }

  &_lg {
    padding: 24px;
  }
}

.content {
  flex: 1;
}

.leftIcon {
  margin-right: 8px;
}

.icon {
  @include transition(color);

  position: absolute;
  right: 0;
  top: 0;

  display: inline-flex;
  border-radius: 100%;
  padding: 4px;

  box-sizing: border-box;

  color: rgba(var(--smed-base-01-rgb), 0.05);
  cursor: pointer;

  &:hover {
    color: rgba(var(--smed-base-01-rgb), 0.2);
  }
}
</style>
