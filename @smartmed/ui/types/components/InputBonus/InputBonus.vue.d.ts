import { InputBonusProps, InputBonusSlots } from './InputBonus.props';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<InputBonusProps>, {
    readonly thousandSeparator: " ";
    readonly placeholder: "0";
    readonly min: 0;
    readonly dataAutomationId: "smed-input-bonus";
    readonly decimalSeparator: ",";
    readonly modelModifiers: () => Record<string, boolean>;
    readonly type: "text";
    readonly size: "md";
    readonly disabled: false;
    readonly editable: true;
    readonly id: "";
    readonly stringify: <T>(value: T) => string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number | null) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<InputBonusProps>, {
    readonly thousandSeparator: " ";
    readonly placeholder: "0";
    readonly min: 0;
    readonly dataAutomationId: "smed-input-bonus";
    readonly decimalSeparator: ",";
    readonly modelModifiers: () => Record<string, boolean>;
    readonly type: "text";
    readonly size: "md";
    readonly disabled: false;
    readonly editable: true;
    readonly id: "";
    readonly stringify: <T>(value: T) => string;
}>>> & {
    "onUpdate:modelValue"?: ((value: number | null) => any) | undefined;
}, {
    type: string;
    id: string;
    placeholder: string;
    dataAutomationId: string;
    disabled: boolean;
    min: number;
    modelModifiers: Record<string, boolean>;
    editable: boolean;
    stringify: import("../..").Stringify<number | null>;
    thousandSeparator: string;
}, {}>, InputBonusSlots>;
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
//# sourceMappingURL=InputBonus.vue.d.ts.map