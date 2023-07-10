import { NumberInputEmits, NumberInputProps, NumberInputSlots } from '../NumberInput/NumberInput.props';
export declare const MONEY_POSTFIX: string;
export declare type InputMoneyProps = NumberInputProps;
export declare type InputMoneyEmits = NumberInputEmits;
export declare type InputMoneySlots = Pick<NumberInputSlots, 'label' | 'description'>;
export declare const InputMoneyDefaultProps: {
    readonly thousandSeparator: " ";
    readonly decoratorPostfix: string;
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
//# sourceMappingURL=InputMoney.props.d.ts.map