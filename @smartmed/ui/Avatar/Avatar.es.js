import "./Avatar.css";
import { defineComponent as b, mergeDefaults as w, toRefs as $, ref as q, computed as o, openBlock as l, createElementBlock as _, normalizeClass as u, unref as r, normalizeStyle as A, createCommentVNode as d, toDisplayString as M } from "vue";
import { _ as L } from "../_plugin-vue_export-helper-dad06003.mjs";
const S = {
  sm: 24,
  md: 32,
  lg: 40,
  xl: 44
}, k = {
  rounded: !0,
  size: "lg"
}, B = `<svg width="100%" height="100%" tabindex="-1" focusable="false" aria-hidden="true" fill="none" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.09 31.4203C27.23 31.0303 26.99 30.9903 25.97 30.5403C25.11 30.1603 25.22 29.3803 25.22 29.3803L25.26 26.6603C25.26 26.6603 25.32 26.3403 25.76 25.7503C26.19 25.1603 26.4 22.7703 26.4 22.7703C26.83 22.8503 27.42 22.3803 27.58 21.6303C27.74 20.8803 27.97 20.2103 28.37 19.5403C28.76 18.8803 28.45 17.5003 28.37 17.1803C28.29 16.8703 27.58 17.2603 27.58 17.2603C27.82 14.6303 28.09 10.3803 25.69 8.37033C23.29 6.36033 20.93 6.25033 19.28 6.39033C17.55 6.55033 16.47 7.04033 15.22 7.92033C14.08 8.73033 13.55 9.76033 13.55 9.76033C12.14 11.8203 12.59 17.3003 12.59 17.3003C12.59 17.3003 12.28 17.1403 12.12 17.3003C11.96 17.4603 11.45 18.4403 11.88 18.9503C12.32 19.4703 12.35 21.2003 12.75 22.0603C13.14 22.9303 13.85 22.6903 13.85 22.6903C13.85 22.6903 13.93 23.5203 14.05 24.5803C14.18 25.7703 14.99 26.7703 14.99 26.7703L15 29.2403C15 29.2403 14.95 30.3103 14.24 30.6603C13.53 31.0103 12.94 31.2303 12.51 31.3903C12.08 31.5403 4.72 34.4602 3.5 36.5002C3 37.5002 3 38.5002 3 39.0002C8 44.0002 13.51 44.0003 20 44.0003C25.8034 44.0003 31 44.0003 37 39.0002C37 38.5002 37 37.5002 36.5 36.5403C34.82 33.9403 28.87 31.7803 28.09 31.4203Z" fill="#A8A8A8"/>
<path d="M25.53 20.7124C25.53 20.7124 25.25 24.9424 24.94 25.3624C24.63 25.7824 22.7 28.5724 21.6 28.9124C20.55 29.2324 20.09 29.1324 20.09 29.1324C20.09 29.1324 19.62 29.2324 18.57 28.9124C17.47 28.5724 15.54 25.7824 15.23 25.3624C14.92 24.9424 14.65 20.6724 14.65 20.6724C17.29 19.5924 18.94 18.8724 19.64 18.2224C19.91 17.9824 20.07 18.0324 20.07 18.0324C20.07 18.0324 20.23 17.9824 20.5 18.2224C21.2 18.8724 22.83 19.5924 25.53 20.7124Z" fill="#F6F6F6"/>
</svg>`, x = ["title"], D = ["src", "width", "alt"], F = { key: 1 }, N = ["innerHTML"], H = /* @__PURE__ */ b({
  name: "Avatar",
  __name: "Avatar",
  props: w({
    rounded: { type: Boolean },
    size: {},
    src: {},
    name: {}
  }, k),
  setup(g) {
    const p = g, { size: c, name: e, src: s } = $(p), n = q(!1), y = o(() => {
      const a = s && s.value, t = v.value, i = n.value;
      return t && a && !i || !a && t;
    }), C = o(() => {
      const a = s && s.value, t = v.value, i = n.value;
      return !a && !t || a && !t && !i;
    }), v = o(() => (e && e.value || "")[0] || ""), m = o(() => {
      const a = c.value;
      return typeof a == "string" ? S[a] : c.value;
    }), h = o(() => {
      const a = e == null ? void 0 : e.value;
      return a ? `Аватар ${a}` : "Аватар";
    }), f = o(() => ({
      "--smed-avatar-size": `${m.value}px`
    })), z = () => {
      n.value = !0;
    };
    return (a, t) => (l(), _("div", {
      title: h.value,
      class: u([
        a.$style.avatar,
        a.$style["avatar_" + r(c)],
        a.rounded && a.$style.avatar_rounded,
        C.value && a.$style.avatar_svgCorrection
      ]),
      style: A(f.value)
    }, [
      r(s) ? (l(), _("img", {
        key: 0,
        loading: "lazy",
        decoding: "async",
        role: "presentation",
        fetchpriority: "low",
        height: "auto",
        class: u([a.$style.image, !n.value && a.$style.image_opacity]),
        src: r(s),
        width: m.value,
        alt: r(e) || "Аватар",
        onLoad: z
      }, null, 42, D)) : d("", !0),
      y.value ? (l(), _("span", F, M(v.value), 1)) : d("", !0),
      C.value ? (l(), _("span", {
        key: 2,
        innerHTML: r(B),
        class: u(a.$style.svg)
      }, null, 10, N)) : d("", !0)
    ], 14, x));
  }
}), T = "_avatar_1aaqb_1", Z = "_avatar_rounded_1aaqb_22", E = "_avatar_sm_1aaqb_25", I = "_avatar_md_1aaqb_29", P = "_avatar_lg_1aaqb_33", R = "_avatar_xl_1aaqb_33", V = "_image_1aaqb_38", j = "_image_opacity_1aaqb_46", G = "_svg_1aaqb_50", J = {
  avatar: T,
  avatar_rounded: Z,
  avatar_sm: E,
  avatar_md: I,
  avatar_lg: P,
  avatar_xl: R,
  image: V,
  image_opacity: j,
  svg: G
}, K = {
  $style: J
}, W = /* @__PURE__ */ L(H, [["__cssModules", K]]);
export {
  W as default
};
