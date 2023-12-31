import { InputCodeProps } from './InputCode.props';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<InputCodeProps>, {
    readonly length: 6;
    readonly size: "md";
    readonly resendTimeoutSeconds: 30;
    readonly isLoading: false;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submitCode: (value: string) => void;
    resendCode: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<InputCodeProps>, {
    readonly length: 6;
    readonly size: "md";
    readonly resendTimeoutSeconds: 30;
    readonly isLoading: false;
}>>> & {
    onResendCode?: (() => any) | undefined;
    onSubmitCode?: ((value: string) => any) | undefined;
}, {
    length: number;
    size: "sm" | "md";
    isLoading: boolean;
    resendTimeoutSeconds: number;
}, {}>, {
    label?(_: {}): any;
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
//# sourceMappingURL=InputCode.vue.d.ts.map