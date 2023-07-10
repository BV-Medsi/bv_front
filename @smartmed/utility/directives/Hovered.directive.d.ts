import { ObjectDirective } from 'vue';
interface HoveredHTMLElement extends HTMLElement {
    __smedHoveredDirectiveMouseEnter: (() => void) | null;
    __smedHoveredDirectiveMouseLeave: (() => void) | null;
}
export declare const HoveredDirective: ObjectDirective<HoveredHTMLElement>;
export {};
//# sourceMappingURL=Hovered.directive.d.ts.map