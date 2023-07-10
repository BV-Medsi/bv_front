import { defineComponent as u, toRefs as a, computed as l, openBlock as c, createElementBlock as m, toDisplayString as p } from "vue";
import { CHAR_NO_BREAK_SPACE as s, CHAR_RUBLE as _ } from "@smartmed/utility/consts";
import { formatNumber as f } from "@smartmed/utility/numbers";
const i = {
  name: "Money"
}, B = /* @__PURE__ */ u({
  ...i,
  props: {
    value: {}
  },
  setup(o) {
    const t = o, { value: n } = a(t), r = l(() => {
      const e = n.value;
      return e === null ? "" : `${f(e)}${s}${_}`;
    });
    return (e, v) => (c(), m("span", null, p(r.value), 1));
  }
});
export {
  B as default
};
