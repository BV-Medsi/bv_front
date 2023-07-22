import { Component, Ref } from 'vue';
export declare type AlertHostParams<T = unknown> = {
    type?: 'success' | 'error';
    autoClose?: boolean;
    closeTimeout?: number;
    data?: T;
};
export declare const AlertHostDefaultParams: Required<AlertHostParams>;
export declare type AlertHostInstance = {
    elementRef: Ref<HTMLElement | null>;
    show: (id: string, content: string | Component, params?: AlertHostParams) => void;
    close: (id: string) => void;
    closeLast: () => void;
};
//# sourceMappingURL=alertsHost.type.d.ts.map