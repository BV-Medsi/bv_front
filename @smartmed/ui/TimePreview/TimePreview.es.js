import { defineComponent as p, toRefs as d, computed as _, openBlock as D, createElementBlock as v, toDisplayString as k } from "vue";
import { CHAR_RANGE_SEPARATOR as R } from "@smartmed/utility/consts";
import { SmedMonth as S, getFormattedDateByMask as o, SmedTime as g, SmedDayRange as y } from "@smartmed/utility/date";
const A = {
  name: "TimePreview"
}, B = /* @__PURE__ */ p({
  ...A,
  props: {
    date: { default: null },
    mask: { default: null }
  },
  setup(r) {
    const c = r, { mask: m, date: i } = d(c), u = _(() => {
      const e = m.value, t = i.value;
      if (t instanceof S)
        return o(t.toLocalNativeDate(), e);
      if (t instanceof g) {
        const { hours: n, minutes: a, seconds: l, ms: f } = t, s = /* @__PURE__ */ new Date();
        return s.setHours(n, a, l, f), o(s, e);
      }
      if (t instanceof y) {
        const { from: n, to: a } = t;
        return `${o(
          n.toLocalNativeDate(),
          e
        )}${R}${o(
          a.toLocalNativeDate(),
          e
        )}`;
      }
      return o(
        typeof t == "string" ? new Date(t) : t,
        e
      );
    });
    return (e, t) => (D(), v("span", null, k(u.value), 1));
  }
});
export {
  B as default
};
