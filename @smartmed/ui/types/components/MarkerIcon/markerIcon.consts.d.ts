import { MarkerIconProps } from './MarkerIcon.props';
export declare const statusIcon: {
    [K in MarkerIconProps['name']]: string;
};
declare type Size = NonNullable<MarkerIconProps['size']>;
export declare const checkSize: Record<Size, [number, number]>;
export declare const errorSize: Record<Size, [number, number] | number>;
export declare const infoSize: Record<string, [number, number]>;
export {};
//# sourceMappingURL=markerIcon.consts.d.ts.map