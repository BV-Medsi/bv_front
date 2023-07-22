import { AlertHostParams } from '@smartmed/ui/types/alertsHost.type';
import { Component } from 'vue';
declare type Config = {
    autoCloseOnUnmount: boolean;
};
export declare function useAlerts(config?: Config): {
    show: (content: string | Component, params?: AlertHostParams<unknown> | undefined) => string;
    close: (id?: string | undefined) => void;
    closeLast: () => void;
};
export {};
//# sourceMappingURL=useAlerts.d.ts.map