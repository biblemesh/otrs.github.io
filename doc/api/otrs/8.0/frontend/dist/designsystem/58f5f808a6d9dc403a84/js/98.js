(window.webpackJsonp=window.webpackJsonp||[]).push([[98,111],{"433n":function(e,t,n){"use strict";n.r(t);n("GkPX"),n("K/PF"),n("75LO"),n("W1QL");var o={name:"FormUpload",directives:{focus:{inserted:function(e,t){t.value&&e.querySelector("input").focus()}}},mixins:[n("A86J").a],props:{name:{type:String},formId:{type:String,required:!0},uploadPath:{type:String,required:!0},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},hidden:{type:Boolean,default:!1},placeholder:{type:String,default:"Select or drop files here."},multiple:{type:Boolean,default:!0},testMode:{type:Boolean,default:!1},fileIcon:{type:String,default:"file"},displayValue:{type:Object},value:{type:[Array,Object]}},data:function(){return{files:[],uploads:{},localValue:{}}},computed:{fieldId:function(){return"formUpload-".concat(this._uid)},hasUploadError:function(){var e=this,t=!1;return Object.keys(this.uploads).forEach(function(n){"danger"===e.uploads[n].variant&&(t=!0)}),t}},watch:{localValue:function(e){this.$emit("input",e)},displayValue:function(){this.uploads={}}},mounted:function(){this.initSelectedFiles()},methods:{uploadFiles:function(){var e=this,t=this.files;Array.isArray(t)||(t=[],null!==this.files&&t.push(this.files)),t.length&&(this.multiple||Object.keys(this.uploads).forEach(function(t){var n=e.uploads[t];e.deleteFile(n.fieldId,n.filename)}),t.forEach(function(t){if(e.$set(e.uploads,t.name,{filename:t.name,fileId:null,progress:0,variant:""}),e.testMode)return e.$nextTick(function(){e.uploads[t.name].progress=100}),Math.floor(2*Math.random())?e.uploadFileDisplay(Object.keys(e.uploads).length+1,t.name):(e.$refs.uploadFile.reset(),e.uploads[t.name].variant="danger"),void(e.files=[]);var n=new FormData;n.append("Upload",t),n.append("Disposition","attachment"),e.clientSendRequest({Path:"".concat(e.uploadPath,"/").concat(e.formId),Method:"post",Body:n},{xhr:!0,responseType:"json",responseTimeout:0,onUploadProgress:function(n){n.lengthComputable?e.uploads[t.name].progress=100*n.loaded/n.total:e.uploads[t.name].variant="warning"}}).then(function(n){e.uploadFileDisplay(n.Body.FileID,t.name),e.files=[]}).catch(function(n){e.$log.error(n),e.$refs.uploadFile.reset(),e.uploads[t.name].variant="danger",e.files=[]})}))},uploadFileDisplay:function(e,t){this.$refs.uploadFile.reset(),this.$set(this.uploads[t],"fileId",e),this.$set(this.uploads[t],"variant","success"),this.$set(this.localValue,e,t),this.$emit("input",this.localValue)},deleteFile:function(e,t){var n=this;if(e&&!this.testMode)this.clientSendRequest({Path:"".concat(this.uploadPath,"/").concat(this.formId),Method:"delete",Body:{Filename:t}}).then(function(){n.$delete(n.uploads,t),n.$delete(n.localValue,e)}).catch(function(e){n.$log.error(e),n.uploads[t].variant="danger"});else if(e)this.$delete(this.uploads,t),this.$delete(this.localValue,e);else{var o=this.uploads[t].fileId;this.$delete(this.uploads,t),this.localValue[o]&&this.$delete(this.localValue,o)}},reset:function(){this.files=[],this.$refs.uploadFile.reset(),this.uploads={},this.localValue={}},initSelectedFiles:function(){var e=this,t=this.value;t&&(Array.isArray(t)||(t=[t]),t.forEach(function(t){t&&Object.keys(t).forEach(function(n){var o=n,a=t[n];e.$set(e.uploads,a,{fileId:o,filename:a,variant:"success",progress:100}),e.$set(e.localValue,o,a)})}))}}},a=n("psIG"),s=Object(a.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,label:e._f("translate")(e.label),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error)}},[n("b-form-file",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],ref:"uploadFile",attrs:{id:e.fieldId,name:e.name,placeholder:e._f("translate")(e.placeholder),multiple:e.multiple},on:{input:function(t){e.uploadFiles()}},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}}),e._v(" "),n("div",{staticClass:"container-fluid"},[e.hasUploadError?n("small",{staticClass:"form-text Form--Danger Form__Help"},[n("CommonIcon",{attrs:{icon:"exclamation-circle"}}),e._v("\n            "+e._s(e._f("translate")("Something went wrong, please try again later."))+"\n        ")],1):e._e(),e._v(" "),e.displayValue?n("b-row",[n("b-col",{staticClass:"FormUpload__CurrentValue"},e._l(e.displayValue,function(t,o){return n("div",{key:"file-"+o},[n("CommonIcon",{attrs:{icon:e.fileIcon}}),e._v(" "+e._s(t)+"\n                ")],1)}))],1):e._e(),e._v(" "),e._l(e.uploads,function(t){return n("b-row",{key:t.filename,staticClass:"mt-2",attrs:{"align-v":"center"}},[n("b-col",[n("b-progress",{staticClass:"Form__Progress",attrs:{max:100}},[n("b-progress-bar",{staticClass:"Form__ProgressBar",attrs:{value:t.progress,variant:t.variant,label:t.filename}})],1)],1),e._v(" "),n("b-col",{attrs:{cols:"0"}},[n("CommonLink",{staticClass:"Form__UploadDelete",on:{click:function(n){e.deleteFile(t.fileId,t.filename)}}},[n("CommonIcon",{attrs:{icon:"times",size:"md"}})],1)],1)],1)})],2)],1)},[],!1,null,null,null);s.options.__file="FormUpload.vue";t.default=s.exports},A86J:function(e,t,n){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}},Iptl:function(e,t,n){"use strict";n("GkPX");var o=n("nS/B");t.a={components:{CommonNotice:function(){return n.e(114).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(10).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(11).then(n.bind(null,"8txu"))}},computed:{doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")}},mounted:function(){var e=this;this.$nextTick(function(){e.$test.setFlag("DocComponent::".concat(e.component.name,"::Mounted"))})}}},ygKq:function(e,t,n){"use strict";n.r(t);var o=n("Iptl"),a=n("433n"),s={name:"FormUpload",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormUpload",value:void 0,component:a.default,example:{error:{type:"input"},uploadPath:{default:"customer/upload",type:"input"},name:{type:"input"},label:{type:"input"},required:{type:"checkbox",default:!1},description:{type:"input"},placeholder:{default:"Select or drop files here",type:"input"},formId:{default:"a025dba6-3bec-11e8-b467-0ed5f89f718b",type:"input"},testMode:{default:!0},multiple:{type:"checkbox",default:!0}}}}},l=n("psIG"),i=Object(l.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v("\n            "+e._s(e.version)+"\n        ")])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-namespace":e.componentNamespace,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);i.options.__file="FormUpload.vue";t.default=i.exports}}]);