(window.webpackJsonp=window.webpackJsonp||[]).push([[78,125],{Iptl:function(t,e,n){"use strict";n("GkPX");var o=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(112).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(10).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(11).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")}},mounted:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},KtDe:function(t,e,n){},W0aG:function(t,e,n){"use strict";n.r(e);var o={name:"CommonBreadcrumb",props:{items:{type:Array,required:!0},size:{type:String}},computed:{sizeClass:function(){return"sm"===this.size?"Breadcrumb--Smaller":""}}},s=(n("aFWd"),n("psIG")),a=Object(s.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("b-breadcrumb",{staticClass:"Breadcrumb",class:t.sizeClass},t._l(t.items,function(e,o){return n("b-breadcrumb-item",{key:o,staticClass:"Breadcrumb__Item text-truncate",attrs:{text:t._f("translate")(e.name),to:e.link,active:e.active,"aria-current":e.active?"page":null,title:t._f("translate")(e.name)}})}),1):t._e()},[],!1,null,null,null);a.options.__file="index.vue";e.default=a.exports},aFWd:function(t,e,n){"use strict";var o=n("KtDe");n.n(o).a},nOGR:function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),s=n("W0aG"),a={name:"CommonBreadcrumb",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonBreadcrumb",component:s.default,example:{size:{type:"select",options:[{value:void 0,text:"-"},{value:"sm",text:"sm"}]},items:{default:[{name:"Homepage",link:"#"},{name:"Login",link:"#"},{name:"Active page",active:!0}],type:"array"}}}}},i=n("psIG"),r=Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v(t._s(t.version))])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);r.options.__file="CommonBreadcrumb.vue";e.default=r.exports}}]);