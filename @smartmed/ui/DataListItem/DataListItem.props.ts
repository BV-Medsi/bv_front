import { VNode } from 'vue';

export type DataListItemProps = {
  size?: 'none' | 'sm' | 'md' | 'lg';

  hoverable?: boolean;
};

export type DataListItemEmits = {
  (e: 'onClick'): void;
};

export type DataListItemSlots = {
  default?: (props: {}) => ReadonlyArray<VNode>;
};

export const DataListItemDefaultProps = {
  size: 'md',
  hoverable: true,
} as const;
