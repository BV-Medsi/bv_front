import { SmedDay, SmedDayRange, SmedMonth } from '@smartmed/utility/date';
import { CalendarProps } from './Calendar.props';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<CalendarProps>, {
    readonly value: null;
    readonly showAdjacentDays: false;
    readonly hoveredItem: null;
    readonly minViewedMonth: () => SmedDay;
    readonly maxViewedMonth: () => SmedDay;
    readonly min: () => SmedDay;
    readonly max: () => SmedDay;
    readonly disabledDatesHandler: () => boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    dayClick: (value: SmedDay) => void;
    "update:month": (value: SmedMonth) => void;
    "update:hoveredItem": (value: SmedDay | null) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<CalendarProps>, {
    readonly value: null;
    readonly showAdjacentDays: false;
    readonly hoveredItem: null;
    readonly minViewedMonth: () => SmedDay;
    readonly maxViewedMonth: () => SmedDay;
    readonly min: () => SmedDay;
    readonly max: () => SmedDay;
    readonly disabledDatesHandler: () => boolean;
}>>> & {
    onDayClick?: ((value: SmedDay) => any) | undefined;
    "onUpdate:month"?: ((value: SmedMonth) => any) | undefined;
    "onUpdate:hoveredItem"?: ((value: SmedDay | null) => any) | undefined;
}, {
    value: SmedDay | SmedDayRange | null;
    max: SmedDay;
    min: SmedDay;
    showAdjacentDays: boolean;
    maxViewedMonth: SmedMonth;
    minViewedMonth: SmedMonth;
    hoveredItem: SmedDay | null;
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
//# sourceMappingURL=Calendar.vue.d.ts.map