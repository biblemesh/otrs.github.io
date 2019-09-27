(window.webpackJsonp=window.webpackJsonp||[]).push([[238,59,325],{"3Hfo":function(e,t,n){"use strict";var o=n("8CHY");t.a={methods:{filter:function(e){var t=this,n="";n+=this.$locale.translate(this.label,this.labelPlaceholder);return["description","localPlaceholder"].forEach(function(e){n+=t.$locale.translate(t[e])}),Object(o.a)(n,e)}}}},A86J:function(e,t,n){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}},watch:{autoFocus:function(e){e&&"function"==typeof this.focus&&this.focus()}},methods:{focus:function(){this.$el&&"function"==typeof this.$el.focus&&this.$el.focus()}}}},VixF:function(e,t,n){"use strict";var o=n("A86J"),a=n("3Hfo"),i=n("rpZP");t.a={mixins:[o.a,a.a,{computed:{localPlaceholder:function(){if(!this.placeholder)return"";var e=this.$locale.translate(this.placeholder);return this.labelSrOnly&&this.required&&(e="".concat(e,"*")),e}}},i.a],mounted:function(){var e=this;this.$nextTick(function(){e.$emit("loaded")})}}},haP8:function(e,t,n){"use strict";n.r(t);n("e2Kn");var o={name:"FormTwoFactorToken",components:{FormInput:function(){return n.e(65).then(n.bind(null,"CJfq"))}},mixins:[n("VixF").a],props:{value:{type:[String,Number],note:"The value of the field."},error:{type:String},label:{type:String},labelPlaceholder:{type:Array},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},name:{type:String},size:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1},type:{type:String,default:"text"},readonly:{type:Boolean,default:!1},plaintext:{type:Boolean,default:!1},autocomplete:{type:String},placeholder:{type:String,default:"Placeholder Text"},maxLength:{type:Number},fieldClasses:{type:Object},twoFactorMethod:{type:String},setupErrorMessage:{type:String},enterVerificationCodeMessage:{type:Object},isSendingTokenViaTransport:{type:Boolean,default:!1}},computed:{fieldId:function(){return"formTwoFactorToken-".concat(this.uuid)},localValue:{get:function(){return this.value},set:function(e,t){this.maxLength&&e.length>this.maxLength&&(e=e.substr(0,this.maxLength)),this.$emit("input",e,t)}}},watch:{twoFactorMethod:function(){this.isSendingTokenViaTransport&&this.onSendTokenViaTransport()}},mounted:function(){this.isSendingTokenViaTransport&&this.onSendTokenViaTransport()},methods:{onSendTokenViaTransport:function(){this.$root.$emit("sendTokenViaTransport")},onChange:function(e){this.$emit("change",e)},onEnter:function(){this.$emit("enter")},translateEnterVerificationCodePlaceholder:function(e){return this.$locale.translate(e)},focus:function(){this.$refs.formInput&&this.$refs.formInput.focus()}}},a=n("psIG"),i=Object(a.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{"aria-label":e._f("translate")(e.label,e.labelPlaceholder)}},[e.enterVerificationCodeMessage?n("p",{staticClass:"mb-1 text-center"},[e._v("\n        "+e._s(e._f("translate")(e.enterVerificationCodeMessage.Message,e.translateEnterVerificationCodePlaceholder(e.enterVerificationCodeMessage.Placeholder)))+"\n        "),e.setupErrorMessage?n("CommonLink",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"collapse-"+e.fieldId,expression:"'collapse-' + fieldId"}],staticClass:"HoverUnderline"},[e._v("\n            "+e._s(e._f("translate")("Details"))+"\n        ")]):e._e(),e._v(" "),e.setupErrorMessage?n("b-collapse",{attrs:{id:"collapse-"+e.fieldId}},[n("small",[e._v(e._s(e._f("translate")(e.setupErrorMessage)))])]):e._e()],1):e._e(),e._v(" "),n("FormInput",{ref:"formInput",attrs:{"auto-focus":e.autoFocus,error:e.error,label:e.label,"label-placeholder":e.labelPlaceholder,"label-sr-only":e.labelSrOnly,required:e.required,description:e.description,size:e.size,name:e.name,disabled:e.disabled,hidden:e.hidden,"hide-description":e.hideDescription,type:e.type,readonly:e.readonly,autocomplete:e.autocomplete,plaintext:e.plaintext,placeholder:e.placeholder,"max-length":e.maxLength,"field-classes":e.fieldClasses},on:{change:e.onChange},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.onEnter()}},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}}),e._v(" "),e.isSendingTokenViaTransport?[e._v("\n        "+e._s(e._f("translate")("Did you not receive the token?"))+"\n        "),n("CommonLink",{staticClass:"HoverUnderline",on:{click:function(t){return e.onSendTokenViaTransport()}}},[e._v("\n            "+e._s(e._f("translate")("Resend"))+"\n        ")])]:e._e()],2)},[],!1,null,null,null);t.default=i.exports}}]);