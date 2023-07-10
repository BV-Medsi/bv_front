<template>
  <link-or-button
    v-keyboard
    v-slot="{ isActive, isExactActive }"
    :class="[
      $style.root,
      !hasLeft && $style.root_emptyLeft,
      rounded && $style.root_rounded,
      clickable && !disabled && $style.root_clickable,
      backgroundClass && [$style.root_custom, backgroundClass],
    ]"
    :tabindex="clickable && !disabled ? '0' : '-1'"
    :to="computedTo"
  >
    <span
      v-if="active || (routeExactMatch ? isExactActive : isActive)"
      :class="$style.activeRoute"
    />

    <span v-if="hasLeft" :class="['smed-space_right-3', $style.left]">
      <slot name="left">
        <div v-if="icon" :class="[$style.icon, colorClass]">
          <svg-icon :name="disabled ? 'lock' : icon" />
        </div>

        <smed-avatar v-if="computedAvatar" v-bind="computedAvatar" size="lg" />
      </slot>
    </span>

    <span
      :class="[
        'smed-text_body-md smed-text_medium',
        $style.content,
        colorClass,
      ]"
    >
      <slot />
    </span>

    <span
      v-if="hasRight"
      :class="[
        'smed-space_left-1 smed-text_body-sm smed-text_medium',
        $style.right,
        rightColorClass,
      ]"
    >
      <slot name="right" />
    </span>

    <span
      v-if="!disabled && (to || hasArrow)"
      :class="['smed-space_left-1', $style.right, rightColorClass]"
    >
      <svg-icon name="arrow-right" />
    </span>
  </link-or-button>
</template>

<script setup lang="ts">
import SmedAvatar from '@smartmed/ui/Avatar';
import SvgIcon from '@smartmed/ui/SvgIcon';
import { KeyboardFocusedDirective as vKeyboard } from '@smartmed/utility/directives';
import { hasSlotContent } from '@smartmed/utility/vue';
import { computed, toRefs, useSlots } from 'vue';

import { LinkOrButton } from '../../helpers/LinkOrButton';
import {
  CellButtonDefaultProps,
  CellButtonProps,
  CellButtonSlots,
} from './CellButton.props';

defineOptions({
  name: 'CellButton',
});

const props = withDefaults(
  defineProps<CellButtonProps>(),
  CellButtonDefaultProps
);

defineSlots<CellButtonSlots>();

const { icon, avatar, to, clickable, disabled } = toRefs(props);

const slots = useSlots();

const hasLeft = computed(
  () =>
    (icon && icon.value) ||
    (avatar && avatar.value) ||
    hasSlotContent(slots.left)
);

const computedAvatar = computed(() =>
  avatar && avatar.value ? { rounded: false, ...avatar.value } : null
);
const hasRight = computed(() => hasSlotContent(slots.right));

const computedTo = computed(() => {
  return clickable.value && !disabled.value ? to?.value : undefined;
});
</script>

<style lang="scss" module>
.root {
  @include clearbutton;
  @include transition(background-color);

  position: relative;
  display: flex;
  align-items: center;
  min-height: 64px;
  text-align: left;

  padding: 12px;
  color: var(--smed-base-01);
  text-decoration: none;
  background-color: var(--smed-base-07);
  overflow: hidden;

  &:hover {
    text-decoration: none;
  }

  &:after {
    position: absolute;
    content: '';
    left: 64px;
    bottom: 0;
    width: calc(100% - 64px);
    height: 1px;
    background-color: var(--smed-group-border-color, transparent);
    pointer-events: none;
    user-select: none;
  }

  &_emptyLeft {
    padding-left: 16px;
  }

  &_emptyLeft.root:after {
    left: 16px;
    width: calc(100% - 16px);
  }

  &_rounded {
    border-radius: 16px;
  }

  &_clickable {
    cursor: pointer;

    &:hover {
      background-color: var(--smed-base-06);
    }
  }

  &_custom {
    background-color: transparent;

    &:hover {
      background-color: var(--smed-transparent-base-06);
    }
  }
}

.activeRoute {
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background-color: var(--smed-primary);
  pointer-events: none;
  user-select: none;
}

.left {
  align-self: flex-start;
}

.content {
  width: 100%;
}

.icon {
  @include strict-size(40px, 40px);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background-color: var(--smed-base-06);
  color: var(--smed-base-02);
}

.right {
  display: inline-flex;
  align-items: center;

  color: var(--smed-base-02);
}

.wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  padding-right: 16px;
}
</style>
