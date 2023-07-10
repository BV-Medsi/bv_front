import { InputPhoneEmits, InputPhoneProps, InputPhoneSlots } from '../InputPhone/InputPhone.props';
export declare type InputPhoneInternationalProps = Omit<InputPhoneProps, 'maskOptions' | 'hasCleaner'>;
export declare type InputPhoneInternationalEmits = InputPhoneEmits;
export declare type InputPhoneInternationalSlots = Pick<InputPhoneSlots, 'label' | 'description'>;
export declare const InputPhoneInternationalDefaultProps: {
    readonly placeholder: "";
    readonly dataAutomationId: "smed-input-phone-international";
    readonly autocomplete: string;
    readonly type: string;
    readonly name: string;
    readonly modelModifiers: () => Record<string, boolean>;
    readonly size: "md";
    readonly disabled: false;
    readonly editable: true;
    readonly id: "";
    readonly stringify: <T>(value: T) => string;
};
//# sourceMappingURL=InputPhoneInternational.props.d.ts.map