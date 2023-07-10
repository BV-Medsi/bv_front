export type InputCodeProps = {
  length?: number;

  size?: 'sm' | 'md';

  disabled?: boolean;

  // if not empty, will show error state
  invalidText?: string | null;

  resendTimeoutSeconds?: number;

  isLoading?: boolean;
};

export type InputCodeEmits = {
  (e: 'submitCode', value: string): void;
  (e: 'resendCode'): void;
};

export const InputCodeDefaultProps = {
  length: 6,
  size: 'md',
  resendTimeoutSeconds: 30,
  isLoading: false,
} as const;
