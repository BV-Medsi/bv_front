import { MASKITO_DEFAULT_OPTIONS as u, Maskito as f } from "@maskito/core";
import { resolveRef as c } from "@smartmed/utility/vue";
import { ref as m, watch as d } from "vue";
const p = (t) => t.querySelector("input,textarea") || t;
function R(t = u, r = p) {
  const o = m(null), i = c(t);
  return d([o, i], ([e, n], k, s) => {
    if (!e)
      return;
    const a = new f(r(e), n);
    s(() => {
      a.destroy();
    });
  }, { immediate: !0 }), o;
}
export {
  p as d,
  R as u
};
