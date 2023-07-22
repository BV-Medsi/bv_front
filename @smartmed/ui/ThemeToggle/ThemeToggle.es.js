import { defineComponent as u, openBlock as S, createBlock as L, unref as t, withCtx as A } from "vue";
import N from "@smartmed/ui/BaseButton";
const i = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZvY3VzYWJsZT0iZmFsc2UiIGFyaWEtaGlkZGVuPSJ0cnVlIiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHRhYmluZGV4PSItMSIgdGl0bGU9IkRhcmtNb2RlIj48cGF0aCBkPSJNMTIgM2MtNC45NyAwLTkgNC4wMy05IDlzNC4wMyA5IDkgOSA5LTQuMDMgOS05YzAtLjQ2LS4wNC0uOTItLjEtMS4zNi0uOTggMS4zNy0yLjU4IDIuMjYtNC40IDIuMjYtMi45OCAwLTUuNC0yLjQyLTUuNC01LjQgMC0xLjgxLjg5LTMuNDIgMi4yNi00LjQtLjQ0LS4wNi0uOS0uMS0xLjM2LS4xeiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg+PC9zdmc+", z = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHRpdGxlPSJsaWdodE1vZGVJY29uIiBmb2N1c2FibGU9ImZhbHNlIiB0YWJpbmRleD0iLTEiIGFyaWEtaGlkZGVuPSJ0cnVlIiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiA3Yy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1IDUtMi4yNCA1LTUtMi4yNC01LTUtNXpNMiAxM2gyYy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xSDJjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDF6bTE4IDBoMmMuNTUgMCAxLS40NSAxLTFzLS40NS0xLTEtMWgtMmMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMXpNMTEgMnYyYzAgLjU1LjQ1IDEgMSAxczEtLjQ1IDEtMVYyYzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxem0wIDE4djJjMCAuNTUuNDUgMSAxIDFzMS0uNDUgMS0xdi0yYzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxek01Ljk5IDQuNThjLS4zOS0uMzktMS4wMy0uMzktMS40MSAwLS4zOS4zOS0uMzkgMS4wMyAwIDEuNDFsMS4wNiAxLjA2Yy4zOS4zOSAxLjAzLjM5IDEuNDEgMHMuMzktMS4wMyAwLTEuNDFMNS45OSA0LjU4em0xMi4zNyAxMi4zN2MtLjM5LS4zOS0xLjAzLS4zOS0xLjQxIDAtLjM5LjM5LS4zOSAxLjAzIDAgMS40MWwxLjA2IDEuMDZjLjM5LjM5IDEuMDMuMzkgMS40MSAwIC4zOS0uMzkuMzktMS4wMyAwLTEuNDFsLTEuMDYtMS4wNnptMS4wNi0xMC45NmMuMzktLjM5LjM5LTEuMDMgMC0xLjQxLS4zOS0uMzktMS4wMy0uMzktMS40MSAwbC0xLjA2IDEuMDZjLS4zOS4zOS0uMzkgMS4wMyAwIDEuNDFzMS4wMy4zOSAxLjQxIDBsMS4wNi0xLjA2ek03LjA1IDE4LjM2Yy4zOS0uMzkuMzktMS4wMyAwLTEuNDEtLjM5LS4zOS0xLjAzLS4zOS0xLjQxIDBsLTEuMDYgMS4wNmMtLjM5LjM5LS4zOSAxLjAzIDAgMS40MXMxLjAzLjM5IDEuNDEgMGwxLjA2LTEuMDZ6IiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4=", m = /* @__PURE__ */ u({
  __name: "ThemeToggle",
  props: {
    theme: {}
  },
  emits: ["update:theme"],
  setup(g, { emit: I }) {
    const D = (M) => {
      I("update:theme", M === "light" ? "dark" : "light");
    };
    return (M, j) => (S(), L(t(N), {
      rounded: "",
      color: "secondary",
      size: "sm",
      onClick: j[0] || (j[0] = (x) => D(M.theme))
    }, {
      icon: A(() => [
        M.theme === "dark" ? (S(), L(t(i), { key: 0 })) : (S(), L(t(z), { key: 1 }))
      ]),
      _: 1
    }));
  }
});
export {
  m as default
};
