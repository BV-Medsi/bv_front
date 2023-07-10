import { VNode } from 'vue';
export declare type PopupProps = {
    modelValue?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'full';
    dismissible?: boolean;
    closable?: boolean;
    title?: string;
};
export declare type PopupEmits = {
    (e: 'update:modelValue', value: boolean): void;
};
export declare type PopupSlots = {
    default: (props: {
        close: () => void;
    }) => ReadonlyArray<VNode>;
};
export declare const PopupDefaultProps: {
    readonly modelValue: false;
    readonly size: "md";
    readonly dismissible: true;
    readonly closable: true;
    readonly title: "";
};
//# sourceMappingURL=Popup.props.d.ts.map