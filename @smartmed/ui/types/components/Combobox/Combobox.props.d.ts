import { Stringify } from '@smartmed/ui/types';
import { VNode } from 'vue';
import { BaseInputProps, BaseInputSlots } from '../BaseInput/BaseInput.props';
import { DropdownHostProps } from '../DropdownHost/DropdownHost.props';
export declare type ComboboxProps<T, U> = BaseInputProps<T> & {
    items?: ReadonlyArray<U> | null;
    stringify?: Stringify<T>;
    matcher?: (value: T, item: U) => boolean;
    itemsFilter?: (value: T, item: U) => boolean;
    dropdownProps?: Omit<DropdownHostProps, 'modelValue'>;
};
export declare type ComboboxEmits<U> = {
    (e: 'update:modelValue', value: string | U | null): void;
};
export declare type ComboboxSlots<T, U> = {
    left: (props: {}) => ReadonlyArray<VNode>;
    valueContent?: (props: {
        value: T;
    }) => ReadonlyArray<VNode>;
    dropdown?: (props: {
        items: ReadonlyArray<U> | null;
    }) => ReadonlyArray<VNode>;
    itemContent?: (props: {
        item: U;
    }) => ReadonlyArray<VNode>;
    action?: (props: {}) => ReadonlyArray<VNode>;
    emptyContent?: (props: {}) => ReadonlyArray<VNode>;
} & Pick<BaseInputSlots, 'label' | 'description'>;
export declare const ComboboxDefaultProps: {
    items: () => never[];
    dropdownProps: () => {};
    modelModifiers: () => Record<string, boolean>;
    type: "text";
    size: "md";
    disabled: false;
    editable: true;
    id: "";
    stringify: <T>(value: T) => string;
    dataAutomationId: "smed-base-input-native";
};
//# sourceMappingURL=Combobox.props.d.ts.map