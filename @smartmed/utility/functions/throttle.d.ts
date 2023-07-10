import { MaybeRef } from '../vue/maybeRef';
export interface DebounceFilterOptions {
    maxWait?: MaybeRefOrGetter<number>;
    rejectOnCancel?: boolean;
}
export declare function toValue<T>(r: MaybeRefOrGetter<T>): T;
export declare type MaybeRefOrGetter<T> = MaybeRef<T> | (() => T);
export declare type AnyFn = (...args: any[]) => any;
export declare type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never;
export declare type PromisifyFn<T extends AnyFn> = (...args: ArgumentsType<T>) => Promise<ReturnType<T>>;
export declare type FunctionArgs<Args extends any[] = any[], Return = void> = (...args: Args) => Return;
export interface FunctionWrapperOptions<Args extends any[] = any[], This = any> {
    fn: FunctionArgs<Args, This>;
    args: Args;
    thisArg: This;
}
export declare type EventFilter<Args extends any[] = any[], This = any, Invoke extends AnyFn = AnyFn> = (invoke: Invoke, options: FunctionWrapperOptions<Args, This>) => ReturnType<Invoke> | Promise<ReturnType<Invoke>>;
export declare function createFilterWrapper<T extends AnyFn>(filter: EventFilter, fn: T): (this: any, ...args: ArgumentsType<T>) => Promise<ReturnType<T>>;
export declare function throttleFilter(ms: MaybeRefOrGetter<number>, trailing?: boolean, leading?: boolean, rejectOnCancel?: boolean): EventFilter<any[], any, AnyFn>;
export declare function useThrottleFn<T extends FunctionArgs>(fn: T, ms?: MaybeRefOrGetter<number>, trailing?: boolean, leading?: boolean, rejectOnCancel?: boolean): PromisifyFn<T>;
export declare function debounceFilter(ms: MaybeRefOrGetter<number>, options?: DebounceFilterOptions): EventFilter<any[], any, AnyFn>;
export declare function useDebounceFn<T extends FunctionArgs>(fn: T, ms?: MaybeRefOrGetter<number>, options?: DebounceFilterOptions): PromisifyFn<T>;
//# sourceMappingURL=throttle.d.ts.map