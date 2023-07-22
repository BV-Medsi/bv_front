import {
  BaseInputDefaultProps,
  BaseInputExpose,
  BaseInputProps,
  BaseInputSlots,
} from '../BaseInput/BaseInput.props';

export type SearchInputProps = BaseInputProps<string>;

export type SearchInputEmits = {
  (e: 'update:modelValue', value: string): void;
};

export type SearchInputSlots = Omit<BaseInputSlots, 'left'>;

export const SearchInputDefaultProps = {
  ...BaseInputDefaultProps,
  hasCleaner: true,
};

export type SearchInputExpose = {
  baseInputWrapper: BaseInputExpose['wrapper'];
  focus: () => void;
};
