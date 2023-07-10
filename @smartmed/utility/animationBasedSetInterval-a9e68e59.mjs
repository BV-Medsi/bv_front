const l = (e, i) => {
  const n = {
    id: null
  };
  let a = performance.now();
  const o = (t) => {
    t - a >= i && (e(t), a = t), n.id = requestAnimationFrame(o);
  };
  return n.id = requestAnimationFrame(o), {
    stop: () => {
      n.id !== null && cancelAnimationFrame(n.id);
    }
  };
};
export {
  l as a
};
