import { SmedMonth, SmedMonthLike } from './month';
export declare const MIN_DAY = 1;
export declare const DATE_POSTFIX_DECORATOR = "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433";
export declare const DATE_FILTER_LENGTH: number;
export interface SmedDayLike extends SmedMonthLike {
    day?: number;
}
export declare enum SmedDayOfWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}
export declare class SmedDay extends SmedMonth {
    readonly day: number;
    constructor(year: number, month: number, day: number);
    static fromLocalNativeDate(date: Date): SmedDay;
    static fromUtcNativeDate(date: Date): SmedDay;
    static isValidDay(year: number, month: number, day: number): boolean;
    static currentLocal(): SmedDay;
    static currentUtc(): SmedDay;
    static normalizeOf(year: number, month: number, day: number): SmedDay;
    static lengthBetween(from: SmedDay, to: SmedDay): number;
    static parseRawDateString(date: string, dateMode: 'DMY' | 'YMD'): {
        day: number;
        month: number;
        year: number;
    };
    static normalizeParse(rawDate: string, dateMode?: 'DMY' | 'YMD'): SmedDay;
    static jsonParse(yearMonthDayString: string): SmedDay;
    protected static normalizeDayPart(day: number, month: number, year: number): number;
    get formattedDayPart(): string;
    get isWeekend(): boolean;
    dayOfWeek(startFromMonday?: boolean): number;
    dayBefore(another: SmedDay): boolean;
    daySameOrBefore(another: SmedDay): boolean;
    daySame(another: SmedDay): boolean;
    daySameOrAfter(another: SmedDay): boolean;
    dayAfter(another: SmedDay): boolean;
    dayLimit(min: SmedDay | null, max: SmedDay | null): SmedDay;
    append({ year, month, day }: SmedDayLike): SmedDay;
    getFormattedDay(dateFormat: 'DMY' | 'YMD', separator: string): string;
    toString(dateFormat?: 'DMY' | 'YMD', separator?: string): string;
    toJSON(): string;
    toLocalNativeDate(): Date;
    toUtcNativeDate(): Date;
}
//# sourceMappingURL=day.d.ts.map