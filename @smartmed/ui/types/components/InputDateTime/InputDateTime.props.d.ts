import { SmedDayTime, SmedTimeMode } from '@smartmed/utility/date';
import { BaseInputProps, BaseInputSlots } from '../BaseInput/BaseInput.props';
import { CalendarProps } from '../Calendar/Calendar.props';
import { DropdownHostProps } from '../DropdownHost/DropdownHost.props';
export declare type InputDateTimeProps = Omit<BaseInputProps<SmedDayTime | null>, 'maskOptions'> & {
    max?: CalendarProps['max'] | SmedDayTime;
    min?: CalendarProps['min'] | SmedDayTime;
    timeMode?: SmedTimeMode;
    dropdownProps?: Omit<DropdownHostProps, 'modelValue' | 'canOpen' | 'maxWidth' | 'minWidth' | 'minHeight'>;
    calendarProps?: Omit<CalendarProps, 'modelValue' | 'max' | 'min' | 'showAdjacentDays'>;
};
export declare type InputDateTimeEmits = {
    (e: 'update:modelValue', value: SmedDayTime | null): void;
};
export declare type InputDateTimeSlots = Pick<BaseInputSlots, 'label' | 'description'>;
export declare const InputDateTimeDefaultProps: {
    readonly hasCleaner: true;
    readonly inputmode: "numeric";
    readonly placeholder: "";
    readonly timeMode: "HH:MM";
    readonly dropdownProps: () => {};
    readonly calendarProps: () => {};
    readonly min: () => import("@smartmed/utility/date").SmedDay;
    readonly max: () => import("@smartmed/utility/date").SmedDay;
    readonly modelModifiers: () => Record<string, boolean>;
    readonly type: "text";
    readonly size: "md";
    readonly disabled: false;
    readonly editable: true;
    readonly id: "";
    readonly stringify: <T>(value: T) => string;
    readonly dataAutomationId: "smed-base-input-native";
};
//# sourceMappingURL=InputDateTime.props.d.ts.map