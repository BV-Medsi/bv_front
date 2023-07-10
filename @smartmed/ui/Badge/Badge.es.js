import "./Badge.css";
import { defineComponent as c, toRefs as r, computed as f, openBlock as n, createElementBlock as s, normalizeClass as l, createElementVNode as d, renderSlot as m, toDisplayString as p, createCommentVNode as _ } from "vue";
import { _ as v } from "../_plugin-vue_export-helper-dad06003.mjs";
const y = {
  name: "Badge"
}, C = /* @__PURE__ */ c({
  ...y,
  props: {
    value: { default: null },
    notificationClass: {}
  },
  setup(a) {
    const u = a, i = "+", { value: t } = r(u), o = f(() => t.value === null ? null : typeof t.value == "number" ? t.value > 99 ? `99${i}` : `${t.value}` : t.value || " ");
    return (e, k) => (n(), s("div", {
      class: l(e.$style.host)
    }, [
      d("div", null, [
        m(e.$slots, "default")
      ]),
      o.value !== null ? (n(), s("span", {
        key: 0,
        class: l(["smed-text_body-xs", e.$style.notification, e.notificationClass])
      }, p(o.value), 3)) : _("", !0)
    ], 2));
  }
}), $ = "_host_1vnvt_1", h = "_notification_1vnvt_6", B = {
  host: $,
  notification: h
}, g = {
  $style: B
}, E = /* @__PURE__ */ v(C, [["__cssModules", g]]);
export {
  E as default
};
