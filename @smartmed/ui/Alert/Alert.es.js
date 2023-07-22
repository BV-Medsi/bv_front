import "./Alert.css";
import { defineComponent as y, mergeDefaults as f, toRefs as _, computed as k, openBlock as t, createElementBlock as o, normalizeClass as s, createVNode as a, unref as n, Fragment as g, createTextVNode as v, toDisplayString as b, createBlock as C, resolveDynamicComponent as D, withDirectives as h, createCommentVNode as A } from "vue";
import r from "@smartmed/ui/SvgIcon";
import { KeyboardFocusedDirective as B } from "@smartmed/utility/directives";
import { _ as N } from "../_plugin-vue_export-helper-dad06003.mjs";
const $ = {
  type: "success"
}, F = /* @__PURE__ */ y({
  name: "Alert",
  __name: "Alert",
  props: f({
    type: {},
    content: { type: [String, Object, Function] },
    closable: { type: Boolean },
    data: {}
  }, $),
  emits: ["close"],
  setup(i, { emit: m }) {
    const c = i, { type: p } = _(c), d = k(() => p.value === "success" ? "check-filled" : "warning-filled"), l = () => {
      m("close");
    }, u = {
      data: c.data,
      close: l
    };
    return (e, z) => (t(), o("div", {
      "data-automation-id": "smed-alert",
      class: s([e.$style.root, "smed-text_h4 smed-text_medium"])
    }, [
      a(n(r), {
        class: s(["smed-space_right-2", e.$style.icon]),
        name: d.value
      }, null, 8, ["class", "name"]),
      typeof e.content == "string" ? (t(), o(g, { key: 0 }, [
        v(b(e.content), 1)
      ], 64)) : (t(), C(D(e.content), {
        key: 1,
        context: u
      })),
      e.closable ? h((t(), o("button", {
        key: 2,
        "aria-label": "Закрыть нотификацию",
        title: "Закрыть нотификацию",
        "data-automation-id": "smed-alert-close",
        class: s(e.$style.close),
        onClick: l
      }, [
        a(n(r), { name: "close-filled" })
      ], 2)), [
        [n(B)]
      ]) : A("", !0)
    ], 2));
  }
}), S = "_root_1kkpu_1", V = "_icon_1kkpu_12", w = "_close_1kkpu_16", M = {
  root: S,
  icon: V,
  close: w
}, j = {
  $style: M
}, R = /* @__PURE__ */ N(F, [["__cssModules", j]]);
export {
  R as default
};
