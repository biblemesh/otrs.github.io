(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{GNaB:function(t,n,e){"use strict";e.r(n);var o=e("Iptl"),r=e("QC6T"),a=e.n(r),c=function(t,n){var e=a()(t),o=e.lightness()+n;return o>100&&(o=100),a.a.hsl([e.hue(),e.saturationl(),o]).hex()},s=function(t){var n=t,e=c(t,20);return{background:[e,"-moz-linear-gradient(top, ".concat(e," 0%, ").concat(n," 100%)"),"-webkit-gradient(linear, left top, left bottom, color-stop(0%, ".concat(e,"), color-stop(100%, ").concat(n,"))"),"-webkit-linear-gradient(top, ".concat(e," 0%, ").concat(n," 100%)"),"-o-linear-gradient(top, ".concat(e," 0%, ").concat(n," 100%)"),"-ms-linear-gradient(top, ".concat(e," 0%, ").concat(n," 100%)"),"linear-gradient(to bottom, ".concat(e," 0%, ").concat(n," 100%)")]}},i={name:"CommonHero",components:{FormInput:function(){return e.e(14).then(e.bind(null,"CJfq"))}},props:{background:{type:String,default:"Background"},backgroundImage:{type:String},backgroundColor:{type:String,default:"#6ABECC"},title:{type:String,default:"How can we help you?"}},computed:{style:function(){var t,n,e,o,r={},i="/api/frontend/external/homepage/image";if("Background"===this.background)this.backgroundImage?(r.backgroundImage='url("'.concat(i,"?Path=").concat(this.backgroundImage,'")'),r.backgroundSize="cover"):r.backgroundColor=this.backgroundColor;else if("BackgroundGradient"===this.background)r.background=s(this.backgroundColor).background;else if("BackgroundMix"===this.background)if(this.backgroundImage){var u="".concat(i,"?Path=").concat(this.backgroundImage);r.background=(t=this.backgroundColor,n=u,e=a()(t).rgb().array(),o=a()(c(t,20)).rgb().array(),{background:["rgb(".concat(o,")"),"-moz-linear-gradient(top, rgba(".concat(o,", .2) 0%, rgba(").concat(e,", .5) 100%), url(").concat(n,")"),"-webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(".concat(o,", .2)), ")+"color-stop(100%, rgba(".concat(e,", .5))), url(").concat(n,")"),"-webkit-linear-gradient(top, rgba(".concat(o,", .2) 0%, rgba(").concat(e,", .5) 100%), url(").concat(n,")"),"-o-linear-gradient(top, rgba(".concat(o,", .2) 0%, rgba(").concat(e,", .5) 100%), url(").concat(n,")"),"-ms-linear-gradient(top, rgba(".concat(o,", .2) 0%, rgba(").concat(e,", .5) 100%), url(").concat(n,")"),"linear-gradient(to bottom, rgba(".concat(o,", .2) 0%, rgba(").concat(e,", .5) 100%), url(").concat(n,")")]}).background,r.backgroundSize="cover"}else r.background=s(this.backgroundColor).background;return r}}},u=(e("tBds"),e("psIG")),l=Object(u.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-jumbotron",{staticClass:"text-center d-flex align-items-center",class:t.background,style:t.style,attrs:{fluid:""}},[e("h2",{staticClass:"Search__Title"},[t._v("\n        "+t._s(t._f("translate")(t.title))+"\n    ")]),t._v(" "),t._t("search")],2)},[],!1,null,null,null).exports,p={name:"CommonHero",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/External",componentPath:"Apps/External/Components/Common/CommonHero",component:l,example:{background:{default:"BackgroundGradient",type:"input"},title:{default:"How can we help you?",type:"input"},slots:{search:{content:"    \x3c!-- SEARCH FIELD CONTENT GOES HERE --\x3e",render:function(t){return function(){return t("b-input",{class:{"py-3":!0,"rounded-0":!0,"border-0":!0,"no-rounded-bottom":!0,"col-md-6":!0,"mx-auto":!0,shadow:!0,Search__Item:!0},props:{placeholder:"Search something...",type:"text",size:"lg"}})}}}}}}}},d=Object(u.a)(p,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"DesignSystem__Main"},[e("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),e("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),e("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[e("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),e("b-tabs",{staticClass:"DesignSystem__TabContent"},[e("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[e("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),e("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[e("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);n.default=d.exports},Iptl:function(t,n,e){"use strict";e("2Tod"),e("ABKx"),e("W1QL"),e("K/PF"),e("t91x"),e("75LO"),e("asZ9"),e("GkPX");var o=e("OvAC"),r=e.n(o),a=e("nS/B"),c=e("lOrp");function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,o)}return e}n.a={components:{CommonNotice:function(){return e.e(339).then(e.bind(null,"mkLc"))},DocsExample:function(){return e.e(75).then(e.bind(null,"GD02"))},DocsComponentAPI:function(){return e.e(77).then(e.bind(null,"8txu"))}},computed:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(e,!0).forEach(function(n){r()(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(a.b)(this.doc,"summary")},version:function(){return Object(a.b)(this.doc,"version")},description:function(){return Object(a.b)(this.doc,"description")},props:function(){return Object(a.a)(this.doc,"prop")},slots:function(){return Object(a.a)(this.doc,"slot")},events:function(){return Object(a.a)(this.doc,"event")},methods:function(){return Object(a.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(c.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},jMUG:function(t,n,e){},tBds:function(t,n,e){"use strict";var o=e("jMUG");e.n(o).a}}]);