var $=require("./LineClamp.css");const e=require("vue"),u=require("../_plugin-vue_export-helper-f246444f.js"),a={name:"LineClamp"},p=e.defineComponent({...a,props:{lineHeight:{},linesLimit:{}},setup(l){const s=l,{lineHeight:r,linesLimit:o}=e.toRefs(s),n=e.ref(null),i=e.computed(()=>n.value?{height:`${n.value.scrollHeight+4}px`,"max-height":`${r.value*o.value}px`}:{}),c=e.computed(()=>({"-webkit-line-clamp":o.value}));return(t,h)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"rootElement",ref:n,class:e.normalizeClass(t.$style.root),style:e.normalizeStyle(i.value)},[e.createElementVNode("div",{class:e.normalizeClass([t.$style.content,e.unref(o)===1&&t.$style.content_ellipsis]),style:e.normalizeStyle(c.value)},[e.renderSlot(t.$slots,"default")],6)],6))}}),_="_root_qrom1_1",m="_content_qrom1_7",y="_content_ellipsis_qrom1_12",d={root:_,content:m,content_ellipsis:y},f={$style:d},v=u._export_sfc(p,[["__cssModules",f]]);module.exports=v;