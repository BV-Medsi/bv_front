import "./Tooltip.css";
import { defineComponent as Z, mergeDefaults as q, toRefs as Y, inject as j, ref as h, computed as K, onBeforeUnmount as U, watch as G, withDirectives as B, openBlock as C, createBlock as J, unref as k, normalizeClass as x, withCtx as A, createElementVNode as Q, renderSlot as O, createVNode as P, Transition as X, createElementBlock as R, normalizeStyle as tt, createCommentVNode as et } from "vue";
import ot from "@smartmed/ui/ActiveZone";
import it from "@smartmed/ui/Portal";
import { HINT_HOST_TOKEN as nt } from "@smartmed/ui/tokens";
import { HoveredDirective as I } from "@smartmed/utility/directives";
import { _ as lt } from "../_plugin-vue_export-helper-dad06003.mjs";
const st = {
  direction: "bottom-right"
}, e = 4, rt = 7, $ = rt * 5, ct = {
  "top-left": "bottom-left",
  "top-right": "bottom-right",
  "bottom-left": "top-left",
  "bottom-right": "top-right",
  left: "right",
  right: "left",
  "top-middle": "bottom-middle",
  "bottom-middle": "top-middle"
}, at = {
  "top-left": "top-right",
  "top-right": "top-left",
  "bottom-left": "bottom-right",
  "bottom-right": "bottom-left",
  left: "right",
  right: "left",
  "top-middle": "top-middle",
  "bottom-middle": "bottom-middle"
};
function dt(o, a, i, g) {
  let s = g;
  const _ = o.top + o.height / 2 - a.height / 2 - i.top, d = o.left - a.width - e - i.left, m = o.left + o.width + e - i.left, r = o.bottom + e - i.top, f = o.top - a.height - e - i.top, u = o.left + o.width / 2 - $ - i.left, p = o.left + o.width / 2 - a.width + $ - i.left, v = o.left - a.width / 2 + o.width / 2 - i.left, c = [
    "left",
    "right",
    "bottom-left",
    "bottom-right",
    "bottom-middle",
    "top-left",
    "top-right",
    "top-middle"
  ];
  c.splice(c.indexOf(s), 1);
  let n = 0, l = 0;
  for (; c.length; ) {
    switch (s) {
      case "left":
        n = _, l = d - e * 2;
        break;
      case "right":
        n = _, l = m + e * 2;
        break;
      case "top-right":
        n = f - e * 2, l = u;
        break;
      case "top-left":
        n = f - e * 2, l = p;
        break;
      case "bottom-right":
        n = r + e * 2, l = u;
        break;
      case "bottom-left":
        n = r + e * 2, l = p;
        break;
      case "bottom-middle":
        n = r + e * 2, l = v;
        break;
      case "top-middle":
        n = f - e * 2, l = v;
        break;
    }
    const b = n + i.top > e && n + a.height + e + i.top < window.innerHeight, H = l > e && l + a.width + e + i.left < i.width;
    if (c.length === 0 || b && H)
      break;
    s = b ? at[s] : ct[s], s = c.splice(c.indexOf(s), 1)[0] || g;
  }
  return {
    left: l,
    top: n,
    direction: s
  };
}
const mt = ["aria-describedby"], ft = {
  name: "Tooltip"
}, ht = /* @__PURE__ */ Z({
  ...ft,
  props: q({
    direction: {},
    describedBy: {}
  }, st),
  setup(o) {
    const a = o, i = 500, g = 200, { direction: s } = Y(a), _ = j(nt), d = h(null), m = h(null), r = h(!1), f = h(null), u = h(null), p = h(s.value), v = h({ left: 0, top: 0 }), c = { id: null }, n = () => _ ? _.value.getBoundingClientRect() : {
      left: 0,
      top: document.body.clientHeight,
      width: document.body.clientWidth
    }, l = (t) => {
      t ? (D(), w()) : (T(), E());
    }, b = (t) => {
      t ? (D(), w()) : (T(), E());
    }, H = (t) => {
      r.value && (t ? w() : (T(), E()));
    }, D = () => {
      r.value || (d.value = setTimeout(() => {
        r.value = !0, d.value = null;
      }, i));
    }, T = () => {
      d.value && (clearTimeout(d.value), d.value = null);
    }, E = () => {
      r.value && (m.value = setTimeout(() => {
        r.value = !1, m.value = null;
      }, g));
    }, w = () => {
      m.value && (clearTimeout(m.value), m.value = null);
    }, F = K(() => {
      const { left: t, top: y } = v.value;
      return {
        left: `${t}px`,
        top: `${y}px`
      };
    });
    U(() => {
      T(), w(), S();
    });
    const z = () => {
      if (!f.value || !u.value)
        return;
      const t = f.value.getBoundingClientRect(), y = u.value.getBoundingClientRect(), L = n(), {
        direction: M,
        left: V,
        top: W
      } = dt(t, y, L, s.value);
      v.value = {
        left: V,
        top: W
      }, p.value = M;
    }, N = () => {
      const t = () => {
        z(), c.id = requestAnimationFrame(t);
      };
      c.id = requestAnimationFrame(t);
    }, S = () => {
      c.id && cancelAnimationFrame(c.id);
    };
    return G(r, (t) => {
      t ? N() : S();
    }), (t, y) => B((C(), J(k(ot), {
      class: x(t.$style.host),
      onActiveZoneChanged: l
    }, {
      default: A(() => [
        Q("div", {
          ref_key: "host",
          ref: f,
          class: x(t.$style.container)
        }, [
          O(t.$slots, "default")
        ], 2),
        P(k(it), { "append-to": "#smed_hints-host" }, {
          default: A(() => [
            P(X, { name: "fade" }, {
              default: A(() => [
                r.value ? B((C(), R("div", {
                  key: 0,
                  ref_key: "hint",
                  ref: u,
                  class: x([t.$style.hint, t.$style["hint_" + p.value]]),
                  "aria-describedby": t.describedBy,
                  style: tt(F.value)
                }, [
                  O(t.$slots, "hint")
                ], 14, mt)), [
                  [k(I), { onEvent: H }]
                ]) : et("", !0)
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["class"])), [
      [k(I), { onEvent: b }]
    ]);
  }
}), ut = "_host_1n1x8_1", _t = "_container_1n1x8_6", pt = "_hint_1n1x8_10", vt = "_hint_left_1n1x8_27", gt = "_hint_right_1n1x8_32", bt = {
  host: ut,
  container: _t,
  hint: pt,
  hint_left: vt,
  hint_right: gt,
  "hint_bottom-left": "_hint_bottom-left_1n1x8_37",
  "hint_bottom-right": "_hint_bottom-right_1n1x8_41",
  "hint_bottom-middle": "_hint_bottom-middle_1n1x8_45",
  "hint_top-left": "_hint_top-left_1n1x8_50",
  "hint_top-right": "_hint_top-right_1n1x8_55",
  "hint_top-middle": "_hint_top-middle_1n1x8_60"
}, Tt = {
  $style: bt
}, Dt = /* @__PURE__ */ lt(ht, [["__cssModules", Tt]]);
export {
  Dt as default
};
