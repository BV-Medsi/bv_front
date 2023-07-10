import { SmedDayRange } from '@smartmed/utility/date';
import { BaseInputProps, BaseInputSlots } from '../BaseInput/BaseInput.props';
import { CalendarRangeProps } from '../CalendarRange/CalendarRange.props';
import { DropdownHostProps } from '../DropdownHost/DropdownHost.props';
export declare type InputDateRangeProps = Omit<BaseInputProps<SmedDayRange | null>, 'maskOptions'> & {
    max?: CalendarRangeProps['max'];
    min?: CalendarRangeProps['min'];
    periods?: CalendarRangeProps['periods'];
    dropdownProps?: Omit<DropdownHostProps, 'modelValue' | 'canOpen' | 'maxWidth' | 'minWidth' | 'minHeight'>;
    disabledDatesHandler?: CalendarRangeProps['disabledDatesHandler'];
    calendarRangeProps?: Omit<CalendarRangeProps, 'modelValue' | 'max' | 'min' | 'showAdjacentDays' | 'periods' | 'disabledDatesHandler'>;
};
export declare type InputDateRangeEmits = {
    (e: 'update:modelValue', value: SmedDayRange | null): void;
};
export declare type InputDateRangeSlots = Pick<BaseInputSlots, 'label' | 'description'>;
export declare const InputDateRangeDefaultProps: {
    readonly hasCleaner: true;
    readonly inputmode: "numeric";
    readonly placeholder: string;
    readonly dropdownProps: () => {};
    readonly calendarRangeProps: () => {};
    readonly min: () => import("@smartmed/utility/date").SmedDay;
    readonly max: () => import("@smartmed/utility/date").SmedDay;
    readonly periods: () => never[];
    readonly disabledDatesHandler: () => boolean;
    readonly modelModifiers: () => Record<string, boolean>;
    readonly type: "text";
    readonly size: "md";
    readonly disabled: false;
    readonly editable: true;
    readonly id: "";
    readonly stringify: <T>(value: T) => string;
    readonly dataAutomationId: "smed-base-input-native";
};
//# sourceMappingURL=InputDateRange.props.d.ts.map