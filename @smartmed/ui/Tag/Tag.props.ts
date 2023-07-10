import { VNode } from 'vue';

import { SvgIconProps } from '../SvgIcon/SvgIcon.props';

export type TagProps = {
  status?: 'default' | 'success' | 'info' | 'error' | 'custom';

  icon?: SvgIconProps['name'];
};

export const TagDefaultProps = {
  status: 'default',
} as const;

export type TagSlots = {
  icon?: (props: {}) => ReadonlyArray<VNode>;

  default: (props: {}) => ReadonlyArray<VNode>;
};
