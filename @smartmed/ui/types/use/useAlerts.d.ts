import { AlertHostParams } from '@smartmed/ui/types/alertsHost.type';
declare type Config = {
    autoCloseOnUnmount: boolean;
};
export declare function useAlerts(config?: Config): {
    show: (content: string, params?: AlertHostParams | undefined) => string;
    close: (id?: string | undefined) => void;
    closeLast: () => void;
};
export {};
//# sourceMappingURL=useAlerts.d.ts.map