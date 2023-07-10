import {
  SMED_FIRST_DAY,
  SMED_LAST_DAY,
  SmedDay,
  SmedDayRange,
} from '@smartmed/utility/date';

export type CalendarMobileProps = {
  value?: SmedDay | SmedDayRange | null;

  single?: boolean;

  min?: SmedDay;

  max?: SmedDay;

  // Если открываете внутри попапа, то лучше указать этот параметр
  actionsFixed?: boolean;

  disabledDatesHandler?: (date: SmedDay) => boolean;
};

export type CalendarMobileEmits = {
  (e: 'confirm', value: SmedDay | SmedDayRange | null): void;
  (e: 'cancel'): void;
};

export const CalendarMobileDefaultProps = {
  value: null,
  single: true,
  max: () => SMED_LAST_DAY,
  min: () => SMED_FIRST_DAY,
  disabledDatesHandler: () => false,
} as const;
