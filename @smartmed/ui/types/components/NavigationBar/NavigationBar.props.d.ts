import { Component, VNode } from 'vue';
import { RouteLocationRaw } from 'vue-router';
export declare type _NavigationChildren = {
    title: string;
    disabled?: boolean | string;
} & ({
    to: RouteLocationRaw;
} | {
    children: {
        title: string;
        disabled?: boolean | string;
        to: RouteLocationRaw;
    }[];
});
declare type NavigationSection = {
    title: string;
    disabled?: boolean | string;
    icon?: string | Component;
} & ({
    to: RouteLocationRaw;
} | {
    children: _NavigationChildren[];
});
export declare type NavigationBarProps = {
    sections: NavigationSection[];
    autofocusOnSearch?: boolean;
};
export declare type NavigationBarSlots = {
    header?: (props: {}) => ReadonlyArray<VNode>;
    footer?: (props: {}) => ReadonlyArray<VNode>;
};
export declare const NavigationBarDefaultProps: {};
export {};
//# sourceMappingURL=NavigationBar.props.d.ts.map