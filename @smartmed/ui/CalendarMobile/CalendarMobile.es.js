import "./CalendarMobile.css";
import { defineComponent as G, toRefs as J, useCssModule as W, computed as T, openBlock as l, createElementBlock as o, Fragment as g, renderList as M, normalizeClass as n, toDisplayString as D, createCommentVNode as X, mergeDefaults as Z, ref as $, watch as E, createElementVNode as v, unref as _, createVNode as k, withCtx as Y, createTextVNode as L } from "vue";
import O from "@smartmed/ui/BaseButton";
import q from "@smartmed/ui/Scrollbar";
import { SMED_LAST_DAY as ee, SMED_FIRST_DAY as te, getDaysRows as se, SmedDay as R, SmedDayRange as j, getYearsBetween as ae, MONTHS_IN_YEAR as ne, SmedMonth as z, SmedYear as le } from "@smartmed/utility/date";
import { a as P, g as oe } from "../getDefaultSelectedMonth-c094e6a7.mjs";
import { _ as K } from "../_plugin-vue_export-helper-dad06003.mjs";
const re = {
  value: null,
  single: !0,
  max: () => ee,
  min: () => te,
  disabledDatesHandler: () => !1
}, ce = ["onClick"], ie = /* @__PURE__ */ G({
  __name: "InternalCalendarMobile",
  props: {
    value: {},
    month: {},
    single: { type: Boolean },
    min: {},
    max: {},
    disabledDatesHandler: { type: Function }
  },
  emits: ["select"],
  setup(x, { emit: c }) {
    const w = x, { month: N, value: p, single: h, min: m, max: b } = J(w), f = W(), A = T(() => se(N.value)), S = (t) => {
      if (B(t, m.value, b.value))
        return;
      if (h.value) {
        c("select", t);
        return;
      }
      const a = p.value;
      if (a === null) {
        c("select", t);
        return;
      }
      if (a instanceof R) {
        c("select", j.sort(a, t));
        return;
      }
      c("select", t);
    }, i = R.currentLocal(), C = (t, a) => t instanceof R ? t.daySame(a) : t.from.daySame(a) || t.to.daySame(a), F = (t, a) => t instanceof j ? t.from.dayBefore(a) && t.to.dayAfter(a) : !1, B = (t, a, d) => t.dayBefore(a) || t.dayAfter(d) || w.disabledDatesHandler(t), H = (t) => {
      const a = [], d = t.daySame(i), u = p.value;
      return d && a.push(f.dateCell_now), u && C(u, t) && a.push(f.dateCell_selected), u && F(u, t) && a.push(f.dateCell_range), B(t, m.value, b.value) && a.push(f.dateCell_disabled), a;
    };
    return (t, a) => (l(), o("div", null, [
      (l(!0), o(g, null, M(A.value, (d, u) => (l(), o(g, { key: u }, [
        d.length ? (l(), o("div", {
          key: 0,
          class: n(t.$style.dateRow)
        }, [
          (l(!0), o(g, null, M(d, (y) => (l(), o("div", {
            key: y.valueOf(),
            class: n([t.$style.dateCell, H(y)]),
            onClick: (V) => S(y)
          }, D(y.day), 11, ce))), 128))
        ], 2)) : X("", !0)
      ], 64))), 128))
    ]));
  }
}), _e = "_dateRow_gvj41_1", de = "_dateCell_gvj41_11", ue = "_dateCell_now_gvj41_26", me = "_dateCell_range_gvj41_29", fe = "_dateCell_selected_gvj41_33", ye = "_dateCell_disabled_gvj41_37", ve = {
  dateRow: _e,
  dateCell: de,
  dateCell_now: ue,
  dateCell_range: me,
  dateCell_selected: fe,
  dateCell_disabled: ye
}, pe = {
  $style: ve
}, he = /* @__PURE__ */ K(ie, [["__cssModules", pe]]), Ce = { class: "smed-text_body-xl smed-text_medium" }, ge = ["id", "onClick"], we = ["id"], be = /* @__PURE__ */ G({
  __name: "CalendarMobile",
  props: Z({
    value: {},
    single: { type: Boolean },
    min: {},
    max: {},
    actionsFixed: { type: Boolean },
    disabledDatesHandler: { type: Function }
  }, re),
  emits: ["confirm", "cancel"],
  setup(x, { emit: c }) {
    const w = x, { value: N, single: p, min: h, max: m } = J(w), b = $(null), f = $(null), A = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], S = R.currentLocal(), i = $(
      P(h.value, m.value)
    ), C = $(
      P(h.value, m.value)
    ), F = T(() => {
      var e;
      return ((e = b.value) == null ? void 0 : e.native) || null;
    }), B = T(() => {
      var e;
      return ((e = f.value) == null ? void 0 : e.native) || null;
    }), H = [].concat(
      ...ae(
        S.year,
        S.append({ year: -100 }).year,
        S.append({ year: 100 }).year,
        1,
        200
      )
    ), t = $(w.value || null), a = T(() => {
      const e = [], r = i.value.year;
      for (let s = 0; s < ne; s++)
        e.push(new z(r, s));
      return e;
    }), d = {
      0: "Январь",
      1: "Февраль",
      2: "Март",
      3: "Апрель",
      4: "Май",
      5: "Июнь",
      6: "Июль",
      7: "Август",
      8: "Сентябрь",
      9: "Октябрь",
      10: "Ноябрь",
      11: "Декабрь"
    }, u = (e) => {
      t.value = e;
    }, y = (e) => {
      i.value = new le(e), C.value = new z(e, C.value.month);
    }, V = () => {
      const e = t.value;
      p.value ? e instanceof j ? c("confirm", e.from) : c("confirm", e) : e instanceof R ? c("confirm", new j(e, e)) : c("confirm", e);
    }, I = () => {
      c("cancel");
    }, Q = ([e, r]) => {
      if (r) {
        const s = r.querySelector(
          `#month_${e.month}`
        );
        r.scrollTo({
          top: s.offsetTop
        });
      }
    }, U = ([e, r]) => {
      if (r) {
        const s = r.querySelector(
          `#year_${e.year}`
        );
        s == null || s.scrollIntoView({
          block: "center",
          inline: "center"
        });
      }
    };
    return E(
      N,
      (e) => {
        t.value = e;
        const r = e instanceof j ? e.from : e, s = oe(r, h.value, m.value);
        i.value = s, C.value = s;
      },
      { immediate: !0 }
    ), E([C, F], Q), E([i, B], U), (e, r) => (l(), o("div", null, [
      v("div", {
        class: n(e.$style.header)
      }, [
        v("span", Ce, " Выберите " + D(_(p) ? "день" : "период"), 1)
      ], 2),
      k(_(q), {
        ref_key: "yearsScrollbar",
        ref: f,
        class: n(e.$style.years)
      }, {
        default: Y(() => [
          v("div", {
            class: n(e.$style.years__container)
          }, [
            (l(!0), o(g, null, M(_(H), (s) => (l(), o("button", {
              id: `year_${s}`,
              key: s,
              class: n([
                e.$style.years__item,
                (i.value.year === s - 1 || i.value.year === s + 1) && e.$style.years__item_adjacent,
                i.value.year === s && e.$style.years__item_active
              ]),
              onClick: (Ve) => y(s)
            }, D(s), 11, ge))), 128))
          ], 2)
        ]),
        _: 1
      }, 8, ["class"]),
      v("div", {
        class: n(e.$style.weeks)
      }, [
        (l(), o(g, null, M(A, (s) => v("div", {
          key: s,
          class: n(e.$style.weeks__item)
        }, D(s), 3)), 64))
      ], 2),
      k(_(q), {
        ref_key: "monthsScrollbar",
        ref: b,
        class: n(e.$style.months)
      }, {
        default: Y(() => [
          (l(!0), o(g, null, M(a.value, (s) => (l(), o("section", {
            id: `month_${s.month}`,
            key: s.month
          }, [
            v("h2", {
              class: n([
                "smed-text_h4 smed-text_medium smed-space_vertical-2",
                e.$style.name
              ])
            }, D(d[s.month]), 3),
            k(he, {
              value: t.value,
              month: s,
              class: n(e.$style.calendar),
              single: _(p),
              min: _(h),
              max: _(m),
              "disabled-dates-handler": e.disabledDatesHandler,
              onSelect: u
            }, null, 8, ["value", "month", "class", "single", "min", "max", "disabled-dates-handler"])
          ], 8, we))), 128))
        ]),
        _: 1
      }, 8, ["class"]),
      v("div", {
        class: n([e.$style.actions, e.actionsFixed && e.$style.actions_fixed])
      }, [
        k(_(O), { onClick: V }, {
          default: Y(() => [
            L(" Подтвердить ")
          ]),
          _: 1
        }),
        k(_(O), {
          color: "secondaryOutlined",
          class: "smed-space_top-1",
          onClick: I
        }, {
          default: Y(() => [
            L(" Отменить ")
          ]),
          _: 1
        })
      ], 2)
    ]));
  }
}), Se = "_header_18eao_1", $e = "_name_18eao_6", ke = "_calendar_18eao_10", De = "_years_18eao_15", Me = "_years__container_18eao_19", Re = "_years__item_18eao_23", je = "_years__item_adjacent_18eao_40", Be = "_years__item_active_18eao_45", Ye = "_weeks_18eao_51", Te = "_weeks__item_18eao_59", xe = "_months_18eao_67", Ne = "_actions_18eao_72", Ae = "_actions_fixed_18eao_78", Fe = {
  header: Se,
  name: $e,
  calendar: ke,
  years: De,
  years__container: Me,
  years__item: Re,
  years__item_adjacent: je,
  years__item_active: Be,
  weeks: Ye,
  weeks__item: Te,
  months: xe,
  actions: Ne,
  actions_fixed: Ae
}, He = {
  $style: Fe
}, Ge = /* @__PURE__ */ K(be, [["__cssModules", He]]);
export {
  Ge as default
};
