(window.webpackJsonp=window.webpackJsonp||[]).push([[80,99],{"1BT7":function(t,e,n){"use strict";n.r(e);var o=n("gki9"),s=n.n(o),i=(n("e2Kn"),n("F/wX")),a=n.n(i),l={name:"FormAutocomplete",components:{FormSelect:function(){return Promise.all([n.e(0),n.e(1),n.e(110)]).then(n.bind(null,"cDBQ"))}},props:{value:{type:[String,Number]},url:{type:String,required:!0},params:{type:Object},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},autoFocus:{type:Boolean,default:!1},name:{type:String},noResultsText:{type:String},searchPromptText:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},placeholder:{type:String},clearOnSelect:{type:Boolean,default:!1},testMode:{type:Boolean,default:!1}},data:function(){return{options:[],searchTimeout:{id:null,callback:null}}},computed:{localValue:{get:function(){return this.value},set:function(t,e){this.$emit("input",t,e)}}},methods:{loadOptions:function(t){var e=this,n=t.action,o=t.callback,s=t.searchQuery;if("ASYNC_SEARCH"===n){if(this.searchQuery=s,this.searchTimeout.id&&(clearTimeout(this.searchTimeout.id),this.searchTimeout.callback(null,[]),this.searchTimeout.id=null,this.searchTimeout.callback=null),!s)return this.options=[],void o(null,this.options);this.searchTimeout.callback=o,this.searchTimeout.id=setTimeout(function(){e.fetchOptions(s,o)},400)}},fetchOptions:function(t,e){var n=this;this.testMode?setTimeout(function(){n.options=a.a.tz.names().reduce(function(e,n){return e.length<20&&-1!==n.toLowerCase().indexOf(t.toLowerCase())&&e.push({id:n,label:n,data:{timezoneId:n}}),e},[]),e(null,n.options)},300):this.clientSendRequest({Path:this.url,Method:"get",Query:s()({SearchTerm:t},this.params)}).then(function(t){n.options=t.Body.Options,e(null,n.options)}).catch(function(t){n.options=[],n.$log.error(t),e("Error getting options.",[])})},focus:function(){this.$refs.input.$el.focus()},select:function(t,e){this.$emit("select",t,e)}}},c=(n("Mk2q"),n("psIG")),r=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FormSelect",{ref:"formSelect",staticClass:"Form__Autocomplete",attrs:{"auto-focus":t.autoFocus,error:t.error,label:t.label,"label-sr-only":t.labelSrOnly,required:t.required,description:t.description,name:t.name,disabled:t.disabled,hidden:t.hidden,placeholder:t.placeholder,"clear-on-select":t.clearOnSelect,options:t.options,"load-options":t.loadOptions,"cache-options":!1,"no-results-text":t.noResultsText,"search-prompt-text":t.searchPromptText,async:"","open-on-focus":""},on:{select:t.select},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}},[n("template",{slot:"append-inline"},[t._t("append-inline")],2)],2)},[],!1,null,null,null);r.options.__file="FormAutocomplete.vue";e.default=r.exports},"1QGU":function(t,e,n){},Iptl:function(t,e,n){"use strict";n("GkPX");var o=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(112).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(10).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(11).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")}},mounted:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},Mk2q:function(t,e,n){"use strict";var o=n("1QGU");n.n(o).a},aN4M:function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),s=n("1BT7"),i={name:"FormAutocomplete",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormAutocomplete",value:void 0,component:s.default,example:{url:{default:"public/autocomplete",type:"input"},error:{type:"input"},name:{type:"input"},label:{type:"input"},labelSrOnly:{default:!1,subtype:"checkbox"},required:{default:!1,type:"checkbox"},description:{type:"input"},noResultsText:{type:"input"},searchPromptText:{type:"input"},disabled:{default:!1,type:"checkbox"},hidden:{default:!1,type:"checkbox"},placeholder:{type:"input"},clearOnSelect:{default:!1,type:"checkbox"},testMode:{default:!0}}}}},a=n("psIG"),l=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v(t._s(t.version))])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),n("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[n("h2",{staticClass:"design-system"},[t._v("Header Level 2")]),t._v(" "),n("ol",{staticClass:"design-system"},[n("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),n("li",[t._v("Aliquam tincidunt mauris eu risus.")])]),t._v(" "),n("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[t._v("Do")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),t._v(" "),n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[t._v("Don't")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),t._v(" "),n("h3",{staticClass:"design-system"},[t._v("Header Level 3")]),t._v(" "),n("ul",{staticClass:"design-system"},[n("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),n("li",[t._v("Aliquam tincidunt mauris eu risus.")])])],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);l.options.__file="FormAutocomplete.vue";e.default=l.exports}}]);