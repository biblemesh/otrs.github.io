(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{Iptl:function(e,t,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),r=n.n(o),s=n("nS/B"),i=n("lOrp");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}t.a={components:{CommonNotice:function(){return n.e(350).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(75).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(78).then(n.bind(null,"8txu"))}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")},initialFrontend:function(){var e=this.componentNamespace.split("/");return e.length>1?e[1]:""}},Object(i.b)(["frontend"])),mounted:function(){var e=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){e.$test.setFlag("DocComponent::".concat(e.component.name,"::Mounted"))})}}},T1I9:function(e,t,n){"use strict";n.r(t);var o=n("Iptl"),r={name:"CommonArticleTeaser",components:{CommonBreadcrumb:function(){return n.e(34).then(n.bind(null,"W0aG"))},CommonBadge:function(){return n.e(27).then(n.bind(null,"B2Ms"))}},props:{title:{type:String,required:!0},text:{type:String},link:{type:[String,Object]},breadcrumb:{type:Object,default:function(){return{items:[]}}},divider:{type:Boolean,default:!1},type:{type:String},externalInNewTab:{type:Boolean}},computed:{hasBreadcrumb:function(){return this.breadcrumb&&this.breadcrumb.items&&this.breadcrumb.items.length}},methods:{click:function(e){this.$emit("click",e)}}},s=(n("zbK3"),n("psIG")),i=Object(s.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ArticleTeaser",class:{"mb-3":!e.hasBreadcrumb}},[e.divider?n("hr"):e._e(),e._v(" "),n("CommonLink",{attrs:{link:e.link,"external-in-new-tab":e.externalInNewTab},on:{click:e.click}},[n("h3",{staticClass:"ArticleTeaser__Title"},[e._v("\n            "+e._s(e.title)+"\n        ")]),e._v(" "),n("p",{staticClass:"ArticleTeaser__Text"},[e.type?n("CommonBadge",{staticClass:"mr-2",attrs:{title:e.type,inline:""}}):e._e(),e._v(" "),e.$slots.default?[e._t("default")]:[e._v("\n                "+e._s(e._f("truncate")(e.text,250))+"\n            ")]],2)]),e._v(" "),e.hasBreadcrumb?n("CommonBreadcrumb",{staticClass:"mt-2",attrs:{items:e.breadcrumb.items,size:"md"}}):e._e()],1)},[],!1,null,null,null).exports,a={name:"CommonArticleTeaser",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/External",componentPath:"Apps/External/Components/Common/CommonArticleTeaser",component:i,example:{title:{default:"Lorem ipsum dolor sit amet",type:"input"},text:{default:"Consectetur adipiscing elit, donec id fermentum ligula finibus venenatis dui. Ut eget rutrum eros. Praesent vulputate laoreet tortor. Aliquam in massa vel erat euismod pellentesque. Aenean eget porttitor nisl, non viverra dui. Cras posuere pellentesque metus id gravida. Sed lacinia lacus vitae elementum convallis. Praesent nec rhoncus augue.",type:"textarea"},breadcrumb:{default:{items:[{name:"Home",link:"/"},{name:"Service Catalogue",link:"/services"},{name:"Service Category",active:!0}]},type:"object"},divider:{type:"checkbox"},externalInNewTab:{type:"checkbox"}}}}},c=Object(s.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v("\n            "+e._s(e.version)+"\n        ")])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-namespace":e.componentNamespace,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example}})],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);t.default=c.exports},nJfV:function(e,t,n){},zbK3:function(e,t,n){"use strict";var o=n("nJfV");n.n(o).a}}]);