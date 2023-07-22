var K=require("./BaseCheckbox.css");const e=require("vue"),w=require("@smartmed/ui/PrimitiveCheckbox"),l=require("@smartmed/ui/use"),x=require("@smartmed/utility/directives"),D=require("@smartmed/utility/vue"),E=require("../_plugin-vue_export-helper-f246444f.js"),q={modelValue:!1,disabled:!1,label:"",size:"md",isError:!1,pseudoHovered:!1},$=["disabled","for"],N=["id","checked","disabled"],S={key:0},I=e.defineComponent({name:"BaseCheckbox",__name:"BaseCheckbox",props:e.mergeDefaults({modelValue:{type:[Boolean,null]},disabled:{type:Boolean},label:{},size:{},isError:{type:Boolean},pseudoHovered:{type:Boolean}},q),emits:["update:modelValue"],setup(d,{expose:c,emit:u}){const i=d,{modelValue:t,isError:b,disabled:_,pseudoHovered:v,label:a}=e.toRefs(i),f=e.useSlots(),{id:n,native:p,focus:m,blur:h,focused:y}=l.useInteractive(),k=l.useControlInvalid(b),s=l.useControlDisabled(_),r=e.ref(!1),C=e.computed(()=>v.value||r.value),B=e.computed(()=>a.value||D.hasSlotContent(f.default)),g=o=>{const H=o.target.checked;u("update:modelValue",H)},V={onEvent:o=>{r.value=o}};return c({focus:m,blur:h}),(o,z)=>e.withDirectives((e.openBlock(),e.createElementBlock("label",{class:e.normalizeClass([o.$style.label,o.$style["label_"+o.size]]),disabled:e.unref(s),for:e.unref(n)},[e.createVNode(e.unref(w),{value:e.unref(t),invalid:e.unref(k),disabled:e.unref(s),hovered:C.value,size:o.size,focused:e.unref(y)},{default:e.withCtx(()=>[e.createElementVNode("input",{id:e.unref(n),ref_key:"native",ref:p,type:"checkbox",class:e.normalizeClass(o.$style.native),checked:!!e.unref(t),disabled:e.unref(s),onChange:g},null,42,N)]),_:1},8,["value","invalid","disabled","hovered","size","focused"]),B.value?(e.openBlock(),e.createElementBlock("span",S,[e.renderSlot(o.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(e.unref(a)),1)])])):e.createCommentVNode("",!0)],10,$)),[[e.unref(x.HoveredDirective),V]])}}),P="_label_17ybw_1",M="_label_sm_17ybw_7",R="_label_md_17ybw_12",T="_label_lg_17ybw_17",j="_native_17ybw_23",A={label:P,label_sm:M,label_md:R,label_lg:T,native:j},F={$style:A},G=E._export_sfc(I,[["__cssModules",F]]);module.exports=G;
