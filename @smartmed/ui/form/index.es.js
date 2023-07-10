import { useVuelidate as V } from "@vuelidate/core";
import { ref as C, computed as g, watch as j } from "vue";
import "@maskito/core";
import "../inputPhoneInternational.mask-a92762e9.mjs";
import { helpers as c, required as E, email as L, minValue as T, maxValue as A, minLength as q, maxLength as y } from "@vuelidate/validators";
function Z(e, i, n, m) {
  const o = i.value, a = C(!1), l = C({}), h = g(() => {
    const r = n.value[e].$errors;
    return a.value || r.length === 0 ? {} : r.reduce((u, d) => ({
      ...u,
      [d.$validator]: typeof d.$message == "string" ? d.$message : d.$message.value
    }), { ...l.value });
  }), f = g(() => {
    const r = Object.keys(l.value);
    return r.length === 0 ? null : { [r[0]]: l.value[r[0]] };
  }), p = g(() => {
    const r = f.value, u = n.value[e].$errors[0];
    return a.value || !u && !r ? null : u ? {
      [u.$validator]: typeof u.$message == "string" ? u.$message : u.$message.value
    } : r;
  }), x = g(() => a.value ? !1 : !!p.value), s = g(() => !x.value), t = (r) => {
    i.value = r;
  }, v = () => {
    a.value || n.value[e].$touch();
  }, $ = () => {
    a.value = !0;
  }, b = () => {
    a.value = !1;
  }, M = () => {
    t(o), n.value[e].$reset();
  }, w = (r) => {
    l.value = r;
  }, O = (r) => {
    l.value = Object.keys(l.value).reduce((u, d) => r.includes(d) ? u : {
      ...u,
      [d]: l.value[d]
    }, {});
  };
  return m.validateOn === "valueChange" && j(i, () => {
    v();
  }), {
    error: p,
    errors: h,
    value: i,
    setValue: t,
    invalid: x,
    valid: s,
    reset: M,
    disabled: a,
    disable: $,
    enable: b,
    markAsTouch: v,
    setErrors: w,
    removeErrors: O,
    configuration: m
  };
}
function k(e) {
  const i = Object.keys(e).reduce((s, t) => {
    const [v, $] = e[t];
    return {
      ...s,
      [t]: $ || {}
    };
  }, {}), n = Object.keys(e).reduce((s, t) => {
    const [v] = e[t];
    return {
      ...s,
      [t]: C(v)
    };
  }, {}), m = V(i, n), o = Object.keys(n).reduce((s, t) => {
    const v = e[t][2] || { validateOn: "blur" };
    return {
      ...s,
      [t]: Z(t, n[t], m, v)
    };
  }, {}), a = g(() => Object.keys(o).some((s) => o[s].invalid.value)), l = g(() => !a.value), h = g(() => a.value ? Object.keys(o).filter((s) => o[s].invalid.value).reduce((s, t) => ({
    ...s,
    [t]: o[t].errors.value
  }), {}) : {}), f = () => {
    Object.keys(o).forEach((s) => o[s].markAsTouch());
  };
  return {
    invalid: a,
    valid: l,
    markAsTouch: f,
    errors: h,
    validate: () => {
      f();
    },
    value: n,
    getCurrentValue: () => Object.keys(n).reduce((s, t) => ({
      ...s,
      [t]: n[t].value
    }), {}),
    ...o
  };
}
function D(e) {
  return e.replace(/\D/g, "");
}
const F = [
  { id: "AZ", title: "Азербайджан", prefix: "+994", digitsCount: 12 },
  { id: "AM", title: "Армения", prefix: "+374", digitsCount: 11 },
  { id: "BY", title: "Беларусь", prefix: "+375", digitsCount: 12 },
  { id: "GE", title: "Грузия", prefix: "+995", digitsCount: 12 },
  { id: "KZ", title: "Казахстан", prefix: "+7", digitsCount: 11 },
  { id: "KG", title: "Киргизия", prefix: "+996", digitsCount: 12 },
  { id: "MD", title: "Молдова", prefix: "+373", digitsCount: 11 },
  { id: "RU", title: "Россия", prefix: "+7", digitsCount: 11 },
  { id: "TJ", title: "Таджикистан", prefix: "+992", digitsCount: 12 },
  { id: "TM", title: "Туркменистан", prefix: "+993", digitsCount: 11 },
  { id: "UZ", title: "Узбекистан", prefix: "+998", digitsCount: 12 }
];
function G(e) {
  const i = D(e), n = `+${i}`, m = i.length, o = F.find(
    ({ prefix: a }) => n.startsWith(a)
  );
  return !!o && o.digitsCount === m;
}
const B = c.withMessage("Заполните поле", E), J = c.withMessage("Заполните поле", (e) => e === !0), W = c.withMessage("Введите корректный адрес электронной почты", L), Y = (e) => c.withMessage(`Значение должно быть не меньше ${e}`, T(e)), _ = (e) => c.withMessage(`Значение должно быть не больше ${e}`, A(e)), z = (e) => c.withMessage(`Длина должна быть не меньше ${e} символов`, q(e)), H = (e) => c.withMessage(`Длина должна быть не больше ${e} символов`, y(e)), I = c.withMessage("Некорректный номер мобильного телефона", G), Q = (e) => c.withMessage("Заполните поле", (i) => i !== e), S = (e) => c.withMessage("Невалидное поле", (i) => (typeof e == "string" ? new RegExp(e) : e).test(i));
export {
  k as createForm,
  W as email,
  H as maxLength,
  _ as maxValue,
  z as minLength,
  Y as minValue,
  Q as not,
  S as pattern,
  I as phone,
  B as required,
  J as requiredTrue
};
