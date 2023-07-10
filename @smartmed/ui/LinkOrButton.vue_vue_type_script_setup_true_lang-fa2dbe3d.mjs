import { defineComponent as l, resolveComponent as a, openBlock as t, createElementBlock as c, renderSlot as o, createBlock as i, withCtx as p } from "vue";
const _ = { key: 0 }, m = /* @__PURE__ */ l({
  __name: "LinkOrButton",
  props: {
    to: {}
  },
  setup(u) {
    return (e, f) => {
      const n = a("router-link");
      return e.to ? (t(), i(n, {
        key: 1,
        to: e.to
      }, {
        default: p(({ isActive: r, isExactActive: s }) => [
          o(e.$slots, "default", {
            isActive: r,
            isExactActive: s
          })
        ]),
        _: 3
      }, 8, ["to"])) : (t(), c("button", _, [
        o(e.$slots, "default", {
          isActive: !1,
          isExactActive: !1
        })
      ]));
    };
  }
});
export {
  m as _
};
