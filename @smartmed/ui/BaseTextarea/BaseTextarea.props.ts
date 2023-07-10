import { VNode } from 'vue';

export type BaseTextareaProps<T> = {
  modelValue: T;

  modelModifiers?: Record<string, boolean>;

  label?: string;

  indentRight?: number;

  isError?: boolean;

  disabled?: boolean;

  placeholder?: string;

  description?: string;
};

export type BaseTextareaEmits<T> = {
  (e: 'update:modelValue', value: T): void;
};

export type BaseTextareaSlots = {
  label?: (props: {}) => ReadonlyArray<VNode>;

  description?: (props: {}) => ReadonlyArray<VNode>;
};

export const BaseTextareaDefaultProps = {
  indentRight: 0,
  isError: false,
  disabled: false,
  label: '',
  modelModifiers: () => ({}),
} as const;
