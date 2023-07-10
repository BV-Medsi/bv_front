import "./TimePicker.css";
import { defineComponent as Q, mergeDefaults as X, toRefs as Z, ref as u, computed as k, watch as y, openBlock as l, createElementBlock as i, normalizeClass as o, normalizeStyle as b, createVNode as G, unref as v, withCtx as E, Fragment as H, renderList as T, toDisplayString as I, createBlock as x, createCommentVNode as W, createElementVNode as V } from "vue";
import N from "@smartmed/ui/Scrollbar";
import { HOURS_IN_DAY as ee, MINUTES_IN_HOUR as te, SECONDS_IN_MINUTE as se, SmedTime as oe } from "@smartmed/utility/date";
import { useDebounceFn as ne } from "@smartmed/utility/functions";
import { _ as le } from "../_plugin-vue_export-helper-dad06003.mjs";
const ie = new Array(ee).fill("").map((S, c) => c), ce = new Array(te).fill("").map((S, c) => c), re = new Array(se).fill("").map((S, c) => c), ue = {
  mode: "HH:MM"
}, me = ["onClick"], ae = ["onClick"], de = ["onClick"], Y = 30, _e = /* @__PURE__ */ Q({
  name: "TimePicker",
  __name: "TimePicker",
  props: X({
    modelValue: {},
    mode: {}
  }, ue),
  emits: ["update:modelValue"],
  setup(S, { emit: c }) {
    var B, R, z, F;
    const f = S, j = ie, q = ce, J = re, { mode: P, modelValue: K } = Z(f), w = u(null), L = u(null), D = u(null), m = u(((B = f.modelValue) == null ? void 0 : B.hours) || 0), a = u(((R = f.modelValue) == null ? void 0 : R.minutes) || 0), d = u(((z = f.modelValue) == null ? void 0 : z.seconds) || 0), g = u(((F = f.modelValue) == null ? void 0 : F.ms) || 0), $ = k(() => {
      var e;
      return ((e = w.value) == null ? void 0 : e.native) || null;
    }), M = k(() => {
      var e;
      return ((e = L.value) == null ? void 0 : e.native) || null;
    }), C = k(() => {
      var e;
      return ((e = D.value) == null ? void 0 : e.native) || null;
    }), h = k(() => P.value === "HH:MM:SS" || P.value === "HH:MM:SS.MSS"), r = (e, s, t = !0) => {
      e.scrollTo({
        top: s * Y,
        behavior: t ? "smooth" : void 0
      });
    }, _ = ne((e) => {
      const s = e.target, t = Math.round(s.scrollTop / Y);
      r(s, t), s === $.value && (m.value = t), s === M.value && (a.value = t), s === C.value && (d.value = t);
    }, 300);
    y(
      $,
      (e, s, t) => {
        e && r(e, m.value, !1), e == null || e.addEventListener("scroll", _), t(() => {
          e == null || e.removeEventListener("scroll", _);
        });
      },
      { immediate: !0 }
    ), y(
      M,
      (e, s, t) => {
        e && r(e, a.value, !1), e == null || e.addEventListener("scroll", _), t(() => {
          e == null || e.removeEventListener("scroll", _);
        });
      },
      { immediate: !0 }
    ), y(
      C,
      (e, s, t) => {
        e && r(e, d.value, !1), e == null || e.addEventListener("scroll", _), t(() => {
          e == null || e.removeEventListener("scroll", _);
        });
      },
      { immediate: !0 }
    ), y(
      [m, a, d, g],
      ([e, s, t, n]) => {
        c("update:modelValue", new oe(e, s, t, n));
      }
    );
    const A = (e) => {
      m.value = e;
      const s = $.value;
      s && r(s, e);
    }, O = (e) => {
      a.value = e;
      const s = M.value;
      s && r(s, e);
    }, U = (e) => {
      d.value = e;
      const s = C.value;
      s && r(s, e);
    };
    return y(
      K,
      (e) => {
        const s = (e == null ? void 0 : e.hours) || 0, t = (e == null ? void 0 : e.minutes) || 0, n = (e == null ? void 0 : e.seconds) || 0, p = (e == null ? void 0 : e.ms) || 0;
        s !== m.value && A(s), t !== a.value && O(t), n !== d.value && U(n), g.value = p;
      },
      { immediate: !0 }
    ), (e, s) => (l(), i("div", {
      class: o(e.$style.timePicker),
      style: b({ maxWidth: `${h.value ? 300 : 200}px` })
    }, [
      G(v(N), {
        ref_key: "hoursScrollbar",
        ref: w,
        class: o(e.$style.scrollbar)
      }, {
        default: E(() => [
          (l(!0), i(H, null, T(v(j), (t, n) => (l(), i("div", {
            key: n,
            class: o([e.$style.item, m.value === t && e.$style.item_active]),
            onClick: (p) => A(t)
          }, I(t), 11, me))), 128))
        ]),
        _: 1
      }, 8, ["class"]),
      G(v(N), {
        ref_key: "minutesScrollbar",
        ref: L,
        class: o(e.$style.scrollbar)
      }, {
        default: E(() => [
          (l(!0), i(H, null, T(v(q), (t, n) => (l(), i("div", {
            key: n,
            class: o([e.$style.item, a.value === t && e.$style.item_active]),
            onClick: (p) => O(t)
          }, I(t), 11, ae))), 128))
        ]),
        _: 1
      }, 8, ["class"]),
      h.value ? (l(), x(v(N), {
        key: 0,
        ref_key: "secondsScrollbar",
        ref: D,
        class: o(e.$style.scrollbar)
      }, {
        default: E(() => [
          (l(!0), i(H, null, T(v(J), (t, n) => (l(), i("div", {
            key: n,
            class: o([e.$style.item, d.value === t && e.$style.item_active]),
            onClick: (p) => U(t)
          }, I(t), 11, de))), 128))
        ]),
        _: 1
      }, 8, ["class"])) : W("", !0),
      V("div", {
        class: o(e.$style.selector)
      }, [
        V("div", {
          class: o([e.$style.hours, !h.value && e.$style.hours_short])
        }, "ч", 2),
        V("div", {
          class: o([e.$style.minutes, !h.value && e.$style.minutes_short])
        }, " мин ", 2),
        h.value ? (l(), i("div", {
          key: 0,
          class: o(e.$style.seconds)
        }, "сек", 2)) : W("", !0)
      ], 2)
    ], 6));
  }
}), ve = "_timePicker_1hb3l_1", fe = "_scrollbar_1hb3l_8", he = "_item_1hb3l_15", ye = "_item_active_1hb3l_27", Se = "_selector_1hb3l_31", pe = "_hours_1hb3l_45", ke = "_minutes_1hb3l_46", $e = "_seconds_1hb3l_47", Me = "_hours_short_1hb3l_57", Ce = "_minutes_short_1hb3l_65", Ee = {
  timePicker: ve,
  scrollbar: fe,
  item: he,
  item_active: ye,
  selector: Se,
  hours: pe,
  minutes: ke,
  seconds: $e,
  hours_short: Me,
  minutes_short: Ce
}, He = {
  $style: Ee
}, De = /* @__PURE__ */ le(_e, [["__cssModules", He]]);
export {
  De as default
};
