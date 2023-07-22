import { ACTIVE_ELEMENT_TOKEN as I, ALERTS_OPTIONS_TOKEN as R, MEDIA_WINDOW_WIDTH_TOKEN as _, MEDIA_BREAKPOINTS as b } from "@smartmed/ui/tokens";
import { unref as M, ref as g, readonly as W, defineAsyncComponent as y } from "vue";
function E() {
}
function F(e) {
  return typeof e == "function" ? e() : M(e);
}
function z(e, t) {
  function n(...s) {
    return new Promise((o, u) => {
      Promise.resolve(
        e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })
      ).then(o).catch(u);
    });
  }
  return n;
}
function C(e, t = !0, n = !0, s = !1) {
  let o = 0, u, c = !0, m = E, f;
  const T = () => {
    u && (clearTimeout(u), u = void 0, m(), m = E);
  };
  return (D) => {
    const a = F(e), L = Date.now() - o, v = () => f = D();
    return T(), a <= 0 ? (o = Date.now(), v()) : (L > a && (n || !c) ? (o = Date.now(), v()) : t && (f = new Promise((h, P) => {
      m = s ? P : h, u = setTimeout(() => {
        o = Date.now(), c = !0, h(v()), T();
      }, Math.max(0, a - L));
    })), !n && !u && (u = setTimeout(() => c = !0, a)), c = !1, f);
  };
}
function K(e, t = 200, n = !1, s = !0, o = !1) {
  return z(
    C(t, n, s, o),
    e
  );
}
function p(e) {
  return e.composedPath()[0];
}
function A(e) {
  return "getRootNode" in e && e.isConnected ? e.getRootNode() : e.ownerDocument;
}
function N(e) {
  return A(e).activeElement !== e && !e.matches(":disabled");
}
const i = g(null);
let r = null;
const l = () => {
  r == null || r.removeEventListener("focusin", O), r == null || r.removeEventListener("focusout", d);
}, d = (e) => {
  l();
  const t = p(e);
  N(t) && (i.value = e.relatedTarget);
}, V = (e) => {
  const t = e.target;
  i.value = t;
}, k = (e) => {
  const { relatedTarget: t, target: n } = e;
  t && N(n) && (i.value = t);
}, x = (e) => {
  e.addEventListener("focusin", V), e.addEventListener("focusout", k), r = e;
}, O = (e) => {
  l();
  const t = p(e), n = A(t);
  n === document ? i.value = t : (i.value = t, x(n));
}, $ = () => {
  l();
  const e = document.activeElement;
  e != null && e.matches("iframe") || (i.value = e);
}, B = (e) => {
  const t = () => {
    i.value = e, window.removeEventListener("focusout", t);
  };
  window.addEventListener("focusout", t), setTimeout(() => {
    window.removeEventListener("focusout", t);
  }, 0);
}, S = (e) => {
  l(), window.removeEventListener("focusout", d);
  const t = p(e);
  !document.activeElement || document.activeElement === document.body ? i.value = t : B(t);
}, j = () => {
  window.addEventListener("focusout", d);
}, H = (e) => {
  document.body.onclick = E, window.addEventListener("focusout", d), window.addEventListener("focusin", O), window.addEventListener("blur", $), window.addEventListener("mousedown", S), window.addEventListener("mouseup", j), e.provide(I, W(i));
}, q = {
  install: H
}, w = {
  component: y(() => import("@smartmed/ui/Alert")),
  position: "bottom",
  transitionName: "smed-list-transition"
}, G = (e, t) => {
  const { component: n = w.component, transitionName: s = w.transitionName, position: o = w.position } = t || {};
  e.provide(R, {
    component: n,
    transitionName: s,
    position: o
  });
}, J = {
  install: G
}, Q = {
  mobile: 768,
  landscape: 1024
}, U = (e, t = Q) => {
  const n = g(window.innerWidth), o = K(() => {
    n.value = window.innerWidth;
  }, 100);
  window.addEventListener("resize", o), e.provide(_, n), e.provide(b, t);
}, X = {
  install: U
}, Y = (e, t) => {
  e.use(q).use(J, t == null ? void 0 : t.alerts).use(X, t == null ? void 0 : t.media);
}, ne = {
  install: Y
};
export {
  q as ActiveElementPlugin,
  J as AlertsPlugin,
  X as MediaPlugin,
  ne as SmedInstallPlugin
};
