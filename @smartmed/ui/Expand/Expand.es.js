import "./Expand.css";
import { defineComponent as p, mergeDefaults as u, toRefs as r, ref as c, watch as m, openBlock as i, createElementBlock as _, createElementVNode as f, normalizeClass as v, renderSlot as t, createVNode as x, unref as w, withCtx as V } from "vue";
import y from "@smartmed/ui/TransitionExpand";
import { _ as C } from "../_plugin-vue_export-helper-dad06003.mjs";
const E = {
  modelValue: !1
}, $ = {
  name: "Expand"
}, B = /* @__PURE__ */ p({
  ...$,
  props: u({
    modelValue: { type: Boolean },
    rootClasses: {},
    wide: { type: Boolean }
  }, E),
  emits: ["update:modelValue"],
  setup(l, { emit: n }) {
    const a = l, { modelValue: s } = r(a), o = c(a.modelValue), d = () => {
      o.value = !o.value, n("update:modelValue", o.value);
    };
    return m(
      s,
      (e) => {
        o.value = e;
      },
      { immediate: !0 }
    ), (e, D) => (i(), _("div", null, [
      f("div", {
        class: v([e.$style.expand, e.wide && e.$style.expand_wide, e.rootClasses]),
        onClick: d
      }, [
        t(e.$slots, "default", { opened: o.value })
      ], 2),
      x(w(y), { opened: o.value }, {
        default: V(() => [
          t(e.$slots, "content")
        ]),
        _: 3
      }, 8, ["opened"])
    ]));
  }
}), g = "_expand_vqcua_1", h = "_expand_wide_vqcua_4", k = {
  expand: g,
  expand_wide: h
}, q = {
  $style: k
}, R = /* @__PURE__ */ C(B, [["__cssModules", q]]);
export {
  R as default
};
