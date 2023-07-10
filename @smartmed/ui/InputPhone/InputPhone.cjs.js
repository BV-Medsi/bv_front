"use strict";const e=require("vue"),m=require("@smartmed/ui/BaseInput"),h=require("@smartmed/utility/maskito"),s=require("@smartmed/utility/vue"),y=require("../InputPhone.props-156b5c0e.js"),f={name:"InputPhone"},C=e.defineComponent({...f,props:e.mergeDefaults({modelValue:{},modelModifiers:{},type:{},size:{},disabled:{type:Boolean},label:{},description:{},editable:{type:Boolean},isError:{type:Boolean},isSuccess:{type:Boolean},placeholder:{},autocomplete:{},name:{},hasCleaner:{type:Boolean},decoratorPostfix:{},decoratorPostfixColorClass:{},inputmode:{},readonly:{type:Boolean},stringify:{type:Function},id:{},dataAutomationId:{},pseudoHovered:{type:Boolean},pseudoFocused:{type:Boolean},inputStyles:{},rightSlotPadding:{}},y.InputPhoneDefaultProps),emits:["update:modelValue"],setup(r,{emit:u}){const i=r,n=e.useSlots(),d=e.computed(()=>s.hasSlotContent(n.left)),p=e.computed(()=>s.hasSlotContent(n.label)),c=e.computed(()=>s.hasSlotContent(n.description)),l=o=>{u("update:modelValue",o)};return(o,a)=>(e.openBlock(),e.createBlock(e.unref(m),e.mergeProps(i,{"model-value":o.modelValue,"mask-options":e.unref(h.inputPhoneMask),"onUpdate:modelValue":l,onSearchClear:a[0]||(a[0]=t=>l(""))}),{left:e.withCtx(t=>[d.value?e.renderSlot(o.$slots,"left",{key:0,size:t==null?void 0:t.size}):e.createCommentVNode("",!0)]),label:e.withCtx(()=>[p.value?e.renderSlot(o.$slots,"label",{key:0}):e.createCommentVNode("",!0)]),description:e.withCtx(()=>[c.value?e.renderSlot(o.$slots,"description",{key:0}):e.createCommentVNode("",!0)]),_:3},16,["model-value","mask-options"]))}});module.exports=C;