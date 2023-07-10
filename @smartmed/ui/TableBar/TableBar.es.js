import "./TableBar.css";
import { defineComponent as z, mergeDefaults as U, toRefs as W, computed as j, ref as T, inject as k, onBeforeUnmount as G, watch as m, openBlock as b, createBlock as Z, unref as t, withCtx as f, createVNode as v, Transition as q, withDirectives as w, createElementBlock as O, normalizeClass as n, createElementVNode as A, renderSlot as J, createCommentVNode as p } from "vue";
import Q from "@smartmed/ui/Portal";
import X from "@smartmed/ui/Scrollbar";
import Y from "@smartmed/ui/SvgIcon";
import { TABLE_BAR_HOST_TOKEN as ee, ANIMATION_FRAME_EVENTS_TOKEN as te } from "@smartmed/ui/tokens";
import { useOverscroll as oe } from "@smartmed/ui/use";
import { KeyboardFocusedDirective as se, EscDirective as ae, FocustrapDirective as le } from "@smartmed/utility/directives";
import { useThrottleFn as ne } from "@smartmed/utility/functions";
import { _ as re } from "../_plugin-vue_export-helper-dad06003.mjs";
const ce = {
  direction: "bottom"
}, ie = ["data-automation-id"], de = {
  name: "TableBar"
}, _e = /* @__PURE__ */ z({
  ...de,
  props: U({
    modelValue: { type: Boolean },
    direction: {},
    overlay: { type: Boolean },
    rootClass: {},
    contentClass: {},
    dataAutomationId: {},
    closeButton: { type: Boolean }
  }, ce),
  emits: ["update:modelValue"],
  setup(N, { emit: $ }) {
    const B = N, r = 12, c = 72, { modelValue: s, overlay: o, direction: l } = W(B), I = j(() => o.value ? "all" : "none"), i = oe(I, (e) => e), u = T(s.value), g = T(!1), a = k(ee), R = k(te), d = () => {
      $("update:modelValue", !1);
    }, V = () => {
      o.value && d();
    }, h = (e) => {
      if (!i.value)
        return;
      const _ = e.target;
      !i.value.contains(_) && d();
    }, S = () => {
      document.addEventListener("click", h);
    }, y = () => {
      document.removeEventListener("click", h);
    }, x = () => {
      var C;
      const e = (C = i.value) == null ? void 0 : C.getBoundingClientRect();
      if (!e)
        return !1;
      const _ = l.value, { left: E, right: M, top: L, bottom: P } = e, H = window.innerWidth, K = window.innerHeight;
      switch (_) {
        case "left":
          return H - M - c - r < 0;
        case "right":
          return E - c - r < 0;
        case "top":
          return K - P - c - r < 0;
        default:
          return L - c - r < 0;
      }
    };
    G(() => {
      y(), o.value && a && a.value.hideOverlay();
    }), m(s, (e) => {
      e && o.value ? (a && a.value.showOverlay(), setTimeout(() => S())) : !e && o.value && (a && a.value.hideOverlay(), y());
    }), m(
      s,
      (e) => {
        e && (u.value = e);
      },
      { immediate: !0 }
    );
    const D = ne(() => {
      if (!s.value)
        return;
      const e = x();
      g.value = e;
    }, 300);
    B.closeButton && m(R, D, { immediate: !0 });
    const F = () => {
      u.value = !1;
    };
    return (e, _) => u.value ? (b(), Z(t(Q), {
      key: 0,
      "append-to": t(o) ? "#smed_table-bar-overlayable" : "#smed_table-bars"
    }, {
      default: f(() => [
        v(q, {
          appear: "",
          name: "smed-table-bar_" + t(l),
          onAfterLeave: F
        }, {
          default: f(() => [
            t(s) ? w((b(), O("section", {
              key: 0,
              ref_key: "tableBarRef",
              ref: i,
              "data-automation-id": e.dataAutomationId || "smed-table-bar",
              class: n([
                "smed-table-bar",
                `smed-table-bar_${t(l)}`,
                e.$style.tableBar,
                e.$style["tableBar_" + t(l)],
                e.rootClass
              ])
            }, [
              A("div", {
                class: n(["smed-table-bar__content", e.$style.content])
              }, [
                v(t(X), {
                  class: n(e.$style.scrollbar)
                }, {
                  default: f(() => [
                    A("div", {
                      class: n(e.contentClass)
                    }, [
                      J(e.$slots, "default", { close: d })
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["class"]),
                e.closeButton && t(s) ? w((b(), O("button", {
                  key: 0,
                  "data-automation-id": "smed-table-bar-close-button",
                  class: n([
                    e.$style.close,
                    e.$style["close_" + t(l)],
                    g.value && e.$style.close_inside
                  ]),
                  onClick: d
                }, [
                  v(t(Y), {
                    name: "close",
                    size: "xl"
                  })
                ], 2)), [
                  [t(se)]
                ]) : p("", !0)
              ], 2)
            ], 10, ie)), [
              [t(ae), { onEvent: V }],
              [t(le), { handle: t(o) }]
            ]) : p("", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["append-to"])) : p("", !0);
  }
}), ue = "_tableBar_1gxvd_1", me = "_tableBar_bottom_1gxvd_9", be = "_tableBar_top_1gxvd_13", fe = "_tableBar_left_1gxvd_17", ve = "_tableBar_right_1gxvd_22", pe = "_content_1gxvd_28", Be = "_scrollbar_1gxvd_34", ge = "_close_1gxvd_38", he = "_close_left_1gxvd_83", ye = "_close_right_1gxvd_89", Ee = "_close_bottom_1gxvd_95", Ce = "_close_top_1gxvd_101", Te = "_close_inside_1gxvd_107", ke = {
  tableBar: ue,
  tableBar_bottom: me,
  tableBar_top: be,
  tableBar_left: fe,
  tableBar_right: ve,
  content: pe,
  scrollbar: Be,
  close: ge,
  close_left: he,
  close_right: ye,
  close_bottom: Ee,
  close_top: Ce,
  close_inside: Te
}, we = {
  $style: ke
}, Fe = /* @__PURE__ */ re(_e, [["__cssModules", we]]);
export {
  Fe as default
};
