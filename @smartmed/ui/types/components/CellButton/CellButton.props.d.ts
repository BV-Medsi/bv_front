import { VNode } from 'vue';
import { RouteLocationRaw } from 'vue-router';
import { AvatarProps } from '../Avatar/Avatar.props';
import { SvgIconProps } from '../SvgIcon/SvgIcon.props';
export declare type CellButtonProps = {
    icon?: SvgIconProps['name'];
    avatar?: Pick<AvatarProps, 'src' | 'name' | 'rounded'>;
    rounded?: boolean;
    active?: boolean;
    to?: RouteLocationRaw;
    routeExactMatch?: boolean;
    disabled?: boolean;
    hasArrow?: boolean;
    clickable?: boolean;
    colorClass?: string;
    backgroundClass?: string;
    rightColorClass?: string;
};
export declare type CellButtonSlots = {
    left?: (props: {}) => ReadonlyArray<VNode>;
    default: (props: {}) => ReadonlyArray<VNode>;
    right?: (props: {}) => ReadonlyArray<VNode>;
};
export declare const CellButtonDefaultProps: {
    readonly rounded: true;
    readonly clickable: true;
};
//# sourceMappingURL=CellButton.props.d.ts.map