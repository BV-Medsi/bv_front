import { Comment as o } from "vue";
function f(t) {
  const n = t && t();
  return !n || n.length === 0 ? !1 : n.findIndex((e) => e.type !== o) !== -1;
}
export {
  f as h
};
