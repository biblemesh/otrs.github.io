(window.webpackJsonp=window.webpackJsonp||[]).push([[105,7,12,22,144,185],{"3Hfo":function(e,t,l){"use strict";var n=l("8CHY");t.a={methods:{filter:function(e){var t=this,l="";l+=this.$locale.translate(this.label,this.labelPlaceholder);return["description","localPlaceholder"].forEach(function(e){l+=t.$locale.translate(t[e])}),Object(n.a)(l,e)}}}},A86J:function(e,t,l){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}},watch:{autoFocus:function(e){e&&"function"==typeof this.focus&&this.focus()}},methods:{focus:function(){this.$el&&"function"==typeof this.$el.focus&&this.$el.focus()}}}},CJfq:function(e,t,l){"use strict";l.r(t);l("e2Kn");var n={name:"FormInput",mixins:[l("VixF").a],props:{preventCutAndCopy:{type:Boolean,default:!1},value:{type:[String,Number],note:"The value of the field."},error:{type:String},label:{type:String},labelPlaceholder:{type:Array},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},name:{type:String},size:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1},type:{type:String,default:"text"},readonly:{type:Boolean,default:!1},plaintext:{type:Boolean,default:!1},autocomplete:{type:String},placeholder:{type:String},maxLength:{type:Number},fieldClasses:{type:Object}},computed:{hasInputSlot:function(){return void 0!==this.$slots["input-group-append"]},fieldId:function(){return"formInput-".concat(this._uid)},localValue:{get:function(){return this.value},set:function(e,t){this.maxLength&&e.length>this.maxLength&&(e=e.substr(0,this.maxLength)),this.$emit("input",e,t)}}},methods:{onCutOrCopy:function(e){return!this.preventCutAndCopy||(e.preventDefault(),!1)},focus:function(){this.$refs.input.$el.focus()},onChange:function(e){this.$emit("change",e)},onEnter:function(){this.$emit("enter")}}},a=l("psIG"),o=Object(a.a)(n,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,label:e._f("translate")(e.label,e.labelPlaceholder),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error),"aria-label":e._f("translate")(e.label,e.labelPlaceholder)},scopedSlots:e._u([e.label&&e.description&&e.hideDescription?{key:"label",fn:function(){return[e._v("\n        "+e._s(e._f("translate")(e.label,e.labelPlaceholder))+"\n        "),l("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],attrs:{title:e._f("translate")(e.description)}},[l("CommonIcon",{staticClass:"mx-2 Font--Small",attrs:{weight:"regular",icon:"messages-bubble-square-information"}})],1)]},proxy:!0}:null,e.label&&e.description&&e.hideDescription?{key:"description",fn:function(){return[l("small",{staticClass:"sr-only"},[e._v("\n            "+e._s(e._f("translate")(e.description))+"\n        ")])]},proxy:!0}:null],null,!0)},[e._v(" "),e._v(" "),e.hasInputSlot?l("b-input-group",{attrs:{"aria-label":e._f("translate")(e.label,e.labelPlaceholder)}},[l("b-form-input",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],ref:"input",staticClass:"Form__Input",class:e.fieldClasses,attrs:{id:e.fieldId,name:e.name,size:e.size,disabled:e.disabled,state:Boolean(e.error)?"invalid":null,type:e.type,readonly:e.readonly,plaintext:e.plaintext,autocomplete:e.autocomplete,placeholder:e.localPlaceholder,maxlength:e.maxLength,"allow-pasting":e.preventCutAndCopy,"aria-label":e._f("translate")(e.label,e.labelPlaceholder)},on:{change:e.onChange},nativeOn:{cut:function(t){return e.onCutOrCopy(t)},copy:function(t){return e.onCutOrCopy(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.onEnter(t)}},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}}),e._v(" "),l("b-input-group-append",{staticClass:"pt-2"},[e._t("input-group-append")],2)],1):l("b-form-input",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],ref:"input",staticClass:"Form__Input",class:e.fieldClasses,attrs:{id:e.fieldId,name:e.name,size:e.size,disabled:e.disabled,state:Boolean(e.error)?"invalid":null,type:e.type,readonly:e.readonly,plaintext:e.plaintext,autocomplete:e.autocomplete,placeholder:e.localPlaceholder,maxlength:e.maxLength,"allow-pasting":e.preventCutAndCopy,"aria-label":e._f("translate")(e.label,e.labelPlaceholder)},on:{change:e.onChange},nativeOn:{cut:function(t){return e.onCutOrCopy(t)},copy:function(t){return e.onCutOrCopy(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.onEnter()}},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}})],1)},[],!1,null,null,null);t.default=o.exports},VixF:function(e,t,l){"use strict";var n=l("A86J"),a=l("3Hfo");t.a={mixins:[n.a,a.a,{data:function(){return{localPlaceholder:""}},watch:{labelSrOnly:function(){this.buildLocalPlaceholder()},required:function(){this.buildLocalPlaceholder()},placeholder:function(){this.buildLocalPlaceholder()}},created:function(){var e=this;this.$bus.$on("forceUpdate",function(){e.buildLocalPlaceholder()}),this.buildLocalPlaceholder()},methods:{buildLocalPlaceholder:function(){if(this.placeholder){var e=this.$locale.translate(this.placeholder);this.labelSrOnly&&this.required&&(e="".concat(e,"*")),this.localPlaceholder=e}else this.localPlaceholder=""}}}],mounted:function(){var e=this;this.$nextTick(function(){e.$emit("loaded")})}}},XGm0:function(e,t,l){"use strict";var n=l("eMmR");l.n(n).a},dz1a:function(e,t,l){"use strict";l.r(t);l("e2Kn");var n=l("VixF"),a={name:"FormPassword",components:{FormInput:l("CJfq").default},mixins:[n.a],props:{autocomplete:{type:String},description:{type:String},disabled:{type:Boolean,default:!1},error:{type:String},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1},label:{type:String},labelPlaceholder:{type:Array},labelSrOnly:{type:Boolean,default:!1},maxLength:{type:Number},required:{type:Boolean,default:!1},placeholder:{type:String,default:"Placeholder Text"},name:{type:String},value:{type:[String,Number],note:"The value of the field."},validators:{type:Object,default:function(){return{}}}},data:function(){return{iconType:"view-off",type:"password"}},computed:{localValue:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t)}}},methods:{toggleFieldType:function(e){"password"===e?(this.type="text",this.iconType="view-1"):(this.type="password",this.iconType="view-off");var t=this.$refs.formInput.$el.querySelector("input"),l=2*t.value.length;t.focus(),t.setSelectionRange(l,l)},onChange:function(e){this.$emit("change",e)},onEnter:function(){this.$emit("enter")},focus:function(){this.$refs.formInput&&this.$refs.formInput.focus()}}},o=(l("XGm0"),l("psIG")),i=Object(o.a)(a,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("FormInput",{ref:"formInput",staticClass:"FormPassword",attrs:{"auto-focus":e.autoFocus,autocomplete:e.autocomplete,description:e.description,disabled:e.disabled,error:e.error,hidden:e.hidden,"hide-description":e.hideDescription,label:e.label,"label-placeholder":e.labelPlaceholder,"label-sr-only":e.labelSrOnly,name:e.name,"max-length":e.maxLength,placeholder:e.placeholder,required:e.required,type:e.type,"prevent-cut-and-copy":""},on:{change:e.onChange,enter:e.onEnter},scopedSlots:e._u([{key:"input-group-append",fn:function(){return[l("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e._f("translate")("Toggle password visibility")},on:{click:function(t){return e.toggleFieldType(e.type)}}},[l("CommonIcon",{staticClass:"FormPassword__Icon",attrs:{icon:e.iconType,weight:"regular"}})],1)]},proxy:!0}]),model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}})},[],!1,null,null,null);t.default=i.exports},eMmR:function(e,t,l){}}]);