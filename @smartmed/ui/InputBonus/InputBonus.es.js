import { defineComponent as x, mergeDefaults as C, toRefs as I, useSlots as V, computed as a, openBlock as m, createBlock as c, unref as o, mergeProps as k, withCtx as t, renderSlot as y, createCommentVNode as n, createTextVNode as D } from "vue";
import N from "@smartmed/ui/BaseButton";
import _ from "@smartmed/ui/NumberInput";
import { useControlDisabled as w } from "@smartmed/ui/use";
import { hasSlotContent as f } from "@smartmed/utility/vue";
import { N as P } from "../NumberInput.props-c28e7454.mjs";
const z = {
  ...P,
  thousandSeparator: " ",
  placeholder: "0",
  min: 0,
  dataAutomationId: "smed-input-bonus"
}, A = {
  fontSize: "28px",
  lineHeight: "34px"
}, R = /* @__PURE__ */ x({
  name: "InputBonus",
  __name: "InputBonus",
  props: C({
    modelValue: {},
    modelModifiers: {},
    type: {},
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
    decoratorPostfixColorClass: {},
    readonly: { type: Boolean },
    stringify: { type: Function },
    id: {},
    dataAutomationId: {},
    pseudoHovered: { type: Boolean },
    pseudoFocused: { type: Boolean },
    inputStyles: {},
    thousandSeparator: {},
    max: {},
    min: {}
  }, z),
  emits: ["update:modelValue"],
  setup(B, { emit: b }) {
    const s = B, { max: l, disabled: h, readonly: u } = I(s), r = V(), p = w(h), v = a(() => f(r.label)), S = a(() => f(r.description)), d = a(() => {
      const e = l && l.value;
      return typeof e == "number" && e > 0;
    }), i = (e) => {
      b("update:modelValue", e);
    }, g = () => {
      d.value && !p.value && !u.value && i(l.value);
    };
    return (e, F) => (m(), c(o(_), k(s, {
      size: "lg",
      "right-slot-padding": "12px 16px 12px 0",
      "model-value": e.modelValue,
      "input-styles": o(A),
      "onUpdate:modelValue": i
    }), {
      label: t(() => [
        v.value ? y(e.$slots, "label", { key: 0 }) : n("", !0)
      ]),
      description: t(() => [
        S.value ? y(e.$slots, "description", { key: 0 }) : n("", !0)
      ]),
      right: t(() => [
        d.value ? (m(), c(o(N), {
          key: 0,
          rounded: "",
          color: "grey",
          "data-automation-id": "smed-input-bonus-all-bonuses",
          size: "sm",
          disabled: o(p) || o(u),
          onClick: g
        }, {
          default: t(() => [
            D("Все бонусы")
          ]),
          _: 1
        }, 8, ["disabled"])) : n("", !0)
      ]),
      _: 3
    }, 16, ["model-value", "input-styles"]));
  }
});
export {
  R as default
};
