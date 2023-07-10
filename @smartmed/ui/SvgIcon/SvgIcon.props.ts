export type SvgIconProps = {
  name: string;

  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | [number, number];

  rotate?: boolean;
};

export const SvgIconDefaultProps = {
  size: 'lg',
} as const;
