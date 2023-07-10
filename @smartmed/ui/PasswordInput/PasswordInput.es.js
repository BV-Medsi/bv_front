import "./PasswordInput.css";
import { defineComponent as w, mergeDefaults as C, useSlots as S, toRefs as _, ref as z, computed as s, openBlock as b, createBlock as k, unref as c, mergeProps as I, withCtx as l, renderSlot as a, createCommentVNode as r, createVNode as V, normalizeClass as $ } from "vue";
import D from "@smartmed/ui/BaseInput";
import M from "@smartmed/ui/SvgIcon";
import { hasSlotContent as i } from "@smartmed/utility/vue";
import { B as x } from "../BaseInput.props-d8343137.mjs";
import { _ as F } from "../_plugin-vue_export-helper-dad06003.mjs";
const L = {
  ...x,
  name: "password",
  autocomplete: "on"
}, N = {
  name: "PasswordInput"
}, U = /* @__PURE__ */ w({
  ...N,
  props: C({
    modelValue: {},
    modelModifiers: {},
    type: {},
    size: {},
    disabled: { type: Boolean },
    label: {},
    description: {},
    editable: { type: Boolean },
    maskOptions: {},
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
    rightSlotPadding: {}
  }, L),
  emits: ["update:modelValue"],
  setup(m, { emit: f }) {
    const p = m, n = S(), { size: y } = _(p), o = z(!1), v = s(() => i(n.left)), B = s(() => i(n.label)), h = s(() => i(n.description)), P = s(() => y.value === "sm" ? "md" : "lg"), g = () => {
      o.value = !o.value;
    }, u = (e) => {
      f("update:modelValue", e);
    };
    return (e, d) => (b(), k(c(D), I(p, {
      type: o.value ? "text" : "password",
      "model-value": e.modelValue,
      "onUpdate:modelValue": u,
      onSearchClear: d[0] || (d[0] = (t) => u(null))
    }), {
      left: l((t) => [
        v.value ? a(e.$slots, "left", {
          key: 0,
          size: t == null ? void 0 : t.size
        }) : r("", !0)
      ]),
      right: l(() => [
        V(c(M), {
          class: $(e.$style.icon),
          name: o.value ? "see" : "unsee",
          size: P.value,
          onClick: g
        }, null, 8, ["class", "name", "size"])
      ]),
      label: l(() => [
        B.value ? a(e.$slots, "label", { key: 0 }) : r("", !0)
      ]),
      description: l(() => [
        h.value ? a(e.$slots, "description", { key: 0 }) : r("", !0)
      ]),
      _: 3
    }, 16, ["type", "model-value"]));
  }
}), A = "_icon_91mi1_1", E = {
  icon: A
}, H = {
  $style: E
}, Q = /* @__PURE__ */ F(U, [["__cssModules", H]]);
export {
  Q as default
};
