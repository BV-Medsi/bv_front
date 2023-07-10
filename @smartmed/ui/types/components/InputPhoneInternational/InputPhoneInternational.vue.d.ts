import { InputPhoneInternationalProps, InputPhoneInternationalSlots } from './InputPhoneInternational.props';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<InputPhoneInternationalProps>, {
    readonly placeholder: "";
    readonly dataAutomationId: "smed-input-phone-international";
    readonly autocomplete: string;
    readonly type: string;
    readonly name: string;
    readonly modelModifiers: () => Record<string, boolean>;
    readonly size: "md";
    readonly disabled: false;
    readonly editable: true;
    readonly id: "";
    readonly stringify: <T>(value: T) => string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<InputPhoneInternationalProps>, {
    readonly placeholder: "";
    readonly dataAutomationId: "smed-input-phone-international";
    readonly autocomplete: string;
    readonly type: string;
    readonly name: string;
    readonly modelModifiers: () => Record<string, boolean>;
    readonly size: "md";
    readonly disabled: false;
    readonly editable: true;
    readonly id: "";
    readonly stringify: <T>(value: T) => string;
}>>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {
    name: string;
    type: string;
    id: string;
    placeholder: string;
    size: "sm" | "md" | "lg";
    dataAutomationId: string;
    disabled: boolean;
    autocomplete: string;
    modelModifiers: Record<string, boolean>;
    editable: boolean;
    stringify: import("../..").Stringify<string>;
}, {}>, InputPhoneInternationalSlots>;
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
//# sourceMappingURL=InputPhoneInternational.vue.d.ts.map