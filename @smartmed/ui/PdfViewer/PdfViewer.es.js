import "./PdfViewer.css";
import { defineComponent as i, openBlock as o, createBlock as s, unref as l, withCtx as m, normalizeClass as r, createCommentVNode as n, createElementBlock as p } from "vue";
import c from "@smartmed/ui/Popup";
import d from "@smartmed/ui/SvgIcon";
import { _ as u } from "../_plugin-vue_export-helper-dad06003.mjs";
const f = ["src"], _ = {
  name: "PdfViewer"
}, y = /* @__PURE__ */ i({
  ..._,
  props: {
    modelValue: { type: Boolean },
    size: {},
    dismissible: { type: Boolean },
    closable: { type: Boolean },
    title: {},
    src: {},
    isLoading: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(C, { emit: t }) {
    const a = (e) => {
      t("update:modelValue", e);
    };
    return (e, g) => (o(), s(l(c), {
      "model-value": e.modelValue,
      size: "full",
      "onUpdate:modelValue": a
    }, {
      default: m(() => [
        e.isLoading ? (o(), s(l(d), {
          key: 0,
          name: "spinner",
          size: "xxl",
          class: r(e.$style.spinner)
        }, null, 8, ["class"])) : n("", !0),
        e.src ? (o(), p("iframe", {
          key: 1,
          class: r(e.$style.iframe),
          src: e.src
        }, null, 10, f)) : n("", !0)
      ]),
      _: 1
    }, 8, ["model-value"]));
  }
}), V = "_iframe_rfqr0_1", B = "_spinner_rfqr0_8", k = {
  iframe: V,
  spinner: B
}, z = {
  $style: k
}, b = /* @__PURE__ */ u(y, [["__cssModules", z]]);
export {
  b as default
};
