import { VNode } from 'vue';
import { PrimitiveCheckboxProps } from '../PrimitiveCheckbox/PrimitiveCheckbox.props';
export declare type BaseCheckboxProps = {
    modelValue: PrimitiveCheckboxProps['value'];
    disabled?: boolean;
    label?: string;
    size?: PrimitiveCheckboxProps['size'];
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
    readonly pseudoHovered: false;
};
//# sourceMappingURL=BaseCheckbox.props.d.ts.map