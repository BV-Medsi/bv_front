import { VNode } from 'vue';
import { RouteLocationRaw } from 'vue-router';

import { AvatarProps } from '../Avatar/Avatar.props';
import { SvgIconProps } from '../SvgIcon/SvgIcon.props';

export type CellButtonProps = {
  icon?: SvgIconProps['name'];

  avatar?: Pick<AvatarProps, 'src' | 'name' | 'rounded'>;

  rounded?: boolean;

  active?: boolean;

  to?: RouteLocationRaw;

  routeExactMatch?: boolean;

  disabled?: boolean;

  hasArrow?: boolean;

  clickable?: boolean;

  colorClass?: string;

  backgroundClass?: string;

  rightColorClass?: string;
};

export type CellButtonSlots = {
  left?: (props: {}) => ReadonlyArray<VNode>;

  default: (props: {}) => ReadonlyArray<VNode>;

  right?: (props: {}) => ReadonlyArray<VNode>;
};

export const CellButtonDefaultProps = {
  rounded: true,
  clickable: true,
} as const;
