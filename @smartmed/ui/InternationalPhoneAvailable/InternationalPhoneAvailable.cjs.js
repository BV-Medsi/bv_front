var q=require("./InternationalPhoneAvailable.css");const e=require("vue"),a=require("@smartmed/ui/CountryFlag"),_=require("@smartmed/ui/Popup"),m=require("@smartmed/ui/SvgIcon"),p=require("@smartmed/utility/consts"),y=require("@smartmed/utility/directives"),f=require("../_plugin-vue_export-helper-f246444f.js"),b=["onKeydown"],v=e.defineComponent({name:"InternationalPhoneAvailable",__name:"InternationalPhoneAvailable",setup($){const o=p.internationalCountries,c=Math.round(o.length/2),u=[o.slice(0,c),o.slice(c)],l=e.ref(!1),r=()=>{l.value=!l.value};return(t,i)=>(e.openBlock(),e.createElementBlock("div",null,[e.withDirectives((e.openBlock(),e.createElementBlock("div",{tabindex:"0",class:e.normalizeClass(t.$style.root),onKeydown:[e.withKeys(e.withModifiers(r,["stop","prevent"]),["enter"]),e.withKeys(e.withModifiers(r,["stop","prevent"]),["space"])],onClick:r},[e.createElementVNode("div",null,[e.createElementVNode("p",{class:e.normalizeClass(["smed-text_body-xs smed-text_medium smed-space_bottom-2",t.$style.label])}," Доступные номера телефонов ",2),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(o),n=>(e.openBlock(),e.createBlock(e.unref(a),{key:n.id,class:"smed-space_right-2",code:n.id},null,8,["code"]))),128))]),e.createVNode(e.unref(m),{name:"warning-filled",rotate:"",size:"sm",class:e.normalizeClass(t.$style.icon)},null,8,["class"])],42,b)),[[e.unref(y.KeyboardFocusedDirective)]]),e.createVNode(e.unref(_),{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=n=>l.value=n),title:"Доступные номера телефонов"},{default:e.withCtx(()=>[e.createElementVNode("p",{class:e.normalizeClass(["smed-space_bottom-6",t.$style.text])}," Вы можете зарегистрироваться или войти в профиль, используя номера телефонов следующих стран: ",2),e.createElementVNode("div",{class:e.normalizeClass(t.$style.countriesContainer)},[(e.openBlock(),e.createElementBlock(e.Fragment,null,e.renderList(u,(n,d)=>e.createElementVNode("div",{key:d},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n,s=>(e.openBlock(),e.createElementBlock("div",{key:s.id,class:e.normalizeClass(t.$style.country)},[e.createVNode(e.unref(a),{class:"smed-space_right-2",code:s.id},null,8,["code"]),e.createElementVNode("span",{class:e.normalizeClass(["smed-space_right-1",t.$style.country__title])},e.toDisplayString(s.title),3),e.createElementVNode("span",{class:e.normalizeClass(t.$style.country__prefix)},e.toDisplayString(s.prefix),3)],2))),128))])),64))],2)]),_:1},8,["modelValue"])]))}}),k="_root_fbeyz_1",C="_label_fbeyz_15",z="_text_fbeyz_19",g="_icon_fbeyz_23",h="_countriesContainer_fbeyz_27",B="_country_fbeyz_34",V="_country__title_fbeyz_41",E="_country__prefix_fbeyz_41",x={root:k,label:C,text:z,icon:g,countriesContainer:h,country:B,country__title:V,country__prefix:E},N={$style:x},w=f._export_sfc(v,[["__cssModules",N]]);module.exports=w;