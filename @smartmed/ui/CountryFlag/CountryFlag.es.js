import "./CountryFlag.css";
import { defineComponent as i, mergeDefaults as p, toRefs as f, computed as s, openBlock as m, createBlock as g, resolveDynamicComponent as d, unref as _, normalizeClass as v } from "vue";
import { internationalCountries as y } from "@smartmed/utility/consts";
import { _ as C } from "../_plugin-vue_export-helper-dad06003.mjs";
const h = {
  code: null
}, F = /* @__PURE__ */ i({
  name: "CountryFlag",
  __name: "CountryFlag",
  props: p({
    code: {}
  }, h),
  setup(n) {
    const l = n, { code: e } = f(l), r = s(() => {
      const t = e.value;
      if (!t)
        return "";
      const o = y.find((u) => u.id === t);
      return (o == null ? void 0 : o.title) || "";
    }), a = s(() => {
      const t = e.value;
      return t ? `https://static.medsi.pro/images/country/${t}.png` : "";
    }), c = s(() => e.value ? "img" : "div");
    return (t, o) => (m(), g(d(c.value), {
      alt: _(e) || "",
      title: r.value,
      src: a.value,
      class: v(t.$style.flag),
      width: 16,
      height: 12
    }, null, 8, ["alt", "title", "src", "class"]));
  }
}), D = "_flag_dbb53_1", $ = {
  flag: D
}, b = {
  $style: $
}, w = /* @__PURE__ */ C(F, [["__cssModules", b]]);
export {
  w as default
};
