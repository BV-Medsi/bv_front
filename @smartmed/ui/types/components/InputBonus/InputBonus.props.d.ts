import { NumberInputProps, NumberInputSlots } from '../NumberInput/NumberInput.props';
export declare type InputBonusProps = Omit<NumberInputProps, 'precision' | 'decimalSeparator' | 'decoratorPostfix' | 'size' | 'inputStyle' | 'rightSlotPadding'>;
export declare type InputBonusEmits = {
    (e: 'update:modelValue', value: number | null): boolean;
};
export declare type InputBonusSlots = Pick<NumberInputSlots, 'description' | 'label'>;
export declare const InputBonusDefaultProps: {
    readonly thousandSeparator: " ";
    readonly placeholder: "0";
    readonly min: 0;
    readonly dataAutomationId: "smed-input-bonus";
    readonly decimalSeparator: ",";
    readonly modelModifiers: () => Record<string, boolean>;
    readonly type: "text";
    readonly size: "md";
    readonly disabled: false;
    readonly editable: true;
    readonly id: "";
    readonly stringify: <T>(value: T) => string;
};
export declare const InputBonusInputStyle: {
    readonly fontSize: "28px";
    readonly lineHeight: "34px";
};
//# sourceMappingURL=InputBonus.props.d.ts.map