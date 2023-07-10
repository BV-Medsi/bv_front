import { ref as l, readonly as m } from "vue";
import { A as v } from "../ActiveElement.token-15bf5689.mjs";
function f() {
}
function i(e) {
  return e.composedPath()[0];
}
function r(e) {
  return "getRootNode" in e && e.isConnected ? e.getRootNode() : e.ownerDocument;
}
function d(e) {
  return r(e).activeElement !== e && !e.matches(":disabled");
}
const o = l(null);
let n = null;
const s = () => {
  n == null || n.removeEventListener("focusin", a), n == null || n.removeEventListener("focusout", c);
}, c = (e) => {
  s();
  const t = i(e);
  d(t) && (o.value = e.relatedTarget);
}, w = (e) => {
  const t = e.target;
  o.value = t;
}, E = (e) => {
  const { relatedTarget: t, target: u } = e;
  t && d(u) && (o.value = t);
}, L = (e) => {
  e.addEventListener("focusin", w), e.addEventListener("focusout", E), n = e;
}, a = (e) => {
  s();
  const t = i(e), u = r(t);
  u === document ? o.value = t : (o.value = t, L(u));
}, g = () => {
  s();
  const e = document.activeElement;
  e != null && e.matches("iframe") || (o.value = e);
}, T = (e) => {
  const t = () => {
    o.value = e, window.removeEventListener("focusout", t);
  };
  window.addEventListener("focusout", t), setTimeout(() => {
    window.removeEventListener("focusout", t);
  }, 0);
}, p = (e) => {
  s(), window.removeEventListener("focusout", c);
  const t = i(e);
  !document.activeElement || document.activeElement === document.body ? o.value = t : T(t);
}, A = () => {
  window.addEventListener("focusout", c);
}, b = (e) => {
  document.body.onclick = f, window.addEventListener("focusout", c), window.addEventListener("focusin", a), window.addEventListener("blur", g), window.addEventListener("mousedown", p), window.addEventListener("mouseup", A), e.provide(v, m(o));
}, h = {
  install: b
};
export {
  h as ActiveElementPlugin
};
