import { defineComponent as u, toRefs as v, ref as a, inject as d, watch as l, openBlock as p, createElementBlock as _, renderSlot as m } from "vue";
import { ACTIVE_ELEMENT_TOKEN as E } from "@smartmed/ui/tokens";
const h = {
  name: "ActiveZone"
}, g = /* @__PURE__ */ u({
  ...h,
  props: {
    child: { default: null }
  },
  emits: ["active-zone-changed"],
  setup(s, { expose: i, emit: r }) {
    const f = s, { child: o } = v(f), t = a(null), n = a(!1), c = d(E, null);
    return c && l(c, (e) => {
      if (!e) {
        n.value = !1;
        return;
      }
      t.value && (n.value = t.value.contains(e) || !!o.value && o.value.contains(e));
    }), l(n, (e) => {
      r("active-zone-changed", e);
    }), i({
      activeZone: t
    }), (e, k) => (p(), _("div", {
      ref_key: "activeZone",
      ref: t
    }, [
      m(e.$slots, "default")
    ], 512));
  }
});
export {
  g as default
};
