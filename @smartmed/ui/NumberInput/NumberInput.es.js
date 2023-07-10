import { defineComponent as D, mergeDefaults as w, toRefs as x, useSlots as F, ref as L, computed as n, watch as M, openBlock as R, createBlock as A, unref as E, mergeProps as G, withCtx as l, renderSlot as s, createCommentVNode as u } from "vue";
import { maskitoTransform as H } from "@maskito/core";
import { maskitoNumberOptionsGenerator as O, maskitoParseNumber as T } from "@maskito/kit";
import U from "@smartmed/ui/BaseInput";
import { hasSlotContent as i } from "@smartmed/utility/vue";
import { N as j } from "../NumberInput.props-c28e7454.mjs";
const q = {
  name: "NumberInput"
}, Z = /* @__PURE__ */ D({
  ...q,
  props: w({
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
    readonly: { type: Boolean },
    stringify: { type: Function },
    id: {},
    dataAutomationId: {},
    pseudoHovered: { type: Boolean },
    pseudoFocused: { type: Boolean },
    inputStyles: {},
    rightSlotPadding: {},
    precision: {},
    decimalSeparator: {},
    thousandSeparator: {},
    max: {},
    min: {}
  }, j),
  emits: ["update:modelValue"],
  setup(b, { emit: g }) {
    const d = b, { modelValue: f, max: p, precision: r, thousandSeparator: k, decimalSeparator: v, min: c } = x(d), a = F(), m = L(String(f.value ?? "")), C = n(() => a.left && i(a.left)), B = n(
      () => a.valueContent && i(a.valueContent)
    ), N = n(() => a.right && i(a.right)), _ = n(() => i(a.label)), V = n(() => i(a.description)), S = n(() => {
      const e = p == null ? void 0 : p.value, t = r == null ? void 0 : r.value, o = k.value, I = v.value, z = c == null ? void 0 : c.value;
      return O({
        min: z,
        max: e,
        precision: t,
        thousandSeparator: o,
        decimalSeparator: I
      });
    }), P = n(() => {
      const e = m.value, t = S.value;
      return H(String(e ?? ""), t);
    }), $ = n(() => (r == null ? void 0 : r.value) ? "decimal" : "numeric"), h = (e) => {
      if (!e)
        return null;
      const t = v.value, o = T(e, t);
      return Number.isNaN(o) ? null : o;
    }, y = (e) => {
      const t = e;
      m.value = t, g("update:modelValue", h(t));
    };
    return M(f, (e) => {
      h(m.value) === e || (m.value = String(e ?? ""));
    }), (e, t) => (R(), A(E(U), G(d, {
      "mask-options": S.value,
      "model-value": P.value,
      inputmode: $.value,
      "onUpdate:modelValue": y,
      onSearchClear: t[0] || (t[0] = (o) => y(""))
    }), {
      left: l((o) => [
        C.value ? s(e.$slots, "left", {
          key: 0,
          size: o == null ? void 0 : o.size
        }) : u("", !0)
      ]),
      valueContent: l(() => [
        B.value ? s(e.$slots, "valueContent", { key: 0 }) : u("", !0)
      ]),
      right: l(() => [
        N.value ? s(e.$slots, "right", { key: 0 }) : u("", !0)
      ]),
      label: l(() => [
        _.value ? s(e.$slots, "label", { key: 0 }) : u("", !0)
      ]),
      description: l(() => [
        V.value ? s(e.$slots, "description", { key: 0 }) : u("", !0)
      ]),
      _: 3
    }, 16, ["mask-options", "model-value", "inputmode"]));
  }
});
export {
  Z as default
};
