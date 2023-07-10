import { VNode } from 'vue';
import { SvgIconProps } from '../SvgIcon/SvgIcon.props';
export declare type TagProps = {
    status?: 'default' | 'success' | 'info' | 'error' | 'custom';
    icon?: SvgIconProps['name'];
};
export declare const TagDefaultProps: {
    readonly status: "default";
};
export declare type TagSlots = {
    icon?: (props: {}) => ReadonlyArray<VNode>;
    default: (props: {}) => ReadonlyArray<VNode>;
};
//# sourceMappingURL=Tag.props.d.ts.map