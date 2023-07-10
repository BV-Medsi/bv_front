import { VNode } from 'vue';

export type BaseCheckboxProps = {
  modelValue: boolean | null;
  disabled?: boolean;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
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
} as const;
