import { VNode } from 'vue';
export declare type AlertProps = {
    type?: 'success' | 'error';
    content?: string;
    closable?: boolean;
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