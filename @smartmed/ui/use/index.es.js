import { ALERTS_HOST_TOKEN as X, MODEL_MODIFIERS_TOKEN as B } from "@smartmed/ui/tokens";
import "@maskito/core";
import "../inputPhoneInternational.mask-a92762e9.mjs";
import { computed as m, ref as h, getCurrentScope as K, onBeforeUnmount as w, inject as M, provide as D, onMounted as W, watch as C } from "vue";
let k = 0;
function Y() {
  return `smed-element_${k++}_${Date.now()}`;
}
function E(e) {
  return typeof e == "function" ? m(e) : h(e);
}
function z(e) {
  K() && w(e);
}
function G(e) {
  const n = M(X, null), s = [], t = (c, i) => {
    var v;
    const r = Y();
    return n && ((v = n.value) == null || v.show(r, c, i)), e != null && e.autoCloseOnUnmount && s.push(r), r;
  }, a = (c) => {
    var i;
    if (!c) {
      l();
      return;
    }
    n && ((i = n.value) == null || i.close(c));
  }, l = () => {
    var c;
    n && ((c = n.value) == null || c.closeLast());
  };
  return z(() => {
    s.forEach(a);
  }), {
    show: t,
    close: a,
    closeLast: l
  };
}
const H = "__SmartMed_CONTROL_ACCESSOR_TOKEN";
function R(e = void 0) {
  return e !== void 0 && D(H, e), M(H, null);
}
function J(e = !1) {
  const n = R(), s = E(e), t = n ? E(n.disabled) : h(!1);
  return m(() => s.value || t.value);
}
function Q(e = !1) {
  const n = R(), s = E(e), t = n ? E(n.invalid) : h(!1);
  return m(() => s.value || t.value);
}
function Z() {
  const e = R(), n = h(null), s = h(!1), t = () => {
    s.value = !0;
  }, a = () => {
    s.value = !1, e == null || e.markAsTouch();
  }, l = m(() => n.value ? n.value : null);
  W(() => {
    const r = l.value;
    r && typeof r.addEventListener == "function" && (r.addEventListener("focus", t), r.addEventListener("blur", a));
  }), w(() => {
    const r = l.value;
    r && typeof r.removeEventListener == "function" && (r.removeEventListener("focus", t), r.removeEventListener("blur", a));
  });
  const c = () => {
    l.value && l.value.focus();
  }, i = () => {
    l.value && l.value.blur();
  };
  return {
    native: n,
    focused: s,
    id: Y(),
    focus: c,
    blur: i
  };
}
const N = {
  trim: (e) => typeof e == "string" ? e.trim() : e,
  capitalize: (e) => typeof e == "string" ? e.charAt(0).toUpperCase() + e.slice(1) : e,
  uppercase: (e) => typeof e == "string" ? e.toUpperCase() : e,
  lowercase: (e) => typeof e == "string" ? e.toLowerCase() : e
};
function ee(e) {
  const n = M(B, N), s = (l) => l, t = Object.keys(e).filter((l) => e[l]).map((l) => n[l] || N[l] || s);
  return {
    modify: (l) => {
      let c = l;
      return t.forEach((i) => {
        c = i(c);
      }), c;
    }
  };
}
function _(e, n, s, t) {
  return s ? $(e, n, t) : j(e, n, t);
}
function $(e, n, s) {
  let t = e;
  for (; t !== n.parentElement; ) {
    if (Math.floor(t.scrollTop) > 0 && !s || Math.ceil(t.scrollTop + t.clientHeight) < t.scrollHeight && s)
      return !0;
    if (t.parentElement)
      t = t.parentElement;
    else
      return !1;
  }
  return !1;
}
function j(e, n, s) {
  let t = e;
  for (; t !== n.parentElement; ) {
    if (Math.floor(t.scrollLeft) > 0 && !s || Math.ceil(t.scrollLeft + t.clientWidth) < t.scrollWidth && s)
      return !0;
    if (t.parentElement)
      t = t.parentElement;
    else
      return !1;
  }
  return !1;
}
function F(e) {
  return !!e && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function S(e, n = !0) {
  return e === null ? null : n && e.scrollHeight > e.clientHeight || !n && e.scrollWidth > e.clientWidth ? e : S(e.parentElement, n);
}
function te(e = "scroll", n) {
  const s = h(null), t = E(e), a = m(() => t.value !== "none"), l = m(() => s.value && n(s.value)), c = (o, u, d) => {
    const { target: f, currentTarget: g, cancelable: U } = o;
    if (!U || !g || !F(f) || (f == null ? void 0 : f.type) === "range")
      return;
    const p = g;
    if (t.value === "all" && (u && !p.contains(S(f)) || !u && !p.contains(S(f, !1)))) {
      o.preventDefault();
      return;
    }
    if (u && (d && !_(f, p, !0, !1) || !d && !_(f, p, !0, !0))) {
      o.preventDefault();
      return;
    }
    !u && (d && !_(f, p, !1, !1) || !d && !_(f, p, !1, !0)) && o.preventDefault();
  }, i = (o) => {
    a.value && c(o, !!o.deltaY, o.deltaY ? o.deltaY < 0 : o.deltaX < 0);
  };
  let r = 0, v = 0, T = 0, y = 0, L;
  const O = (o) => {
    if (!a.value)
      return;
    const u = o.changedTouches[0];
    T = r - u.clientX, y = v - u.clientY, r = u.clientX, v = u.clientY, L === void 0 && (L = Math.abs(y) > Math.abs(T)), c(o, L, L ? y < 0 : T < 0);
  }, b = (o) => {
    const u = l.value;
    if (!u)
      return;
    const d = o.touches[0];
    r = d.clientX, v = d.clientY, T = 0, y = 0, L = void 0, u.removeEventListener("touchmove", O), u.addEventListener("touchmove", O, { passive: !1 });
  }, I = (o, u, d) => {
    d(() => {
      o && (o.removeEventListener("wheel", i), o.removeEventListener("touchstart", b), o.removeEventListener("touchmove", O));
    }), o && (o.addEventListener("wheel", i, { passive: !1 }), o.addEventListener("touchstart", b, {
      passive: !0
    }));
  };
  return w(() => {
    const o = l.value;
    o && (o.removeEventListener("wheel", i), o.removeEventListener("touchstart", b), o.removeEventListener("touchmove", O));
  }), C(l, I, { immediate: !0 }), C([l, a], ([o, u]) => {
    o && (o.style.overscrollBehavior = u ? "contain" : null);
  }, { immediate: !0 }), s;
}
const A = Symbol();
function ne(e = "parent", n = document.body) {
  const s = M(A, h("light")), t = h(e === "parent" ? s.value : e), a = E(n);
  D(A, t);
  const l = (i) => {
    t.value = i;
  };
  return C([t, a], ([i, r]) => {
    r == null || r.classList.remove("smed-dark-theme"), r == null || r.classList.remove("smed-light-theme"), r == null || r.classList.add(`smed-${i}-theme`);
  }, { immediate: !0 }), {
    set: l,
    theme: t
  };
}
export {
  G as useAlerts,
  R as useControlAccess,
  J as useControlDisabled,
  Q as useControlInvalid,
  Z as useInteractive,
  ee as useModelModifiers,
  te as useOverscroll,
  ne as useTheme
};
