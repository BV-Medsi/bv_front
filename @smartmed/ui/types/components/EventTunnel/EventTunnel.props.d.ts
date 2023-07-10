import { VNode } from 'vue';
export declare type EventTunnelProps = {
    duration: number;
    eventsCount: number;
    preventOntouch?: boolean;
    isEnable?: boolean;
};
export declare type EventTunnelSlots = {
    default: (props: {
        progress: number;
        duration: [number, number];
    }) => ReadonlyArray<VNode>;
};
export declare const EventTunnelDefaultProps: {
    readonly isEnable: true;
};
//# sourceMappingURL=EventTunnel.props.d.ts.map