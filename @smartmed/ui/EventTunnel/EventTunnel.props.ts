import { VNode } from 'vue';

export type EventTunnelProps = {
  duration: number;

  eventsCount: number;

  preventOntouch?: boolean;

  isEnable?: boolean;
};

export type EventTunnelSlots = {
  default: (props: {
    progress: number;
    duration: [number, number];
  }) => ReadonlyArray<VNode>;
};

export const EventTunnelDefaultProps = {
  isEnable: true,
} as const;
