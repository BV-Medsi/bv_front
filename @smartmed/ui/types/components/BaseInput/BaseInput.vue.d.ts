import { BaseInputEmits, BaseInputProps, BaseInputSlots } from './BaseInput.props';
declare const _default: <T>(__VLS_props: BaseInputProps<T> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
    props: BaseInputProps<T>;
    expose(exposed: {
        focus: () => void;
        blur: () => void;
        native: import("vue").Ref<HTMLInputElement | null>;
        wrapper: import("vue").Ref<HTMLElement | null>;
        focused: import("vue").ComputedRef<any>;
    }): void;
    attrs: any;
    slots: BaseInputSlots;
    emit: BaseInputEmits<T>;
}, "attrs" | "slots" | "emit"> | undefined, __VLS_setup?: {
    props: BaseInputProps<T>;
    expose(exposed: {
        focus: () => void;
        blur: () => void;
        native: import("vue").Ref<HTMLInputElement | null>;
        wrapper: import("vue").Ref<HTMLElement | null>;
        focused: import("vue").ComputedRef<any>;
    }): void;
    attrs: any;
    slots: BaseInputSlots;
    emit: BaseInputEmits<T>;
}) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: BaseInputProps<T>;
        expose(exposed: {
            focus: () => void;
            blur: () => void;
            native: import("vue").Ref<HTMLInputElement | null>;
            wrapper: import("vue").Ref<HTMLElement | null>;
            focused: import("vue").ComputedRef<any>;
        }): void;
        attrs: any;
        slots: BaseInputSlots;
        emit: BaseInputEmits<T>;
    } | undefined;
};
export default _default;
//# sourceMappingURL=BaseInput.vue.d.ts.map