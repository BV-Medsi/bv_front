import "./Scrollbar.css";
import { defineComponent as _, mergeDefaults as d, ref as m, provide as p, openBlock as a, createElementBlock as f, normalizeClass as l, unref as e, createBlock as u, createCommentVNode as y, createElementVNode as S, renderSlot as b } from "vue";
import C from "@smartmed/ui/ScrollbarControllers";
import { a as g, b as k } from "../isMobile-2b62b6a9.mjs";
import { S as w } from "../scrollbarTokens-5a5285c0.mjs";
import { _ as R } from "../_plugin-vue_export-helper-dad06003.mjs";
const n = window.CSS || {
  escape: (s) => s,
  supports: () => !1
}, $ = {
  dataAutomationId: "smed-scrollbar"
}, h = ["data-automation-id"], v = {
  name: "Scrollbar"
}, A = /* @__PURE__ */ _({
  ...v,
  props: d({
    dataAutomationId: {}
  }, $),
  setup(s, { expose: c }) {
    const t = m(null), r = !n.supports("position", "sticky") || g() && !n.supports("scrollbar-width", "none"), i = !k() && !r;
    return p(w, t), c({ native: t }), (o, N) => (a(), f("div", {
      ref_key: "scrollbarRef",
      ref: t,
      "data-automation-id": o.dataAutomationId,
      class: l([o.$style.root, e(r) && o.$style.root_legacy])
    }, [
      e(i) ? (a(), u(e(C), { key: 0 })) : y("", !0),
      S("div", {
        class: l(o.$style.content)
      }, [
        b(o.$slots, "default")
      ], 2)
    ], 10, h));
  }
}), B = "_root_ejqe7_1", E = "_root_legacy_ejqe7_7", I = "_content_ejqe7_41", j = {
  root: B,
  root_legacy: E,
  content: I
}, q = {
  $style: j
}, z = /* @__PURE__ */ R(A, [["__cssModules", q]]);
export {
  z as default
};
