import {
  NumberInputDefaultProps,
  NumberInputProps,
  NumberInputSlots,
} from '../NumberInput/NumberInput.props';

export type InputBonusProps = Omit<
  NumberInputProps,
  | 'precision'
  | 'decimalSeparator'
  | 'decoratorPostfix'
  | 'size'
  | 'inputStyle'
  | 'rightSlotPadding'
>;

export type InputBonusEmits = {
  (e: 'update:modelValue', value: number | null): boolean;
};

export type InputBonusSlots = Pick<NumberInputSlots, 'description' | 'label'>;

export const InputBonusDefaultProps = {
  ...NumberInputDefaultProps,
  thousandSeparator: ' ',
  placeholder: '0',
  min: 0,
  dataAutomationId: 'smed-input-bonus',
} as const;

export const InputBonusInputStyle = {
  fontSize: '28px',
  lineHeight: '34px',
} as const;
