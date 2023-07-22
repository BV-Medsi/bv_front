import "./BaseRadio.css";
import { defineComponent as N, mergeDefaults as S, toRefs as I, useSlots as P, ref as w, computed as d, withDirectives as F, openBlock as _, createElementBlock as p, normalizeClass as r, unref as o, createVNode as T, withCtx as q, createElementVNode as A, renderSlot as G, createTextVNode as J, toDisplayString as K, createCommentVNode as L } from "vue";
import O from "@smartmed/ui/PrimitiveRadio";
import { useInteractive as Q, useControlInvalid as U, useControlDisabled as W } from "@smartmed/ui/use";
import { HoveredDirective as X } from "@smartmed/utility/directives";
import { hasSlotContent as Y } from "@smartmed/utility/vue";
import { _ as Z } from "../_plugin-vue_export-helper-dad06003.mjs";
const x = {
  disabled: !1,
  label: "",
  size: "md",
  isError: !1,
  pseudoHovered: !1,
  name: "",
  identityMatcher: (t, a) => t === a
}, ee = ["disabled", "for"], oe = ["id", "name", "checked", "disabled"], se = { key: 0 }, te = /* @__PURE__ */ N({
  name: "BaseRadio",
  __name: "BaseRadio",
  props: S({
    modelValue: {},
    name: {},
    item: {},
    identityMatcher: { type: Function },
    disabled: { type: Boolean },
    label: {},
    size: {},
    isError: { type: Boolean },
    pseudoHovered: { type: Boolean }
  }, x),
  emits: ["update:modelValue"],
  setup(t, { expose: a, emit: f }) {
    const h = t, {
      modelValue: b,
      isError: y,
      disabled: g,
      pseudoHovered: B,
      label: l,
      item: n,
      identityMatcher: C
    } = I(h), V = P(), { id: c, native: j, focus: k, blur: z, focused: D } = Q(), H = U(y), s = W(g), u = w(!1), $ = d(() => B.value || u.value), E = d(
      () => l.value || Y(V.default)
    ), m = d(() => {
      const e = b.value, i = n.value, v = C.value;
      return v(e, i);
    }), R = (e) => {
      e.target.checked && f("update:modelValue", n.value);
    }, M = {
      onEvent: (e) => {
        u.value = e;
      }
    };
    return a({
      focus: k,
      blur: z
    }), (e, i) => F((_(), p("label", {
      class: r([
        e.$style.radio,
        e.$style["radio_" + e.size],
        o(s) && e.$style.radio_disabled
      ]),
      disabled: o(s),
      for: o(c)
    }, [
      T(o(O), {
        value: m.value,
        invalid: o(H),
        disabled: o(s),
        hovered: $.value,
        size: e.size,
        focused: o(D),
        class: r(e.$style.primitive)
      }, {
        default: q(() => [
          A("input", {
            id: o(c),
            ref_key: "native",
            ref: j,
            type: "radio",
            name: e.name,
            class: r(e.$style.native),
            checked: m.value,
            disabled: o(s),
            onChange: R
          }, null, 42, oe)
        ]),
        _: 1
      }, 8, ["value", "invalid", "disabled", "hovered", "size", "focused", "class"]),
      E.value ? (_(), p("span", se, [
        G(e.$slots, "default", {}, () => [
          J(K(o(l)), 1)
        ])
      ])) : L("", !0)
    ], 10, ee)), [
      [o(X), M]
    ]);
  }
}), ae = "_radio_1jh7s_1", ie = "_radio_sm_1jh7s_7", de = "_radio_md_1jh7s_13", re = "_radio_lg_1jh7s_18", le = "_radio_disabled_1jh7s_23", ne = "_primitive_1jh7s_27", ce = "_native_1jh7s_31", ue = {
  radio: ae,
  radio_sm: ie,
  radio_md: de,
  radio_lg: re,
  radio_disabled: le,
  primitive: ne,
  native: ce
}, me = {
  $style: ue
}, Be = /* @__PURE__ */ Z(te, [["__cssModules", me]]);
export {
  Be as default
};
