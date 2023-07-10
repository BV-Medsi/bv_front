import { getNativeFocused as S, blurNativeFocused as A, setNativeFocused as H } from "@smartmed/utility/dom";
import { nextTick as D } from "vue";
import { Maskito as O, MASKITO_DEFAULT_OPTIONS as Y } from "@maskito/core";
import "./inputPhoneInternational.mask-67fcb918.mjs";
import { d as B } from "./useMaskito-36f25623.mjs";
const W = {
  mounted(e) {
    e.focus();
  }
}, v = "__smartmed_dragDrop__", k = ["touchstart", "touchmove", "touchend"], F = ["mousedown", "mousemove", "mouseup"], Z = {
  beforeMount: (e, { value: t }) => {
    const o = (s) => s instanceof MouseEvent ? !0 : s.touches.length < 2, n = (s) => s instanceof MouseEvent ? {
      clientX: s.clientX,
      clientY: s.clientY
    } : {
      clientX: s.touches[0].clientX,
      clientY: s.touches[0].clientX
    }, c = ([s, u, i], r, d) => {
      const h = (f) => {
        if (!r(f))
          return;
        const b = d(f);
        let m = {
          x: b.clientX,
          y: b.clientY
        };
        const E = (l) => {
          if (!r(l))
            return;
          const _ = d(l);
          t.onEvent(e, [
            _.clientX - m.x,
            _.clientY - m.y
          ]), m = {
            x: _.clientX,
            y: _.clientY
          };
        }, a = () => {
          document.removeEventListener(u, E), document.removeEventListener(i, a), document[v + i] = null, document[v + u] = null;
        };
        document.removeEventListener(i, a), document.addEventListener(u, E, { passive: !0 }), document.addEventListener(i, a, { passive: !0 }), document[v + i] = a, document[v + u] = E;
      };
      e.addEventListener(s, h, { passive: !0 }), e[`${v}${s}`] = h;
    };
    c(k, o, n), c(F, o, n);
  },
  beforeUnmount: (e) => {
    [...k, ...F].forEach((t) => {
      const o = document[`${v}${t}`], n = e[`${v}${t}`];
      o && document.removeEventListener(t, o), n && e.removeEventListener(t, n);
    });
  }
};
function U(e, t) {
  return e.contains(t) || !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
const K = {
  mounted: (e, { value: t }) => {
    const o = ({ key: n, target: c }) => {
      n === "Escape" && c instanceof Element && (!U(e, c) || e.contains(c)) && t.onEvent();
    };
    document.addEventListener("keydown", o);
  }
}, ee = {
  mounted: (e, { value: t }) => {
    if (t && t.handle === !1)
      return;
    e.setAttribute("tabIndex", "0"), e.__smedBeforeFocustrapFocusedElement = S(), D(() => e.focus());
    const o = () => {
      e.removeAttribute("tabIndex"), e.removeEventListener("blur", o), e.__smedBlurListener = null;
    };
    e.addEventListener("blur", o), e.__smedBlurListener = o;
  },
  beforeUnmount: (e) => {
    A(), e.__smedBlurListener && (e.removeEventListener("blur", e.__smedBlurListener), e.__smedBlurListener = null), D(() => {
      const t = e.__smedBeforeFocustrapFocusedElement;
      t instanceof HTMLElement && H(t);
    });
  }
}, te = {
  mounted(e, { value: t }) {
    const o = () => {
      t.onEvent(!0);
    }, n = () => {
      t.onEvent(!1);
    };
    e.__smedHoveredDirectiveMouseEnter = o, e.__smedHoveredDirectiveMouseLeave = n, e.addEventListener("mouseenter", o), e.addEventListener("mouseleave", n);
  },
  beforeUnmount(e) {
    e.__smedHoveredDirectiveMouseEnter && (e.removeEventListener("mouseenter", e.__smedHoveredDirectiveMouseEnter), e.__smedHoveredDirectiveMouseEnter = null), e.__smedHoveredDirectiveMouseLeave && (e.removeEventListener("mouseleave", e.__smedHoveredDirectiveMouseLeave), e.__smedHoveredDirectiveMouseLeave = null);
  }
}, X = {
  threshold: 1
}, oe = {
  mounted(e, { value: t }) {
    const { onIntersect: o, isObserve: n = !0, disconnectAfterIntersect: c = !0, options: s = {} } = t;
    if (!n)
      return;
    const u = ([i]) => {
      const { isIntersecting: r } = i;
      r && (o(i), c && e.__observer_intersection.disconnect());
    };
    e.__observer_intersection = new IntersectionObserver(u, {
      ...X,
      ...s,
      root: typeof s.root == "function" ? s.root() : s.root
    }), e.__observer_intersection.observe(e);
  },
  beforeUnmount(e) {
    e.__observer_intersection && e.__observer_intersection.disconnect();
  }
}, w = {
  onMousedown: "mousedown",
  onMouseup: "mouseup",
  onFocus: "focus",
  onBlur: "blur"
}, g = (e, t) => {
  t.forEach((o) => {
    const n = `_smed_${o.key}`;
    e.addEventListener(w[o.key], o.callback), e[n] = o.callback;
  });
}, C = (e, t) => {
  t.forEach((o) => {
    const n = `_smed_${o}`, c = e[n];
    c && (e.removeEventListener(w[o], c), delete e[n]);
  });
}, T = "smed-focused-element", ne = {
  mounted: (e) => {
    let t = !0;
    g(e, [
      { key: "onMousedown", callback: () => {
        t = !1;
      } },
      { key: "onMouseup", callback: () => {
        t = !0;
      } },
      { key: "onFocus", callback: () => {
        t && e.classList.add(T);
      } },
      { key: "onBlur", callback: () => {
        e.classList.remove(T), t = !0;
      } }
    ]);
  },
  beforeUnmount: (e) => {
    C(e, ["onMousedown", "onMouseup", "onFocus", "onBlur"]);
  }
}, p = /* @__PURE__ */ new Map(), I = (e, { options: t = Y, predicate: o = B }) => {
  var c;
  (c = p.get(e)) == null || c.destroy();
  const n = new O(o(e), t);
  p.set(e, n);
}, P = (e, { value: t }) => {
  I(e, t || {});
}, $ = (e, { value: t, oldValue: o }) => {
  t !== o && I(e, t || {});
}, x = (e) => {
  var t;
  (t = p.get(e)) == null || t.destroy(), p.delete(e);
}, se = {
  mounted: P,
  updated: $,
  beforeUnmount: x
}, L = "__smed_swipe_start", M = "__smed_swipe_end", y = 30, R = 500;
function G(e, t) {
  return Math.abs(t) > Math.abs(e) ? t > 0 ? "top" : "bottom" : e > 0 ? "left" : "right";
}
const ce = {
  beforeMount: (e, { value: t }) => {
    const o = [null, null], n = typeof t.threshold == "number" ? t.threshold : y, c = typeof t.timeout == "number" ? t.timeout : R, s = () => {
      const r = o[0], d = o[1];
      if (r === null || d === null || !(!!r.touches.length && r.touches[0].identifier === d.changedTouches[0].identifier))
        return;
      const { clientX: f, clientY: b } = r.touches[0], { clientX: m, clientY: E } = d.changedTouches[0], a = f - m, l = b - E, _ = d.timeStamp - r.timeStamp;
      if ((Math.abs(a) > n || Math.abs(l) > n) && _ < c) {
        const N = {
          direction: G(a, l),
          events: [r, d]
        };
        t.onEvent(e, N);
      }
    }, u = (r) => {
      o[0] = r;
    }, i = (r) => {
      o[1] = r, s();
    };
    e.addEventListener("touchstart", u, { passive: !0 }), document.addEventListener("touchend", i), e[L] = u, document[M] = i;
  },
  beforeUnmount: (e) => {
    e[L] && e.removeEventListener("touchstart", e[L]), document[M] && document.removeEventListener("touchend", document[M]);
  }
};
export {
  W as A,
  Z as D,
  K as E,
  ee as F,
  te as H,
  oe as I,
  ne as K,
  se as M,
  ce as S,
  U as c
};
