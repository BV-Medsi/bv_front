var G=require("./DataList.css");const e=require("vue"),B=require("@smartmed/ui/Spinner"),y=require("@smartmed/ui/SvgIcon"),C=require("@smartmed/ui/VirtualList"),_=require("@smartmed/utility/directives"),v=require("@smartmed/utility/dom/focus"),z=require("@smartmed/utility/vue"),V=require("../_plugin-vue_export-helper-f246444f.js"),g={size:"md",virtualProps:null,items:()=>[],matcher:(m,c)=>m===c,overflowy:!0},b={key:0},D=["onKeydown","onClick"],E=["onKeydown","onClick"],F={name:"DataList"},K=e.defineComponent({...F,props:e.mergeDefaults({modelValue:{},items:{},size:{},virtualListProps:{},matcher:{type:Function},overflowy:{type:Boolean}},g),emits:["update:modelValue"],setup(m,{emit:c}){const d=m,{items:l,size:n}=e.toRefs(d),k=e.useSlots(),f=e.computed(()=>l.value===null),p=e.computed(()=>n.value==="sm"?"md":"lg"),w=e.computed(()=>z.hasSlotContent(k.action)),$=(t,s)=>{const o=t;v.moveFocus(s,o,-1)},h=(t,s)=>{const o=t;v.moveFocus(s,o,1)},i=t=>{c("update:modelValue",t)},a=(t,s)=>d.matcher(t,s);return(t,s)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([t.$style.list,t.overflowy&&t.$style.list_overflowy])},[f.value?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass([t.$style.spinner,t.$style["item_"+e.unref(n)]])},[e.createVNode(e.unref(B),{theme:"primary",size:"md"})],2)):(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.unref(l)&&e.unref(l).length>0?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[t.virtualListProps?(e.openBlock(),e.createBlock(e.unref(C),e.mergeProps({key:1},t.virtualListProps,{items:e.unref(l)}),{default:e.withCtx(({item:o})=>[e.withDirectives((e.openBlock(),e.createElementBlock("li",{tabindex:"0",class:e.normalizeClass(["smed-text_body-xl",t.$style.item,t.$style.item_hoverable,t.$style["item_"+e.unref(n)]]),onKeydown:e.withKeys(e.withModifiers(r=>i(o),["stop","prevent"]),["enter"]),onClick:r=>i(o)},[e.renderSlot(t.$slots,"itemContent",{item:o,active:a(t.modelValue,o)},()=>[e.createElementVNode("span",null,e.toDisplayString(o),1),a(t.modelValue,o)?(e.openBlock(),e.createBlock(e.unref(y),{key:0,name:"check",class:e.normalizeClass(t.$style.icon),size:p.value},null,8,["class","size"])):e.createCommentVNode("",!0)])],42,E)),[[e.unref(_.KeyboardFocusedDirective)]])]),after:e.withCtx(()=>[e.renderSlot(t.$slots,"action")]),_:3},16,["items"])):(e.openBlock(),e.createElementBlock("ul",b,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(l),(o,r)=>e.withDirectives((e.openBlock(),e.createElementBlock("li",{ref_for:!0,ref:"element",key:r,tabindex:"0",class:e.normalizeClass(["smed-text_body-xl",t.$style.item,t.$style.item_hoverable,t.$style["item_"+e.unref(n)]]),onKeydown:[e.withKeys(e.withModifiers(u=>$(t.$refs.element,r),["prevent","stop"]),["up"]),e.withKeys(e.withModifiers(u=>h(t.$refs.element,r),["prevent","stop"]),["down"]),e.withKeys(e.withModifiers(u=>i(o),["stop","prevent"]),["enter"])],onClick:u=>i(o)},[e.renderSlot(t.$slots,"itemContent",{item:o,active:a(t.modelValue,o)},()=>[e.createElementVNode("span",null,e.toDisplayString(o),1),a(t.modelValue,o)?(e.openBlock(),e.createBlock(e.unref(y),{key:0,name:"check",class:e.normalizeClass(t.$style.icon),size:p.value},null,8,["class","size"])):e.createCommentVNode("",!0)])],42,D)),[[e.unref(_.KeyboardFocusedDirective)]])),128)),w.value?(e.openBlock(),e.createElementBlock("li",{key:0,class:e.normalizeClass(["smed-text_body-xl",t.$style.item,t.$style.item_hoverable,t.$style["item_"+e.unref(n)]])},[e.renderSlot(t.$slots,"action")],2)):e.createCommentVNode("",!0)]))],64)):(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(["smed-text_body-xl",t.$style.item,t.$style.item_notFound,t.$style["item_"+e.unref(n)]])},[e.renderSlot(t.$slots,"emptyContent",{},()=>[e.createTextVNode(" Ничего не найдено ")])],2))],64))],2))}}),S="_list_nwajm_1",j="_list_overflowy_nwajm_7",L="_icon_nwajm_11",q="_spinner_nwajm_16",N="_item_nwajm_20",M="_item_notFound_nwajm_26",P="_item_hoverable_nwajm_30",A="_item_sm_nwajm_33",U="_item_md_nwajm_36",H="_item_lg_nwajm_39",I={list:S,list_overflowy:j,icon:L,spinner:q,item:N,item_notFound:M,item_hoverable:P,item_sm:A,item_md:U,item_lg:H},R={$style:I},T=V._export_sfc(K,[["__cssModules",R]]);module.exports=T;