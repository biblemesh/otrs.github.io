(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{"1tT/":function(t,n,e){"use strict";e.r(n);var o=e("Iptl"),s={name:"CommonSidebar",props:{columnSize:{type:String,default:"col-md-3"}}},i=e("psIG"),c=Object(i.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("aside",{staticClass:"Sidebar",class:this.columnSize},[this._t("default")],2)},[],!1,null,null,null);c.options.__file="CommonSidebar.vue";var a=c.exports,r={name:"CommonSidebar",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonSidebar",component:a,example:{columnSize:{default:"col-md-3",type:"input"},slots:{default:{content:"\x3c!-- SIDEBAR CONTENTS GOES HERE --\x3e",render:function(t){return function(){return t("span",{style:{display:"inline-block",backgroundColor:"#eee",width:"100%",padding:"5px"}},["Sidebar contents"])}}}}}}}},m=Object(i.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[e("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),e("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v(t._s(t.version))])],1),t._v(" "),e("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[e("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),e("b-tabs",{staticClass:"tab-content"},[e("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[e("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),e("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[e("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);m.options.__file="CommonSidebar.vue";n.default=m.exports},Iptl:function(t,n,e){"use strict";e("GkPX");var o=e("nS/B");n.a={components:{CommonNotice:function(){return e.e(112).then(e.bind(null,"mkLc"))},DocsExample:function(){return e.e(10).then(e.bind(null,"GD02"))},DocsComponentAPI:function(){return e.e(11).then(e.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")}},mounted:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}}}]);