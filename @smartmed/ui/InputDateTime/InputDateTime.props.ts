import {
  SMED_FIRST_DAY,
  SMED_LAST_DAY,
  SmedDayTime,
  SmedTimeMode,
} from '@smartmed/utility/date';

import {
  BaseInputDefaultProps,
  BaseInputProps,
  BaseInputSlots,
} from '../BaseInput/BaseInput.props';
import { CalendarProps } from '../Calendar/Calendar.props';
import { DropdownHostProps } from '../DropdownHost/DropdownHost.props';

export type InputDateTimeProps = Omit<
  BaseInputProps<SmedDayTime | null>,
  'maskOptions'
> & {
  max?: CalendarProps['max'] | SmedDayTime;

  min?: CalendarProps['min'] | SmedDayTime;

  timeMode?: SmedTimeMode;

  dropdownProps?: Omit<
    DropdownHostProps,
    'modelValue' | 'canOpen' | 'maxWidth' | 'minWidth' | 'minHeight'
  >;

  calendarProps?: Omit<
    CalendarProps,
    'modelValue' | 'max' | 'min' | 'showAdjacentDays'
  >;
};

export type InputDateTimeEmits = {
  (e: 'update:modelValue', value: SmedDayTime | null): void;
};

export type InputDateTimeSlots = Pick<BaseInputSlots, 'label' | 'description'>;

export const InputDateTimeDefaultProps = {
  ...BaseInputDefaultProps,
  hasCleaner: true,
  inputmode: 'numeric',
  placeholder: '',
  timeMode: 'HH:MM',
  dropdownProps: () => ({}),
  calendarProps: () => ({}),
  min: () => SMED_FIRST_DAY,
  max: () => SMED_LAST_DAY,
} as const;
