import { VNode } from 'vue';

import {
  BaseInputDefaultProps,
  BaseInputEmits,
  BaseInputProps,
  BaseInputSlots,
} from '../BaseInput/BaseInput.props';
import { DataListProps, DataListSlots } from '../DataList/DataList.props';
import { DropdownHostProps } from '../DropdownHost/DropdownHost.props';

export type BaseSelectProps<T, U> = BaseInputProps<T> & {
  items?: ReadonlyArray<U> | null;

  dropdownProps?: Omit<DropdownHostProps, 'modelValue'>;

  matcher?: DataListProps<T, U>['matcher'];
};

export type BaseSelectEmits<T> = BaseInputEmits<T>;

export type BaseSelectSlots<T, U> = {
  valueContent?: (props: { value: T }) => ReadonlyArray<VNode>;

  dropdown?: (props: {
    items: ReadonlyArray<U> | null;
  }) => ReadonlyArray<VNode>;
} & Pick<DataListSlots<U>, 'itemContent' | 'emptyContent' | 'action'> &
  Pick<BaseInputSlots, 'description' | 'label'>;

export const BaseSelectDefaultProps = {
  ...BaseInputDefaultProps,
  editable: false,
  dropdownProps: () => ({}),
  items: () => [],
} as const;
