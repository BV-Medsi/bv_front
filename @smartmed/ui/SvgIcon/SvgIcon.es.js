import "./SvgIcon.css";
import { reactive as p, inject as v, computed as m, watch as x, defineComponent as y, mergeDefaults as I, toRefs as S, openBlock as C, createElementBlock as H, unref as g, normalizeClass as O, normalizeStyle as P } from "vue";
import { SVG_ICON_SOURCE_PREDICATE as w, svgIconSourceDefaultPredicate as A } from "@smartmed/ui/tokens";
import { resolveRef as b, tryOnBeforeUnmount as R } from "@smartmed/utility/vue";
import { _ as z } from "../_plugin-vue_export-helper-dad06003.mjs";
const E = {
  size: "lg"
}, u = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 52
}, T = new Headers({
  Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*"
});
class h {
}
const a = p({});
function M(t, s, r) {
  if (t in a) {
    const n = a[t];
    return typeof n == "string" ? Promise.resolve(n) : n || Promise.resolve("");
  }
  if (!fetch)
    return Promise.resolve("");
  const o = fetch(r(t), {
    method: "GET",
    headers: T,
    signal: s.signal
  }).then((n) => n.ok ? n.text() : Promise.reject(null)).then((n) => (a[t] = k(n), n)).catch(() => (delete a[t], s.signal.aborted ? new h() : ""));
  return a[t] = o, o;
}
const $ = 'width="', D = 'height="', d = "<svg";
function k(t) {
  const s = t.slice(Math.max(0, t.indexOf(d))), r = s.slice(0, Math.max(0, s.indexOf(">"))), o = r.indexOf($);
  return r.indexOf(D) === -1 || o === -1 ? t.replace(d, `${d} width="100%" height="100%"`) : t;
}
function q(t) {
  const s = b(t), r = v(
    w,
    A
  );
  let o = null, n = !0;
  const f = m(() => {
    const i = s.value, c = a[i];
    return typeof c == "string" ? c : null;
  }), l = () => {
    o && o.abort();
  }, e = (i) => {
    l(), o = new AbortController(), M(i, o, r).then(
      (c) => {
        if (o = null, c instanceof h && n)
          return e(i);
      }
    );
  };
  return R(() => {
    n = !1, l();
  }), x(s, e, { immediate: !0 }), f;
}
const B = ["innerHTML", "data-test"], G = {
  name: "SvgIcon"
}, j = /* @__PURE__ */ y({
  ...G,
  props: I({
    name: {},
    size: {},
    rotate: { type: Boolean }
  }, E),
  setup(t) {
    const s = t, { name: r, size: o } = S(s), n = q(r), f = m(() => {
      const e = o.value;
      return typeof e == "string" ? [
        u[e],
        u[e]
      ] : typeof e == "number" ? [e, e] : Array.isArray(e) && e.length === 2 ? [e[0], e[1]] : [u.lg, u.lg];
    }), l = m(() => {
      const [e, i] = f.value, c = `${e}px`, _ = `${i}px`;
      return {
        "--smed-svg-icon-width": c,
        "--smed-svg-icon-height": _
      };
    });
    return (e, i) => (C(), H("span", {
      innerHTML: g(n),
      "data-automation-id": "smed-svg-icon",
      class: O([e.$style.icon, e.rotate && e.$style.icon_rotate]),
      "data-test": g(r) || "",
      style: P(l.value)
    }, null, 14, B));
  }
}), L = "_icon_8g8a0_1", U = "_icon_rotate_8g8a0_12", W = {
  icon: L,
  icon_rotate: U
}, N = {
  $style: W
}, X = /* @__PURE__ */ z(j, [["__cssModules", N]]);
export {
  X as default
};
