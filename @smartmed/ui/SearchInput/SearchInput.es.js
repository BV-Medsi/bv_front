import { defineComponent as B, mergeDefaults as S, useSlots as g, ref as b, computed as t, openBlock as I, createBlock as k, unref as d, mergeProps as V, withCtx as l, createVNode as P, renderSlot as n, createCommentVNode as a } from "vue";
import $ from "@smartmed/ui/BaseInput";
import z from "@smartmed/ui/SvgIcon";
import { hasSlotContent as r } from "@smartmed/utility/vue";
import { B as D } from "../BaseInput.props-d8343137.mjs";
const _ = {
  ...D,
  hasCleaner: !0
}, E = {
  name: "SearchInput"
}, L = /* @__PURE__ */ B({
  ...E,
  props: S({
    modelValue: {},
    modelModifiers: {},
    type: {},
    size: {},
    disabled: { type: Boolean },
    label: {},
    description: {},
    editable: { type: Boolean },
    maskOptions: {},
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
  }, _),
  emits: ["update:modelValue"],
  setup(w, { expose: c, emit: m }) {
    const o = g(), u = b(null), f = t(() => o.right && r(o.right)), h = t(
      () => o.valueContent && r(o.valueContent)
    ), y = t(() => r(o.label)), v = t(() => r(o.description)), C = t(
      () => {
        var e;
        return ((e = u.value) == null ? void 0 : e.wrapper) ?? null;
      }
    ), p = (e) => {
      m("update:modelValue", e);
    };
    return c({
      baseInputWrapper: C,
      focus: () => {
        const e = u.value;
        e == null || e.focus();
      }
    }), (e, i) => (I(), k(d($), V(e.$props, {
      ref_key: "baseInputExposed",
      ref: u,
      "model-value": e.modelValue,
      "onUpdate:modelValue": p,
      onSearchClear: i[0] || (i[0] = (s) => p(""))
    }), {
      left: l((s) => [
        P(d(z), {
          name: "search",
          size: s == null ? void 0 : s.size
        }, null, 8, ["size"])
      ]),
      valueContent: l(() => [
        h.value ? n(e.$slots, "valueContent", { key: 0 }) : a("", !0)
      ]),
      right: l(() => [
        f.value ? n(e.$slots, "right", { key: 0 }) : a("", !0)
      ]),
      label: l(() => [
        y.value ? n(e.$slots, "label", { key: 0 }) : a("", !0)
      ]),
      description: l(() => [
        v.value ? n(e.$slots, "description", { key: 0 }) : a("", !0)
      ]),
      _: 3
    }, 16, ["model-value"]));
  }
});
export {
  L as default
};
