import { VNode } from 'vue';
export declare type RotatableListProps<T> = {
    modelValue: number;
    items?: ReadonlyArray<T>;
    width: number;
    height: number;
};
export declare type RotatableListSlots<T> = {
    default: (props: {
        item: T;
        isActive: boolean;
    }) => ReadonlyArray<VNode>;
};
export declare const RotatableListDefaultProps: {
    readonly items: () => never[];
};
//# sourceMappingURL=RotatableList.props.d.ts.map