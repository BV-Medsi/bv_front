import { VNode } from 'vue';

export type ActiveZoneProps = { child?: HTMLElement | null };

export type ActiveZoneEmits = {
  (e: 'active-zone-changed', value: boolean): void;
};

export type ActiveZoneSlots = {
  default: (props: {}) => ReadonlyArray<VNode>;
};
