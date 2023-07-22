import { VNode } from 'vue';

export type PrimitiveCheckboxProps = {
  disabled: boolean;

  focused: boolean;

  hovered: boolean;

  size: 'sm' | 'md' | 'lg';

  invalid: boolean;

  value: boolean | null;
};

export type PrimitiveCheckboxSlots = {
  default: (props: {}) => ReadonlyArray<VNode>;
};
