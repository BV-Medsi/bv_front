import { CSSProperties } from 'vue';
import { DropdownHostProps, DropdownHostSlots } from './DropdownHost.props';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<DropdownHostProps>, {
    readonly modelValue: false;
    readonly canOpen: true;
    readonly maxHeight: 400;
    readonly align: "right";
    readonly direction: "bottom";
    readonly customDropdownStyles: () => {};
    readonly minHeight: 80;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<DropdownHostProps>, {
    readonly modelValue: false;
    readonly canOpen: true;
    readonly maxHeight: 400;
    readonly align: "right";
    readonly direction: "bottom";
    readonly customDropdownStyles: () => {};
    readonly minHeight: 80;
}>>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {
    direction: "top" | "bottom";
    modelValue: boolean;
    canOpen: boolean;
    minHeight: number;
    maxHeight: number;
    align: "left" | "right";
    customDropdownStyles: CSSProperties;
}, {}>, DropdownHostSlots>;
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
//# sourceMappingURL=DropdownHost.vue.d.ts.map