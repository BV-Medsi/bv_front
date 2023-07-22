import { VNode } from 'vue';
import { PrimitiveRadioProps } from '../PrimitiveRadio/PrimitiveRadio.props';
export declare type RadioBlockProps<T> = {
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
export declare type RadioBlockEmits<T> = {
    (event: 'update:modelValue', value: T): void;
};
export declare type RadioBlockSlots = {
    default: (props: {}) => ReadonlyArray<VNode>;
};
export declare const RadioBlockDefaultProps: {
    readonly disabled: false;
    readonly label: "";
    readonly size: "md";
    readonly isError: false;
    readonly pseudoHovered: false;
    readonly name: "";
    readonly identityMatcher: (value: any, item: any) => boolean;
};
//# sourceMappingURL=RadioBlock.props.d.ts.map