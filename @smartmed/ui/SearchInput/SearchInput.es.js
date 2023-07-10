import { defineComponent as B, mergeDefaults as S, useSlots as g, ref as b, computed as t, openBlock as I, createBlock as k, unref as d, mergeProps as V, withCtx as l, createVNode as P, renderSlot as a, createCommentVNode as s } from "vue";
import $ from "@smartmed/ui/BaseInput";
import z from "@smartmed/ui/SvgIcon";
import { hasSlotContent as r } from "@smartmed/utility/vue";
import { B as D } from "../BaseInput.props-d8343137.mjs";
const _ = {
  ...D,
  hasCleaner: !0
}, E = {
  name: "SearchInput"
}, H = /* @__PURE__ */ B({
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
    const o = g(), p = b(null), f = t(() => o.right && r(o.right)), h = t(
      () => o.valueContent && r(o.valueContent)
    ), y = t(() => r(o.label)), v = t(() => r(o.description)), C = t(
      () => {
        var e;
        return ((e = p.value) == null ? void 0 : e.wrapper) ?? null;
      }
    ), u = (e) => {
      m("update:modelValue", e);
    };
    return c({
      baseInputWrapper: C
    }), (e, i) => (I(), k(d($), V(e.$props, {
      ref_key: "baseInputExposed",
      ref: p,
      "model-value": e.modelValue,
      "onUpdate:modelValue": u,
      onSearchClear: i[0] || (i[0] = (n) => u(""))
    }), {
      left: l((n) => [
        P(d(z), {
          name: "search",
          size: n == null ? void 0 : n.size
        }, null, 8, ["size"])
      ]),
      valueContent: l(() => [
        h.value ? a(e.$slots, "valueContent", { key: 0 }) : s("", !0)
      ]),
      right: l(() => [
        f.value ? a(e.$slots, "right", { key: 0 }) : s("", !0)
      ]),
      label: l(() => [
        y.value ? a(e.$slots, "label", { key: 0 }) : s("", !0)
      ]),
      description: l(() => [
        v.value ? a(e.$slots, "description", { key: 0 }) : s("", !0)
      ]),
      _: 3
    }, 16, ["model-value"]));
  }
});
export {
  H as default
};
