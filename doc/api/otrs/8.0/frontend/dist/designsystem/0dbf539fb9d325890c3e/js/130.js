(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{Iptl:function(t,e,n){"use strict";n("GkPX");var i=n("nS/B");e.a={components:{CommonNotice:function(){return n.e(143).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(15).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(16).then(n.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(i.b)(this.doc,"summary")},version:function(){return Object(i.b)(this.doc,"version")},description:function(){return Object(i.b)(this.doc,"description")},props:function(){return Object(i.a)(this.doc,"prop")},slots:function(){return Object(i.a)(this.doc,"slot")},events:function(){return Object(i.a)(this.doc,"event")},methods:function(){return Object(i.a)(this.doc,"method")}},mounted:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},zVik:function(t,e,n){"use strict";n.r(e);var i=n("Iptl"),o=(n("asZ9"),n("K/PF"),n("75LO"),n("4aJ6"),n("W1QL"),{name:"CommonFilterNavigation",props:{items:{type:Array},multiple:{type:Boolean,default:!1},noActiveItemPossible:{type:Boolean,default:!1},title:{type:String}},computed:{localItems:function(){var t=this,e=function e(n,i){if(!n)return[];var o=[];return i=null===i||void 0===i?"":i,n.forEach(function(n,s){var a=s.toString();i.length>0&&(a="".concat(i,".").concat(s));var l={internalID:a,originalItems:t.items};Object.keys(n).forEach(function(t){l[t]=n[t]}),n.children&&(l.children=e(n.children,a)),o.push(l)}),o}(this.items);return e}},methods:{onFilterChanged:function(t){this.$emit("changed",t)},deactivateAll:function(t){var e=this;t.forEach(function(t){!0===t.active&&e.$set(t,"active",!1),t.children&&e.deactivateAll(t.children)})},selectFilter:function(t){if(!t.isDisabled){var e=t.originalItems,n=null;if(t.internalID.split(".").forEach(function(t){var i=e;null!==n&&(i=n.children),n=i[parseInt(t,10)]}),!this.multiple){if(!this.noActiveItemPossible&&!0===n.active)return;this.deactivateAll(e)}this.$set(n,"active",!t.active),this.$emit("changed",{item:n,activate:!t.active})}}}}),s=n("psIG"),a=Object(s.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.title?n("h5",{staticClass:"border-bottom pb-3 FilterNavigation__Title"},[t._v("\n        "+t._s(t._f("translate")(t.title))+"\n    ")]):t._e(),t._v(" "),n("ul",{staticClass:"FilterNavigation__List",class:{"FilterNavigation--Multiple":t.multiple,"FilterNavigation--Single":!t.multiple,"FilterNavigation--Deselection":t.multiple||t.noActiveItemPossible}},t._l(t.localItems,function(e){return n("li",{key:e.internalID,staticClass:"FilterNavigation__Item",on:{click:function(n){if(n.target!==n.currentTarget)return null;t.selectFilter(e)}}},[e.isDisabled?n("span",{staticClass:"RelatedLinks__Link"},[t._v("\n                "+t._s(t._f("translate")(e.label))+"\n            ")]):n("a",{staticClass:"RelatedLinks__Link",class:{active:e.active},attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.selectFilter(e)}}},[t._v("\n                "+t._s(t._f("translate")(e.label))),e.count?[t._v(" ("+t._s(e.count)+")")]:t._e()],2),t._v(" "),e.children?n("common-filter-navigation",{attrs:{items:e.children,multiple:t.multiple},on:{changed:t.onFilterChanged}}):t._e()],1)}))])},[],!1,null,null,null);a.options.__file="CommonFilterNavigation.vue";var l=a.exports,c={name:"CommonFilterNavigation",mixins:[i.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/External",componentPath:"Apps/External/Components/Common/CommonFilterNavigation",component:l,example:{title:{default:"Teaser title",type:"input"},items:{default:[{id:"Test",label:"Test",count:2,isDisabled:!1},{id:"Test2",label:"Test 2",isDisabled:!1},{id:"Test2",label:"Test 2",isDisabled:!1,count:4,children:[{id:"Child 1",label:"Child 1",count:4,isDisabled:!1}]}],type:"array"},multiple:{type:"checkbox"},noActiveItemPossible:{type:"checkbox"}}}}},r=Object(s.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);r.options.__file="CommonFilterNavigation.vue";e.default=r.exports}}]);