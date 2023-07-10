var ce=require("./Carousel.css");const e=require("vue"),N=require("@smartmed/ui/tokens"),C=require("@smartmed/utility/directives"),I=require("@smartmed/utility/dom"),d=require("@smartmed/utility/numbers"),K=require("@smartmed/utility/functions"),W=require("../_plugin-vue_export-helper-f246444f.js"),j={draggable:!1,autoScrollLooping:!1},L="__smartmed_carouselScroll__",X={beforeMount(l,{value:g}){const p=K.useThrottleFn(r=>{g.onEvent(r)},500),_=({deltaX:r})=>{Math.abs(r)<=20||(p(Math.sign(r)),l.scrollLeft=10)};I.isMobile()||(l.addEventListener("wheel",_,{passive:!0}),l[L]=_)},beforeUnmount(l){l[L]&&l.removeEventListener("wheel",l[L])}},G={name:"Carousel"},H=e.defineComponent({...G,props:e.mergeDefaults({modelValue:{},itemsCount:{},items:{},draggable:{type:Boolean},autoScrollLooping:{type:Boolean}},j),emits:["update:modelValue","autoscroll-end"],setup(l,{expose:g,emit:p}){const _=l,r=16,b=e.inject(N.EVENT_TUNNEL_TOKEN,null),k=e.inject(N.EVENT_TUNNEL_CONTROLLER_TOKEN,null),{itemsCount:c,modelValue:o,items:i,draggable:w,autoScrollLooping:M}=e.toRefs(_),v=e.ref(!0),m=e.ref(0),E=e.ref(null),y=e.ref(!1),V=e.computed(()=>{const t=c.value,n=100/t,s=r/t,a=`calc(${n}% + ${s}px)`,F=`translateX(${D.value.start*100}%)`;return{minWidth:a,maxWidth:a,flexBasis:a,transform:F}}),S=e.computed(()=>-o.value/c.value),q=e.computed(()=>{const t=v.value?S.value:m.value;return{transform:`translateX(${100*t}%) translateX(-${r/2-r*t}px)`}}),D=e.computed(()=>{const t=o.value,n=i.value.length;return{start:d.clamp(t-1,0,n-1),end:d.clamp(t+c.value+1,0,n-1)}}),$=e.computed(()=>{const t=o.value;return(t===0?0:-1)+t}),z=e.computed(()=>{const{start:t,end:n}=D.value;return i.value.slice(t,n+1)}),B=e.computed(()=>I.isMobile()||w.value);e.onMounted(()=>{const t=E.value;t&&(t.addEventListener("touchstart",f,{passive:!0}),t.addEventListener("touchend",h,{passive:!0}),t.addEventListener("mousedown",f,{passive:!0}),document.addEventListener("mouseup",h,{passive:!0}))}),e.onBeforeUnmount(()=>{const t=E.value;t&&(t.removeEventListener("touchstart",f),t.removeEventListener("touchend",h),t.removeEventListener("mousedown",f),document.removeEventListener("mouseup",h))}),b&&e.watch(b,()=>{A()}),k&&e.watch(o,()=>{k.reset()});const u=t=>{const n=d.clamp(i.value.length-1,0,Math.max(0,i.value.length-c.value));p("update:modelValue",d.clamp(t,0,n))};e.watch(c,()=>{u(0)});const T=()=>{u(o.value+1)},x=()=>{u(o.value-1)},O=(t,[n])=>{if(!B.value||!t)return;const{clientWidth:s}=t,a=1-i.value.length/c.value;m.value=d.clamp(n/s+m.value,a,0)},A=()=>{const t=i.value.length,n=o.value;if(M.value){const s=n===t-1?0:n+1;u(s);return}n===t-1&&p("autoscroll-end"),u(n+1)},f=()=>{v.value=!1,m.value=S.value},h=()=>{y.value=!1,v.value=!0},P=(t,{intersectionRatio:n})=>{n&&n!==1&&!v.value&&(y.value=!0,u(o.value<t?t-c.value+1:t))},U=t=>{u(o.value+t)},R=(t,n)=>{const s=n.direction;Math.round(m.value)!==-o.value||!B.value||(s==="left"?T():s==="right"&&x())};return g({next:T,prev:x}),(t,n)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"host",ref:E,ondragstart:"return false;",class:e.normalizeClass([t.$style.container,e.unref(w)&&t.$style.container_draggable])},[e.withDirectives((e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(t.$style.scroller)},[e.createElementVNode("div",{class:e.normalizeClass(t.$style.wrapper)},[e.withDirectives((e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([t.$style.items,v.value&&t.$style.items_transitioned]),style:e.normalizeStyle(q.value)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(z.value,(s,a)=>e.withDirectives((e.openBlock(),e.createElementBlock("div",{key:a+$.value,style:e.normalizeStyle(V.value),class:e.normalizeClass([t.$style.item,y.value&&t.$style.item_notClickable])},[e.renderSlot(t.$slots,"default",{item:s})],6)),[[e.unref(C.IntersectionDirective),{options:{threshold:.01},disconnectAfterIntersect:!1,isObserve:!0,onIntersect:P.bind(null,a+$.value)}]])),128))],6)),[[e.unref(C.DragDropDirective),{onEvent:O}],[e.unref(C.SwipeDirective),{onEvent:R}]])],2)],2)),[[e.unref(X),{onEvent:U}]])],2))}}),Y="_container_15ylx_1",J="_container_draggable_15ylx_6",Q="_scroller_15ylx_16",Z="_items_15ylx_32",ee="_items_transitioned_15ylx_36",te="_wrapper_15ylx_40",ne="_item_15ylx_32",oe="_item_notClickable_15ylx_51",se={container:Y,container_draggable:J,scroller:Q,items:Z,items_transitioned:ee,wrapper:te,item:ne,item_notClickable:oe},le={$style:se},re=W._export_sfc(H,[["__cssModules",le]]);module.exports=re;
