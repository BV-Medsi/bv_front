import { VNode } from 'vue';
import { VirtualListProps } from '../VirtualList/VirtualList.props';
export declare type DataListProps<T, U> = {
    modelValue: T;
    items: ReadonlyArray<U> | null;
    size?: 'none' | 'sm' | 'md' | 'lg';
    virtualListProps?: Omit<VirtualListProps<U>, 'modelValue' | 'items'> | null;
    matcher?: (value: T, item: U) => boolean;
    overflowy?: boolean;
};
export declare type DataListEmits<T> = {
    (e: 'update:modelValue', item: T): void;
};
export declare type DataListSlots<T> = {
    itemContent?: (props: {
        item: T;
        active: boolean;
    }) => ReadonlyArray<VNode>;
    action?: (props: {}) => ReadonlyArray<VNode>;
    emptyContent?: (props: {}) => ReadonlyArray<VNode>;
};
export declare const DataListDefaultProps: {
    readonly size: "md";
    readonly virtualProps: null;
    readonly items: () => never[];
    readonly matcher: (value: any, item: any) => boolean;
    readonly overflowy: true;
};
//# sourceMappingURL=DataList.props.d.ts.map