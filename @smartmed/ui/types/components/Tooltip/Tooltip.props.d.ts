import { VNode } from 'vue';
export declare type TooltipDirection = 'left' | 'right' | 'bottom-left' | 'bottom-right' | 'bottom-middle' | 'top-left' | 'top-right' | 'top-middle';
export declare type TooltipProps = {
    direction?: TooltipDirection;
    describedBy?: string;
    wide?: boolean;
};
export declare type TooltipSlots = {
    default: (props: {}) => ReadonlyArray<VNode>;
    hint: (props: {}) => ReadonlyArray<VNode>;
};
export declare const TooltipDefaultProps: {
    readonly direction: "bottom-right";
};
//# sourceMappingURL=Tooltip.props.d.ts.map