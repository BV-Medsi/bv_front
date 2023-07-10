import "./Notification.css";
import { defineComponent as $, mergeDefaults as v, toRefs as g, useSlots as b, computed as w, openBlock as e, createElementBlock as s, normalizeClass as i, renderSlot as a, createVNode as r, unref as n, createCommentVNode as l, createElementVNode as k, withDirectives as I, withModifiers as f, withKeys as N } from "vue";
import _ from "@smartmed/ui/SvgIcon";
import { KeyboardFocusedDirective as h } from "@smartmed/utility/directives";
import { hasSlotContent as C } from "@smartmed/utility/vue";
import { _ as z } from "../_plugin-vue_export-helper-dad06003.mjs";
const D = {
  color: "grey",
  size: "md",
  closable: !0,
  icon: ""
}, S = {
  name: "Notification"
}, B = /* @__PURE__ */ $({
  ...S,
  props: v({
    color: {},
    size: {},
    closable: { type: Boolean },
    icon: {}
  }, D),
  setup(d) {
    const m = d, { icon: c } = g(m), p = b(), u = w(() => !!c.value || C(p.icon));
    return (o, t) => (e(), s("div", {
      class: i([
        o.$style.notification,
        o.$style["notification_" + o.color],
        o.$style["notification_" + o.size]
      ])
    }, [
      u.value ? (e(), s("div", {
        key: 0,
        class: i(o.$style.leftIcon)
      }, [
        a(o.$slots, "icon", {}, () => [
          r(n(_), { name: n(c) }, null, 8, ["name"])
        ])
      ], 2)) : l("", !0),
      k("div", {
        class: i(o.$style.content)
      }, [
        a(o.$slots, "default")
      ], 2),
      o.closable ? I((e(), s("span", {
        key: 1,
        "data-automation-id": "notification-close",
        tabindex: "0",
        "aria-label": "Закрыть нотификацию",
        class: i(o.$style.icon),
        onClick: t[0] || (t[0] = f((y) => o.$emit("close"), ["stop"])),
        onKeydown: t[1] || (t[1] = N(f((y) => o.$emit("close"), ["stop"]), ["enter"]))
      }, [
        r(n(_), { name: "close-black" })
      ], 34)), [
        [n(h)]
      ]) : l("", !0)
    ], 2));
  }
}), K = "_notification_rdi7r_1", M = "_notification_grey_rdi7r_7", V = "_notification_white_rdi7r_11", E = "_notification_sm_rdi7r_15", F = "_notification_md_rdi7r_20", P = "_notification_lg_rdi7r_25", R = "_content_rdi7r_29", j = "_leftIcon_rdi7r_33", q = "_icon_rdi7r_37", A = {
  notification: K,
  notification_grey: M,
  notification_white: V,
  notification_sm: E,
  notification_md: F,
  notification_lg: P,
  content: R,
  leftIcon: j,
  icon: q
}, G = {
  $style: A
}, U = /* @__PURE__ */ z(B, [["__cssModules", G]]);
export {
  U as default
};
