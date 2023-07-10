import "./CalendarRange.css";
import { defineComponent as T, mergeDefaults as Y, toRefs as N, ref as v, computed as a, onMounted as q, watch as G, openBlock as f, createElementBlock as J, normalizeClass as M, createVNode as K, unref as r, createBlock as b } from "vue";
import x from "@smartmed/ui/Calendar";
import Q from "@smartmed/ui/DataList";
import { SMED_FIRST_DAY as W, SMED_LAST_DAY as X, SmedMonth as Z, SmedDayRange as D } from "@smartmed/utility/date";
import { _ as ee } from "../_plugin-vue_export-helper-dad06003.mjs";
const te = {
  min: () => W,
  max: () => X,
  defaultViewedMonth: () => Z.currentLocal(),
  periods: () => []
}, ne = /* @__PURE__ */ T({
  name: "CalendarRange",
  __name: "CalendarRange",
  props: Y({
    modelValue: {},
    min: {},
    max: {},
    defaultViewedMonth: {},
    disabledDatesHandler: { type: Function },
    periods: {}
  }, te),
  emits: ["update:modelValue"],
  setup(C, { emit: h }) {
    const F = C, {
      modelValue: _,
      max: d,
      min: s,
      defaultViewedMonth: m,
      periods: p
    } = N(F), o = v(_.value), i = v(null), y = a(() => m.value.append({ month: 1 })), u = v(m.value), l = v(y.value), c = a(() => p.value.length > 0), V = a(() => {
      const e = o.value;
      if (e === null)
        return null;
      const t = s.value, n = d.value;
      return p.value.find(({ range: g }) => e.from.daySame(g.from.dayLimit(t, n)) && e.to.daySame(g.to.dayLimit(t, n))) || null;
    }), B = a(() => [].concat(p.value).concat("Другая дата")), k = a(() => {
      if (c.value) {
        const e = o.value;
        return e ? e.to : m.value;
      }
      return u.value;
    }), L = a(() => c.value ? void 0 : U.value.append({ month: -1 })), P = a(() => R.value.append({ month: 1 })), R = a(() => {
      const e = u.value, t = l.value;
      return e.monthSameOrBefore(t) ? e : t;
    }), U = a(() => {
      const e = d.value, t = l.value;
      return t.monthBefore(e) ? t : e;
    }), j = (e, t) => {
      const n = V.value;
      return typeof t == "string" && n === null ? !0 : n === t;
    }, w = (e) => {
      const t = o.value;
      if (t === null || !t.isSingleDay) {
        o.value = new D(e, e);
        return;
      }
      const n = D.sort(t.from, e);
      o.value = n, h("update:modelValue", n);
    }, A = (e) => {
      u.value = e, l.value = e.append({ month: 1 });
    }, I = (e) => {
      u.value = e.append({ month: -1 }), l.value = e;
    }, $ = (e) => {
      if (typeof e != "string") {
        const t = e.range, n = s.value, S = d.value;
        h("update:modelValue", t.dayLimit(n, S));
        return;
      }
      V.value !== null && h("update:modelValue", null);
    }, O = (e) => {
      const t = e === null ? m.value : e.from;
      u.value = t, l.value = t.append({ month: 1 });
    }, E = (e) => {
      const t = d.value;
      if (e.monthSameOrAfter(t))
        return t;
      const n = s.value;
      return e.monthBefore(n) ? n.append({ month: 1 }) : e;
    }, H = (e, t) => {
      if (e.monthSameOrAfter(t))
        return t.append({ month: -1 });
      const n = s.value;
      return e.monthSameOrBefore(n) ? n : e;
    }, z = () => {
      if (!o.value) {
        const e = E(y.value);
        l.value = e, u.value = H(
          m.value,
          e
        );
      }
    };
    return q(() => {
      z();
    }), G(
      _,
      (e) => {
        (!o.value && e || o.value && !(e != null && e.daySame(o.value))) && (o.value = e, O(e)), o.value = e;
      },
      { immediate: !0 }
    ), (e, t) => (f(), J("div", {
      class: M(e.$style.root)
    }, [
      K(r(x), {
        "hovered-item": i.value,
        "onUpdate:hoveredItem": t[0] || (t[0] = (n) => i.value = n),
        "show-adjacent-days": c.value,
        min: r(s),
        max: r(d),
        month: k.value,
        "max-viewed-month": L.value,
        "disabled-dates-handler": e.disabledDatesHandler,
        value: o.value,
        onDayClick: w,
        "onUpdate:month": A
      }, null, 8, ["hovered-item", "show-adjacent-days", "min", "max", "month", "max-viewed-month", "disabled-dates-handler", "value"]),
      c.value ? (f(), b(r(Q), {
        key: 1,
        size: "lg",
        class: M([e.$style.border, e.$style.list]),
        "model-value": o.value,
        items: B.value,
        matcher: j,
        "onUpdate:modelValue": $
      }, null, 8, ["class", "model-value", "items"])) : (f(), b(r(x), {
        key: 0,
        "hovered-item": i.value,
        "onUpdate:hoveredItem": t[1] || (t[1] = (n) => i.value = n),
        class: M(e.$style.border),
        min: r(s),
        max: r(d),
        month: l.value,
        "min-viewed-month": P.value,
        "disabled-dates-handler": e.disabledDatesHandler,
        value: o.value,
        onDayClick: w,
        "onUpdate:month": I
      }, null, 8, ["hovered-item", "class", "min", "max", "month", "min-viewed-month", "disabled-dates-handler", "value"]))
    ], 2));
  }
}), oe = "_root_110mj_1", ae = "_border_110mj_5", le = "_list_110mj_9", re = {
  root: oe,
  border: ae,
  list: le
}, de = {
  $style: re
}, he = /* @__PURE__ */ ee(ne, [["__cssModules", de]]);
export {
  he as default
};
