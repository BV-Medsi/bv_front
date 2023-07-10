import "./VirtualList.css";
import { defineComponent as U, toRefs as X, ref as x, computed as v, onMounted as W, onUpdated as ie, onBeforeUnmount as Y, openBlock as T, createElementBlock as M, renderSlot as R, mergeDefaults as oe, onBeforeMount as ne, watch as y, normalizeClass as P, unref as p, createVNode as w, withCtx as B, createElementVNode as q, normalizeStyle as A, Fragment as ae, renderList as re, createBlock as le } from "vue";
import { _ as G } from "../_plugin-vue_export-helper-dad06003.mjs";
const K = 5, ue = (h, g) => {
  const f = {
    range: {},
    sizes: /* @__PURE__ */ new Map(),
    firstRangeTotalSize: 0,
    firstRangeAverageSize: 0,
    lastCalcIndex: 0,
    fixedSizeValue: 0,
    calcType: "INIT",
    direction: null,
    param: h,
    callUpdate: g,
    offset: 0,
    destroy() {
      this.range = {}, this.sizes = /* @__PURE__ */ new Map(), this.firstRangeTotalSize = 0, this.firstRangeAverageSize = 0, this.lastCalcIndex = 0, this.fixedSizeValue = 0, this.calcType = "INIT", this.offset = 0, this.direction = null;
    },
    // return current render range
    getRange() {
      const { start: e, end: s, padFront: i, padBehind: n } = this.range;
      return {
        start: e,
        end: s,
        padFront: i,
        padBehind: n
      };
    },
    isBehind() {
      return this.direction === "BEHIND";
    },
    isFront() {
      return this.direction === "FRONT";
    },
    // return start index offset
    getOffset(e) {
      return (e < 1 ? 0 : this.getIndexOffset(e)) + this.param.slotHeaderSize;
    },
    updateParam(e, s) {
      this.param && e in this.param && (e === "uniqueIds" && this.sizes.forEach((i, n) => {
        !s.includes(n) && this.sizes.delete(n);
      }), this.param[e] = s);
    },
    // save each size map by id
    saveSize(e, s) {
      this.sizes.set(e, s), this.calcType === "INIT" ? (this.fixedSizeValue = s, this.calcType = "FIXED") : this.calcType === "FIXED" && this.fixedSizeValue !== s && (this.calcType = "DYNAMIC", this.fixedSizeValue = null), this.calcType !== "FIXED" && typeof this.firstRangeTotalSize < "u" && (this.sizes.size < Math.min(this.param.keeps, this.param.uniqueIds.length) ? (this.firstRangeTotalSize = [...this.sizes.values()].reduce(
        (i, n) => i + n,
        0
      ), this.firstRangeAverageSize = Math.round(
        this.firstRangeTotalSize / this.sizes.size
      )) : this.firstRangeTotalSize = null);
    },
    // in some special situation (e.g. length change) we need to update in a row
    // try goiong to render next range by a leading buffer according to current direction
    handleItemsChange() {
      let e = this.range.start;
      this.isFront() ? e = e - K : this.isBehind() && (e = e + K), e = Math.max(e, 0), this.updateRange(this.range.start, this.getEndByStart(e));
    },
    // when slot size change, we also need force update
    handleSlotSizeChange() {
      this.handleItemsChange();
    },
    // calculating range on scroll
    handleScroll(e) {
      this.direction = e < this.offset ? "FRONT" : "BEHIND", this.offset = e, this.param && (this.direction === "FRONT" ? this.handleFront() : this.direction === "BEHIND" && this.handleBehind());
    },
    handleFront() {
      const e = this.getScrollOvers();
      if (this.range.start && e > this.range.start)
        return;
      const s = Math.max(e - this.param.buffer, 0);
      this.checkRange(s, this.getEndByStart(s));
    },
    handleBehind() {
      const e = this.getScrollOvers();
      this.range.start && e < this.range.start + this.param.buffer || this.checkRange(e, this.getEndByStart(e));
    },
    // return the pass overs according to current scroll offset
    getScrollOvers() {
      const e = this.offset - this.param.slotHeaderSize;
      if (e <= 0)
        return 0;
      if (this.isFixedType())
        return Math.floor(e / this.fixedSizeValue);
      let s = 0, i = 0, n = 0, u = this.param.uniqueIds.length;
      for (; s <= u; ) {
        if (i = s + Math.floor((u - s) / 2), n = this.getIndexOffset(i), n === e)
          return i;
        n < e ? s = i + 1 : n > e && (u = i - 1);
      }
      return s > 0 ? --s : 0;
    },
    // return a scroll offset from given index, can efficiency be improved more here?
    // although the call frequency is very high, its only a superposition of numbers
    getIndexOffset(e) {
      if (!e)
        return 0;
      let s = 0, i;
      for (let n = 0; n < e; n++)
        i = this.sizes.get(this.param.uniqueIds[n]), s = s + (typeof i == "number" ? i : this.getEstimateSize());
      return this.lastCalcIndex = Math.max(this.lastCalcIndex, e - 1), this.lastCalcIndex = Math.min(this.lastCalcIndex, this.getLastIndex()), s;
    },
    // is fixed size type
    isFixedType() {
      return this.calcType === "FIXED";
    },
    // return the real last index
    getLastIndex() {
      return this.param.uniqueIds.length - 1;
    },
    // in some conditions range is broke, we need correct it
    // and then decide whether need update to next range
    checkRange(e, s) {
      const i = this.param.keeps;
      this.param.uniqueIds.length <= i ? (e = 0, s = this.getLastIndex()) : s - e < i - 1 && (e = s - i + 1), this.range.start !== e && this.updateRange(e, s);
    },
    // setting to a new range and rerender
    updateRange(e, s) {
      this.range.start = e, this.range.end = s, this.range.padFront = this.getPadFront(), this.range.padBehind = this.getPadBehind(), this.callUpdate(this.getRange());
    },
    // return end base on start
    getEndByStart(e) {
      const s = e + this.param.keeps - 1;
      return Math.min(s, this.getLastIndex());
    },
    // return total front offset
    getPadFront() {
      return this.isFixedType() ? this.fixedSizeValue * this.range.start : this.getIndexOffset(this.range.start);
    },
    // return total behind offset
    getPadBehind() {
      const e = this.range.end, s = this.getLastIndex();
      return this.isFixedType() ? (s - e) * this.fixedSizeValue : this.lastCalcIndex === s ? this.getIndexOffset(s) - this.getIndexOffset(e) : (s - e) * this.getEstimateSize();
    },
    // get the item estimate size
    getEstimateSize() {
      return this.isFixedType() ? this.fixedSizeValue : this.firstRangeAverageSize || this.param.estimateSize;
    }
  };
  return h && f.checkRange(0, h.keeps - 1), f;
}, he = U({
  name: "VirtualListItem",
  props: {
    horizontal: {
      type: Boolean
    }
  },
  setup(h, g) {
    const { horizontal: f } = X(h), e = x(null);
    let s = null;
    const i = v(
      () => f.value ? "offsetWidth" : "offsetHeight"
    );
    W(() => {
      typeof ResizeObserver < "u" && e.value && (s = new ResizeObserver(() => {
        n();
      }), s.observe(e.value));
    });
    const n = () => {
      g.emit("item-resize", u());
    }, u = () => e.value ? e.value[i.value] : 0;
    return ie(() => {
      n();
    }), Y(() => {
      s && (s.disconnect(), s = null);
    }), {
      root: e
    };
  }
}), de = {
  ref: "root",
  role: "listitem"
};
function ce(h, g, f, e, s, i) {
  return T(), M("div", de, [
    R(h.$slots, "default")
  ], 512);
}
const b = /* @__PURE__ */ G(he, [["render", ce]]), fe = {
  items: () => [],
  dataKey: "id",
  keeps: 50,
  estimateSize: 50,
  direction: "vertical",
  start: 0,
  offset: 0,
  topThreshold: 0,
  bottomThreshold: 0
}, pe = {
  name: "VirtualList"
}, ge = /* @__PURE__ */ U({
  ...pe,
  props: oe({
    items: {},
    dataKey: {},
    keeps: {},
    estimateSize: {},
    pageMode: { type: Boolean },
    direction: {},
    start: {},
    offset: {},
    topThreshold: {},
    bottomThreshold: {}
  }, fe),
  emits: ["totop", "tobottom"],
  setup(h, { expose: g, emit: f }) {
    const e = h, {
      dataKey: s,
      items: i,
      direction: n,
      start: u,
      offset: F,
      topThreshold: j,
      bottomThreshold: J,
      keeps: Q,
      pageMode: d
    } = X(e), S = x({}), r = x(null), I = x(null), Z = (t) => {
      S.value = t;
    }, O = v(() => i.value.map((t) => t[s.value])), c = v(() => n.value === "horizontal"), m = v(
      () => c.value ? "scrollLeft" : "scrollTop"
    ), l = ue(
      {
        slotHeaderSize: 0,
        slotFooterSize: 0,
        keeps: e.keeps,
        estimateSize: e.estimateSize,
        buffer: Math.round(e.keeps / 3),
        // recommend for a third of keeps
        uniqueIds: O.value
      },
      Z
    );
    ne(() => {
      z(l.offset);
    }), W(() => {
      u.value ? C(u.value) : F.value && z(F.value), d.value && (ee(), document.addEventListener("scroll", _, {
        passive: !1
      }));
    });
    const C = (t) => {
      if (t >= i.value.length - 1)
        k();
      else {
        const o = l.getOffset(t);
        z(o);
      }
    }, k = () => {
      if (I.value) {
        const t = I.value[c.value ? "offsetLeft" : "offsetTop"];
        z(t), setTimeout(() => {
          $() + V() < L() && k();
        });
      }
    }, $ = () => d.value ? document.documentElement[m.value] || document.body[m.value] : r.value ? Math.ceil(r.value[m.value]) : 0, V = () => {
      const t = c.value ? "clientWidth" : "clientHeight";
      return d.value ? document.documentElement[t] || document.body[t] : r.value ? Math.ceil(r.value[t]) : 0;
    }, L = () => {
      const t = c.value ? "scrollWidth" : "scrollHeight";
      return d.value ? document.documentElement[t] || document.body[t] : r.value ? Math.ceil(r.value[t]) : 0;
    }, z = (t) => {
      if (d.value) {
        document.body[m.value] = t, document.documentElement[m.value] = t;
        return;
      }
      r.value && (r.value[m.value] = t);
    }, ee = () => {
      if (!r.value)
        return;
      const t = r.value.getBoundingClientRect(), { defaultView: o } = r.value.ownerDocument;
      if (o) {
        const a = c.value ? t.left + o.pageXOffset : t.top + o.pageYOffset;
        l.updateParam("slotHeaderSize", a);
      }
    }, te = (t, o, a) => {
      l.isFront() && i.value.length && t - j.value <= 0 ? f("totop") : l.isBehind() && t + o + J.value >= a && f("tobottom");
    }, _ = () => {
      const t = $(), o = V(), a = L();
      t < 0 || t + o > a + 1 || !a || (l.handleScroll(t), te(t, o, a));
    };
    Y(() => {
      l.destroy(), d.value && document.removeEventListener("scroll", _);
    });
    const N = v(() => {
      const { padBehind: t, padFront: o } = S.value;
      return {
        padding: c.value ? `0px ${t}px 0px ${o}px` : `${o}px 0px ${t}px`
      };
    }), D = v(() => {
      const { start: t, end: o } = S.value;
      return t === void 0 || o === void 0 ? i.value : i.value.slice(t, o + 1);
    }), H = (t, o) => {
      l.saveSize(t, o);
    }, E = (t, o) => {
      l.updateParam(t, o);
    };
    return y(Q, (t) => {
      l.updateParam("keeps", t), l.handleSlotSizeChange();
    }), y(u, (t) => {
      C(t);
    }), y(F, (t) => {
      z(t);
    }), y(i, () => {
      l.updateParam("uniqueIds", O.value), l.handleItemsChange();
    }), g({
      root: r,
      shepherd: I,
      onScroll: _,
      groupStyle: N,
      isHorizontal: c,
      range: S,
      computedItems: D,
      onItemResized: H,
      onSlotResized: E,
      scrollToBottom: k
    }), (t, o) => (T(), M("div", {
      ref_key: "root",
      ref: r,
      class: P([
        !p(d) && t.$style.rootScrollable,
        !p(d) && t.$style["rootScrollable_" + p(n)],
        t.$style.root,
        t.$style["root_" + p(n)]
      ]),
      onScroll: o[2] || (o[2] = (a) => !p(d) && _())
    }, [
      w(b, {
        onItemResize: o[0] || (o[0] = (a) => E("slotHeaderSize", a))
      }, {
        default: B(() => [
          R(t.$slots, "before")
        ]),
        _: 3
      }),
      q("div", {
        role: "group",
        class: P([t.$style.group, t.$style["group_" + p(n)]]),
        style: A(N.value)
      }, [
        (T(!0), M(ae, null, re(D.value, (a) => (T(), le(b, {
          key: a[p(s)],
          onItemResize: (se) => H(a.id, se)
        }, {
          default: B(() => [
            R(t.$slots, "default", { item: a })
          ]),
          _: 2
        }, 1032, ["onItemResize"]))), 128))
      ], 6),
      w(b, {
        onItemResize: o[1] || (o[1] = (a) => E("slotFooterSize", a))
      }, {
        default: B(() => [
          R(t.$slots, "after")
        ]),
        _: 3
      }),
      q("div", {
        ref_key: "shepherd",
        ref: I,
        style: A({
          width: c.value ? "0px" : "100%",
          height: c.value ? "100%" : "0px"
        })
      }, null, 4)
    ], 34));
  }
}), me = "_rootScrollable_horizontal_1kox7_1", ve = "_rootScrollable_vertical_1kox7_4", ze = "_root_1kox7_1", Se = "_group_1kox7_9", Ie = "_root_horizontal_1kox7_12", _e = "_group_horizontal_1kox7_13", ye = "_root_vertical_1kox7_16", xe = "_group_vertical_1kox7_17", Te = {
  rootScrollable_horizontal: me,
  rootScrollable_vertical: ve,
  root: ze,
  group: Se,
  root_horizontal: Ie,
  group_horizontal: _e,
  root_vertical: ye,
  group_vertical: xe
}, Re = {
  $style: Te
}, Be = /* @__PURE__ */ G(ge, [["__cssModules", Re]]);
export {
  Be as default
};
