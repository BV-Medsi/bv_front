import { defineComponent as o, mergeDefaults as t, openBlock as p, createBlock as r, Teleport as a, renderSlot as n } from "vue";
const l = {
  appendTo: "body"
}, s = {
  name: "Portal"
}, u = /* @__PURE__ */ o({
  ...s,
  props: t({
    appendTo: {}
  }, l),
  setup(d) {
    return (e, c) => (p(), r(a, { to: e.appendTo }, [
      n(e.$slots, "default")
    ], 8, ["to"]));
  }
});
export {
  u as default
};
