import {
  DATE_RANGE_POSTFIX_DECORATOR,
  SMED_FIRST_DAY,
  SMED_LAST_DAY,
  SmedDayRange,
} from '@smartmed/utility/date';

import {
  BaseInputDefaultProps,
  BaseInputProps,
  BaseInputSlots,
} from '../BaseInput/BaseInput.props';
import { CalendarRangeProps } from '../CalendarRange/CalendarRange.props';
import { DropdownHostProps } from '../DropdownHost/DropdownHost.props';

export type InputDateRangeProps = Omit<
  BaseInputProps<SmedDayRange | null>,
  'maskOptions'
> & {
  max?: CalendarRangeProps['max'];

  min?: CalendarRangeProps['min'];

  periods?: CalendarRangeProps['periods'];

  dropdownProps?: Omit<
    DropdownHostProps,
    'modelValue' | 'canOpen' | 'maxWidth' | 'minWidth' | 'minHeight'
  >;

  disabledDatesHandler?: CalendarRangeProps['disabledDatesHandler'];

  calendarRangeProps?: Omit<
    CalendarRangeProps,
    | 'modelValue'
    | 'max'
    | 'min'
    | 'showAdjacentDays'
    | 'periods'
    | 'disabledDatesHandler'
  >;
};

export type InputDateRangeEmits = {
  (e: 'update:modelValue', value: SmedDayRange | null): void;
};

export type InputDateRangeSlots = Pick<BaseInputSlots, 'label' | 'description'>;

export const InputDateRangeDefaultProps = {
  ...BaseInputDefaultProps,
  hasCleaner: true,
  inputmode: 'numeric',
  placeholder: DATE_RANGE_POSTFIX_DECORATOR,
  dropdownProps: () => ({}),
  calendarRangeProps: () => ({}),
  min: () => SMED_FIRST_DAY,
  max: () => SMED_LAST_DAY,
  periods: () => [],
  disabledDatesHandler: () => false,
} as const;
