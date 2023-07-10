import { MaskitoElementPredicate, MaskitoOptions } from '@maskito/core';
import { MaybeComputedRef } from '@smartmed/utility/vue';
declare type Input = HTMLInputElement | HTMLTextAreaElement;
export declare const defaultMaskitoPredicate: MaskitoElementPredicate;
export declare function useMaskito(options?: MaybeComputedRef<MaskitoOptions>, predicate?: MaskitoElementPredicate): import("vue").Ref<Input | null>;
export {};
//# sourceMappingURL=useMaskito.d.ts.map