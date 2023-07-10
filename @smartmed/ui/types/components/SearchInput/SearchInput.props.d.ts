import { BaseInputExpose, BaseInputProps, BaseInputSlots } from '../BaseInput/BaseInput.props';
export declare type SearchInputProps = BaseInputProps<string>;
export declare type SearchInputEmits = {
    (e: 'update:modelValue', value: string): void;
};
export declare type SearchInputSlots = Omit<BaseInputSlots, 'left'>;
export declare const SearchInputDefaultProps: {
    hasCleaner: boolean;
    modelModifiers: () => Record<string, boolean>;
    type: "text";
    size: "md";
    disabled: false;
    editable: true;
    id: "";
    stringify: <T>(value: T) => string;
    dataAutomationId: "smed-base-input-native";
};
export declare type SearchInputExpose = {
    baseInputWrapper: BaseInputExpose['wrapper'];
};
//# sourceMappingURL=SearchInput.props.d.ts.map