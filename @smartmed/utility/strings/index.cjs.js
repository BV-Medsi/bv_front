"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s=require("@maskito/core"),n=require("../inputPhoneInternational.mask-7ddee241.js"),a=require("../internationalCountries-f44fa299.js");function c(e){return e.replace(/[A-Z]/g,(t,r)=>(r!==0?"-":"")+t.toLowerCase())}function m(e){return s.maskitoTransform(n.getPhoneNumber(e),n.inputPhoneInternationalMask)}let h=0;function l(){return`smed-element_${h++}_${Date.now()}`}function g(e){const t=n.getPhoneNumber(e),r=`+${t}`,i=t.length,o=a.internationalCountries.find(({prefix:u})=>r.startsWith(u));return!!o&&o.digitsCount===i}exports.getPhoneNumber=n.getPhoneNumber;exports.dasherize=c;exports.formatPhone=m;exports.getUniqElementId=l;exports.isCorrectPhoneNumber=g;
