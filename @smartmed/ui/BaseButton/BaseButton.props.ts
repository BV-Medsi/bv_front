import { VNode } from 'vue';

type Color =
  | 'primary'
  | 'secondary'
  | 'outlined'
  | 'secondaryOutlined'
  | 'grey'
  | 'delete';

type Size = 'sm' | 'md' | 'lg';

type ButtonType = 'button' | 'submit' | 'reset';

export type BaseButtonProps = {
  title?: string;

  color?: Color;

  disabled?: boolean;

  size?: Size;

  type?: ButtonType;

  isLoading?: boolean;

  wide?: boolean;

  icon?: string;

  pseudoHovered?: boolean;

  rounded?: boolean;
};

export const BaseButtonDefaultProps = {
  color: 'primary',
  disabled: false,
  size: 'md',
  type: 'button',
  icon: '',
  isLoading: false,
  wide: false,
  pseudoHovered: false,
  rounded: false,
  title: '',
} as const;

export type BaseButtonSlots = {
  icon: (props: {}) => ReadonlyArray<VNode>;
  default: (props: {}) => ReadonlyArray<VNode>;
};
