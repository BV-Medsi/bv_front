import { VNode } from 'vue';

import { VirtualListProps } from '../VirtualList/VirtualList.props';

export type DataListProps<T, U> = {
  modelValue: T;

  items: ReadonlyArray<U> | null;

  size?: 'none' | 'sm' | 'md' | 'lg';

  virtualListProps?: Omit<VirtualListProps<U>, 'modelValue' | 'items'> | null;

  matcher?: (value: T, item: U) => boolean;

  overflowy?: boolean;
};

export type DataListEmits<T> = {
  (e: 'update:modelValue', item: T): void;
};

export type DataListSlots<T> = {
  itemContent?: (props: { item: T; active: boolean }) => ReadonlyArray<VNode>;

  action?: (props: {}) => ReadonlyArray<VNode>;

  emptyContent?: (props: {}) => ReadonlyArray<VNode>;
};

export const DataListDefaultProps = {
  size: 'md',
  virtualProps: null,
  items: () => [],
  matcher: (value: any, item: any) => value === item,
  overflowy: true,
} as const;
