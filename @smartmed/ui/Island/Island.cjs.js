var y=require("./Island.css");const e=require("vue"),t=require("@smartmed/ui/LineClamp"),o=require("../_plugin-vue_export-helper-f246444f.js"),n={name:"Island"},l=e.defineComponent({...n,props:{title:{},description:{},isLoading:{type:Boolean}},setup(u){return(s,f)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(s.$style.island)},[e.createElementVNode("div",{class:e.normalizeClass(s.isLoading&&"smed-skeleton")},[e.renderSlot(s.$slots,"image")],2),e.createElementVNode("div",{class:e.normalizeClass(s.$style.content)},[e.createElementVNode("h5",{class:e.normalizeClass([s.$style.title,"smed-text_h5 smed-text_medium",s.isLoading&&"smed-skeleton smed-skeleton_short"])},e.toDisplayString(s.title),3),e.createElementVNode("p",{class:e.normalizeClass([s.$style.description,"smed-text_body-xl",s.isLoading&&"smed-skeleton"])},[e.createVNode(e.unref(t),{"line-height":24,"lines-limit":2},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(s.description),1)]),_:1})],2),s.$slots.footer?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass([s.$style.footer,s.isLoading&&"smed-skeleton"])},[e.renderSlot(s.$slots,"footer")],2)):e.createCommentVNode("",!0)],2)],2))}}),i="_island_1vdpo_1",r="_content_1vdpo_13",d="_title_1vdpo_20",a="_description_1vdpo_24",c="_footer_1vdpo_29",m={island:i,content:r,title:d,description:a,footer:c},p={$style:m},_=o._export_sfc(l,[["__cssModules",p]]);module.exports=_;