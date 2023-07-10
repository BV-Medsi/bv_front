import { c as f, a as h } from "./chars-187a3da2.mjs";
function g(t, o, i) {
  return Math.min(i, Math.max(o, t));
}
function l(t, o = f, i = h) {
  const r = `${Math.floor(Math.abs(t))}`, c = `${t}`.split(".")[1] || "", e = t < 0 ? "-" : "", s = r.length % 3;
  let n = e + r.charAt(0);
  for (let a = 1; a < r.length; a++)
    a % 3 === s && r.length > 3 && (n += i), n += r.charAt(a);
  return c ? n + o + c : n;
}
export {
  g as c,
  l as f
};
