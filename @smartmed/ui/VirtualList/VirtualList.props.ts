import { VNode } from 'vue';

export type VirtualListDirection = 'horizontal' | 'vertical';

export type VirtualListProps<T> = {
  items: ReadonlyArray<T>;

  dataKey: keyof T;

  keeps?: number;

  estimateSize?: number;

  pageMode?: boolean;

  direction?: VirtualListDirection;

  start?: number;

  offset?: number;

  topThreshold?: number;

  bottomThreshold?: number;
};

export type VirtualListEmits = {
  (e: 'totop'): void;
  (e: 'tobottom'): void;
};

export type VirtualListSlots<T> = {
  before: (props: {}) => ReadonlyArray<VNode>;

  default: (props: { item: T }) => ReadonlyArray<VNode>;

  after: (props: {}) => ReadonlyArray<VNode>;
};

export const VirtualListDefaultProps = {
  items: () => [],
  dataKey: 'id',
  keeps: 50,
  estimateSize: 50,
  direction: 'vertical',
  start: 0,
  offset: 0,
  topThreshold: 0,
  bottomThreshold: 0,
} as const;
