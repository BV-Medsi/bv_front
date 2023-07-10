import { VNode } from 'vue';

import { ChipsItemProps } from '../ChipsItem/ChipsItem.props';

export type FiltersProps<T> = {
  modelValue: T[];

  items: T[];

  icon?: string | ((item: T, index: number) => string);

  size?: NonNullable<ChipsItemProps['size']>;

  rounded?: boolean;

  matcher?: (value: T, item: T) => boolean;

  disableItemHandler?: (item: T, index: number) => boolean;

  dataAutomationItemPrefix?: string;
};

export type FiltersEmits<T> = {
  (e: 'update:modelValue', value: T[]): boolean;
};

export type FiltersSlots<T> = {
  default: (props: { item: T; active: boolean }) => ReadonlyArray<VNode>;
};

export const FiltersDefaultProps = {
  rounded: false,
  matcher: (value: unknown, item: unknown) => value === item,
  disableItemHandler: () => false,
  dataAutomationItemPrefix: 'smed-filters-item',
} as const;
