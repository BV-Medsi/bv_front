import "./Chips.css";
import { defineComponent as k, mergeDefaults as g, toRefs as R, ref as V, watch as z, openBlock as m, createElementBlock as _, normalizeClass as B, Fragment as F, renderList as P, unref as r, createBlock as S, withCtx as w, renderSlot as A, createTextVNode as D, toDisplayString as H } from "vue";
import q from "@smartmed/ui/ChipsItem";
import { getUniqElementId as E } from "@smartmed/utility/strings";
import { _ as M } from "../_plugin-vue_export-helper-dad06003.mjs";
const T = {
  rounded: !0,
  matcher: (a, i) => a === i,
  disableItemHandler: () => !1,
  dataAutomationItemPrefix: "smed-chips-item"
}, L = /* @__PURE__ */ k({
  name: "Chips",
  __name: "Chips",
  props: g({
    modelValue: {},
    items: {},
    icon: { type: [String, Function] },
    rounded: { type: Boolean },
    removable: { type: [Boolean, Function] },
    matcher: { type: Function },
    disableItemHandler: { type: Function },
    dataAutomationItemPrefix: {},
    size: {}
  }, T),
  emits: ["update:modelValue", "remove"],
  setup(a, { expose: i, emit: u }) {
    const s = a, { modelValue: l, items: f, matcher: p } = R(s), c = V(null), h = E(), b = (o, t, e) => typeof e == "function" ? e(o, t) : e, C = (o, t, e) => typeof e == "function" ? e(o, t) : e, I = (o) => {
      u("update:modelValue", o);
    }, $ = (o) => {
      u("remove", o);
    }, v = (o) => {
      var e;
      const t = (e = c.value) == null ? void 0 : e.querySelector(`#${h}_${o}`);
      t && t.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    };
    return z(
      [l, f, c],
      ([o, t, e]) => {
        if (!e)
          return;
        const n = t.findIndex(
          (d) => {
            var y;
            return (y = s.matcher) == null ? void 0 : y.call(s, o, d);
          }
        );
        n !== -1 && v(n);
      },
      { immediate: !0 }
    ), i({
      scrollTo: v
    }), (o, t) => (m(), _("div", {
      ref_key: "rootRef",
      ref: c,
      class: B(o.$style.root)
    }, [
      (m(!0), _(F, null, P(r(f), (e, n) => (m(), S(r(q), {
        id: `${r(h)}_${n}`,
        key: n,
        class: "smed-space_right-2",
        "data-automation-id": `${o.dataAutomationItemPrefix}_${n}`,
        icon: C(e, n, o.icon),
        active: r(p)(r(l), e),
        rounded: o.rounded,
        size: o.size,
        removable: b(e, n, o.removable),
        disabled: o.disableItemHandler(e, n),
        onClick: (d) => I(e),
        onRemove: (d) => $(e)
      }, {
        default: w(() => [
          A(o.$slots, "default", {
            item: e,
            active: r(p)(r(l), e)
          }, () => [
            D(H(e), 1)
          ])
        ]),
        _: 2
      }, 1032, ["id", "data-automation-id", "icon", "active", "rounded", "size", "removable", "disabled", "onClick", "onRemove"]))), 128))
    ], 2));
  }
}), N = "_root_1ib89_1", U = {
  root: N
}, j = {
  $style: U
}, W = /* @__PURE__ */ M(L, [["__cssModules", j]]);
export {
  W as default
};
