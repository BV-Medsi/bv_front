import { VNode } from 'vue';
declare type Color = 'primary' | 'secondary' | 'outlined' | 'secondaryOutlined' | 'grey' | 'delete';
declare type Size = 'sm' | 'md' | 'lg';
declare type ButtonType = 'button' | 'submit' | 'reset';
export declare type BaseButtonProps = {
    title?: string;
    color?: Color;
    disabled?: boolean;
    size?: Size;
    type?: ButtonType;
    isLoading?: boolean;
    wide?: boolean;
    icon?: string;
    pseudoHovered?: boolean;
    rounded?: boolean;
};
export declare const BaseButtonDefaultProps: {
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
};
export declare type BaseButtonSlots = {
    icon: (props: {}) => ReadonlyArray<VNode>;
    default: (props: {}) => ReadonlyArray<VNode>;
};
export {};
//# sourceMappingURL=BaseButton.props.d.ts.map