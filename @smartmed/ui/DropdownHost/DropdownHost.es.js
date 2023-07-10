import "./DropdownHost.css";
import { defineComponent as we, mergeDefaults as _e, ref as s, toRefs as ge, inject as M, nextTick as ye, computed as w, watch as k, onMounted as be, onUpdated as He, onBeforeUnmount as xe, openBlock as _, createBlock as g, unref as p, normalizeClass as W, withKeys as ee, withModifiers as L, withCtx as y, createElementVNode as A, renderSlot as te, Transition as Te, normalizeStyle as De, createCommentVNode as B } from "vue";
import Ee from "@smartmed/ui/ActiveZone";
import Oe from "@smartmed/ui/Portal";
import $e from "@smartmed/ui/Scrollbar";
import { DROPDOWN_HOST_TOKEN as Fe, DROPDOWN_HOST_PIVOT_TOKEN as Me } from "@smartmed/ui/tokens";
import { useOverscroll as ke } from "@smartmed/ui/use";
import { getClosestKeyboardFocusable as C, setNativeFocused as oe } from "@smartmed/utility/dom/focus";
import { S as We } from "../scrollbarTokens-5a5285c0.mjs";
import { _ as Le } from "../_plugin-vue_export-helper-dad06003.mjs";
const Ae = 400, ne = 80, Be = {
  modelValue: !1,
  canOpen: !0,
  maxHeight: Ae,
  align: "right",
  direction: "bottom",
  customDropdownStyles: () => ({}),
  minHeight: ne
}, Ce = ["onClick"], Ve = {
  name: "DropdownHost"
}, Ne = /* @__PURE__ */ we({
  ...Ve,
  props: _e({
    modelValue: { type: Boolean },
    canOpen: { type: Boolean },
    minHeight: {},
    maxHeight: {},
    maxWidth: {},
    minWidth: {},
    align: {},
    direction: {},
    customDropdownStyles: {}
  }, Be),
  emits: ["update:modelValue"],
  setup(le, { emit: b }) {
    const V = le, i = 8;
    function N(e, t, n) {
      return e >= t && e <= n;
    }
    const a = s(!!V.modelValue), {
      modelValue: ae,
      canOpen: r,
      maxHeight: S,
      maxWidth: R,
      minHeight: H,
      direction: se,
      minWidth: z,
      align: P
    } = ge(V), x = M(Fe), U = M(We, null), K = M(
      Me,
      s()
    ), T = s(null), D = s(null), E = s(null), m = s(null), v = s(null), I = s(null), Z = s(null), G = s(null), j = s(!1);
    ye(() => j.value = !0);
    const O = ke(
      "all",
      (e) => e.native
    ), $ = w(
      () => {
        var e;
        return K.value === void 0 ? ((e = G.value) == null ? void 0 : e.activeZone) ?? null : K.value;
      }
    ), f = w(() => O.value && O.value.native), F = w(
      () => U && U.value || window
    );
    k(r, (e, t) => {
      t && !e && (b("update:modelValue", !1), a.value = !1);
    });
    const ie = () => !x || !x.value ? {
      left: 0,
      top: document.body.clientHeight,
      width: document.body.clientWidth
    } : x.value.element.getBoundingClientRect(), ue = w(() => {
      const e = R && R.value, t = z && z.value, n = T.value;
      return {
        "max-width": e ? `${e}px` : null,
        "min-width": t ? `${t}px` : null,
        "max-height": n ? `${n}px` : null,
        top: D.value,
        bottom: E.value,
        left: m.value,
        right: v.value,
        width: I.value
      };
    }), X = () => {
      r.value && (b("update:modelValue", !a.value), a.value = !a.value);
    }, q = () => {
      a.value && (b("update:modelValue", !1), a.value = !1);
    }, ce = (e) => {
      e || q();
    }, J = s(!1), re = (e) => {
      const t = window.innerHeight, n = e.top - i, l = t - e.bottom - i, o = Math.min(
        S.value,
        t - i
      ), d = Math.min(
        Math.max(
          f.value.getBoundingClientRect().height,
          H.value || ne
        ),
        o
      );
      let u = null;
      switch (se.value) {
        case "top":
          n >= (H.value || d) && (u = "top");
          break;
        case "bottom":
          l >= (H.value || d) && (u = "bottom");
          break;
      }
      return u === null && (J.value && n >= d ? u = "top" : l >= d ? u = "bottom" : u = l >= n ? "bottom" : "top"), u;
    }, c = () => {
      if (!$.value || !f.value)
        return;
      const e = $.value.getBoundingClientRect(), t = ie();
      de(e, t), me(e, t), ve(e);
    }, de = (e, t) => {
      const n = window.innerHeight, l = Math.min(
        S.value,
        n - i * 2
      ), o = i, d = e.top - o, u = n - e.bottom - o, Y = re(e);
      J.value = Y === "top", Y === "top" ? (T.value = Math.min(l, d), D.value = "auto", E.value = `${t.bottom - e.top + i}px`) : (T.value = Math.min(l, u), D.value = `${e.bottom - t.top + i}px`, E.value = "auto");
    }, me = (e, t) => {
      const l = Math.ceil(e.left - t.left - 0), o = Math.floor(t.right - e.right - 0);
      switch (P.value) {
        case "left":
          o + i > window.innerWidth || N(l + i, 0, window.innerWidth) ? (m.value = `${l}px`, v.value = "auto") : (m.value = "auto", v.value = `${o}px`);
          break;
        case "right":
          N(o + i, 0, window.innerWidth) || l + i > window.innerWidth ? (m.value = "auto", v.value = `${o}px`) : (m.value = `${l}px`, v.value = "auto");
      }
    }, ve = (e) => {
      I.value = `${e.width}px`;
    };
    be(() => {
      a.value && r.value && c();
    }), He(() => {
      a.value && r.value && c();
    }), k(a, (e) => {
      r.value && (e ? (F.value.addEventListener("scroll", c), window.addEventListener("resize", c)) : (F.value.removeEventListener("scroll", c), window.removeEventListener("resize", c)));
    });
    let h = null;
    xe(() => {
      F.value.removeEventListener("scroll", c), window.removeEventListener("resize", c), h && clearTimeout(h);
    });
    const pe = () => {
      !a.value && r.value && (X(), h = setTimeout(() => {
        const e = C(
          Z.value,
          !1,
          f.value
        );
        h = null, e && e.id !== "smed_autoUnfocusableBottom" && e.id !== "smed_autoUnfocusableTop" && oe(e);
      }));
    }, fe = () => {
      Q(!0);
    }, he = () => {
      Q(!1);
    }, Q = (e) => {
      const t = $.value, { ownerDocument: n } = t, l = n ? n.body : t;
      let o = C(t, e, l);
      for (; o !== null && t.contains(o); )
        o = C(o, e, l);
      o !== null && oe(o);
    };
    return k(
      ae,
      (e) => {
        a.value = e;
      },
      { immediate: !0 }
    ), (e, t) => (_(), g(p(Ee), {
      ref_key: "host",
      ref: G,
      class: W(e.$style.container),
      child: f.value,
      onKeydown: [
        ee(L(q, ["stop", "prevent"]), ["esc"]),
        ee(L(pe, ["stop", "prevent"]), ["down"])
      ],
      onActiveZoneChanged: ce
    }, {
      default: y(() => [
        A("div", {
          class: W(e.$style.content),
          onClick: L(X, ["stop", "prevent"])
        }, [
          te(e.$slots, "default")
        ], 10, Ce),
        j.value ? (_(), g(p(Oe), {
          key: 0,
          "append-to": "#smed_dropdown-host"
        }, {
          default: y(() => [
            p(r) ? (_(), g(Te, {
              key: 0,
              name: "fade"
            }, {
              default: y(() => [
                a.value ? (_(), g(p($e), {
                  key: 0,
                  ref_key: "dropdownRef",
                  ref: O,
                  "data-automation-id": "smed-dropdown__scrollbar",
                  class: W([e.$style.dropdown, e.$style["dropdown_" + p(P)]]),
                  style: De({ ...e.customDropdownStyles, ...ue.value })
                }, {
                  default: y(() => [
                    A("div", {
                      id: "smed_autoUnfocusableTop",
                      ref_key: "topFocusableElement",
                      ref: Z,
                      tabindex: "0",
                      onFocus: fe
                    }, null, 544),
                    te(e.$slots, "dropdown"),
                    A("div", {
                      id: "smed_autoUnfocusableBottom",
                      tabindex: "0",
                      onFocus: he
                    }, null, 32)
                  ]),
                  _: 3
                }, 8, ["class", "style"])) : B("", !0)
              ]),
              _: 3
            })) : B("", !0)
          ]),
          _: 3
        })) : B("", !0)
      ]),
      _: 3
    }, 8, ["class", "child", "onKeydown"]));
  }
}), Se = "_container_zhy4y_1", Re = "_content_zhy4y_6", ze = "_dropdown_zhy4y_13", Pe = {
  container: Se,
  content: Re,
  dropdown: ze
}, Ue = {
  $style: Pe
}, et = /* @__PURE__ */ Le(Ne, [["__cssModules", Ue]]);
export {
  et as default
};
