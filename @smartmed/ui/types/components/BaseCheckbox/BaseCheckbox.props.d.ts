import { VNode } from 'vue';
export declare type BaseCheckboxProps = {
    modelValue: boolean | null;
    disabled?: boolean;
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    isError?: boolean;
    pseudoHovered?: boolean;
};
export declare type BaseCheckboxEmits = {
    (event: 'update:modelValue', value: boolean | null): void;
};
export declare type BaseCheckboxSlots = {
    default: (props: {}) => ReadonlyArray<VNode>;
};
export declare const BaseCheckboxDefaultProps: {
    readonly modelValue: false;
    readonly disabled: false;
    readonly label: "";
    readonly size: "md";
    readonly isError: false;
};
//# sourceMappingURL=BaseCheckbox.props.d.ts.map