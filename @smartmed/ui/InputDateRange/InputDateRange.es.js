import "./InputDateRange.css";
import { defineComponent as J, mergeDefaults as Q, toRefs as Z, inject as ee, ref as p, computed as l, provide as oe, useSlots as ae, watch as A, openBlock as g, createElementBlock as H, normalizeClass as b, createVNode as c, unref as o, mergeProps as P, withCtx as t, renderSlot as O, createCommentVNode as D, toDisplayString as le, createBlock as te } from "vue";
import { maskitoDateRangeOptionsGenerator as se } from "@maskito/kit";
import re from "@smartmed/ui/BaseInput";
import ne from "@smartmed/ui/CalendarMobile";
import de from "@smartmed/ui/CalendarRange";
import ie from "@smartmed/ui/DropdownHost";
import ue from "@smartmed/ui/Popup";
import pe from "@smartmed/ui/SvgIcon";
import { IS_POPUP_MOBILE_TOKEN as ce, DROPDOWN_HOST_PIVOT_TOKEN as me } from "@smartmed/ui/tokens";
import { useControlAccess as fe, useControlInvalid as ve, useControlDisabled as De } from "@smartmed/ui/use";
import { DATE_RANGE_POSTFIX_DECORATOR as T, SMED_FIRST_DAY as ye, SMED_LAST_DAY as _e, SmedDay as ge, DATE_RANGE_FILTER_LENGTH as be, SmedDayRange as Pe } from "@smartmed/utility/date";
import { hasSlotContent as R } from "@smartmed/utility/vue";
import { B as he } from "../BaseInput.props-d8343137.mjs";
import { _ as Ce } from "../_plugin-vue_export-helper-dad06003.mjs";
const Se = {
  ...he,
  hasCleaner: !0,
  inputmode: "numeric",
  placeholder: T,
  dropdownProps: () => ({}),
  calendarRangeProps: () => ({}),
  min: () => ye,
  max: () => _e,
  periods: () => [],
  disabledDatesHandler: () => !1
}, Ie = { key: 0 }, Ve = /* @__PURE__ */ J({
  name: "InputDateRange",
  __name: "InputDateRange",
  props: Q({
    modelValue: {},
    modelModifiers: {},
    type: {},
    size: {},
    disabled: { type: Boolean },
    label: {},
    description: {},
    editable: { type: Boolean },
    isError: { type: Boolean },
    isSuccess: { type: Boolean },
    placeholder: {},
    autocomplete: {},
    name: {},
    hasCleaner: { type: Boolean },
    decoratorPostfix: {},
    decoratorPostfixColorClass: {},
    inputmode: {},
    readonly: { type: Boolean },
    stringify: { type: Function },
    id: {},
    dataAutomationId: {},
    pseudoHovered: { type: Boolean },
    pseudoFocused: { type: Boolean },
    inputStyles: {},
    rightSlotPadding: {},
    max: {},
    min: {},
    periods: {},
    dropdownProps: {},
    disabledDatesHandler: { type: Function },
    calendarRangeProps: {}
  }, Se),
  emits: ["update:modelValue"],
  setup(w, { emit: d }) {
    const h = w, { modelValue: i, disabled: M, isError: N, max: m, min: f, periods: y } = Z(h), v = ee(ce, p(!1)), s = p(!1), r = p(!1), C = p(null), $ = l(() => {
      var e;
      return ((e = C.value) == null ? void 0 : e.wrapper) ?? null;
    });
    oe(me, $);
    const S = ae(), I = fe(null), L = ve(N), V = De(M), _ = (e) => (e == null ? void 0 : e.toString()) || "", u = p(_(i.value)), F = l(() => R(S.label)), z = l(() => R(S.description)), E = l(() => y.value.length > 0), k = l(() => {
      const e = i.value;
      if (e === null)
        return null;
      const a = f.value, n = m.value;
      return y.value.find(({ range: B }) => e.from.daySame(B.from.dayLimit(a, n)) && e.to.daySame(B.to.dayLimit(a, n))) || null;
    }), x = l(() => {
      const e = k.value;
      return e ? (e.range.isSingleDay ? e.range : "") ? `${e} (${e.range.from})` : e : "";
    }), U = l(() => {
      const e = m.value.toLocalNativeDate(), a = f.value.toLocalNativeDate();
      return se({
        mode: "dd/mm/yyyy",
        separator: ".",
        max: e,
        min: a
      });
    }), G = l(() => {
      const e = u.value;
      return T.slice(e.length);
    }), K = (e) => {
      s.value = !1, !(e instanceof ge) && d("update:modelValue", e);
    }, Y = () => {
      s.value = !1;
    }, j = (e) => {
      d("update:modelValue", e), r.value = !1;
    }, W = (e) => {
      const a = e;
      if (u.value = a, !a) {
        d("update:modelValue", null);
        return;
      }
      a.length === be && d("update:modelValue", Pe.normalizeParse(a));
    }, X = (e) => {
      v.value && (e.stopPropagation(), e.preventDefault(), s.value = !s.value);
    }, q = () => {
      d("update:modelValue", null), r.value = !0;
    };
    return A(r, (e) => {
      !e && I && I.markAsTouch();
    }), A(i, (e) => {
      _(e) === u.value || (u.value = _(e));
    }), (e, a) => (g(), H("div", {
      class: b(e.$style.idrHost)
    }, [
      c(o(ie), P(e.dropdownProps, {
        modelValue: r.value,
        "onUpdate:modelValue": a[0] || (a[0] = (n) => r.value = n),
        class: e.$style.idrHost,
        "max-width": 266 * 2,
        "min-width": 266 * 2,
        "min-height": E.value ? 330 : 318,
        "can-open": !o(v) && !o(V)
      }), {
        dropdown: t(() => [
          c(o(de), P(e.calendarRangeProps, {
            max: o(m),
            min: o(f),
            periods: o(y),
            "model-value": o(i),
            "disabled-dates-handler": e.disabledDatesHandler,
            "onUpdate:modelValue": j
          }), null, 16, ["max", "min", "periods", "model-value", "disabled-dates-handler"])
        ]),
        default: t(() => [
          c(o(re), P(h, {
            ref_key: "baseInputExposed",
            ref: C,
            disabled: o(V),
            "model-value": u.value,
            "is-error": o(L),
            "pseudo-focused": !o(v) && r.value,
            "mask-options": U.value,
            "decorator-postfix": G.value,
            "decorator-postfix-color-class": e.$style.idrDecorator,
            onSearchClear: q,
            "onUpdate:modelValue": W
          }), {
            right: t(() => [
              c(o(pe), {
                name: "calendar",
                class: b(e.$style.idrIcon),
                size: e.size === "sm" ? "md" : "lg",
                onClick: X
              }, null, 8, ["class", "size"])
            ]),
            label: t(() => [
              F.value ? O(e.$slots, "label", { key: 0 }) : D("", !0)
            ]),
            description: t(() => [
              z.value ? O(e.$slots, "description", { key: 0 }) : D("", !0)
            ]),
            valueContent: t(() => [
              E.value && k.value && x.value ? (g(), H("span", Ie, le(x.value), 1)) : D("", !0)
            ]),
            _: 3
          }, 16, ["disabled", "model-value", "is-error", "pseudo-focused", "mask-options", "decorator-postfix", "decorator-postfix-color-class"])
        ]),
        _: 3
      }, 16, ["modelValue", "class", "min-height", "can-open"]),
      o(v) ? (g(), te(o(ue), {
        key: 0,
        modelValue: s.value,
        "onUpdate:modelValue": a[1] || (a[1] = (n) => s.value = n),
        size: "full",
        closable: !1
      }, {
        default: t(() => [
          c(o(ne), {
            "actions-fixed": "",
            value: o(i),
            single: !1,
            class: b(e.$style.calendar),
            min: o(f),
            max: o(m),
            "disabled-dates-handler": e.disabledDatesHandler,
            onConfirm: K,
            onCancel: Y
          }, null, 8, ["value", "class", "min", "max", "disabled-dates-handler"])
        ]),
        _: 1
      }, 8, ["modelValue"])) : D("", !0)
    ], 2));
  }
}), Ee = "_idrHost_mcetu_1", ke = "_idrIcon_mcetu_5", xe = "_idrDecorator_mcetu_13", Be = "_calendar_mcetu_17", Ae = {
  idrHost: Ee,
  idrIcon: ke,
  idrDecorator: xe,
  calendar: Be
}, He = {
  $style: Ae
}, Xe = /* @__PURE__ */ Ce(Ve, [["__cssModules", He]]);
export {
  Xe as default
};
