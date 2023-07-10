<template>
  <div
    ref="host"
    ondragstart="return false;"
    :class="[$style.container, draggable && $style.container_draggable]"
  >
    <div v-carousel-scroll="{ onEvent: onScroll }" :class="$style.scroller">
      <div :class="$style.wrapper">
        <div
          v-drag-drop="{ onEvent: onDragDrop }"
          v-swipe="{ onEvent: onSwipe }"
          :class="[$style.items, transitioned && $style.items_transitioned]"
          :style="transform"
        >
          <div
            v-for="(item, index) in compuedItems"
            v-intersection="{
              options: {
                threshold: 0.01,
              },
              disconnectAfterIntersect: false,
              isObserve: true,
              onIntersect: onIntersect.bind(null, index + itemIndexCorrection),
            }"
            :key="index + itemIndexCorrection"
            :style="computedStyle"
            :class="[
              $style.item,
              shouldPreventClick && $style.item_notClickable,
            ]"
          >
            <slot :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Carousel',
};
</script>

<script setup lang="ts" generic="T">
import {
  EVENT_TUNNEL_CONTROLLER_TOKEN,
  EVENT_TUNNEL_TOKEN,
} from '@smartmed/ui/tokens';
import {
  DragDropDirective as vDragDrop,
  IntersectionDirective as vIntersection,
  Swipe,
  SwipeDirective as vSwipe,
} from '@smartmed/utility/directives';
import { isMobile } from '@smartmed/utility/dom';
import { clamp } from '@smartmed/utility/numbers';
import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  Ref,
  ref,
  toRefs,
  watch,
} from 'vue';

import {
  CarouselDefaultProps,
  CarouselEmits,
  CarouselProps,
  CarouselSlots,
} from './Carousel.props';
import { CarouselScrollDirective as vCarouselScroll } from './carousel-scroll.directive';

const PADDING = 16;

const props = withDefaults(
  defineProps<CarouselProps<T>>(),
  CarouselDefaultProps
);

const emit = defineEmits<CarouselEmits>();

defineSlots<CarouselSlots<T>>();

const autoScrollEvents = inject<Ref<number> | null>(EVENT_TUNNEL_TOKEN, null);
const eventsController = inject<{ reset: () => void } | null>(
  EVENT_TUNNEL_CONTROLLER_TOKEN,
  null
);

const { itemsCount, modelValue, items, draggable, autoScrollLooping } =
  toRefs(props);
const transitioned = ref(true);
const translate = ref(0);
const host = ref<HTMLElement | null>(null);

const shouldPreventClick = ref(false);

const computedStyle = computed(() => {
  const _itemsCount = itemsCount.value;
  const percent = 100 / _itemsCount;
  const correctionForAlignLeft = PADDING / _itemsCount;

  const width = `calc(${percent}% + ${correctionForAlignLeft}px)`;

  const virtualTransformPercent = virtualIndexStartEnd.value.start * 100;
  const tranform = `translateX(${virtualTransformPercent}%)`;

  return {
    minWidth: width,
    maxWidth: width,
    flexBasis: width,
    transform: tranform,
  };
});

const computedTranslate = computed(() => -modelValue.value / itemsCount.value);

const transform = computed(() => {
  const x = transitioned.value ? computedTranslate.value : translate.value;

  return {
    transform: `translateX(${100 * x}%) translateX(-${
      PADDING / 2 - PADDING * x
    }px)`,
  };
});

const virtualIndexStartEnd = computed(() => {
  const value = modelValue.value;
  const length = items.value.length;

  return {
    start: clamp(value - 1, 0, length - 1),
    end: clamp(value + itemsCount.value + 1, 0, length - 1),
  };
});

const itemIndexCorrection = computed(() => {
  const value = modelValue.value;

  return (value === 0 ? 0 : -1) + value;
});

const compuedItems = computed(() => {
  const { start, end } = virtualIndexStartEnd.value;

  return items.value.slice(start, end + 1);
});

const computedDraggable = computed(() => isMobile() || draggable.value);

onMounted(() => {
  const element = host.value;

  if (element) {
    element.addEventListener('touchstart', startTouch, { passive: true });
    element.addEventListener('touchend', endTouch, { passive: true });

    element.addEventListener('mousedown', startTouch, { passive: true });
    document.addEventListener('mouseup', endTouch, { passive: true });
  }
});

onBeforeUnmount(() => {
  const element = host.value;

  if (element) {
    element.removeEventListener('touchstart', startTouch);
    element.removeEventListener('touchend', endTouch);

    element.removeEventListener('mousedown', startTouch);
    document.removeEventListener('mouseup', endTouch);
  }
});

if (autoScrollEvents) {
  watch(autoScrollEvents, () => {
    onAutoScroll();
  });
}

if (eventsController) {
  watch(modelValue, () => {
    eventsController.reset();
  });
}

const updateIndex = (index: number) => {
  const max = clamp(
    items.value.length - 1,
    0,
    Math.max(0, items.value.length - itemsCount.value)
  );

  emit('update:modelValue', clamp(index, 0, max));
};

watch(itemsCount, () => {
  updateIndex(0);
});

const next = () => {
  updateIndex(modelValue.value + 1);
};

const prev = () => {
  updateIndex(modelValue.value - 1);
};

const onDragDrop = (
  element: HTMLElement | null,
  [offsetX]: [number, number]
) => {
  if (!computedDraggable.value || !element) {
    return;
  }

  const { clientWidth } = element;
  const min = 1 - items.value.length / itemsCount.value;

  translate.value = clamp(offsetX / clientWidth + translate.value, min, 0);
};

const onAutoScroll = () => {
  const length = items.value.length;
  const value = modelValue.value;

  if (autoScrollLooping.value) {
    const loopingIndex = value === length - 1 ? 0 : value + 1;

    updateIndex(loopingIndex);

    return;
  }

  if (value === length - 1) {
    emit('autoscroll-end');
  }

  updateIndex(value + 1);
};

const startTouch = () => {
  transitioned.value = false;

  translate.value = computedTranslate.value;
};

const endTouch = () => {
  shouldPreventClick.value = false;

  transitioned.value = true;
};

const onIntersect = (
  index: number,
  { intersectionRatio }: IntersectionObserverEntry
) => {
  if (intersectionRatio && intersectionRatio !== 1 && !transitioned.value) {
    shouldPreventClick.value = true;

    updateIndex(
      modelValue.value < index ? index - itemsCount.value + 1 : index
    );
  }
};

const onScroll = (delta: 1 | -1) => {
  updateIndex(modelValue.value + delta);
};

const onSwipe = (_: unknown, swipe: Swipe) => {
  const direction = swipe.direction;

  if (
    Math.round(translate.value) !== -modelValue.value ||
    !computedDraggable.value
  ) {
    return;
  }

  if (direction === 'left') {
    next();
  } else if (direction === 'right') {
    prev();
  }
};

defineExpose({
  next,
  prev,
});
</script>

<style lang="scss" module>
.container {
  position: relative;
  display: block;
  overflow: hidden;

  &_draggable {
    user-select: none;

    &:hover {
      cursor: grab;
    }

    &:active {
      cursor: grabbing;
    }
  }
}

.scroller {
  display: flex;
  overflow: auto;
  overscroll-behavior-x: none;
  padding-bottom: 2rem;
  margin-bottom: -2rem;
  transform: translateZ(0);
  will-change: transform;
  touch-action: pan-x;

  &:before,
  &:after {
    content: '';
    display: block;
    min-width: 1rem;
  }
}

.items {
  display: flex;
  align-items: center;

  &_transitioned {
    transition: transform 0.4s ease;
  }
}

.wrapper {
  position: sticky;
  left: 0;
  right: 0;
  min-width: 100%;
  overflow: hidden;
}

.item {
  padding: 0 8px;

  &_notClickable {
    pointer-events: none;
  }
}
</style>
