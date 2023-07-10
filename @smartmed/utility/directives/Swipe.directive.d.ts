import { ObjectDirective } from 'vue';
export interface Swipe {
    direction: 'top' | 'left' | 'bottom' | 'right';
    events: [TouchEvent, TouchEvent];
}
declare const INSTANCE_KEY_START = "__smed_swipe_start";
interface SwipableElement extends HTMLElement {
    [INSTANCE_KEY_START]: (event: TouchEvent) => void;
}
declare type Binding = {
    onEvent: (element: EventTarget | null, swipe: Swipe) => void;
    timeout?: number;
    threshold?: number;
};
export declare const SwipeDirective: ObjectDirective<SwipableElement, Binding>;
export {};
//# sourceMappingURL=Swipe.directive.d.ts.map