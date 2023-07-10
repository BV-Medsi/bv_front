import "./Tag.css";
import { defineComponent as a, mergeDefaults as o, openBlock as s, createElementBlock as r, normalizeClass as _, renderSlot as e, createBlock as n, unref as c, createCommentVNode as l } from "vue";
import g from "@smartmed/ui/SvgIcon";
import { _ as m } from "../_plugin-vue_export-helper-dad06003.mjs";
const u = {
  status: "default"
}, p = /* @__PURE__ */ a({
  name: "Tag",
  __name: "Tag",
  props: o({
    status: {},
    icon: {}
  }, u),
  setup(B) {
    return (t, C) => (s(), r("span", {
      class: _([
        "smed-text_body-xs smed-text_medium",
        t.$style.tag,
        t.$style["tag_" + t.status]
      ])
    }, [
      e(t.$slots, "icon", {}, () => [
        t.icon ? (s(), n(c(g), {
          key: 0,
          size: "sm",
          class: "smed-space_right-1",
          name: t.icon
        }, null, 8, ["name"])) : l("", !0)
      ]),
      e(t.$slots, "default")
    ], 2));
  }
}), f = "_tag_15rpa_1", i = "_tag_default_15rpa_7", d = "_tag_success_15rpa_11", y = "_tag_info_15rpa_15", $ = "_tag_error_15rpa_19", k = {
  tag: f,
  tag_default: i,
  tag_success: d,
  tag_info: y,
  tag_error: $
}, T = {
  $style: k
}, S = /* @__PURE__ */ m(p, [["__cssModules", T]]);
export {
  S as default
};
