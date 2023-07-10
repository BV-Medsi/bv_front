import "./BaseTextarea.css";
import { defineComponent as N, mergeDefaults as z, toRefs as L, useSlots as P, computed as r, openBlock as n, createElementBlock as i, normalizeClass as t, unref as s, renderSlot as f, createTextVNode as v, toDisplayString as b, createCommentVNode as y, createElementVNode as j, normalizeStyle as A } from "vue";
import { useModelModifiers as F, useInteractive as G, useControlDisabled as H, useControlInvalid as J } from "@smartmed/ui/use";
import { h } from "../hasSlotContent-2a83eddf.mjs";
import { _ as K } from "../_plugin-vue_export-helper-dad06003.mjs";
const O = {
  indentRight: 0,
  isError: !1,
  disabled: !1,
  label: "",
  modelModifiers: () => ({})
}, Q = ["for"], U = ["id", "placeholder", "disabled", "value"], W = {
  name: "BaseTextarea"
}, X = /* @__PURE__ */ N({
  ...W,
  props: z({
    modelValue: {},
    modelModifiers: {},
    label: {},
    indentRight: {},
    isError: { type: Boolean },
    disabled: { type: Boolean },
    placeholder: {},
    description: {}
  }, O),
  emits: ["update:modelValue"],
  setup($, { expose: w, emit: g }) {
    const V = $, { modelModifiers: B, disabled: d, indentRight: p, isError: M, label: l, description: a } = L(V), c = P(), q = F(B.value), o = G(), u = H(d), m = J(M), C = o.focused, D = o.native, _ = o.id, k = r(
      () => l && l.value || h(c.label)
    ), E = r(
      () => a && a.value || h(c.description)
    ), R = (e) => {
      const x = e.target.value;
      d.value || g("update:modelValue", q.modify(x));
    }, S = (e) => `${e || ""}`, I = r(() => ({
      paddingRight: p.value ? `${p.value}px` : void 0
    }));
    return w({
      focus: o.focus,
      blur: o.blur
    }), (e, T) => (n(), i("label", {
      class: t(e.$style.textarea),
      for: s(_)
    }, [
      k.value ? (n(), i("span", {
        key: 0,
        class: t([e.$style.inline, "smed-space_bottom-1 smed-text_body-sm"])
      }, [
        f(e.$slots, "label", {}, () => [
          v(b(s(l)), 1)
        ])
      ], 2)) : y("", !0),
      j("textarea", {
        id: s(_),
        ref_key: "native",
        ref: D,
        class: t([
          e.$style.wrapper,
          "smed-text_body-xl",
          s(m) && e.$style.wrapper_error,
          s(u) && e.$style.wrapper_disabled,
          s(C) && e.$style.focus
        ]),
        placeholder: e.placeholder,
        style: A(I.value),
        disabled: s(u),
        value: S(e.modelValue),
        onInput: R
      }, `\r
    `, 46, U),
      E.value ? (n(), i("span", {
        key: 1,
        class: t([
          "smed-space_top-1 smed-text_body-sm",
          e.$style.inline,
          s(m) && e.$style.inline_invalid
        ])
      }, [
        f(e.$slots, "description", {}, () => [
          v(b(s(a)), 1)
        ])
      ], 2)) : y("", !0)
    ], 10, Q));
  }
}), Y = "_wrapper_230q3_1", Z = "_focus_230q3_25", ee = "_wrapper_error_230q3_28", se = "_wrapper_disabled_230q3_34", oe = "_inline_230q3_39", te = "_inline_invalid_230q3_45", le = {
  wrapper: Y,
  focus: Z,
  wrapper_error: ee,
  wrapper_disabled: se,
  inline: oe,
  inline_invalid: te
}, ae = {
  $style: le
}, ce = /* @__PURE__ */ K(X, [["__cssModules", ae]]);
export {
  ce as default
};
