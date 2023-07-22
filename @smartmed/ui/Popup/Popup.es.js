import "./Popup.css";
import { defineComponent as N, mergeDefaults as K, toRefs as L, inject as $, ref as m, provide as M, computed as R, watch as f, onBeforeUnmount as T, openBlock as i, createBlock as F, unref as t, withCtx as P, createVNode as C, Transition as I, withDirectives as U, createElementBlock as d, normalizeClass as l, createElementVNode as g, toDisplayString as A, createCommentVNode as r, renderSlot as j, withModifiers as w, withKeys as H } from "vue";
import W from "@smartmed/ui/Portal";
import q from "@smartmed/ui/SvgIcon";
import { POPUPS_HOST_TOKEN as G, IS_POPUP_MOBILE_TOKEN as J, SCROLLBAR_REF_TOKEN as Q } from "@smartmed/ui/tokens";
import { useOverscroll as X } from "@smartmed/ui/use";
import { EscDirective as Y, FocustrapDirective as Z } from "@smartmed/utility/directives";
import { _ as x } from "../_plugin-vue_export-helper-dad06003.mjs";
const ee = {
  modelValue: !1,
  size: "md",
  dismissible: !0,
  closable: !0,
  title: ""
}, oe = {
  name: "Popup"
}, te = /* @__PURE__ */ N({
  ...oe,
  props: K({
    modelValue: { type: Boolean },
    size: {},
    dismissible: { type: Boolean },
    closable: { type: Boolean },
    title: {}
  }, ee),
  emits: ["update:modelValue"],
  setup(E, { emit: O }) {
    const B = E, { modelValue: n, dismissible: y, size: v } = L(B), u = $(G), a = Symbol(), c = $(J, m(!1)), b = m(null), k = X("all", (e) => e);
    M(Q, k), u.value.registerPopup(a);
    const _ = m(n.value), S = R(() => v.value === "full"), p = () => {
      O("update:modelValue", !1);
    };
    f(
      n,
      (e) => {
        u.value.setOpen(a, e);
      },
      { immediate: !0 }
    ), T(() => {
      u.value.remove(a);
    });
    const V = (e, o, s) => {
      if (!y.value)
        return;
      const h = e.target;
      o && !o.contains(h) && s && !s.contains(h) && p();
    }, z = () => {
      y.value && p();
    }, D = () => {
      _.value = !1;
    };
    return f(
      n,
      (e) => {
        e && (_.value = e);
      },
      { immediate: !0 }
    ), f(
      b,
      (e) => {
        e && e.focus();
      },
      { immediate: !0 }
    ), (e, o) => _.value ? (i(), F(t(W), {
      key: 0,
      "append-to": "#smed_popups-host"
    }, {
      default: P(() => [
        C(I, {
          name: t(c) ? "smed-mobile-popup" : "fade",
          onAfterLeave: D
        }, {
          default: P(() => [
            t(n) ? U((i(), d("section", {
              key: 0,
              ref_key: "popupRef",
              ref: k,
              "aria-modal": "true",
              role: "dialog",
              class: l(e.$style.wrapper),
              onClick: o[2] || (o[2] = (s) => V(s, e.$refs.content, e.$refs.sticky))
            }, [
              g("div", {
                class: l([
                  e.$style.popup,
                  e.$style["popup_" + t(v)],
                  t(c) && e.$style.popup_mobile
                ])
              }, [
                g("div", {
                  ref_key: "content",
                  ref: b,
                  class: l([
                    e.$style.content,
                    t(c) && e.$style.content_mobile,
                    S.value && e.$style.content_full
                  ])
                }, [
                  e.title ? (i(), d("h5", {
                    key: 0,
                    class: l(e.$style.title)
                  }, A(e.title), 3)) : r("", !0),
                  j(e.$slots, "default", { close: p })
                ], 2),
                e.closable ? (i(), d("div", {
                  key: 0,
                  ref: "sticky",
                  class: l(e.$style.sticky)
                }, [
                  C(t(q), {
                    tabindex: "0",
                    name: "close-black",
                    size: "xl",
                    class: l(e.$style.close),
                    onClick: o[0] || (o[0] = w((s) => p(), ["prevent"])),
                    onKeydown: o[1] || (o[1] = H(w((s) => p(), ["stop", "prevent"]), ["enter"]))
                  }, null, 8, ["class"])
                ], 2)) : r("", !0)
              ], 2)
            ], 2)), [
              [t(Y), { onEvent: z }],
              [t(Z)]
            ]) : r("", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    })) : r("", !0);
  }
}), se = "_wrapper_134hf_1", le = "_popup_134hf_15", pe = "_popup_sm_134hf_24", ne = "_popup_md_134hf_27", ie = "_popup_lg_134hf_30", re = "_popup_full_134hf_33", ue = "_popup_mobile_134hf_40", ae = "_content_134hf_59", ce = "_content_full_134hf_64", _e = "_content_mobile_134hf_70", me = "_sticky_134hf_74", fe = "_close_134hf_81", de = "_title_134hf_94", ye = {
  wrapper: se,
  popup: le,
  popup_sm: pe,
  popup_md: ne,
  popup_lg: ie,
  popup_full: re,
  popup_mobile: ue,
  content: ae,
  content_full: ce,
  content_mobile: _e,
  sticky: me,
  close: fe,
  title: de
}, ve = {
  $style: ye
}, Oe = /* @__PURE__ */ x(te, [["__cssModules", ve]]);
export {
  Oe as default
};
