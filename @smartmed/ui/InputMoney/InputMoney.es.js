import { defineComponent as c, mergeDefaults as f, useSlots as y, computed as t, openBlock as B, createBlock as _, unref as h, mergeProps as S, withCtx as a, renderSlot as r, createCommentVNode as s } from "vue";
import C from "@smartmed/ui/NumberInput";
import { h as n } from "../hasSlotContent-2a83eddf.mjs";
import { CHAR_NO_BREAK_SPACE as b, CHAR_RUBLE as P } from "@smartmed/utility/consts";
import { N as I } from "../NumberInput.props-c28e7454.mjs";
const N = `${b}${P}`, V = {
  ...I,
  thousandSeparator: " ",
  decoratorPostfix: N
}, g = {
  name: "InputMoney"
}, R = /* @__PURE__ */ c({
  ...g,
  props: f({
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
    readonly: { type: Boolean },
    stringify: { type: Function },
    id: {},
    dataAutomationId: {},
    pseudoHovered: { type: Boolean },
    pseudoFocused: { type: Boolean },
    inputStyles: {},
    rightSlotPadding: {},
    precision: {},
    decimalSeparator: {},
    thousandSeparator: {},
    max: {},
    min: {}
  }, V),
  emits: ["update:modelValue"],
  setup(l, { emit: p }) {
    const i = l, o = y(), d = t(() => n(o.label)), u = t(() => n(o.description)), m = (e) => {
      p("update:modelValue", e);
    };
    return (e, x) => (B(), _(h(C), S(i, {
      "data-automation-id": "smed-input-money",
      "onUpdate:modelValue": m
    }), {
      label: a(() => [
        d.value ? r(e.$slots, "label", { key: 0 }) : s("", !0)
      ]),
      description: a(() => [
        u.value ? r(e.$slots, "description", { key: 0 }) : s("", !0)
      ]),
      _: 3
    }, 16));
  }
});
export {
  R as default
};
