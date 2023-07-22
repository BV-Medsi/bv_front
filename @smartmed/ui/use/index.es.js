import { ALERTS_HOST_TOKEN as U, ALERTS_OPTIONS_TOKEN as W, MEDIA_WINDOW_WIDTH_TOKEN as Y, MEDIA_BREAKPOINTS as K, MODEL_MODIFIERS_TOKEN as X } from "@smartmed/ui/tokens";
import "@maskito/core";
import "../inputPhoneInternational.mask-a92762e9.mjs";
import { computed as d, ref as v, getCurrentScope as P, onBeforeUnmount as R, inject as E, provide as D, onMounted as j, watch as M } from "vue";
let z = 0;
function k() {
  return `smed-element_${z++}_${Date.now()}`;
}
function L(e) {
  return typeof e == "function" ? d(e) : v(e);
}
function $(e) {
  P() && R(e);
}
function ne(e) {
  const n = E(U, null);
  E(W, null) === null && console.warn("[useAlerts] Необходимо добавить AlertsPlugin в main.ts");
  const t = [], u = (i, r) => {
    var p;
    const m = k();
    return n && ((p = n.value) == null || p.show(m, i, r)), e != null && e.autoCloseOnUnmount && t.push(m), m;
  }, l = (i) => {
    var r;
    if (!i) {
      a();
      return;
    }
    n && ((r = n.value) == null || r.close(i));
  }, a = () => {
    var i;
    n && ((i = n.value) == null || i.closeLast());
  };
  return $(() => {
    t.forEach(l);
  }), {
    show: u,
    close: l,
    closeLast: a
  };
}
const I = "__SmartMed_CONTROL_ACCESSOR_TOKEN";
function b(e = void 0) {
  return e !== void 0 && D(I, e), E(I, null);
}
function oe(e = !1) {
  const n = b(), o = L(e), t = n ? L(n.disabled) : v(!1);
  return d(() => o.value || t.value);
}
function re(e = !1) {
  const n = b(), o = L(e), t = n ? L(n.invalid) : v(!1);
  return d(() => o.value || t.value);
}
function se() {
  const e = b(), n = v(null), o = v(!1), t = () => {
    o.value = !0;
  }, u = () => {
    o.value = !1, e == null || e.markAsTouch();
  }, l = d(() => n.value ? n.value : null);
  j(() => {
    const r = l.value;
    r && typeof r.addEventListener == "function" && (r.addEventListener("focus", t), r.addEventListener("blur", u));
  }), R(() => {
    const r = l.value;
    r && typeof r.removeEventListener == "function" && (r.removeEventListener("focus", t), r.removeEventListener("blur", u));
  });
  const a = () => {
    l.value && l.value.focus();
  }, i = () => {
    l.value && l.value.blur();
  };
  return {
    native: n,
    focused: o,
    id: k(),
    focus: a,
    blur: i
  };
}
const F = (e) => {
  const n = /* @__PURE__ */ new Map(), o = Object.keys(e);
  for (let t = 0; t < o.length + 1; t++)
    t === 0 ? n.set([-1 / 0, e[o[t]]], o[t]) : t !== o.length ? n.set([e[o[t - 1]], e[o[t]]], o[t]) : n.set([e[o[t - 1]], 1 / 0], "largerThenDefined");
  return n;
}, V = (e, n, o) => n < e && e <= o, q = (e, n) => {
  const o = e.keys(), t = Array.from(o);
  for (let u = 0; u < t.length; u++) {
    const l = t[u];
    if (V(n, l[0], l[1]))
      return e.get(l) || null;
  }
  return null;
};
function le() {
  const e = E(Y), n = E(K, {}), o = F(n), t = d(() => (e == null ? void 0 : e.value) || window.innerWidth);
  return { media: d(() => {
    const i = t.value;
    return q(o, i);
  }), computedSmallerThen: (i) => d(() => {
    const r = t.value;
    return n[i] === void 0 ? (console.warn("useMedia. Unknown breakpoint token"), !1) : r <= n[i];
  }), computedBiggerThen: (i) => d(() => {
    const r = t.value;
    return n[i] === void 0 ? (console.warn("useMedia. Unknown breakpoint token"), !0) : r > n[i];
  }) };
}
const C = {
  trim: (e) => typeof e == "string" ? e.trim() : e,
  capitalize: (e) => typeof e == "string" ? e.charAt(0).toUpperCase() + e.slice(1) : e,
  uppercase: (e) => typeof e == "string" ? e.toUpperCase() : e,
  lowercase: (e) => typeof e == "string" ? e.toLowerCase() : e
};
function ie(e) {
  const n = E(X, C), o = (l) => l, t = Object.keys(e).filter((l) => e[l]).map((l) => n[l] || C[l] || o);
  return {
    modify: (l) => {
      let a = l;
      return t.forEach((i) => {
        a = i(a);
      }), a;
    }
  };
}
function _(e, n, o, t) {
  return o ? x(e, n, t) : G(e, n, t);
}
function x(e, n, o) {
  let t = e;
  for (; t !== n.parentElement; ) {
    if (Math.floor(t.scrollTop) > 0 && !o || Math.ceil(t.scrollTop + t.clientHeight) < t.scrollHeight && o)
      return !0;
    if (t.parentElement)
      t = t.parentElement;
    else
      return !1;
  }
  return !1;
}
function G(e, n, o) {
  let t = e;
  for (; t !== n.parentElement; ) {
    if (Math.floor(t.scrollLeft) > 0 && !o || Math.ceil(t.scrollLeft + t.clientWidth) < t.scrollWidth && o)
      return !0;
    if (t.parentElement)
      t = t.parentElement;
    else
      return !1;
  }
  return !1;
}
function J(e) {
  return !!e && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function S(e, n = !0) {
  return e === null ? null : n && e.scrollHeight > e.clientHeight || !n && e.scrollWidth > e.clientWidth ? e : S(e.parentElement, n);
}
function ue(e = "scroll", n) {
  const o = v(null), t = L(e), u = d(() => t.value !== "none"), l = d(() => o.value && n(o.value)), a = (s, c, h) => {
    const { target: f, currentTarget: A, cancelable: B } = s;
    if (!B || !A || !J(f) || (f == null ? void 0 : f.type) === "range")
      return;
    const T = A;
    if (t.value === "all" && (c && !T.contains(S(f)) || !c && !T.contains(S(f, !1)))) {
      s.preventDefault();
      return;
    }
    if (c && (h && !_(f, T, !0, !1) || !h && !_(f, T, !0, !0))) {
      s.preventDefault();
      return;
    }
    !c && (h && !_(f, T, !1, !1) || !h && !_(f, T, !1, !0)) && s.preventDefault();
  }, i = (s) => {
    u.value && a(s, !!s.deltaY, s.deltaY ? s.deltaY < 0 : s.deltaX < 0);
  };
  let r = 0, m = 0, p = 0, y = 0, g;
  const O = (s) => {
    if (!u.value)
      return;
    const c = s.changedTouches[0];
    p = r - c.clientX, y = m - c.clientY, r = c.clientX, m = c.clientY, g === void 0 && (g = Math.abs(y) > Math.abs(p)), a(s, g, g ? y < 0 : p < 0);
  }, w = (s) => {
    const c = l.value;
    if (!c)
      return;
    const h = s.touches[0];
    r = h.clientX, m = h.clientY, p = 0, y = 0, g = void 0, c.removeEventListener("touchmove", O), c.addEventListener("touchmove", O, { passive: !1 });
  }, H = (s, c, h) => {
    h(() => {
      s && (s.removeEventListener("wheel", i), s.removeEventListener("touchstart", w), s.removeEventListener("touchmove", O));
    }), s && (s.addEventListener("wheel", i, { passive: !1 }), s.addEventListener("touchstart", w, {
      passive: !0
    }));
  };
  return R(() => {
    const s = l.value;
    s && (s.removeEventListener("wheel", i), s.removeEventListener("touchstart", w), s.removeEventListener("touchmove", O));
  }), M(l, H, { immediate: !0 }), M([l, u], ([s, c]) => {
    s && (s.style.overscrollBehavior = c ? "contain" : null);
  }, { immediate: !0 }), o;
}
const N = Symbol();
function ce(e = "parent", n = document.body) {
  const o = E(N, v("light")), t = v(e === "parent" ? o.value : e), u = L(n);
  D(N, t);
  const l = (i) => {
    t.value = i;
  };
  return M([t, u], ([i, r]) => {
    r == null || r.classList.remove("smed-dark-theme"), r == null || r.classList.remove("smed-light-theme"), r == null || r.classList.add(`smed-${i}-theme`);
  }, { immediate: !0 }), {
    set: l,
    theme: t
  };
}
export {
  ne as useAlerts,
  b as useControlAccess,
  oe as useControlDisabled,
  re as useControlInvalid,
  se as useInteractive,
  le as useMedia,
  ie as useModelModifiers,
  ue as useOverscroll,
  ce as useTheme
};
