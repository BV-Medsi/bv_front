import "./MarkerIcon.css";
import { defineComponent as t, mergeDefaults as l, toRefs as k, computed as m, openBlock as i, createElementBlock as u, normalizeClass as g, unref as o, createVNode as d } from "vue";
import f from "@smartmed/ui/SvgIcon";
import { _ as p } from "../_plugin-vue_export-helper-dad06003.mjs";
const z = {
  success: "marker-check",
  completed: "marker-check",
  info: "info",
  error: "marker-close",
  loading: "spinner"
}, b = {
  lg: [34, 24],
  md: [16.5, 12],
  sm: [16.5, 12]
}, v = {
  lg: [27, 27],
  md: 13.5,
  sm: 13.5
}, y = {
  lg: [6, 34],
  md: [4, 17],
  sm: [4, 17]
}, I = {
  size: "lg"
}, M = {
  name: "MarkerIcon"
}, S = /* @__PURE__ */ t({
  ...M,
  props: l({
    name: {},
    size: {}
  }, I),
  setup(a) {
    const n = a, { name: s, size: r } = k(n), _ = m(() => z[s.value]), c = m(() => {
      const e = s.value;
      return e === "success" || e === "completed" ? b[r.value] : e === "error" ? v[r.value] : e === "info" ? y[r.value] : r.value === "lg" ? "lg" : "sm";
    });
    return (e, q) => (i(), u("span", {
      class: g([e.$style.marker, e.$style["marker_" + o(s)], e.$style["marker_" + o(r)]])
    }, [
      d(o(f), {
        size: c.value,
        name: _.value
      }, null, 8, ["size", "name"])
    ], 2));
  }
}), h = "_marker_1b0g9_1", $ = "_marker_success_1b0g9_8", B = "_marker_completed_1b0g9_11", C = "_marker_info_1b0g9_14", D = "_marker_loading_1b0g9_14", N = "_marker_error_1b0g9_17", E = "_marker_sm_1b0g9_20", P = "_marker_md_1b0g9_28", R = "_marker_lg_1b0g9_36", V = {
  marker: h,
  marker_success: $,
  marker_completed: B,
  marker_info: C,
  marker_loading: D,
  marker_error: N,
  marker_sm: E,
  marker_md: P,
  marker_lg: R
}, j = {
  $style: V
}, G = /* @__PURE__ */ p(S, [["__cssModules", j]]);
export {
  G as default
};
