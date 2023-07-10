export type SpinnerProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg';

  theme?: 'default' | 'primary';
};

export const SpinnerDefaultProps = {
  size: 'md',
  theme: 'primary',
} as const;
