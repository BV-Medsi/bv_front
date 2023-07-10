import "./BaseCheckbox.css";
import { defineComponent as S, mergeDefaults as I, toRefs as N, useSlots as M, ref as P, computed as s, withDirectives as R, openBlock as t, createElementBlock as _, normalizeClass as a, unref as o, createElementVNode as h, createBlock as T, createCommentVNode as i, renderSlot as j, createTextVNode as q, toDisplayString as A } from "vue";
import F from "@smartmed/ui/SvgIcon";
import { useInteractive as G, useControlInvalid as J, useControlDisabled as K } from "@smartmed/ui/use";
import { HoveredDirective as L } from "@smartmed/utility/directives";
import { hasSlotContent as O } from "@smartmed/utility/vue";
import { _ as Q } from "../_plugin-vue_export-helper-dad06003.mjs";
const U = {
  modelValue: !1,
  disabled: !1,
  label: "",
  size: "md",
  isError: !1
}, W = ["disabled", "for"], X = ["id", "checked", "disabled"], Y = { key: 0 }, Z = {
  name: "BaseCheckbox"
}, ee = /* @__PURE__ */ S({
  ...Z,
  props: I({
    modelValue: { type: [Boolean, null] },
    disabled: { type: Boolean },
    label: {},
    size: {},
    isError: { type: Boolean },
    pseudoHovered: { type: Boolean }
  }, U),
  emits: ["update:modelValue"],
  setup(b, { expose: u, emit: m }) {
    const k = b, { modelValue: l, isError: v, disabled: p, pseudoHovered: f, label: n } = N(k), x = M(), { id: r, native: y, focus: w, blur: g } = G(), C = J(v), c = K(p), d = P(!1), $ = s(() => l.value === null ? "minus" : "check"), B = s(() => f.value || d.value), z = s(() => n.value || O(x.default)), V = (e) => {
      const H = e.target.checked;
      m("update:modelValue", H);
    }, D = (e) => {
      d.value = e;
    };
    return u({
      focus: w,
      blur: g
    }), (e, E) => R((t(), _("label", {
      class: a([e.$style.label, e.$style["label_" + e.size]]),
      disabled: o(c),
      for: o(r)
    }, [
      h("div", {
        class: a([
          e.$style.checkbox,
          e.$style["checkbox_" + e.size],
          o(l) !== !1 && e.$style.checkbox_checked,
          o(C) && e.$style.checkbox_invalid,
          o(c) && e.$style.checkbox_disabled,
          B.value && e.$style.checkbox_hovered
        ])
      }, [
        o(l) !== !1 ? (t(), T(o(F), {
          key: 0,
          size: e.size,
          name: $.value
        }, null, 8, ["size", "name"])) : i("", !0),
        h("input", {
          id: o(r),
          ref_key: "native",
          ref: y,
          type: "checkbox",
          class: a(e.$style.native),
          checked: !!o(l),
          disabled: o(c),
          onChange: V
        }, null, 42, X)
      ], 2),
      z.value ? (t(), _("span", Y, [
        j(e.$slots, "default", {}, () => [
          q(A(o(n)), 1)
        ])
      ])) : i("", !0)
    ], 10, W)), [
      [o(L), {
        onEvent: D
      }]
    ]);
  }
}), oe = "_label_1whr0_1", le = "_label_sm_1whr0_7", ce = "_label_md_1whr0_12", se = "_label_lg_1whr0_17", te = "_checkbox_1whr0_23", ae = "_checkbox_sm_1whr0_30", ne = "_checkbox_md_1whr0_39", re = "_checkbox_lg_1whr0_48", de = "_checkbox_hovered_1whr0_57", _e = "_checkbox_disabled_1whr0_57", he = "_checkbox_invalid_1whr0_57", ie = "_checkbox_checked_1whr0_64", be = "_native_1whr0_79", ue = {
  label: oe,
  label_sm: le,
  label_md: ce,
  label_lg: se,
  checkbox: te,
  checkbox_sm: ae,
  checkbox_md: ne,
  checkbox_lg: re,
  checkbox_hovered: de,
  checkbox_disabled: _e,
  checkbox_invalid: he,
  checkbox_checked: ie,
  native: be
}, me = {
  $style: ue
}, ge = /* @__PURE__ */ Q(ee, [["__cssModules", me]]);
export {
  ge as default
};
