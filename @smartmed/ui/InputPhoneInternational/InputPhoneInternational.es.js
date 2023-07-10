import { defineComponent as V, mergeDefaults as W, toRefs as x, useSlots as S, computed as o, openBlock as _, createBlock as D, unref as n, mergeProps as F, withCtx as r, createVNode as N, renderSlot as m, createCommentVNode as h } from "vue";
import U from "@smartmed/ui/CountryFlag";
import $ from "@smartmed/ui/InputPhone";
import { internationalCountries as f } from "@smartmed/utility/consts";
import { inputPhoneInternationalMask as w } from "@smartmed/utility/maskito";
import { getPhoneNumber as A } from "@smartmed/utility/strings";
import { hasSlotContent as y } from "@smartmed/utility/vue";
import { I as L } from "../InputPhone.props-6e0a3a78.mjs";
const M = {
  ...L,
  placeholder: "",
  dataAutomationId: "smed-input-phone-international"
}, q = /* @__PURE__ */ V({
  name: "InputPhoneInternational",
  __name: "InputPhoneInternational",
  props: W({
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
  }, M),
  emits: ["update:modelValue"],
  setup(P, { emit: v }) {
    const l = P, { modelValue: s } = x(l), i = f.map(({ prefix: e }) => e), I = i.map((e) => e.replace("+", "")), u = S(), g = o(() => y(u.label)), B = o(() => y(u.description)), C = o(() => {
      const e = s.value, t = A(e), p = `+${t}`;
      if (t.startsWith("77") || t.startsWith("76"))
        return "KZ";
      if (t.startsWith("7"))
        return "RU";
      const a = f.find(
        ({ prefix: c }) => p.startsWith(c)
      );
      return a ? a.id : null;
    }), b = o(() => {
      const e = s.value, t = e.length;
      return !(e.startsWith("+") ? i : I).some(
        (d) => t <= d.length && d.startsWith(e)
      );
    }), k = (e) => {
      v("update:modelValue", e);
    };
    return (e, t) => (_(), D(n($), F(l, {
      "model-value": n(s),
      "mask-options": n(w),
      "has-cleaner": b.value,
      "onUpdate:modelValue": k
    }), {
      left: r(() => [
        N(n(U), { code: C.value }, null, 8, ["code"])
      ]),
      label: r(() => [
        g.value ? m(e.$slots, "label", { key: 0 }) : h("", !0)
      ]),
      description: r(() => [
        B.value ? m(e.$slots, "description", { key: 0 }) : h("", !0)
      ]),
      _: 3
    }, 16, ["model-value", "mask-options", "has-cleaner"]));
  }
});
export {
  q as default
};
