import { BaseSelectEmits, BaseSelectSlots } from './BaseSelect.props';
declare const _default: <T, U = T>(__VLS_props: import("../BaseInput/BaseInput.props").BaseInputProps<T> & {
    items?: readonly U[] | null | undefined;
    dropdownProps?: Omit<import("../DropdownHost/DropdownHost.props").DropdownHostProps, "modelValue"> | undefined;
    matcher?: ((value: T, item: U) => boolean) | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
    props: import("../BaseInput/BaseInput.props").BaseInputProps<T> & {
        items?: readonly U[] | null | undefined;
        dropdownProps?: Omit<import("../DropdownHost/DropdownHost.props").DropdownHostProps, "modelValue"> | undefined;
        matcher?: ((value: T, item: U) => boolean) | undefined;
    };
    expose(exposed: {
        focus: typeof focus;
        blur: typeof blur;
    }): void;
    attrs: any;
    slots: BaseSelectSlots<T, U>;
    emit: BaseSelectEmits<U>;
}, "attrs" | "slots" | "emit"> | undefined, __VLS_setup?: {
    props: import("../BaseInput/BaseInput.props").BaseInputProps<T> & {
        items?: readonly U[] | null | undefined;
        dropdownProps?: Omit<import("../DropdownHost/DropdownHost.props").DropdownHostProps, "modelValue"> | undefined;
        matcher?: ((value: T, item: U) => boolean) | undefined;
    };
    expose(exposed: {
        focus: typeof focus;
        blur: typeof blur;
    }): void;
    attrs: any;
    slots: BaseSelectSlots<T, U>;
    emit: BaseSelectEmits<U>;
}) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: import("../BaseInput/BaseInput.props").BaseInputProps<T> & {
            items?: readonly U[] | null | undefined;
            dropdownProps?: Omit<import("../DropdownHost/DropdownHost.props").DropdownHostProps, "modelValue"> | undefined;
            matcher?: ((value: T, item: U) => boolean) | undefined;
        };
        expose(exposed: {
            focus: typeof focus;
            blur: typeof blur;
        }): void;
        attrs: any;
        slots: BaseSelectSlots<T, U>;
        emit: BaseSelectEmits<U>;
    } | undefined;
};
export default _default;
//# sourceMappingURL=BaseSelect.vue.d.ts.map