import { Component, VNode } from 'vue';
export declare type AlertProps<T = unknown> = {
    type?: 'success' | 'error';
    content?: string | Component;
    closable?: boolean;
    data?: T;
};
export declare type AlertContextProps<T = unknown> = {
    context: {
        close: () => void;
        data: T;
    };
};
export declare type AlertSlots = {
    default?: (props: {}) => ReadonlyArray<VNode>;
};
export declare type AlertEmits = {
    (e: 'close'): void;
};
export declare const AlertDefaultProps: {
    readonly type: "success";
};
//# sourceMappingURL=Alert.props.d.ts.map