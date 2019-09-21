(window.webpackJsonp=window.webpackJsonp||[]).push([[181,49,59,325],{"3Hfo":function(e,t,l){"use strict";var a=l("8CHY");t.a={methods:{filter:function(e){var t=this,l="";l+=this.$locale.translate(this.label,this.labelPlaceholder);return["description","localPlaceholder"].forEach(function(e){l+=t.$locale.translate(t[e])}),Object(a.a)(l,e)}}}},A86J:function(e,t,l){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}},watch:{autoFocus:function(e){e&&"function"==typeof this.focus&&this.focus()}},methods:{focus:function(){this.$el&&"function"==typeof this.$el.focus&&this.$el.focus()}}}},Db0u:function(e,t,l){"use strict";var a=l("kBlV");l.n(a).a},Hzqv:function(e,t,l){"use strict";l.r(t);var a={name:"FormCheckbox",directives:{focus:{inserted:function(e,t){t.value&&e.querySelector("input").focus()}}},mixins:[l("VixF").a],props:{value:{type:Boolean},name:{type:String},error:{type:String},label:{type:String},labelPlaceholder:{type:Array},required:{type:Boolean,default:!1},description:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1}},computed:{localValue:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t)}}},methods:{onChange:function(e,t){this.$emit("change",e,t)},focus:function(){this.$refs.formCheckbox&&this.$refs.formCheckbox.$el.querySelector("input").focus()}}},o=l("psIG"),i=Object(o.a)(a,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:!Boolean(e.error)&&null,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error),"aria-label":e._f("translate")(e.label,e.labelPlaceholder)},scopedSlots:e._u([e.label&&e.description&&e.hideDescription?{key:"description",fn:function(){return[l("small",{staticClass:"sr-only"},[e._v("\n            "+e._s(e._f("translate")(e.description))+"\n        ")])]},proxy:!0}:null],null,!0)},[e._v(" "),l("b-form-checkbox",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],ref:"formCheckbox",attrs:{name:e.name,disabled:e.disabled,state:!Boolean(e.error)&&null,"aria-label":e._f("translate")(e.label,e.labelPlaceholder)},on:{change:e.onChange},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}},[e._v("\n        "+e._s(e._f("translate")(e.label,e.labelPlaceholder))+"\n        "),e.label&&e.description&&e.hideDescription?[l("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],attrs:{title:e._f("translate")(e.description)}},[l("CommonIcon",{staticClass:"mx-2 Font--Small",attrs:{weight:"regular",icon:"messages-bubble-square-information"}})],1)]:e._e()],2)],1)},[],!1,null,null,null);t.default=i.exports},Q6MJ:function(e,t,l){"use strict";l.r(t);var a=l("9va6"),o=l("Q6E5"),i=l.n(o),n=l("8CHY"),s=l("Hzqv"),r=l("VixF"),c={name:"FormVisibleItems",components:{VueDraggable:i.a,FormCheckbox:s.default},mixins:[r.a],props:{value:{type:Array,default:function(){return[]}},itemLabels:{type:Object},name:{type:String},error:{type:String},label:{type:String},labelPlaceholder:{type:Array},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1}},data:function(){return{checkboxValues:{}}},computed:{localValue:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t)}},localItemLabels:function(){return this.itemLabels}},watch:{value:function(){this.initializeCheckboxState()},checkboxValues:{handler:function(){this.setValue()},deep:!0}},mounted:function(){this.initializeCheckboxState()},methods:{getItemName:function(e){return e.Name},initializeCheckboxState:function(){var e=this;this.localValue.forEach(function(t){0!==parseInt(t.IsVisible,10)?e.$set(e.checkboxValues,e.getItemName(t),!0):e.$set(e.checkboxValues,e.getItemName(t),!1)})},setValue:function(){var e=this,t=Object(a.cloneDeep)(this.localValue);t.forEach(function(t){var l=1===parseInt(t.IsVisible,10);e.checkboxValues[e.getItemName(t)]&&!l?t.IsVisible="1":!e.checkboxValues[e.getItemName(t)]&&l&&(t.IsVisible="0")}),Object(a.isEqual)(this.localValue,t)||(this.localValue=t)},filter:function(e){var t=this,l="";l+=this.$locale.translate(this.label,this.labelPlaceholder);return["description"].forEach(function(e){l+=t.$locale.translate(t[e])}),this.localValue.forEach(function(e){l+=t.$locale.translate(t.localItemLabels[t.getItemName(e)])||t.getItemName(e)}),Object(n.a)(l,e)},focus:function(){this.$refs.formCheckbox&&this.$refs.formCheckbox.length&&this.$refs.formCheckbox[0].focus()}}},u=(l("Db0u"),l("psIG")),d=Object(u.a)(c,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],staticClass:"FormVisibleItems",attrs:{label:e._f("translate")(e.label,e.labelPlaceholder),"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,state:!Boolean(e.error)&&null,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error),"aria-label":e._f("translate")(e.label,e.labelPlaceholder)},scopedSlots:e._u([e.label&&e.description&&e.hideDescription?{key:"label",fn:function(){return[e._v("\n        "+e._s(e._f("translate")(e.label,e.labelPlaceholder))+"\n        "),l("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],staticClass:"float-right",attrs:{title:e._f("translate")(e.description)}},[l("CommonIcon",{staticClass:"mx-2",attrs:{weight:"bold",icon:"information-circle"}})],1)]},proxy:!0}:null,e.label&&e.description&&e.hideDescription?{key:"description",fn:function(){return[l("small",{staticClass:"sr-only"},[e._v("\n            "+e._s(e._f("translate")(e.description))+"\n        ")])]},proxy:!0}:null],null,!0)},[e._v(" "),e._v(" "),e.localValue.length?l("b-row",{staticClass:"FormVisibleItems__List",class:{"FormVisibleItems__List--Disabled":e.disabled},attrs:{"no-gutters":""}},[l("b-col",{staticClass:"p-3",attrs:{cols:"12"}},[l("ul",[l("VueDraggable",{attrs:{handle:".FormVisibleItems__DragAndDrop"},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}},e._l(e.localValue,function(t,a){return l("li",{key:e.getItemName(t)},[l("FormCheckbox",{ref:0===a?"formCheckbox":void 0,refInFor:!0,attrs:{"auto-focus":0===a&&e.autoFocus,disabled:e.disabled,label:e.localItemLabels&&e.localItemLabels[e.getItemName(t)]||e.getItemName(t)},model:{value:e.checkboxValues[e.getItemName(t)],callback:function(l){e.$set(e.checkboxValues,e.getItemName(t),l)},expression:"checkboxValues[getItemName(item)]"}}),e._v(" "),l("CommonIcon",{staticClass:"FormVisibleItems__DragAndDrop",attrs:{icon:"direction-button-arrows"}})],1)}),0)],1)])],1):e._e()],1)},[],!1,null,null,null);t.default=d.exports},VixF:function(e,t,l){"use strict";var a=l("A86J"),o=l("3Hfo"),i=l("rpZP");t.a={mixins:[a.a,o.a,{data:function(){return{localPlaceholder:""}},watch:{labelSrOnly:function(){this.buildLocalPlaceholder()},required:function(){this.buildLocalPlaceholder()},placeholder:function(){this.buildLocalPlaceholder()}},created:function(){var e=this;this.$bus.$on("forceUpdate",function(){e.buildLocalPlaceholder()}),this.buildLocalPlaceholder()},methods:{buildLocalPlaceholder:function(){if(this.placeholder){var e=this.$locale.translate(this.placeholder);this.labelSrOnly&&this.required&&(e="".concat(e,"*")),this.localPlaceholder=e}else this.localPlaceholder=""}}},i.a],mounted:function(){var e=this;this.$nextTick(function(){e.$emit("loaded")})}}},kBlV:function(e,t,l){}}]);