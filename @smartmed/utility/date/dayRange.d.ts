import { SmedDay } from './day';
import { SmedMonthRange } from './monthRange';
export declare const DATE_RANGE_POSTFIX_DECORATOR: string;
export declare const DATE_RANGE_FILTER_LENGTH: number;
export declare class SmedDayRange extends SmedMonthRange {
    readonly from: SmedDay;
    readonly to: SmedDay;
    constructor(from: SmedDay, to: SmedDay);
    static sort(a: SmedDay, b: SmedDay): SmedDayRange;
    static normalizeParse(rangeString: string, dateMode?: 'DMY' | 'YMD'): SmedDayRange;
    get isSingleDay(): boolean;
    daySame(another: SmedDayRange): boolean;
    dayLimit(min: SmedDay | null, max: SmedDay | null): SmedDayRange;
    getFormattedDayRange(dateFormat: 'DMY' | 'YMD', dateSeparator: string): string;
    toString(dateFormat?: 'DMY' | 'YMD', dateSeparator?: string): string;
}
//# sourceMappingURL=dayRange.d.ts.map