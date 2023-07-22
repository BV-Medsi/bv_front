import "./DataListItem.css";
import { defineComponent as i, mergeDefaults as m, ref as n, withDirectives as a, openBlock as r, createElementBlock as _, normalizeClass as l, withKeys as c, withModifiers as d, renderSlot as p, unref as f } from "vue";
import { KeyboardFocusedDirective as u } from "@smartmed/utility/directives";
import { _ as b } from "../_plugin-vue_export-helper-dad06003.mjs";
const h = {
  size: "md",
  hoverable: !0
}, v = ["tabindex", "onKeydown"], y = /* @__PURE__ */ i({
  name: "DataListItem",
  __name: "DataListItem",
  props: m({
    size: {},
    hoverable: { type: Boolean }
  }, h),
  emits: ["onClick"],
  setup(z, { emit: o }) {
    const s = n(null), t = () => {
      o("onClick");
    };
    return (e, I) => a((r(), _("button", {
      ref_key: "native",
      ref: s,
      "data-smed-data-list-item": "",
      tabindex: e.hoverable ? "0" : "-1",
      class: l([
        "smed-text_body-xl",
        e.$style.item,
        e.$style["item_" + e.size],
        e.hoverable && e.$style.item_hoverable
      ]),
      onKeydown: c(d(t, ["stop", "prevent"]), ["enter"]),
      onClick: t
    }, [
      p(e.$slots, "default")
    ], 42, v)), [
      [f(u)]
    ]);
  }
}), j = "_item_4mcjj_1", D = "_item_hoverable_4mcjj_18", k = "_item_sm_4mcjj_24", w = "_item_md_4mcjj_27", C = "_item_lg_4mcjj_31", $ = {
  item: j,
  item_hoverable: D,
  item_sm: k,
  item_md: w,
  item_lg: C
}, g = {
  $style: $
}, E = /* @__PURE__ */ b(y, [["__cssModules", g]]);
export {
  E as default
};
