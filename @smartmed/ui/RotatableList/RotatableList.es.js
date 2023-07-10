import "./RotatableList.css";
import { defineComponent as g, mergeDefaults as w, toRefs as b, ref as L, computed as o, watch as R, openBlock as r, createElementBlock as n, normalizeClass as c, normalizeStyle as d, Fragment as k, renderList as M, renderSlot as S, unref as V } from "vue";
import { clamp as x } from "@smartmed/utility/numbers";
import { _ as z } from "../_plugin-vue_export-helper-dad06003.mjs";
const A = {
  items: () => []
}, B = {
  name: "RotatableList"
}, C = /* @__PURE__ */ g({
  ...B,
  props: w({
    modelValue: {},
    items: {},
    width: {},
    height: {}
  }, A),
  setup(p) {
    const _ = p, { modelValue: t, items: i, width: u, height: v } = b(_), m = L(t.value), f = o(() => {
      const e = x(t.value - 1, 0, i.value.length - 1), l = t.value === 0 ? 0 : -1;
      return i.value.slice(e, t.value + 2).map((s, a) => {
        const $ = 90 * (t.value + a + l);
        return {
          current: s,
          style: {
            transform: `rotateY(${$}deg) translateZ(${u.value / 2}px)`
          }
        };
      });
    }), h = o(() => ({
      width: `${u.value}px`,
      height: `${v.value}px`,
      transform: `rotateY(${-90 * t.value}deg)`
    })), y = o(
      () => Math.abs(t.value - m.value) !== 1
    );
    return R(t, (e, l) => {
      m.value = l;
    }), (e, l) => (r(), n("div", {
      class: c([e.$style.list, !y.value && e.$style.list_animated]),
      style: d(h.value)
    }, [
      (r(!0), n(k, null, M(f.value, (s, a) => (r(), n("div", {
        key: s.style.transform,
        class: c(e.$style.item),
        style: d(s.style)
      }, [
        S(e.$slots, "default", {
          item: s.current,
          isActive: V(t) === 0 ? a === 0 : a === 1
        })
      ], 6))), 128))
    ], 6));
  }
}), D = "_list_1fbwm_1", I = "_list_animated_1fbwm_5", Y = "_item_1fbwm_9", E = {
  list: D,
  list_animated: I,
  item: Y
}, F = {
  $style: E
}, G = /* @__PURE__ */ z(C, [["__cssModules", F]]);
export {
  G as default
};
