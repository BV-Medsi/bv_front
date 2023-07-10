export interface SmedTimeLike {
    readonly hours?: number;
    readonly minutes?: number;
    readonly seconds?: number;
    readonly ms?: number;
}
export declare const MILLISECONDS_IN_SECOND = 1000;
export declare const SECONDS_IN_MINUTE = 60;
export declare const MINUTES_IN_HOUR = 60;
export declare const HOURS_IN_DAY = 24;
export declare const MILLISECONDS_IN_MINUTE: number;
export declare const MILLISECONDS_IN_HOUR: number;
export declare const MILLISECONDS_IN_DAY: number;
export declare type SmedTimeMode = 'HH:MM:SS.MSS' | 'HH:MM:SS' | 'HH:MM';
export declare class SmedTime implements SmedTimeLike {
    readonly hours: number;
    readonly minutes: number;
    readonly seconds: number;
    readonly ms: number;
    constructor(hours: number, minutes: number, seconds?: number, ms?: number);
    static currentUtc(): SmedTime;
    static currentLocal(): SmedTime;
    static fromAbsoluteMilliseconds(milliseconds: number): SmedTime;
    static fromString(time: string): SmedTime;
    static fromLocalNativeDate(date: Date): SmedTime;
    shift({ hours, minutes, seconds, ms, }: SmedTimeLike): SmedTime;
    toString(mode?: SmedTimeMode): string;
    valueOf(): number;
    [Symbol.toPrimitive](hint: string): number | string;
    toAbsoluteMilliseconds(): number;
    private formatTime;
}
//# sourceMappingURL=time.d.ts.map