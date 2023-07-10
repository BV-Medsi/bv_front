import { ObjectDirective } from 'vue';
interface FocustrapHTMLElement extends HTMLElement {
    __smedBeforeFocustrapFocusedElement: Element | null;
    __smedBlurListener: (() => void) | null;
}
export declare const FocustrapDirective: ObjectDirective<FocustrapHTMLElement>;
export {};
//# sourceMappingURL=Focustrap.directive.d.ts.map