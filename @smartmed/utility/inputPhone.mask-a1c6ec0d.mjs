import { A as i } from "./inputPhoneInternational.mask-67fcb918.mjs";
function p() {
  const t = (e) => e.replace(/^(\+?7?\s?8?)\s?/, ""), n = (e) => e.replace(/\D/g, "").length, o = (e, r) => e ? r : r === "8" ? "7" : r;
  return ({ elementState: e, data: r }) => {
    const { value: s, selection: c } = e;
    return {
      elementState: {
        selection: c,
        value: n(s) > 11 ? t(s) : s
      },
      data: n(r) >= 11 ? t(r) : o(s, r)
    };
  };
}
const l = {
  mask: i,
  preprocessors: [p()]
};
export {
  l as i
};
