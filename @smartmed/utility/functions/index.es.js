import { unref as F } from "vue";
function m() {
}
function h(r) {
  return typeof r == "function" ? r() : F(r);
}
function x(r, o) {
  function t(...e) {
    return new Promise((i, n) => {
      Promise.resolve(r(() => o.apply(this, e), { fn: o, thisArg: this, args: e })).then(i).catch(n);
    });
  }
  return t;
}
function P(r, o = !0, t = !0, e = !1) {
  let i = 0, n, c = !0, u = m, a;
  const l = () => {
    n && (clearTimeout(n), n = void 0, u(), u = m);
  };
  return (p) => {
    const f = h(r), w = Date.now() - i, T = () => a = p();
    return l(), f <= 0 ? (i = Date.now(), T()) : (w > f && (t || !c) ? (i = Date.now(), T()) : o && (a = new Promise((d, D) => {
      u = e ? D : d, n = setTimeout(() => {
        i = Date.now(), c = !0, d(T()), l();
      }, Math.max(0, f - w));
    })), !t && !n && (n = setTimeout(() => c = !0, f)), c = !1, a);
  };
}
function y(r, o = 200, t = !1, e = !0, i = !1) {
  return x(P(o, t, e, i), r);
}
function j(r, o = {}) {
  let t, e, i = m;
  const n = (u) => {
    clearTimeout(u), i(), i = m;
  };
  return (u) => {
    const a = h(r), l = h(o.maxWait);
    return t && n(t), a <= 0 || l !== void 0 && l <= 0 ? (e && (n(e), e = null), Promise.resolve(u())) : new Promise((s, p) => {
      i = o.rejectOnCancel ? p : s, l && !e && (e = setTimeout(() => {
        t && n(t), e = null, s(u());
      }, l)), t = setTimeout(() => {
        e && n(e), e = null, s(u());
      }, a);
    });
  };
}
function R(r, o = 200, t = {}) {
  return x(j(o, t), r);
}
export {
  x as createFilterWrapper,
  j as debounceFilter,
  m as noop,
  P as throttleFilter,
  h as toValue,
  R as useDebounceFn,
  y as useThrottleFn
};
