import { SmedDay, SmedDayRange, SmedMonth } from '@smartmed/utility/date';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    value: SmedDay | SmedDayRange | null;
    month: SmedMonth;
    single: boolean;
    min: SmedDay;
    max: SmedDay;
    disabledDatesHandler: (date: SmedDay) => boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (value: SmedDay | SmedDayRange) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    value: SmedDay | SmedDayRange | null;
    month: SmedMonth;
    single: boolean;
    min: SmedDay;
    max: SmedDay;
    disabledDatesHandler: (date: SmedDay) => boolean;
}>>> & {
    onSelect?: ((value: SmedDay | SmedDayRange) => any) | undefined;
}, {}, {}>;
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
//# sourceMappingURL=InternalCalendarMobile.vue.d.ts.map