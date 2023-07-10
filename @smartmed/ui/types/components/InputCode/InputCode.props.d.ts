export declare type InputCodeProps = {
    length?: number;
    size?: 'sm' | 'md';
    disabled?: boolean;
    invalidText?: string | null;
    resendTimeoutSeconds?: number;
    isLoading?: boolean;
};
export declare type InputCodeEmits = {
    (e: 'submitCode', value: string): void;
    (e: 'resendCode'): void;
};
export declare const InputCodeDefaultProps: {
    readonly length: 6;
    readonly size: "md";
    readonly resendTimeoutSeconds: 30;
    readonly isLoading: false;
};
//# sourceMappingURL=InputCode.props.d.ts.map