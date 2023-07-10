import { VNode } from 'vue';

export type TooltipDirection =
  | 'left'
  | 'right'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-middle'
  | 'top-left'
  | 'top-right'
  | 'top-middle';

export type TooltipProps = {
  direction?: TooltipDirection;

  describedBy?: string;
};

export type TooltipSlots = {
  default: (props: {}) => ReadonlyArray<VNode>;

  hint: (props: {}) => ReadonlyArray<VNode>;
};

export const TooltipDefaultProps = {
  direction: 'bottom-right',
} as const;
