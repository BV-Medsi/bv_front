import { VNode } from 'vue';
export declare type BaseTextareaProps<T> = {
    modelValue: T;
    modelModifiers?: Record<string, boolean>;
    label?: string;
    indentRight?: number;
    isError?: boolean;
    disabled?: boolean;
    placeholder?: string;
    description?: string;
};
export declare type BaseTextareaEmits<T> = {
    (e: 'update:modelValue', value: T): void;
};
export declare type BaseTextareaSlots = {
    label?: (props: {}) => ReadonlyArray<VNode>;
    description?: (props: {}) => ReadonlyArray<VNode>;
};
export declare const BaseTextareaDefaultProps: {
    readonly indentRight: 0;
    readonly isError: false;
    readonly disabled: false;
    readonly label: "";
    readonly modelModifiers: () => {};
};
//# sourceMappingURL=BaseTextarea.props.d.ts.map