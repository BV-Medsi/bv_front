"use strict";const e=require("vue"),t=require("@smartmed/utility/consts"),c=require("@smartmed/utility/numbers"),l={name:"Money"},a=e.defineComponent({...l,props:{value:{}},setup(o){const r=o,{value:s}=e.toRefs(r),u=e.computed(()=>{const n=s.value;return n===null?"":`${c.formatNumber(n)}${t.CHAR_NO_BREAK_SPACE}${t.CHAR_RUBLE}`});return(n,_)=>(e.openBlock(),e.createElementBlock("span",null,e.toDisplayString(u.value),1))}});module.exports=a;
