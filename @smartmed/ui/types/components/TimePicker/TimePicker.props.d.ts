import { SmedTime, SmedTimeMode } from '@smartmed/utility/date';
export declare const hourItems: number[];
export declare const minuteItems: number[];
export declare const secondItems: number[];
export declare type TimePickerProps = {
    modelValue: SmedTime | null;
    mode?: SmedTimeMode;
};
export declare type TimePickerEmits = {
    (e: 'update:modelValue', value: SmedTime): void;
};
export declare const TimePickerDefaultProps: {
    readonly mode: "HH:MM";
};
//# sourceMappingURL=TimePicker.props.d.ts.map