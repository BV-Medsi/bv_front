import "./FieldError.css";
import { defineComponent as a, toRefs as i, inject as u, computed as p, openBlock as _, createBlock as d, unref as f, withCtx as m, createElementVNode as y, normalizeClass as E, toDisplayString as x } from "vue";
import { VALIDATION_ERRORS_TOKEN as v } from "@smartmed/ui/tokens";
import k from "@smartmed/ui/TransitionExpand";
import { _ as C } from "../_plugin-vue_export-helper-dad06003.mjs";
const O = {
  name: "FieldError"
}, R = /* @__PURE__ */ a({
  ...O,
  props: {
    error: {}
  },
  setup(n) {
    const l = n, { error: c } = i(l), t = u(
      v,
      null
    ), s = p(() => {
      const r = c.value;
      if (typeof r == "string" || r === null)
        return r;
      const e = Object.keys(r);
      if (e.length === 0)
        return null;
      const o = e[0];
      return t && t[o] || r[o];
    });
    return (r, e) => (_(), d(f(k), {
      opened: !!s.value,
      duration: 400
    }, {
      default: m(() => [
        y("span", {
          class: E(["smed-text_body-xs", r.$style.error])
        }, x(s.value), 3)
      ]),
      _: 1
    }, 8, ["opened"]));
  }
}), b = "_error_1cllb_1", g = {
  error: b
}, h = {
  $style: g
}, D = /* @__PURE__ */ C(R, [["__cssModules", h]]);
export {
  D as default
};
