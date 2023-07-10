import { SmedMonth as o } from "@smartmed/utility/date";
function u(e, t, r) {
  return e || f(t, r);
}
function f(e, t) {
  const r = o.currentLocal();
  return !e && !t ? r : e ? t ? r.monthSameOrAfter(e) && r.monthSameOrBefore(t) ? r : r.monthSameOrAfter(e) && r.monthSameOrAfter(t) ? t : r.monthSameOrBefore(e) && r.monthSameOrBefore(t) ? e : r : e ? r.monthSameOrAfter(e) ? r : e : r : t ? r.monthSameOrBefore(t) ? r : t : r;
}
export {
  f as a,
  u as g
};
