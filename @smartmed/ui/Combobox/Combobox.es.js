import "./Combobox.css";
import { defineComponent as H, mergeDefaults as M, toRefs as L, useSlots as R, ref as B, computed as u, provide as W, watch as y, openBlock as j, createBlock as q, unref as t, mergeProps as _, withKeys as G, withCtx as s, renderSlot as a, createVNode as C, createCommentVNode as i, normalizeClass as J } from "vue";
import Q from "@smartmed/ui/BaseInput";
import X from "@smartmed/ui/DataList";
import Y from "@smartmed/ui/DropdownHost";
import Z from "@smartmed/ui/SvgIcon";
import { DROPDOWN_HOST_PIVOT_TOKEN as x } from "@smartmed/ui/tokens";
import { useControlAccess as ee, useControlInvalid as oe, useControlDisabled as te } from "@smartmed/ui/use";
import { hasSlotContent as p } from "@smartmed/utility/vue";
import { B as se } from "../BaseInput.props-d8343137.mjs";
import { _ as le } from "../_plugin-vue_export-helper-dad06003.mjs";
const ne = {
  ...se,
  items: () => [],
  dropdownProps: () => ({})
}, re = {
  name: "Combobox"
}, ae = /* @__PURE__ */ H({
  ...re,
  props: M({
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
    matcher: { type: Function },
    itemsFilter: { type: Function },
    dropdownProps: {}
  }, ne),
  emits: ["update:modelValue"],
  setup(P, { emit: k }) {
    const c = P, { modelValue: r, items: h, isError: D, disabled: I } = L(c), b = R(), $ = ee(null), S = oe(D), w = te(I), l = B(!1), f = B(null), E = u(() => {
      var e;
      return ((e = f.value) == null ? void 0 : e.wrapper) ?? null;
    });
    W(x, E);
    const m = u(() => h ? h.value : []), F = u(() => p(b.label)), O = u(() => p(b.description)), g = (e, o) => e ? e === o : !0, V = u(() => {
      if (!m.value)
        return null;
      const e = r.value, o = c.matcher || g, n = m.value.filter((U) => o(e, U));
      return n.length === 1 ? n[0] : null;
    }), v = u(() => {
      if (m.value === null)
        return null;
      const e = r.value, o = c.itemsFilter || g;
      return m.value.filter((n) => o(e, n));
    }), z = u(
      () => r.value !== null && String(r.value).length > 0
    );
    y(l, (e) => {
      !e && $ && $.markAsTouch();
    }), y(r, () => {
      !l.value && z.value && !V.value && K();
    }), y(V, (e) => {
      e && d(e);
    });
    const K = () => {
      l.value = !0;
    }, A = () => {
      l.value = !1;
    }, N = (e) => {
      l.value && e.preventDefault();
      const o = v.value;
      !o || o.length !== 1 || d(o[0]);
    }, d = (e) => {
      k("update:modelValue", e);
    }, T = (e) => {
      var o;
      A(), (o = f.value) == null || o.focus(), d(e);
    };
    return (e, o) => (j(), q(t(Y), _(e.dropdownProps, {
      modelValue: l.value,
      "onUpdate:modelValue": o[1] || (o[1] = (n) => l.value = n),
      class: e.$style.host,
      "can-open": !t(w),
      onKeyup: G(N, ["enter"])
    }), {
      dropdown: s(() => [
        a(e.$slots, "dropdown", { items: v.value }, () => [
          C(t(X), {
            "model-value": t(r),
            items: v.value,
            size: e.size,
            "onUpdate:modelValue": T
          }, {
            itemContent: s(({ item: n }) => [
              a(e.$slots, "itemContent", { item: n })
            ]),
            action: s(() => [
              t(p)(e.$slots.actions) ? a(e.$slots, "action", { key: 0 }) : i("", !0)
            ]),
            emptyContent: s(() => [
              t(p)(e.$slots.emptyContent) ? a(e.$slots, "emptyContent", { key: 0 }) : i("", !0)
            ]),
            _: 3
          }, 8, ["model-value", "items", "size"])
        ])
      ]),
      default: s(() => [
        C(t(Q), _(e.$props, {
          ref_key: "baseInputExposed",
          ref: f,
          "has-cleaner": "",
          disabled: t(w),
          "model-value": t(r),
          "is-error": t(S),
          stringify: e.stringify,
          "pseudo-focused": l.value,
          "onUpdate:modelValue": d,
          onSearchClear: o[0] || (o[0] = (n) => d(null))
        }), {
          left: s(() => [
            t(p)(e.$slots.left) ? a(e.$slots, "left", { key: 0 }) : i("", !0)
          ]),
          right: s(() => [
            C(t(Z), {
              name: "arrow-down",
              class: J([e.$style.icon, l.value && e.$style.icon_rotated])
            }, null, 8, ["class"])
          ]),
          valueContent: s(() => [
            e.$slots.valueContent ? a(e.$slots, "valueContent", {
              key: 0,
              value: t(r)
            }) : i("", !0)
          ]),
          label: s(() => [
            F.value ? a(e.$slots, "label", { key: 0 }) : i("", !0)
          ]),
          description: s(() => [
            O.value ? a(e.$slots, "description", { key: 0 }) : i("", !0)
          ]),
          _: 3
        }, 16, ["disabled", "model-value", "is-error", "stringify", "pseudo-focused"])
      ]),
      _: 3
    }, 16, ["modelValue", "class", "can-open", "onKeyup"]));
  }
}), ue = "_host_1uywm_1", ie = "_icon_1uywm_5", de = "_icon_rotated_1uywm_10", pe = {
  host: ue,
  icon: ie,
  icon_rotated: de
}, me = {
  $style: pe
}, Be = /* @__PURE__ */ le(ae, [["__cssModules", me]]);
export {
  Be as default
};
