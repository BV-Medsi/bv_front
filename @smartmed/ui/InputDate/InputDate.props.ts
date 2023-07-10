import {
  DATE_POSTFIX_DECORATOR,
  SMED_FIRST_DAY,
  SMED_LAST_DAY,
  SmedDay,
} from '@smartmed/utility/date';

import {
  BaseInputDefaultProps,
  BaseInputProps,
  BaseInputSlots,
} from '../BaseInput/BaseInput.props';
import { CalendarProps } from '../Calendar/Calendar.props';
import { DropdownHostProps } from '../DropdownHost/DropdownHost.props';

export type InputDateProps = Omit<
  BaseInputProps<SmedDay | null>,
  'maskOptions'
> & {
  max?: CalendarProps['max'];

  min?: CalendarProps['min'];

  disabledDatesHandler?: CalendarProps['disabledDatesHandler'];

  dropdownProps?: Omit<
    DropdownHostProps,
    'modelValue' | 'canOpen' | 'maxWidth' | 'minWidth' | 'minHeight'
  >;

  calendarProps?: Omit<
    CalendarProps,
    'modelValue' | 'max' | 'min' | 'showAdjacentDays' | 'disabledDatesHandler'
  >;
};

export type InputDateEmits = {
  (e: 'update:modelValue', value: SmedDay | null): void;
};

export type InputDateSlots = Pick<BaseInputSlots, 'label' | 'description'>;

export const InputDateDefaultProps = {
  ...BaseInputDefaultProps,
  hasCleaner: true,
  inputmode: 'numeric',
  placeholder: DATE_POSTFIX_DECORATOR,
  dropdownProps: () => ({}),
  calendarProps: () => ({}),
  min: () => SMED_FIRST_DAY,
  max: () => SMED_LAST_DAY,
  disabledDatesHandler: () => false,
} as const;
