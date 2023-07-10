import { SmedDay, SmedDayRange } from '@smartmed/utility/date';
import { InputDateRangeProps, InputDateRangeSlots } from './InputDateRange.props';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<InputDateRangeProps>, {
    readonly hasCleaner: true;
    readonly inputmode: "numeric";
    readonly placeholder: string;
    readonly dropdownProps: () => {};
    readonly calendarRangeProps: () => {};
    readonly min: () => SmedDay;
    readonly max: () => SmedDay;
    readonly periods: () => never[];
    readonly disabledDatesHandler: () => boolean;
    readonly modelModifiers: () => Record<string, boolean>;
    readonly type: "text";
    readonly size: "md";
    readonly disabled: false;
    readonly editable: true;
    readonly id: "";
    readonly stringify: <T>(value: T) => string;
    readonly dataAutomationId: "smed-base-input-native";
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: SmedDayRange | null) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<InputDateRangeProps>, {
    readonly hasCleaner: true;
    readonly inputmode: "numeric";
    readonly placeholder: string;
    readonly dropdownProps: () => {};
    readonly calendarRangeProps: () => {};
    readonly min: () => SmedDay;
    readonly max: () => SmedDay;
    readonly periods: () => never[];
    readonly disabledDatesHandler: () => boolean;
    readonly modelModifiers: () => Record<string, boolean>;
    readonly type: "text";
    readonly size: "md";
    readonly disabled: false;
    readonly editable: true;
    readonly id: "";
    readonly stringify: <T>(value: T) => string;
    readonly dataAutomationId: "smed-base-input-native";
}>>> & {
    "onUpdate:modelValue"?: ((value: SmedDayRange | null) => any) | undefined;
}, {
    type: string;
    id: string;
    placeholder: string;
    inputmode: "search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal";
    size: "sm" | "md" | "lg";
    dataAutomationId: string;
    disabled: boolean;
    max: SmedDay;
    min: SmedDay;
    modelModifiers: Record<string, boolean>;
    editable: boolean;
    hasCleaner: boolean;
    stringify: import("../..").Stringify<SmedDayRange | null>;
    dropdownProps: Omit<import("../DropdownHost/DropdownHost.props").DropdownHostProps, "modelValue" | "canOpen" | "minHeight" | "maxWidth" | "minWidth">;
    disabledDatesHandler: (date: SmedDay) => boolean;
    periods: import("@smartmed/utility/date").SmedDayRangePeriod[];
    calendarRangeProps: Omit<import("../CalendarRange/CalendarRange.props").CalendarRangeProps, "modelValue" | "max" | "min" | "showAdjacentDays" | "disabledDatesHandler" | "periods">;
}, {}>, InputDateRangeSlots>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
declare type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
//# sourceMappingURL=InputDateRange.vue.d.ts.map