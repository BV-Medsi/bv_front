import { VNode } from 'vue';
import { PrimitiveRadioProps } from '../PrimitiveRadio/PrimitiveRadio.props';
export declare type BaseRadioProps<T> = {
    modelValue: T | null;
    name: string;
    item: T;
    identityMatcher?: (value: T | null, item: T) => boolean;
    disabled?: boolean;
    label?: string;
    size?: PrimitiveRadioProps['size'];
    isError?: boolean;
    pseudoHovered?: boolean;
};
export declare type BaseRadioEmits<T> = {
    (event: 'update:modelValue', value: T): void;
};
export declare type BaseRadioSlots = {
    default: (props: {}) => ReadonlyArray<VNode>;
};
export declare const BaseRadioDefaultProps: {
    readonly disabled: false;
    readonly label: "";
    readonly size: "md";
    readonly isError: false;
    readonly pseudoHovered: false;
    readonly name: "";
    readonly identityMatcher: (value: any, item: any) => boolean;
};
//# sourceMappingURL=BaseRadio.props.d.ts.map