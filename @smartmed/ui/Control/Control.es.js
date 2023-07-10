import "./Control.css";
import { defineComponent as u, mergeDefaults as m, provide as p, reactive as v, openBlock as l, createElementBlock as f, renderSlot as _, unref as r, createBlock as E, normalizeClass as C, createCommentVNode as b } from "vue";
import h from "@smartmed/ui/FieldError";
import { VALIDATION_ERRORS_TOKEN as k } from "@smartmed/ui/tokens";
import { useControlAccess as y } from "@smartmed/ui/use";
import { _ as A } from "../_plugin-vue_export-helper-dad06003.mjs";
const B = {
  showErrors: !0,
  validationErrors: null
}, O = {
  name: "Control"
}, T = /* @__PURE__ */ u({
  ...O,
  props: m({
    control: {},
    showErrors: { type: Boolean },
    validationErrors: {}
  }, B),
  setup(t) {
    const o = t, s = o.control.configuration.validateOn === "blur" ? o.control.markAsTouch : () => {
    };
    y({
      markAsTouch: s,
      invalid: o.control.invalid,
      disabled: o.control.disabled
    }), o.validationErrors && p(k, o.validationErrors);
    const n = v({
      value: o.control.value
    }), a = o.control.invalid, i = o.control.error, c = o.control.disabled, d = o.control.valid;
    return (e, R) => (l(), f("div", null, [
      _(e.$slots, "default", {
        invalid: r(a),
        model: n,
        disabled: r(c),
        valid: r(d)
      }),
      e.showErrors ? (l(), E(r(h), {
        key: 0,
        class: C(e.$style.error),
        error: r(i)
      }, null, 8, ["class", "error"])) : b("", !0)
    ]));
  }
}), w = "_error_dnfat_1", D = {
  error: w
}, N = {
  $style: D
}, z = /* @__PURE__ */ A(T, [["__cssModules", N]]);
export {
  z as default
};
