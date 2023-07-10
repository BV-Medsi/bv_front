import { SmedDay, SmedDayRange } from '@smartmed/utility/date';
import { CalendarMobileProps } from './CalendarMobile.props';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<CalendarMobileProps>, {
    readonly value: null;
    readonly single: true;
    readonly max: () => SmedDay;
    readonly min: () => SmedDay;
    readonly disabledDatesHandler: () => boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    confirm: (value: SmedDay | SmedDayRange | null) => void;
    cancel: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<CalendarMobileProps>, {
    readonly value: null;
    readonly single: true;
    readonly max: () => SmedDay;
    readonly min: () => SmedDay;
    readonly disabledDatesHandler: () => boolean;
}>>> & {
    onConfirm?: ((value: SmedDay | SmedDayRange | null) => any) | undefined;
    onCancel?: (() => any) | undefined;
}, {
    value: SmedDay | SmedDayRange | null;
    max: SmedDay;
    min: SmedDay;
    single: boolean;
    disabledDatesHandler: (date: SmedDay) => boolean;
}, {}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
declare type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
//# sourceMappingURL=CalendarMobile.vue.d.ts.map