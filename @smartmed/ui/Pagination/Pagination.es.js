import "./Pagination.css";
import { defineComponent as k, mergeDefaults as g, inject as $, toRefs as h, computed as o, openBlock as s, createElementBlock as l, normalizeClass as a, unref as c, Fragment as E, renderList as V, withDirectives as P, normalizeStyle as _, createElementVNode as b } from "vue";
import { EVENT_TUNNEL_PROGRESS_TOKEN as S } from "@smartmed/ui/tokens";
import { KeyboardFocusedDirective as z } from "@smartmed/utility/directives";
import { _ as N } from "../_plugin-vue_export-helper-dad06003.mjs";
const C = {
  size: "sm"
}, D = ["onClick"], w = {
  name: "Pagination"
}, R = /* @__PURE__ */ k({
  ...w,
  props: g({
    modelValue: {},
    length: {},
    size: {}
  }, C),
  emits: ["update:modelValue"],
  setup(m, { emit: d }) {
    const p = m, n = $(
      S,
      null
    ), { length: r, size: u } = h(p), v = o(() => u.value === "md" ? {
      width: `${100 / r.value}%`
    } : {}), i = o(() => n !== null), f = o(() => ({
      transform: n ? `translateX(${n.value * 100 - 100}%)` : "translateX(0)"
    })), y = (t) => {
      d("update:modelValue", t);
    };
    return (t, X) => (s(), l("div", {
      class: a([t.$style.container, t.$style["container_" + c(u)]])
    }, [
      (s(!0), l(E, null, V(c(r), (e) => P((s(), l("button", {
        key: e,
        class: a(t.$style.button),
        style: _(v.value),
        onClick: (j) => y(e - 1)
      }, [
        b("span", {
          class: a([
            t.$style.content,
            i.value ? t.modelValue >= e - 1 && t.$style.content_active : t.modelValue === e - 1 && t.$style.content_active
          ]),
          style: _(
            i.value && t.modelValue == e - 1 ? f.value : {}
          )
        }, null, 6)
      ], 14, D)), [
        [c(z)]
      ])), 128))
    ], 2));
  }
}), T = "_container_u2l0k_1", B = "_container_md_u2l0k_6", F = "_container_sm_u2l0k_9", K = "_button_u2l0k_12", L = "_content_u2l0k_42", M = "_content_active_u2l0k_50", O = {
  container: T,
  container_md: B,
  container_sm: F,
  button: K,
  content: L,
  content_active: M
}, U = {
  $style: O
}, J = /* @__PURE__ */ N(R, [["__cssModules", U]]);
export {
  J as default
};
