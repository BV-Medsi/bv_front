import { MaybeComputedRef } from '@smartmed/utility/vue';
declare type ControlAccessor = {
    markAsTouch: () => void;
    invalid: MaybeComputedRef<boolean>;
    disabled: MaybeComputedRef<boolean>;
};
export declare function useControlAccess(provider?: ControlAccessor | undefined | null): ControlAccessor | null;
export {};
//# sourceMappingURL=useControlAccess.d.ts.map