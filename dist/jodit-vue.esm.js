function normalizeComponent(t,e,n,i,o,_,r,s,u,d){"boolean"!=typeof r&&(u=s,s=r,r=!1);var l="function"==typeof n?n.options:n;t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),i&&(l._scopeId=i);var a;if(_?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(_)},l._ssrRegister=a):e&&(a=r?function(){e.call(this,d(this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),a)if(l.functional){var c=l.render;l.render=function(t,e){return a.call(e),c(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,a):[a]}return n}function install(t){install.installed||(install.installed=!0,t.component("JoditVue",JoditVue))}import Jodit from"jodit";var script={name:"JoditVue",props:{value:{type:String,required:!0},id:{type:String,default:"editor"},buttons:{type:Array,default:null},extraButtons:{type:Array,default:null},config:{type:Object,default:function(){return{}}}},data:function(){return{editor:null}},computed:{editorConfig:function(){var t=Object.assign({},this.config);return this.buttons&&(t.buttons=this.buttons,t.buttonsMD=this.buttons,t.buttonsSM=this.buttons,t.buttonsXS=this.buttons),this.extraButtons&&(t.extraButtons=this.extraButtons),console.log(t),t}},watch:{value:function(t){this.editor.value!==t&&(this.editor.value=t)}},mounted:function(){var t=this;this.editor=new Jodit("#"+this.id,this.editorConfig),this.editor.value=this.value,this.editor.events.on("change",function(e){return t.$emit("input",e)})},beforeDestroy:function(){this.editor.destruct()}},normalizeComponent_1=normalizeComponent,__vue_script__=script,__vue_render__=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:t.id}})},__vue_staticRenderFns__=[];__vue_render__._withStripped=!0;var __vue_inject_styles__=void 0,__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,JoditVue=normalizeComponent_1({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,void 0,void 0),plugin={install:install},GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:"undefined"!=typeof global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin);export default JoditVue;export{install};
