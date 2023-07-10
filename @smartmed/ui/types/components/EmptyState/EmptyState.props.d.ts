import { VNode } from 'vue';
export declare const emptyStateTypeToText: Record<string, string>;
export declare type EmptyStateProps = {
    type?: 'analysis' | 'appointment' | 'basket' | 'cards' | 'clinics' | 'documents' | 'family' | 'notifications' | 'orders' | 'referrals' | 'support' | string;
    text?: string;
    src?: string;
};
export declare type EmptyStateSlots = {
    picture?: (props: {}) => ReadonlyArray<VNode>;
    text?: (props: {}) => ReadonlyArray<VNode>;
};
export declare const EmptyStateDefaultProps: {
    readonly text: "";
    readonly type: "appointment";
    readonly src: "";
};
//# sourceMappingURL=EmptyState.props.d.ts.map