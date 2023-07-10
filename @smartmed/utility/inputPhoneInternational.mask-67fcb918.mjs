function _(x) {
  return x.replace(/\D/g, "");
}
const e = /\d/, u = ["+", e], s = (x) => x.split("").map((t) => t === "x" ? e : t), A = ["+", /7/, ...s(" (xxx) xxx-xx-xx")], f = [
  "+",
  "7",
  ...s(" (xxx) xxx-xx-xx")
], h = ["+", "9", /9/, /2/, ...s(" xx xxx xxxx")], M = ["+", "9", /9/, /3/, ...s(" xx xxxxxx")], K = ["+", "9", /9/, /4/, ...s(" xx xxx xxxx")], S = ["+", "9", /9/, /5/, ...s(" xxx xxx xxx")], W = ["+", "9", /9/, /6/, ...s(" xxx xxxxxx")], T = ["+", "9", /9/, /8/, ...s(" xx xxxxxxx")], g = ["+", "3", /7/, /3/, ...s(" xx xxx xxx")], l = ["+", "3", /7/, /4/, ...s(" xx-xxx-xxx")], p = ["+", "3", /7/, /5/, ...s(" xx-xxx-xxxx")], a = ["+", "9", /9/, e], D = ["+", "3", /7/, e], I = (x, t) => x ? t : t === "8" ? "7" : t !== "3" && t !== "9" && t !== "7" && t !== "6" ? `7${t}` : t, O = () => {
  const x = (r) => r.replace(/\D/g, ""), t = (r) => x(r).length, o = (r) => r.length === 11 && r.startsWith("8") ? `7${r.slice(1)}` : r;
  return ({ elementState: r, data: i }) => {
    const { value: n, selection: c } = r;
    return {
      elementState: {
        selection: c,
        value: t(n) > 11 ? o(x(n)) : n
      },
      data: t(i) >= 11 ? o(x(i)) : I(n, i)
    };
  };
}, R = {
  mask: ({ value: x }) => {
    const t = _(x);
    if (!t)
      return u;
    if (t.startsWith("7"))
      return A;
    if (t.startsWith("9")) {
      if (t.length <= 2)
        return a;
      if (t.startsWith("992"))
        return h;
      if (t.startsWith("993"))
        return M;
      if (t.startsWith("994"))
        return K;
      if (t.startsWith("995"))
        return S;
      if (t.startsWith("996"))
        return W;
      if (t.startsWith("998"))
        return T;
    }
    if (t.startsWith("3")) {
      if (t.length <= 2)
        return D;
      if (t.startsWith("373"))
        return g;
      if (t.startsWith("374"))
        return l;
      if (t.startsWith("375"))
        return p;
    }
    return f;
  },
  preprocessors: [O()]
};
export {
  f as A,
  _ as g,
  R as i
};
