declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    modelValue: number | null;
    size: "sm" | "md" | undefined;
    tabindex?: string | undefined;
    invalid?: boolean | undefined;
    disabled?: boolean | undefined;
}>, {
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (v: number | null) => void;
    onFocus: () => void;
    onBackspace: () => void;
    onPaste: (v: string | null) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    modelValue: number | null;
    size: "sm" | "md" | undefined;
    tabindex?: string | undefined;
    invalid?: boolean | undefined;
    disabled?: boolean | undefined;
}>>> & {
    "onUpdate:modelValue"?: ((v: number | null) => any) | undefined;
    onOnPaste?: ((v: string | null) => any) | undefined;
    onOnFocus?: (() => any) | undefined;
    onOnBackspace?: (() => any) | undefined;
}, {}, {}>;
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
//# sourceMappingURL=InputCodeCell.vue.d.ts.map