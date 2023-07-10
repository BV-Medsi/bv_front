import { VNode } from 'vue';

export type NotificationProps = {
  color?: 'grey' | 'white';
  size?: 'sm' | 'md' | 'lg';
  closable?: boolean;
  icon?: string;
};

export type NotificationSlots = {
  icon?: (props: {}) => ReadonlyArray<VNode>;
  default?: (props: {}) => ReadonlyArray<VNode>;
};

export const NotificationDefaultProps = {
  color: 'grey',
  size: 'md',
  closable: true,
  icon: '',
} as const;
