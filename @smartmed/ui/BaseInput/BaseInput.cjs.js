var Pe=require("./BaseInput.css");const e=require("vue"),E=require("@smartmed/ui/SvgIcon"),u=require("@smartmed/ui/use"),X=require("@smartmed/utility/maskito"),i=require("@smartmed/utility/vue"),Y=require("../BaseInput.props-4886ef7a.js"),Z=require("../_plugin-vue_export-helper-f246444f.js"),x=["for"],ee=["id","data-automation-id","type","autocomplete","name","placeholder","disabled","inputmode","readonly","value"],te={name:"BaseInput"},oe=e.defineComponent({...te,props:e.mergeDefaults({modelValue:{},modelModifiers:{},type:{},size:{},disabled:{type:Boolean},label:{},description:{},editable:{type:Boolean},maskOptions:{},isError:{type:Boolean},isSuccess:{type:Boolean},placeholder:{},autocomplete:{},name:{},hasCleaner:{type:Boolean},decoratorPostfix:{},decoratorPostfixColorClass:{},inputmode:{},readonly:{type:Boolean},stringify:{type:Function},id:{},dataAutomationId:{},pseudoHovered:{type:Boolean},pseudoFocused:{type:Boolean},inputStyles:{},rightSlotPadding:{}},Y.BaseInputDefaultProps),emits:["update:modelValue","search-clear"],setup(N,{expose:I,emit:f}){const R=N,{modelValue:r,modelModifiers:D,editable:n,isSuccess:h,hasCleaner:C,size:g,id:M,isError:P,disabled:q,pseudoFocused:b,maskOptions:L,label:p,description:y,readonly:c}=e.toRefs(R),k=e.ref(null),$=e.ref(null),s=e.useSlots(),a=u.useInteractive(),B=u.useControlInvalid(P),l=u.useControlDisabled(q),F=u.useModelModifiers(D.value),H=X.useMaskito(L),S=a.focus,W=a.blur,A=e.computed(()=>C.value&&!c.value&&!l.value&&d.value),m=e.computed(()=>a.focused.value||b.value&&b.value),d=e.computed(()=>!!r.value&&String(r.value).length>0),_=e.computed(()=>g.value==="sm"?"md":"lg"),T=e.computed(()=>i.hasSlotContent(s.valueContent)),O=e.computed(()=>!!p&&!!p.value||i.hasSlotContent(s.label)),j=e.computed(()=>!!y&&!!y.value||i.hasSlotContent(s.description)),w=e.computed(()=>{const t=d.value&&T.value,o=!n.value&&t,v=n.value&&!m.value&&t;return o||v}),z=e.computed(()=>M.value||a.id),V=e.computed(()=>i.hasSlotContent(s.right)),G=e.computed(()=>i.hasSlotContent(s.left)),J=e.computed(()=>h.value||d.value&&C.value||V.value),K=t=>{const v=t.target.value;f("update:modelValue",F.modify(v))},Q=()=>{f("search-clear"),S()},U=t=>{const o=t;$.value=o,H.value=o,a.native.value=o};return I({focus:S,blur:W,native:$,wrapper:k,focused:m}),(t,o)=>(e.openBlock(),e.createElementBlock("label",{class:e.normalizeClass([t.$style.input,e.unref(c)&&t.$style.input_readonly]),for:z.value},[O.value?(e.openBlock(),e.createElementBlock("span",{key:0,"data-automation-id":"smed-base-input-label",class:e.normalizeClass([t.$style.inline,"smed-text_body-sm smed-space_bottom-1"]),onClick:o[0]||(o[0]=e.withModifiers(()=>{},["stop"]))},[e.renderSlot(t.$slots,"label",{},()=>[e.createTextVNode(e.toDisplayString(e.unref(p)),1)])],2)):e.createCommentVNode("",!0),e.createElementVNode("div",{ref_key:"wrapperRef",ref:k,class:e.normalizeClass([t.$style.wrapper,t.$style["wrapper_"+e.unref(g)],e.unref(B)&&t.$style.wrapper_error,e.unref(l)&&t.$style.wrapper_disabled,m.value&&t.$style.focus])},[G.value?(e.openBlock(),e.createElementBlock("div",{key:0,"data-automation-id":"smed-base-input-left-icon",class:e.normalizeClass([t.$style.icon,t.$style.iconsLeft,t.$style.icon_left])},[e.renderSlot(t.$slots,"left",{size:_.value})],2)):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(t.$style.nativeWrapper)},[e.createElementVNode("input",{id:z.value,ref:U,"data-automation-id":t.dataAutomationId,class:e.normalizeClass([t.$style.native,!e.unref(n)&&t.$style.native_notEditable,w.value&&t.$style.native_hidden,e.unref(l)&&t.$style.native_disabled]),style:e.normalizeStyle(t.inputStyles),type:t.type,autocomplete:t.autocomplete,name:t.name,placeholder:t.placeholder,disabled:e.unref(l)||e.unref(c),inputmode:t.inputmode,readonly:e.unref(l)||e.unref(c)||!e.unref(n),value:t.stringify(e.unref(r)),onInput:K},null,46,ee),t.decoratorPostfix&&d.value?(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass([t.$style.decorator,t.decoratorPostfixColorClass])},[e.createElementVNode("span",{class:e.normalizeClass(t.$style.hidden)},e.toDisplayString(t.stringify(e.unref(r))),3),e.createElementVNode("span",{class:e.normalizeClass(t.$style.postfix)},e.toDisplayString(t.decoratorPostfix),3)],2)):e.createCommentVNode("",!0),w.value?(e.openBlock(),e.createElementBlock("div",{key:1,"data-automation-id":"smed-base-input-value-content",class:e.normalizeClass([t.$style.native,!e.unref(n)&&t.$style.native_notEditable,t.$style.native_template])},[e.renderSlot(t.$slots,"valueContent")],2)):e.createCommentVNode("",!0)],2),J.value?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(t.$style.iconsRight),style:e.normalizeStyle(t.rightSlotPadding&&{padding:t.rightSlotPadding})},[e.unref(h)?(e.openBlock(),e.createBlock(e.unref(E),{key:0,"data-automation-id":"smed-base-input-success-icon",name:"check-filled",class:e.normalizeClass([t.$style.icon,t.$style.icon_success,t.$style.icon_right]),size:_.value},null,8,["class","size"])):e.createCommentVNode("",!0),A.value?(e.openBlock(),e.createBlock(e.unref(E),{key:1,"data-automation-id":"smed-base-input-cleaner-icon",name:"close-filled",class:e.normalizeClass([t.$style.closeIcon,t.$style.icon,t.$style.icon_right]),size:_.value,onClick:e.withModifiers(Q,["stop","prevent"])},null,8,["class","size","onClick"])):e.createCommentVNode("",!0),V.value?(e.openBlock(),e.createElementBlock("div",{key:2,"data-automation-id":"smed-base-input-right-icon",class:e.normalizeClass(t.$style.icon_right)},[e.renderSlot(t.$slots,"right")],2)):e.createCommentVNode("",!0)],6)):e.createCommentVNode("",!0)],2),j.value?(e.openBlock(),e.createElementBlock("span",{key:1,class:e.normalizeClass(["smed-text_caption smed-space_top-1",t.$style.inline,e.unref(B)&&t.$style.inline_invalid])},[e.renderSlot(t.$slots,"description",{},()=>[e.createTextVNode(e.toDisplayString(e.unref(y)),1)])],2)):e.createCommentVNode("",!0)],10,x))}}),ne="_input_1yye7_1",se="_input_readonly_1yye7_5",ae="_wrapper_1yye7_9",le="_wrapper_sm_1yye7_19",ie="_native_1yye7_24",re="_decorator_1yye7_25",ce="_wrapper_md_1yye7_28",de="_wrapper_lg_1yye7_38",ue="_focus_1yye7_51",pe="_wrapper_error_1yye7_54",ye="_wrapper_disabled_1yye7_60",me="_nativeWrapper_1yye7_65",_e="_native_template_1yye7_107",ve="_native_hidden_1yye7_113",fe="_native_notEditable_1yye7_119",he="_native_disabled_1yye7_122",Ce="_inline_1yye7_126",ge="_inline_invalid_1yye7_132",be="_iconsLeft_1yye7_136",ke="_icon_1yye7_136",$e="_icon_left_1yye7_154",Be="_icon_right_1yye7_157",Se="_icon_error_1yye7_163",we="_icon_success_1yye7_166",ze="_iconsRight_1yye7_170",Ve="_error_1yye7_187",Ee="_closeIcon_1yye7_191",Ne="_hidden_1yye7_207",Ie="_postfix_1yye7_211",Re={input:ne,input_readonly:se,wrapper:ae,wrapper_sm:le,native:ie,decorator:re,wrapper_md:ce,wrapper_lg:de,focus:ue,wrapper_error:pe,wrapper_disabled:ye,nativeWrapper:me,native_template:_e,native_hidden:ve,native_notEditable:fe,native_disabled:he,inline:Ce,inline_invalid:ge,iconsLeft:be,icon:ke,icon_left:$e,icon_right:Be,icon_error:Se,icon_success:we,iconsRight:ze,error:Ve,closeIcon:Ee,hidden:Ne,postfix:Ie},De={$style:Re},Me=Z._export_sfc(oe,[["__cssModules",De]]);module.exports=Me;
