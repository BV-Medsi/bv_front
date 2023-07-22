import { VNode } from 'vue';
import { PrimitiveCheckboxProps } from '../PrimitiveCheckbox/PrimitiveCheckbox.props';
export declare type CheckboxBlockProps = {
    modelValue: PrimitiveCheckboxProps['value'];
    disabled?: boolean;
    label?: string;
    size?: PrimitiveCheckboxProps['size'];
    isError?: boolean;
    pseudoHovered?: boolean;
};
export declare type CheckboxBlockEmits = {
    (event: 'update:modelValue', value: boolean | null): void;
};
export declare type CheckboxBlockSlots = {
    default: (props: {}) => ReadonlyArray<VNode>;
};
export declare const CheckboxBlockDefaultProps: {
    readonly modelValue: false;
    readonly disabled: false;
    readonly label: "";
    readonly size: "md";
    readonly isError: false;
    readonly pseudoHovered: false;
};
//# sourceMappingURL=CheckboxBlock.props.d.ts.map