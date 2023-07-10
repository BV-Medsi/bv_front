import "./EmptyState.css";
import { defineComponent as g, mergeDefaults as w, toRefs as x, computed as r, openBlock as p, createElementBlock as n, normalizeClass as a, renderSlot as d, unref as i, createElementVNode as l, createTextVNode as v, toDisplayString as S } from "vue";
import { CHAR_NO_BREAK_SPACE as e } from "@smartmed/utility/consts";
import { _ as b } from "../_plugin-vue_export-helper-dad06003.mjs";
const E = {
  analysis: `На${e}ближайшее время анализов
не${e}запланировано`,
  appointment: `На${e}ближайшее время приёмов
не${e}запланировано`,
  basket: "Корзина пока пуста",
  cards: "Привяжите банковскую карту, чтобы оплачивать консультации",
  clinics: `Мы${e}не${e}смогли найти клиники.
Попробуйте обновить страницу`,
  documents: `Здесь будут храниться все ваши
документы из${e}истории консультаций
с${e}врачами`,
  family: `Добавьте данные ваших близких,
чтобы заботиться об${e}их${e}здоровье`,
  notifications: "Уведомлений ещё нет",
  orders: "Пока нет заказов",
  referrals: `Врачи пока не${e}назначили
вам направлений`,
  support: `Здесь будут ваши обращения
в${e}техническую поддержку`
}, k = {
  text: "",
  type: "appointment",
  src: ""
}, C = { key: 0 }, T = ["srcset"], A = ["alt", "src", "srcset"], B = ["alt", "src"], D = /* @__PURE__ */ g({
  name: "EmptyState",
  __name: "EmptyState",
  props: w({
    type: {},
    text: {},
    src: {}
  }, k),
  setup(y) {
    const $ = y, { type: o, text: f, src: c } = x($), u = (t, s) => `https://static.medsi.pro/images/${t}/pic@1x.${s} 1x, https://static.medsi.pro/images/${t}/pic@2x.${s} 2x`, h = r(() => {
      const t = f.value;
      if (t)
        return t;
      const s = o.value;
      return E[s] || "";
    }), m = r(() => {
      const t = c.value;
      return t || `https://static.medsi.pro/images/${o.value}/pic@1x.png`;
    }), _ = r(() => {
      if (c.value)
        return {
          png: "",
          webp: ""
        };
      const s = o.value;
      return {
        png: u(s, "png"),
        webp: u(s, "webp")
      };
    });
    return (t, s) => (p(), n("div", {
      class: a(["smed-text_body-xl", t.$style.root])
    }, [
      d(t.$slots, "picture", {}, () => [
        i(c) ? (p(), n("img", {
          key: 1,
          role: "presentation",
          decoding: "async",
          fetchpriority: "low",
          width: "104",
          height: "104",
          alt: i(o),
          src: m.value,
          class: a(["smed-space_bottom-6 smed-space_auto", t.$style.picture])
        }, null, 10, B)) : (p(), n("picture", C, [
          l("source", {
            type: "image/webp",
            srcset: _.value.webp
          }, null, 8, T),
          l("img", {
            role: "presentation",
            decoding: "async",
            fetchpriority: "low",
            width: "104",
            height: "104",
            alt: i(o),
            src: m.value,
            srcset: _.value.png,
            class: a(["smed-space_bottom-6 smed-space_auto", t.$style.picture])
          }, null, 10, A)
        ]))
      ]),
      l("span", null, [
        d(t.$slots, "text", {}, () => [
          v(S(h.value), 1)
        ])
      ])
    ], 2));
  }
}), N = "_root_6chww_1", R = "_picture_6chww_9", M = {
  root: N,
  picture: R
}, P = {
  $style: M
}, O = /* @__PURE__ */ b(D, [["__cssModules", P]]);
export {
  O as default
};
