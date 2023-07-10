import { VNode } from 'vue';
import { SvgIconProps } from '../SvgIcon/SvgIcon.props';
export declare type ChipsItemProps = {
    size?: 'sm' | 'md';
    active?: boolean;
    rounded?: boolean;
    icon?: SvgIconProps['name'];
    disabled?: boolean;
    removable?: boolean;
};
export declare type ChipsItemSlots = {
    default?: (props: {}) => ReadonlyArray<VNode>;
    icon?: (props: {}) => ReadonlyArray<VNode>;
};
export declare type ChipsItemEmits = {
    (e: 'remove'): void;
};
export declare const ChipsItemDefaultProps: {
    readonly rounded: true;
    readonly size: "md";
};
//# sourceMappingURL=ChipsItem.props.d.ts.map