(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{Hzqv:function(e,t,l){"use strict";l.r(t);var a={name:"FormCheckbox",directives:{focus:{inserted:function(e,t){t.value&&e.querySelector("input").focus()}}},mixins:[l("VixF").a],props:{value:{type:Boolean},name:{type:String},error:{type:String},label:{type:String},labelPlaceholder:{type:Array},required:{type:Boolean,default:!1},description:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1}},computed:{localValue:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t)}}},methods:{onChange:function(e,t){this.$emit("change",e,t)},focus:function(){this.$refs.formCheckbox&&this.$refs.formCheckbox.$el.querySelector("input").focus()}}},n=l("psIG"),o=Object(n.a)(a,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error),"aria-label":e._f("translate")(e.label,e.labelPlaceholder)},scopedSlots:e._u([e.label&&e.description&&e.hideDescription?{key:"description",fn:function(){return[l("small",{staticClass:"sr-only"},[e._v("\n            "+e._s(e._f("translate")(e.description))+"\n        ")])]},proxy:!0}:null],null,!0)},[e._v(" "),l("b-form-checkbox",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],ref:"formCheckbox",attrs:{name:e.name,disabled:e.disabled,state:Boolean(e.error)?"invalid":null,"aria-label":e._f("translate")(e.label,e.labelPlaceholder)},on:{change:e.onChange},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}},[e._v("\n        "+e._s(e._f("translate")(e.label,e.labelPlaceholder))+"\n        "),e.label&&e.description&&e.hideDescription?[l("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],attrs:{title:e._f("translate")(e.description)}},[l("CommonIcon",{staticClass:"mx-2 Font--Small",attrs:{weight:"regular",icon:"messages-bubble-square-information"}})],1)]:e._e()],2)],1)},[],!1,null,null,null);t.default=o.exports}}]);