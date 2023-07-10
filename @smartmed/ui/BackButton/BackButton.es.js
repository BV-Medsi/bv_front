import "./BackButton.css";
import { defineComponent as a, useAttrs as i, openBlock as e, createElementBlock as s, withDirectives as l, normalizeClass as m, createVNode as _, unref as r, renderSlot as p, createTextVNode as d } from "vue";
import f from "@smartmed/ui/SvgIcon";
import { KeyboardFocusedDirective as b } from "@smartmed/utility/directives";
import { useRouter as k } from "vue-router";
import { _ as y } from "../_plugin-vue_export-helper-dad06003.mjs";
const h = {
  name: "BackButton"
}, B = /* @__PURE__ */ a({
  ...h,
  setup($) {
    const t = k(), n = i(), c = () => window.history.length > 2, u = () => {
      n.onClick || (c() ? t.back() : t.push("/"));
    };
    return (o, g) => (e(), s("div", null, [
      l((e(), s("button", {
        type: "button",
        class: m(o.$style.button),
        onClick: u
      }, [
        _(r(f), {
          name: "arrow-back",
          size: "sm"
        }),
        p(o.$slots, "default", {}, () => [
          d("Назад")
        ])
      ], 2)), [
        [r(b)]
      ])
    ]));
  }
}), v = "_button_1osdy_1", w = {
  button: v
}, C = {
  $style: w
}, V = /* @__PURE__ */ y(B, [["__cssModules", C]]);
export {
  V as default
};
