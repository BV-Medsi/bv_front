import { VNode } from 'vue';

import { PrimitiveCheckboxProps } from '../PrimitiveCheckbox/PrimitiveCheckbox.props';

export type CheckboxBlockProps = {
  modelValue: PrimitiveCheckboxProps['value'];
  disabled?: boolean;
  label?: string;
  size?: PrimitiveCheckboxProps['size'];
  isError?: boolean;
  pseudoHovered?: boolean;
};

export type CheckboxBlockEmits = {
  (event: 'update:modelValue', value: boolean | null): void;
};

export type CheckboxBlockSlots = {
  default: (props: {}) => ReadonlyArray<VNode>;
};

export const CheckboxBlockDefaultProps = {
  modelValue: false,
  disabled: false,
  label: '',
  size: 'md',
  isError: false,
  pseudoHovered: false,
} as const;
