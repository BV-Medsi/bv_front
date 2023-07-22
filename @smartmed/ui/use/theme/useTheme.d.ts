import { MaybeComputedRef } from '@smartmed/utility/vue';
import { Ref } from 'vue';
declare type Theme = 'dark' | 'light';
export declare type ThemeInstance = {
    set: (value: Theme) => void;
    theme: Ref<Theme>;
};
export declare function useTheme(initial?: Theme | 'parent', element?: MaybeComputedRef<HTMLElement | null>): ThemeInstance;
export {};
//# sourceMappingURL=useTheme.d.ts.map