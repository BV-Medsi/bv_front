var w=require("./Expand.css");const e=require("vue"),u=require("@smartmed/ui/TransitionExpand"),p=require("../_plugin-vue_export-helper-f246444f.js"),r={modelValue:!1},c={name:"Expand"},i=e.defineComponent({...c,props:e.mergeDefaults({modelValue:{type:Boolean},rootClasses:{},wide:{type:Boolean}},r),emits:["update:modelValue"],setup(s,{emit:l}){const n=s,{modelValue:a}=e.toRefs(n),t=e.ref(n.modelValue),d=()=>{t.value=!t.value,l("update:modelValue",t.value)};return e.watch(a,o=>{t.value=o},{immediate:!0}),(o,V)=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("div",{class:e.normalizeClass([o.$style.expand,o.wide&&o.$style.expand_wide,o.rootClasses]),onClick:d},[e.renderSlot(o.$slots,"default",{opened:t.value})],2),e.createVNode(e.unref(u),{opened:t.value},{default:e.withCtx(()=>[e.renderSlot(o.$slots,"content")]),_:3},8,["opened"])]))}}),_="_expand_vqcua_1",m="_expand_wide_vqcua_4",f={expand:_,expand_wide:m},v={$style:f},x=p._export_sfc(i,[["__cssModules",v]]);module.exports=x;
