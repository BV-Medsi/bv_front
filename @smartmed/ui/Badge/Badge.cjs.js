var m=require("./Badge.css");const e=require("vue"),u=require("../_plugin-vue_export-helper-f246444f.js"),c={name:"Badge"},i=e.defineComponent({...c,props:{value:{default:null},notificationClass:{}},setup(s){const l=s,a="+",{value:t}=e.toRefs(l),n=e.computed(()=>t.value===null?null:typeof t.value=="number"?t.value>99?`99${a}`:`${t.value}`:t.value||" ");return(o,v)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(o.$style.host)},[e.createElementVNode("div",null,[e.renderSlot(o.$slots,"default")]),n.value!==null?(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass(["smed-text_body-xs",o.$style.notification,o.notificationClass])},e.toDisplayString(n.value),3)):e.createCommentVNode("",!0)],2))}}),r="_host_1vnvt_1",p="_notification_1vnvt_6",_={host:r,notification:p},d={$style:_},f=u._export_sfc(i,[["__cssModules",d]]);module.exports=f;