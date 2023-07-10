import { BaseInputProps, BaseInputSlots } from '../BaseInput/BaseInput.props';
export declare type InputPhoneProps = Omit<BaseInputProps<string>, 'maskOptions'>;
export declare type InputPhoneEmits = {
    (e: 'update:modelValue', value: string): void;
};
export declare type InputPhoneSlots = Pick<BaseInputSlots, 'left' | 'description' | 'label'>;
export declare const InputPhoneDefaultProps: {
    autocomplete: string;
    type: string;
    name: string;
    placeholder: string;
    modelModifiers: () => Record<string, boolean>;
    size: "md";
    disabled: false;
    editable: true;
    id: "";
    stringify: <T>(value: T) => string;
    dataAutomationId: "smed-base-input-native";
};
//# sourceMappingURL=InputPhone.props.d.ts.map