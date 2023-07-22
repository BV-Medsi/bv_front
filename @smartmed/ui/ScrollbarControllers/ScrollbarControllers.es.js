import "./ScrollbarControllers.css";
import { defineComponent as W, toRefs as re, ref as T, inject as _, computed as H, onBeforeUnmount as se, watch as M, openBlock as f, createElementBlock as k, provide as ae, renderSlot as ce, normalizeClass as h, createVNode as w, Transition as P, withCtx as E, createBlock as F, createCommentVNode as K } from "vue";
import { SCROLLBAR_REF_TOKEN as Y, ANIMATION_FRAME_EVENTS_TOKEN as j } from "@smartmed/ui/tokens";
import { useThrottleFn as G } from "@smartmed/utility/functions";
import { _ as ie } from "../_plugin-vue_export-helper-dad06003.mjs";
const q = "__smed-scrollbar-wrapper", L = 24, ue = 1e3 / 15, U = /* @__PURE__ */ W({
  __name: "ScrollbarThumb",
  props: {
    direction: { default: "vertical" }
  },
  setup(g) {
    const i = g, { direction: n } = re(i), r = T(null), u = _(q), c = _(
      Y,
      null
    ), C = _(j), v = H(
      () => c && c.value || document.documentElement
    ), s = H(
      () => c && c.value || window
    ), p = () => {
      const e = v.value, { clientHeight: t, scrollHeight: o, clientWidth: l, scrollWidth: a } = e;
      return t * t / o > L && n.value === "vertical" || l * l / a > L && n.value === "horizontal" ? 0 : n.value === "vertical" ? L / t : L / l;
    }, m = () => {
      const e = v.value, { clientHeight: t, scrollHeight: o, clientWidth: l, scrollWidth: a } = e;
      return n.value === "vertical" ? Math.ceil(t / o * 100) / 100 : Math.ceil(l / a * 100) / 100;
    }, y = () => {
      const e = v.value, {
        scrollTop: t,
        scrollHeight: o,
        clientHeight: l,
        scrollLeft: a,
        scrollWidth: d,
        clientWidth: R
      } = e;
      return n.value === "vertical" ? t / (o - l) : a / (d - R);
    }, S = () => {
      const e = p() || m();
      return y() * (1 - e);
    }, z = () => {
      const e = r.value;
      e && (i.direction === "vertical" ? (e.style.top = `${S() * 100}%`, e.style.height = `${m() * 100}%`) : (e.style.left = `${S() * 100}%`, e.style.width = `${m() * 100}%`));
    }, N = ({ clientY: e, clientX: t }, o, l) => {
      if (!r.value || !u.value)
        return [0, 0];
      const { offsetHeight: a, offsetWidth: d } = r.value, { top: R, left: ee, width: I, height: V } = u.value.getBoundingClientRect(), te = v.value.scrollHeight - V, oe = v.value.scrollWidth - I, le = (e - R - a * o) / (V - a), ne = (t - ee - d * l) / (I - d);
      return [te * le, oe * ne];
    };
    let O = 0, D = 0;
    const J = ({ clientY: e }, { top: t, height: o }) => (e - t) / o, Q = ({ clientX: e }, { left: t, width: o }) => (e - t) / o, $ = () => {
      document.removeEventListener("mousemove", b);
    }, b = (e) => {
      const [t, o] = N(
        e,
        O,
        D
      ), l = c && c.value;
      if (!l) {
        const { scrollX: a, scrollY: d } = window;
        window.scrollTo(
          n.value === "vertical" ? a : o,
          n.value === "vertical" ? t : d
        );
        return;
      }
      i.direction === "vertical" ? l.scrollTop = t : l.scrollLeft = o;
    }, B = (e) => {
      if (e.preventDefault(), e.stopPropagation(), !r.value)
        return;
      const t = r.value.getBoundingClientRect();
      O = J(e, t), D = Q(e, t), document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", $), document.addEventListener("mousemove", b), document.addEventListener("mouseup", $);
    }, A = (e) => {
      e.preventDefault();
      const t = c && c.value, [o, l] = N(e, 0.5, 0.5);
      if (!t) {
        const { scrollX: a, scrollY: d } = window;
        window.scrollTo(
          n.value === "vertical" ? a : l,
          n.value === "vertical" ? o : d
        );
        return;
      }
      i.direction === "vertical" ? t.scrollTop = o : t.scrollLeft = l;
    }, Z = () => {
      var e, t;
      s.value.addEventListener("scroll", z), (e = r.value) == null || e.addEventListener("mousedown", B), (t = u.value) == null || t.addEventListener("mousedown", A);
    };
    se(() => {
      var e, t;
      s.value.removeEventListener("scroll", z), (e = r.value) == null || e.removeEventListener("mousedown", B), (t = u.value) == null || t.removeEventListener("mousedown", A), document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", $);
    });
    const x = G(z, ue);
    return M(C, x, { immediate: !0 }), M(
      [u, r],
      (e, t) => {
        e && t && Z();
      },
      { immediate: !0 }
    ), (e, t) => (f(), k("div", {
      ref_key: "thumbRef",
      ref: r
    }, null, 512));
  }
}), X = /* @__PURE__ */ W({
  __name: "ScrollbarWrapper",
  setup(g) {
    const i = T(null);
    return ae(q, i), (n, r) => (f(), k("div", {
      ref_key: "wrapper",
      ref: i
    }, [
      ce(n.$slots, "default")
    ], 512));
  }
}), de = {
  name: "ScrollbarControllers"
}, ve = /* @__PURE__ */ W({
  ...de,
  setup(g) {
    const i = _(j), n = _(
      Y,
      null
    ), r = T(!1), u = T(!1), c = H(
      () => n && n.value || document.documentElement
    ), v = G(() => {
      const { clientHeight: s, scrollHeight: p, clientWidth: m, scrollWidth: y } = c.value;
      r.value = Math.ceil(s / p * 100) < 100, u.value = Math.ceil(m / y * 100) < 100;
    }, 300);
    return M(i, v, { immediate: !0 }), (s, p) => (f(), k("div", {
      class: h(s.$style.root)
    }, [
      w(P, { name: "fade" }, {
        default: E(() => [
          r.value ? (f(), F(X, {
            key: 0,
            class: h([
              s.$style.bar,
              s.$style.bar_vertical,
              u.value && s.$style.bar_hashorizontal
            ])
          }, {
            default: E(() => [
              w(U, {
                direction: "vertical",
                class: h(s.$style.thumb)
              }, null, 8, ["class"])
            ]),
            _: 1
          }, 8, ["class"])) : K("", !0)
        ]),
        _: 1
      }),
      w(P, { name: "fade" }, {
        default: E(() => [
          u.value ? (f(), F(X, {
            key: 0,
            class: h([
              s.$style.bar,
              s.$style.bar_horizontal,
              r.value && s.$style.bar_hasvertical
            ])
          }, {
            default: E(() => [
              w(U, {
                direction: "horizontal",
                class: h(s.$style.thumb)
              }, null, 8, ["class"])
            ]),
            _: 1
          }, 8, ["class"])) : K("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), me = "_root_bsokn_1", he = "_bar_bsokn_17", _e = "_bar_vertical_bsokn_23", fe = "_bar_horizontal_bsokn_27", pe = "_bar_hashorizontal_bsokn_31", be = "_bar_hasvertical_bsokn_34", we = "_thumb_bsokn_38", Ee = {
  root: me,
  bar: he,
  bar_vertical: _e,
  bar_horizontal: fe,
  bar_hashorizontal: pe,
  bar_hasvertical: be,
  thumb: we
}, Le = {
  $style: Ee
}, Re = /* @__PURE__ */ ie(ve, [["__cssModules", Le]]);
export {
  Re as default
};
