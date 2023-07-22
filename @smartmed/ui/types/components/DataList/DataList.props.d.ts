import { VNode } from 'vue';
import { DataListItemProps } from '../DataListItem/DataListItem.props';
export declare type DataListProps<T, U> = {
    modelValue: T;
    items: ReadonlyArray<U> | null;
    size?: DataListItemProps['size'];
    matcher?: (value: T, item: U) => boolean;
    overflowy?: boolean;
};
export declare type DataListEmits<T> = {
    (e: 'update:modelValue', item: T): void;
};
export declare type DataListSlots<T> = {
    list?: (props: {
        getIsActive: (item: T) => boolean;
        onUpdate: (item: T) => void;
    }) => ReadonlyArray<VNode>;
    itemContent?: (props: {
        item: T;
        active: boolean;
    }) => ReadonlyArray<VNode>;
    action?: (props: {}) => ReadonlyArray<VNode>;
    emptyContent?: (props: {}) => ReadonlyArray<VNode>;
};
export declare const DataListDefaultProps: {
    readonly size: "md";
    readonly items: () => never[];
    readonly matcher: (value: any, item: any) => boolean;
    readonly overflowy: true;
};
//# sourceMappingURL=DataList.props.d.ts.map