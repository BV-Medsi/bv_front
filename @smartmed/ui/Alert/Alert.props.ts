import { VNode } from 'vue';

export type AlertProps = {
  type?: 'success' | 'error';

  content?: string;

  closable?: boolean;
};

export type AlertSlots = {
  default?: (props: {}) => ReadonlyArray<VNode>;
};

export type AlertEmits = {
  (e: 'close'): void;
};

export const AlertDefaultProps = {
  type: 'success',
} as const;
