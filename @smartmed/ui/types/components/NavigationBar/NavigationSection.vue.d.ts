declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    section: {
        title: string;
        disabled?: string | boolean | undefined;
        icon?: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions> | undefined;
    } & ({
        to: import("vue-router").RouteLocationRaw;
    } | {
        children: import("./NavigationBar.props")._NavigationChildren[];
    });
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    section: {
        title: string;
        disabled?: string | boolean | undefined;
        icon?: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions> | undefined;
    } & ({
        to: import("vue-router").RouteLocationRaw;
    } | {
        children: import("./NavigationBar.props")._NavigationChildren[];
    });
}>>>, {}, {}>;
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
//# sourceMappingURL=NavigationSection.vue.d.ts.map