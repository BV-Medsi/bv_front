import { VNode } from 'vue';

export type PrimitiveRadioProps = {
  disabled: boolean;

  focused: boolean;

  hovered: boolean;

  size: 'sm' | 'md' | 'lg';

  invalid: boolean;

  value: boolean;
};

export type PrimitiveRadioSlots = {
  default: (props: {}) => ReadonlyArray<VNode>;
};
