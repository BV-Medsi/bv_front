type Size = NonNullable<AvatarProps['size']>;

export const avatarSizeMap: Record<Size, number> = {
  sm: 24,
  md: 32,
  lg: 40,
  xl: 44,
};

export type AvatarProps = {
  rounded?: boolean;

  size?: 'sm' | 'md' | 'lg' | 'xl' | number;

  src?: string | null;

  name?: string | null;
};

export const AvatarDefaultProps = {
  rounded: true,
  size: 'lg',
} as const;
