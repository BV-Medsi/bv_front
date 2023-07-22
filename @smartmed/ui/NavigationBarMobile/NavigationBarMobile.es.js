import "./NavigationBarMobile.css";
import { defineComponent as p, mergeDefaults as d, toRefs as m, ref as f, watch as v, openBlock as B, createElementBlock as _, normalizeClass as r, createVNode as t, unref as a, withCtx as g } from "vue";
import y from "@smartmed/ui/BaseButton";
import N from "@smartmed/ui/NavigationBar";
import b from "@smartmed/ui/TableBar";
import { N as C } from "../NavigationBar.props-96e2aa22.mjs";
import { _ as h } from "../_plugin-vue_export-helper-dad06003.mjs";
const M = C, k = /* @__PURE__ */ p({
  __name: "NavigationBarMobile",
  props: d({
    sections: {},
    autofocusOnSearch: { type: Boolean },
    navigationClass: {},
    opened: { type: Boolean }
  }, M),
  emits: ["update:opened"],
  setup(l, { emit: s }) {
    const i = l, { opened: n } = m(i), e = f(n.value), c = () => {
      e.value = !e.value, s("update:opened", e.value);
    }, u = (o) => {
      e.value = o, s("update:opened", o);
    };
    return v(n, (o) => {
      o !== e.value && (e.value = o);
    }), (o, z) => (B(), _("div", {
      class: r(o.$style.root)
    }, [
      t(a(b), {
        "model-value": e.value,
        overlay: "",
        "close-button": "",
        direction: "left",
        "onUpdate:modelValue": u
      }, {
        default: g(() => [
          t(a(N), {
            "autofocus-on-search": "",
            sections: o.sections,
            class: r(o.navigationClass)
          }, null, 8, ["sections", "class"])
        ]),
        _: 1
      }, 8, ["model-value"]),
      t(a(y), {
        rounded: "",
        icon: "burger",
        color: "secondaryOutlined",
        onClick: c
      })
    ], 2));
  }
}), D = "_root_46aza_1", O = {
  root: D
}, w = {
  $style: O
}, R = /* @__PURE__ */ h(k, [["__cssModules", w]]);
export {
  R as default
};
