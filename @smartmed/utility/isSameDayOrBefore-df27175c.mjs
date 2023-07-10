var b = Object.defineProperty;
var V = (r, e, t) => e in r ? b(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var l = (r, e, t) => (V(r, typeof e != "symbol" ? e + "" : e, t), t);
import { h as O } from "./chars-187a3da2.mjs";
import { CHAR_RANGE_SEPARATOR as x } from "@smartmed/utility/consts";
const E = 0, $ = 9999;
function F(r, e, t) {
  return Number.isNaN(r) || r <= e ? e : r >= t ? t : Math.round(r);
}
class f {
  constructor(e) {
    l(this, "year");
    this.year = e;
  }
  static isValidYear(e) {
    return Number.isInteger(e) && e >= E && e <= $;
  }
  static isLeapYear(e) {
    return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
  }
  static lengthBetween(e, t) {
    return t.year - e.year;
  }
  static normalizeYearPart(e) {
    return F(e, E, $);
  }
  get formattedYear() {
    return String(this.year).padStart(4, "0");
  }
  get isLeapYear() {
    return f.isLeapYear(this.year);
  }
  yearBefore({ year: e }) {
    return this.year < e;
  }
  yearSame({ year: e }) {
    return this.year === e;
  }
  yearSameOrBefore({ year: e }) {
    return this.year <= e;
  }
  yearSameOrAfter({ year: e }) {
    return this.year >= e;
  }
  yearAfter({ year: e }) {
    return this.year > e;
  }
  append({ year: e = 0 }) {
    return new f(this.year + e);
  }
  toString() {
    return this.formattedYear;
  }
  valueOf() {
    return this.year;
  }
  toJSON() {
    return this.formattedYear;
  }
  [Symbol.toPrimitive](e) {
    return Date.prototype[Symbol.toPrimitive].call(this, e);
  }
}
const C = 0, v = 11, S = 12;
var d;
(function(r) {
  r[r.January = 0] = "January", r[r.February = 1] = "February", r[r.March = 2] = "March", r[r.April = 3] = "April", r[r.May = 4] = "May", r[r.June = 5] = "June", r[r.July = 6] = "July", r[r.August = 7] = "August", r[r.September = 8] = "September", r[r.October = 9] = "October", r[r.November = 10] = "November", r[r.December = 11] = "December";
})(d || (d = {}));
class u extends f {
  constructor(t, s) {
    super(t);
    l(this, "month");
    this.month = s;
  }
  static isValidMonth(t, s) {
    return f.isValidYear(t) && u.isValidMonthPart(s);
  }
  static getMonthDaysCount(t, s) {
    switch (t) {
      case d.February:
        return s ? 29 : 28;
      case d.April:
      case d.June:
      case d.September:
      case d.November:
        return 30;
      default:
        return 31;
    }
  }
  static currentLocal() {
    const t = /* @__PURE__ */ new Date();
    return new u(t.getFullYear(), t.getMonth());
  }
  static currentUtc() {
    const t = /* @__PURE__ */ new Date();
    return new u(t.getUTCFullYear(), t.getUTCMonth());
  }
  static lengthBetween(t, s) {
    const n = t.month + t.year * 12;
    return s.month + s.year * 12 - n;
  }
  static normalizeMonthPart(t) {
    return F(t, C, v);
  }
  static isValidMonthPart(t) {
    return Number.isInteger(t) && t >= C && t <= v;
  }
  get formattedMonthPart() {
    return String(this.month + 1).padStart(2, "0");
  }
  get daysCount() {
    return u.getMonthDaysCount(this.month, this.isLeapYear);
  }
  monthBefore(t) {
    return this.yearBefore(t) || this.yearSame(t) && this.month < t.month;
  }
  monthSameOrBefore(t) {
    return this.yearBefore(t) || this.yearSame(t) && this.month <= t.month;
  }
  monthSame(t) {
    return this.yearSame(t) && this.month === t.month;
  }
  monthSameOrAfter(t) {
    return this.yearAfter(t) || this.yearSame(t) && this.month >= t.month;
  }
  monthAfter(t) {
    return this.yearAfter(t) || this.yearSame(t) && this.month > t.month;
  }
  append({ year: t = 0, month: s = 0 }) {
    const n = (this.year + t) * S + this.month + s;
    return new u(Math.floor(n / S), n % S);
  }
  toString() {
    return `${this.formattedMonthPart}.${this.formattedYear}`;
  }
  valueOf() {
    return this.toLocalNativeDate().valueOf();
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedMonthPart}`;
  }
  toLocalNativeDate() {
    return new Date(this.year, this.month);
  }
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month));
  }
}
const A = 1, Y = "дд.мм.гггг", P = 10;
var N;
(function(r) {
  r[r.Sunday = 0] = "Sunday", r[r.Monday = 1] = "Monday", r[r.Tuesday = 2] = "Tuesday", r[r.Wednesday = 3] = "Wednesday", r[r.Thursday = 4] = "Thursday", r[r.Friday = 5] = "Friday", r[r.Saturday = 6] = "Saturday";
})(N || (N = {}));
class c extends u {
  constructor(t, s, n) {
    super(t, s);
    l(this, "day");
    this.day = n;
  }
  static fromLocalNativeDate(t) {
    return new c(t.getFullYear(), t.getMonth(), t.getDate());
  }
  static fromUtcNativeDate(t) {
    return new c(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate());
  }
  static isValidDay(t, s, n) {
    return u.isValidMonth(t, s) && Number.isInteger(n) && n >= A && n <= u.getMonthDaysCount(s, f.isLeapYear(t));
  }
  static currentLocal() {
    const t = /* @__PURE__ */ new Date(), s = t.getFullYear(), n = t.getMonth(), a = t.getDate();
    return new c(s, n, a);
  }
  static currentUtc() {
    const t = /* @__PURE__ */ new Date(), s = t.getUTCFullYear(), n = t.getUTCMonth(), a = t.getUTCDate();
    return new c(s, n, a);
  }
  static normalizeOf(t, s, n) {
    const a = f.normalizeYearPart(t), i = u.normalizeMonthPart(s), o = c.normalizeDayPart(n, i, t);
    return new c(a, i, o);
  }
  static lengthBetween(t, s) {
    return Math.round(s.toLocalNativeDate().getTime() - t.toLocalNativeDate().getTime()) / (1e3 * 60 * 60 * 24);
  }
  static parseRawDateString(t, s) {
    return s === "DMY" ? {
      day: parseInt(t.slice(0, 2), 10),
      month: parseInt(t.slice(3, 5), 10) - 1,
      year: parseInt(t.slice(6, 10), 10)
    } : {
      day: parseInt(t.slice(8, 10), 10),
      month: parseInt(t.slice(5, 7), 10) - 1,
      year: parseInt(t.slice(0, 4), 10)
    };
  }
  static normalizeParse(t, s = "DMY") {
    const { day: n, month: a, year: i } = c.parseRawDateString(t, s);
    return c.normalizeOf(i, a, n);
  }
  static jsonParse(t) {
    const { day: s, month: n, year: a } = this.parseRawDateString(t, "YMD");
    if (!f.isValidYear(a))
      throw new Error(`Invalid year: ${a}`);
    if (!u.isValidMonth(a, n))
      throw new Error(`Invalid month: ${n}`);
    if (!Number.isInteger(s) || !(s >= A && s <= u.getMonthDaysCount(n, f.isLeapYear(a))))
      throw new Error(`Invalid day: ${s}`);
    return new c(a, n, s);
  }
  static normalizeDayPart(t, s, n) {
    const a = u.getMonthDaysCount(s, f.isLeapYear(n));
    return F(t, A, a);
  }
  get formattedDayPart() {
    return String(this.day).padStart(2, "0");
  }
  get isWeekend() {
    const t = this.dayOfWeek(!1);
    return t === N.Sunday || t === N.Saturday;
  }
  dayOfWeek(t = !0) {
    const s = t ? this.toLocalNativeDate().getDay() - 1 : this.toLocalNativeDate().getDay();
    return s < 0 ? 6 : s;
  }
  dayBefore(t) {
    return this.monthBefore(t) || this.monthSame(t) && this.day < t.day;
  }
  daySameOrBefore(t) {
    return this.monthBefore(t) || this.monthSame(t) && this.day <= t.day;
  }
  daySame(t) {
    return this.monthSame(t) && this.day === t.day;
  }
  daySameOrAfter(t) {
    return this.monthAfter(t) || this.monthSame(t) && this.day >= t.day;
  }
  dayAfter(t) {
    return this.monthAfter(t) || this.monthSame(t) && this.day > t.day;
  }
  dayLimit(t, s) {
    return t !== null && this.dayBefore(t) ? t : s !== null && this.dayAfter(s) ? s : this;
  }
  append({ year: t = 0, month: s = 0, day: n = 0 }) {
    const a = (this.year + t) * S + this.month + s;
    let i = Math.floor(a / S), o = a % S, h = Math.min(this.day, u.getMonthDaysCount(o, f.isLeapYear(i))) + n;
    for (; h > u.getMonthDaysCount(o, f.isLeapYear(i)); )
      h -= u.getMonthDaysCount(o, f.isLeapYear(i)), o === d.December ? (i++, o = d.January) : o++;
    for (; h < A; )
      o === d.January ? (i--, o = d.December) : o--, h += u.getMonthDaysCount(o, u.isLeapYear(i));
    return new c(i, o, h);
  }
  getFormattedDay(t, s) {
    const n = this.formattedDayPart, a = this.formattedMonthPart, i = this.formattedYear;
    switch (t) {
      case "YMD":
        return `${i}${s}${a}${s}${n}`;
      default:
        return `${n}${s}${a}${s}${i}`;
    }
  }
  toString(t = "DMY", s = ".") {
    return this.getFormattedDay(t, s);
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedDayPart}`;
  }
  toLocalNativeDate() {
    return new Date(this.year, this.month, this.day);
  }
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month, this.day));
  }
}
class T {
  constructor(e, t) {
    l(this, "from");
    l(this, "to");
    this.from = e, this.to = t;
  }
  static sort(e, t) {
    return e.monthSameOrBefore(t) ? new T(e, t) : new T(t, e);
  }
  get isSingleMonth() {
    return this.from.monthSame(this.to);
  }
  monthSame(e) {
    return this.from.monthSame(e.from) && this.to.monthSame(e.to);
  }
  toString() {
    return `${this.from}${x}${this.to}`;
  }
}
const ht = `${Y}${O}${Y}`, G = 2 * P + O.length;
class m extends T {
  constructor(t, s) {
    super(t, s);
    l(this, "from");
    l(this, "to");
    this.from = t, this.to = s;
  }
  static sort(t, s) {
    return t.daySameOrBefore(s) ? new m(t, s) : new m(s, t);
  }
  static normalizeParse(t, s = "DMY") {
    const n = c.normalizeParse(t.slice(0, P), s);
    if (t.length < G)
      return new m(n, n);
    const a = c.normalizeParse(t.slice(P + O.length), s);
    return m.sort(n, a);
  }
  get isSingleDay() {
    return this.from.daySame(this.to);
  }
  daySame(t) {
    return this.from.daySame(t.from) && this.to.daySame(t.to);
  }
  dayLimit(t, s) {
    return new m(this.from.dayLimit(t, s), this.to.dayLimit(t, s));
  }
  getFormattedDayRange(t, s) {
    const n = this.from.getFormattedDay(t, s), a = this.to.getFormattedDay(t, s);
    return `${n}${O}${a}`;
  }
  toString(t = "DMY", s = ".") {
    return this.getFormattedDayRange(t, s);
  }
}
class M {
  constructor(e, t) {
    l(this, "range");
    l(this, "name");
    this.range = e, this.name = t;
  }
  toString() {
    return this.name;
  }
}
const X = new c(E, C, A), lt = new c($, v, 31);
function yt() {
  const r = c.currentLocal(), e = r.append({ day: -1 }), t = r.append({ day: -r.dayOfWeek() }), s = t.append({ day: 6 }), n = r.append({ day: 1 - r.day }), a = n.append({ month: 1, day: -1 }), i = n.append({ month: -1 });
  return [
    new M(new m(X, r), "За все время"),
    new M(new m(r, r), "Сегодня"),
    new M(new m(e, e), "Вчера"),
    new M(new m(t, s), "Текущая неделя"),
    new M(new m(n, a), "Текущий месяц"),
    new M(new m(i, n.append({ day: -1 })), "Прошлый месяц")
  ];
}
function ft(r, e, t) {
  return t && t < r ? t : e && e > r ? e : r;
}
const j = 1e3, q = 60, K = 60, W = 24, w = j * q, p = w * K, U = p * W;
class D {
  constructor(e, t, s = 0, n = 0) {
    l(this, "hours");
    l(this, "minutes");
    l(this, "seconds");
    l(this, "ms");
    this.hours = e, this.minutes = t, this.seconds = s, this.ms = n;
  }
  static currentUtc() {
    return D.fromAbsoluteMilliseconds(Date.now() % U);
  }
  static currentLocal() {
    const e = /* @__PURE__ */ new Date(), t = (Date.now() - e.getTimezoneOffset() * w) % U;
    return D.fromAbsoluteMilliseconds(t);
  }
  static fromAbsoluteMilliseconds(e) {
    const t = Math.floor(e / p), s = Math.floor(e % p / w), n = Math.floor(e % p % w / 1e3) || 0, a = Math.floor(e % p % w % 1e3) || 0;
    return new D(t, s, n, a);
  }
  static fromString(e) {
    const t = Number(e.slice(0, 2)), s = Number(e.slice(3, 5)), n = Number(e.slice(6, 8)) || 0, a = Number(e.slice(9, 12)) || 0;
    return new D(t, s, n, a);
  }
  static fromLocalNativeDate(e) {
    return new D(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
  }
  shift({ hours: e = 0, minutes: t = 0, seconds: s = 0, ms: n = 0 }) {
    const a = (1e3 + this.ms + n % 1e3) % 1e3, o = (n < 0 ? Math.ceil(n / 1e3) : Math.floor(n / 1e3)) + s, h = (60 + this.seconds + o % 60) % 60, y = (o < 0 ? Math.ceil(o / 60) : Math.floor(o / 60)) + t, z = (60 + this.minutes + y % 60) % 60, _ = (y < 0 ? Math.ceil(y / 60) : Math.floor(y / 60)) + e, J = (24 + this.hours + _ % 24) % 24;
    return new D(J, z, h, a);
  }
  toString(e) {
    const t = e === "HH:MM:SS.MSS" || !e && this.ms > 0, s = t || e === "HH:MM:SS" || !e && this.seconds > 0;
    return `${this.formatTime(this.hours)}:${this.formatTime(this.minutes)}${s ? `:${this.formatTime(this.seconds)}` : ""}${t ? `.${this.formatTime(this.ms, 3)}` : ""}`;
  }
  valueOf() {
    return this.toAbsoluteMilliseconds();
  }
  [Symbol.toPrimitive](e) {
    return Date.prototype[Symbol.toPrimitive].call(this, e);
  }
  toAbsoluteMilliseconds() {
    return this.hours * p + this.minutes * w + this.seconds * 1e3 + this.ms;
  }
  formatTime(e, t = 2) {
    return String(e).padStart(t, "0");
  }
}
const R = ", ", Q = {
  "HH:MM": "чч:мм",
  "HH:MM:SS": "чч:мм:сс",
  "HH:MM:SS.MSS": "чч:мм:cc:мсс"
}, mt = (r) => `${Y}${R}${Q[r]}`;
class I {
  constructor(e, t) {
    l(this, "day");
    l(this, "time");
    this.day = e, this.time = t;
  }
  static fromString(e, t = "DMY") {
    if (!e || e.length < Y.length)
      return new I(null, null);
    const [s, n = ""] = e.split(R);
    return new I(c.normalizeParse(s, t), n ? D.fromString(n) : null);
  }
  static jsonParse(e) {
    const t = new Date(e);
    return new I(c.fromLocalNativeDate(t), D.fromLocalNativeDate(t));
  }
  toString(e = "DMY", t = ".", s = "HH:MM") {
    if (!this.day)
      return "";
    const n = this.time ? `${R}${this.time.toString(s)}` : "";
    return `${this.day.toString(e, t)}${n}`;
  }
  toLocalNativeDate() {
    if (!this.day)
      return /* @__PURE__ */ new Date();
    const e = this.day.toLocalNativeDate();
    if (this.time) {
      const { hours: t, minutes: s, seconds: n, ms: a } = this.time;
      e.setHours(t), e.setMinutes(s), e.setSeconds(n), e.setMilliseconds(a);
    }
    return e;
  }
  toUtcNativeDate() {
    if (!this.day)
      return /* @__PURE__ */ new Date();
    const e = this.day.toUtcNativeDate();
    if (this.time) {
      const { hours: t, minutes: s, seconds: n, ms: a } = this.time;
      e.setUTCHours(t), e.setUTCMinutes(s), e.setUTCSeconds(n), e.setUTCMilliseconds(a);
    }
    return e;
  }
  toJSON() {
    if (!this.day)
      return "";
    const e = this.day.toLocalNativeDate();
    if (this.time) {
      const { hours: t, minutes: s, seconds: n, ms: a } = this.time;
      e.setHours(t), e.setMinutes(s), e.setSeconds(n), e.setMilliseconds(a);
    }
    return e.toJSON();
  }
}
const L = 1, H = 7;
function Z(r) {
  const e = new Date(r.year, r.month, 1).getDay();
  return e >= L ? e - L : H - (L - e);
}
function k({ month: r, rowIndex: e, colIndex: t }) {
  let s = e * H + t - Z(r) + 1;
  return s > r.daysCount && (s -= r.daysCount, r = r.append({ month: 1 })), s <= 0 && (r = r.append({ month: -1 }), s = r.daysCount + s), new c(r.year, r.month, s);
}
const tt = 6;
function dt(r, e = !1) {
  const t = [];
  for (let s = 0; s < tt; s++) {
    const n = [];
    for (let a = 0; a < H; a++) {
      const i = k({ month: r, rowIndex: s, colIndex: a }), o = (g, y = r) => g.year < y.year || g.month < y.month, h = (g, y = r) => g.year > y.year || g.month > y.month;
      if (!(o(i) && !e)) {
        if (h(i) && !e)
          break;
        n.push(i);
      }
    }
    t.push(n);
  }
  return t;
}
function B(r) {
  const e = new Date(r);
  return e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), e;
}
const et = (r, e = {}) => Intl.DateTimeFormat("ru", e).format(new Date(r));
function st(r, e, t) {
  return e.reduce((s, n) => {
    const [a, i] = n.replace(/\[|\]/g, "").split(":");
    let o = et(r, {
      [a]: i
    });
    if (i === "numeric" && a !== "day" && (o = o.length === 1 ? `0${o}` : o), a === "month" && i === "long" && t) {
      const h = o[o.length - 1];
      o = h === "ь" || h === "й" ? o.slice(0, o.length - 1) + "я" : o + "а";
    }
    return s[n] = o, s;
  }, {});
}
function gt(r, e) {
  if (!r)
    return null;
  if (!e)
    return r ? r.toString() : null;
  const t = e.match(/\[\w+:(\w+|2-digit)\]/g);
  if (!t)
    return null;
  const s = e.indexOf("day") > -1, n = st(r, t, s);
  let a = e;
  return Object.keys(n).forEach((i) => {
    a = a.replace(i, n[i]);
  }), a.replace(/\.$/, "");
}
const rt = 1, nt = 100;
function Dt(r, e, t, s = rt, n = nt) {
  const a = [], i = Math.max(r - n, e), o = Math.min(r + n, t);
  let h = i;
  for (; h <= o; ) {
    const g = [];
    for (let y = 0; y < 3 && !(h > o); y++)
      g.push(h), h += s;
    a.push(g);
  }
  return a;
}
function Mt(r, e) {
  const t = r.getFullYear() < e.getFullYear(), s = r.getFullYear() === e.getFullYear(), n = r.getMonth() <= e.getMonth();
  return t || s && n;
}
function at(r, e) {
  return r.getFullYear() === e.getFullYear() && r.getMonth() === e.getMonth();
}
function wt(r, e) {
  return at(r, e) && r.getDate() === e.getDate();
}
function pt(r, e) {
  return B(r).valueOf() >= B(e).valueOf();
}
export {
  S as A,
  d as B,
  u as C,
  Y as D,
  T as E,
  L as F,
  j as G,
  q as H,
  K as I,
  W as J,
  w as K,
  p as L,
  A as M,
  U as N,
  D as O,
  E as P,
  $ as Q,
  F as R,
  N as S,
  f as T,
  P as a,
  c as b,
  yt as c,
  ft as d,
  ht as e,
  G as f,
  m as g,
  M as h,
  X as i,
  lt as j,
  R as k,
  mt as l,
  I as m,
  dt as n,
  B as o,
  gt as p,
  H as q,
  Z as r,
  k as s,
  Dt as t,
  Mt as u,
  wt as v,
  pt as w,
  at as x,
  C as y,
  v as z
};
