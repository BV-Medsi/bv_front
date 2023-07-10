import { CSSProperties, VNode } from 'vue';
export declare const DEFAULT_MAX_HEIGHT = 400;
export declare const DEFAULT_MIN_HEIGHT = 80;
export declare type DropdownHostProps = {
    modelValue?: boolean;
    canOpen?: boolean;
    minHeight?: number;
    maxHeight?: number;
    maxWidth?: number;
    minWidth?: number;
    align?: 'left' | 'right';
    direction?: 'top' | 'bottom';
    customDropdownStyles?: CSSProperties;
};
export declare type DropdownHostEmits = {
    (e: 'update:modelValue', value: boolean): void;
};
export declare type DropdownHostSlots = {
    default?: (props: {}) => ReadonlyArray<VNode>;
    dropdown?: (props: {}) => ReadonlyArray<VNode>;
};
export declare const DropdownHostDefaultProps: {
    readonly modelValue: false;
    readonly canOpen: true;
    readonly maxHeight: 400;
    readonly align: "right";
    readonly direction: "bottom";
    readonly customDropdownStyles: () => {};
    readonly minHeight: 80;
};
//# sourceMappingURL=DropdownHost.props.d.ts.map