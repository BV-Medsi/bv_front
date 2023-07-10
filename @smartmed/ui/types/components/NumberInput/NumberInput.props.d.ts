import { BaseInputProps, BaseInputSlots } from '../BaseInput/BaseInput.props';
export declare type NumberInputProps = Omit<BaseInputProps<number | null>, 'maskOptions' | 'inputmode'> & {
    precision?: number;
    decimalSeparator?: string;
    thousandSeparator?: string;
    max?: number;
    min?: number;
};
export declare const NumberInputDefaultProps: {
    readonly thousandSeparator: "";
    readonly decimalSeparator: ",";
    readonly min: 0;
    readonly modelModifiers: () => Record<string, boolean>;
    readonly type: "text";
    readonly size: "md";
    readonly disabled: false;
    readonly editable: true;
    readonly id: "";
    readonly stringify: <T>(value: T) => string;
    readonly dataAutomationId: "smed-base-input-native";
};
export declare type NumberInputEmits = {
    (e: 'update:modelValue', value: number | null): void;
};
export declare type NumberInputSlots = BaseInputSlots;
//# sourceMappingURL=NumberInput.props.d.ts.map