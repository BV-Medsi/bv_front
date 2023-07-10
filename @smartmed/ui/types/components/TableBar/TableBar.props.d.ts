import { VNode } from 'vue';
export declare type TableBarProps = {
    modelValue: boolean;
    direction?: 'left' | 'right' | 'top' | 'bottom';
    overlay?: boolean;
    rootClass?: string | string[];
    contentClass?: string | string[];
    dataAutomationId?: string;
    closeButton?: boolean;
};
export declare type TableBarEmits = {
    (e: 'update:modelValue', value: boolean): void;
};
export declare type TableBarSlots = {
    default: (props: {
        close: () => void;
    }) => ReadonlyArray<VNode>;
};
export declare type TableBarHostInstance = {
    isOverlay: boolean;
    showOverlay: () => void;
    hideOverlay: () => void;
};
export declare const TableBarDefaultProps: {
    readonly direction: "bottom";
};
//# sourceMappingURL=TableBar.props.d.ts.map