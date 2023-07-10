import { BaseInputProps, BaseInputSlots } from '../BaseInput/BaseInput.props';
export declare type PasswordInputProps = BaseInputProps<string | null>;
export declare type PasswordInputEmits = {
    (e: 'update:modelValue', value: string | null): void;
};
export declare type PasswordInputSlots = Omit<BaseInputSlots, 'right' | 'valueContent'>;
export declare const PasswordInputDefaultProps: {
    name: string;
    autocomplete: string;
    modelModifiers: () => Record<string, boolean>;
    type: "text";
    size: "md";
    disabled: false;
    editable: true;
    id: "";
    stringify: <T>(value: T) => string;
    dataAutomationId: "smed-base-input-native";
};
//# sourceMappingURL=PasswordInput.props.d.ts.map