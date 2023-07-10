export declare enum Direction {
    FRONT = "FRONT",
    BEHIND = "BEHIND"
}
declare enum CalcType {
    INIT = "INIT",
    FIXED = "FIXED",
    DYNAMIC = "DYNAMIC"
}
declare type Param = {
    slotHeaderSize: number;
    slotFooterSize: number;
    keeps: number;
    estimateSize: number;
    buffer: number;
    uniqueIds: ReadonlyArray<number | string>;
};
export declare type Id = Param['uniqueIds'] extends ReadonlyArray<infer U> ? U : never;
export declare type Range = {
    start?: number;
    end?: number;
    padFront?: number;
    padBehind?: number;
};
declare type CallUpdate = (range: Range) => void;
export declare const Virtual: (param: Param, callUpdate: CallUpdate) => {
    range: Range;
    sizes: Map<string | number, number>;
    firstRangeTotalSize: number | null;
    firstRangeAverageSize: number;
    lastCalcIndex: number;
    fixedSizeValue: number | null;
    calcType: CalcType;
    direction: Direction | null;
    param: Param;
    callUpdate: CallUpdate;
    offset: number;
    destroy(): void;
    getRange(): {
        start: number | undefined;
        end: number | undefined;
        padFront: number | undefined;
        padBehind: number | undefined;
    };
    isBehind(): boolean;
    isFront(): boolean;
    getOffset(start: number): number;
    updateParam<T extends keyof Param>(key: T, value: Param[T]): void;
    saveSize(id: Id, size: number): void;
    handleItemsChange(): void;
    handleSlotSizeChange(): void;
    handleScroll(offset: number): void;
    handleFront(): void;
    handleBehind(): void;
    getScrollOvers(): number;
    getIndexOffset(givenIndex: number): number;
    isFixedType(): boolean;
    getLastIndex(): number;
    checkRange(start: number, end: number): void;
    updateRange(start: number, end: number): void;
    getEndByStart(start: number): number;
    getPadFront(): number;
    getPadBehind(): number;
    getEstimateSize(): number;
};
export {};
//# sourceMappingURL=AbstractVirtual.d.ts.map