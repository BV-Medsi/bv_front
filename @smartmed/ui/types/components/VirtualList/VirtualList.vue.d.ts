import { Id } from './AbstractVirtual';
import { VirtualListEmits, VirtualListProps, VirtualListSlots } from './VirtualList.props';
declare const _default: <T>(__VLS_props: VirtualListProps<T> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
    props: VirtualListProps<T>;
    expose(exposed: {
        root: import("vue").Ref<HTMLElement | null>;
        shepherd: import("vue").Ref<HTMLElement | null>;
        onScroll: () => void;
        groupStyle: import("vue").ComputedRef<{
            padding: string;
        }>;
        isHorizontal: import("vue").ComputedRef<boolean>;
        range: import("vue").Ref<{
            start?: number | undefined;
            end?: number | undefined;
            padFront?: number | undefined;
            padBehind?: number | undefined;
        }>;
        computedItems: import("vue").ComputedRef<any>;
        onItemResized: (id: Id, size: number) => void;
        onSlotResized: (key: 'slotFooterSize' | 'slotHeaderSize', size: number) => void;
        scrollToBottom: () => void;
    }): void;
    attrs: any;
    slots: VirtualListSlots<T>;
    emit: VirtualListEmits;
}, "attrs" | "slots" | "emit"> | undefined, __VLS_setup?: {
    props: VirtualListProps<T>;
    expose(exposed: {
        root: import("vue").Ref<HTMLElement | null>;
        shepherd: import("vue").Ref<HTMLElement | null>;
        onScroll: () => void;
        groupStyle: import("vue").ComputedRef<{
            padding: string;
        }>;
        isHorizontal: import("vue").ComputedRef<boolean>;
        range: import("vue").Ref<{
            start?: number | undefined;
            end?: number | undefined;
            padFront?: number | undefined;
            padBehind?: number | undefined;
        }>;
        computedItems: import("vue").ComputedRef<any>;
        onItemResized: (id: Id, size: number) => void;
        onSlotResized: (key: 'slotFooterSize' | 'slotHeaderSize', size: number) => void;
        scrollToBottom: () => void;
    }): void;
    attrs: any;
    slots: VirtualListSlots<T>;
    emit: VirtualListEmits;
}) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: VirtualListProps<T>;
        expose(exposed: {
            root: import("vue").Ref<HTMLElement | null>;
            shepherd: import("vue").Ref<HTMLElement | null>;
            onScroll: () => void;
            groupStyle: import("vue").ComputedRef<{
                padding: string;
            }>;
            isHorizontal: import("vue").ComputedRef<boolean>;
            range: import("vue").Ref<{
                start?: number | undefined;
                end?: number | undefined;
                padFront?: number | undefined;
                padBehind?: number | undefined;
            }>;
            computedItems: import("vue").ComputedRef<any>;
            onItemResized: (id: Id, size: number) => void;
            onSlotResized: (key: 'slotFooterSize' | 'slotHeaderSize', size: number) => void;
            scrollToBottom: () => void;
        }): void;
        attrs: any;
        slots: VirtualListSlots<T>;
        emit: VirtualListEmits;
    } | undefined;
};
export default _default;
//# sourceMappingURL=VirtualList.vue.d.ts.map