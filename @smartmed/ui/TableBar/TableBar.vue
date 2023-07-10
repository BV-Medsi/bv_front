<template>
  <Portal
    v-if="isRendered"
    :append-to="overlay ? '#smed_table-bar-overlayable' : '#smed_table-bars'"
  >
    <transition
      appear
      :name="'smed-table-bar_' + direction"
      @after-leave="afterLeave"
    >
      <section
        v-if="modelValue"
        v-esc="{ onEvent: onEsc }"
        v-focustrap="{ handle: overlay }"
        ref="tableBarRef"
        :data-automation-id="dataAutomationId || 'smed-table-bar'"
        :class="[
          'smed-table-bar',
          `smed-table-bar_${direction}`,
          $style.tableBar,
          $style['tableBar_' + direction],
          rootClass,
        ]"
      >
        <div :class="['smed-table-bar__content', $style.content]">
          <scrollbar :class="$style.scrollbar">
            <div :class="contentClass">
              <slot :close="closeFn" />
            </div>
          </scrollbar>

          <button
            v-if="closeButton && modelValue"
            v-keyboard
            data-automation-id="smed-table-bar-close-button"
            :class="[
              $style.close,
              $style['close_' + direction],
              closeButtonInside && $style.close_inside,
            ]"
            @click="closeFn"
          >
            <svg-icon name="close" size="xl" />
          </button>
        </div>
      </section>
    </transition>
  </Portal>
</template>

<script lang="ts">
export default {
  name: 'TableBar',
};
</script>

<script setup lang="ts">
import Portal from '@smartmed/ui/Portal';
import Scrollbar from '@smartmed/ui/Scrollbar';
import SvgIcon from '@smartmed/ui/SvgIcon';
import {
  ANIMATION_FRAME_EVENTS_TOKEN,
  TABLE_BAR_HOST_TOKEN,
} from '@smartmed/ui/tokens';
import { useOverscroll } from '@smartmed/ui/use';
import {
  EscDirective as vEsc,
  FocustrapDirective as vFocustrap,
  KeyboardFocusedDirective as vKeyboard,
} from '@smartmed/utility/directives';
import { useThrottleFn } from '@smartmed/utility/functions';
import {
  computed,
  inject,
  onBeforeUnmount,
  Ref,
  ref,
  toRefs,
  watch,
} from 'vue';

import {
  TableBarDefaultProps,
  TableBarEmits,
  TableBarHostInstance,
  TableBarProps,
  TableBarSlots,
} from './TableBar.props';

const SAFE_MARGIN = 12;
const BUTTON_SIZE = 72;

const props = withDefaults(defineProps<TableBarProps>(), TableBarDefaultProps);
const emit = defineEmits<TableBarEmits>();

defineSlots<TableBarSlots>();

const { modelValue, overlay, direction } = toRefs(props);

const overscrollMode = computed(() => (overlay.value ? 'all' : 'none'));
const tableBarRef = useOverscroll(overscrollMode, (el: HTMLElement) => el);
const isRendered = ref(modelValue.value);
const closeButtonInside = ref(false);

const host = inject<Ref<TableBarHostInstance>>(TABLE_BAR_HOST_TOKEN)!;
const animationEvents = inject<Ref<number>>(ANIMATION_FRAME_EVENTS_TOKEN)!;

const closeFn = () => {
  emit('update:modelValue', false);
};

const onEsc = () => {
  if (overlay.value) {
    closeFn();
  }
};

const clickhandler = (event: MouseEvent) => {
  if (!tableBarRef.value) {
    return;
  }

  const target = event.target as Node;

  const shouldClose = !tableBarRef.value.contains(target);

  if (shouldClose) {
    closeFn();
  }
};

const subscribeOnOutsideClick = () => {
  document.addEventListener('click', clickhandler);
};

const unsubscribeOnOutsideClick = () => {
  document.removeEventListener('click', clickhandler);
};

const calculatePosition = () => {
  const rect = tableBarRef.value?.getBoundingClientRect();

  if (!rect) {
    return false;
  }

  const _direction = direction.value;
  const { left, right, top, bottom } = rect;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  switch (_direction) {
    case 'left':
      return windowWidth - right - BUTTON_SIZE - SAFE_MARGIN < 0;
    case 'right':
      return left - BUTTON_SIZE - SAFE_MARGIN < 0;
    case 'top':
      return windowHeight - bottom - BUTTON_SIZE - SAFE_MARGIN < 0;
    default:
      return top - BUTTON_SIZE - SAFE_MARGIN < 0;
  }
};

onBeforeUnmount(() => {
  unsubscribeOnOutsideClick();

  if (overlay.value) {
    host && host.value.hideOverlay();
  }
});

watch(modelValue, (value) => {
  if (value && overlay.value) {
    host && host.value.showOverlay();

    setTimeout(() => subscribeOnOutsideClick());
  } else if (!value && overlay.value) {
    host && host.value.hideOverlay();

    unsubscribeOnOutsideClick();
  }
});

watch(
  modelValue,
  (value) => {
    if (value) {
      isRendered.value = value;
    }
  },
  { immediate: true }
);

const throttledCalculatePosition = useThrottleFn(() => {
  if (!modelValue.value) {
    return;
  }

  const buttonInside = calculatePosition();

  closeButtonInside.value = buttonInside;
}, 300);

if (props.closeButton) {
  watch(animationEvents, throttledCalculatePosition, { immediate: true });
}

const afterLeave = () => {
  isRendered.value = false;
};
</script>

<style lang="scss" module>
$radius: 12px;

.tableBar {
  position: fixed;
  display: flex;
  flex-direction: column;

  background-color: var(--smed-base-07);
  color: var(--smed-base-01);

  box-shadow: 0 4px 24px rgba(var(--smed-base-02-rgb), var(--smed-opacity));

  &_bottom {
    bottom: 0;
    width: 100%;
  }

  &_top {
    top: 0;
    width: 100%;
  }

  &_left {
    left: 0;
    top: 0;

    height: 100%;
  }

  &_right {
    right: 0;
    top: 0;

    height: 100%;
  }
}

.content {
  position: relative;
  background-color: inherit;
  height: 100%;
}

.scrollbar {
  height: 100%;
}

.close {
  @include clearbutton;
  @include strict-size(72px, 72px);
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--smed-base-01);
  background-color: inherit;
  cursor: pointer;

  &:after {
    @include strict-size(72px, 72px);
    @include transition(background-color);
    position: absolute;
    content: '';
    border-radius: inherit;
    background-color: transparent;
    user-select: none;
    pointer-events: none;
  }

  &:hover {
    &:after {
      background-color: rgba(var(--smed-base-01-rgb), 0.16);
    }
  }

  &:active {
    &:after {
      background-color: rgba(var(--smed-base-01-rgb), 0.2);
    }
  }

  &_left {
    top: 0;
    right: 0;
    transform: translateX(100%);
    border-bottom-right-radius: $radius;
  }

  &_right {
    top: 0;
    left: 0;
    transform: translateX(-100%);
    border-bottom-left-radius: $radius;
  }

  &_bottom {
    top: 0;
    left: 0;
    transform: translateY(-100%);
    border-top-right-radius: $radius;
  }

  &_top {
    right: 0;
    bottom: 0;
    transform: translateY(100%);
    border-bottom-left-radius: $radius;
  }

  &_inside {
    @include strict-size(44px, 44px);

    left: initial;
    bottom: initial;
    top: 8px;
    right: 8px;
    transform: none;
    border-radius: $radius;

    &:after {
      @include strict-size(44px, 44px);
    }
  }
}
</style>
