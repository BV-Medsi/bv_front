import {
  BaseInputDefaultProps,
  BaseInputProps,
  BaseInputSlots,
} from '../BaseInput/BaseInput.props';

export type InputPhoneProps = Omit<BaseInputProps<string>, 'maskOptions'>;

export type InputPhoneEmits = {
  (e: 'update:modelValue', value: string): void;
};

export type InputPhoneSlots = Pick<
  BaseInputSlots,
  'left' | 'description' | 'label'
>;

export const InputPhoneDefaultProps = {
  ...BaseInputDefaultProps,
  autocomplete: 'tel',
  type: 'tel',
  name: 'tel',
  placeholder: '+7',
};
