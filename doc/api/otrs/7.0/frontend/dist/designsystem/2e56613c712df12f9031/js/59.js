(window.webpackJsonp=window.webpackJsonp||[]).push([[59,99],{"433n":function(e,t,s){"use strict";s.r(t);var n=s("tZmG"),o=s.n(n),a={name:"FormUpload",props:{name:{type:String},formId:{type:String,required:!0},uploadPath:{type:String,required:!0},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},hidden:{type:Boolean,default:!1},placeholder:{type:String,default:"Select or drop files here."},multiple:{type:Boolean,default:!0},testMode:{type:Boolean,default:!1},fileIcon:{type:String,default:"file"},displayValue:{type:Object}},data:function(){return{files:[],uploads:{},localValue:{}}},computed:{fieldId:function(){return"formUpload-"+this._uid},hasUploadError:function(){var e=this,t=!1;return o()(this.uploads).forEach(function(s){"danger"===e.uploads[s].variant&&(t=!0)}),t}},watch:{localValue:function(e){this.$emit("input",e)},displayValue:function(){this.uploads={}}},methods:{uploadFiles:function(){var e=this,t=this.files;Array.isArray(t)||(t=[],null!==this.files&&t.push(this.files)),t.length&&(this.multiple||o()(this.uploads).forEach(function(t){var s=e.uploads[t];e.deleteFile(s.fieldId,s.filename)}),t.forEach(function(t){if(e.$set(e.uploads,t.name,{filename:t.name,fileId:null,progress:0,variant:""}),e.testMode)return e.$nextTick(function(){e.uploads[t.name].progress=100}),Math.floor(2*Math.random())?e.uploadFileDisplay(o()(e.uploads).length+1,t.name):(e.$refs.uploadFile.reset(),e.uploads[t.name].variant="danger"),void(e.files=[]);var s=new FormData;s.append("Upload",t),s.append("Disposition","attachment"),e.clientSendRequest({Path:e.uploadPath+"/"+e.formId,Method:"post",Body:s},{xhr:!0,responseType:"json",responseTimeout:0,onUploadProgress:function(s){s.lengthComputable?e.uploads[t.name].progress=100*s.loaded/s.total:e.uploads[t.name].variant="warning"}}).then(function(s){e.uploadFileDisplay(s.Body.FileID,t.name),e.files=[]}).catch(function(s){e.$log.error(s),e.$refs.uploadFile.reset(),e.uploads[t.name].variant="danger",e.files=[]})}))},uploadFileDisplay:function(e,t){this.$refs.uploadFile.reset(),this.$set(this.uploads[t],"fileId",e),this.$set(this.uploads[t],"variant","success"),this.$set(this.localValue,e,t),this.$emit("input",this.localValue)},deleteFile:function(e,t){var s=this;if(e&&!this.testMode)this.clientSendRequest({Path:this.uploadPath+"/"+this.formId+"/"+e,Method:"delete"}).then(function(){s.$delete(s.uploads,t),s.$delete(s.localValue,e)}).catch(function(e){s.$log.error(e),s.uploads[t].variant="danger"});else if(e)this.$delete(this.uploads,t),this.$delete(this.localValue,e);else{var n=this.uploads[t].fileId;this.$delete(this.uploads,t),this.localValue[n]&&this.$delete(this.localValue,n)}},reset:function(){this.files=[],this.$refs.uploadFile.reset(),this.uploads={},this.localValue={}}}},i=s("psIG"),l=Object(i.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,label:e._f("translate")(e.label),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error)}},[s("b-form-file",{ref:"uploadFile",attrs:{id:e.fieldId,name:e.name,placeholder:e._f("translate")(e.placeholder),multiple:e.multiple},on:{input:function(t){e.uploadFiles()}},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}}),e._v(" "),s("div",{staticClass:"container-fluid"},[e.hasUploadError?s("small",{staticClass:"form-text Form--Danger Form__Help"},[s("CommonIcon",{attrs:{icon:"exclamation-circle"}}),e._v("\n            "+e._s(e._f("translate")("Something went wrong, please try again later."))+"\n        ")],1):e._e(),e._v(" "),e.displayValue?s("b-row",[s("b-col",{staticClass:"FormUpload__CurrentValue"},e._l(e.displayValue,function(t,n){return s("div",{key:"file-"+n},[s("CommonIcon",{attrs:{icon:e.fileIcon}}),e._v(" "+e._s(t)+"\n                ")],1)}))],1):e._e(),e._v(" "),e._l(e.uploads,function(t){return s("b-row",{key:t.filename,staticClass:"mt-2",attrs:{"align-v":"center"}},[s("b-col",[s("b-progress",{staticClass:"Form__Progress",attrs:{max:100}},[s("b-progress-bar",{staticClass:"Form__ProgressBar",attrs:{value:t.progress,variant:t.variant,label:t.filename}})],1)],1),e._v(" "),s("b-col",{attrs:{cols:"0"}},[s("CommonLink",{staticClass:"Form__UploadDelete",on:{click:function(s){e.deleteFile(t.fileId,t.filename)}}},[s("CommonIcon",{attrs:{icon:"times",size:"md"}})],1)],1)],1)})],2)],1)},[],!1,null,null,null);l.options.__file="FormUpload.vue";t.default=l.exports},Iptl:function(e,t,s){"use strict";var n=s("nS/B");t.a={components:{CommonNotice:function(){return s.e(116).then(s.bind(null,"mkLc"))},DocsExample:function(){return s.e(7).then(s.bind(null,"GD02"))},DocsComponentAPI:function(){return s.e(8).then(s.bind(null,"8txu"))}},computed:{doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(n.b)(this.doc,"summary")},version:function(){return Object(n.b)(this.doc,"version")},description:function(){return Object(n.b)(this.doc,"description")},props:function(){return Object(n.a)(this.doc,"prop")},slots:function(){return Object(n.a)(this.doc,"slot")},events:function(){return Object(n.a)(this.doc,"event")},methods:function(){return Object(n.a)(this.doc,"method")}}}},ygKq:function(e,t,s){"use strict";s.r(t);var n=s("Iptl"),o=s("433n"),a={name:"FormUpload",mixins:[n.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormUpload",value:void 0,component:o.default,example:{error:{type:"input"},uploadPath:{default:"customer/upload",type:"input"},name:{type:"input"},label:{type:"input"},required:{type:"checkbox",default:!1},description:{type:"input"},placeholder:{default:"Select or drop files here",type:"input"},formId:{default:"a025dba6-3bec-11e8-b467-0ed5f89f718b",type:"input"},testMode:{default:!0},multiple:{type:"checkbox",default:!0}}}}},i=s("psIG"),l=Object(i.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main"},[s("h1",{staticClass:"design-system"},[e._v("\n        "+e._s(e.summary)+"\n        "),s("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v(e._s(e.version))])],1),e._v(" "),s("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[s("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),s("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),e._v(" "),s("b-tabs",{staticClass:"tab-content"},[s("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[s("DocsExample",{attrs:{component:e.component,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),s("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[s("h2",{staticClass:"design-system"},[e._v("Header Level 2")]),e._v(" "),s("ol",{staticClass:"design-system"},[s("li",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" "),s("li",[e._v("Aliquam tincidunt mauris eu risus.")])]),e._v(" "),s("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[s("b-row",[s("b-col",{attrs:{sm:"6"}},[s("div",[s("h5",{staticClass:"design-system"},[e._v("Do")]),e._v(" "),s("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),e._v(" "),s("b-col",{attrs:{sm:"6"}},[s("div",[s("h5",{staticClass:"design-system"},[e._v("Don't")]),e._v(" "),s("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),e._v(" "),s("h3",{staticClass:"design-system"},[e._v("Header Level 3")]),e._v(" "),s("ul",{staticClass:"design-system"},[s("li",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" "),s("li",[e._v("Aliquam tincidunt mauris eu risus.")])])],1),e._v(" "),s("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[s("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);l.options.__file="FormUpload.vue";t.default=l.exports}}]);