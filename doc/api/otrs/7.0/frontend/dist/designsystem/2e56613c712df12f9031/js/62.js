(window.webpackJsonp=window.webpackJsonp||[]).push([[62,101],{EC4j:function(e,t,n){"use strict";n.r(t);var s=n("Iptl"),o=n("Khac"),a={name:"FormRadio",mixins:[s.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormRadio",selected:void 0,component:o.default,example:{error:{type:"input"},name:{type:"input"},label:{type:"input"},labelSrOnly:{type:"checkbox",default:!1},required:{type:"checkbox",default:!1},disabled:{type:"checkbox",default:!1},description:{type:"input"},options:{default:[{text:"The first",value:"node-1"},{text:"The seconds",value:"node-2"},{text:"The third",value:"node-3"},{text:"The disabled",value:"node-4",disabled:!0}]},stacked:{default:!1,type:"checkbox"},buttons:{type:"checkbox",default:!1},buttonVariant:{type:"select",options:[{value:void 0,text:"-"},{value:"primary",text:"primary"},{value:"secondary",text:"secondary"},{value:"success",text:"success"},{value:"warning",text:"warning"},{value:"danger",text:"danger"},{value:"info",text:"info"},{value:"light",text:"light"},{value:"dark",text:"dark"}]}}}}},i=n("psIG"),r=Object(i.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v(e._s(e.version))])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),e._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[n("h2",{staticClass:"design-system"},[e._v("Header Level 2")]),e._v(" "),n("ol",{staticClass:"design-system"},[n("li",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" "),n("li",[e._v("Aliquam tincidunt mauris eu risus.")])]),e._v(" "),n("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[e._v("Do")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),e._v(" "),n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[e._v("Don't")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),e._v(" "),n("h3",{staticClass:"design-system"},[e._v("Header Level 3")]),e._v(" "),n("ul",{staticClass:"design-system"},[n("li",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" "),n("li",[e._v("Aliquam tincidunt mauris eu risus.")])])],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"Code & API","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),n("DocsComponentAPI",{staticClass:"mt-5",attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);r.options.__file="FormRadio.vue";t.default=r.exports},Iptl:function(e,t,n){"use strict";var s=n("nS/B");t.a={components:{CommonNotice:function(){return n.e(116).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(7).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(8).then(n.bind(null,"8txu"))}},computed:{doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")}}}},Khac:function(e,t,n){"use strict";n.r(t);var s={name:"FormRadio",props:{error:{type:String},name:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},description:{type:String},hidden:{type:Boolean,default:!1},options:{type:[Array,Object]},stacked:{type:Boolean,default:!1},buttons:{type:Boolean,default:!1},buttonVariant:{type:String,default:"info"}},data:function(){return{selected:""}},computed:{fieldId:function(){return"formRadio-"+this._uid}},methods:{onChange:function(e,t){this.$emit("change",e,t)}}},o=n("psIG"),a=Object(o.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:e.error?"invalid":null,label:e._f("translate")(e.label),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error)}},[n("b-form-radio-group",{attrs:{options:e.options,stacked:e.stacked,buttons:e.buttons,"button-variant":e.buttonVariant,name:"radioSubComponent",plain:""},on:{change:e.onChange},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)},[],!1,null,null,null);a.options.__file="FormRadio.vue";t.default=a.exports}}]);