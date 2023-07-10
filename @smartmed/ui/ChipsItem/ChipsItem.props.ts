import { VNode } from 'vue';

import { SvgIconProps } from '../SvgIcon/SvgIcon.props';

export type ChipsItemProps = {
  size?: 'sm' | 'md';

  active?: boolean;

  rounded?: boolean;

  icon?: SvgIconProps['name'];

  disabled?: boolean;

  removable?: boolean;
};

export type ChipsItemSlots = {
  default?: (props: {}) => ReadonlyArray<VNode>;

  icon?: (props: {}) => ReadonlyArray<VNode>;
};

export type ChipsItemEmits = {
  (e: 'remove'): void;
};

export const ChipsItemDefaultProps = {
  rounded: true,
  size: 'md',
} as const;
