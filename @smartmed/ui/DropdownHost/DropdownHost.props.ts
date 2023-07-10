import { CSSProperties, VNode } from 'vue';

export const DEFAULT_MAX_HEIGHT = 400;
export const DEFAULT_MIN_HEIGHT = 80;

export type DropdownHostProps = {
  modelValue?: boolean;

  canOpen?: boolean;

  minHeight?: number;

  maxHeight?: number;

  maxWidth?: number;

  minWidth?: number;

  align?: 'left' | 'right';

  direction?: 'top' | 'bottom';

  customDropdownStyles?: CSSProperties;
};

export type DropdownHostEmits = {
  (e: 'update:modelValue', value: boolean): void;
};

export type DropdownHostSlots = {
  default?: (props: {}) => ReadonlyArray<VNode>;
  dropdown?: (props: {}) => ReadonlyArray<VNode>;
};

export const DropdownHostDefaultProps = {
  modelValue: false,
  canOpen: true,
  maxHeight: DEFAULT_MAX_HEIGHT,
  align: 'right',
  direction: 'bottom',
  customDropdownStyles: () => ({}),
  minHeight: DEFAULT_MIN_HEIGHT,
} as const;
