import {
  SMED_FIRST_DAY,
  SMED_LAST_DAY,
  SmedDay,
  SmedDayRange,
  SmedDayRangePeriod,
  SmedMonth,
} from '@smartmed/utility/date';

export type CalendarRangeProps = {
  modelValue: SmedDayRange | null;

  min?: SmedDay;

  max?: SmedDay;

  defaultViewedMonth?: SmedMonth;

  disabledDatesHandler?: (date: SmedDay) => boolean;

  periods?: SmedDayRangePeriod[];
};

export type CalendarRangeEmits = {
  (e: 'update:modelValue', value: SmedDayRange | null): void;
};

export const CalendarRangeDefaultProps = {
  min: () => SMED_FIRST_DAY,
  max: () => SMED_LAST_DAY,
  defaultViewedMonth: () => SmedMonth.currentLocal(),
  periods: () => [],
} as const;
