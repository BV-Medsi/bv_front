import "./NavigationBar.css";
import { defineComponent as K, watch as F, openBlock as o, createElementBlock as _, renderSlot as q, toRefs as U, ref as L, computed as k, resolveComponent as J, normalizeClass as u, unref as t, createBlock as v, withCtx as d, Fragment as h, createTextVNode as D, toDisplayString as p, createCommentVNode as O, withDirectives as I, createElementVNode as y, createVNode as A, renderList as R, vShow as Q, inject as Y, resolveDynamicComponent as j, mergeDefaults as Z, onMounted as x, withKeys as H } from "vue";
import ee from "@smartmed/ui/DataList";
import P from "@smartmed/ui/DataListItem";
import te from "@smartmed/ui/DropdownHost";
import se from "@smartmed/ui/Scrollbar";
import le from "@smartmed/ui/SearchInput";
import { useLink as oe, useRouter as ne } from "vue-router";
import { N as ie } from "../NavigationBar.props-96e2aa22.mjs";
import B from "@smartmed/ui/SvgIcon";
import { SCROLLBAR_REF_TOKEN as re } from "@smartmed/ui/tokens";
import T from "@smartmed/ui/Tooltip";
import { KeyboardFocusedDirective as W } from "@smartmed/utility/directives";
import { useDebounceFn as ae } from "@smartmed/utility/functions";
import { _ as z } from "../_plugin-vue_export-helper-dad06003.mjs";
const G = /* @__PURE__ */ K({
  __name: "EmitRouteActive",
  props: {
    to: {}
  },
  emits: ["active"],
  setup(w, { emit: C }) {
    const l = oe(w);
    return F(
      l.isActive,
      (a) => {
        a && C("active", a);
      },
      { immediate: !0 }
    ), (a, f) => (o(), _("span", null, [
      q(a.$slots, "default")
    ]));
  }
}), ce = ["tabindex"], de = /* @__PURE__ */ K({
  __name: "NavigationChild",
  props: {
    section: {}
  },
  emits: ["active"],
  setup(w, { emit: C }) {
    const S = w, { section: l } = U(S), a = L(!1), f = (n) => "children" in n && n.children.length > 0, $ = () => {
      b.value || (a.value = !a.value);
    }, m = (n, g) => {
      a.value = n, C("active", `smed-navigation_${g}`);
    }, N = k(() => {
      const n = l.value;
      return f(n);
    }), b = k(() => {
      const n = l.value;
      return typeof n.disabled == "string" || !!n.disabled;
    });
    return (n, g) => {
      const V = J("router-link");
      return o(), _("div", {
        class: u(n.$style.root)
      }, [
        !t(l).to || b.value ? (o(), v(t(T), {
          key: 0,
          wide: ""
        }, {
          hint: d(() => [
            typeof t(l).disabled == "string" ? (o(), _(h, { key: 0 }, [
              D(p(t(l).disabled), 1)
            ], 64)) : O("", !0)
          ]),
          default: d(() => [
            I((o(), _("button", {
              tabindex: b.value ? "-1" : 0,
              class: u([
                n.$style.button,
                n.$style.title,
                b.value && n.$style.title_disabled
              ]),
              onClick: $
            }, [
              N.value ? (o(), v(t(B), {
                key: 0,
                name: "arrow-right",
                class: u([
                  "smed-space_right-1",
                  n.$style.icon,
                  a.value && n.$style.icon_rotate
                ]),
                size: "sm"
              }, null, 8, ["class"])) : O("", !0),
              y("span", null, p(t(l).title), 1)
            ], 10, ce)), [
              [t(W)]
            ])
          ]),
          _: 1
        })) : (o(), v(V, {
          key: 1,
          id: `smed-navigation_${t(l).title}`,
          class: u([n.$style.title, n.$style.title_to]),
          to: t(l).to,
          "active-class": n.$style.title_active
        }, {
          default: d(() => [
            A(G, {
              to: t(l).to,
              onActive: g[0] || (g[0] = (s) => m(s, t(l).title))
            }, {
              default: d(() => [
                D(p(t(l).title), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ]),
          _: 1
        }, 8, ["id", "class", "to", "active-class"])),
        I(y("div", {
          class: u(n.$style.children)
        }, [
          (o(!0), _(h, null, R(t(l).children, (s) => (o(), _(h, {
            key: s.title
          }, [
            s.disabled ? (o(), v(t(T), { key: 1 }, {
              hint: d(() => [
                typeof s.disabled == "string" ? (o(), _(h, { key: 0 }, [
                  D(p(s.disabled), 1)
                ], 64)) : O("", !0)
              ]),
              default: d(() => [
                y("span", {
                  class: u([n.$style.children__item, n.$style.children__item_disabled])
                }, p(s.title), 3)
              ]),
              _: 2
            }, 1024)) : (o(), v(V, {
              key: 0,
              id: `smed-navigation_${s.title}`,
              class: u(n.$style.children__item),
              to: s.to,
              "active-class": n.$style.children__item_active
            }, {
              default: d(() => [
                A(G, {
                  to: s.to,
                  onActive: (e) => m(e, s.title)
                }, {
                  default: d(() => [
                    D(p(s.title), 1)
                  ]),
                  _: 2
                }, 1032, ["to", "onActive"])
              ]),
              _: 2
            }, 1032, ["id", "class", "to", "active-class"]))
          ], 64))), 128))
        ], 2), [
          [Q, N.value && a.value]
        ])
      ], 2);
    };
  }
}), ue = "_root_1yrhl_1", _e = "_button_1yrhl_12", ve = "_title_1yrhl_25", me = "_title_active_1yrhl_37", fe = "_title_disabled_1yrhl_37", pe = "_title_to_1yrhl_40", he = "_children_1yrhl_61", ye = "_children__item_1yrhl_78", $e = "_children__item_active_1yrhl_88", be = "_children__item_disabled_1yrhl_88", ge = "_icon_1yrhl_102", ke = "_icon_rotate_1yrhl_105", we = {
  root: ue,
  button: _e,
  title: ve,
  title_active: me,
  title_disabled: fe,
  title_to: pe,
  children: he,
  children__item: ye,
  children__item_active: $e,
  children__item_disabled: be,
  icon: ge,
  icon_rotate: ke
}, Ce = {
  $style: we
}, Se = /* @__PURE__ */ z(de, [["__cssModules", Ce]]), Ne = ["tabindex"], Ve = { class: "smed-text_medium" }, De = { class: "smed-text_medium" }, Oe = /* @__PURE__ */ K({
  __name: "NavigationSection",
  props: {
    section: {}
  },
  setup(w) {
    const C = w, S = Y(
      re,
      L(null)
    ), { section: l } = U(C), a = L(!1), f = L(null), $ = k(() => {
      const s = l.value;
      return "children" in s && s.children.length > 0;
    }), m = k(() => {
      const s = l.value;
      return typeof s.disabled == "string" || !!s.disabled;
    }), N = k(() => {
      const s = l.value;
      return "children" in s ? s.children.sort((e, c) => e.title < c.title ? -1 : 1) : [];
    }), b = () => {
      m.value || (a.value = !a.value);
    }, n = (s) => {
      a.value = !0, f.value = s;
    }, g = ae((s) => {
      const e = document.querySelector(`#${s}`);
      e == null || e.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 500);
    let V = !1;
    return F([f, S], ([s, e]) => {
      s && e && !V && (V = !0, g(s));
    }), (s, e) => {
      const c = J("router-link");
      return o(), _("div", null, [
        !t(l).to || m.value ? (o(), v(t(T), {
          key: 0,
          wide: ""
        }, {
          hint: d(() => [
            typeof t(l).disabled == "string" ? (o(), _(h, { key: 0 }, [
              D(p(t(l).disabled), 1)
            ], 64)) : O("", !0)
          ]),
          default: d(() => [
            I((o(), _("button", {
              tabindex: m.value ? "-1" : 0,
              class: u([s.$style.section, m.value && s.$style.section_disabled]),
              onClick: b
            }, [
              y("div", {
                class: u(s.$style.title)
              }, [
                typeof t(l).icon == "string" ? (o(), v(t(B), {
                  key: 0,
                  name: t(l).icon,
                  class: u(s.$style.icon)
                }, null, 8, ["name", "class"])) : t(l).icon ? (o(), v(j(t(l).icon), { key: 1 })) : O("", !0),
                y("span", Ve, p(t(l).title), 1)
              ], 2),
              $.value ? (o(), v(t(B), {
                key: 0,
                name: "arrow-down",
                rotate: a.value
              }, null, 8, ["rotate"])) : O("", !0)
            ], 10, Ne)), [
              [t(W)]
            ])
          ]),
          _: 1
        })) : (o(), v(c, {
          key: 1,
          class: u(s.$style.section),
          to: t(l).to,
          "active-class": s.$style.section_active
        }, {
          default: d(() => [
            y("div", {
              class: u(s.$style.title)
            }, [
              typeof t(l).icon == "string" ? (o(), v(t(B), {
                key: 0,
                name: t(l).icon,
                class: u(s.$style.icon)
              }, null, 8, ["name", "class"])) : t(l).icon ? (o(), v(j(t(l).icon), { key: 1 })) : O("", !0),
              y("span", De, p(t(l).title), 1)
            ], 2),
            A(t(B), { name: "arrow-right" })
          ]),
          _: 1
        }, 8, ["class", "to", "active-class"])),
        (o(!0), _(h, null, R(N.value, (i) => I((o(), v(Se, {
          key: i.title,
          section: i,
          onActive: n
        }, null, 8, ["section"])), [
          [Q, $.value && a.value]
        ])), 128))
      ]);
    };
  }
}), Ae = "_section_ifq57_1", Le = "_section_disabled_ifq57_22", Be = "_section_active_ifq57_25", Re = "_title_ifq57_42", Ee = "_icon_ifq57_49", Ie = {
  section: Ae,
  section_disabled: Le,
  section_active: Be,
  title: Re,
  icon: Ee
}, Ke = {
  $style: Ie
}, Me = /* @__PURE__ */ z(Oe, [["__cssModules", Ke]]), qe = /* @__PURE__ */ K({
  __name: "NavigationBar",
  props: Z({
    sections: {},
    autofocusOnSearch: { type: Boolean }
  }, ie),
  setup(w) {
    const C = w, { sections: S, autofocusOnSearch: l } = U(C), a = ne(), f = L(""), $ = L(null), m = L(!1), N = (e) => {
      if ("children" in e) {
        const c = [];
        return e.children.forEach((i) => {
          i.disabled || ("to" in i ? c.push(i) : c.push(...N(i)));
        }), c;
      }
      return [];
    }, b = k(() => {
      const e = [];
      return S.value.forEach((i) => {
        if (!i.disabled)
          if (!("children" in i))
            e.push(i);
          else {
            const r = N(i);
            if (r.length === 0)
              return;
            e.push({
              title: i.title,
              children: r
            });
          }
      }), e.sort((i, r) => i.title < r.title ? -1 : 1);
    }), n = k(() => {
      const e = b.value, c = f.value;
      if (!c)
        return e;
      if (typeof c == "string") {
        const i = c.toLowerCase();
        return e.map((r) => "children" in r ? {
          ...r,
          children: r.children.filter(
            ({ title: E }) => E.toLowerCase().includes(i)
          )
        } : r.title.toLowerCase().includes(i) ? r : null).filter(Boolean).filter(
          (r) => r.children.length > 0
        );
      }
      return e;
    }), g = k(() => n.value.map(({ title: e }) => e));
    F(f, (e) => {
      typeof e == "string" && (m.value = !!e);
    });
    const V = (e) => {
      typeof e == "string" || !e ? f.value = e : (a.push(e.to), m.value = !1, f.value = "");
    }, s = () => {
      var e;
      m.value = !1, (e = $.value) == null || e.focus();
    };
    return x(() => {
      l.value && setTimeout(() => {
        var e;
        (e = $.value) == null || e.focus();
      });
    }), (e, c) => (o(), _("div", {
      class: u(e.$style.container)
    }, [
      y("div", {
        class: u(["smed-space_bottom-6", e.$style.header])
      }, [
        q(e.$slots, "header"),
        A(t(te), {
          modelValue: m.value,
          "onUpdate:modelValue": c[1] || (c[1] = (i) => m.value = i)
        }, {
          dropdown: d(() => [
            A(t(ee), {
              "model-value": f.value,
              items: g.value,
              "onUpdate:modelValue": V
            }, {
              list: d(({ onUpdate: i }) => [
                (o(!0), _(h, null, R(n.value, (r, E) => (o(), _("div", {
                  key: E,
                  class: u([
                    e.$style.items,
                    "children" in r ? e.$style.items_list : e.$style.items_single
                  ])
                }, [
                  "children" in r ? (o(), _(h, { key: 0 }, [
                    y("p", {
                      class: u(e.$style.items__label)
                    }, p(r.title), 3),
                    (o(!0), _(h, null, R(r.children, (M, X) => (o(), v(t(P), {
                      key: `${E}_${X}`,
                      onOnClick: (Je) => i(M),
                      onKeydown: H(s, ["esc"])
                    }, {
                      default: d(() => [
                        D(p(M.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["onOnClick", "onKeydown"]))), 128))
                  ], 64)) : (o(), v(t(P), {
                    key: 1,
                    onOnClick: (M) => i(r),
                    onKeydown: H(s, ["esc"])
                  }, {
                    default: d(() => [
                      D(p(r.title), 1)
                    ]),
                    _: 2
                  }, 1032, ["onOnClick", "onKeydown"]))
                ], 2))), 128))
              ]),
              _: 1
            }, 8, ["model-value", "items"])
          ]),
          default: d(() => [
            A(t(le), {
              modelValue: f.value,
              "onUpdate:modelValue": c[0] || (c[0] = (i) => f.value = i),
              ref_key: "searchRef",
              ref: $,
              placeholder: "Поиск по разделам",
              "pseudo-focused": m.value
            }, null, 8, ["modelValue", "pseudo-focused"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 2),
      A(t(se), null, {
        default: d(() => [
          (o(!0), _(h, null, R(t(S), (i, r) => (o(), v(Me, {
            key: r,
            section: i
          }, null, 8, ["section"]))), 128))
        ]),
        _: 1
      }),
      q(e.$slots, "footer")
    ], 2));
  }
}), Te = "_container_11d0l_1", Fe = "_header_11d0l_10", Ue = "_items_11d0l_17", ze = "_items_list_11d0l_20", je = "_items_single_11d0l_20", He = "_items__label_11d0l_32", Pe = {
  container: Te,
  header: Fe,
  items: Ue,
  items_list: ze,
  items_single: je,
  items__label: He
}, Ge = {
  $style: Pe
}, ct = /* @__PURE__ */ z(qe, [["__cssModules", Ge]]);
export {
  ct as default
};
