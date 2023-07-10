import "./InputDateTime.css";
import { defineComponent as le, mergeDefaults as ne, toRefs as se, ref as h, computed as t, provide as re, useSlots as de, watch as b, openBlock as ie, createBlock as ue, unref as l, mergeProps as _, withCtx as m, createElementVNode as E, normalizeClass as D, createVNode as f, renderSlot as B, createCommentVNode as A } from "vue";
import { maskitoDateTimeOptionsGenerator as ce } from "@maskito/kit";
import me from "@smartmed/ui/BaseInput";
import pe from "@smartmed/ui/Calendar";
import fe from "@smartmed/ui/DropdownHost";
import ve from "@smartmed/ui/SvgIcon";
import ye from "@smartmed/ui/TimePicker";
import { DROPDOWN_HOST_PIVOT_TOKEN as he } from "@smartmed/ui/tokens";
import { useControlAccess as _e, useControlInvalid as De, useControlDisabled as Pe } from "@smartmed/ui/use";
import { SMED_FIRST_DAY as Se, SMED_LAST_DAY as Te, dateTimePostfixDecorator as P, SmedDayTime as i, DATE_FILTER_LENGTH as S, SmedDay as H, SMED_DAY_TIME_SEPARATOR as Ve, SmedTime as we, dateClamp as Ce } from "@smartmed/utility/date";
import { h as L } from "../hasSlotContent-2a83eddf.mjs";
import { B as ge } from "../BaseInput.props-d8343137.mjs";
import { _ as Me } from "../_plugin-vue_export-helper-dad06003.mjs";
const ke = {
  ...ge,
  hasCleaner: !0,
  inputmode: "numeric",
  placeholder: "",
  timeMode: "HH:MM",
  dropdownProps: () => ({}),
  calendarProps: () => ({}),
  min: () => Se,
  max: () => Te
}, Ie = /* @__PURE__ */ le({
  name: "InputDateTime",
  __name: "InputDateTime",
  props: ne({
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
    timeMode: {},
    dropdownProps: {},
    calendarProps: {}
  }, ke),
  emits: ["update:modelValue"],
  setup(N, { emit: s }) {
    const T = N, { modelValue: r, disabled: $, isError: F, max: V, min: w, placeholder: O, timeMode: n } = se(T), d = h(!1), v = h(null), z = t(() => {
      var e;
      return ((e = v.value) == null ? void 0 : e.wrapper) ?? null;
    }), p = (e) => (e == null ? void 0 : e.toString(void 0, void 0, n.value)) || "", u = h(p(r.value));
    re(he, z);
    const C = de(), g = _e(null), R = De(F), M = Pe($), U = t(() => {
      var e;
      return ((e = v.value) == null ? void 0 : e.focused) || !1;
    }), k = t(() => 266 + (n.value === "HH:MM" ? 200 : 300)), Y = t(() => L(C.label)), G = t(() => L(C.description)), W = t(() => {
      const e = O.value;
      if (e)
        return e;
      const o = n.value;
      return P(o);
    }), j = t(() => {
      const e = u.value;
      return U.value ? P(n.value).slice(e.length) : "";
    }), K = t(() => {
      const e = V.value.toLocalNativeDate(), o = w.value.toLocalNativeDate(), a = n.value;
      return ce({
        dateMode: "dd/mm/yyyy",
        timeMode: a,
        dateSeparator: ".",
        max: e,
        min: o
      });
    }), q = t(() => {
      const e = r.value;
      return e ? e.day : null;
    }), I = t(() => {
      const e = V.value;
      return (e instanceof i ? e.day : e) || void 0;
    }), x = t(() => {
      const e = w.value;
      return (e instanceof i ? e.day : e) || void 0;
    }), J = t(() => {
      const e = r.value;
      return e ? e.time : null;
    }), Q = (e) => {
      const o = e;
      if (u.value = o, !o) {
        s("update:modelValue", null);
        return;
      }
      if (o.length >= S) {
        const a = H.normalizeParse(o), c = n.value, te = P(c).length;
        if (o.length === te) {
          const y = o.slice(
            S + Ve.length
          ), ae = new i(a, we.fromString(y));
          s("update:modelValue", ae);
        } else {
          const y = new i(a, null);
          s("update:modelValue", y);
        }
      }
    }, X = (e) => {
      const o = r.value, a = o ? o.time : null, c = new i(e, a);
      s("update:modelValue", c), d.value = !1;
    }, Z = (e) => {
      const o = r.value;
      if (o && o.time === null && !e.hours && !e.minutes && !e.seconds)
        return;
      const a = o ? o.day : null, c = new i(
        a || Ce(
          H.currentLocal(),
          x.value,
          I.value
        ),
        e
      );
      s("update:modelValue", c);
    }, ee = () => {
      s("update:modelValue", null), d.value = !0;
    };
    b(d, (e) => {
      !e && g && g.markAsTouch();
    });
    const oe = (e, o) => o ? !e || e.time === null && e.day === null ? o === "" : e.time === null ? p(e.day) === o.slice(0, S) : e.time && e.day ? p(e) === o : !1 : e === null || e.time === null && e.day === null;
    return b(r, (e) => {
      oe(e, u.value) || (u.value = p(e));
    }), (e, o) => (ie(), ue(l(fe), _(e.dropdownProps, {
      modelValue: d.value,
      "onUpdate:modelValue": o[0] || (o[0] = (a) => d.value = a),
      class: e.$style.idthost,
      "max-width": k.value,
      "min-width": k.value,
      "min-height": 318,
      "can-open": !l(M)
    }), {
      dropdown: m(() => [
        E("div", {
          class: D(e.$style.dropdown)
        }, [
          f(l(pe), _(e.calendarProps, {
            "show-adjacent-days": "",
            max: I.value,
            min: x.value,
            value: q.value,
            onDayClick: X
          }), null, 16, ["max", "min", "value"]),
          E("div", {
            class: D(e.$style.timePicker)
          }, [
            f(l(ye), {
              mode: l(n),
              "model-value": J.value,
              "onUpdate:modelValue": Z
            }, null, 8, ["mode", "model-value"])
          ], 2)
        ], 2)
      ]),
      default: m(() => [
        f(l(me), _(T, {
          ref_key: "baseInputExposed",
          ref: v,
          disabled: l(M),
          "model-value": u.value,
          "is-error": l(R),
          "pseudo-focused": d.value,
          "mask-options": K.value,
          placeholder: W.value,
          "decorator-postfix": j.value,
          "decorator-postfix-color-class": e.$style.idtdecorator,
          onSearchClear: ee,
          "onUpdate:modelValue": Q
        }), {
          right: m(() => [
            f(l(ve), {
              name: "calendar",
              class: D(e.$style.idticon),
              size: e.size === "sm" ? "md" : "lg"
            }, null, 8, ["class", "size"])
          ]),
          label: m(() => [
            Y.value ? B(e.$slots, "label", { key: 0 }) : A("", !0)
          ]),
          description: m(() => [
            G.value ? B(e.$slots, "description", { key: 0 }) : A("", !0)
          ]),
          _: 3
        }, 16, ["disabled", "model-value", "is-error", "pseudo-focused", "mask-options", "placeholder", "decorator-postfix", "decorator-postfix-color-class"])
      ]),
      _: 3
    }, 16, ["modelValue", "class", "max-width", "min-width", "can-open"]));
  }
}), xe = "_idthost_1l4h0_1", be = "_idticon_1l4h0_5", Ee = "_idtdecorator_1l4h0_13", Be = "_dropdown_1l4h0_17", Ae = "_timePicker_1l4h0_21", He = {
  idthost: xe,
  idticon: be,
  idtdecorator: Ee,
  dropdown: Be,
  timePicker: Ae
}, Le = {
  $style: He
}, Qe = /* @__PURE__ */ Me(Ie, [["__cssModules", Le]]);
export {
  Qe as default
};
