function c(l, r, t, e) {
  return t ? n(l, r, e) : a(l, r, e);
}
function n(l, r, t) {
  let e = l;
  for (; e !== r.parentElement; ) {
    if (Math.floor(e.scrollTop) > 0 && !t || Math.ceil(e.scrollTop + e.clientHeight) < e.scrollHeight && t)
      return !0;
    if (e.parentElement)
      e = e.parentElement;
    else
      return !1;
  }
  return !1;
}
function a(l, r, t) {
  let e = l;
  for (; e !== r.parentElement; ) {
    if (Math.floor(e.scrollLeft) > 0 && !t || Math.ceil(e.scrollLeft + e.clientWidth) < e.scrollWidth && t)
      return !0;
    if (e.parentElement)
      e = e.parentElement;
    else
      return !1;
  }
  return !1;
}
export {
  c
};
