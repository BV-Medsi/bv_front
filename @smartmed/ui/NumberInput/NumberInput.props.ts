import {
  BaseInputDefaultProps,
  BaseInputProps,
  BaseInputSlots,
} from '../BaseInput/BaseInput.props';

export type NumberInputProps = Omit<
  BaseInputProps<number | null>,
  'maskOptions' | 'inputmode'
> & {
  precision?: number;

  decimalSeparator?: string;

  thousandSeparator?: string;

  max?: number;

  min?: number;
};

export const NumberInputDefaultProps = {
  ...BaseInputDefaultProps,
  thousandSeparator: '',
  decimalSeparator: ',',
  min: 0,
} as const;

export type NumberInputEmits = {
  (e: 'update:modelValue', value: number | null): void;
};

export type NumberInputSlots = BaseInputSlots;
