<template>
  <div :class="[$style.container, $style['container_' + size]]">
    <button
      v-for="index in length"
      v-keyboard-focused
      :key="index"
      :class="$style.button"
      :style="computedStyle"
      @click="onUpdate(index - 1)"
    >
      <span
        :class="[
          $style.content,
          hasAutoProgress
            ? modelValue >= index - 1 && $style.content_active
            : modelValue === index - 1 && $style.content_active,
        ]"
        :style="
          hasAutoProgress && modelValue == index - 1 ? activeElementStyle : {}
        "
      ></span>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Pagination',
};
</script>

<script setup lang="ts">
import { EVENT_TUNNEL_PROGRESS_TOKEN } from '@smartmed/ui/tokens';
import { KeyboardFocusedDirective as vKeyboardFocused } from '@smartmed/utility/directives';
import { computed, inject, Ref, toRefs } from 'vue';

import {
  PaginationDefaultProps,
  PaginationEmits,
  PaginationProps,
} from './Pagination.props';

const props = withDefaults(
  defineProps<PaginationProps>(),
  PaginationDefaultProps
);

const emit = defineEmits<PaginationEmits>();

const authSwitchingProgress = inject<Ref<number> | null>(
  EVENT_TUNNEL_PROGRESS_TOKEN,
  null
);
const { length, size } = toRefs(props);

const computedStyle = computed(() => {
  if (size.value === 'md') {
    return {
      width: `${100 / length.value}%`,
    };
  }

  return {};
});

const hasAutoProgress = computed(() => authSwitchingProgress !== null);

const activeElementStyle = computed(() => {
  return {
    transform: authSwitchingProgress
      ? `translateX(${authSwitchingProgress.value * 100 - 100}%)`
      : `translateX(0)`,
  };
});

const onUpdate = (value: number) => {
  emit('update:modelValue', value);
};
</script>

<style lang="scss" module>
.container {
  display: flex;
  justify-content: center;

  &:not(.container_md) {
    flex-wrap: wrap;
  }

  column-gap: 12px;

  &_sm {
    row-gap: 8px;

    .button {
      width: 8px;
      height: 8px;
      border-radius: 100%;
      flex-shrink: 0;
    }
  }

  &_md {
    width: 100%;
    row-gap: 4px;

    .button {
      height: 4px;
      border-radius: 500px;
    }
  }
}

.button {
  @include clearbutton();

  background-color: var(--smed-base-03);
  overflow: hidden;

  cursor: pointer;
}

.content {
  @include transition(transform, 0.1s);

  display: flex;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  border-radius: inherit;

  &_active {
    background-color: var(--smed-primary);
    transform: translateX(0);
  }
}
</style>
