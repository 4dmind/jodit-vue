!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jodit")):"function"==typeof define&&define.amd?define(["exports","jodit"],e):(t=t||self,e(t.JoditVue={},t.Jodit))}(this,function(t,e){"use strict";function n(t,e,n,i,o,r,s,d,u,a){"boolean"!=typeof s&&(u=d,d=s,s=!1);var f="function"==typeof n?n.options:n;t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),i&&(f._scopeId=i);var l;if(r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},f._ssrRegister=l):e&&(l=s?function(){e.call(this,a(this.$root.$options.shadowRoot))}:function(t){e.call(this,d(t))}),l)if(f.functional){var c=f.render;f.render=function(t,e){return l.call(e),c(t,e)}}else{var h=f.beforeCreate;f.beforeCreate=h?[].concat(h,l):[l]}return n}function i(t){i.installed||(i.installed=!0,t.component("JoditVue",u))}e=e&&e.hasOwnProperty("default")?e.default:e;var o=n,r={name:"JoditVue",props:{value:{type:String,required:!0},id:{type:String,default:"editor"},buttons:{type:Array,default:null},extraButtons:{type:Array,default:null},config:{type:Object,default:function(){return{}}}},data:function(){return{editor:null}},computed:{editorConfig:function(){var t=Object.assign({},this.config);return this.buttons&&(t.buttons=this.buttons,t.buttonsMD=this.buttons,t.buttonsSM=this.buttons,t.buttonsXS=this.buttons),this.extraButtons&&(t.extraButtons=this.extraButtons),t}},watch:{value:function(t){this.editor.value!==t&&(this.editor.value=t)}},mounted:function(){var t=this;this.editor=new e("#"+this.id,this.editorConfig),this.editor.value=this.value,this.editor.events.on("change",function(e){return t.$emit("input",e)})},beforeDestroy:function(){this.editor.destruct()}},s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:t.id}})},d=[];s._withStripped=!0;var u=o({render:s,staticRenderFns:d},void 0,r,void 0,!1,void 0,void 0,void 0),a={install:i},f=null;"undefined"!=typeof window?f=window.Vue:"undefined"!=typeof global&&(f=global.Vue),f&&f.use(a),t.default=u,t.install=i,Object.defineProperty(t,"__esModule",{value:!0})});