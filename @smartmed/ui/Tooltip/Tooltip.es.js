import "./Tooltip.css";
import { defineComponent as U, mergeDefaults as G, toRefs as J, useSlots as Q, inject as X, ref as u, computed as O, onBeforeUnmount as x, watch as R, withDirectives as P, openBlock as S, createBlock as $, unref as k, normalizeClass as A, withCtx as B, createElementVNode as tt, renderSlot as I, createVNode as et, Transition as ot, createElementBlock as it, normalizeStyle as nt, createCommentVNode as F } from "vue";
import lt from "@smartmed/ui/ActiveZone";
import st from "@smartmed/ui/Portal";
import { HINT_HOST_TOKEN as rt } from "@smartmed/ui/tokens";
import { HoveredDirective as z } from "@smartmed/utility/directives";
import { hasSlotContent as at } from "@smartmed/utility/vue";
import { _ as ct } from "../_plugin-vue_export-helper-dad06003.mjs";
const dt = {
  direction: "bottom-right"
}, i = 4, ht = 7, N = ht * 5, ut = {
  "top-left": "bottom-left",
  "top-right": "bottom-right",
  "bottom-left": "top-left",
  "bottom-right": "top-right",
  left: "right",
  right: "left",
  "top-middle": "bottom-middle",
  "bottom-middle": "top-middle"
}, ft = {
  "top-left": "top-right",
  "top-right": "top-left",
  "bottom-left": "bottom-right",
  "bottom-right": "bottom-left",
  left: "right",
  right: "left",
  "top-middle": "top-middle",
  "bottom-middle": "bottom-middle"
};
function mt(n, a, l, b) {
  let s = b;
  const w = n.top + n.height / 2 - a.height / 2 - l.top, T = n.left - a.width - i - l.left, h = n.left + n.width + i - l.left, c = n.bottom + i - l.top, r = n.top - a.height - i - l.top, f = n.left + n.width / 2 - N - l.left, m = n.left + n.width / 2 - a.width + N - l.left, p = n.left - a.width / 2 + n.width / 2 - l.left, d = [
    "left",
    "right",
    "bottom-left",
    "bottom-right",
    "bottom-middle",
    "top-left",
    "top-right",
    "top-middle"
  ];
  d.splice(d.indexOf(s), 1);
  let o = 0, e = 0;
  for (; d.length; ) {
    switch (s) {
      case "left":
        o = w, e = T - i * 2;
        break;
      case "right":
        o = w, e = h + i * 2;
        break;
      case "top-right":
        o = r - i * 2, e = f;
        break;
      case "top-left":
        o = r - i * 2, e = m;
        break;
      case "bottom-right":
        o = c + i * 2, e = f;
        break;
      case "bottom-left":
        o = c + i * 2, e = m;
        break;
      case "bottom-middle":
        o = c + i * 2, e = p;
        break;
      case "top-middle":
        o = r - i * 2, e = p;
        break;
    }
    const y = o + l.top > i && o + a.height + i + l.top < window.innerHeight, H = e > i && e + a.width + i + l.left < l.width;
    if (d.length === 0 || y && H)
      break;
    s = y ? ft[s] : ut[s], s = d.splice(d.indexOf(s), 1)[0] || b;
  }
  return {
    left: e,
    top: o,
    direction: s
  };
}
const _t = ["aria-describedby"], pt = {
  name: "Tooltip"
}, vt = /* @__PURE__ */ U({
  ...pt,
  props: G({
    direction: {},
    describedBy: {},
    wide: { type: Boolean }
  }, dt),
  setup(n) {
    const a = n, l = 500, b = 200, { direction: s } = J(a), w = Q(), T = X(rt), h = u(null), c = u(null), r = u(!1), f = u(null), m = u(null), p = u(s.value), d = u({ left: 0, top: 0 }), o = { id: null }, e = O(() => at(w.hint)), y = () => T ? T.value.getBoundingClientRect() : {
      left: 0,
      top: document.body.clientHeight,
      width: document.body.clientWidth
    }, H = (t) => {
      if (!e.value) {
        g(), v();
        return;
      }
      t ? (C(), g()) : (v(), E());
    }, L = (t) => {
      e.value && (t ? (C(), g()) : (v(), E()));
    }, M = (t) => {
      !r.value || !e.value || (t ? g() : (v(), E()));
    }, C = () => {
      r.value || !e.value || (h.value = setTimeout(() => {
        r.value = !0, h.value = null;
      }, l));
    }, v = () => {
      h.value && (clearTimeout(h.value), h.value = null);
    }, E = () => {
      !r.value || !e.value || (c.value = setTimeout(() => {
        r.value = !1, c.value = null;
      }, b));
    }, g = () => {
      c.value && (clearTimeout(c.value), c.value = null);
    }, V = O(() => {
      const { left: t, top: _ } = d.value;
      return {
        left: `${t}px`,
        top: `${_}px`
      };
    });
    x(() => {
      v(), g(), D();
    });
    const W = () => {
      if (!f.value || !m.value)
        return;
      const t = f.value.getBoundingClientRect(), _ = m.value.getBoundingClientRect(), q = y(), {
        direction: Y,
        left: j,
        top: K
      } = mt(t, _, q, s.value);
      d.value = {
        left: j,
        top: K
      }, p.value = Y;
    }, Z = () => {
      const t = () => {
        W(), o.id = requestAnimationFrame(t);
      };
      o.id = requestAnimationFrame(t);
    }, D = () => {
      o.id && cancelAnimationFrame(o.id);
    };
    return R([r, e], ([t, _]) => {
      t && _ ? Z() : D();
    }), (t, _) => P((S(), $(k(lt), {
      class: A([t.$style.host, t.wide && t.$style.host_wide]),
      onActiveZoneChanged: H
    }, {
      default: B(() => [
        tt("div", {
          ref_key: "host",
          ref: f,
          class: A(t.$style.container)
        }, [
          I(t.$slots, "default")
        ], 2),
        e.value ? (S(), $(k(st), {
          key: 0,
          "append-to": "#smed_hints-host"
        }, {
          default: B(() => [
            et(ot, { name: "fade" }, {
              default: B(() => [
                r.value ? P((S(), it("div", {
                  key: 0,
                  ref_key: "hint",
                  ref: m,
                  class: A([t.$style.hint, t.$style["hint_" + p.value]]),
                  "aria-describedby": t.describedBy,
                  style: nt(V.value)
                }, [
                  I(t.$slots, "hint")
                ], 14, _t)), [
                  [k(z), { onEvent: M }]
                ]) : F("", !0)
              ]),
              _: 3
            })
          ]),
          _: 3
        })) : F("", !0)
      ]),
      _: 3
    }, 8, ["class"])), [
      [k(z), { onEvent: L }]
    ]);
  }
}), gt = "_host_2h2o8_1", bt = "_host_wide_2h2o8_5", wt = "_container_2h2o8_8", Tt = "_hint_2h2o8_16", yt = "_hint_left_2h2o8_33", kt = "_hint_right_2h2o8_38", Ht = {
  host: gt,
  host_wide: bt,
  container: wt,
  hint: Tt,
  hint_left: yt,
  hint_right: kt,
  "hint_bottom-left": "_hint_bottom-left_2h2o8_43",
  "hint_bottom-right": "_hint_bottom-right_2h2o8_47",
  "hint_bottom-middle": "_hint_bottom-middle_2h2o8_51",
  "hint_top-left": "_hint_top-left_2h2o8_56",
  "hint_top-right": "_hint_top-right_2h2o8_61",
  "hint_top-middle": "_hint_top-middle_2h2o8_66"
}, Et = {
  $style: Ht
}, It = /* @__PURE__ */ ct(vt, [["__cssModules", Et]]);
export {
  It as default
};
