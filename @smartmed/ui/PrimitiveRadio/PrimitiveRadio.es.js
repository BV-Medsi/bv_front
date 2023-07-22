import "./PrimitiveRadio.css";
import { defineComponent as i, openBlock as d, createElementBlock as e, normalizeClass as a, renderSlot as r } from "vue";
import { _ as s } from "../_plugin-vue_export-helper-dad06003.mjs";
const _ = /* @__PURE__ */ i({
  name: "PrimitiveRadio",
  __name: "PrimitiveRadio",
  props: {
    disabled: { type: Boolean },
    focused: { type: Boolean },
    hovered: { type: Boolean },
    size: {},
    invalid: { type: Boolean },
    value: { type: Boolean }
  },
  setup(z) {
    return (o, h) => (d(), e("div", {
      class: a([
        o.$style.radio,
        o.$style["radio_" + o.size],
        o.value && o.$style.radio_checked,
        o.invalid && o.$style.radio_invalid,
        o.disabled && o.$style.radio_disabled,
        o.hovered && o.$style.radio_hovered,
        o.focused && o.$style.radio_focused
      ])
    }, [
      r(o.$slots, "default")
    ], 2));
  }
}), l = "_radio_k0z6i_1", n = "_radio_sm_k0z6i_11", t = "_radio_md_k0z6i_20", c = "_radio_lg_k0z6i_29", m = "_radio_hovered_k0z6i_38", v = "_radio_disabled_k0z6i_38", p = "_radio_invalid_k0z6i_38", k = "_radio_focused_k0z6i_38", u = "_radio_checked_k0z6i_49", y = {
  radio: l,
  radio_sm: n,
  radio_md: t,
  radio_lg: c,
  radio_hovered: m,
  radio_disabled: v,
  radio_invalid: p,
  radio_focused: k,
  radio_checked: u
}, f = {
  $style: y
}, g = /* @__PURE__ */ s(_, [["__cssModules", f]]);
export {
  g as default
};
