var se=require("./Root.css");const e=require("vue"),$=require("@smartmed/ui/ScrollbarControllers"),d=require("@smartmed/ui/tokens"),k=require("../isMobile-06be1506.js"),B=require("@smartmed/ui/Alert"),p=require("../_plugin-vue_export-helper-f246444f.js"),T=require("@smartmed/ui/use"),y={type:"success",autoClose:!0,closeTimeout:5e3},b=e.defineComponent({name:"AlertsHost",__name:"AlertsHost",setup(l,{expose:a}){const t=e.ref([]),o=new Map,u=e.ref(null),_=(s,r,i=y)=>{const{type:m=y.type,autoClose:f=y.autoClose,closeTimeout:v=y.closeTimeout}=i;if(t.value=t.value.concat({id:s,content:r,type:m,closable:f}),f){const h=setTimeout(()=>{n(s)},v);o.set(s,h)}},n=s=>{const r=o.get(s);r&&clearTimeout(r),o.delete(s),t.value=t.value.filter(({id:i})=>i!==s)},c=()=>{const s=t.value[0];s&&n(s.id)};return e.onBeforeUnmount(()=>{t.value.forEach(s=>n(s.id))}),a({elementRef:u,show:_,close:n,closeLast:c}),(s,r)=>(e.openBlock(),e.createElementBlock("div",{id:"smed-alerts-host",ref_key:"elementRef",ref:u},[e.createElementVNode("div",{class:e.normalizeClass(s.$style.root)},[e.createVNode(e.TransitionGroup,{tag:"ui",name:"smed-list-transition",class:e.normalizeClass(s.$style.container)},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.value,i=>(e.openBlock(),e.createBlock(e.unref(B),{key:i.id,class:"smed-space_bottom-4",type:i.type,content:i.content,closable:i.closable,onClose:m=>n(i.id)},null,8,["type","content","closable","onClose"]))),128))]),_:1},8,["class"])],2)],512))}}),C="_root_154tb_1",H="_container_154tb_8",N={root:C,container:H},E={$style:N},O=p._export_sfc(b,[["__cssModules",E]]),w=e.defineComponent({name:"DropdownHost",setup(){return{element:e.ref(null)}}}),R={id:"smed_dropdown-host",ref:"element"};function A(l,a,t,o,u,_){return e.openBlock(),e.createElementBlock("div",R,null,512)}const V=p._export_sfc(w,[["render",A]]),M=e.defineComponent({name:"PopupsHost",setup(){const l=new Map,a=e.ref(!1),t=e.ref(!1);let o=null;e.watch(a,c=>{c?o=setTimeout(()=>t.value=!0):(o&&(clearTimeout(o),o=null),t.value=!1)});const u=c=>{l.set(c,null)},_=(c,s)=>{l.set(c,s?new Date:null),a.value=Array.from(l.values()).some(r=>r)},n=c=>{l.delete(c),a.value=Array.from(l.values()).some(Boolean)};return e.onBeforeUnmount(()=>{o&&clearTimeout(o)}),{isShown:a,animation:t,registerPopup:u,setOpen:_,remove:n}}}),S="_host_je562_1",q="_host_overlay_je562_9",z="_host_animation_je562_25",P={host:S,host_overlay:q,host_animation:z};function D(l,a,t,o,u,_){return e.openBlock(),e.createElementBlock("div",{id:"smed_popups-host",class:e.normalizeClass([l.$style.host,l.isShown&&l.$style.host_overlay,l.animation&&l.$style.host_animation])},null,2)}const g={$style:P},K=p._export_sfc(M,[["render",D],["__cssModules",g]]),F={id:"smed_table-bar-host"},L=e.createElementVNode("div",{id:"smed_table-bars"},null,-1),j={id:"smed_table-bar-overlayable"},I=e.defineComponent({__name:"TableBarHost",setup(l,{expose:a}){const t=T.useOverscroll("all",n=>n),o=e.ref(!1);return a({isOverlay:o,showOverlay:()=>{o.value=!0},hideOverlay:()=>{o.value=!1}}),(n,c)=>(e.openBlock(),e.createElementBlock("div",F,[L,e.createElementVNode("div",j,[e.createVNode(e.Transition,{name:"fade"},{default:e.withCtx(()=>[o.value?(e.openBlock(),e.createElementBlock("div",{key:0,ref_key:"overscrollRef",ref:t,class:e.normalizeClass(n.$style.overlay)},null,2)):e.createCommentVNode("",!0)]),_:1})])]))}}),U="_overlay_11lww_1",x={overlay:U},G={$style:x},W=p._export_sfc(I,[["__cssModules",G]]),J={name:"Root"},Q=e.defineComponent({...J,setup(l){const a=e.ref(null),t=e.ref(null),o=e.ref(null),u=e.ref(null),_=e.ref(null),n=e.ref(NaN),c=k.isMobile(),s=()=>{n.value=requestAnimationFrame(s)};return n.value=requestAnimationFrame(s),e.provide(d.HINT_HOST_TOKEN,e.readonly(t)),e.provide(d.POPUPS_HOST_TOKEN,e.readonly(o)),e.provide(d.TABLE_BAR_HOST_TOKEN,e.readonly(u)),e.provide(d.DROPDOWN_HOST_TOKEN,e.readonly(_)),e.provide(d.ANIMATION_FRAME_EVENTS_TOKEN,e.readonly(n)),e.provide(d.ALERTS_HOST_TOKEN,e.readonly(a)),(r,i)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.unref(c)?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(e.Transition,{key:0,name:"fade"},{default:e.withCtx(()=>{var m,f;return[!((m=o.value)!=null&&m.isShown)&&!((f=u.value)!=null&&f.isOverlay)?(e.openBlock(),e.createBlock(e.unref($),{key:0,class:e.normalizeClass(r.$style.scrollbar)},null,8,["class"])):e.createCommentVNode("",!0)]}),_:1})),e.renderSlot(r.$slots,"default"),e.createVNode(W,{ref_key:"tableBarHostRef",ref:u,class:e.normalizeClass(r.$style.host)},null,8,["class"]),e.createVNode(K,{ref_key:"popupsHostRef",ref:o,class:e.normalizeClass(r.$style.host)},null,8,["class"]),e.createVNode(O,{ref_key:"alertsHostRef",ref:a,class:e.normalizeClass(r.$style.host)},null,8,["class"]),e.createVNode(V,{ref_key:"dropdownHostRef",ref:_,class:e.normalizeClass(r.$style.host)},null,8,["class"]),e.createElementVNode("div",{id:"smed_hints-host",ref_key:"hintsHostRef",ref:t,class:e.normalizeClass(r.$style.host)},null,2)],64))}}),X="_host_qf25v_1",Y="_scrollbar_qf25v_9",Z={host:X,scrollbar:Y},ee={$style:Z},oe=p._export_sfc(Q,[["__cssModules",ee]]);module.exports=oe;