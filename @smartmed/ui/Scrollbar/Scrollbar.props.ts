import { Ref, VNode } from 'vue';

export type ScrollbarExposed = {
  native: Ref<HTMLElement | null>;
};

export type ScrollbarProps = {
  dataAutomationId?: string;
};

export type ScrollbarSlots = {
  default: (props: {}) => ReadonlyArray<VNode>;
};

export const ScrollbarDefaultProps = {
  dataAutomationId: 'smed-scrollbar',
};
