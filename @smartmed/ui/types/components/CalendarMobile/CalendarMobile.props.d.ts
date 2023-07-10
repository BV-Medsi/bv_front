import { SmedDay, SmedDayRange } from '@smartmed/utility/date';
export declare type CalendarMobileProps = {
    value?: SmedDay | SmedDayRange | null;
    single?: boolean;
    min?: SmedDay;
    max?: SmedDay;
    actionsFixed?: boolean;
    disabledDatesHandler?: (date: SmedDay) => boolean;
};
export declare type CalendarMobileEmits = {
    (e: 'confirm', value: SmedDay | SmedDayRange | null): void;
    (e: 'cancel'): void;
};
export declare const CalendarMobileDefaultProps: {
    readonly value: null;
    readonly single: true;
    readonly max: () => SmedDay;
    readonly min: () => SmedDay;
    readonly disabledDatesHandler: () => boolean;
};
//# sourceMappingURL=CalendarMobile.props.d.ts.map