<template>
  <active-zone
    ref="host"
    :class="$style.container"
    :child="dropdown"
    @keydown.esc.stop.prevent="hide"
    @keydown.down.stop.prevent="onKeydownArrowDown"
    @active-zone-changed="activeZoneChanged"
  >
    <div :class="$style.content" @click.stop.prevent="toggleOpen">
      <slot />
    </div>

    <Portal v-if="onNextTick" append-to="#smed_dropdown-host">
      <transition v-if="canOpen" name="fade">
        <scrollbar
          v-if="opened"
          ref="dropdownRef"
          data-automation-id="smed-dropdown__scrollbar"
          :class="[$style.dropdown, $style['dropdown_' + align]]"
          :style="{ ...customDropdownStyles, ...dropdownStyle }"
        >
          <div
            id="smed_autoUnfocusableTop"
            ref="topFocusableElement"
            tabindex="0"
            @focus="onTopFocus"
          />
          <slot name="dropdown" />
          <div
            id="smed_autoUnfocusableBottom"
            tabindex="0"
            @focus="onBottomFocus"
          />
        </scrollbar>
      </transition>
    </Portal>
  </active-zone>
</template>

<script setup lang="ts">
import ActiveZone from '@smartmed/ui/ActiveZone';
import Portal from '@smartmed/ui/Portal';
import Scrollbar from '@smartmed/ui/Scrollbar';
import {
  DROPDOWN_HOST_PIVOT_TOKEN,
  DROPDOWN_HOST_TOKEN,
} from '@smartmed/ui/tokens';
import { SCROLLBAR_REF_TOKEN } from '@smartmed/ui/tokens';
import { useOverscroll } from '@smartmed/ui/use';
import {
  getClosestKeyboardFocusable,
  setNativeFocused,
} from '@smartmed/utility/dom/focus';
import {
  computed,
  CSSProperties,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  Ref,
  ref,
  toRefs,
  watch,
} from 'vue';

import {
  DEFAULT_MIN_HEIGHT,
  DropdownHostDefaultProps,
  DropdownHostEmits,
  DropdownHostProps,
  DropdownHostSlots,
} from './DropdownHost.props';

const DEFAULT_MARGIN = 8;

defineOptions({
  name: 'DropdownHost',
});

function inRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

const props = withDefaults(
  defineProps<DropdownHostProps>(),
  DropdownHostDefaultProps
);
const emit = defineEmits<DropdownHostEmits>();

defineSlots<DropdownHostSlots>();

const opened = ref(!!props.modelValue);

const {
  modelValue,
  canOpen,
  maxHeight,
  maxWidth,
  minHeight,
  direction,
  minWidth,
  align,
} = toRefs(props);

const portalHost = inject<Ref<{ element: HTMLElement }>>(DROPDOWN_HOST_TOKEN);
const scrollRef = inject<Ref<HTMLElement> | null>(SCROLLBAR_REF_TOKEN, null);
const pivot = inject<Ref<HTMLElement | null | undefined>>(
  DROPDOWN_HOST_PIVOT_TOKEN,
  ref()
);
const styledMaxHeight = ref<number | null>(null);
const styledTop = ref<string | null>(null);
const styledBottom = ref<string | null>(null);
const styledLeft = ref<string | null>(null);
const styledRight = ref<string | null>(null);
const styledWidth = ref<string | null>(null);
const topFocusableElement = ref<HTMLElement | null>(null);
const host = ref<{ activeZone: HTMLElement } | null>(null);

const onNextTick = ref(false);

nextTick(() => (onNextTick.value = true));

const dropdownRef = useOverscroll(
  'all',
  (el: { native: HTMLElement }) => el.native
);

const computedHost = computed(() =>
  pivot.value === undefined ? host.value?.activeZone ?? null : pivot.value
);
const dropdown = computed(() => dropdownRef.value && dropdownRef.value.native);
const scrollableElement = computed(
  () => (scrollRef && scrollRef.value) || window
);

watch(canOpen, (value, oldValue) => {
  if (oldValue && !value) {
    emit('update:modelValue', false);
    opened.value = false;
  }
});

const getPortalRect = () => {
  if (!portalHost || !portalHost.value) {
    return {
      left: 0,
      top: document.body.clientHeight,
      width: document.body.clientWidth,
    };
  }

  return portalHost.value.element.getBoundingClientRect();
};

const dropdownStyle = computed(() => {
  const _maxWidth = maxWidth && maxWidth.value;
  const _minWidth = minWidth && minWidth.value;
  const _maxHeight = styledMaxHeight.value;

  return {
    'max-width': _maxWidth ? `${_maxWidth}px` : null,
    'min-width': _minWidth ? `${_minWidth}px` : null,
    'max-height': _maxHeight ? `${_maxHeight}px` : null,
    top: styledTop.value,
    bottom: styledBottom.value,
    left: styledLeft.value,
    right: styledRight.value,
    width: styledWidth.value,
  } as CSSProperties;
});

const toggleOpen = () => {
  if (canOpen.value) {
    emit('update:modelValue', !opened.value);
    opened.value = !opened.value;
  }
};

const hide = () => {
  if (opened.value) {
    emit('update:modelValue', false);
    opened.value = false;
  }
};

const activeZoneChanged = (value: boolean) => {
  if (!value) {
    hide();
  }
};

const prevDirectionIsTop = ref<boolean>(false);

const getFinalDirection = (hostRect: DOMRect): 'top' | 'bottom' => {
  const windowHeight = window.innerHeight;

  const topAvailableHeight = hostRect.top - DEFAULT_MARGIN;

  const bottomAvailableHeight = windowHeight - hostRect.bottom - DEFAULT_MARGIN;

  const boxHeightLimit = Math.min(
    maxHeight.value,
    windowHeight - DEFAULT_MARGIN
  );

  const visualHeight = Math.min(
    Math.max(
      dropdown.value!.getBoundingClientRect().height,
      minHeight.value || DEFAULT_MIN_HEIGHT
    ),
    boxHeightLimit
  );

  let finalDirection: 'top' | 'bottom' | null = null;

  switch (direction.value) {
    case 'top':
      if (topAvailableHeight >= (minHeight.value || visualHeight)) {
        finalDirection = 'top';
      }

      break;
    case 'bottom':
      if (bottomAvailableHeight >= (minHeight.value || visualHeight)) {
        finalDirection = 'bottom';
      }

      break;
  }

  if (finalDirection === null) {
    if (prevDirectionIsTop.value && topAvailableHeight >= visualHeight) {
      finalDirection = 'top';
    } else if (bottomAvailableHeight >= visualHeight) {
      finalDirection = 'bottom';
    } else {
      finalDirection =
        bottomAvailableHeight >= topAvailableHeight ? 'bottom' : 'top';
    }
  }

  return finalDirection;
};

const calculatePosition = () => {
  if (!computedHost.value || !dropdown.value) {
    return;
  }

  const directiveRect = computedHost.value.getBoundingClientRect();
  const portalRect = getPortalRect() as DOMRect;

  calculateVerticalPosition(directiveRect, portalRect);
  calculateHorizontalPosition(directiveRect, portalRect);
  calculateWidth(directiveRect);
};

const calculateVerticalPosition = (
  directiveRect: DOMRect,
  portalRect: DOMRect
) => {
  const windowHeight = window.innerHeight;
  const boxHeightLimit = Math.min(
    maxHeight.value,
    windowHeight - DEFAULT_MARGIN * 2
  );

  const offset = DEFAULT_MARGIN;
  const topAvailableHeight = directiveRect.top - offset;
  const bottomAvailableHeight = windowHeight - directiveRect.bottom - offset;
  const finalDirection = getFinalDirection(directiveRect);

  prevDirectionIsTop.value = finalDirection === 'top';

  if (finalDirection === 'top') {
    styledMaxHeight.value = Math.min(boxHeightLimit, topAvailableHeight);
    styledTop.value = 'auto';
    styledBottom.value = `${
      portalRect.bottom - directiveRect.top + DEFAULT_MARGIN
    }px`;
  } else {
    styledMaxHeight.value = Math.min(boxHeightLimit, bottomAvailableHeight);
    styledTop.value = `${
      directiveRect.bottom - portalRect.top + DEFAULT_MARGIN
    }px`;
    styledBottom.value = 'auto';
  }
};

const calculateHorizontalPosition = (
  directiveRect: DOMRect,
  portalRect: DOMRect
) => {
  const offset = 0;
  const left = Math.ceil(directiveRect.left - portalRect.left - offset);
  const right = Math.floor(portalRect.right - directiveRect.right - offset);

  switch (align.value) {
    case 'left':
      if (
        right + DEFAULT_MARGIN > window.innerWidth ||
        inRange(left + DEFAULT_MARGIN, 0, window.innerWidth)
      ) {
        styledLeft.value = `${left}px`;
        styledRight.value = `auto`;
      } else {
        styledLeft.value = 'auto';
        styledRight.value = `${right}px`;
      }

      break;
    case 'right':
      if (
        inRange(right + DEFAULT_MARGIN, 0, window.innerWidth) ||
        left + DEFAULT_MARGIN > window.innerWidth
      ) {
        styledLeft.value = 'auto';
        styledRight.value = `${right}px`;
      } else {
        styledLeft.value = `${left}px`;
        styledRight.value = 'auto';
      }
  }
};

const calculateWidth = (directiveRect: DOMRect) => {
  styledWidth.value = `${directiveRect.width}px`;
};

onMounted(() => {
  if (opened.value && canOpen.value) {
    calculatePosition();
  }
});

onUpdated(() => {
  if (opened.value && canOpen.value) {
    calculatePosition();
  }
});

watch(opened, (value) => {
  if (!canOpen.value) {
    return;
  }

  if (!value) {
    scrollableElement.value.removeEventListener('scroll', calculatePosition);
    window.removeEventListener('resize', calculatePosition);
  } else {
    scrollableElement.value.addEventListener('scroll', calculatePosition);
    window.addEventListener('resize', calculatePosition);
  }
});

let dropdownFocusTimeout: ReturnType<typeof setTimeout> | null = null;

onBeforeUnmount(() => {
  scrollableElement.value.removeEventListener('scroll', calculatePosition);
  window.removeEventListener('resize', calculatePosition);

  if (dropdownFocusTimeout) {
    clearTimeout(dropdownFocusTimeout);
  }
});

const onKeydownArrowDown = () => {
  if (!canOpen.value) {
    return;
  }

  if (!opened.value) {
    toggleOpen();
  }

  dropdownFocusTimeout = setTimeout(() => {
    const closestFocusable = getClosestKeyboardFocusable(
      topFocusableElement.value!,
      false,
      dropdown.value!
    );

    dropdownFocusTimeout = null;

    if (
      closestFocusable &&
      closestFocusable.id !== 'smed_autoUnfocusableBottom' &&
      closestFocusable.id !== 'smed_autoUnfocusableTop'
    ) {
      setNativeFocused(closestFocusable);
    }
  });
};

const onTopFocus = () => {
  moveFocusOutside(true);
};

const onBottomFocus = () => {
  moveFocusOutside(false);
};

const moveFocusOutside = (previous: boolean) => {
  const root = computedHost.value!;
  const { ownerDocument } = root;
  const _root = ownerDocument ? ownerDocument.body : root;

  let focusable = getClosestKeyboardFocusable(root, previous, _root);

  while (focusable !== null && root.contains(focusable)) {
    focusable = getClosestKeyboardFocusable(focusable, previous, _root);
  }

  if (focusable === null) {
    return;
  }

  setNativeFocused(focusable);
};

watch(
  modelValue,
  (value) => {
    opened.value = value;
  },
  { immediate: true }
);
</script>

<style lang="scss" module>
.container {
  position: relative;
  display: inline-flex;
}

.content {
  border-radius: inherit;
  height: inherit;
  flex: 1 1 auto;
  width: 100%;
}

.dropdown {
  position: absolute !important;
  max-height: inherit;
  width: 100%;
  padding: 2px 0;
  background-color: var(--smed-base-07);
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0px 5px 16px -4px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--smed-base-04);
}
</style>
