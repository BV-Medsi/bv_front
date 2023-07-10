import { VNode } from 'vue';

export type BadgeProps = {
  value?: string | number | null;

  notificationClass?: string | string[];
};

export type BadgeSlots = {
  default: (props: {}) => ReadonlyArray<VNode>;
};
