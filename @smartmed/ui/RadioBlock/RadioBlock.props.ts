import { VNode } from 'vue';

import { PrimitiveRadioProps } from '../PrimitiveRadio/PrimitiveRadio.props';

export type RadioBlockProps<T> = {
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

export type RadioBlockEmits<T> = {
  (event: 'update:modelValue', value: T): void;
};

export type RadioBlockSlots = {
  default: (props: {}) => ReadonlyArray<VNode>;
};

export const RadioBlockDefaultProps = {
  disabled: false,
  label: '',
  size: 'md',
  isError: false,
  pseudoHovered: false,
  name: '',
  identityMatcher: (value: any, item: any) => value === item,
} as const;
