import "./BaseButton.css";
import { defineComponent as V, mergeDefaults as E, toRefs as I, ref as f, useSlots as F, useCssModule as K, computed as a, withDirectives as P, openBlock as _, createElementBlock as r, normalizeClass as i, unref as n, renderSlot as h, createVNode as R, createCommentVNode as c, createTextVNode as T, toDisplayString as j, createBlock as q } from "vue";
import B from "@smartmed/ui/SvgIcon";
import { KeyboardFocusedDirective as x, HoveredDirective as A } from "@smartmed/utility/directives";
import { hasSlotContent as $ } from "@smartmed/utility/vue";
import { _ as G } from "../_plugin-vue_export-helper-dad06003.mjs";
const J = {
  color: "primary",
  disabled: !1,
  size: "md",
  type: "button",
  icon: "",
  isLoading: !1,
  wide: !1,
  pseudoHovered: !1,
  rounded: !1,
  title: ""
}, Q = ["type", "disabled", "tabindex"], U = {
  name: "BaseButton"
}, W = /* @__PURE__ */ V({
  ...U,
  props: E({
    title: {},
    color: {},
    disabled: { type: Boolean },
    size: {},
    type: {},
    isLoading: { type: Boolean },
    wide: { type: Boolean },
    icon: {},
    pseudoHovered: { type: Boolean },
    rounded: { type: Boolean }
  }, J),
  setup(C, { expose: O }) {
    const w = C, {
      color: o,
      size: s,
      wide: k,
      isLoading: d,
      disabled: l,
      pseudoHovered: D,
      icon: m,
      title: u,
      rounded: H
    } = I(w), v = f(null), y = f(!1), g = F(), e = K(), S = a(() => {
      const t = l.value ? `${e.native_disabled} ${e[`native_${o.value}_disabled`]}` : "", b = M.value ? `${e[`native_${o.value}_hovered`]}` : "";
      return [
        e.native,
        e[`native_${o.value}`],
        e[`native_${s.value}`],
        k.value && e.native_wide,
        d.value && e.native_loading,
        !p.value && [
          e.native_icon,
          e[`native_${s.value}_icon`]
        ],
        t,
        b,
        H.value && e.native_rounded
      ].filter(Boolean);
    }), L = a(() => m.value || $(g.icon)), p = a(
      () => !!u.value || $(g.default)
    ), M = a(() => D.value || y.value), z = a(() => s.value === "sm" ? "sm" : "lg"), N = (t) => {
      y.value = t;
    };
    return O({
      blur: () => {
        v.value && v.value.blur();
      }
    }), (t, b) => P((_(), r("button", {
      ref_key: "native",
      ref: v,
      type: t.type,
      class: i(S.value),
      disabled: n(l),
      tabindex: n(l) || n(d) ? "-1" : "0"
    }, [
      L.value ? (_(), r("div", {
        key: 0,
        class: i([t.$style.icon, t.$style.element])
      }, [
        h(t.$slots, "icon", {}, () => [
          R(n(B), {
            name: n(m),
            size: z.value
          }, null, 8, ["name", "size"])
        ])
      ], 2)) : c("", !0),
      p.value ? (_(), r("span", {
        key: 1,
        class: i(t.$style.element)
      }, [
        h(t.$slots, "default", {}, () => [
          T(j(n(u)), 1)
        ])
      ], 2)) : c("", !0),
      n(d) ? (_(), q(n(B), {
        key: 2,
        name: "spinner",
        class: i(t.$style.spinner),
        size: z.value
      }, null, 8, ["class", "size"])) : c("", !0)
    ], 10, Q)), [
      [n(x)],
      [n(A), { onEvent: N }]
    ]);
  }
}), X = "_native_amzgt_1", Y = "_native_loading_amzgt_19", Z = "_spinner_amzgt_22", ee = "_native_disabled_amzgt_25", te = "_native_primary_amzgt_29", ne = "_native_primary_hovered_amzgt_33", ae = "_native_primary_disabled_amzgt_33", _e = "_native_secondary_amzgt_42", ie = "_native_secondary_hovered_amzgt_46", oe = "_native_secondary_disabled_amzgt_46", se = "_native_outlined_amzgt_56", de = "_native_outlined_hovered_amzgt_60", le = "_native_outlined_disabled_amzgt_60", ve = "_native_secondaryOutlined_amzgt_70", re = "_native_secondaryOutlined_hovered_amzgt_74", ce = "_native_secondaryOutlined_disabled_amzgt_74", me = "_native_grey_amzgt_83", ue = "_native_grey_hovered_amzgt_87", ye = "_native_grey_disabled_amzgt_87", ge = "_native_delete_amzgt_96", pe = "_native_delete_hovered_amzgt_100", ze = "_native_delete_disabled_amzgt_100", be = "_native_wide_amzgt_109", fe = "_native_sm_amzgt_115", he = "_native_sm_icon_amzgt_121", Be = "_native_md_amzgt_124", $e = "_native_md_icon_amzgt_130", Ce = "_native_lg_amzgt_133", Oe = "_native_lg_icon_amzgt_139", we = "_native_rounded_amzgt_142", ke = "_native_icon_amzgt_145", De = "_icon_amzgt_149", He = "_element_amzgt_154", Se = {
  native: X,
  native_loading: Y,
  spinner: Z,
  native_disabled: ee,
  native_primary: te,
  native_primary_hovered: ne,
  native_primary_disabled: ae,
  native_secondary: _e,
  native_secondary_hovered: ie,
  native_secondary_disabled: oe,
  native_outlined: se,
  native_outlined_hovered: de,
  native_outlined_disabled: le,
  native_secondaryOutlined: ve,
  native_secondaryOutlined_hovered: re,
  native_secondaryOutlined_disabled: ce,
  native_grey: me,
  native_grey_hovered: ue,
  native_grey_disabled: ye,
  native_delete: ge,
  native_delete_hovered: pe,
  native_delete_disabled: ze,
  native_wide: be,
  native_sm: fe,
  native_sm_icon: he,
  native_md: Be,
  native_md_icon: $e,
  native_lg: Ce,
  native_lg_icon: Oe,
  native_rounded: we,
  native_icon: ke,
  icon: De,
  element: He
}, Le = {
  $style: Se
}, Pe = /* @__PURE__ */ G(W, [["__cssModules", Le]]);
export {
  Pe as default
};
