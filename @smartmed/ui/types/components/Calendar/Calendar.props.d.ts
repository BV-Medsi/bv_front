import { SmedDay, SmedDayRange, SmedMonth } from '@smartmed/utility/date';
export declare type CalendarProps = {
    value?: SmedDay | SmedDayRange | null;
    showAdjacentDays?: boolean;
    min?: SmedDay;
    max?: SmedDay;
    month?: SmedMonth;
    maxViewedMonth?: SmedMonth;
    minViewedMonth?: SmedMonth;
    hoveredItem?: SmedDay | null;
    disabledDatesHandler?: (date: SmedDay) => boolean;
};
export declare type CalendarEmits = {
    (e: 'dayClick', value: SmedDay): void;
    (e: 'update:month', value: SmedMonth): void;
    (e: 'update:hoveredItem', value: SmedDay | null): void;
};
export declare const CalendarDefaultProps: {
    readonly value: null;
    readonly showAdjacentDays: false;
    readonly hoveredItem: null;
    readonly minViewedMonth: () => SmedDay;
    readonly maxViewedMonth: () => SmedDay;
    readonly min: () => SmedDay;
    readonly max: () => SmedDay;
    readonly disabledDatesHandler: () => boolean;
};
//# sourceMappingURL=Calendar.props.d.ts.map