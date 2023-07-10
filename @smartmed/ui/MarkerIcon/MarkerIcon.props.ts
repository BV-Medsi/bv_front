export type MarkerIconProps = {
  name: 'success' | 'completed' | 'info' | 'error' | 'loading';

  size?: 'lg' | 'md' | 'sm';
};

export const MarkerIconDefaultProps = {
  size: 'lg',
} as const;
