import { ObjectDirective } from 'vue';
declare type Binding = {
    onEvent: (value: 1 | -1) => void;
};
interface CarouselScrollHTMLElement extends HTMLElement {
    __smartmed_carouselScroll__: (event: WheelEvent) => void;
}
export declare const CarouselScrollDirective: ObjectDirective<CarouselScrollHTMLElement, Binding>;
export {};
//# sourceMappingURL=carousel-scroll.directive.d.ts.map