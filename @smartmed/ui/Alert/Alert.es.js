import "./Alert.css";
import { defineComponent as p, mergeDefaults as _, toRefs as f, computed as y, openBlock as s, createElementBlock as l, normalizeClass as o, createVNode as c, unref as t, renderSlot as k, createTextVNode as v, toDisplayString as b, withDirectives as g, createCommentVNode as h } from "vue";
import n from "@smartmed/ui/SvgIcon";
import { KeyboardFocusedDirective as C } from "@smartmed/utility/directives";
import { _ as D } from "../_plugin-vue_export-helper-dad06003.mjs";
const $ = {
  type: "success"
}, A = /* @__PURE__ */ p({
  name: "Alert",
  __name: "Alert",
  props: _({
    type: {},
    content: {},
    closable: { type: Boolean }
  }, $),
  emits: ["close"],
  setup(r, { emit: a }) {
    const i = r, { type: m } = f(i), d = y(() => m.value === "success" ? "check-filled" : "warning-filled"), u = () => {
      a("close");
    };
    return (e, M) => (s(), l("div", {
      "data-automation-id": "smed-alert",
      class: o([e.$style.root, "smed-text_h4 smed-text_medium"])
    }, [
      c(t(n), {
        class: o(["smed-space_right-2", e.$style.icon]),
        name: d.value
      }, null, 8, ["class", "name"]),
      k(e.$slots, "default", {}, () => [
        v(b(e.content), 1)
      ]),
      e.closable ? g((s(), l("button", {
        key: 0,
        "aria-label": "Закрыть нотификацию",
        title: "Закрыть нотификацию",
        "data-automation-id": "smed-alert-close",
        class: o(e.$style.close),
        onClick: u
      }, [
        c(t(n), { name: "close-filled" })
      ], 2)), [
        [t(C)]
      ]) : h("", !0)
    ], 2));
  }
}), N = "_root_1kkpu_1", B = "_icon_1kkpu_12", S = "_close_1kkpu_16", V = {
  root: N,
  icon: B,
  close: S
}, w = {
  $style: V
}, P = /* @__PURE__ */ D(A, [["__cssModules", w]]);
export {
  P as default
};
