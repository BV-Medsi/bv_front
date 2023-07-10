var ne=require("./TableBar.css");const e=require("vue"),I=require("@smartmed/ui/Portal"),R=require("@smartmed/ui/Scrollbar"),D=require("@smartmed/ui/SvgIcon"),h=require("@smartmed/ui/tokens"),S=require("@smartmed/ui/use"),_=require("@smartmed/utility/directives"),z=require("@smartmed/utility/functions"),F=require("../_plugin-vue_export-helper-f246444f.js"),M={direction:"bottom"},L=["data-automation-id"],H={name:"TableBar"},P=e.defineComponent({...H,props:e.mergeDefaults({modelValue:{type:Boolean},direction:{},overlay:{type:Boolean},rootClass:{},contentClass:{},dataAutomationId:{},closeButton:{type:Boolean}},M),emits:["update:modelValue"],setup(g,{emit:y}){const b=g,n=12,r=72,{modelValue:s,overlay:o,direction:l}=e.toRefs(b),C=e.computed(()=>o.value?"all":"none"),c=S.useOverscroll(C,t=>t),d=e.ref(s.value),m=e.ref(!1),a=e.inject(h.TABLE_BAR_HOST_TOKEN),w=e.inject(h.ANIMATION_FRAME_EVENTS_TOKEN),i=()=>{y("update:modelValue",!1)},E=()=>{o.value&&i()},f=t=>{if(!c.value)return;const u=t.target;!c.value.contains(u)&&i()},k=()=>{document.addEventListener("click",f)},v=()=>{document.removeEventListener("click",f)},N=()=>{var p;const t=(p=c.value)==null?void 0:p.getBoundingClientRect();if(!t)return!1;const u=l.value,{left:B,right:O,top:A,bottom:$}=t,q=window.innerWidth,x=window.innerHeight;switch(u){case"left":return q-O-r-n<0;case"right":return B-r-n<0;case"top":return x-$-r-n<0;default:return A-r-n<0}};e.onBeforeUnmount(()=>{v(),o.value&&a&&a.value.hideOverlay()}),e.watch(s,t=>{t&&o.value?(a&&a.value.showOverlay(),setTimeout(()=>k())):!t&&o.value&&(a&&a.value.hideOverlay(),v())}),e.watch(s,t=>{t&&(d.value=t)},{immediate:!0});const T=z.useThrottleFn(()=>{if(!s.value)return;const t=N();m.value=t},300);b.closeButton&&e.watch(w,T,{immediate:!0});const V=()=>{d.value=!1};return(t,u)=>d.value?(e.openBlock(),e.createBlock(e.unref(I),{key:0,"append-to":e.unref(o)?"#smed_table-bar-overlayable":"#smed_table-bars"},{default:e.withCtx(()=>[e.createVNode(e.Transition,{appear:"",name:"smed-table-bar_"+e.unref(l),onAfterLeave:V},{default:e.withCtx(()=>[e.unref(s)?e.withDirectives((e.openBlock(),e.createElementBlock("section",{key:0,ref_key:"tableBarRef",ref:c,"data-automation-id":t.dataAutomationId||"smed-table-bar",class:e.normalizeClass(["smed-table-bar",`smed-table-bar_${e.unref(l)}`,t.$style.tableBar,t.$style["tableBar_"+e.unref(l)],t.rootClass])},[e.createElementVNode("div",{class:e.normalizeClass(["smed-table-bar__content",t.$style.content])},[e.createVNode(e.unref(R),{class:e.normalizeClass(t.$style.scrollbar)},{default:e.withCtx(()=>[e.createElementVNode("div",{class:e.normalizeClass(t.contentClass)},[e.renderSlot(t.$slots,"default",{close:i})],2)]),_:3},8,["class"]),t.closeButton&&e.unref(s)?e.withDirectives((e.openBlock(),e.createElementBlock("button",{key:0,"data-automation-id":"smed-table-bar-close-button",class:e.normalizeClass([t.$style.close,t.$style["close_"+e.unref(l)],m.value&&t.$style.close_inside]),onClick:i},[e.createVNode(e.unref(D),{name:"close",size:"xl"})],2)),[[e.unref(_.KeyboardFocusedDirective)]]):e.createCommentVNode("",!0)],2)],10,L)),[[e.unref(_.EscDirective),{onEvent:E}],[e.unref(_.FocustrapDirective),{handle:e.unref(o)}]]):e.createCommentVNode("",!0)]),_:3},8,["name"])]),_:3},8,["append-to"])):e.createCommentVNode("",!0)}}),K="_tableBar_1gxvd_1",j="_tableBar_bottom_1gxvd_9",U="_tableBar_top_1gxvd_13",W="_tableBar_left_1gxvd_17",G="_tableBar_right_1gxvd_22",Z="_content_1gxvd_28",J="_scrollbar_1gxvd_34",Q="_close_1gxvd_38",X="_close_left_1gxvd_83",Y="_close_right_1gxvd_89",ee="_close_bottom_1gxvd_95",te="_close_top_1gxvd_101",oe="_close_inside_1gxvd_107",se={tableBar:K,tableBar_bottom:j,tableBar_top:U,tableBar_left:W,tableBar_right:G,content:Z,scrollbar:J,close:Q,close_left:X,close_right:Y,close_bottom:ee,close_top:te,close_inside:oe},ae={$style:se},le=F._export_sfc(P,[["__cssModules",ae]]);module.exports=le;