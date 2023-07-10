import "./Island.css";
import { defineComponent as d, openBlock as o, createElementBlock as n, normalizeClass as s, createElementVNode as t, renderSlot as i, toDisplayString as l, createVNode as r, unref as a, withCtx as m, createTextVNode as p, createCommentVNode as c } from "vue";
import _ from "@smartmed/ui/LineClamp";
import { _ as f } from "../_plugin-vue_export-helper-dad06003.mjs";
const u = {
  name: "Island"
}, y = /* @__PURE__ */ d({
  ...u,
  props: {
    title: {},
    description: {},
    isLoading: { type: Boolean }
  },
  setup(N) {
    return (e, V) => (o(), n("div", {
      class: s(e.$style.island)
    }, [
      t("div", {
        class: s(e.isLoading && "smed-skeleton")
      }, [
        i(e.$slots, "image")
      ], 2),
      t("div", {
        class: s(e.$style.content)
      }, [
        t("h5", {
          class: s([
            e.$style.title,
            "smed-text_h5 smed-text_medium",
            e.isLoading && "smed-skeleton smed-skeleton_short"
          ])
        }, l(e.title), 3),
        t("p", {
          class: s([
            e.$style.description,
            "smed-text_body-xl",
            e.isLoading && "smed-skeleton"
          ])
        }, [
          r(a(_), {
            "line-height": 24,
            "lines-limit": 2
          }, {
            default: m(() => [
              p(l(e.description), 1)
            ]),
            _: 1
          })
        ], 2),
        e.$slots.footer ? (o(), n("div", {
          key: 0,
          class: s([e.$style.footer, e.isLoading && "smed-skeleton"])
        }, [
          i(e.$slots, "footer")
        ], 2)) : c("", !0)
      ], 2)
    ], 2));
  }
}), v = "_island_1vdpo_1", $ = "_content_1vdpo_13", g = "_title_1vdpo_20", k = "_description_1vdpo_24", h = "_footer_1vdpo_29", L = {
  island: v,
  content: $,
  title: g,
  description: k,
  footer: h
}, C = {
  $style: L
}, S = /* @__PURE__ */ f(y, [["__cssModules", C]]);
export {
  S as default
};
