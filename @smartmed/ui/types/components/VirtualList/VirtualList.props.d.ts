import { VNode } from 'vue';
export declare type VirtualListDirection = 'horizontal' | 'vertical';
export declare type VirtualListProps<T> = {
    items: ReadonlyArray<T>;
    dataKey: keyof T;
    keeps?: number;
    estimateSize?: number;
    pageMode?: boolean;
    direction?: VirtualListDirection;
    start?: number;
    offset?: number;
    topThreshold?: number;
    bottomThreshold?: number;
};
export declare type VirtualListEmits = {
    (e: 'totop'): void;
    (e: 'tobottom'): void;
};
export declare type VirtualListSlots<T> = {
    before: (props: {}) => ReadonlyArray<VNode>;
    default: (props: {
        item: T;
    }) => ReadonlyArray<VNode>;
    after: (props: {}) => ReadonlyArray<VNode>;
};
export declare const VirtualListDefaultProps: {
    readonly items: () => never[];
    readonly dataKey: "id";
    readonly keeps: 50;
    readonly estimateSize: 50;
    readonly direction: "vertical";
    readonly start: 0;
    readonly offset: 0;
    readonly topThreshold: 0;
    readonly bottomThreshold: 0;
};
//# sourceMappingURL=VirtualList.props.d.ts.map