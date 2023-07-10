import { ControlType } from '@smartmed/ui/form';
import { UnwrapRef, VNode } from 'vue';
export declare type ControlProps<T> = {
    control: ControlType<T>;
    showErrors?: boolean;
    validationErrors?: Record<string, string> | null;
};
export declare type ControlSlots<T> = {
    default: (props: {
        invalid: boolean;
        model: {
            value: UnwrapRef<T>;
        };
        disabled: boolean;
        valid: boolean;
    }) => ReadonlyArray<VNode>;
};
export declare const ControlDefaultProps: {
    readonly showErrors: true;
    readonly validationErrors: null;
};
//# sourceMappingURL=Control.props.d.ts.map