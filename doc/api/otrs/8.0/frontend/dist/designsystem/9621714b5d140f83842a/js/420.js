(window.webpackJsonp=window.webpackJsonp||[]).push([[420],{"6l3b":function(e,l,a){},Hzqv:function(e,l,a){"use strict";a.r(l);var t={name:"FormCheckbox",directives:{focus:{inserted:function(e,l){l.value&&e.querySelector("input").focus()}}},mixins:[a("VixF").a],props:{value:{type:null},checkedValue:{type:null},hideDescription:{type:Boolean,default:!1},switchStyle:{type:Boolean}},computed:{localValue:{get:function(){return this.value},set:function(e,l){this.$emit("input",e,l)}}},methods:{onChange:function(e,l){this.$emit("change",e,l)},focus:function(){this.$refs.formCheckbox&&this.$refs.formCheckbox.$el.querySelector("input").focus()}}},o=(a("luqi"),a("psIG")),n=Object(o.a)(t,function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],staticClass:"FormCheckbox__OuterWrapper",attrs:{state:!Boolean(e.error)&&null,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error),"aria-label":e._f("translate").apply(void 0,[e.label].concat(e.localLabelPlaceholder))},scopedSlots:e._u([e.label&&e.description&&e.hideDescription?{key:"description",fn:function(){return[a("small",{staticClass:"sr-only"},[e._v("\n            "+e._s(e._f("translate")(e.description))+"\n        ")])]},proxy:!0}:null],null,!0)},[e._v(" "),a("b-form-checkbox",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],ref:"formCheckbox",staticClass:"FormCheckbox__InnerWrapper",attrs:{value:e.checkedValue,name:e.name,disabled:e.disabled,state:!Boolean(e.error)&&null,"aria-label":e._f("translate").apply(void 0,[e.label].concat(e.localLabelPlaceholder)),switch:e.switchStyle},on:{change:e.onChange},model:{value:e.localValue,callback:function(l){e.localValue=l},expression:"localValue"}},[e.labelSrOnly?e._e():[e._v("\n            "+e._s(e._f("translate").apply(void 0,[e.label].concat(e.localLabelPlaceholder)))+"\n            "),e.label&&e.description&&e.hideDescription?[a("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],attrs:{title:e._f("translate")(e.description)}},[a("CommonIcon",{staticClass:"mx-2 Font--Small",attrs:{weight:"regular",icon:"messages-bubble-square-information"}})],1)]:e._e()]],2)],1)},[],!1,null,null,null);l.default=n.exports},luqi:function(e,l,a){"use strict";var t=a("6l3b");a.n(t).a}}]);