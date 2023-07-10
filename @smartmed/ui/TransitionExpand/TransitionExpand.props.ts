import { VNode } from 'vue';

export type TransitionExpandProps = { opened: boolean; duration?: number };

export type TransitionExpandSlots = {
  default: (props: {}) => ReadonlyArray<VNode>;
};

export const TransitionExpandDefaultProps = {
  opened: false,
  duration: 200,
};
