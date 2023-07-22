import "./CheckboxBlock.css";
import { defineComponent as H, mergeDefaults as E, toRefs as N, useSlots as S, ref as I, computed as r, withDirectives as P, openBlock as i, createElementBlock as _, normalizeClass as s, unref as o, createVNode as M, withCtx as x, createElementVNode as R, renderSlot as T, createTextVNode as j, toDisplayString as q, createCommentVNode as A } from "vue";
import F from "@smartmed/ui/PrimitiveCheckbox";
import { useInteractive as G, useControlInvalid as J, useControlDisabled as K } from "@smartmed/ui/use";
import { HoveredDirective as L } from "@smartmed/utility/directives";
import { hasSlotContent as O } from "@smartmed/utility/vue";
import { _ as Q } from "../_plugin-vue_export-helper-dad06003.mjs";
const U = {
  modelValue: !1,
  disabled: !1,
  label: "",
  size: "md",
  isError: !1,
  pseudoHovered: !1
}, W = ["disabled", "for"], X = ["id", "checked", "disabled"], Y = { key: 0 }, Z = /* @__PURE__ */ H({
  name: "CheckboxBlock",
  __name: "CheckboxBlock",
  props: E({
    modelValue: { type: [Boolean, null] },
    disabled: { type: Boolean },
    label: {},
    size: {},
    isError: { type: Boolean },
    pseudoHovered: { type: Boolean }
  }, U),
  emits: ["update:modelValue"],
  setup(b, { expose: k, emit: u }) {
    const m = b, { disabled: v, isError: p, pseudoHovered: f, label: c } = N(m), { id: t, native: h, focus: g, blur: y, focused: C } = G(), d = J(p), l = K(v), w = S(), a = I(!1), n = r(() => f.value || a.value), V = r(() => c.value || O(w.default)), $ = (e) => {
      const D = e.target.checked;
      u("update:modelValue", D);
    }, B = {
      onEvent: (e) => {
        a.value = e;
      }
    };
    return k({
      focus: g,
      blur: y
    }), (e, z) => P((i(), _("label", {
      class: s([
        e.$style.block,
        e.$style["block_" + e.size],
        n.value && e.$style.block_hovered,
        o(C) && e.$style.block_focused,
        o(d) && e.$style.block_invalid,
        o(l) && e.$style.block_disabled,
        e.modelValue === !0 && e.$style.block_checked
      ]),
      disabled: o(l),
      for: o(t)
    }, [
      M(o(F), {
        value: e.modelValue,
        class: s(["smed-space_right-3", e.$style.checkbox]),
        disabled: o(l),
        hovered: n.value,
        size: e.size,
        focused: !1,
        invalid: o(d)
      }, {
        default: x(() => [
          R("input", {
            id: o(t),
            ref_key: "native",
            ref: h,
            type: "checkbox",
            class: s(e.$style.native),
            checked: !!e.modelValue,
            disabled: o(l),
            onChange: $
          }, null, 42, X)
        ]),
        _: 1
      }, 8, ["value", "class", "disabled", "hovered", "size", "invalid"]),
      V.value ? (i(), _("span", Y, [
        T(e.$slots, "default", {}, () => [
          j(q(o(c)), 1)
        ])
      ])) : A("", !0)
    ], 10, W)), [
      [o(L), B]
    ]);
  }
}), ee = "_block_156wg_1", oe = "_block_sm_156wg_10", le = "_block_md_156wg_17", se = "_block_lg_156wg_23", ce = "_block_hovered_156wg_29", te = "_block_checked_156wg_32", de = "_block_focused_156wg_35", ae = "_block_invalid_156wg_38", ne = "_block_disabled_156wg_41", re = "_checkbox_156wg_46", ie = "_native_156wg_50", _e = {
  block: ee,
  block_sm: oe,
  block_md: le,
  block_lg: se,
  block_hovered: ce,
  block_checked: te,
  block_focused: de,
  block_invalid: ae,
  block_disabled: ne,
  checkbox: re,
  native: ie
}, be = {
  $style: _e
}, ye = /* @__PURE__ */ Q(Z, [["__cssModules", be]]);
export {
  ye as default
};
