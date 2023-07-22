import "./DataList.css";
import { defineComponent as B, mergeDefaults as M, toRefs as N, useSlots as I, ref as O, computed as p, openBlock as n, createElementBlock as i, normalizeClass as a, withKeys as w, withModifiers as $, unref as t, createVNode as E, Fragment as b, renderSlot as c, renderList as K, createBlock as u, withCtx as y, createElementVNode as C, toDisplayString as q, createCommentVNode as V, createTextVNode as P } from "vue";
import f from "@smartmed/ui/DataListItem";
import R from "@smartmed/ui/Spinner";
import T from "@smartmed/ui/SvgIcon";
import { moveFocus as U } from "@smartmed/utility/dom";
import { hasSlotContent as j } from "@smartmed/utility/vue";
import { _ as G } from "../_plugin-vue_export-helper-dad06003.mjs";
const H = {
  size: "md",
  items: () => [],
  matcher: (_, d) => _ === d,
  overflowy: !0
}, J = { style: { color: "var(--smed-base-03)" } }, Q = /* @__PURE__ */ B({
  name: "DataList",
  __name: "DataList",
  props: M({
    modelValue: {},
    items: {},
    size: {},
    matcher: { type: Function },
    overflowy: { type: Boolean }
  }, H),
  emits: ["update:modelValue"],
  setup(_, { emit: d }) {
    const g = _, { items: r, size: l } = N(g), D = I(), h = O(null), L = p(() => r.value === null), S = p(() => l.value === "sm" ? "md" : "lg"), F = p(() => j(D.action)), A = () => {
      const e = h.value, s = (e == null ? void 0 : e.querySelectorAll('[data-smed-data-list-item=""]')) || [];
      return Array.from(s);
    }, k = (e, s) => {
      const o = e.target, m = A();
      U(m.indexOf(o), m, s);
    }, z = (e) => {
      d("update:modelValue", e);
    }, v = (e, s) => g.matcher(e, s);
    return (e, s) => (n(), i("div", {
      ref_key: "root",
      ref: h,
      class: a([e.$style.list, e.overflowy && e.$style.list_overflowy]),
      onKeydown: [
        s[0] || (s[0] = w($((o) => k(o, -1), ["prevent"]), ["up"])),
        s[1] || (s[1] = w($((o) => k(o, 1), ["prevent"]), ["down"]))
      ]
    }, [
      L.value ? (n(), i("div", {
        key: 0,
        class: a([e.$style.spinner, e.$style["item_" + t(l)]])
      }, [
        E(t(R), {
          theme: "primary",
          size: "md"
        })
      ], 2)) : (n(), i(b, { key: 1 }, [
        t(r) && t(r).length > 0 ? (n(), i("div", {
          key: 0,
          class: a(e.$style.buttons)
        }, [
          c(e.$slots, "list", {
            onUpdate: z,
            getIsActive: v.bind(null, e.modelValue)
          }, () => [
            (n(!0), i(b, null, K(t(r), (o, m) => (n(), u(t(f), {
              key: m,
              size: t(l),
              onOnClick: (me) => z(o)
            }, {
              default: y(() => [
                c(e.$slots, "itemContent", {
                  item: o,
                  active: v(e.modelValue, o)
                }, () => [
                  C("span", null, q(o), 1),
                  v(e.modelValue, o) ? (n(), u(t(T), {
                    key: 0,
                    name: "check",
                    class: a(e.$style.icon),
                    size: S.value
                  }, null, 8, ["class", "size"])) : V("", !0)
                ])
              ]),
              _: 2
            }, 1032, ["size", "onOnClick"]))), 128))
          ]),
          F.value ? (n(), u(t(f), {
            key: 0,
            size: t(l)
          }, {
            default: y(() => [
              c(e.$slots, "action")
            ]),
            _: 3
          }, 8, ["size"])) : V("", !0)
        ], 2)) : (n(), u(t(f), {
          key: 1,
          hoverable: !1,
          size: t(l)
        }, {
          default: y(() => [
            C("span", J, [
              c(e.$slots, "emptyContent", {}, () => [
                P(" Ничего не найдено ")
              ])
            ])
          ]),
          _: 3
        }, 8, ["size"]))
      ], 64))
    ], 34));
  }
}), W = "_list_1v99m_1", X = "_list_overflowy_1v99m_7", Y = "_icon_1v99m_11", Z = "_spinner_1v99m_16", x = "_buttons_1v99m_20", ee = "_item_1v99m_25", te = "_item_notFound_1v99m_31", oe = "_item_hoverable_1v99m_35", se = "_item_sm_1v99m_38", ne = "_item_md_1v99m_41", le = "_item_lg_1v99m_44", ie = {
  list: W,
  list_overflowy: X,
  icon: Y,
  spinner: Z,
  buttons: x,
  item: ee,
  item_notFound: te,
  item_hoverable: oe,
  item_sm: se,
  item_md: ne,
  item_lg: le
}, re = {
  $style: ie
}, fe = /* @__PURE__ */ G(Q, [["__cssModules", re]]);
export {
  fe as default
};
