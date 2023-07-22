import "./RadioBlock.css";
import { defineComponent as N, mergeDefaults as S, toRefs as I, useSlots as P, ref as w, computed as d, withDirectives as F, openBlock as k, createElementBlock as p, normalizeClass as n, unref as o, createVNode as T, withCtx as q, createElementVNode as A, renderSlot as G, createTextVNode as J, toDisplayString as K, createCommentVNode as L } from "vue";
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
  identityMatcher: (a, s) => a === s
}, ee = ["disabled", "for"], oe = ["id", "name", "checked", "disabled"], le = { key: 0 }, ae = /* @__PURE__ */ N({
  name: "RadioBlock",
  __name: "RadioBlock",
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
  setup(a, { expose: s, emit: f }) {
    const h = a, {
      disabled: y,
      isError: j,
      pseudoHovered: $,
      label: i,
      identityMatcher: g,
      item: r,
      modelValue: B
    } = I(h), { id: _, native: C, focus: V, blur: z, focused: D } = Q(), v = U(j), l = W(y), H = P(), u = w(!1), b = d(() => $.value || u.value), E = d(
      () => i.value || Y(H.default)
    ), t = d(() => {
      const e = B.value, c = r.value, m = g.value;
      return m(e, c);
    }), R = (e) => {
      e.target.checked && f("update:modelValue", r.value);
    }, M = {
      onEvent: (e) => {
        u.value = e;
      }
    };
    return s({
      focus: V,
      blur: z
    }), (e, c) => F((k(), p("label", {
      class: n([
        e.$style.block,
        e.$style["block_" + e.size],
        b.value && e.$style.block_hovered,
        o(D) && e.$style.block_focused,
        o(v) && e.$style.block_invalid,
        o(l) && e.$style.block_disabled,
        t.value && e.$style.block_checked
      ]),
      disabled: o(l),
      for: o(_)
    }, [
      T(o(O), {
        value: t.value,
        class: n(["smed-space_right-3", e.$style.radio]),
        disabled: o(l),
        hovered: b.value,
        size: e.size,
        focused: !1,
        invalid: o(v)
      }, {
        default: q(() => [
          A("input", {
            id: o(_),
            ref_key: "native",
            ref: C,
            type: "radio",
            name: e.name,
            class: n(e.$style.native),
            checked: t.value,
            disabled: o(l),
            onChange: R
          }, null, 42, oe)
        ]),
        _: 1
      }, 8, ["value", "class", "disabled", "hovered", "size", "invalid"]),
      E.value ? (k(), p("span", le, [
        G(e.$slots, "default", {}, () => [
          J(K(o(i)), 1)
        ])
      ])) : L("", !0)
    ], 10, ee)), [
      [o(X), M]
    ]);
  }
}), se = "_block_aajv7_1", te = "_block_sm_aajv7_10", ce = "_block_md_aajv7_17", de = "_block_lg_aajv7_23", ne = "_block_hovered_aajv7_29", ie = "_block_checked_aajv7_32", re = "_block_focused_aajv7_35", _e = "_block_invalid_aajv7_38", ve = "_block_disabled_aajv7_41", ue = "_radio_aajv7_46", be = "_native_aajv7_50", me = {
  block: se,
  block_sm: te,
  block_md: ce,
  block_lg: de,
  block_hovered: ne,
  block_checked: ie,
  block_focused: re,
  block_invalid: _e,
  block_disabled: ve,
  radio: ue,
  native: be
}, ke = {
  $style: me
}, Ce = /* @__PURE__ */ Z(ae, [["__cssModules", ke]]);
export {
  Ce as default
};
