(window.webpackJsonp=window.webpackJsonp||[]).push([[113,7,22],{"3Hfo":function(e,t,a){"use strict";var l=a("8CHY");t.a={methods:{filter:function(e){var t=this,a="";return["label","description","localPlaceholder"].forEach(function(e){a+=t.$locale.translate(t[e])}),Object(l.a)(a,e)}}}},A86J:function(e,t,a){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}},watch:{autoFocus:function(e){e&&"function"==typeof this.focus&&this.focus()}},methods:{focus:function(){this.$el&&"function"==typeof this.$el.focus&&this.$el.focus()}}}},TQwJ:function(e,t,a){"use strict";a.r(t);a("e2Kn");var l={name:"FormTextArea",mixins:[a("VixF").a],props:{value:{type:[String,Number],note:"The value of the field."},name:{type:String},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},size:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},plaintext:{type:Boolean,default:!1},autocomplete:{type:String},placeholder:{type:String},maxLength:{type:Number},rows:{type:String},maxRows:{type:String},wrap:{type:String},noResize:{type:Boolean}},data:function(){return{localValue:this.value}},computed:{fieldId:function(){return"formTextArea-".concat(this._uid)}},methods:{updateValue:function(e){this.maxLength&&e.length>this.maxLength&&(e=e.substr(0,this.maxLength)),this.localValue=e,this.$emit("input",e)},focus:function(){this.$refs.formTextarea&&this.$refs.formTextarea.$el.focus()}}},o=(a("w6Cx"),a("psIG")),n=Object(o.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,label:e._f("translate")(e.label),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error),"aria-label":e._f("translate")(e.label)},scopedSlots:e._u([e.label&&e.description&&e.hideDescription?{key:"label",fn:function(){return[e._v("\n        "+e._s(e._f("translate")(e.label))+"\n        "),a("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],attrs:{title:e._f("translate")(e.description)}},[a("CommonIcon",{staticClass:"mx-2 Font--Small",attrs:{weight:"regular",icon:"messages-bubble-square-information"}})],1)]},proxy:!0}:null,e.label&&e.description&&e.hideDescription?{key:"description",fn:function(){return[a("small",{staticClass:"sr-only"},[e._v("\n            "+e._s(e._f("translate")(e.description))+"\n        ")])]},proxy:!0}:null],null,!0)},[e._v(" "),e._v(" "),a("b-form-textarea",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],ref:"formTextarea",attrs:{id:e.fieldId,name:e.name,value:e.localValue,size:e.size,disabled:e.disabled,state:Boolean(e.error)?"invalid":null,readonly:e.readonly,plaintext:e.plaintext,autocomplete:e.autocomplete,placeholder:e.localPlaceholder,maxlength:e.maxLength,rows:e.rows,wrap:e.wrap,"max-rows":e.maxRows,"no-resize":e.noResize,"aria-label":e._f("translate")(e.label)},on:{input:e.updateValue}})],1)},[],!1,null,"88dceff6",null);t.default=n.exports},VixF:function(e,t,a){"use strict";var l=a("A86J"),o=a("3Hfo");t.a={mixins:[l.a,o.a,{data:function(){return{localPlaceholder:""}},watch:{labelSrOnly:function(){this.buildLocalPlaceholder()},required:function(){this.buildLocalPlaceholder()},placeholder:function(){this.buildLocalPlaceholder()}},created:function(){var e=this;this.$bus.$on("forceUpdate",function(){e.buildLocalPlaceholder()}),this.buildLocalPlaceholder()},methods:{buildLocalPlaceholder:function(){if(this.placeholder){var e=this.$locale.translate(this.placeholder);this.labelSrOnly&&this.required&&(e="".concat(e,"*")),this.localPlaceholder=e}else this.localPlaceholder=""}}}],mounted:function(){var e=this;this.$nextTick(function(){e.$emit("loaded")})}}},dFFy:function(e,t,a){},w6Cx:function(e,t,a){"use strict";var l=a("dFFy");a.n(l).a}}]);