import {
  InputPhoneDefaultProps,
  InputPhoneEmits,
  InputPhoneProps,
  InputPhoneSlots,
} from '../InputPhone/InputPhone.props';

export type InputPhoneInternationalProps = Omit<
  InputPhoneProps,
  'maskOptions' | 'hasCleaner'
>;

export type InputPhoneInternationalEmits = InputPhoneEmits;

export type InputPhoneInternationalSlots = Pick<
  InputPhoneSlots,
  'label' | 'description'
>;

export const InputPhoneInternationalDefaultProps = {
  ...InputPhoneDefaultProps,
  placeholder: '',
  dataAutomationId: 'smed-input-phone-international',
} as const;
