"use strict";const i=require("./inputPhoneInternational.mask-7ddee241.js");function u(){const r=e=>e.replace(/^(\+?7?\s?8?)\s?/,""),n=e=>e.replace(/\D/g,"").length,c=(e,t)=>e?t:t==="8"?"7":t;return({elementState:e,data:t})=>{const{value:s,selection:o}=e;return{elementState:{selection:o,value:n(s)>11?r(s):s},data:n(t)>=11?r(t):c(s,t)}}}const a={mask:i.AUTO_FIX_TO_KZ_OR_RU_MASK,preprocessors:[u()]};exports.inputPhoneMask=a;
