export declare const MIN_YEAR = 0;
export declare const MAX_YEAR = 9999;
export interface SmedYearLike {
    year?: number;
}
export declare function normalizeToIntNumber(value: number, min: number, max: number): number;
export declare class SmedYear implements SmedYearLike {
    readonly year: number;
    constructor(year: number);
    static isValidYear(year: number): boolean;
    static isLeapYear(year: number): boolean;
    static lengthBetween(from: SmedYear, to: SmedYear): number;
    protected static normalizeYearPart(year: number): number;
    get formattedYear(): string;
    get isLeapYear(): boolean;
    yearBefore({ year }: SmedYear): boolean;
    yearSame({ year }: SmedYear): boolean;
    yearSameOrBefore({ year }: SmedYear): boolean;
    yearSameOrAfter({ year }: SmedYear): boolean;
    yearAfter({ year }: SmedYear): boolean;
    append({ year }: SmedYearLike): SmedYear;
    toString(): string;
    valueOf(): number;
    toJSON(): string;
    [Symbol.toPrimitive](hint: string): string | number;
}
//# sourceMappingURL=year.d.ts.map