(window.webpackJsonp=window.webpackJsonp||[]).push([[128,15,148],{A86J:function(e,t,n){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}},Iptl:function(e,t,n){"use strict";n("GkPX");var o=n("nS/B");t.a={components:{CommonNotice:function(){return n.e(155).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(18).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(20).then(n.bind(null,"8txu"))}},computed:{doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")}},mounted:function(){var e=this;this.$nextTick(function(){e.$test.setFlag("DocComponent::".concat(e.component.name,"::Mounted"))})}}},NokX:function(e,t,n){"use strict";n.r(t);var o=n("Iptl"),a=n("haP8"),i={name:"FormTwoFactorToken",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormTwoFactorToken",value:void 0,component:a.default,example:{error:{type:"input"},label:{type:"input"},labelSrOnly:{type:"checkbox",default:!1},required:{type:"checkbox",default:!1},description:{type:"input"},name:{type:"input"},size:{type:"select",options:[{value:void 0,text:"-"},{value:"sm",text:"sm"},{value:"md",text:"md"},{value:"lg",text:"lg"}]},disabled:{type:"checkbox",default:!1},type:{default:"text",type:"select",options:[{value:"text",text:"text"},{value:"password",text:"password"},{value:"email",text:"email"},{value:"number",text:"number"},{value:"url",text:"url"},{value:"tel",text:"tel"},{value:"search",text:"search"}]},readonly:{type:"checkbox",default:!1},plaintext:{type:"checkbox",default:!1},maxLength:{type:"input",subtype:"number"},autocomplete:{type:"input"},placeholder:{type:"input"},hidden:{default:!1,type:"checkbox"},hideDescription:{default:!1,type:"checkbox"},verificationCodeLabel:{type:"input"},enterVerificationCodeMessage:{default:{Message:"Enter the verification code through %s",Placeholder:"SMS"},type:"object"},tokenResend:{default:!1,type:"checkbox"}}}}},s=n("psIG"),r=Object(s.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v("\n            "+e._s(e.version)+"\n        ")])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-namespace":e.componentNamespace,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);t.default=r.exports},haP8:function(e,t,n){"use strict";n.r(t);n("e2Kn");var o={name:"FormTwoFactorToken",components:{FormInput:function(){return n.e(19).then(n.bind(null,"CJfq"))}},mixins:[n("A86J").a],props:{value:{type:[String,Number],note:"The value of the field."},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},name:{type:String},size:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1},type:{type:String,default:"text"},readonly:{type:Boolean,default:!1},plaintext:{type:Boolean,default:!1},autocomplete:{type:String},placeholder:{type:String,default:"Placeholder Text"},maxLength:{type:Number},fieldClasses:{type:Object},twoFactorMethod:{type:String},enterVerificationCodeMessage:{type:Object},isSendingTokenViaTransport:{type:Boolean,default:!1}},computed:{fieldId:function(){return"formTwoFactorToken-".concat(this._uid)},localValue:{get:function(){return this.value},set:function(e,t){this.maxLength&&e.length>this.maxLength&&(e=e.substr(0,this.maxLength)),this.$emit("input",e,t)}}},watch:{twoFactorMethod:function(){this.isSendingTokenViaTransport&&this.onSendTokenViaTransport()}},mounted:function(){var e=this;this.isSendingTokenViaTransport&&this.onSendTokenViaTransport(),this.$bus.$on("forceUpdate",function(){e.updateEnterVerificationCodePlaceholder()})},methods:{onSendTokenViaTransport:function(){this.$root.$emit("sendTokenViaTransport")},onChange:function(e){this.$emit("change",e)},onEnter:function(){this.$emit("enter")},updateEnterVerificationCodePlaceholder:function(e){return this.$locale.translate(e)}}},a=n("psIG"),i=Object(a.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}]},[e.enterVerificationCodeMessage?n("p",{staticClass:"mb-1 text-center"},[e._v("\n        "+e._s(e._f("translate")(e.enterVerificationCodeMessage.Message,e.updateEnterVerificationCodePlaceholder(e.enterVerificationCodeMessage.Placeholder)))+"\n    ")]):e._e(),e._v(" "),n("FormInput",{ref:"formInput",attrs:{"auto-focus":e.autoFocus,error:e.error,label:e.label,"label-sr-only":e.labelSrOnly,required:e.required,description:e.description,size:e.size,name:e.name,disabled:e.disabled,hidden:e.hidden,"hide-description":e.hideDescription,type:e.type,readonly:e.readonly,autocomplete:e.autocomplete,plaintext:e.plaintext,placeholder:e.placeholder,"max-length":e.maxLength,"field-classes":e.fieldClasses},on:{change:e.onChange},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.onEnter()}},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}}),e._v(" "),e.isSendingTokenViaTransport?[e._v("\n        "+e._s(e._f("translate")("Didn't get it?"))+"\n        "),n("CommonLink",{on:{click:function(t){return e.onSendTokenViaTransport()}}},[e._v("\n            "+e._s(e._f("translate")("Resend"))+"\n        ")])]:e._e()],2)},[],!1,null,null,null);t.default=i.exports}}]);