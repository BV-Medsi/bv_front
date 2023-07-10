import "./InputDate.css";
import { defineComponent as K, mergeDefaults as Y, toRefs as W, inject as X, ref as i, computed as u, provide as q, useSlots as J, watch as I, openBlock as V, createElementBlock as Q, normalizeClass as y, createVNode as c, unref as o, mergeProps as D, withCtx as s, renderSlot as g, createCommentVNode as h, createBlock as Z } from "vue";
import { maskitoDateOptionsGenerator as ee } from "@maskito/kit";
import oe from "@smartmed/ui/BaseInput";
import ae from "@smartmed/ui/Calendar";
import le from "@smartmed/ui/CalendarMobile";
import te from "@smartmed/ui/DropdownHost";
import se from "@smartmed/ui/Popup";
import ne from "@smartmed/ui/SvgIcon";
import { IS_POPUP_MOBILE_TOKEN as re, DROPDOWN_HOST_PIVOT_TOKEN as de } from "@smartmed/ui/tokens";
import { useControlAccess as ie, useControlInvalid as ue, useControlDisabled as ce } from "@smartmed/ui/use";
import { DATE_POSTFIX_DECORATOR as B, SMED_FIRST_DAY as pe, SMED_LAST_DAY as me, SmedDayRange as fe, DATE_FILTER_LENGTH as ve, SmedDay as ye } from "@smartmed/utility/date";
import { h as k } from "../hasSlotContent-2a83eddf.mjs";
import { B as De } from "../BaseInput.props-d8343137.mjs";
import { _ as he } from "../_plugin-vue_export-helper-dad06003.mjs";
const _e = {
  ...De,
  hasCleaner: !0,
  inputmode: "numeric",
  placeholder: B,
  dropdownProps: () => ({}),
  calendarProps: () => ({}),
  min: () => pe,
  max: () => me,
  disabledDatesHandler: () => !1
}, be = /* @__PURE__ */ K({
  name: "InputDate",
  __name: "InputDate",
  props: Y({
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
    disabledDatesHandler: { type: Function },
    dropdownProps: {},
    calendarProps: {}
  }, _e),
  emits: ["update:modelValue"],
  setup(E, { emit: n }) {
    const _ = E, { modelValue: p, disabled: O, isError: T, max: m, min: f } = W(_), r = X(re, i(!1)), l = i(!1), b = i(null), w = u(() => {
      var e;
      return ((e = b.value) == null ? void 0 : e.wrapper) ?? null;
    }), v = (e) => (e == null ? void 0 : e.toString()) || "", d = i(v(p.value)), t = i(!1);
    q(de, w);
    const C = J(), P = ie(null), x = ue(T), S = ce(O), M = u(() => k(C.label)), A = u(() => k(C.description)), F = u(() => {
      const e = m.value.toLocalNativeDate(), a = f.value.toLocalNativeDate();
      return ee({
        mode: "dd/mm/yyyy",
        separator: ".",
        max: e,
        min: a
      });
    }), H = u(() => {
      const e = d.value;
      return B.slice(e.length);
    }), N = (e) => {
      r.value || (l.value = e);
    }, $ = (e) => {
      t.value = !1, !(e instanceof fe) && n("update:modelValue", e);
    }, z = () => {
      t.value = !1;
    }, L = (e) => {
      n("update:modelValue", e), l.value = !1;
    }, R = (e) => {
      const a = e;
      if (d.value = a, !a) {
        n("update:modelValue", null);
        return;
      }
      a.length === ve && n("update:modelValue", ye.normalizeParse(a));
    }, U = () => {
      n("update:modelValue", null), l.value = !0;
    }, j = (e) => {
      r.value && (e.stopPropagation(), e.preventDefault(), t.value = !t.value);
    };
    return I(l, (e) => {
      !e && P && P.markAsTouch();
    }), I(p, (e) => {
      v(e) === d.value || (d.value = v(e));
    }), (e, a) => (V(), Q("div", {
      class: y(e.$style.host)
    }, [
      c(o(te), D(e.dropdownProps, {
        "model-value": l.value,
        class: e.$style.host,
        "max-width": 266,
        "min-width": 266,
        "min-height": 318,
        "can-open": !o(r) && !o(S),
        "onUpdate:modelValue": N
      }), {
        dropdown: s(() => [
          c(o(ae), D(e.calendarProps, {
            "show-adjacent-days": "",
            max: o(m),
            min: o(f),
            value: o(p),
            "disabled-dates-handler": e.disabledDatesHandler,
            onDayClick: L
          }), null, 16, ["max", "min", "value", "disabled-dates-handler"])
        ]),
        default: s(() => [
          c(o(oe), D(_, {
            ref_key: "baseInputExposed",
            ref: b,
            disabled: o(S),
            "model-value": d.value,
            "is-error": o(x),
            "pseudo-focused": !o(r) && l.value,
            "mask-options": F.value,
            "decorator-postfix": H.value,
            "decorator-postfix-color-class": e.$style.decorator,
            onSearchClear: U,
            "onUpdate:modelValue": R
          }), {
            right: s(() => [
              c(o(ne), {
                name: "calendar",
                class: y(e.$style.icon),
                size: e.size === "sm" ? "md" : "lg",
                onClick: j
              }, null, 8, ["class", "size"])
            ]),
            label: s(() => [
              M.value ? g(e.$slots, "label", { key: 0 }) : h("", !0)
            ]),
            description: s(() => [
              A.value ? g(e.$slots, "description", { key: 0 }) : h("", !0)
            ]),
            _: 3
          }, 16, ["disabled", "model-value", "is-error", "pseudo-focused", "mask-options", "decorator-postfix", "decorator-postfix-color-class"])
        ]),
        _: 3
      }, 16, ["model-value", "class", "can-open"]),
      o(r) ? (V(), Z(o(se), {
        key: 0,
        modelValue: t.value,
        "onUpdate:modelValue": a[0] || (a[0] = (G) => t.value = G),
        size: "full",
        closable: !1
      }, {
        default: s(() => [
          c(o(le), {
            "actions-fixed": "",
            single: "",
            value: o(p),
            class: y(e.$style.calendar),
            min: o(f),
            max: o(m),
            "disabled-dates-handler": e.disabledDatesHandler,
            onConfirm: $,
            onCancel: z
          }, null, 8, ["value", "class", "min", "max", "disabled-dates-handler"])
        ]),
        _: 1
      }, 8, ["modelValue"])) : h("", !0)
    ], 2));
  }
}), Ce = "_host_1ltla_1", Pe = "_icon_1ltla_5", Se = "_decorator_1ltla_13", Ie = "_calendar_1ltla_17", Ve = {
  host: Ce,
  icon: Pe,
  decorator: Se,
  calendar: Ie
}, ge = {
  $style: Ve
}, Re = /* @__PURE__ */ he(be, [["__cssModules", ge]]);
export {
  Re as default
};
