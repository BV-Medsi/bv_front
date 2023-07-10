import { SmedDay } from './day';
import { SmedTime, SmedTimeMode } from './time';
export declare const SMED_DAY_TIME_SEPARATOR = ", ";
export declare const dateTimePostfixDecorator: (mode: SmedTimeMode) => string;
export declare class SmedDayTime {
    readonly day: SmedDay | null;
    readonly time: SmedTime | null;
    constructor(day: SmedDay | null, time: SmedTime | null);
    static fromString(dayTimeString: string, dateMode?: 'DMY' | 'YMD'): SmedDayTime;
    static jsonParse(dayTimeString: string): SmedDayTime;
    toString(dateFormat?: 'DMY' | 'YMD', dateSeparator?: string, timeMode?: SmedTimeMode): string;
    toLocalNativeDate(): Date;
    toUtcNativeDate(): Date;
    toJSON(): string;
}
//# sourceMappingURL=dayTime.d.ts.map