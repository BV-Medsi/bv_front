import { ObjectDirective } from 'vue';
interface ObserverHTMLElement extends HTMLElement {
    __observer_intersection: IntersectionObserver;
}
declare type Options = IntersectionObserverInit & {
    root?: () => IntersectionObserverInit['root'] | IntersectionObserverInit['root'];
};
declare type BindingValue = {
    onIntersect: (el: IntersectionObserverEntry) => void;
    isObserve?: boolean;
    disconnectAfterIntersect?: boolean;
    options?: Options;
};
export declare const IntersectionDirective: ObjectDirective<ObserverHTMLElement, BindingValue>;
export {};
//# sourceMappingURL=Intersection.directive.d.ts.map