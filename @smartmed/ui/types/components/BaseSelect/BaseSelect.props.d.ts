import { VNode } from 'vue';
import { BaseInputEmits, BaseInputProps, BaseInputSlots } from '../BaseInput/BaseInput.props';
import { DataListProps, DataListSlots } from '../DataList/DataList.props';
import { DropdownHostProps } from '../DropdownHost/DropdownHost.props';
export declare type BaseSelectProps<T, U> = BaseInputProps<T> & {
    items?: ReadonlyArray<U> | null;
    dropdownProps?: Omit<DropdownHostProps, 'modelValue'>;
    matcher?: DataListProps<T, U>['matcher'];
};
export declare type BaseSelectEmits<T> = BaseInputEmits<T>;
export declare type BaseSelectSlots<T, U> = {
    valueContent?: (props: {
        value: T;
    }) => ReadonlyArray<VNode>;
    dropdown?: (props: {
        items: ReadonlyArray<U> | null;
    }) => ReadonlyArray<VNode>;
} & Pick<DataListSlots<U>, 'itemContent' | 'emptyContent' | 'action'> & Pick<BaseInputSlots, 'description' | 'label'>;
export declare const BaseSelectDefaultProps: {
    readonly editable: false;
    readonly dropdownProps: () => {};
    readonly items: () => never[];
    readonly modelModifiers: () => Record<string, boolean>;
    readonly type: "text";
    readonly size: "md";
    readonly disabled: false;
    readonly id: "";
    readonly stringify: <T>(value: T) => string;
    readonly dataAutomationId: "smed-base-input-native";
};
//# sourceMappingURL=BaseSelect.props.d.ts.map