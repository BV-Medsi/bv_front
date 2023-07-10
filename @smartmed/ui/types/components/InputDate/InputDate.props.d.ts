import { SmedDay } from '@smartmed/utility/date';
import { BaseInputProps, BaseInputSlots } from '../BaseInput/BaseInput.props';
import { CalendarProps } from '../Calendar/Calendar.props';
import { DropdownHostProps } from '../DropdownHost/DropdownHost.props';
export declare type InputDateProps = Omit<BaseInputProps<SmedDay | null>, 'maskOptions'> & {
    max?: CalendarProps['max'];
    min?: CalendarProps['min'];
    disabledDatesHandler?: CalendarProps['disabledDatesHandler'];
    dropdownProps?: Omit<DropdownHostProps, 'modelValue' | 'canOpen' | 'maxWidth' | 'minWidth' | 'minHeight'>;
    calendarProps?: Omit<CalendarProps, 'modelValue' | 'max' | 'min' | 'showAdjacentDays' | 'disabledDatesHandler'>;
};
export declare type InputDateEmits = {
    (e: 'update:modelValue', value: SmedDay | null): void;
};
export declare type InputDateSlots = Pick<BaseInputSlots, 'label' | 'description'>;
export declare const InputDateDefaultProps: {
    readonly hasCleaner: true;
    readonly inputmode: "numeric";
    readonly placeholder: "дд.мм.гггг";
    readonly dropdownProps: () => {};
    readonly calendarProps: () => {};
    readonly min: () => SmedDay;
    readonly max: () => SmedDay;
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
//# sourceMappingURL=InputDate.props.d.ts.map