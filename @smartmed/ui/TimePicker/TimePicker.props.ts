import {
  HOURS_IN_DAY,
  MINUTES_IN_HOUR,
  SECONDS_IN_MINUTE,
  SmedTime,
  SmedTimeMode,
} from '@smartmed/utility/date';

export const hourItems = new Array(HOURS_IN_DAY)
  .fill('')
  .map((_, index) => index);
export const minuteItems = new Array(MINUTES_IN_HOUR)
  .fill('')
  .map((_, index) => index);
export const secondItems = new Array(SECONDS_IN_MINUTE)
  .fill('')
  .map((_, index) => index);

export type TimePickerProps = {
  modelValue: SmedTime | null;

  mode?: SmedTimeMode;
};

export type TimePickerEmits = {
  (e: 'update:modelValue', value: SmedTime): void;
};

export const TimePickerDefaultProps = {
  mode: 'HH:MM',
} as const;
