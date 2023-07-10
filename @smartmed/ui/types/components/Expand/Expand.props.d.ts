import { VNode } from 'vue';
export declare type ExpandProps = {
    modelValue?: boolean;
    rootClasses?: string | string[];
    wide?: boolean;
};
export declare type ExpandEmits = {
    (e: 'update:modelValue', value: boolean): void;
};
export declare type ExpandSlots = {
    default: (props: {
        opened: boolean;
    }) => ReadonlyArray<VNode>;
    content: (props: {}) => ReadonlyArray<VNode>;
};
export declare const ExpandDefaultProps: {
    readonly modelValue: false;
};
//# sourceMappingURL=Expand.props.d.ts.map