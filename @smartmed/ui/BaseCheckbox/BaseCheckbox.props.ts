import { VNode } from 'vue';

import { PrimitiveCheckboxProps } from '../PrimitiveCheckbox/PrimitiveCheckbox.props';

export type BaseCheckboxProps = {
  modelValue: PrimitiveCheckboxProps['value'];
  disabled?: boolean;
  label?: string;
  size?: PrimitiveCheckboxProps['size'];
  isError?: boolean;
  pseudoHovered?: boolean;
};

export type BaseCheckboxEmits = {
  (event: 'update:modelValue', value: boolean | null): void;
};

export type BaseCheckboxSlots = {
  default: (props: {}) => ReadonlyArray<VNode>;
};

export const BaseCheckboxDefaultProps = {
  modelValue: false,
  disabled: false,
  label: '',
  size: 'md',
  isError: false,
  pseudoHovered: false,
} as const;
