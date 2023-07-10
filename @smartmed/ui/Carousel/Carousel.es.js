import "./Carousel.css";
import { defineComponent as J, mergeDefaults as Q, inject as P, toRefs as Z, ref as C, computed as u, onMounted as ee, onBeforeUnmount as te, watch as w, openBlock as d, createElementBlock as p, normalizeClass as _, unref as f, withDirectives as D, createElementVNode as ne, normalizeStyle as U, Fragment as oe, renderList as se, renderSlot as le } from "vue";
import { EVENT_TUNNEL_TOKEN as re, EVENT_TUNNEL_CONTROLLER_TOKEN as ae } from "@smartmed/ui/tokens";
import { IntersectionDirective as ce, DragDropDirective as ue, SwipeDirective as ie } from "@smartmed/utility/directives";
import { isMobile as R } from "@smartmed/utility/dom";
import { clamp as g } from "@smartmed/utility/numbers";
import { useThrottleFn as ve } from "@smartmed/utility/functions";
import { _ as me } from "../_plugin-vue_export-helper-dad06003.mjs";
const de = {
  draggable: !1,
  autoScrollLooping: !1
}, T = "__smartmed_carouselScroll__", pe = {
  beforeMount(s, { value: b }) {
    const h = ve((l) => {
      b.onEvent(l);
    }, 500), E = ({ deltaX: l }) => {
      Math.abs(l) <= 20 || (h(Math.sign(l)), s.scrollLeft = 10);
    };
    R() || (s.addEventListener("wheel", E, { passive: !0 }), s[T] = E);
  },
  beforeUnmount(s) {
    s[T] && s.removeEventListener(
      "wheel",
      s[T]
    );
  }
}, _e = {
  name: "Carousel"
}, fe = /* @__PURE__ */ J({
  ..._e,
  props: Q({
    modelValue: {},
    itemsCount: {},
    items: {},
    draggable: { type: Boolean },
    autoScrollLooping: { type: Boolean }
  }, de),
  emits: ["update:modelValue", "autoscroll-end"],
  setup(s, { expose: b, emit: h }) {
    const E = s, l = 16, N = P(re, null), x = P(
      ae,
      null
    ), { itemsCount: a, modelValue: n, items: i, draggable: I, autoScrollLooping: F } = Z(E), v = C(!0), m = C(0), S = C(null), $ = C(!1), K = u(() => {
      const e = a.value, t = 100 / e, o = l / e, r = `calc(${t}% + ${o}px)`, H = `translateX(${M.value.start * 100}%)`;
      return {
        minWidth: r,
        maxWidth: r,
        flexBasis: r,
        transform: H
      };
    }), k = u(() => -n.value / a.value), W = u(() => {
      const e = v.value ? k.value : m.value;
      return {
        transform: `translateX(${100 * e}%) translateX(-${l / 2 - l * e}px)`
      };
    }), M = u(() => {
      const e = n.value, t = i.value.length;
      return {
        start: g(e - 1, 0, t - 1),
        end: g(e + a.value + 1, 0, t - 1)
      };
    }), O = u(() => {
      const e = n.value;
      return (e === 0 ? 0 : -1) + e;
    }), z = u(() => {
      const { start: e, end: t } = M.value;
      return i.value.slice(e, t + 1);
    }), V = u(() => R() || I.value);
    ee(() => {
      const e = S.value;
      e && (e.addEventListener("touchstart", y, { passive: !0 }), e.addEventListener("touchend", L, { passive: !0 }), e.addEventListener("mousedown", y, { passive: !0 }), document.addEventListener("mouseup", L, { passive: !0 }));
    }), te(() => {
      const e = S.value;
      e && (e.removeEventListener("touchstart", y), e.removeEventListener("touchend", L), e.removeEventListener("mousedown", y), document.removeEventListener("mouseup", L));
    }), N && w(N, () => {
      j();
    }), x && w(n, () => {
      x.reset();
    });
    const c = (e) => {
      const t = g(
        i.value.length - 1,
        0,
        Math.max(0, i.value.length - a.value)
      );
      h("update:modelValue", g(e, 0, t));
    };
    w(a, () => {
      c(0);
    });
    const A = () => {
      c(n.value + 1);
    }, B = () => {
      c(n.value - 1);
    }, X = (e, [t]) => {
      if (!V.value || !e)
        return;
      const { clientWidth: o } = e, r = 1 - i.value.length / a.value;
      m.value = g(t / o + m.value, r, 0);
    }, j = () => {
      const e = i.value.length, t = n.value;
      if (F.value) {
        const o = t === e - 1 ? 0 : t + 1;
        c(o);
        return;
      }
      t === e - 1 && h("autoscroll-end"), c(t + 1);
    }, y = () => {
      v.value = !1, m.value = k.value;
    }, L = () => {
      $.value = !1, v.value = !0;
    }, G = (e, { intersectionRatio: t }) => {
      t && t !== 1 && !v.value && ($.value = !0, c(
        n.value < e ? e - a.value + 1 : e
      ));
    }, Y = (e) => {
      c(n.value + e);
    }, q = (e, t) => {
      const o = t.direction;
      Math.round(m.value) !== -n.value || !V.value || (o === "left" ? A() : o === "right" && B());
    };
    return b({
      next: A,
      prev: B
    }), (e, t) => (d(), p("div", {
      ref_key: "host",
      ref: S,
      ondragstart: "return false;",
      class: _([e.$style.container, f(I) && e.$style.container_draggable])
    }, [
      D((d(), p("div", {
        class: _(e.$style.scroller)
      }, [
        ne("div", {
          class: _(e.$style.wrapper)
        }, [
          D((d(), p("div", {
            class: _([e.$style.items, v.value && e.$style.items_transitioned]),
            style: U(W.value)
          }, [
            (d(!0), p(oe, null, se(z.value, (o, r) => D((d(), p("div", {
              key: r + O.value,
              style: U(K.value),
              class: _([
                e.$style.item,
                $.value && e.$style.item_notClickable
              ])
            }, [
              le(e.$slots, "default", { item: o })
            ], 6)), [
              [f(ce), {
                options: {
                  threshold: 0.01
                },
                disconnectAfterIntersect: !1,
                isObserve: !0,
                onIntersect: G.bind(null, r + O.value)
              }]
            ])), 128))
          ], 6)), [
            [f(ue), { onEvent: X }],
            [f(ie), { onEvent: q }]
          ])
        ], 2)
      ], 2)), [
        [f(pe), { onEvent: Y }]
      ])
    ], 2));
  }
}), ge = "_container_15ylx_1", he = "_container_draggable_15ylx_6", Ee = "_scroller_15ylx_16", ye = "_items_15ylx_32", Le = "_items_transitioned_15ylx_36", Ce = "_wrapper_15ylx_40", be = "_item_15ylx_32", Se = "_item_notClickable_15ylx_51", $e = {
  container: ge,
  container_draggable: he,
  scroller: Ee,
  items: ye,
  items_transitioned: Le,
  wrapper: Ce,
  item: be,
  item_notClickable: Se
}, we = {
  $style: $e
}, Ae = /* @__PURE__ */ me(fe, [["__cssModules", we]]);
export {
  Ae as default
};
