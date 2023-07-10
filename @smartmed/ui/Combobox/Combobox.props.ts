import { Stringify } from '@smartmed/ui/types';
import { VNode } from 'vue';

import {
  BaseInputDefaultProps,
  BaseInputProps,
  BaseInputSlots,
} from '../BaseInput/BaseInput.props';
import { DropdownHostProps } from '../DropdownHost/DropdownHost.props';

export type ComboboxProps<T, U> = BaseInputProps<T> & {
  items?: ReadonlyArray<U> | null;

  stringify?: Stringify<T>;

  matcher?: (value: T, item: U) => boolean;

  itemsFilter?: (value: T, item: U) => boolean;

  dropdownProps?: Omit<DropdownHostProps, 'modelValue'>;
};

export type ComboboxEmits<U> = {
  (e: 'update:modelValue', value: string | U | null): void;
};

export type ComboboxSlots<T, U> = {
  left: (props: {}) => ReadonlyArray<VNode>;

  valueContent?: (props: { value: T }) => ReadonlyArray<VNode>;

  dropdown?: (props: {
    items: ReadonlyArray<U> | null;
  }) => ReadonlyArray<VNode>;

  itemContent?: (props: { item: U }) => ReadonlyArray<VNode>;

  action?: (props: {}) => ReadonlyArray<VNode>;

  emptyContent?: (props: {}) => ReadonlyArray<VNode>;
} & Pick<BaseInputSlots, 'label' | 'description'>;

export const ComboboxDefaultProps = {
  ...BaseInputDefaultProps,
  items: () => [],
  dropdownProps: () => ({}),
};
