declare type Size = NonNullable<AvatarProps['size']>;
export declare const avatarSizeMap: Record<Size, number>;
export declare type AvatarProps = {
    rounded?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl' | number;
    src?: string | null;
    name?: string | null;
};
export declare const AvatarDefaultProps: {
    readonly rounded: true;
    readonly size: "lg";
};
export {};
//# sourceMappingURL=Avatar.props.d.ts.map