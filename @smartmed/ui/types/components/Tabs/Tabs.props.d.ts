import { VNode } from 'vue';
export declare type TabsProps<T, U> = {
    modelValue?: T;
    asRouter?: boolean;
    routeExactMatch?: boolean;
    compare?: (modelValue: T, item: U) => boolean;
    tabKey?: keyof U & keyof T;
    tabs?: ReadonlyArray<U>;
    type?: 'boxed' | 'underline';
    wide?: boolean;
    size?: 'sm' | 'md';
    underlineInactiveBorder?: boolean;
};
export declare type TabsSlots<T> = {
    default: (props: {
        tab: T;
        active: boolean;
    }) => ReadonlyArray<VNode>;
};
export declare type TabsEmits<T> = {
    (e: 'update:modelValue', value: T): void;
};
export declare const TabsDefaultProps: {
    readonly modelValue: null;
    readonly type: "boxed";
    readonly size: "md";
    readonly wide: false;
    readonly tabs: () => never[];
    readonly tabKey: "id";
    readonly underlineInactiveBorder: true;
};
//# sourceMappingURL=Tabs.props.d.ts.map