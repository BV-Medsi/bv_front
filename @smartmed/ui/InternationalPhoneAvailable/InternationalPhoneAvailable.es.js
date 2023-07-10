import "./InternationalPhoneAvailable.css";
import { defineComponent as z, ref as x, openBlock as o, createElementBlock as l, withDirectives as $, normalizeClass as t, withKeys as f, withModifiers as b, createElementVNode as n, Fragment as u, renderList as d, unref as r, createBlock as k, createVNode as p, withCtx as w, toDisplayString as v } from "vue";
import h from "@smartmed/ui/CountryFlag";
import P from "@smartmed/ui/Popup";
import V from "@smartmed/ui/SvgIcon";
import { internationalCountries as I } from "@smartmed/utility/consts";
import { KeyboardFocusedDirective as K } from "@smartmed/utility/directives";
import { _ as M } from "../_plugin-vue_export-helper-dad06003.mjs";
const A = ["onKeydown"], B = /* @__PURE__ */ z({
  name: "InternationalPhoneAvailable",
  __name: "InternationalPhoneAvailable",
  setup(q) {
    const i = I, m = Math.round(i.length / 2), g = [i.slice(0, m), i.slice(m)], a = x(!1), _ = () => {
      a.value = !a.value;
    };
    return (e, y) => (o(), l("div", null, [
      $((o(), l("div", {
        tabindex: "0",
        class: t(e.$style.root),
        onKeydown: [
          f(b(_, ["stop", "prevent"]), ["enter"]),
          f(b(_, ["stop", "prevent"]), ["space"])
        ],
        onClick: _
      }, [
        n("div", null, [
          n("p", {
            class: t([
              "smed-text_body-xs smed-text_medium smed-space_bottom-2",
              e.$style.label
            ])
          }, " Доступные номера телефонов ", 2),
          (o(!0), l(u, null, d(r(i), (s) => (o(), k(r(h), {
            key: s.id,
            class: "smed-space_right-2",
            code: s.id
          }, null, 8, ["code"]))), 128))
        ]),
        p(r(V), {
          name: "warning-filled",
          rotate: "",
          size: "sm",
          class: t(e.$style.icon)
        }, null, 8, ["class"])
      ], 42, A)), [
        [r(K)]
      ]),
      p(r(P), {
        modelValue: a.value,
        "onUpdate:modelValue": y[0] || (y[0] = (s) => a.value = s),
        title: "Доступные номера телефонов"
      }, {
        default: w(() => [
          n("p", {
            class: t(["smed-space_bottom-6", e.$style.text])
          }, " Вы можете зарегистрироваться или войти в профиль, используя номера телефонов следующих стран: ", 2),
          n("div", {
            class: t(e.$style.countriesContainer)
          }, [
            (o(), l(u, null, d(g, (s, C) => n("div", { key: C }, [
              (o(!0), l(u, null, d(s, (c) => (o(), l("div", {
                key: c.id,
                class: t(e.$style.country)
              }, [
                p(r(h), {
                  class: "smed-space_right-2",
                  code: c.id
                }, null, 8, ["code"]),
                n("span", {
                  class: t(["smed-space_right-1", e.$style.country__title])
                }, v(c.title), 3),
                n("span", {
                  class: t(e.$style.country__prefix)
                }, v(c.prefix), 3)
              ], 2))), 128))
            ])), 64))
          ], 2)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
}), D = "_root_fbeyz_1", F = "_label_fbeyz_15", E = "_text_fbeyz_19", N = "_icon_fbeyz_23", S = "_countriesContainer_fbeyz_27", L = "_country_fbeyz_34", O = "_country__title_fbeyz_41", T = "_country__prefix_fbeyz_41", U = {
  root: D,
  label: F,
  text: E,
  icon: N,
  countriesContainer: S,
  country: L,
  country__title: O,
  country__prefix: T
}, j = {
  $style: U
}, Z = /* @__PURE__ */ M(B, [["__cssModules", j]]);
export {
  Z as default
};
