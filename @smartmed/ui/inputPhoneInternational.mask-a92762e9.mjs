const n = /\d/, x = (s) => s.split("").map((t) => t === "x" ? n : t);
[...x(" (xxx) xxx-xx-xx")];
[
  ...x(" (xxx) xxx-xx-xx")
];
[...x(" xx xxx xxxx")];
[...x(" xx xxxxxx")];
[...x(" xx xxx xxxx")];
[...x(" xxx xxx xxx")];
[...x(" xxx xxxxxx")];
[...x(" xx xxxxxxx")];
[...x(" xx xxx xxx")];
[...x(" xx-xxx-xxx")];
[...x(" xx-xxx-xxxx")];
