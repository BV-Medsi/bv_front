import { VNode } from 'vue';
export declare type NotificationProps = {
    color?: 'grey' | 'white';
    size?: 'sm' | 'md' | 'lg';
    closable?: boolean;
    icon?: string;
};
export declare type NotificationSlots = {
    icon?: (props: {}) => ReadonlyArray<VNode>;
    default?: (props: {}) => ReadonlyArray<VNode>;
};
export declare const NotificationDefaultProps: {
    readonly color: "grey";
    readonly size: "md";
    readonly closable: true;
    readonly icon: "";
};
//# sourceMappingURL=Notification.props.d.ts.map