import { VNode } from 'vue';
import { ChipsItemProps } from '../ChipsItem/ChipsItem.props';
export declare type ChipsProps<T, U> = {
    modelValue: T;
    items: U[];
    icon?: string | ((item: U, index: number) => string);
    rounded?: ChipsItemProps['rounded'];
    removable?: boolean | ((item: U, index: number) => boolean);
    matcher?: (value: T, item: U) => boolean;
    disableItemHandler?: (item: U, index: number) => boolean;
    dataAutomationItemPrefix?: string;
    size?: NonNullable<ChipsItemProps['size']>;
};
export declare type ChipsEmits<T> = {
    (e: 'update:modelValue', value: T): void;
    (e: 'remove', value: T): void;
};
export declare type ChipsSlots<T> = {
    default?: (props: {
        item: T;
        active: boolean;
    }) => ReadonlyArray<VNode>;
};
export declare const ChipsDefaultProps: {
    readonly rounded: true;
    readonly matcher: (value: unknown, item: unknown) => boolean;
    readonly disableItemHandler: () => boolean;
    readonly dataAutomationItemPrefix: "smed-chips-item";
};
export declare type ChipsExpose = {
    scrollTo: (index: number) => void;
};
//# sourceMappingURL=Chips.props.d.ts.map