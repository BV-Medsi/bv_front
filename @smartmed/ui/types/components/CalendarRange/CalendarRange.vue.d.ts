import { SmedDay, SmedDayRange, SmedDayRangePeriod, SmedMonth } from '@smartmed/utility/date';
import { CalendarRangeProps } from './CalendarRange.props';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<CalendarRangeProps>, {
    readonly min: () => SmedDay;
    readonly max: () => SmedDay;
    readonly defaultViewedMonth: () => SmedMonth;
    readonly periods: () => never[];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: SmedDayRange | null) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<CalendarRangeProps>, {
    readonly min: () => SmedDay;
    readonly max: () => SmedDay;
    readonly defaultViewedMonth: () => SmedMonth;
    readonly periods: () => never[];
}>>> & {
    "onUpdate:modelValue"?: ((value: SmedDayRange | null) => any) | undefined;
}, {
    max: SmedDay;
    min: SmedDay;
    defaultViewedMonth: SmedMonth;
    periods: SmedDayRangePeriod[];
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
//# sourceMappingURL=CalendarRange.vue.d.ts.map