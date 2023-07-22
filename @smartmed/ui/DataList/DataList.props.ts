import { VNode } from 'vue';

import { DataListItemProps } from '../DataListItem/DataListItem.props';

export type DataListProps<T, U> = {
  modelValue: T;

  items: ReadonlyArray<U> | null;

  size?: DataListItemProps['size'];

  matcher?: (value: T, item: U) => boolean;

  overflowy?: boolean;
};

export type DataListEmits<T> = {
  (e: 'update:modelValue', item: T): void;
};

export type DataListSlots<T> = {
  list?: (props: {
    getIsActive: (item: T) => boolean;
    onUpdate: (item: T) => void;
  }) => ReadonlyArray<VNode>;

  itemContent?: (props: { item: T; active: boolean }) => ReadonlyArray<VNode>;

  action?: (props: {}) => ReadonlyArray<VNode>;

  emptyContent?: (props: {}) => ReadonlyArray<VNode>;
};

export const DataListDefaultProps = {
  size: 'md',
  items: () => [],
  matcher: (value: any, item: any) => value === item,
  overflowy: true,
} as const;
