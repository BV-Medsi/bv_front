import { VNode } from 'vue';

import { ChipsItemProps } from '../ChipsItem/ChipsItem.props';

export type ChipsProps<T, U> = {
  modelValue: T;

  items: U[];

  icon?: string | ((item: U, index: number) => string);

  rounded?: ChipsItemProps['rounded'];

  removable?: boolean | ((item: U, index: number) => boolean);

  matcher?: (value: T, item: U) => boolean;

  disableItemHandler?: (item: U, index: number) => boolean;

  dataAutomationItemPrefix?: string;

  size?: NonNullable<ChipsItemProps['size']>;
};

export type ChipsEmits<T> = {
  (e: 'update:modelValue', value: T): void;
  (e: 'remove', value: T): void;
};

export type ChipsSlots<T> = {
  default?: (props: { item: T; active: boolean }) => ReadonlyArray<VNode>;
};

export const ChipsDefaultProps = {
  rounded: true,
  matcher: (value: unknown, item: unknown) => value === item,
  disableItemHandler: () => false,
  dataAutomationItemPrefix: 'smed-chips-item',
} as const;

export type ChipsExpose = {
  scrollTo: (index: number) => void;
};
