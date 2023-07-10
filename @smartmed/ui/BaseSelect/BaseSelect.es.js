import "./BaseSelect.css";
import { defineComponent as O, mergeDefaults as A, useSlots as N, toRefs as T, ref as h, computed as n, provide as F, watch as C, openBlock as H, createBlock as M, unref as o, mergeProps as _, withCtx as t, renderSlot as l, createVNode as f, normalizeProps as R, guardReactiveProps as U, createCommentVNode as r, normalizeClass as L } from "vue";
import K from "@smartmed/ui/BaseInput";
import W from "@smartmed/ui/DataList";
import j from "@smartmed/ui/DropdownHost";
import q from "@smartmed/ui/SvgIcon";
import { DROPDOWN_HOST_PIVOT_TOKEN as G } from "@smartmed/ui/tokens";
import { useControlAccess as J, useControlInvalid as Q, useControlDisabled as X } from "@smartmed/ui/use";
import { hasSlotContent as p } from "@smartmed/utility/vue";
import { B as Y } from "../BaseInput.props-d8343137.mjs";
import { _ as Z } from "../_plugin-vue_export-helper-dad06003.mjs";
const x = {
  ...Y,
  editable: !1,
  dropdownProps: () => ({}),
  items: () => []
}, ee = {
  name: "BaseSelect"
}, oe = /* @__PURE__ */ O({
  ...ee,
  props: A({
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
    rightSlotPadding: {},
    items: {},
    dropdownProps: {},
    matcher: { type: Function }
  }, x),
  emits: ["update:modelValue", "search-clear"],
  setup(b, { expose: B, emit: y }) {
    const k = b, d = N(), { modelValue: i, disabled: $, isError: P } = T(k), s = h(!1), u = h(null), w = n(() => {
      var e;
      return ((e = u.value) == null ? void 0 : e.wrapper) ?? null;
    });
    F(G, w);
    const v = J(null), S = Q(P), c = X($), V = n(() => p(d.emptyContent)), D = n(() => p(d.action)), I = n(() => p(d.label)), g = n(() => p(d.description));
    C(i, () => {
      s.value && (s.value = !1);
    }), C(s, (e) => {
      !e && v && v.markAsTouch();
    });
    const z = (e) => {
      var a;
      y("update:modelValue", e), (a = u.value) == null || a.focus();
    }, E = () => {
      y("search-clear");
    };
    return B({
      focus,
      blur
    }), (e, a) => (H(), M(o(j), _(e.dropdownProps, {
      modelValue: s.value,
      "onUpdate:modelValue": a[0] || (a[0] = (m) => s.value = m),
      class: e.$style.host,
      "can-open": !o(c)
    }), {
      dropdown: t(() => [
        l(e.$slots, "dropdown", { items: e.items }, () => [
          f(o(W), {
            "model-value": o(i),
            items: e.items,
            matcher: e.matcher,
            size: e.size,
            "onUpdate:modelValue": z
          }, {
            itemContent: t((m) => [
              l(e.$slots, "itemContent", R(U(m)))
            ]),
            emptyContent: t(() => [
              V.value ? l(e.$slots, "emptyContent", { key: 0 }) : r("", !0)
            ]),
            action: t(() => [
              D.value ? l(e.$slots, "action", { key: 0 }) : r("", !0)
            ]),
            _: 3
          }, 8, ["model-value", "items", "matcher", "size"])
        ])
      ]),
      default: t(() => [
        f(o(K), _(e.$props, {
          ref_key: "baseInputExposed",
          ref: u,
          "model-value": o(i),
          class: [e.$style.input, o(c) && e.$style.input_disabled],
          disabled: o(c),
          "is-error": o(S),
          "pseudo-focused": s.value,
          onSearchClear: E
        }), {
          right: t(() => [
            f(o(q), {
              name: "arrow-down",
              class: L([e.$style.icon, s.value && e.$style.icon_rotated])
            }, null, 8, ["class"])
          ]),
          valueContent: t(() => [
            e.$slots.valueContent ? l(e.$slots, "valueContent", {
              key: 0,
              value: o(i)
            }) : r("", !0)
          ]),
          label: t(() => [
            I.value ? l(e.$slots, "label", { key: 0 }) : r("", !0)
          ]),
          description: t(() => [
            g.value ? l(e.$slots, "description", { key: 0 }) : r("", !0)
          ]),
          _: 3
        }, 16, ["model-value", "class", "disabled", "is-error", "pseudo-focused"])
      ]),
      _: 3
    }, 16, ["modelValue", "class", "can-open"]));
  }
}), te = "_host_14dk7_1", se = "_input_14dk7_5", le = "_input_disabled_14dk7_8", ae = "_icon_14dk7_12", ne = "_icon_rotated_14dk7_19", re = {
  host: te,
  input: se,
  input_disabled: le,
  icon: ae,
  icon_rotated: ne
}, de = {
  $style: re
}, be = /* @__PURE__ */ Z(oe, [["__cssModules", de]]);
export {
  be as default
};
