import type { MaskOptions, Stringify } from '@smartmed/ui/types';
import { ComputedRef, CSSProperties, Ref, VNode } from 'vue';

type Size = 'sm' | 'md' | 'lg';

export type BaseInputProps<T> = {
  modelValue: T;
  modelModifiers?: Record<string, boolean>;
  type?: string;
  size?: Size;
  disabled?: boolean;
  label?: string;
  description?: string;
  editable?: boolean;
  maskOptions?: MaskOptions;
  isError?: boolean;
  isSuccess?: boolean;
  placeholder?: string;
  autocomplete?: string;
  name?: string;
  hasCleaner?: boolean;
  decoratorPostfix?: string;
  decoratorPostfixColorClass?: string;
  inputmode?:
    | 'text'
    | 'search'
    | 'none'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | undefined;
  readonly?: boolean;
  stringify?: Stringify<T>;
  id?: string;
  dataAutomationId?: string;

  pseudoHovered?: boolean;
  pseudoFocused?: boolean;

  inputStyles?: CSSProperties;
  rightSlotPadding?: string;
};

export const BaseInputDefaultProps = {
  modelModifiers: () => ({} as Record<string, boolean>),
  type: 'text',
  size: 'md',
  disabled: false,
  editable: true,
  id: '',
  stringify: <T>(value: T) =>
    value !== null && value !== undefined ? String(value) : '',
  dataAutomationId: 'smed-base-input-native',
} as const;

export type BaseInputEmits<T> = {
  (e: 'update:modelValue', value: T): void;
  (e: 'search-clear'): void;
};

export type BaseInputSlots = {
  label?: (prop: {}) => ReadonlyArray<VNode>;
  description?: (prop: {}) => ReadonlyArray<VNode>;
  left: (props: { size: 'md' | 'lg' }) => ReadonlyArray<VNode>;
  right: (props: {}) => ReadonlyArray<VNode>;
  valueContent: (props: {}) => ReadonlyArray<VNode>;
};

export type BaseInputExpose = {
  focus: () => void;
  blur: () => void;
  native: Ref<HTMLInputElement | null>;
  wrapper: Ref<HTMLElement | null>;
  focused: ComputedRef<boolean>;
};
