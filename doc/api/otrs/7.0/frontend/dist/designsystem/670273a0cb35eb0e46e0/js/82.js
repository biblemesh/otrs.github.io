(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{Iptl:function(e,t,n){"use strict";n("GkPX");var s=n("nS/B");t.a={components:{CommonNotice:function(){return n.e(112).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(10).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(11).then(n.bind(null,"8txu"))}},computed:{doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")}}}},T1I9:function(e,t,n){"use strict";n.r(t);var s=n("Iptl"),o={name:"CommonArticleTeaser",components:{CommonBreadcrumb:function(){return n.e(124).then(n.bind(null,"W0aG"))},CommonBadge:function(){return n.e(123).then(n.bind(null,"B2Ms"))}},props:{title:{type:String,required:!0},text:{type:String},link:{type:[String,Object]},breadcrumb:{type:Object,default:function(){return{items:[]}}},divider:{type:Boolean,default:!1},type:{type:String}},methods:{click:function(e){this.$emit("click",e)}}},i=(n("zbK3"),n("psIG")),r=Object(i.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ArticleTeaser",class:{"mb-3":!e.breadcrumb.items.length}},[e.divider?n("hr"):e._e(),e._v(" "),n("CommonLink",{attrs:{link:e.link},on:{click:e.click}},[n("h3",{staticClass:"ArticleTeaser__Title"},[e._v("\n            "+e._s(e.title)+"\n        ")]),e._v(" "),n("p",{staticClass:"ArticleTeaser__Text"},[e.type?n("CommonBadge",{staticClass:"mr-2",attrs:{title:e.type,inline:""}}):e._e(),e._v(" "),e.$slots.default?[e._t("default")]:[e._v("\n                "+e._s(e._f("truncate")(e.text,250))+"\n            ")]],2)]),e._v(" "),e.breadcrumb.items.length?n("CommonBreadcrumb",{staticClass:"mt-2",attrs:{items:e.breadcrumb.items,size:"md"}}):e._e()],1)},[],!1,null,null,null);r.options.__file="index.vue";var a=r.exports,c={name:"CommonArticleTeaser",mixins:[s.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/External",componentPath:"Apps/External/Components/Common/CommonArticleTeaser",component:a,example:{title:{default:"Lorem ipsum dolor sit amet",type:"input"},text:{default:"Consectetur adipiscing elit, donec id fermentum ligula finibus venenatis dui. Ut eget rutrum eros. Praesent vulputate laoreet tortor. Aliquam in massa vel erat euismod pellentesque. Aenean eget porttitor nisl, non viverra dui. Cras posuere pellentesque metus id gravida. Sed lacinia lacus vitae elementum convallis. Praesent nec rhoncus augue.",type:"textarea"},breadcrumb:{default:{items:[{name:"Home",link:"/"},{name:"Service Catalogue",link:"/services"},{name:"Service Category",active:!0}]},type:"object"},divider:{type:"checkbox"}}}}},l=Object(i.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v(e._s(e.version))])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example}})],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);l.options.__file="CommonArticleTeaser.vue";t.default=l.exports},sswQ:function(e,t,n){},zbK3:function(e,t,n){"use strict";var s=n("sswQ");n.n(s).a}}]);