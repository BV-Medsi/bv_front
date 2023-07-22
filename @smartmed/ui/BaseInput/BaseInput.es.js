import "./BaseInput.css";
import { defineComponent as re, mergeDefaults as de, toRefs as pe, ref as N, useSlots as ce, computed as s, openBlock as a, createElementBlock as l, normalizeClass as o, unref as t, withModifiers as F, renderSlot as u, createTextVNode as W, toDisplayString as h, createCommentVNode as i, createElementVNode as y, normalizeStyle as A, createBlock as H } from "vue";
import O from "@smartmed/ui/SvgIcon";
import { useInteractive as ue, useControlInvalid as ye, useControlDisabled as _e, useModelModifiers as ve } from "@smartmed/ui/use";
import { useMaskito as me } from "@smartmed/utility/maskito";
import { hasSlotContent as _ } from "@smartmed/utility/vue";
import { B as fe } from "../BaseInput.props-d8343137.mjs";
import { _ as he } from "../_plugin-vue_export-helper-dad06003.mjs";
const be = ["for"], $e = ["id", "data-automation-id", "type", "autocomplete", "name", "placeholder", "disabled", "inputmode", "readonly", "value"], ge = {
  name: "BaseInput"
}, we = /* @__PURE__ */ re({
  ...ge,
  props: de({
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
  }, fe),
  emits: ["update:modelValue", "search-clear"],
  setup(T, { expose: j, emit: C }) {
    const q = T, {
      modelValue: v,
      modelModifiers: G,
      editable: r,
      isSuccess: S,
      hasCleaner: I,
      size: B,
      id: J,
      isError: K,
      disabled: Q,
      pseudoFocused: E,
      maskOptions: U,
      label: b,
      description: $,
      readonly: m
    } = pe(q), R = N(null), V = N(null), d = ce(), p = ue(), z = ye(K), c = _e(Q), X = ve(G.value), Y = me(U), P = p.focus, Z = p.blur, x = s(() => I.value && !m.value && !c.value && f.value), g = s(
      () => p.focused.value || E.value && E.value
    ), f = s(
      () => !!v.value && String(v.value).length > 0
    ), w = s(() => B.value === "sm" ? "md" : "lg"), ee = s(
      () => _(d.valueContent)
    ), te = s(
      () => !!b && !!b.value || _(d.label)
    ), oe = s(
      () => !!$ && !!$.value || _(d.description)
    ), M = s(() => {
      const e = f.value && ee.value, n = !r.value && e, k = r.value && !g.value && e;
      return n || k;
    }), D = s(() => J.value || p.id), L = s(() => _(d.right)), se = s(() => _(d.left)), ae = s(() => S.value || f.value && I.value || L.value), ne = (e) => {
      const k = e.target.value;
      C("update:modelValue", X.modify(k));
    }, ie = () => {
      C("search-clear"), P();
    }, le = (e) => {
      const n = e;
      V.value = n, Y.value = n, p.native.value = n;
    };
    return j({
      focus: P,
      blur: Z,
      native: V,
      wrapper: R,
      focused: g
    }), (e, n) => (a(), l("label", {
      class: o([e.$style.input, t(m) && e.$style.input_readonly]),
      for: D.value
    }, [
      te.value ? (a(), l("span", {
        key: 0,
        "data-automation-id": "smed-base-input-label",
        class: o([e.$style.inline, "smed-text_body-sm smed-space_bottom-1"]),
        onClick: n[0] || (n[0] = F(() => {
        }, ["stop"]))
      }, [
        u(e.$slots, "label", {}, () => [
          W(h(t(b)), 1)
        ])
      ], 2)) : i("", !0),
      y("div", {
        ref_key: "wrapperRef",
        ref: R,
        class: o([
          e.$style.wrapper,
          e.$style["wrapper_" + t(B)],
          t(z) && e.$style.wrapper_error,
          t(c) && e.$style.wrapper_disabled,
          g.value && e.$style.focus
        ])
      }, [
        se.value ? (a(), l("div", {
          key: 0,
          "data-automation-id": "smed-base-input-left-icon",
          class: o([e.$style.icon, e.$style.iconsLeft, e.$style.icon_left])
        }, [
          u(e.$slots, "left", { size: w.value })
        ], 2)) : i("", !0),
        y("div", {
          class: o(e.$style.nativeWrapper)
        }, [
          y("input", {
            id: D.value,
            ref: le,
            "data-automation-id": e.dataAutomationId,
            class: o([
              e.$style.native,
              !t(r) && e.$style.native_notEditable,
              M.value && e.$style.native_hidden,
              t(c) && e.$style.native_disabled
            ]),
            style: A(e.inputStyles),
            type: e.type,
            autocomplete: e.autocomplete,
            name: e.name,
            placeholder: e.placeholder,
            disabled: t(c) || t(m),
            inputmode: e.inputmode,
            readonly: t(c) || t(m) || !t(r),
            value: e.stringify(t(v)),
            onInput: ne
          }, null, 46, $e),
          e.decoratorPostfix && f.value ? (a(), l("span", {
            key: 0,
            class: o([e.$style.decorator, e.decoratorPostfixColorClass])
          }, [
            y("span", {
              class: o(e.$style.hidden)
            }, h(e.stringify(t(v))), 3),
            y("span", {
              class: o(e.$style.postfix)
            }, h(e.decoratorPostfix), 3)
          ], 2)) : i("", !0),
          M.value ? (a(), l("div", {
            key: 1,
            "data-automation-id": "smed-base-input-value-content",
            class: o([
              e.$style.native,
              !t(r) && e.$style.native_notEditable,
              e.$style.native_template
            ])
          }, [
            u(e.$slots, "valueContent")
          ], 2)) : i("", !0)
        ], 2),
        ae.value ? (a(), l("div", {
          key: 1,
          class: o(e.$style.iconsRight),
          style: A(e.rightSlotPadding && { padding: e.rightSlotPadding })
        }, [
          t(S) ? (a(), H(t(O), {
            key: 0,
            "data-automation-id": "smed-base-input-success-icon",
            name: "check-filled",
            class: o([e.$style.icon, e.$style.icon_success, e.$style.icon_right]),
            size: w.value
          }, null, 8, ["class", "size"])) : i("", !0),
          x.value ? (a(), H(t(O), {
            key: 1,
            "data-automation-id": "smed-base-input-cleaner-icon",
            name: "close-filled",
            class: o([e.$style.closeIcon, e.$style.icon, e.$style.icon_right]),
            size: w.value,
            onClick: F(ie, ["stop", "prevent"])
          }, null, 8, ["class", "size", "onClick"])) : i("", !0),
          L.value ? (a(), l("div", {
            key: 2,
            "data-automation-id": "smed-base-input-right-icon",
            class: o(e.$style.icon_right)
          }, [
            u(e.$slots, "right")
          ], 2)) : i("", !0)
        ], 6)) : i("", !0)
      ], 2),
      oe.value ? (a(), l("span", {
        key: 1,
        class: o([
          "smed-text_caption smed-space_top-1",
          e.$style.inline,
          t(z) && e.$style.inline_invalid
        ])
      }, [
        u(e.$slots, "description", {}, () => [
          W(h(t($)), 1)
        ])
      ], 2)) : i("", !0)
    ], 10, be));
  }
}), ke = "_input_1yye7_1", Ce = "_input_readonly_1yye7_5", Se = "_wrapper_1yye7_9", Ie = "_wrapper_sm_1yye7_19", Be = "_native_1yye7_24", Ee = "_decorator_1yye7_25", Re = "_wrapper_md_1yye7_28", Ve = "_wrapper_lg_1yye7_38", ze = "_focus_1yye7_51", Pe = "_wrapper_error_1yye7_54", Me = "_wrapper_disabled_1yye7_60", De = "_nativeWrapper_1yye7_65", Le = "_native_template_1yye7_107", Ne = "_native_hidden_1yye7_113", Fe = "_native_notEditable_1yye7_119", We = "_native_disabled_1yye7_122", Ae = "_inline_1yye7_126", He = "_inline_invalid_1yye7_132", Oe = "_iconsLeft_1yye7_136", Te = "_icon_1yye7_136", je = "_icon_left_1yye7_154", qe = "_icon_right_1yye7_157", Ge = "_icon_error_1yye7_163", Je = "_icon_success_1yye7_166", Ke = "_iconsRight_1yye7_170", Qe = "_error_1yye7_187", Ue = "_closeIcon_1yye7_191", Xe = "_hidden_1yye7_207", Ye = "_postfix_1yye7_211", Ze = {
  input: ke,
  input_readonly: Ce,
  wrapper: Se,
  wrapper_sm: Ie,
  native: Be,
  decorator: Ee,
  wrapper_md: Re,
  wrapper_lg: Ve,
  focus: ze,
  wrapper_error: Pe,
  wrapper_disabled: Me,
  nativeWrapper: De,
  native_template: Le,
  native_hidden: Ne,
  native_notEditable: Fe,
  native_disabled: We,
  inline: Ae,
  inline_invalid: He,
  iconsLeft: Oe,
  icon: Te,
  icon_left: je,
  icon_right: qe,
  icon_error: Ge,
  icon_success: Je,
  iconsRight: Ke,
  error: Qe,
  closeIcon: Ue,
  hidden: Xe,
  postfix: Ye
}, xe = {
  $style: Ze
}, rt = /* @__PURE__ */ he(we, [["__cssModules", xe]]);
export {
  rt as default
};
