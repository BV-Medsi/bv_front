"use strict";const e=require("vue"),s={key:0},l=e.defineComponent({__name:"LinkOrButton",props:{to:{}},setup(c){return(t,i)=>{const o=e.resolveComponent("router-link");return t.to?(e.openBlock(),e.createBlock(o,{key:1,to:t.to},{default:e.withCtx(({isActive:n,isExactActive:r})=>[e.renderSlot(t.$slots,"default",{isActive:n,isExactActive:r})]),_:3},8,["to"])):(e.openBlock(),e.createElementBlock("button",s,[e.renderSlot(t.$slots,"default",{isActive:!1,isExactActive:!1})]))}}});exports._sfc_main=l;