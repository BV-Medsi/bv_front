import "./Root.css";
import { defineComponent as T, ref as c, onBeforeUnmount as A, openBlock as m, createElementBlock as d, createElementVNode as O, normalizeClass as i, createVNode as v, TransitionGroup as C, withCtx as k, Fragment as E, renderList as P, createBlock as R, unref as w, watch as D, Transition as M, createCommentVNode as N, provide as p, readonly as y, renderSlot as K } from "vue";
import g from "@smartmed/ui/ScrollbarControllers";
import { HINT_HOST_TOKEN as q, POPUPS_HOST_TOKEN as F, TABLE_BAR_HOST_TOKEN as L, DROPDOWN_HOST_TOKEN as V, ANIMATION_FRAME_EVENTS_TOKEN as j, ALERTS_HOST_TOKEN as I } from "@smartmed/ui/tokens";
import { i as U } from "../isMobile-2b62b6a9.mjs";
import z from "@smartmed/ui/Alert";
import { _ as b } from "../_plugin-vue_export-helper-dad06003.mjs";
import { useOverscroll as G } from "@smartmed/ui/use";
const H = {
  type: "success",
  autoClose: !0,
  closeTimeout: 5e3
}, W = /* @__PURE__ */ T({
  name: "AlertsHost",
  __name: "AlertsHost",
  setup(t, { expose: a }) {
    const o = c([]), e = /* @__PURE__ */ new Map(), u = c(null), f = (s, n, _ = H) => {
      const {
        type: h = H.type,
        autoClose: $ = H.autoClose,
        closeTimeout: S = H.closeTimeout
      } = _;
      if (o.value = o.value.concat({
        id: s,
        content: n,
        type: h,
        closable: $
      }), $) {
        const B = setTimeout(() => {
          l(s);
        }, S);
        e.set(s, B);
      }
    }, l = (s) => {
      const n = e.get(s);
      n && clearTimeout(n), e.delete(s), o.value = o.value.filter(({ id: _ }) => _ !== s);
    }, r = () => {
      const s = o.value[0];
      s && l(s.id);
    };
    return A(() => {
      o.value.forEach((s) => l(s.id));
    }), a({
      elementRef: u,
      show: f,
      close: l,
      closeLast: r
    }), (s, n) => (m(), d("div", {
      id: "smed-alerts-host",
      ref_key: "elementRef",
      ref: u
    }, [
      O("div", {
        class: i(s.$style.root)
      }, [
        v(C, {
          tag: "ui",
          name: "smed-list-transition",
          class: i(s.$style.container)
        }, {
          default: k(() => [
            (m(!0), d(E, null, P(o.value, (_) => (m(), R(w(z), {
              key: _.id,
              class: "smed-space_bottom-4",
              type: _.type,
              content: _.content,
              closable: _.closable,
              onClose: (h) => l(_.id)
            }, null, 8, ["type", "content", "closable", "onClose"]))), 128))
          ]),
          _: 1
        }, 8, ["class"])
      ], 2)
    ], 512));
  }
}), J = "_root_154tb_1", Q = "_container_154tb_8", X = {
  root: J,
  container: Q
}, Y = {
  $style: X
}, Z = /* @__PURE__ */ b(W, [["__cssModules", Y]]), x = T({
  name: "DropdownHost",
  setup() {
    return {
      element: c(null)
    };
  }
}), ee = {
  id: "smed_dropdown-host",
  ref: "element"
};
function se(t, a, o, e, u, f) {
  return m(), d("div", ee, null, 512);
}
const oe = /* @__PURE__ */ b(x, [["render", se]]), te = T({
  name: "PopupsHost",
  setup() {
    const t = /* @__PURE__ */ new Map(), a = c(!1), o = c(!1);
    let e = null;
    D(a, (r) => {
      r ? e = setTimeout(() => o.value = !0) : (e && (clearTimeout(e), e = null), o.value = !1);
    });
    const u = (r) => {
      t.set(r, null);
    }, f = (r, s) => {
      t.set(r, s ? /* @__PURE__ */ new Date() : null), a.value = Array.from(t.values()).some((n) => n);
    }, l = (r) => {
      t.delete(r), a.value = Array.from(t.values()).some(Boolean);
    };
    return A(() => {
      e && clearTimeout(e);
    }), {
      isShown: a,
      animation: o,
      registerPopup: u,
      setOpen: f,
      remove: l
    };
  }
}), le = "_host_je562_1", ne = "_host_overlay_je562_9", ae = "_host_animation_je562_25", re = {
  host: le,
  host_overlay: ne,
  host_animation: ae
};
function ce(t, a, o, e, u, f) {
  return m(), d("div", {
    id: "smed_popups-host",
    class: i([
      t.$style.host,
      t.isShown && t.$style.host_overlay,
      t.animation && t.$style.host_animation
    ])
  }, null, 2);
}
const ue = {
  $style: re
}, _e = /* @__PURE__ */ b(te, [["render", ce], ["__cssModules", ue]]), ie = { id: "smed_table-bar-host" }, me = /* @__PURE__ */ O("div", { id: "smed_table-bars" }, null, -1), fe = { id: "smed_table-bar-overlayable" }, de = /* @__PURE__ */ T({
  __name: "TableBarHost",
  setup(t, { expose: a }) {
    const o = G("all", (l) => l), e = c(!1);
    return a({
      isOverlay: e,
      showOverlay: () => {
        e.value = !0;
      },
      hideOverlay: () => {
        e.value = !1;
      }
    }), (l, r) => (m(), d("div", ie, [
      me,
      O("div", fe, [
        v(M, { name: "fade" }, {
          default: k(() => [
            e.value ? (m(), d("div", {
              key: 0,
              ref_key: "overscrollRef",
              ref: o,
              class: i(l.$style.overlay)
            }, null, 2)) : N("", !0)
          ]),
          _: 1
        })
      ])
    ]));
  }
}), pe = "_overlay_11lww_1", ye = {
  overlay: pe
}, ve = {
  $style: ye
}, he = /* @__PURE__ */ b(de, [["__cssModules", ve]]), $e = {
  name: "Root"
}, Te = /* @__PURE__ */ T({
  ...$e,
  setup(t) {
    const a = c(null), o = c(null), e = c(null), u = c(null), f = c(null), l = c(NaN), r = U(), s = () => {
      l.value = requestAnimationFrame(s);
    };
    return l.value = requestAnimationFrame(s), p(q, y(o)), p(F, y(e)), p(L, y(u)), p(V, y(f)), p(j, y(l)), p(I, y(a)), (n, _) => (m(), d(E, null, [
      w(r) ? N("", !0) : (m(), R(M, {
        key: 0,
        name: "fade"
      }, {
        default: k(() => {
          var h, $;
          return [
            !((h = e.value) != null && h.isShown) && !(($ = u.value) != null && $.isOverlay) ? (m(), R(w(g), {
              key: 0,
              class: i(n.$style.scrollbar)
            }, null, 8, ["class"])) : N("", !0)
          ];
        }),
        _: 1
      })),
      K(n.$slots, "default"),
      v(he, {
        ref_key: "tableBarHostRef",
        ref: u,
        class: i(n.$style.host)
      }, null, 8, ["class"]),
      v(_e, {
        ref_key: "popupsHostRef",
        ref: e,
        class: i(n.$style.host)
      }, null, 8, ["class"]),
      v(Z, {
        ref_key: "alertsHostRef",
        ref: a,
        class: i(n.$style.host)
      }, null, 8, ["class"]),
      v(oe, {
        ref_key: "dropdownHostRef",
        ref: f,
        class: i(n.$style.host)
      }, null, 8, ["class"]),
      O("div", {
        id: "smed_hints-host",
        ref_key: "hintsHostRef",
        ref: o,
        class: i(n.$style.host)
      }, null, 2)
    ], 64));
  }
}), be = "_host_qf25v_1", He = "_scrollbar_qf25v_9", Oe = {
  host: be,
  scrollbar: He
}, Re = {
  $style: Oe
}, Ce = /* @__PURE__ */ b(Te, [["__cssModules", Re]]);
export {
  Ce as default
};
