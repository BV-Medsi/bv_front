import { ComputedRef, Ref } from 'vue';
export declare type MaybeRef<T> = Ref<T> | T;
export declare type MaybeComputedRef<T> = ComputedRef<T> | (() => T) | MaybeRef<T> | Readonly<ComputedRef<T> | (() => T) | MaybeRef<T>>;
export declare function resolveRef<T>(r: MaybeComputedRef<T>): ComputedRef<T>;
export declare function resolveRef<T>(r: MaybeRef<T>): Ref<T>;
//# sourceMappingURL=maybeRef.d.ts.map