import { defineComponent as B, mergeDefaults as k, useSlots as C, computed as l, openBlock as P, createBlock as b, unref as d, mergeProps as v, withCtx as s, renderSlot as n, createCommentVNode as a } from "vue";
import S from "@smartmed/ui/BaseInput";
import { inputPhoneMask as V } from "@smartmed/utility/maskito";
import { hasSlotContent as r } from "@smartmed/utility/vue";
import { I } from "../InputPhone.props-6e0a3a78.mjs";
const g = {
  name: "InputPhone"
}, L = /* @__PURE__ */ B({
  ...g,
  props: k({
    modelValue: {},
    modelModifiers: {},
    type: {},
    size: {},
    disabled: { type: Boolean },
    label: {},
    description: {},
    editable: { type: Boolean },
    isError: { type: Boolean },
    isSuccess: { type: Boolean },
    placeholder: {},
    autocomplete: {},
    name: {},
    hasCleaner: { type: Boolean },
    decoratorPostfix: {},
    decoratorPostfixColorClass: {},
    inputmode: {},
    readonly: { type: Boolean },
    stringify: { type: Function },
    id: {},
    dataAutomationId: {},
    pseudoHovered: { type: Boolean },
    pseudoFocused: { type: Boolean },
    inputStyles: {},
    rightSlotPadding: {}
  }, I),
  emits: ["update:modelValue"],
  setup(u, { emit: m }) {
    const c = u, t = C(), f = l(() => r(t.left)), y = l(() => r(t.label)), h = l(() => r(t.description)), p = (e) => {
      m("update:modelValue", e);
    };
    return (e, i) => (P(), b(d(S), v(c, {
      "model-value": e.modelValue,
      "mask-options": d(V),
      "onUpdate:modelValue": p,
      onSearchClear: i[0] || (i[0] = (o) => p(""))
    }), {
      left: s((o) => [
        f.value ? n(e.$slots, "left", {
          key: 0,
          size: o == null ? void 0 : o.size
        }) : a("", !0)
      ]),
      label: s(() => [
        y.value ? n(e.$slots, "label", { key: 0 }) : a("", !0)
      ]),
      description: s(() => [
        h.value ? n(e.$slots, "description", { key: 0 }) : a("", !0)
      ]),
      _: 3
    }, 16, ["model-value", "mask-options"]));
  }
});
export {
  L as default
};
