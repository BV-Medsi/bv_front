import { Comment as o, computed as r, ref as f, getCurrentScope as u, onBeforeUnmount as c } from "vue";
function m(n) {
  const t = n && n();
  return !t || t.length === 0 ? !1 : t.findIndex((e) => e.type !== o) !== -1;
}
function p(n) {
  return typeof n == "function" ? r(n) : f(n);
}
function s(n) {
  u() && c(n);
}
export {
  m as h,
  p as r,
  s as t
};
