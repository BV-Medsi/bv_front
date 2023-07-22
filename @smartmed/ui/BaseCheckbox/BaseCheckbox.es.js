import "./BaseCheckbox.css";
import { defineComponent as E, mergeDefaults as $, toRefs as N, useSlots as S, ref as I, computed as n, withDirectives as P, openBlock as r, createElementBlock as i, normalizeClass as c, unref as e, createVNode as M, withCtx as R, createElementVNode as T, renderSlot as j, createTextVNode as q, toDisplayString as A, createCommentVNode as F } from "vue";
import G from "@smartmed/ui/PrimitiveCheckbox";
import { useInteractive as J, useControlInvalid as K, useControlDisabled as L } from "@smartmed/ui/use";
import { HoveredDirective as O } from "@smartmed/utility/directives";
import { hasSlotContent as Q } from "@smartmed/utility/vue";
import { _ as U } from "../_plugin-vue_export-helper-dad06003.mjs";
const W = {
  modelValue: !1,
  disabled: !1,
  label: "",
  size: "md",
  isError: !1,
  pseudoHovered: !1
}, X = ["disabled", "for"], Y = ["id", "checked", "disabled"], Z = { key: 0 }, ee = /* @__PURE__ */ E({
  name: "BaseCheckbox",
  __name: "BaseCheckbox",
  props: $({
    modelValue: { type: [Boolean, null] },
    disabled: { type: Boolean },
    label: {},
    size: {},
    isError: { type: Boolean },
    pseudoHovered: { type: Boolean }
  }, W),
  emits: ["update:modelValue"],
  setup(u, { expose: b, emit: m }) {
    const _ = u, { modelValue: s, isError: p, disabled: v, pseudoHovered: f, label: t } = N(_), h = S(), { id: a, native: y, focus: C, blur: k, focused: B } = J(), g = K(p), l = L(v), d = I(!1), V = n(() => f.value || d.value), w = n(() => t.value || Q(h.default)), z = (o) => {
      const x = o.target.checked;
      m("update:modelValue", x);
    }, D = {
      onEvent: (o) => {
        d.value = o;
      }
    };
    return b({
      focus: C,
      blur: k
    }), (o, H) => P((r(), i("label", {
      class: c([o.$style.label, o.$style["label_" + o.size]]),
      disabled: e(l),
      for: e(a)
    }, [
      M(e(G), {
        value: e(s),
        invalid: e(g),
        disabled: e(l),
        hovered: V.value,
        size: o.size,
        focused: e(B)
      }, {
        default: R(() => [
          T("input", {
            id: e(a),
            ref_key: "native",
            ref: y,
            type: "checkbox",
            class: c(o.$style.native),
            checked: !!e(s),
            disabled: e(l),
            onChange: z
          }, null, 42, Y)
        ]),
        _: 1
      }, 8, ["value", "invalid", "disabled", "hovered", "size", "focused"]),
      w.value ? (r(), i("span", Z, [
        j(o.$slots, "default", {}, () => [
          q(A(e(t)), 1)
        ])
      ])) : F("", !0)
    ], 10, X)), [
      [e(O), D]
    ]);
  }
}), oe = "_label_17ybw_1", le = "_label_sm_17ybw_7", se = "_label_md_17ybw_12", te = "_label_lg_17ybw_17", ae = "_native_17ybw_23", de = {
  label: oe,
  label_sm: le,
  label_md: se,
  label_lg: te,
  native: ae
}, ne = {
  $style: de
}, ve = /* @__PURE__ */ U(ee, [["__cssModules", ne]]);
export {
  ve as default
};
