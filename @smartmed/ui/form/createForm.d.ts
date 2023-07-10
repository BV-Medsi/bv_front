import { ValidationArgs } from '@vuelidate/core';
import { ComputedRef, Ref } from 'vue';
declare type Configuration = {
    validateOn?: 'blur' | 'valueChange';
};
export declare type ControlType<T> = {
    error: ComputedRef<string | Record<string, string> | null>;
    errors: ComputedRef<Record<string, string>>;
    value: T;
    setValue: (value: T extends Ref<infer U> ? U : never) => void;
    invalid: ComputedRef<boolean>;
    valid: ComputedRef<boolean>;
    reset: () => void;
    disable: () => void;
    enable: () => void;
    disabled: Ref<boolean>;
    markAsTouch: () => void;
    setErrors: (errors: Record<string, string>) => void;
    removeErrors: (errorsKeys: ReadonlyArray<string>) => void;
    configuration: Configuration;
};
export declare function createForm<T extends {
    [K: string]: [
        initialValue: any,
        validators?: ValidationArgs,
        configuration?: Configuration
    ];
}>(form: T): {
    invalid: ComputedRef<boolean>;
    valid: ComputedRef<boolean>;
    markAsTouch: () => void;
    errors: ComputedRef<{}>;
    validate: () => void;
    value: { [K in keyof T]: Ref<T[K][0]>; };
    getCurrentValue: () => { [K_1 in keyof T]: T[K_1][0]; };
} & { [K_2 in keyof T]: ControlType<Ref<T[K_2][0]>>; };
export {};
//# sourceMappingURL=createForm.d.ts.map