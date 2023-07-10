import { VNode } from 'vue';
import { ChipsItemProps } from '../ChipsItem/ChipsItem.props';
export declare type FiltersProps<T> = {
    modelValue: T[];
    items: T[];
    icon?: string | ((item: T, index: number) => string);
    size?: NonNullable<ChipsItemProps['size']>;
    rounded?: boolean;
    matcher?: (value: T, item: T) => boolean;
    disableItemHandler?: (item: T, index: number) => boolean;
    dataAutomationItemPrefix?: string;
};
export declare type FiltersEmits<T> = {
    (e: 'update:modelValue', value: T[]): boolean;
};
export declare type FiltersSlots<T> = {
    default: (props: {
        item: T;
        active: boolean;
    }) => ReadonlyArray<VNode>;
};
export declare const FiltersDefaultProps: {
    readonly rounded: false;
    readonly matcher: (value: unknown, item: unknown) => boolean;
    readonly disableItemHandler: () => boolean;
    readonly dataAutomationItemPrefix: "smed-filters-item";
};
//# sourceMappingURL=Filters.props.d.ts.map