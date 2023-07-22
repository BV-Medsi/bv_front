import "./PrimitiveCheckbox.css";
import { defineComponent as d, toRefs as a, computed as k, openBlock as h, createElementBlock as i, normalizeClass as s, unref as c, createVNode as t, renderSlot as r } from "vue";
import b from "@smartmed/ui/SvgIcon";
import { _ as m } from "../_plugin-vue_export-helper-dad06003.mjs";
const u = /* @__PURE__ */ d({
  name: "PrimitiveCheckbox",
  __name: "PrimitiveCheckbox",
  props: {
    disabled: { type: Boolean },
    focused: { type: Boolean },
    hovered: { type: Boolean },
    size: {},
    invalid: { type: Boolean },
    value: { type: [Boolean, null] }
  },
  setup(l) {
    const _ = l, { value: o } = a(_), n = k(() => o.value === null ? "minus" : "check");
    return (e, M) => (h(), i("div", {
      class: s([
        e.$style.checkbox,
        e.$style["checkbox_" + e.size],
        c(o) !== !1 && e.$style.checkbox_checked,
        e.invalid && e.$style.checkbox_invalid,
        e.disabled && e.$style.checkbox_disabled,
        e.hovered && e.$style.checkbox_hovered,
        e.focused && "smed-focused-element"
      ])
    }, [
      t(c(b), {
        class: s([e.$style.mark, c(o) !== !1 && e.$style.mark_on]),
        size: e.size,
        name: n.value
      }, null, 8, ["class", "size", "name"]),
      r(e.$slots, "default")
    ], 2));
  }
}), v = "_checkbox_1d44j_1", x = "_checkbox_sm_1d44j_9", p = "_checkbox_md_1d44j_18", f = "_checkbox_lg_1d44j_27", y = "_checkbox_hovered_1d44j_36", j = "_checkbox_disabled_1d44j_36", $ = "_checkbox_invalid_1d44j_36", B = "_checkbox_checked_1d44j_43", z = "_mark_1d44j_58", C = "_mark_on_1d44j_62", g = {
  checkbox: v,
  checkbox_sm: x,
  checkbox_md: p,
  checkbox_lg: f,
  checkbox_hovered: y,
  checkbox_disabled: j,
  checkbox_invalid: $,
  checkbox_checked: B,
  mark: z,
  mark_on: C
}, P = {
  $style: g
}, R = /* @__PURE__ */ m(u, [["__cssModules", P]]);
export {
  R as default
};
