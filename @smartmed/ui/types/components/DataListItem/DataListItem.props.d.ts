import { VNode } from 'vue';
export declare type DataListItemProps = {
    size?: 'none' | 'sm' | 'md' | 'lg';
    hoverable?: boolean;
};
export declare type DataListItemEmits = {
    (e: 'onClick'): void;
};
export declare type DataListItemSlots = {
    default?: (props: {}) => ReadonlyArray<VNode>;
};
export declare const DataListItemDefaultProps: {
    readonly size: "md";
    readonly hoverable: true;
};
//# sourceMappingURL=DataListItem.props.d.ts.map