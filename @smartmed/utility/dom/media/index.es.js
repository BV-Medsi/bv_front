import { useThrottleFn as g } from "@smartmed/utility/functions";
import { ref as f, inject as d, computed as c } from "vue";
const l = "__internalSmedMediaScreenWidth", u = "__internalSmedMediaBreakpoints", h = {
  mobile: 768,
  landscape: 1024
}, m = (e, o = h) => {
  const t = f(window.innerWidth), i = g(() => {
    t.value = window.innerWidth;
  }, 100);
  window.addEventListener("resize", i), e.provide(l, t), e.provide(u, o);
}, I = {
  install: m
}, w = (e) => {
  const o = /* @__PURE__ */ new Map(), t = Object.keys(e);
  for (let n = 0; n < t.length + 1; n++)
    n === 0 ? o.set([-1 / 0, e[t[n]]], t[n]) : n !== t.length ? o.set([e[t[n - 1]], e[t[n]]], t[n]) : o.set([e[t[n - 1]], 1 / 0], "largerThenDefined");
  return o;
}, p = (e, o, t) => o < e && e <= t, v = (e, o) => {
  const t = e.keys(), n = Array.from(t);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (p(o, s[0], s[1]))
      return e.get(s) || null;
  }
  return null;
};
function R() {
  const e = d(l), o = d(u, {}), t = w(o), n = c(() => (e == null ? void 0 : e.value) || window.innerWidth);
  return { media: c(() => {
    const r = n.value;
    return v(t, r);
  }), computedSmallerThen: (r) => c(() => {
    const a = n.value;
    return o[r] === void 0 ? (console.warn("useMedia. Unknown breakpoint token"), !1) : a <= o[r];
  }), computedBiggerThen: (r) => c(() => {
    const a = n.value;
    return o[r] === void 0 ? (console.warn("useMedia. Unknown breakpoint token"), !0) : a > o[r];
  }) };
}
export {
  I as MediaPlugin,
  R as useMedia
};
