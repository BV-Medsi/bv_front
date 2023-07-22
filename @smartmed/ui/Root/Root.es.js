import "./Root.css";
import { defineComponent as H, ref as r, inject as K, onBeforeUnmount as M, openBlock as m, createElementBlock as f, createElementVNode as R, normalizeClass as d, unref as b, createVNode as $, TransitionGroup as L, withCtx as A, Fragment as C, renderList as j, createBlock as E, resolveDynamicComponent as q, watch as F, Transition as B, createCommentVNode as k, provide as y, readonly as h, renderSlot as I } from "vue";
import V from "@smartmed/ui/ScrollbarControllers";
import { ALERTS_OPTIONS_TOKEN as U, HINT_HOST_TOKEN as x, POPUPS_HOST_TOKEN as z, TABLE_BAR_HOST_TOKEN as G, DROPDOWN_HOST_TOKEN as W, ANIMATION_FRAME_EVENTS_TOKEN as J, ALERTS_HOST_TOKEN as Q } from "@smartmed/ui/tokens";
import { i as X } from "../isMobile-2b62b6a9.mjs";
import { _ as O } from "../_plugin-vue_export-helper-dad06003.mjs";
import { useOverscroll as Y } from "@smartmed/ui/use";
const N = {
  type: "success",
  autoClose: !0,
  closeTimeout: 5e3,
  data: void 0
}, Z = /* @__PURE__ */ H({
  name: "AlertsHost",
  __name: "AlertsHost",
  setup(l, { expose: n }) {
    const s = r([]), e = /* @__PURE__ */ new Map(), c = r(null), o = K(U, null), _ = o != null && o.component ? o.component : "div", a = o != null && o.transitionName ? o.transitionName : "none", p = (o == null ? void 0 : o.position) || "bottom", i = (t, T, u = N) => {
      const {
        type: S = N.type,
        autoClose: g = N.autoClose,
        closeTimeout: P = N.closeTimeout
      } = u;
      if (s.value = s.value.concat({
        id: t,
        content: T,
        type: S,
        closable: g,
        data: u.data
      }), g) {
        const D = setTimeout(() => {
          v(t);
        }, P);
        e.set(t, D);
      }
    }, v = (t) => {
      const T = e.get(t);
      T && clearTimeout(T), e.delete(t), s.value = s.value.filter(({ id: u }) => u !== t);
    }, w = () => {
      const t = s.value[0];
      t && v(t.id);
    };
    return M(() => {
      s.value.forEach((t) => v(t.id));
    }), n({
      elementRef: c,
      show: i,
      close: v,
      closeLast: w
    }), (t, T) => (m(), f("div", {
      id: "smed-alerts-host",
      ref_key: "elementRef",
      ref: c
    }, [
      R("div", {
        class: d([t.$style.root, t.$style["root_" + b(p)]])
      }, [
        $(L, {
          tag: "ui",
          name: b(a),
          class: d(t.$style.container)
        }, {
          default: A(() => [
            (m(!0), f(C, null, j(s.value, (u) => (m(), E(q(b(_)), {
              key: u.id,
              class: "smed-space_bottom-4",
              type: u.type,
              content: u.content,
              data: u.data,
              closable: u.closable,
              onClose: (S) => v(u.id)
            }, null, 40, ["type", "content", "data", "closable", "onClose"]))), 128))
          ]),
          _: 1
        }, 8, ["name", "class"])
      ], 2)
    ], 512));
  }
}), ee = "_root_1gwxm_1", oe = "_root_bottom_1gwxm_12", te = "_container_1gwxm_18", se = "_root_top_1gwxm_21", le = {
  root: ee,
  root_bottom: oe,
  "root_bottom-right": "_root_bottom-right_1gwxm_15",
  container: te,
  root_top: se,
  "root_top-right": "_root_top-right_1gwxm_24"
}, ne = {
  $style: le
}, ae = /* @__PURE__ */ O(Z, [["__cssModules", ne]]), re = H({
  name: "DropdownHost",
  setup() {
    return {
      element: r(null)
    };
  }
}), ce = {
  id: "smed_dropdown-host",
  ref: "element"
};
function _e(l, n, s, e, c, o) {
  return m(), f("div", ce, null, 512);
}
const ue = /* @__PURE__ */ O(re, [["render", _e]]), ie = H({
  name: "PopupsHost",
  setup() {
    const l = /* @__PURE__ */ new Map(), n = r(!1), s = r(!1);
    let e = null;
    F(n, (a) => {
      a ? e = setTimeout(() => s.value = !0) : (e && (clearTimeout(e), e = null), s.value = !1);
    });
    const c = (a) => {
      l.set(a, null);
    }, o = (a, p) => {
      l.set(a, p ? /* @__PURE__ */ new Date() : null), n.value = Array.from(l.values()).some((i) => i);
    }, _ = (a) => {
      l.delete(a), n.value = Array.from(l.values()).some(Boolean);
    };
    return M(() => {
      e && clearTimeout(e);
    }), {
      isShown: n,
      animation: s,
      registerPopup: c,
      setOpen: o,
      remove: _
    };
  }
}), me = "_host_je562_1", de = "_host_overlay_je562_9", fe = "_host_animation_je562_25", pe = {
  host: me,
  host_overlay: de,
  host_animation: fe
};
function ve(l, n, s, e, c, o) {
  return m(), f("div", {
    id: "smed_popups-host",
    class: d([
      l.$style.host,
      l.isShown && l.$style.host_overlay,
      l.animation && l.$style.host_animation
    ])
  }, null, 2);
}
const ye = {
  $style: pe
}, he = /* @__PURE__ */ O(ie, [["render", ve], ["__cssModules", ye]]), $e = { id: "smed_table-bar-host" }, Te = /* @__PURE__ */ R("div", { id: "smed_table-bars" }, null, -1), be = { id: "smed_table-bar-overlayable" }, He = /* @__PURE__ */ H({
  __name: "TableBarHost",
  setup(l, { expose: n }) {
    const s = Y("all", (_) => _), e = r(!1);
    return n({
      isOverlay: e,
      showOverlay: () => {
        e.value = !0;
      },
      hideOverlay: () => {
        e.value = !1;
      }
    }), (_, a) => (m(), f("div", $e, [
      Te,
      R("div", be, [
        $(B, { name: "fade" }, {
          default: A(() => [
            e.value ? (m(), f("div", {
              key: 0,
              ref_key: "overscrollRef",
              ref: s,
              class: d(_.$style.overlay)
            }, null, 2)) : k("", !0)
          ]),
          _: 1
        })
      ])
    ]));
  }
}), Oe = "_overlay_11lww_1", we = {
  overlay: Oe
}, Ne = {
  $style: we
}, Re = /* @__PURE__ */ O(He, [["__cssModules", Ne]]), Ee = {
  name: "Root"
}, ke = /* @__PURE__ */ H({
  ...Ee,
  setup(l) {
    const n = r(null), s = r(null), e = r(null), c = r(null), o = r(null), _ = r(NaN), a = X(), p = () => {
      _.value = requestAnimationFrame(p);
    };
    return _.value = requestAnimationFrame(p), y(x, h(s)), y(z, h(e)), y(G, h(c)), y(W, h(o)), y(J, h(_)), y(Q, h(n)), (i, v) => (m(), f(C, null, [
      b(a) ? k("", !0) : (m(), E(B, {
        key: 0,
        name: "fade"
      }, {
        default: A(() => {
          var w, t;
          return [
            !((w = e.value) != null && w.isShown) && !((t = c.value) != null && t.isOverlay) ? (m(), E(b(V), {
              key: 0,
              class: d(i.$style.scrollbar)
            }, null, 8, ["class"])) : k("", !0)
          ];
        }),
        _: 1
      })),
      I(i.$slots, "default"),
      $(Re, {
        ref_key: "tableBarHostRef",
        ref: c,
        class: d(i.$style.host)
      }, null, 8, ["class"]),
      $(he, {
        ref_key: "popupsHostRef",
        ref: e,
        class: d(i.$style.host)
      }, null, 8, ["class"]),
      $(ae, {
        ref_key: "alertsHostRef",
        ref: n
      }, null, 512),
      $(ue, {
        ref_key: "dropdownHostRef",
        ref: o,
        class: d(i.$style.host)
      }, null, 8, ["class"]),
      R("div", {
        id: "smed_hints-host",
        ref_key: "hintsHostRef",
        ref: s,
        class: d(i.$style.host)
      }, null, 2)
    ], 64));
  }
}), Ae = "_host_qf25v_1", Se = "_scrollbar_qf25v_9", ge = {
  host: Ae,
  scrollbar: Se
}, Me = {
  $style: ge
}, qe = /* @__PURE__ */ O(ke, [["__cssModules", Me]]);
export {
  qe as default
};
