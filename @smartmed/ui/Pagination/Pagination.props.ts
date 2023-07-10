export type PaginationProps = {
  modelValue: number;

  length: number;

  size?: 'sm' | 'md';
};

export type PaginationEmits = {
  (e: 'update:modelValue', value: number): void;
};

export const PaginationDefaultProps = {
  size: 'sm',
} as const;
