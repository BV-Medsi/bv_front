import "./ChipsItem.css";
import { defineComponent as b, mergeDefaults as p, toRefs as u, withDirectives as y, openBlock as m, createElementBlock as i, normalizeClass as n, unref as o, withKeys as d, renderSlot as r, createBlock as f, createCommentVNode as l, withModifiers as I, createVNode as $ } from "vue";
import a from "@smartmed/ui/SvgIcon";
import { KeyboardFocusedDirective as h } from "@smartmed/utility/directives";
import { _ as C } from "../_plugin-vue_export-helper-dad06003.mjs";
const k = {
  rounded: !0,
  size: "md"
}, z = ["disabled", "tabindex", "onKeydown"], B = ["onClick"], w = /* @__PURE__ */ b({
  name: "ChipsItem",
  __name: "ChipsItem",
  props: p({
    size: {},
    active: { type: Boolean },
    rounded: { type: Boolean },
    icon: {},
    disabled: { type: Boolean },
    removable: { type: Boolean }
  }, k),
  emits: ["remove"],
  setup(_, { emit: c }) {
    const v = _, { removable: s } = u(v), t = () => {
      s.value && c("remove");
    };
    return (e, q) => y((m(), i("button", {
      class: n([
        "smed-text_body-md",
        e.$style.item,
        e.$style["item_" + e.size],
        e.rounded && e.$style.item_rounded,
        !e.disabled && e.active && ["smed-text_medium", e.$style.item_active],
        e.disabled && e.$style.item_disabled,
        !e.disabled && o(s) && e.$style.item_removable
      ]),
      disabled: e.disabled,
      tabindex: e.disabled ? "-1" : "0",
      onKeydown: [
        d(t, ["backspace"]),
        d(t, ["esc"])
      ]
    }, [
      r(e.$slots, "icon", {}, () => [
        e.icon ? (m(), f(o(a), {
          key: 0,
          size: "sm",
          name: e.icon
        }, null, 8, ["name"])) : l("", !0)
      ]),
      r(e.$slots, "default"),
      !e.disabled && o(s) ? (m(), i("button", {
        key: 0,
        tabindex: "-1",
        class: n([e.$style.removeIcon, e.$style["removeIcon_" + e.size]]),
        onClick: I(t, ["prevent", "stop"])
      }, [
        $(o(a), {
          size: "sm",
          name: "close-filled"
        })
      ], 10, B)) : l("", !0)
    ], 42, z)), [
      [o(h)]
    ]);
  }
}), D = "_item_vb69n_1", K = "_item_rounded_vb69n_22", M = "_item_sm_vb69n_25", g = "_item_md_vb69n_28", N = "_item_disabled_vb69n_31", R = "_item_active_vb69n_31", S = "_item_removable_vb69n_52", V = "_removeIcon_vb69n_59", E = "_removeIcon_sm_vb69n_89", F = "_removeIcon_md_vb69n_92", P = {
  item: D,
  item_rounded: K,
  item_sm: M,
  item_md: g,
  item_disabled: N,
  item_active: R,
  item_removable: S,
  removeIcon: V,
  removeIcon_sm: E,
  removeIcon_md: F
}, j = {
  $style: P
}, O = /* @__PURE__ */ C(w, [["__cssModules", j]]);
export {
  O as default
};
