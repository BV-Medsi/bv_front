import { CHAR_NO_BREAK_SPACE, CHAR_RUBLE } from '@smartmed/utility/consts';

import {
  NumberInputDefaultProps,
  NumberInputEmits,
  NumberInputProps,
  NumberInputSlots,
} from '../NumberInput/NumberInput.props';

export const MONEY_POSTFIX = `${CHAR_NO_BREAK_SPACE}${CHAR_RUBLE}`;

export type InputMoneyProps = NumberInputProps;

export type InputMoneyEmits = NumberInputEmits;

export type InputMoneySlots = Pick<NumberInputSlots, 'label' | 'description'>;

export const InputMoneyDefaultProps = {
  ...NumberInputDefaultProps,
  thousandSeparator: ' ',
  decoratorPostfix: MONEY_POSTFIX,
} as const;
