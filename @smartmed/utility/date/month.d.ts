import { SmedYear, SmedYearLike } from './year';
export declare const MIN_MONTH = 0;
export declare const MAX_MONTH = 11;
export declare const MONTHS_IN_YEAR = 12;
export interface SmedMonthLike extends SmedYearLike {
    month?: number;
}
export declare enum SmedMonthNumber {
    January = 0,
    February = 1,
    March = 2,
    April = 3,
    May = 4,
    June = 5,
    July = 6,
    August = 7,
    September = 8,
    October = 9,
    November = 10,
    December = 11
}
export declare class SmedMonth extends SmedYear implements SmedMonthLike {
    readonly month: number;
    constructor(year: number, month: number);
    static isValidMonth(year: number, month: number): boolean;
    static getMonthDaysCount(month: number, isLeapYear: boolean): 29 | 28 | 30 | 31;
    static currentLocal(): SmedMonth;
    static currentUtc(): SmedMonth;
    static lengthBetween(from: SmedMonth, to: SmedMonth): number;
    protected static normalizeMonthPart(month: number): number;
    protected static isValidMonthPart(month: number): boolean;
    get formattedMonthPart(): string;
    get daysCount(): number;
    monthBefore(another: SmedMonth): boolean;
    monthSameOrBefore(another: SmedMonth): boolean;
    monthSame(another: SmedMonth): boolean;
    monthSameOrAfter(another: SmedMonth): boolean;
    monthAfter(another: SmedMonth): boolean;
    append({ year, month }: SmedMonthLike): SmedMonth;
    toString(): string;
    valueOf(): number;
    toJSON(): string;
    toLocalNativeDate(): Date;
    toUtcNativeDate(): Date;
}
//# sourceMappingURL=month.d.ts.map