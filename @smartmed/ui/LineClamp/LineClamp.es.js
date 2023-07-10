import "./LineClamp.css";
import { defineComponent as _, toRefs as p, ref as u, computed as n, openBlock as f, createElementBlock as d, normalizeClass as l, normalizeStyle as s, createElementVNode as y, unref as v, renderSlot as h } from "vue";
import { _ as $ } from "../_plugin-vue_export-helper-dad06003.mjs";
const g = {
  name: "LineClamp"
}, k = /* @__PURE__ */ _({
  ...g,
  props: {
    lineHeight: {},
    linesLimit: {}
  },
  setup(r) {
    const i = r, { lineHeight: c, linesLimit: t } = p(i), o = u(null), a = n(() => o.value ? {
      height: `${o.value.scrollHeight + 4}px`,
      "max-height": `${c.value * t.value}px`
    } : {}), m = n(() => ({
      "-webkit-line-clamp": t.value
    }));
    return (e, H) => (f(), d("div", {
      ref_key: "rootElement",
      ref: o,
      class: l(e.$style.root),
      style: s(a.value)
    }, [
      y("div", {
        class: l([e.$style.content, v(t) === 1 && e.$style.content_ellipsis]),
        style: s(m.value)
      }, [
        h(e.$slots, "default")
      ], 6)
    ], 6));
  }
}), C = "_root_qrom1_1", E = "_content_qrom1_7", L = "_content_ellipsis_qrom1_12", S = {
  root: C,
  content: E,
  content_ellipsis: L
}, q = {
  $style: S
}, M = /* @__PURE__ */ $(k, [["__cssModules", q]]);
export {
  M as default
};
