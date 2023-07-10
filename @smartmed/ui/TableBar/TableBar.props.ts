import { VNode } from 'vue';

export type TableBarProps = {
  modelValue: boolean;

  direction?: 'left' | 'right' | 'top' | 'bottom';

  overlay?: boolean;

  rootClass?: string | string[];

  contentClass?: string | string[];

  dataAutomationId?: string;

  closeButton?: boolean;
};

export type TableBarEmits = {
  (e: 'update:modelValue', value: boolean): void;
};

export type TableBarSlots = {
  default: (props: { close: () => void }) => ReadonlyArray<VNode>;
};

export type TableBarHostInstance = {
  isOverlay: boolean;
  showOverlay: () => void;
  hideOverlay: () => void;
};

export const TableBarDefaultProps = {
  direction: 'bottom',
} as const;
