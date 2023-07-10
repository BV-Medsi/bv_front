import { VNode } from 'vue';

export type ExpandProps = {
  modelValue?: boolean;
  rootClasses?: string | string[];
  wide?: boolean;
};

export type ExpandEmits = {
  (e: 'update:modelValue', value: boolean): void;
};

export type ExpandSlots = {
  default: (props: { opened: boolean }) => ReadonlyArray<VNode>;

  content: (props: {}) => ReadonlyArray<VNode>;
};

export const ExpandDefaultProps = {
  modelValue: false,
} as const;
