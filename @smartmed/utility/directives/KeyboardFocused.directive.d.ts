import { ObjectDirective } from 'vue';
interface KeyboardFocusedElement extends HTMLElement {
    _smed_onMousedown?: (event: Event) => void;
    _smed_onMouseup?: (event: Event) => void;
    _smed_onFocus?: (event: Event) => void;
    _smed_onBlur?: (event: Event) => void;
}
export declare const KeyboardFocusedDirective: ObjectDirective<KeyboardFocusedElement>;
export {};
//# sourceMappingURL=KeyboardFocused.directive.d.ts.map