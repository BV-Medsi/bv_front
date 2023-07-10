declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<import("../NumberInput/NumberInput.props").NumberInputProps>, {
    readonly thousandSeparator: " ";
    readonly decoratorPostfix: string;
    readonly decimalSeparator: ",";
    readonly min: 0;
    readonly modelModifiers: () => Record<string, boolean>;
    readonly type: "text";
    readonly size: "md";
    readonly disabled: false;
    readonly editable: true;
    readonly id: "";
    readonly stringify: <T>(value: T) => string;
    readonly dataAutomationId: "smed-base-input-native";
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number | null) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<import("../NumberInput/NumberInput.props").NumberInputProps>, {
    readonly thousandSeparator: " ";
    readonly decoratorPostfix: string;
    readonly decimalSeparator: ",";
    readonly min: 0;
    readonly modelModifiers: () => Record<string, boolean>;
    readonly type: "text";
    readonly size: "md";
    readonly disabled: false;
    readonly editable: true;
    readonly id: "";
    readonly stringify: <T>(value: T) => string;
    readonly dataAutomationId: "smed-base-input-native";
}>>> & {
    "onUpdate:modelValue"?: ((value: number | null) => any) | undefined;
}, {
    type: string;
    id: string;
    size: "sm" | "md" | "lg";
    dataAutomationId: string;
    disabled: boolean;
    min: number;
    modelModifiers: Record<string, boolean>;
    editable: boolean;
    decoratorPostfix: string;
    stringify: import("../..").Stringify<number | null>;
    decimalSeparator: string;
    thousandSeparator: string;
}, {}>, {
    label?(_: {}): any;
    description?(_: {}): any;
}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
declare type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
//# sourceMappingURL=InputMoney.vue.d.ts.map