import "./Spinner.css";
import { defineComponent as l, mergeDefaults as a, toRefs as m, computed as c, openBlock as p, createElementBlock as i, createVNode as u, unref as _, normalizeClass as f } from "vue";
import d from "@smartmed/ui/SvgIcon";
import { _ as z } from "../_plugin-vue_export-helper-dad06003.mjs";
const y = {
  size: "md",
  theme: "primary"
}, g = {
  name: "Spinner"
}, x = /* @__PURE__ */ l({
  ...g,
  props: a({
    size: {},
    theme: {}
  }, y),
  setup(s) {
    const t = s, n = {
      xs: "md",
      sm: "lg",
      md: "xl",
      lg: "xxl"
    }, { size: o } = m(t), r = c(() => n[o.value]);
    return (e, M) => (p(), i("span", null, [
      u(_(d), {
        name: "spinner",
        class: f(e.$style[e.theme]),
        size: r.value
      }, null, 8, ["class", "size"])
    ]));
  }
}), S = "_primary_ulw38_5", h = {
  default: "_default_ulw38_1",
  primary: S
}, v = {
  $style: h
}, D = /* @__PURE__ */ z(x, [["__cssModules", v]]);
export {
  D as default
};
