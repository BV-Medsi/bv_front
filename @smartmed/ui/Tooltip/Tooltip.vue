<template>
  <active-zone
    v-hovered="{ onEvent: onHover }"
    :class="[$style.host, wide && $style.host_wide]"
    @active-zone-changed="onChangeActiveZone"
  >
    <div ref="host" :class="$style.container">
      <slot />
    </div>

    <portal v-if="hasHint" append-to="#smed_hints-host">
      <transition name="fade">
        <div
          v-if="isShownHint"
          v-hovered="{ onEvent: onHintMouseEnter }"
          ref="hint"
          :class="[$style.hint, $style['hint_' + computedDirection]]"
          :aria-describedby="describedBy"
          :style="hintStyle"
        >
          <slot name="hint" />
        </div>
      </transition>
    </portal>
  </active-zone>
</template>

<script lang="ts">
export default {
  name: 'Tooltip',
};
</script>

<script setup lang="ts">
import ActiveZone from '@smartmed/ui/ActiveZone';
import Portal from '@smartmed/ui/Portal';
import { HINT_HOST_TOKEN } from '@smartmed/ui/tokens';
import { HoveredDirective as vHovered } from '@smartmed/utility/directives';
import { hasSlotContent } from '@smartmed/utility/vue';
import {
  computed,
  inject,
  onBeforeUnmount,
  Ref,
  ref,
  toRefs,
  useSlots,
  watch,
} from 'vue';

import {
  TooltipDefaultProps,
  TooltipDirection,
  TooltipProps,
  TooltipSlots,
} from './Tooltip.props';
import { tooltipResolvePosition } from './tooltipResolvePosition';

const DELAY_TO_SHOW_HINT = 500;
const DELAY_TO_HIDE_HINT = 200;

const props = withDefaults(defineProps<TooltipProps>(), TooltipDefaultProps);

defineSlots<TooltipSlots>();

const { direction } = toRefs(props);

const slots = useSlots();

const hintsPortal = inject<Ref<HTMLElement>>(HINT_HOST_TOKEN);
const timeout = ref<ReturnType<typeof setTimeout> | null>(null);
const hideTimeout = ref<ReturnType<typeof setTimeout> | null>(null);
const isShownHint = ref(false);
const host = ref<HTMLElement | null>(null);
const hint = ref<HTMLElement | null>(null);
const computedDirection = ref<TooltipDirection>(direction.value);

const position = ref({ left: 0, top: 0 });
const resolvePositionHandler: { id: number | null } = { id: null };

const hasHint = computed(() => {
  return hasSlotContent(slots.hint);
});

const getPortalRect = () => {
  if (!hintsPortal) {
    return {
      left: 0,
      top: document.body.clientHeight,
      width: document.body.clientWidth,
    };
  }

  return hintsPortal.value.getBoundingClientRect();
};

const onChangeActiveZone = (isActive: boolean) => {
  if (!hasHint.value) {
    clearIsHideTimer();
    clearIsShownTimer();

    return;
  }

  if (isActive) {
    setupIsShownTimer();
    clearIsHideTimer();
  } else {
    clearIsShownTimer();
    setupIsHideTimer();
  }
};

const onHover = (hovered: boolean) => {
  if (!hasHint.value) {
    return;
  }

  if (hovered) {
    setupIsShownTimer();
    clearIsHideTimer();
  } else {
    clearIsShownTimer();
    setupIsHideTimer();
  }
};

const onHintMouseEnter = (hovered: boolean) => {
  if (!isShownHint.value || !hasHint.value) {
    return;
  }

  if (!hovered) {
    clearIsShownTimer();
    setupIsHideTimer();
  } else {
    clearIsHideTimer();
  }
};

const setupIsShownTimer = () => {
  if (isShownHint.value || !hasHint.value) {
    return;
  }

  timeout.value = setTimeout(() => {
    isShownHint.value = true;
    timeout.value = null;
  }, DELAY_TO_SHOW_HINT);
};

const clearIsShownTimer = () => {
  if (timeout.value) {
    clearTimeout(timeout.value);

    timeout.value = null;
  }
};

const setupIsHideTimer = () => {
  if (!isShownHint.value || !hasHint.value) {
    return;
  }

  hideTimeout.value = setTimeout(() => {
    isShownHint.value = false;
    hideTimeout.value = null;
  }, DELAY_TO_HIDE_HINT);
};

const clearIsHideTimer = () => {
  if (hideTimeout.value) {
    clearTimeout(hideTimeout.value);

    hideTimeout.value = null;
  }
};

const hintStyle = computed(() => {
  const { left, top } = position.value;

  return {
    left: `${left}px`,
    top: `${top}px`,
  };
});

onBeforeUnmount(() => {
  clearIsShownTimer();
  clearIsHideTimer();
  stopResolvePosition();
});

const resolvePosition = () => {
  if (!host.value || !hint.value) {
    return;
  }

  const hostRect = host.value.getBoundingClientRect();
  const hintRect = hint.value.getBoundingClientRect();
  const portalRect = getPortalRect();

  const {
    direction: _direction,
    left,
    top,
  } = tooltipResolvePosition(hostRect, hintRect, portalRect, direction.value);

  position.value = {
    left,
    top,
  };

  computedDirection.value = _direction;
};

const tickForResolvePosition = () => {
  const callback = () => {
    resolvePosition();

    resolvePositionHandler.id = requestAnimationFrame(callback);
  };

  resolvePositionHandler.id = requestAnimationFrame(callback);
};

const stopResolvePosition = () => {
  if (resolvePositionHandler.id) {
    cancelAnimationFrame(resolvePositionHandler.id);
  }
};

watch([isShownHint, hasHint], ([value, _hint]) => {
  if (value && _hint) {
    tickForResolvePosition();
  } else {
    stopResolvePosition();
  }
});
</script>

<style lang="scss" module>
$triangleHeight: 7px;
$margin: 8px;

.host {
  position: relative;
  display: inline-flex;

  &_wide {
    width: 100%;

    & > .container {
      width: 100%;
    }
  }
}

.container {
  display: inline-flex;
}

.hint {
  position: absolute;
  padding: 12px;
  padding-left: 16px;
  box-shadow: 0px 5px 16px -4px rgba(0, 0, 0, 0.2);
  background-color: var(--smed-base-05);
  border-radius: 12px;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;

    border-left: $triangleHeight solid transparent;
    border-right: $triangleHeight solid transparent;
    border-bottom: $triangleHeight solid var(--smed-base-05);
  }

  &_left {
    &:before {
      top: 50%;
      left: 100%;
      transform: rotate(90deg) translate(-25%, 50%);
    }
  }

  &_right {
    &:before {
      top: 50%;
      left: -$triangleHeight * 2;
      transform: rotate(-90deg) translate(25%, 50%);
    }
  }

  &_bottom-left {
    &:before {
      right: $triangleHeight * 4;
      top: -$triangleHeight;
    }
  }

  &_bottom-right {
    &:before {
      left: $triangleHeight * 4;
      top: -$triangleHeight;
    }
  }

  &_bottom-middle {
    &:before {
      top: -$triangleHeight;
      left: 50%;

      transform: translateX(-50%);
    }
  }

  &_top-left {
    &:before {
      right: $triangleHeight * 4;
      top: 100%;

      transform: rotate(180deg);
    }
  }

  &_top-right {
    &:before {
      left: $triangleHeight * 4;
      top: 100%;

      transform: rotate(180deg);
    }
  }

  &_top-middle {
    &:before {
      top: 100%;
      left: 50%;

      transform: rotate(180deg) translateX(50%);
    }
  }
}
</style>
