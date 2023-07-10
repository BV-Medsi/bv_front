import { BaseButtonProps, BaseButtonSlots } from './BaseButton.props';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BaseButtonProps>, {
    readonly color: "primary";
    readonly disabled: false;
    readonly size: "md";
    readonly type: "button";
    readonly icon: "";
    readonly isLoading: false;
    readonly wide: false;
    readonly pseudoHovered: false;
    readonly rounded: false;
    readonly title: "";
}>, {
    blur: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BaseButtonProps>, {
    readonly color: "primary";
    readonly disabled: false;
    readonly size: "md";
    readonly type: "button";
    readonly icon: "";
    readonly isLoading: false;
    readonly wide: false;
    readonly pseudoHovered: false;
    readonly rounded: false;
    readonly title: "";
}>>>, {
    type: "button" | "reset" | "submit";
    title: string;
    color: "primary" | "secondary" | "outlined" | "secondaryOutlined" | "grey" | "delete";
    size: "sm" | "md" | "lg";
    icon: string;
    disabled: boolean;
    rounded: boolean;
    isLoading: boolean;
    wide: boolean;
    pseudoHovered: boolean;
}, {}>, BaseButtonSlots>;
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
//# sourceMappingURL=BaseButton.vue.d.ts.map