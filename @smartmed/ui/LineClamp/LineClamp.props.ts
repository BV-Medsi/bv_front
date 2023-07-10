import { VNode } from 'vue';

export type LineClampProps = {
  lineHeight: number;

  linesLimit: number;
};

export type LineClampSlots = {
  default: (props: {}) => ReadonlyArray<VNode>;
};
