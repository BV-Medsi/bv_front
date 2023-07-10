import { defineComponent as B, mergeDefaults as R, toRefs as w, ref as l, onBeforeUnmount as y, watch as m, provide as p, readonly as L, openBlock as C, createElementBlock as S, renderSlot as U } from "vue";
import { EVENT_TUNNEL_TOKEN as b, EVENT_TUNNEL_PROGRESS_TOKEN as k, EVENT_TUNNEL_CONTROLLER_TOKEN as K } from "@smartmed/ui/tokens";
import { animationBasedSetInterval as V } from "@smartmed/utility/dom/timers";
import { clamp as h } from "@smartmed/utility/numbers";
function D() {
}
const I = {
  isEnable: !0
}, P = {
  name: "EventTunnel"
}, q = /* @__PURE__ */ B({
  ...P,
  props: R({
    duration: {},
    eventsCount: {},
    preventOntouch: { type: Boolean },
    isEnable: { type: Boolean }
  }, I),
  setup(N) {
    const T = N, { duration: n, preventOntouch: O, eventsCount: _, isEnable: c } = w(T), o = l([n.value, 0]), s = l(0);
    let f = { stop: D };
    const a = l(performance.now()), u = l(null), E = () => {
      a.value = performance.now(), f = V((e) => {
        const t = e - a.value;
        t >= n.value ? (o.value = [n.value, o.value[1] + 1], s.value = 0, a.value = e) : s.value = h(t / n.value, 0, 1);
      }, n.value / _.value);
    }, r = () => {
      f.stop();
    }, v = () => r(), i = () => {
      c.value && (r(), E());
    };
    y(() => {
      r(), u.value && d(u.value);
    });
    const g = (e) => {
      e.addEventListener("mouseenter", v, {
        passive: !0
      }), e.addEventListener("touchstart", v, {
        passive: !0
      }), e.addEventListener("touchend", i, { passive: !0 }), e.addEventListener("mouseleave", i, { passive: !0 });
    }, d = (e) => {
      e.removeEventListener("mouseenter", v), e.removeEventListener("touchstart", v), e.removeEventListener("touchend", i), e.removeEventListener("mouseleave", i);
    };
    return m(n, (e) => {
      r(), e && E();
    }), m(
      c,
      (e) => {
        e ? E() : r();
      },
      { immediate: !0 }
    ), p(b, L(o)), p(k, L(s)), p(K, {
      reset: () => {
        a.value = performance.now();
      }
    }), m(
      [O, u],
      ([e, t]) => {
        t && (e ? g(t) : d(t));
      },
      { immediate: !0 }
    ), (e, t) => (C(), S("div", {
      ref_key: "host",
      ref: u
    }, [
      U(e.$slots, "default", {
        progress: s.value,
        duration: o.value
      })
    ], 512));
  }
});
export {
  q as default
};
