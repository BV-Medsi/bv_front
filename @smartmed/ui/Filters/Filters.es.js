import "./Filters.css";
import { defineComponent as y, mergeDefaults as g, toRefs as I, openBlock as d, createElementBlock as c, normalizeClass as h, Fragment as F, renderList as _, createBlock as b, unref as r, withCtx as k, renderSlot as C, createTextVNode as V, toDisplayString as $ } from "vue";
import z from "@smartmed/ui/ChipsItem";
import { _ as v } from "../_plugin-vue_export-helper-dad06003.mjs";
const A = {
  rounded: !1,
  matcher: (a, n) => a === n,
  disableItemHandler: () => !1,
  dataAutomationItemPrefix: "smed-filters-item"
}, B = /* @__PURE__ */ y({
  name: "Filters",
  __name: "Filters",
  props: g({
    modelValue: {},
    items: {},
    icon: { type: [String, Function] },
    size: {},
    rounded: { type: Boolean },
    matcher: { type: Function },
    disableItemHandler: { type: Function },
    dataAutomationItemPrefix: {}
  }, A),
  emits: ["update:modelValue"],
  setup(a, { emit: n }) {
    const m = a, { modelValue: l } = I(m), p = (e, o, t) => typeof t == "function" ? t(e, o) : t, i = (e, o, t) => !!e.find((s) => t(s, o)), f = (e, o, t) => {
      const s = i(e, o, t) ? e.filter((u) => !t(u, o)) : [...e, o];
      n("update:modelValue", s);
    };
    return (e, o) => (d(), c("div", {
      class: h(e.$style.root)
    }, [
      (d(!0), c(F, null, _(e.items, (t, s) => (d(), b(r(z), {
        key: s,
        class: "smed-space_right-2 smed-space_bottom-2",
        active: i(r(l), t, e.matcher),
        icon: p(t, s, e.icon),
        size: e.size,
        rounded: e.rounded,
        "data-automation-id": `${e.dataAutomationItemPrefix}_${s}`,
        disabled: e.disableItemHandler(t, s),
        onClick: (u) => f(r(l), t, e.matcher)
      }, {
        default: k(() => [
          C(e.$slots, "default", {
            item: t,
            active: i(r(l), t, e.matcher)
          }, () => [
            V($(t), 1)
          ])
        ]),
        _: 2
      }, 1032, ["active", "icon", "size", "rounded", "data-automation-id", "disabled", "onClick"]))), 128))
    ], 2));
  }
}), P = "_root_jr8li_1", D = {
  root: P
}, H = {
  $style: D
}, w = /* @__PURE__ */ v(B, [["__cssModules", H]]);
export {
  w as default
};
