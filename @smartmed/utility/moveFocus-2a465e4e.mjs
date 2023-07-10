function o(e = document) {
  if (!e.activeElement || !e.activeElement.shadowRoot)
    return e.activeElement;
  let t = e.activeElement.shadowRoot.activeElement;
  for (; t && t.shadowRoot; )
    t = t.shadowRoot.activeElement;
  return t;
}
function s(e, t = !0, a = !1) {
  t ? e.focus({ preventScroll: a }) : e.blur();
}
function c() {
  const e = o();
  e instanceof HTMLElement && s(e, !1);
}
function i(e) {
  if (e.hasAttribute("disabled") || e.getAttribute("tabIndex") === "-1")
    return !1;
  if (e instanceof HTMLElement && e.isContentEditable || e.getAttribute("tabIndex") === "0")
    return !0;
  switch (e.tagName) {
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return !0;
    case "VIDEO":
    case "AUDIO":
      return e.hasAttribute("controls");
    case "INPUT":
      return e.getAttribute("type") !== "hidden";
    case "A":
    case "LINK":
      return e.hasAttribute("href");
    default:
      return !1;
  }
}
const u = (e) => "ownerSVGElement" in e ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
function l(e, t = !1, a) {
  if (!a.ownerDocument)
    return null;
  const r = a.ownerDocument.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, u);
  for (r.currentNode = e; t ? r.previousNode() : r.nextNode(); )
    if (r.currentNode instanceof HTMLElement && (e = r.currentNode), i(e))
      return e;
  return null;
}
function n(e) {
  return !!e && !!e.ownerDocument && o(e.ownerDocument) === e;
}
function E(e, t, a) {
  for (e += a; e >= 0 && e < t.length; ) {
    if (s(t[e]), n(t[e]))
      return;
    e += a;
  }
}
export {
  o as a,
  c as b,
  i as c,
  l as g,
  n as i,
  E as m,
  s
};
