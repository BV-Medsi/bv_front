import { Ref } from 'vue';
export declare type AlertHostParams = {
    type?: 'success' | 'error';
    autoClose?: boolean;
    closeTimeout?: number;
};
export declare const AlertHostDefaultParams: Required<AlertHostParams>;
export declare type AlertHostInstance = {
    elementRef: Ref<HTMLElement | null>;
    show: (id: string, content: string, params?: AlertHostParams) => void;
    close: (id: string) => void;
    closeLast: () => void;
};
//# sourceMappingURL=alertsHost.type.d.ts.map