import { MaybeComputedRef } from '@smartmed/utility/vue';
import { SvgIconProps } from './SvgIcon.props';
export declare type SvgIconSize = Extract<NonNullable<SvgIconProps['size']>, string>;
export declare const svgIconSizeMap: Record<SvgIconSize, number>;
export declare function useIcon(name: MaybeComputedRef<string>): import("vue").ComputedRef<string | null>;
//# sourceMappingURL=useIcon.d.ts.map