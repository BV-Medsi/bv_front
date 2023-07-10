import "./Toggle.css";
import { defineComponent as z, toRefs as y, computed as v, openBlock as _, createElementBlock as $, normalizeClass as t, unref as o, createElementVNode as l, createBlock as V, createCommentVNode as B } from "vue";
import C from "@smartmed/ui/SvgIcon";
import { useInteractive as S, useControlDisabled as D } from "@smartmed/ui/use";
import { _ as E } from "../_plugin-vue_export-helper-dad06003.mjs";
const I = ["for"], M = ["id", "checked", "disabled"], N = {
  name: "Toggle"
}, T = /* @__PURE__ */ z({
  ...N,
  props: {
    modelValue: { type: Boolean },
    size: { default: "md" },
    disabled: { type: Boolean },
    id: {}
  },
  emits: ["update:modelValue"],
  setup(n, { expose: h, emit: a }) {
    const r = n, i = {
      sm: 8,
      md: 12,
      lg: 16
    }, { disabled: u, size: d } = y(r), s = S(), c = D(u), m = (e) => {
      const k = e.target.checked;
      a("update:modelValue", k);
    }, f = s.focused, b = s.native, p = v(() => i[d.value]);
    return h({
      focus: s.focus,
      blur: s.blur
    }), (e, g) => (_(), $("label", {
      class: t([
        e.$style.host,
        e.$style[`host_${o(d)}`],
        e.modelValue && e.$style.host_checked,
        o(c) && e.$style.host_disabled,
        o(f) && [e.$style.host_focused, "smed-focused-element"]
      ]),
      for: e.id
    }, [
      l("div", {
        class: t(e.$style.toggle)
      }, [
        l("div", {
          class: t(e.$style.circle)
        }, [
          o(c) ? (_(), V(o(C), {
            key: 0,
            name: "lock",
            size: p.value
          }, null, 8, ["size"])) : B("", !0)
        ], 2)
      ], 2),
      l("input", {
        id: e.id,
        ref_key: "native",
        ref: b,
        type: "checkbox",
        role: "switch",
        class: t(e.$style.checkbox),
        checked: e.modelValue,
        disabled: o(c),
        onChange: m
      }, null, 42, M)
    ], 10, I));
  }
}), w = "_host_bhrfz_1", R = "_host_checked_bhrfz_9", j = "_host_disabled_bhrfz_12", q = "_host_focused_bhrfz_12", A = "_host_sm_bhrfz_19", F = "_host_md_bhrfz_28", G = "_host_lg_bhrfz_37", H = "_checkbox_bhrfz_54", J = "_toggle_bhrfz_89", K = "_circle_bhrfz_115", L = {
  host: w,
  host_checked: R,
  host_disabled: j,
  host_focused: q,
  host_sm: A,
  host_md: F,
  host_lg: G,
  checkbox: H,
  toggle: J,
  circle: K
}, O = {
  $style: L
}, Y = /* @__PURE__ */ E(T, [["__cssModules", O]]);
export {
  Y as default
};
