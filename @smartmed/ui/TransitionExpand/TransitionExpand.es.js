import "./TransitionExpand.css";
import { defineComponent as m, mergeDefaults as v, toRefs as _, ref as r, computed as h, onMounted as x, watch as y, openBlock as g, createElementBlock as T, normalizeClass as $, unref as C, normalizeStyle as k, createVNode as q, Transition as z, withCtx as A, renderSlot as B, createCommentVNode as D } from "vue";
import { _ as E } from "../_plugin-vue_export-helper-dad06003.mjs";
const F = {
  opened: !1,
  duration: 200
}, H = {
  name: "TransitionExpand"
}, M = /* @__PURE__ */ m({
  ...H,
  props: v({
    opened: { type: Boolean },
    duration: {}
  }, F),
  setup(i) {
    const d = i, { opened: s, duration: p } = _(d), l = r(s.value), t = r(null), n = r(0), u = r(!1), c = h(() => {
      const e = n.value, a = p.value;
      return {
        transitionDuration: `${u.value ? e > 1e3 ? 400 : a : 0}ms`,
        height: s.value ? `${e}px` : "0px"
      };
    });
    x(() => {
      t.value && l.value && (n.value = t.value.scrollHeight), setTimeout(() => {
        u.value = !0;
      });
    }), y(s, (e) => {
      e && (l.value = !0), requestAnimationFrame(() => {
        var a;
        e ? (n.value = 0, requestAnimationFrame(() => {
          var o;
          n.value = (o = t.value) == null ? void 0 : o.scrollHeight;
        })) : (n.value = (a = t.value) == null ? void 0 : a.scrollHeight, requestAnimationFrame(() => {
          n.value = 0;
        }));
      });
    });
    function f(e) {
      var o;
      e.target === t.value && e.propertyName === "height" && (s.value || ((o = t.value) == null ? void 0 : o.style.height) === "0px" && (l.value = !1));
    }
    return (e, a) => (g(), T("div", {
      ref_key: "expandRef",
      ref: t,
      class: $([e.$style.expand, C(s) && e.$style.expand_opened]),
      style: k(c.value),
      onTransitionend: f
    }, [
      q(z, { name: "fade" }, {
        default: A(() => [
          l.value ? B(e.$slots, "default", { key: 0 }) : D("", !0)
        ]),
        _: 3
      })
    ], 38));
  }
}), N = "_expand_1t43a_1", R = "_expand_opened_1t43a_7", w = {
  expand: N,
  expand_opened: R
}, S = {
  $style: w
}, j = /* @__PURE__ */ E(M, [["__cssModules", S]]);
export {
  j as default
};
