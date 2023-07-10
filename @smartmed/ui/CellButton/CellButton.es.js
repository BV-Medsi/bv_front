import "./CellButton.css";
import { defineComponent as R, mergeDefaults as L, toRefs as S, useSlots as A, computed as i, withDirectives as D, openBlock as t, createBlock as v, unref as o, normalizeClass as s, withCtx as E, createElementBlock as n, createCommentVNode as l, renderSlot as m, createVNode as f, mergeProps as M, createElementVNode as N } from "vue";
import V from "@smartmed/ui/Avatar";
import h from "@smartmed/ui/SvgIcon";
import { KeyboardFocusedDirective as z } from "@smartmed/utility/directives";
import { hasSlotContent as C } from "@smartmed/utility/vue";
import { _ as P } from "../LinkOrButton.vue_vue_type_script_setup_true_lang-fa2dbe3d.mjs";
import { _ as F } from "../_plugin-vue_export-helper-dad06003.mjs";
const I = {
  rounded: !0,
  clickable: !0
}, K = /* @__PURE__ */ R({
  name: "CellButton",
  __name: "CellButton",
  props: L({
    icon: {},
    avatar: {},
    rounded: { type: Boolean },
    active: { type: Boolean },
    to: {},
    routeExactMatch: { type: Boolean },
    disabled: { type: Boolean },
    hasArrow: { type: Boolean },
    clickable: { type: Boolean },
    colorClass: {},
    backgroundClass: {},
    rightColorClass: {}
  }, I),
  setup(g) {
    const k = g, { icon: c, avatar: r, to: u, clickable: d, disabled: a } = S(k), _ = A(), p = i(
      () => c && c.value || r && r.value || C(_.left)
    ), y = i(
      () => r && r.value ? { rounded: !1, ...r.value } : null
    ), b = i(() => C(_.right)), $ = i(() => d.value && !a.value ? u == null ? void 0 : u.value : void 0);
    return (e, x) => D((t(), v(o(P), {
      class: s([
        e.$style.root,
        !p.value && e.$style.root_emptyLeft,
        e.rounded && e.$style.root_rounded,
        o(d) && !o(a) && e.$style.root_clickable,
        e.backgroundClass && [e.$style.root_custom, e.backgroundClass]
      ]),
      tabindex: o(d) && !o(a) ? "0" : "-1",
      to: $.value
    }, {
      default: E(({ isActive: B, isExactActive: w }) => [
        e.active || (e.routeExactMatch ? w : B) ? (t(), n("span", {
          key: 0,
          class: s(e.$style.activeRoute)
        }, null, 2)) : l("", !0),
        p.value ? (t(), n("span", {
          key: 1,
          class: s(["smed-space_right-3", e.$style.left])
        }, [
          m(e.$slots, "left", {}, () => [
            o(c) ? (t(), n("div", {
              key: 0,
              class: s([e.$style.icon, e.colorClass])
            }, [
              f(o(h), {
                name: o(a) ? "lock" : o(c)
              }, null, 8, ["name"])
            ], 2)) : l("", !0),
            y.value ? (t(), v(o(V), M({ key: 1 }, y.value, { size: "lg" }), null, 16)) : l("", !0)
          ])
        ], 2)) : l("", !0),
        N("span", {
          class: s([
            "smed-text_body-md smed-text_medium",
            e.$style.content,
            e.colorClass
          ])
        }, [
          m(e.$slots, "default")
        ], 2),
        b.value ? (t(), n("span", {
          key: 2,
          class: s([
            "smed-space_left-1 smed-text_body-sm smed-text_medium",
            e.$style.right,
            e.rightColorClass
          ])
        }, [
          m(e.$slots, "right")
        ], 2)) : l("", !0),
        !o(a) && (o(u) || e.hasArrow) ? (t(), n("span", {
          key: 3,
          class: s(["smed-space_left-1", e.$style.right, e.rightColorClass])
        }, [
          f(o(h), { name: "arrow-right" })
        ], 2)) : l("", !0)
      ]),
      _: 3
    }, 8, ["class", "tabindex", "to"])), [
      [o(z)]
    ]);
  }
}), T = "_root_14vy3_1", j = "_root_emptyLeft_14vy3_37", q = "_root_rounded_14vy3_44", G = "_root_clickable_14vy3_47", H = "_root_custom_14vy3_53", J = "_activeRoute_14vy3_60", O = "_left_14vy3_71", Q = "_content_14vy3_75", U = "_icon_14vy3_79", W = "_right_14vy3_94", X = "_wrapper_14vy3_100", Y = {
  root: T,
  root_emptyLeft: j,
  root_rounded: q,
  root_clickable: G,
  root_custom: H,
  activeRoute: J,
  left: O,
  content: Q,
  icon: U,
  right: W,
  wrapper: X
}, Z = {
  $style: Y
}, ce = /* @__PURE__ */ F(K, [["__cssModules", Z]]);
export {
  ce as default
};
