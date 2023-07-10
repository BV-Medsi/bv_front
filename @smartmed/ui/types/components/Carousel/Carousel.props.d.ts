import { VNode } from 'vue';
export declare type CarouselProps<T> = {
    modelValue: number;
    itemsCount: number;
    items: ReadonlyArray<T>;
    draggable?: boolean;
    autoScrollLooping?: boolean;
};
export declare type CarouselEmits = {
    (e: 'update:modelValue', value: number): void;
    (e: 'autoscroll-end'): void;
};
export declare type CarouselSlots<T> = {
    default: (props: {
        item: T;
    }) => ReadonlyArray<VNode>;
};
export declare const CarouselDefaultProps: {
    readonly draggable: false;
    readonly autoScrollLooping: false;
};
//# sourceMappingURL=Carousel.props.d.ts.map