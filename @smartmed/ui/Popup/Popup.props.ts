import { VNode } from 'vue';

export type PopupProps = {
  modelValue?: boolean;

  size?: 'sm' | 'md' | 'lg' | 'full';

  dismissible?: boolean;

  closable?: boolean;

  title?: string;
};

export type PopupEmits = {
  (e: 'update:modelValue', value: boolean): void;
};

export type PopupSlots = {
  default: (props: { close: () => void }) => ReadonlyArray<VNode>;
};

export const PopupDefaultProps = {
  modelValue: false,
  size: 'md',
  dismissible: true,
  closable: true,
  title: '',
} as const;
