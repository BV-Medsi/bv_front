<template><div ref="thumbRef" /></template>

<script setup lang="ts">
import {
  ANIMATION_FRAME_EVENTS_TOKEN,
  SCROLLBAR_REF_TOKEN,
} from '@smartmed/ui/tokens';
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

import { SCROLLBAR_WRAPPER_TOKEN } from './scrollbarTokens';

const MIN_WIDTH = 24;
const POLLING_TIME = 1000 / 15;

const props = withDefaults(
  defineProps<{ direction?: 'vertical' | 'horizontal' }>(),
  {
    direction: 'vertical',
  }
);

const { direction } = toRefs(props);

const thumbRef = ref<HTMLElement | null>(null);

const wrapperRef = inject<Ref<HTMLElement | null>>(SCROLLBAR_WRAPPER_TOKEN)!;
const containerRef = inject<Ref<HTMLElement | null> | null>(
  SCROLLBAR_REF_TOKEN,
  null
);
const animationEvents = inject<Ref<number>>(ANIMATION_FRAME_EVENTS_TOKEN)!;

const computedContainer = computed(
  () => (containerRef && containerRef.value) || document.documentElement
);
const containerOrWindow = computed(
  () => (containerRef && containerRef.value) || window
);

const compensation = () => {
  const container = computedContainer.value;

  const { clientHeight, scrollHeight, clientWidth, scrollWidth } = container;

  if (
    ((clientHeight * clientHeight) / scrollHeight > MIN_WIDTH &&
      direction.value === 'vertical') ||
    ((clientWidth * clientWidth) / scrollWidth > MIN_WIDTH &&
      direction.value === 'horizontal')
  ) {
    return 0;
  }

  return direction.value === 'vertical'
    ? MIN_WIDTH / clientHeight
    : MIN_WIDTH / clientWidth;
};

const view = () => {
  const container = computedContainer.value;

  const { clientHeight, scrollHeight, clientWidth, scrollWidth } = container;

  return direction.value === 'vertical'
    ? Math.ceil((clientHeight / scrollHeight) * 100) / 100
    : Math.ceil((clientWidth / scrollWidth) * 100) / 100;
};

const scrolled = () => {
  const container = computedContainer.value;

  const {
    scrollTop,
    scrollHeight,
    clientHeight,
    scrollLeft,
    scrollWidth,
    clientWidth,
  } = container;

  return direction.value === 'vertical'
    ? scrollTop / (scrollHeight - clientHeight)
    : scrollLeft / (scrollWidth - clientWidth);
};

const thumb = () => {
  const _compensation = compensation() || view();

  return scrolled() * (1 - _compensation);
};

const handleSize = () => {
  const _thumb = thumbRef.value;

  if (!_thumb) {
    return;
  }

  if (props.direction === 'vertical') {
    _thumb.style.top = `${thumb() * 100}%`;
    _thumb.style.height = `${view() * 100}%`;
  } else {
    _thumb.style.left = `${thumb() * 100}%`;
    _thumb.style.width = `${view() * 100}%`;
  }
};

const getScrolled = (
  { clientY, clientX }: MouseEvent,
  offsetVertical: number,
  offsetHorizontal: number
): [number, number] => {
  if (!thumbRef.value || !wrapperRef.value) {
    return [0, 0];
  }

  const { offsetHeight, offsetWidth } = thumbRef.value;
  const { top, left, width, height } = wrapperRef.value.getBoundingClientRect();

  const maxTop = computedContainer.value.scrollHeight - height;
  const maxLeft = computedContainer.value.scrollWidth - width;

  const scrolledTop =
    (clientY - top - offsetHeight * offsetVertical) / (height - offsetHeight);
  const scrolledLeft =
    (clientX - left - offsetWidth * offsetHorizontal) / (width - offsetWidth);

  return [maxTop * scrolledTop, maxLeft * scrolledLeft];
};

let thumbDownVerical = 0;
let thumbDownHorizontal = 0;

const getOffsetVertical = (
  { clientY }: MouseEvent,
  { top, height }: DOMRect
): number => {
  return (clientY - top) / height;
};

const getOffsetHorizontal = (
  { clientX }: MouseEvent,
  { left, width }: DOMRect
): number => {
  return (clientX - left) / width;
};

const handleDocumentMouseUp = () => {
  document.removeEventListener('mousemove', handleDocumentMouseMove);
};

const handleDocumentMouseMove = (ev: MouseEvent) => {
  const [scrollTop, scrollLeft] = getScrolled(
    ev,
    thumbDownVerical,
    thumbDownHorizontal
  );

  const _container = containerRef && containerRef.value;

  if (!_container) {
    const { scrollX, scrollY } = window;

    window.scrollTo(
      direction.value === 'vertical' ? scrollX : scrollLeft,
      direction.value === 'vertical' ? scrollTop : scrollY
    );

    return;
  }

  if (props.direction === 'vertical') {
    _container.scrollTop = scrollTop;
  } else {
    _container.scrollLeft = scrollLeft;
  }
};

const handleThumbMouseDown = (ev: MouseEvent) => {
  ev.preventDefault();
  ev.stopPropagation();

  if (!thumbRef.value) {
    return;
  }

  const rect = thumbRef.value.getBoundingClientRect();

  thumbDownVerical = getOffsetVertical(ev, rect);
  thumbDownHorizontal = getOffsetHorizontal(ev, rect);

  document.removeEventListener('mousemove', handleDocumentMouseMove);
  document.removeEventListener('mouseup', handleDocumentMouseUp);

  document.addEventListener('mousemove', handleDocumentMouseMove);
  document.addEventListener('mouseup', handleDocumentMouseUp);
};

const handleWrapperMouseDown = (ev: MouseEvent) => {
  ev.preventDefault();

  const _container = containerRef && containerRef.value;

  const [scrollTop, scrollLeft] = getScrolled(ev, 0.5, 0.5);

  if (!_container) {
    const { scrollX, scrollY } = window;

    window.scrollTo(
      direction.value === 'vertical' ? scrollX : scrollLeft,
      direction.value === 'vertical' ? scrollTop : scrollY
    );

    return;
  }

  if (props.direction === 'vertical') {
    _container.scrollTop = scrollTop;
  } else {
    _container.scrollLeft = scrollLeft;
  }
};

const initialize = () => {
  containerOrWindow.value.addEventListener('scroll', handleSize);

  thumbRef.value?.addEventListener('mousedown', handleThumbMouseDown);
  wrapperRef.value?.addEventListener('mousedown', handleWrapperMouseDown);
};

onBeforeUnmount(() => {
  containerOrWindow.value.removeEventListener('scroll', handleSize);

  thumbRef.value?.removeEventListener('mousedown', handleThumbMouseDown);
  wrapperRef.value?.removeEventListener('mousedown', handleWrapperMouseDown);

  document.removeEventListener('mousemove', handleDocumentMouseMove);
  document.removeEventListener('mouseup', handleDocumentMouseUp);
});

const handleSizeThrottled = useThrottleFn(handleSize, POLLING_TIME);

watch(animationEvents, handleSizeThrottled, { immediate: true });
watch(
  [wrapperRef, thumbRef],
  (_wrapper, _thumb) => {
    if (_wrapper && _thumb) {
      initialize();
    }
  },
  { immediate: true }
);
</script>
