import { SmedDay } from './day';
import { SmedMonth } from './month';
export declare const FIRST_DAY_OF_WEEK = 1;
export declare const DAYS_IN_WEEK = 7;
export declare function getMonthStartDaysOffset(month: SmedMonth): number;
export declare function getDayFromMonthRowCol({ month, rowIndex, colIndex, }: {
    month: SmedMonth;
    rowIndex: number;
    colIndex: number;
}): SmedDay;
//# sourceMappingURL=getMonthStartDaysOffset.d.ts.map