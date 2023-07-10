var Z=require("./BaseCheckbox.css");const e=require("vue"),V=require("@smartmed/ui/SvgIcon"),s=require("@smartmed/ui/use"),z=require("@smartmed/utility/directives"),E=require("@smartmed/utility/vue"),D=require("../_plugin-vue_export-helper-f246444f.js"),q={modelValue:!1,disabled:!1,label:"",size:"md",isError:!1},H=["disabled","for"],N=["id","checked","disabled"],S={key:0},I={name:"BaseCheckbox"},M=e.defineComponent({...I,props:e.mergeDefaults({modelValue:{type:[Boolean,null]},disabled:{type:Boolean},label:{},size:{},isError:{type:Boolean},pseudoHovered:{type:Boolean}},q),emits:["update:modelValue"],setup(r,{expose:d,emit:_}){const i=r,{modelValue:c,isError:u,disabled:h,pseudoHovered:b,label:t}=e.toRefs(i),k=e.useSlots(),{id:n,native:m,focus:v,blur:p}=s.useInteractive(),f=s.useControlInvalid(u),l=s.useControlDisabled(h),a=e.ref(!1),x=e.computed(()=>c.value===null?"minus":"check"),y=e.computed(()=>b.value||a.value),g=e.computed(()=>t.value||E.hasSlotContent(k.default)),w=o=>{const $=o.target.checked;_("update:modelValue",$)},C=o=>{a.value=o};return d({focus:v,blur:p}),(o,B)=>e.withDirectives((e.openBlock(),e.createElementBlock("label",{class:e.normalizeClass([o.$style.label,o.$style["label_"+o.size]]),disabled:e.unref(l),for:e.unref(n)},[e.createElementVNode("div",{class:e.normalizeClass([o.$style.checkbox,o.$style["checkbox_"+o.size],e.unref(c)!==!1&&o.$style.checkbox_checked,e.unref(f)&&o.$style.checkbox_invalid,e.unref(l)&&o.$style.checkbox_disabled,y.value&&o.$style.checkbox_hovered])},[e.unref(c)!==!1?(e.openBlock(),e.createBlock(e.unref(V),{key:0,size:o.size,name:x.value},null,8,["size","name"])):e.createCommentVNode("",!0),e.createElementVNode("input",{id:e.unref(n),ref_key:"native",ref:m,type:"checkbox",class:e.normalizeClass(o.$style.native),checked:!!e.unref(c),disabled:e.unref(l),onChange:w},null,42,N)],2),g.value?(e.openBlock(),e.createElementBlock("span",S,[e.renderSlot(o.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(e.unref(t)),1)])])):e.createCommentVNode("",!0)],10,H)),[[e.unref(z.HoveredDirective),{onEvent:C}]])}}),P="_label_1whr0_1",R="_label_sm_1whr0_7",T="_label_md_1whr0_12",j="_label_lg_1whr0_17",A="_checkbox_1whr0_23",F="_checkbox_sm_1whr0_30",G="_checkbox_md_1whr0_39",J="_checkbox_lg_1whr0_48",K="_checkbox_hovered_1whr0_57",L="_checkbox_disabled_1whr0_57",O="_checkbox_invalid_1whr0_57",Q="_checkbox_checked_1whr0_64",U="_native_1whr0_79",W={label:P,label_sm:R,label_md:T,label_lg:j,checkbox:A,checkbox_sm:F,checkbox_md:G,checkbox_lg:J,checkbox_hovered:K,checkbox_disabled:L,checkbox_invalid:O,checkbox_checked:Q,native:U},X={$style:W},Y=D._export_sfc(M,[["__cssModules",X]]);module.exports=Y;