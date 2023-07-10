import "./DataList.css";
import { defineComponent as N, mergeDefaults as M, toRefs as E, useSlots as U, computed as $, openBlock as s, createElementBlock as n, normalizeClass as l, unref as o, createVNode as I, Fragment as w, renderList as R, withDirectives as V, withKeys as _, withModifiers as y, renderSlot as d, createElementVNode as g, toDisplayString as j, createBlock as h, createCommentVNode as k, mergeProps as T, withCtx as z, createTextVNode as q } from "vue";
import G from "@smartmed/ui/Spinner";
import D from "@smartmed/ui/SvgIcon";
import H from "@smartmed/ui/VirtualList";
import { KeyboardFocusedDirective as L } from "@smartmed/utility/directives";
import { moveFocus as F } from "@smartmed/utility/dom/focus";
import { hasSlotContent as J } from "@smartmed/utility/vue";
import { _ as O } from "../_plugin-vue_export-helper-dad06003.mjs";
const Q = {
  size: "md",
  virtualProps: null,
  items: () => [],
  matcher: (p, v) => p === v,
  overflowy: !0
}, W = { key: 0 }, X = ["onKeydown", "onClick"], Y = ["onKeydown", "onClick"], Z = {
  name: "DataList"
}, x = /* @__PURE__ */ N({
  ...Z,
  props: M({
    modelValue: {},
    items: {},
    size: {},
    virtualListProps: {},
    matcher: { type: Function },
    overflowy: { type: Boolean }
  }, Q),
  emits: ["update:modelValue"],
  setup(p, { emit: v }) {
    const b = p, { items: m, size: i } = E(b), K = U(), S = $(() => m.value === null), C = $(() => i.value === "sm" ? "md" : "lg"), P = $(() => J(K.action)), A = (e, r) => {
      F(r, e, -1);
    }, B = (e, r) => {
      F(r, e, 1);
    }, u = (e) => {
      v("update:modelValue", e);
    }, c = (e, r) => b.matcher(e, r);
    return (e, r) => (s(), n("div", {
      class: l([e.$style.list, e.overflowy && e.$style.list_overflowy])
    }, [
      S.value ? (s(), n("div", {
        key: 0,
        class: l([e.$style.spinner, e.$style["item_" + o(i)]])
      }, [
        I(o(G), {
          theme: "primary",
          size: "md"
        })
      ], 2)) : (s(), n(w, { key: 1 }, [
        o(m) && o(m).length > 0 ? (s(), n(w, { key: 0 }, [
          e.virtualListProps ? (s(), h(o(H), T({ key: 1 }, e.virtualListProps, { items: o(m) }), {
            default: z(({ item: t }) => [
              V((s(), n("li", {
                tabindex: "0",
                class: l([
                  "smed-text_body-xl",
                  e.$style.item,
                  e.$style.item_hoverable,
                  e.$style["item_" + o(i)]
                ]),
                onKeydown: _(y((a) => u(t), ["stop", "prevent"]), ["enter"]),
                onClick: (a) => u(t)
              }, [
                d(e.$slots, "itemContent", {
                  item: t,
                  active: c(e.modelValue, t)
                }, () => [
                  g("span", null, j(t), 1),
                  c(e.modelValue, t) ? (s(), h(o(D), {
                    key: 0,
                    name: "check",
                    class: l(e.$style.icon),
                    size: C.value
                  }, null, 8, ["class", "size"])) : k("", !0)
                ])
              ], 42, Y)), [
                [o(L)]
              ])
            ]),
            after: z(() => [
              d(e.$slots, "action")
            ]),
            _: 3
          }, 16, ["items"])) : (s(), n("ul", W, [
            (s(!0), n(w, null, R(o(m), (t, a) => V((s(), n("li", {
              ref_for: !0,
              ref: "element",
              key: a,
              tabindex: "0",
              class: l([
                "smed-text_body-xl",
                e.$style.item,
                e.$style.item_hoverable,
                e.$style["item_" + o(i)]
              ]),
              onKeydown: [
                _(y((f) => A(e.$refs.element, a), ["prevent", "stop"]), ["up"]),
                _(y((f) => B(e.$refs.element, a), ["prevent", "stop"]), ["down"]),
                _(y((f) => u(t), ["stop", "prevent"]), ["enter"])
              ],
              onClick: (f) => u(t)
            }, [
              d(e.$slots, "itemContent", {
                item: t,
                active: c(e.modelValue, t)
              }, () => [
                g("span", null, j(t), 1),
                c(e.modelValue, t) ? (s(), h(o(D), {
                  key: 0,
                  name: "check",
                  class: l(e.$style.icon),
                  size: C.value
                }, null, 8, ["class", "size"])) : k("", !0)
              ])
            ], 42, X)), [
              [o(L)]
            ])), 128)),
            P.value ? (s(), n("li", {
              key: 0,
              class: l([
                "smed-text_body-xl",
                e.$style.item,
                e.$style.item_hoverable,
                e.$style["item_" + o(i)]
              ])
            }, [
              d(e.$slots, "action")
            ], 2)) : k("", !0)
          ]))
        ], 64)) : (s(), n("div", {
          key: 1,
          class: l([
            "smed-text_body-xl",
            e.$style.item,
            e.$style.item_notFound,
            e.$style["item_" + o(i)]
          ])
        }, [
          d(e.$slots, "emptyContent", {}, () => [
            q(" Ничего не найдено ")
          ])
        ], 2))
      ], 64))
    ], 2));
  }
}), ee = "_list_nwajm_1", te = "_list_overflowy_nwajm_7", oe = "_icon_nwajm_11", se = "_spinner_nwajm_16", ne = "_item_nwajm_20", le = "_item_notFound_nwajm_26", ie = "_item_hoverable_nwajm_30", re = "_item_sm_nwajm_33", me = "_item_md_nwajm_36", ae = "_item_lg_nwajm_39", de = {
  list: ee,
  list_overflowy: te,
  icon: oe,
  spinner: se,
  item: ne,
  item_notFound: le,
  item_hoverable: ie,
  item_sm: re,
  item_md: me,
  item_lg: ae
}, ue = {
  $style: de
}, ke = /* @__PURE__ */ O(x, [["__cssModules", ue]]);
export {
  ke as default
};
