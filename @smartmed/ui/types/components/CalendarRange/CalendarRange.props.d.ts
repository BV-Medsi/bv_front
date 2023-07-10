import { SmedDay, SmedDayRange, SmedDayRangePeriod, SmedMonth } from '@smartmed/utility/date';
export declare type CalendarRangeProps = {
    modelValue: SmedDayRange | null;
    min?: SmedDay;
    max?: SmedDay;
    defaultViewedMonth?: SmedMonth;
    disabledDatesHandler?: (date: SmedDay) => boolean;
    periods?: SmedDayRangePeriod[];
};
export declare type CalendarRangeEmits = {
    (e: 'update:modelValue', value: SmedDayRange | null): void;
};
export declare const CalendarRangeDefaultProps: {
    readonly min: () => SmedDay;
    readonly max: () => SmedDay;
    readonly defaultViewedMonth: () => SmedMonth;
    readonly periods: () => never[];
};
//# sourceMappingURL=CalendarRange.props.d.ts.map