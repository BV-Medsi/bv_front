import "./InputCode.css";
import { defineComponent as w, ref as h, withDirectives as N, openBlock as c, createElementBlock as b, normalizeClass as m, withKeys as F, unref as I, toRefs as E, computed as P, onBeforeUnmount as L, watch as V, toDisplayString as z, createElementVNode as g, createBlock as T, createCommentVNode as M, mergeDefaults as R, renderSlot as U, Fragment as A, renderList as j, createVNode as K, withCtx as H } from "vue";
import q from "@smartmed/ui/TransitionExpand";
import { HoveredDirective as G } from "@smartmed/utility/directives";
import { setNativeFocused as J } from "@smartmed/utility/dom/focus";
import { useMaskito as Q } from "@smartmed/utility/maskito";
import { _ as S } from "../_plugin-vue_export-helper-dad06003.mjs";
import W from "@smartmed/ui/SvgIcon";
const X = {
  length: 6,
  size: "md",
  resendTimeoutSeconds: 30,
  isLoading: !1
}, Y = ["tabindex", "value", "disabled", "onKeydown"], Z = /* @__PURE__ */ w({
  __name: "InputCodeCell",
  props: {
    modelValue: {},
    size: {},
    tabindex: {},
    invalid: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "onFocus", "onBackspace", "onPaste"],
  setup(k, { expose: p, emit: a }) {
    const s = Q({
      mask: /\d/
    }), d = h(!1), r = h(!1), i = (n) => {
      const e = n.target.value;
      e.length > 1 ? a("onPaste", e) : a("update:modelValue", e ? Number(e) : null);
    }, _ = () => {
      r.value = !0, a("onFocus");
    }, $ = () => {
      r.value = !1;
    }, v = () => a("onBackspace"), f = (n) => {
      var t;
      n.preventDefault(), n.stopPropagation();
      const y = (t = n.clipboardData) == null ? void 0 : t.getData("text"), e = y ? y.replace(/\D/g, "") : null;
      a("onPaste", e);
    }, u = () => {
      const n = s.value;
      n && J(n);
    }, C = (n) => {
      d.value = n;
    };
    return p({
      focus: u
    }), (n, y) => N((c(), b("input", {
      ref_key: "nativeRef",
      ref: s,
      type: "text",
      inputmode: "numeric",
      "data-automation-id": "smed-input-code-cell",
      tabindex: n.disabled ? "-1" : n.tabindex,
      value: n.modelValue,
      disabled: n.disabled,
      class: m([
        n.$style.native,
        n.$style["native_" + n.size],
        r.value && n.$style.native_focused,
        d.value && n.$style.native_hovered,
        n.invalid && n.$style.native_invalid,
        n.disabled && n.$style.native_disabled
      ]),
      onPaste: f,
      onInput: i,
      onFocus: _,
      onBlur: $,
      onKeydown: F(v, ["backspace"])
    }, null, 42, Y)), [
      [I(G), { onEvent: C }]
    ]);
  }
}), x = "_native_1fely_1", ee = "_native_sm_1fely_32", ne = "_native_md_1fely_40", se = "_native_hovered_1fely_48", te = "_native_focused_1fely_51", oe = "_native_invalid_1fely_54", le = "_native_disabled_1fely_57", ae = {
  native: x,
  native_sm: ee,
  native_md: ne,
  native_hovered: se,
  native_focused: te,
  native_invalid: oe,
  native_disabled: le
}, ie = {
  $style: ae
}, de = /* @__PURE__ */ S(Z, [["__cssModules", ie]]), re = ["onKeydown"], ue = 1e3, ce = /* @__PURE__ */ w({
  __name: "Resend",
  props: {
    resendTimeoutSeconds: {},
    isLoading: { type: Boolean }
  },
  emits: ["resendCode"],
  setup(k, { emit: p }) {
    const a = k, { resendTimeoutSeconds: s, isLoading: d } = E(a), r = h(null), i = h(s.value), _ = P(() => i.value !== 0), $ = () => {
      i.value = s.value, r.value = setInterval(() => {
        i.value = i.value - 1, _.value || v();
      }, ue);
    }, v = () => {
      r.value && clearInterval(r.value);
    };
    L(() => {
      v();
    }), V(
      s,
      () => {
        v(), $();
      },
      { immediate: !0 }
    );
    const f = () => {
      d.value || p("resendCode");
    };
    return (u, C) => (c(), b("div", {
      class: m(u.$style.root)
    }, [
      _.value ? (c(), b("span", {
        key: 0,
        "data-automation-id": "smed-resend-timer",
        class: m(u.$style.timer)
      }, "Выслать код повторно (" + z(i.value) + " сек)", 3)) : (c(), b("span", {
        key: 1,
        class: m([u.$style.timer, u.$style.timer_clickable])
      }, [
        g("span", {
          "data-automation-id": "smed-resend-link",
          tabindex: "0",
          onKeydown: F(f, ["enter"]),
          onClick: f
        }, "Выслать код повторно ", 40, re),
        I(d) ? (c(), T(I(W), {
          key: 0,
          "data-automation-id": "smed-resend-code-spinner",
          name: "spinner",
          size: "sm",
          class: m([u.$style.spinner, "smed-space_left-1"])
        }, null, 8, ["class"])) : M("", !0)
      ], 2))
    ], 2));
  }
}), me = "_root_8im9e_1", ve = "_timer_8im9e_5", pe = "_timer_clickable_8im9e_12", _e = "_spinner_8im9e_20", fe = {
  root: me,
  timer: ve,
  timer_clickable: pe,
  spinner: _e
}, ye = {
  $style: fe
}, be = /* @__PURE__ */ S(ce, [["__cssModules", ye]]), ge = /* @__PURE__ */ g("p", { class: "smed-text_body-sm" }, " На введенный номер выслан СМС с кодом. ", -1), he = /* @__PURE__ */ g("p", { class: "smed-text_body-sm smed-space_bottom-4" }, " Пожалуйста, введите его в поле ниже. ", -1), $e = /* @__PURE__ */ w({
  name: "InputCode",
  __name: "InputCode",
  props: R({
    length: {},
    size: {},
    disabled: { type: Boolean },
    invalidText: {},
    resendTimeoutSeconds: {},
    isLoading: { type: Boolean }
  }, X),
  emits: ["submitCode", "resendCode"],
  setup(k, { emit: p }) {
    const a = k, s = h(
      new Array(a.length).fill("_").map(() => null)
    ), d = h([]), r = () => s.value.findIndex((e) => e === null), i = () => {
      const e = r(), t = d.value;
      if (e !== -1 && t[e]) {
        t[e].focus();
        return;
      }
      const o = d.value[d.value.length - 1];
      e === -1 && o && o.focus();
    }, _ = (e, t) => {
      s.value = new Array(a.length).fill("_").map((o, l) => s.value[l] !== null && l !== e ? s.value[l] : l === e ? t : null), i();
    }, $ = () => {
      i();
    }, v = (e) => {
      s.value[e] === null && (s.value = new Array(a.length).fill("_").map((o, l) => l >= e - 1 ? null : s.value[l]), i());
    }, f = (e) => {
      const t = e - 1, o = s.value;
      return e === o.length - 1 ? o[t] !== null || o[e] !== null ? "0" : "-1" : e === 0 ? o[e] === null ? "0" : "-1" : o[t] !== null && o[e] === null ? "0" : "-1";
    }, u = () => {
      s.value = s.value.map((e) => null), i();
    }, C = () => {
      u(), p("resendCode");
    }, n = (e) => {
      const t = e.slice(0, a.length);
      if (t) {
        if (t.length === a.length)
          s.value = new Array(a.length).fill("").map((o, l) => Number(t[l]));
        else {
          let o = 0;
          s.value = new Array(a.length).fill("").map((l, B) => {
            const O = t[o], D = s.value[B];
            return D === null && O ? (o += 1, Number(O)) : D;
          });
        }
        i();
      }
    }, y = (e) => {
      e && n(e);
    };
    return V(s, (e) => {
      e.every((o) => o !== null) && p("submitCode", e.join(""));
    }), (e, t) => (c(), b("div", null, [
      U(e.$slots, "label", {}, () => [
        ge,
        he,
        g("p", {
          class: m(["smed-text_body-sm smed-space_bottom-2", e.$style.label])
        }, " Код из СМС ", 2)
      ]),
      g("div", {
        class: m(e.$style.root)
      }, [
        (c(!0), b(A, null, j(e.length, (o, l) => (c(), T(de, {
          ref_for: !0,
          ref_key: "cells",
          ref: d,
          key: l,
          tabindex: f(l),
          "model-value": s.value[l],
          class: m(e.$style.code),
          size: e.size,
          disabled: e.disabled,
          invalid: !!e.invalidText,
          "onUpdate:modelValue": (B) => _(l, B),
          onOnFocus: $,
          onOnBackspace: (B) => v(l),
          onOnPaste: y
        }, null, 8, ["tabindex", "model-value", "class", "size", "disabled", "invalid", "onUpdate:modelValue", "onOnBackspace"]))), 128))
      ], 2),
      K(I(q), {
        style: { display: "flex" },
        opened: !!e.invalidText
      }, {
        default: H(() => [
          g("p", {
            class: m([e.$style.error, "smed-text_caption smed-space_top-2"])
          }, z(e.invalidText), 3)
        ]),
        _: 1
      }, 8, ["opened"]),
      e.disabled ? M("", !0) : (c(), T(be, {
        key: 0,
        class: "smed-space_top-2",
        "is-loading": e.isLoading,
        "resend-timeout-seconds": e.resendTimeoutSeconds,
        onResendCode: C
      }, null, 8, ["is-loading", "resend-timeout-seconds"]))
    ]));
  }
}), ke = "_root_tjp1l_1", Ce = "_label_tjp1l_5", Be = "_code_tjp1l_9", Ie = "_error_tjp1l_13", Te = {
  root: ke,
  label: Ce,
  code: Be,
  error: Ie
}, we = {
  $style: Te
}, Ee = /* @__PURE__ */ S($e, [["__cssModules", we]]);
export {
  Ee as default
};
