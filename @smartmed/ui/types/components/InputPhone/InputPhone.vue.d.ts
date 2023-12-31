import { InputPhoneProps, InputPhoneSlots } from './InputPhone.props';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<InputPhoneProps>, {
    autocomplete: string;
    type: string;
    name: string;
    placeholder: string;
    modelModifiers: () => Record<string, boolean>;
    size: "md";
    disabled: false;
    editable: true;
    id: "";
    stringify: <T>(value: T) => string;
    dataAutomationId: "smed-base-input-native";
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<InputPhoneProps>, {
    autocomplete: string;
    type: string;
    name: string;
    placeholder: string;
    modelModifiers: () => Record<string, boolean>;
    size: "md";
    disabled: false;
    editable: true;
    id: "";
    stringify: <T>(value: T) => string;
    dataAutomationId: "smed-base-input-native";
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
}, {}>, InputPhoneSlots>;
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
//# sourceMappingURL=InputPhone.vue.d.ts.map