(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{A86J:function(e,t,a){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}},HZ1Z:function(e,t,a){"use strict";var n=a("P3Zy");a.n(n).a},P3Zy:function(e,t,a){},TQwJ:function(e,t,a){"use strict";a.r(t);a("e2Kn");var n={name:"FormTextArea",mixins:[a("A86J").a],props:{value:{type:[String,Number],note:"The value of the field."},name:{type:String},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},size:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},plaintext:{type:Boolean,default:!1},autocomplete:{type:String},placeholder:{type:String},maxLength:{type:Number},rows:{type:String},maxRows:{type:String},wrap:{type:String},noResize:{type:Boolean}},data:function(){return{localValue:this.value}},computed:{fieldId:function(){return"formTextArea-".concat(this._uid)}},methods:{updateValue:function(e){this.maxLength&&e.length>this.maxLength&&(e=e.substr(0,this.maxLength)),this.localValue=e,this.$emit("input",e)}}},l=(a("HZ1Z"),a("psIG")),o=Object(l.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,label:e._f("translate")(e.label),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error)}},[a("b-form-textarea",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],attrs:{id:e.fieldId,name:e.name,value:e.localValue,size:e.size,disabled:e.disabled,state:Boolean(e.error)?"invalid":null,readonly:e.readonly,plaintext:e.plaintext,autocomplete:e.autocomplete,placeholder:e._f("translate")(e.placeholder),maxlength:e.maxLength,rows:e.rows,wrap:e.wrap,"max-rows":e.maxRows,"no-resize":e.noResize},on:{input:e.updateValue}})],1)},[],!1,null,"9446023e",null);o.options.__file="FormTextArea.vue";t.default=o.exports}}]);