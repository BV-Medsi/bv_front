import { SmedDayRange, SmedMonth, SmedTime } from '@smartmed/utility/date';

export type TimePreviewProps = {
  date: string | Date | SmedTime | SmedMonth | SmedDayRange | null;

  /**
   * в формате [month:long] [day:numeric]
   * см @param {getFormattedDateByMask}
   */
  mask: string | null;
};
