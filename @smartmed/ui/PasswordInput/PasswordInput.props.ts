import {
  BaseInputDefaultProps,
  BaseInputProps,
  BaseInputSlots,
} from '../BaseInput/BaseInput.props';

export type PasswordInputProps = BaseInputProps<string | null>;

export type PasswordInputEmits = {
  (e: 'update:modelValue', value: string | null): void;
};

export type PasswordInputSlots = Omit<BaseInputSlots, 'right' | 'valueContent'>;

export const PasswordInputDefaultProps = {
  ...BaseInputDefaultProps,
  name: 'password',
  autocomplete: 'on',
};
