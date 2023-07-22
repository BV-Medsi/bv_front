import { CheckboxBlockProps, CheckboxBlockSlots } from './CheckboxBlock.props';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<CheckboxBlockProps>, {
    readonly modelValue: false;
    readonly disabled: false;
    readonly label: "";
    readonly size: "md";
    readonly isError: false;
    readonly pseudoHovered: false;
}>, {
    focus: () => void;
    blur: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean | null) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<CheckboxBlockProps>, {
    readonly modelValue: false;
    readonly disabled: false;
    readonly label: "";
    readonly size: "md";
    readonly isError: false;
    readonly pseudoHovered: false;
}>>> & {
    "onUpdate:modelValue"?: ((value: boolean | null) => any) | undefined;
}, {
    label: string;
    size: "sm" | "md" | "lg";
    disabled: boolean;
    pseudoHovered: boolean;
    modelValue: boolean | null;
    isError: boolean;
}, {}>, CheckboxBlockSlots>;
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
//# sourceMappingURL=CheckboxBlock.vue.d.ts.map