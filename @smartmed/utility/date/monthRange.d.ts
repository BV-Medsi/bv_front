import { SmedMonth } from './month';
export declare class SmedMonthRange {
    readonly from: SmedMonth;
    readonly to: SmedMonth;
    constructor(from: SmedMonth, to: SmedMonth);
    static sort(a: SmedMonth, b: SmedMonth): SmedMonthRange;
    get isSingleMonth(): boolean;
    monthSame(another: SmedMonthRange): boolean;
    toString(): string;
}
//# sourceMappingURL=monthRange.d.ts.map