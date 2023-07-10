import { maskitoTransform as a } from "@maskito/core";
import { g as r, i as u } from "../inputPhoneInternational.mask-67fcb918.mjs";
import { i as m } from "../internationalCountries-cea4338d.mjs";
function h(t) {
  return t.replace(/[A-Z]/g, (n, e) => (e !== 0 ? "-" : "") + n.toLowerCase());
}
function d(t) {
  return a(r(t), u);
}
let c = 0;
function p() {
  return `smed-element_${c++}_${Date.now()}`;
}
function C(t) {
  const n = r(t), e = `+${n}`, i = n.length, o = m.find(({ prefix: s }) => e.startsWith(s));
  return !!o && o.digitsCount === i;
}
export {
  h as dasherize,
  d as formatPhone,
  r as getPhoneNumber,
  p as getUniqElementId,
  C as isCorrectPhoneNumber
};
