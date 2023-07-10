import "./Calendar.css";
import { defineComponent as ie, mergeDefaults as ue, toRefs as ce, useCssModule as me, ref as D, computed as u, watch as I, openBlock as l, createElementBlock as s, normalizeClass as o, Fragment as c, createElementVNode as i, createVNode as O, unref as $, toDisplayString as f, renderList as h, createBlock as _e, withCtx as ye } from "vue";
import L from "@smartmed/ui/BaseButton";
import ve from "@smartmed/ui/Scrollbar";
import { SMED_FIRST_DAY as N, SMED_LAST_DAY as F, SmedDay as C, getDaysRows as fe, getYearsBetween as he, dateClamp as b, SmedMonth as Ce, SmedDayRange as Se } from "@smartmed/utility/date";
import { g as P } from "../getDefaultSelectedMonth-c094e6a7.mjs";
import { _ as pe } from "../_plugin-vue_export-helper-dad06003.mjs";
const we = {
  value: null,
  showAdjacentDays: !1,
  hoveredItem: null,
  minViewedMonth: () => N,
  maxViewedMonth: () => F,
  min: () => N,
  max: () => F,
  disabledDatesHandler: () => !1
}, ke = {
  "data-automation-id": "smed-calendar__month-name",
  class: "smed-space_right-1"
}, $e = ["onMouseenter", "onClick"], Me = ["id", "onClick"], ge = /* @__PURE__ */ ie({
  name: "Calendar",
  __name: "Calendar",
  props: ue({
    value: {},
    showAdjacentDays: { type: Boolean },
    min: {},
    max: {},
    month: {},
    maxViewedMonth: {},
    minViewedMonth: {},
    hoveredItem: {},
    disabledDatesHandler: { type: Function }
  }, we),
  emits: ["dayClick", "update:month", "update:hoveredItem"],
  setup(T, { emit: m }) {
    const B = T, {
      value: S,
      showAdjacentDays: R,
      min: _,
      max: y,
      month: v,
      maxViewedMonth: q,
      minViewedMonth: G,
      hoveredItem: A
    } = ce(B), M = me(), p = D(!1), n = D(
      P((v == null ? void 0 : v.value) || null, _.value, y.value)
    ), E = D(null), J = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], K = {
      0: "январь",
      1: "февраль",
      2: "март",
      3: "апрель",
      4: "май",
      5: "июнь",
      6: "июль",
      7: "август",
      8: "сентябрь",
      9: "октябрь",
      10: "ноябрь",
      11: "декабрь"
    }, Y = C.currentLocal(), Q = u(() => fe(n.value, R.value)), U = u(() => {
      const e = n.value.year, t = _.value.year, a = y.value.year;
      return he(e, t, a);
    }), W = u(() => {
      const e = n.value.month;
      return K[e];
    }), w = u(() => {
      const e = G.value, t = _.value;
      return e.monthSameOrAfter(t) ? e : t;
    }), k = u(() => {
      const e = q.value, t = y.value;
      return e.monthSameOrBefore(t) ? e : t;
    }), V = u(() => {
      const e = n.value, t = w.value;
      return e.monthAfter(t);
    }), H = u(() => {
      const e = k.value;
      return n.value.monthBefore(e);
    }), X = () => {
      if (!V.value)
        return;
      const e = n.value;
      n.value = b(
        e.append({ month: -1 }),
        w.value,
        k.value
      ), m("update:month", n.value);
    }, Z = () => {
      if (!H.value)
        return;
      const e = n.value;
      n.value = b(
        e.append({ month: 1 }),
        w.value,
        k.value
      ), m("update:month", n.value);
    }, j = (e) => {
      e && g(e) || m("update:hoveredItem", e);
    }, x = (e, t) => {
      if (!t)
        return !1;
      if (t instanceof C)
        return e.daySame(t);
      const { from: a, to: d } = t;
      return a.daySame(e) || d.daySame(e);
    }, ee = (e) => e.daySame(Y), te = (e) => {
      g(e) || m("dayClick", e);
    }, ae = () => {
      p.value = !0;
    }, ne = (e) => Y.year === e, re = (e) => {
      n.value = b(
        new Ce(e, n.value.month),
        w.value,
        k.value
      ), p.value = !1, m("update:month", n.value);
    }, oe = (e, t) => e === t.year, g = (e) => {
      const t = _.value, a = y.value;
      return e.dayBefore(t) || e.dayAfter(a) || B.disabledDatesHandler(e);
    }, le = (e) => {
      const t = S.value;
      if (!t || t instanceof C)
        return !1;
      if (!t.isSingleDay)
        return t.from.daySameOrBefore(e) && t.to.daySameOrAfter(e);
      const a = A.value;
      if (a === null)
        return !1;
      const d = Se.sort(t.from, a);
      return d.from.daySameOrBefore(e) && d.to.daySameOrAfter(e);
    }, se = (e) => {
      const t = S.value;
      if (!t)
        return null;
      if (t instanceof C)
        return t.daySame(e) ? "single" : null;
      const a = A.value;
      return t.from.daySame(e) && !t.isSingleDay || (a == null ? void 0 : a.dayAfter(t.from)) && t.from.daySame(e) && t.isSingleDay || (a == null ? void 0 : a.daySame(e)) && a.dayBefore(t.from) && t.isSingleDay ? "start" : t.to.daySame(e) && !t.isSingleDay || (a == null ? void 0 : a.dayBefore(t.from)) && t.from.daySame(e) && t.isSingleDay || (a == null ? void 0 : a.daySame(e)) && a.dayAfter(t.from) && t.isSingleDay ? "end" : t.isSingleDay && t.from.daySame(e) ? "single" : null;
    }, de = (e) => {
      switch (se(e)) {
        case "single":
          return M.dateCell_intervalSingle;
        case "start":
          return M.dateCell_intervalStart;
        case "end":
          return M.dateCell_intervalEnd;
      }
    };
    return I(E, (e) => {
      if (e && e.native) {
        const t = n.value.year, a = e.native.querySelector(`#smed_year_picker_${t}`);
        a && a.scrollIntoView({ block: "center" });
      }
    }), v && I(v, (e) => {
      n.value = P(e || null, _.value, y.value);
    }), I(
      S,
      (e) => {
        R.value && e instanceof C && (n.value = e);
      },
      { immediate: !0 }
    ), (e, t) => (l(), s("div", {
      class: o([e.$style.container, p.value && e.$style.container_overflow])
    }, [
      p.value ? (l(), _e($(ve), {
        key: 1,
        ref_key: "yearContainer",
        ref: E,
        "data-automation-id": "smed-calendar__year-scrollbar",
        class: o(e.$style.yearContainer)
      }, {
        default: ye(() => [
          (l(!0), s(c, null, h(U.value, (a, d) => (l(), s("div", {
            key: d,
            class: o(e.$style.yearRow)
          }, [
            (l(!0), s(c, null, h(a, (r) => (l(), s("span", {
              id: "smed_year_picker_" + r,
              key: r,
              "data-automation-id": "smed-calendar__year-picker",
              class: o([
                e.$style.yearItem,
                ne(r) && e.$style.yearItem_current,
                oe(r, n.value) && e.$style.yearItem_selected
              ]),
              onClick: (z) => re(r)
            }, f(r), 11, Me))), 128))
          ], 2))), 128))
        ]),
        _: 1
      }, 8, ["class"])) : (l(), s(c, { key: 0 }, [
        i("div", {
          class: o(e.$style.monthContainer)
        }, [
          O($(L), {
            color: "outlined",
            "data-automation-id": "smed-calendar__month-button-left",
            size: "sm",
            icon: "arrow-left",
            class: o(!V.value && e.$style.buttonHidden),
            onClick: X
          }, null, 8, ["class"]),
          i("div", {
            class: o(e.$style.month)
          }, [
            i("span", ke, f(W.value), 1),
            i("span", {
              "data-automation-id": "smed-calendar__year",
              class: o(e.$style.year),
              onClick: ae
            }, f(n.value.year), 3)
          ], 2),
          O($(L), {
            color: "outlined",
            "data-automation-id": "smed-calendar__month-button-right",
            size: "sm",
            icon: "arrow-right",
            class: o(!H.value && e.$style.buttonHidden),
            onClick: Z
          }, null, 8, ["class"])
        ], 2),
        i("div", {
          class: o(e.$style.weekdays)
        }, [
          (l(), s(c, null, h(J, (a) => i("span", {
            key: a,
            "data-automation-id": "smed-calendar__weekday",
            class: o(e.$style.date)
          }, f(a), 3)), 64))
        ], 2),
        i("div", {
          class: o(e.$style.datesContainer)
        }, [
          (l(!0), s(c, null, h(Q.value, (a, d) => (l(), s("div", {
            key: d,
            class: o(e.$style.dateRow)
          }, [
            (l(!0), s(c, null, h(a, (r) => (l(), s("div", {
              key: r.valueOf(),
              "data-automation-id": "smed-calendar__day-row",
              class: o([
                e.$style.dateCell,
                le(r) && e.$style.dateCell_interval,
                de(r)
              ])
            }, [
              i("div", {
                "data-automation-id": "smed-calendar__day",
                class: o([
                  e.$style.date,
                  e.$style.date_hovered,
                  ee(r) && e.$style.date_current,
                  x(r, $(S)) && e.$style.date_selected,
                  !r.monthSame(n.value) && e.$style.date_adjacent,
                  g(r) && e.$style.date_disabled
                ]),
                onMouseenter: (z) => j(r),
                onMouseleave: t[0] || (t[0] = (z) => j(null)),
                onClick: (z) => te(r)
              }, [
                i("span", null, f(r.day), 1)
              ], 42, $e)
            ], 2))), 128))
          ], 2))), 128))
        ], 2)
      ], 64))
    ], 2));
  }
}), ze = "_container_17mze_1", De = "_container_overflow_17mze_10", Ie = "_monthContainer_17mze_14", be = "_buttonHidden_17mze_21", Be = "_datesContainer_17mze_26", Re = "_dateRow_17mze_31", Ae = "_dateCell_17mze_39", Ee = "_year_17mze_43", Ye = "_dateCell_intervalStart_17mze_57", Ve = "_dateCell_intervalEnd_17mze_60", He = "_dateCell_intervalSingle_17mze_64", je = "_dateCell_interval_17mze_57", Oe = "_date_17mze_26", Le = "_date_hovered_17mze_94", Ne = "_date_selected_17mze_108", Fe = "_date_disabled_17mze_108", Pe = "_date_current_17mze_117", Te = "_date_adjacent_17mze_121", qe = "_month_17mze_14", Ge = "_yearContainer_17mze_136", Je = "_yearRow_17mze_140", Ke = "_weekdays_17mze_148", Qe = "_yearItem_17mze_153", Ue = "_yearItem_selected_17mze_160", We = "_yearItem_current_17mze_163", Xe = {
  container: ze,
  container_overflow: De,
  monthContainer: Ie,
  buttonHidden: be,
  datesContainer: Be,
  dateRow: Re,
  dateCell: Ae,
  year: Ee,
  dateCell_intervalStart: Ye,
  dateCell_intervalEnd: Ve,
  dateCell_intervalSingle: He,
  dateCell_interval: je,
  date: Oe,
  date_hovered: Le,
  date_selected: Ne,
  date_disabled: Fe,
  date_current: Pe,
  date_adjacent: Te,
  month: qe,
  yearContainer: Ge,
  yearRow: Je,
  weekdays: Ke,
  yearItem: Qe,
  yearItem_selected: Ue,
  yearItem_current: We
}, Ze = {
  $style: Xe
}, lt = /* @__PURE__ */ pe(ge, [["__cssModules", Ze]]);
export {
  lt as default
};
