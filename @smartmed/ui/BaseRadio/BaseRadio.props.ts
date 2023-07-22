import { VNode } from 'vue';

import { PrimitiveRadioProps } from '../PrimitiveRadio/PrimitiveRadio.props';

export type BaseRadioProps<T> = {
  modelValue: T | null;

  name: string;

  item: T;

  identityMatcher?: (value: T | null, item: T) => boolean;

  disabled?: boolean;

  label?: string;

  size?: PrimitiveRadioProps['size'];

  isError?: boolean;

  pseudoHovered?: boolean;
};

export type BaseRadioEmits<T> = {
  (event: 'update:modelValue', value: T): void;
};

export type BaseRadioSlots = {
  default: (props: {}) => ReadonlyArray<VNode>;
};

export const BaseRadioDefaultProps = {
  disabled: false,
  label: '',
  size: 'md',
  isError: false,
  pseudoHovered: false,
  name: '',
  identityMatcher: (value: any, item: any) => value === item,
} as const;
