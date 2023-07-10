import "./Tabs.css";
import { defineComponent as h, mergeDefaults as $, toRefs as B, openBlock as l, createElementBlock as u, normalizeClass as d, Fragment as w, renderList as g, withDirectives as V, createBlock as k, unref as n, withCtx as z, createElementVNode as D, renderSlot as E, createTextVNode as I, toDisplayString as T } from "vue";
import { KeyboardFocusedDirective as x } from "@smartmed/utility/directives";
import { _ as A } from "../LinkOrButton.vue_vue_type_script_setup_true_lang-fa2dbe3d.mjs";
import { _ as M } from "../_plugin-vue_export-helper-dad06003.mjs";
const R = {
  modelValue: null,
  type: "boxed",
  size: "md",
  wide: !1,
  tabs: () => [],
  tabKey: "id",
  underlineInactiveBorder: !0
}, F = {
  name: "Tabs"
}, K = /* @__PURE__ */ h({
  ...F,
  props: $({
    modelValue: {},
    asRouter: { type: Boolean },
    routeExactMatch: { type: Boolean },
    compare: { type: Function },
    tabKey: {},
    tabs: {},
    type: {},
    wide: { type: Boolean },
    size: {},
    underlineInactiveBorder: { type: Boolean }
  }, R),
  emits: ["update:modelValue"],
  setup(m, { emit: p }) {
    const o = m, { asRouter: s, modelValue: _, tabKey: r, routeExactMatch: y } = B(o), c = (e, t, a) => a && !o.compare && typeof t != "string" && typeof t != "number" ? e[a] === t[a] : o.compare ? o.compare(e, t) : e === t, f = (e, t) => typeof e == "string" || typeof e == "number" || !t ? e : e[t], v = (e) => s.value ? "0" : c(
      _.value,
      e,
      r.value
    ) ? "-1" : "0", b = (e, t) => s.value ? y.value ? t.isExactActive : t.isActive : c(_.value, e, r.value), C = (e) => {
      p("update:modelValue", e);
    };
    return (e, t) => (l(), u("div", {
      class: d([e.$style.tabs, e.$style["tabs_" + e.size]])
    }, [
      (l(!0), u(w, null, g(e.tabs, (a) => V((l(), k(n(A), {
        key: f(a, n(r)),
        class: d([
          e.$style.tabContainer,
          e.$style["tabContainer_" + e.type],
          e.wide && e.$style.tabContainer_wide
        ]),
        to: n(s) ? a : void 0,
        tabindex: v(a),
        onClick: (i) => C(a)
      }, {
        default: z((i) => [
          D("div", {
            class: d([
              "smed-text_body-xl",
              e.$style.tab,
              e.$style["tab_" + e.size],
              e.$style["tab_" + e.type],
              e.underlineInactiveBorder && e.$style.tab_bordered,
              b(a, i) && e.$style.tab_active
            ])
          }, [
            E(e.$slots, "default", {
              tab: a,
              active: b(a, i)
            }, () => [
              I(T(a), 1)
            ])
          ], 2)
        ]),
        _: 2
      }, 1032, ["class", "to", "tabindex", "onClick"])), [
        [n(x)]
      ])), 128))
    ], 2));
  }
}), N = "_tabs_pemah_1", P = "_tab_pemah_1", S = "_tab_boxed_pemah_23", L = "_tab_active_pemah_26", U = "_tab_underline_pemah_31", j = "_tab_bordered_pemah_51", q = "_tab_sm_pemah_54", G = "_tab_md_pemah_57", H = "_tabContainer_pemah_70", J = "_tabContainer_boxed_pemah_91", O = "_tabContainer_wide_pemah_94", Q = {
  tabs: N,
  tab: P,
  tab_boxed: S,
  tab_active: L,
  tab_underline: U,
  tab_bordered: j,
  tab_sm: q,
  tab_md: G,
  tabContainer: H,
  tabContainer_boxed: J,
  tabContainer_wide: O
}, W = {
  $style: Q
}, ae = /* @__PURE__ */ M(K, [["__cssModules", W]]);
export {
  ae as default
};
