import { VNode } from 'vue';

export type CarouselProps<T> = {
  modelValue: number;

  itemsCount: number;

  items: ReadonlyArray<T>;

  draggable?: boolean;

  autoScrollLooping?: boolean;
};

export type CarouselEmits = {
  (e: 'update:modelValue', value: number): void;
  (e: 'autoscroll-end'): void;
};

export type CarouselSlots<T> = {
  default: (props: { item: T }) => ReadonlyArray<VNode>;
};

export const CarouselDefaultProps = {
  draggable: false,
  autoScrollLooping: false,
} as const;
