import "./BaseInput.css";
import { defineComponent as re, mergeDefaults as de, toRefs as pe, ref as L, useSlots as ce, computed as s, openBlock as a, createElementBlock as l, normalizeClass as o, unref as t, withModifiers as N, renderSlot as u, createTextVNode as F, toDisplayString as j, createCommentVNode as i, createElementVNode as _, normalizeStyle as W, createBlock as A } from "vue";
import H from "@smartmed/ui/SvgIcon";
import { useInteractive as ue, useControlInvalid as _e, useControlDisabled as ye, useModelModifiers as ve } from "@smartmed/ui/use";
import { useMaskito as me } from "@smartmed/utility/maskito";
import { hasSlotContent as y } from "@smartmed/utility/vue";
import { B as fe } from "../BaseInput.props-d8343137.mjs";
import { _ as je } from "../_plugin-vue_export-helper-dad06003.mjs";
const he = ["for"], be = ["id", "data-automation-id", "type", "autocomplete", "name", "placeholder", "disabled", "inputmode", "readonly", "value"], ze = {
  name: "BaseInput"
}, $e = /* @__PURE__ */ re({
  ...ze,
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
  setup(O, { expose: T, emit: w }) {
    const q = O, {
      modelValue: v,
      modelModifiers: G,
      editable: r,
      isSuccess: k,
      hasCleaner: C,
      size: S,
      id: J,
      isError: K,
      disabled: Q,
      pseudoFocused: I,
      maskOptions: U,
      label: h,
      description: b,
      readonly: m
    } = pe(q), B = L(null), E = L(null), d = ce(), p = ue(), R = _e(K), c = ye(Q), X = ve(G.value), Y = me(U), V = p.focus, Z = p.blur, x = s(() => C.value && !m.value && !c.value && f.value), z = s(
      () => p.focused.value || I.value && I.value
    ), f = s(
      () => !!v.value && String(v.value).length > 0
    ), $ = s(() => S.value === "sm" ? "md" : "lg"), ee = s(
      () => y(d.valueContent)
    ), te = s(
      () => !!h && !!h.value || y(d.label)
    ), oe = s(
      () => !!b && !!b.value || y(d.description)
    ), P = s(() => {
      const e = f.value && ee.value, n = !r.value && e, g = r.value && !z.value && e;
      return n || g;
    }), M = s(() => J.value || p.id), D = s(() => y(d.right)), se = s(() => y(d.left)), ae = s(() => k.value || f.value && C.value || D.value), ne = (e) => {
      const g = e.target.value;
      w("update:modelValue", X.modify(g));
    }, ie = () => {
      w("search-clear"), V();
    }, le = (e) => {
      const n = e;
      E.value = n, Y.value = n, p.native.value = n;
    };
    return T({
      focus: V,
      blur: Z,
      native: E,
      wrapper: B,
      focused: z
    }), (e, n) => (a(), l("label", {
      class: o([e.$style.input, t(m) && e.$style.input_readonly]),
      for: M.value
    }, [
      te.value ? (a(), l("span", {
        key: 0,
        "data-automation-id": "smed-base-input-label",
        class: o([e.$style.inline, "smed-text_body-sm smed-space_bottom-1"]),
        onClick: n[0] || (n[0] = N(() => {
        }, ["stop"]))
      }, [
        u(e.$slots, "label", {}, () => [
          F(j(t(h)), 1)
        ])
      ], 2)) : i("", !0),
      _("div", {
        ref_key: "wrapperRef",
        ref: B,
        class: o([
          e.$style.wrapper,
          e.$style["wrapper_" + t(S)],
          t(R) && e.$style.wrapper_error,
          t(c) && e.$style.wrapper_disabled,
          z.value && e.$style.focus
        ])
      }, [
        se.value ? (a(), l("div", {
          key: 0,
          "data-automation-id": "smed-base-input-left-icon",
          class: o([e.$style.icon, e.$style.iconsLeft, e.$style.icon_left])
        }, [
          u(e.$slots, "left", { size: $.value })
        ], 2)) : i("", !0),
        _("div", {
          class: o(e.$style.nativeWrapper)
        }, [
          _("input", {
            id: M.value,
            ref: le,
            "data-automation-id": e.dataAutomationId,
            class: o([
              e.$style.native,
              !t(r) && e.$style.native_notEditable,
              P.value && e.$style.native_hidden,
              t(c) && e.$style.native_disabled
            ]),
            style: W(e.inputStyles),
            type: e.type,
            autocomplete: e.autocomplete,
            name: e.name,
            placeholder: e.placeholder,
            disabled: t(c) || t(m),
            inputmode: e.inputmode,
            readonly: t(c) || t(m) || !t(r),
            value: e.stringify(t(v)),
            onInput: ne
          }, null, 46, be),
          e.decoratorPostfix && f.value ? (a(), l("span", {
            key: 0,
            class: o([e.$style.decorator, e.decoratorPostfixColorClass])
          }, [
            _("span", {
              class: o(e.$style.hidden)
            }, j(e.stringify(t(v))), 3),
            _("span", {
              class: o(e.$style.postfix)
            }, j(e.decoratorPostfix), 3)
          ], 2)) : i("", !0),
          P.value ? (a(), l("div", {
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
          style: W(e.rightSlotPadding && { padding: e.rightSlotPadding })
        }, [
          t(k) ? (a(), A(t(H), {
            key: 0,
            "data-automation-id": "smed-base-input-success-icon",
            name: "check-filled",
            class: o([e.$style.icon, e.$style.icon_success, e.$style.icon_right]),
            size: $.value
          }, null, 8, ["class", "size"])) : i("", !0),
          x.value ? (a(), A(t(H), {
            key: 1,
            "data-automation-id": "smed-base-input-cleaner-icon",
            name: "close",
            class: o([e.$style.closeIcon, e.$style.icon, e.$style.icon_right]),
            size: $.value,
            onClick: N(ie, ["stop", "prevent"])
          }, null, 8, ["class", "size", "onClick"])) : i("", !0),
          D.value ? (a(), l("div", {
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
          t(R) && e.$style.inline_invalid
        ])
      }, [
        u(e.$slots, "description", {}, () => [
          F(j(t(b)), 1)
        ])
      ], 2)) : i("", !0)
    ], 10, he));
  }
}), ge = "_input_1yjjz_1", we = "_input_readonly_1yjjz_5", ke = "_wrapper_1yjjz_9", Ce = "_wrapper_sm_1yjjz_19", Se = "_native_1yjjz_24", Ie = "_decorator_1yjjz_25", Be = "_wrapper_md_1yjjz_28", Ee = "_wrapper_lg_1yjjz_38", Re = "_focus_1yjjz_51", Ve = "_wrapper_error_1yjjz_54", Pe = "_wrapper_disabled_1yjjz_60", Me = "_nativeWrapper_1yjjz_65", De = "_native_template_1yjjz_107", Le = "_native_hidden_1yjjz_113", Ne = "_native_notEditable_1yjjz_119", Fe = "_native_disabled_1yjjz_122", We = "_inline_1yjjz_126", Ae = "_inline_invalid_1yjjz_132", He = "_iconsLeft_1yjjz_136", Oe = "_icon_1yjjz_136", Te = "_icon_left_1yjjz_154", qe = "_icon_right_1yjjz_157", Ge = "_icon_error_1yjjz_163", Je = "_icon_success_1yjjz_166", Ke = "_iconsRight_1yjjz_170", Qe = "_error_1yjjz_187", Ue = "_closeIcon_1yjjz_191", Xe = "_hidden_1yjjz_207", Ye = "_postfix_1yjjz_211", Ze = {
  input: ge,
  input_readonly: we,
  wrapper: ke,
  wrapper_sm: Ce,
  native: Se,
  decorator: Ie,
  wrapper_md: Be,
  wrapper_lg: Ee,
  focus: Re,
  wrapper_error: Ve,
  wrapper_disabled: Pe,
  nativeWrapper: Me,
  native_template: De,
  native_hidden: Le,
  native_notEditable: Ne,
  native_disabled: Fe,
  inline: We,
  inline_invalid: Ae,
  iconsLeft: He,
  icon: Oe,
  icon_left: Te,
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
}, rt = /* @__PURE__ */ je($e, [["__cssModules", xe]]);
export {
  rt as default
};
