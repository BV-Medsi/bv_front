var b=require("./PasswordInput.css");const e=require("vue"),h=require("@smartmed/ui/BaseInput"),v=require("@smartmed/ui/SvgIcon"),l=require("@smartmed/utility/vue"),S=require("../BaseInput.props-4886ef7a.js"),w=require("../_plugin-vue_export-helper-f246444f.js"),B={...S.BaseInputDefaultProps,name:"password",autocomplete:"on"},_={name:"PasswordInput"},g=e.defineComponent({..._,props:e.mergeDefaults({modelValue:{},modelModifiers:{},type:{},size:{},disabled:{type:Boolean},label:{},description:{},editable:{type:Boolean},maskOptions:{},isError:{type:Boolean},isSuccess:{type:Boolean},placeholder:{},autocomplete:{},name:{},hasCleaner:{type:Boolean},decoratorPostfix:{},decoratorPostfixColorClass:{},inputmode:{},readonly:{type:Boolean},stringify:{type:Function},id:{},dataAutomationId:{},pseudoHovered:{type:Boolean},pseudoFocused:{type:Boolean},inputStyles:{},rightSlotPadding:{}},B),emits:["update:modelValue"],setup(i,{emit:c}){const a=i,n=e.useSlots(),{size:d}=e.toRefs(a),t=e.ref(!1),p=e.computed(()=>l.hasSlotContent(n.left)),m=e.computed(()=>l.hasSlotContent(n.label)),y=e.computed(()=>l.hasSlotContent(n.description)),f=e.computed(()=>d.value==="sm"?"md":"lg"),C=()=>{t.value=!t.value},r=o=>{c("update:modelValue",o)};return(o,u)=>(e.openBlock(),e.createBlock(e.unref(h),e.mergeProps(a,{type:t.value?"text":"password","model-value":o.modelValue,"onUpdate:modelValue":r,onSearchClear:u[0]||(u[0]=s=>r(null))}),{left:e.withCtx(s=>[p.value?e.renderSlot(o.$slots,"left",{key:0,size:s==null?void 0:s.size}):e.createCommentVNode("",!0)]),right:e.withCtx(()=>[e.createVNode(e.unref(v),{class:e.normalizeClass(o.$style.icon),name:t.value?"see":"unsee",size:f.value,onClick:C},null,8,["class","name","size"])]),label:e.withCtx(()=>[m.value?e.renderSlot(o.$slots,"label",{key:0}):e.createCommentVNode("",!0)]),description:e.withCtx(()=>[y.value?e.renderSlot(o.$slots,"description",{key:0}):e.createCommentVNode("",!0)]),_:3},16,["type","model-value"]))}}),P="_icon_91mi1_1",V={icon:P},z={$style:V},I=w._export_sfc(g,[["__cssModules",z]]);module.exports=I;