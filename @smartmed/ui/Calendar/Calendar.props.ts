import {
  SMED_FIRST_DAY,
  SMED_LAST_DAY,
  SmedDay,
  SmedDayRange,
  SmedMonth,
} from '@smartmed/utility/date';

export type CalendarProps = {
  value?: SmedDay | SmedDayRange | null;

  showAdjacentDays?: boolean;

  min?: SmedDay;

  max?: SmedDay;

  month?: SmedMonth;

  maxViewedMonth?: SmedMonth;

  minViewedMonth?: SmedMonth;

  hoveredItem?: SmedDay | null;

  disabledDatesHandler?: (date: SmedDay) => boolean;
};

export type CalendarEmits = {
  (e: 'dayClick', value: SmedDay): void;
  (e: 'update:month', value: SmedMonth): void;
  (e: 'update:hoveredItem', value: SmedDay | null): void;
};

export const CalendarDefaultProps = {
  value: null,
  showAdjacentDays: false,
  hoveredItem: null,
  minViewedMonth: () => SMED_FIRST_DAY,
  maxViewedMonth: () => SMED_LAST_DAY,
  min: () => SMED_FIRST_DAY,
  max: () => SMED_LAST_DAY,
  disabledDatesHandler: () => false,
} as const;
