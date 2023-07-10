import { ComboboxEmits, ComboboxSlots } from './Combobox.props';
declare const _default: <T, U = T>(__VLS_props: import("../BaseInput/BaseInput.props").BaseInputProps<T> & {
    items?: readonly U[] | null | undefined;
    stringify?: import("../..").Stringify<T> | undefined;
    matcher?: ((value: T, item: U) => boolean) | undefined;
    itemsFilter?: ((value: T, item: U) => boolean) | undefined;
    dropdownProps?: Omit<import("../DropdownHost/DropdownHost.props").DropdownHostProps, "modelValue"> | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
    props: import("../BaseInput/BaseInput.props").BaseInputProps<T> & {
        items?: readonly U[] | null | undefined;
        stringify?: import("../..").Stringify<T> | undefined;
        matcher?: ((value: T, item: U) => boolean) | undefined;
        itemsFilter?: ((value: T, item: U) => boolean) | undefined;
        dropdownProps?: Omit<import("../DropdownHost/DropdownHost.props").DropdownHostProps, "modelValue"> | undefined;
    };
    expose(exposed: {}): void;
    attrs: any;
    slots: ComboboxSlots<T, U>;
    emit: ComboboxEmits<U>;
}, "attrs" | "slots" | "emit"> | undefined, __VLS_setup?: {
    props: import("../BaseInput/BaseInput.props").BaseInputProps<T> & {
        items?: readonly U[] | null | undefined;
        stringify?: import("../..").Stringify<T> | undefined;
        matcher?: ((value: T, item: U) => boolean) | undefined;
        itemsFilter?: ((value: T, item: U) => boolean) | undefined;
        dropdownProps?: Omit<import("../DropdownHost/DropdownHost.props").DropdownHostProps, "modelValue"> | undefined;
    };
    expose(exposed: {}): void;
    attrs: any;
    slots: ComboboxSlots<T, U>;
    emit: ComboboxEmits<U>;
}) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: import("../BaseInput/BaseInput.props").BaseInputProps<T> & {
            items?: readonly U[] | null | undefined;
            stringify?: import("../..").Stringify<T> | undefined;
            matcher?: ((value: T, item: U) => boolean) | undefined;
            itemsFilter?: ((value: T, item: U) => boolean) | undefined;
            dropdownProps?: Omit<import("../DropdownHost/DropdownHost.props").DropdownHostProps, "modelValue"> | undefined;
        };
        expose(exposed: {}): void;
        attrs: any;
        slots: ComboboxSlots<T, U>;
        emit: ComboboxEmits<U>;
    } | undefined;
};
export default _default;
//# sourceMappingURL=Combobox.vue.d.ts.map