(window.webpackJsonp=window.webpackJsonp||[]).push([[204,27],{B2Ms:function(t,e,n){"use strict";n.r(e);n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO");var o=n("OvAC"),i=n.n(o),r=n("lOrp");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}var a={name:"CommonBadge",props:{title:{type:String,required:!0},tooltipTitle:{type:String},disabled:{type:Boolean,default:!1},size:{type:String},variant:{type:String},inline:{type:Boolean},tooltipPlacement:{type:String,default:"top"},truncateTitle:{type:Boolean}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach(function(e){i()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},Object(r.b)(["language"]),{titleTranslationNeeded:function(){return!0},localTitle:function(){return this.titleTranslationNeeded?this.$locale.translate(this.title):this.title},localTooltipTitle:function(){var t=this.tooltipTitle||this.title;return this.titleTranslationNeeded?this.$locale.translate(t):t},elementClass:function(){var t=["badge","Badge"];switch(this.disabled&&t.push("Badge--Disabled"),this.inline&&t.push("Badge--Inline"),this.variant){case"primary":t.push("Badge--Primary")}switch(this.size){case"sm":t.push("Badge--Smaller")}return t}})},l=(n("mv8j"),n("psIG")),c=Object(l.a)(a,function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:{trigger:"hover",placement:t.tooltipPlacement},expression:"{ trigger: 'hover', placement: tooltipPlacement }"}],class:t.elementClass,attrs:{title:t.localTooltipTitle}},[t.truncateTitle?[t._v("\n        "+t._s(t._f("truncate")(t.localTitle,100))+"\n    ")]:[t._v("\n        "+t._s(t.localTitle)+"\n    ")]],2)},[],!1,null,null,null);e.default=c.exports},ELK8:function(t,e,n){},Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),i=n.n(o),r=n("nS/B"),s=n("lOrp");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}e.a={components:{CommonNotice:function(){return n.e(276).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(71).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(73).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){i()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(r.b)(this.doc,"summary")},version:function(){return Object(r.b)(this.doc,"version")},description:function(){return Object(r.b)(this.doc,"description")},props:function(){return Object(r.a)(this.doc,"prop")},slots:function(){return Object(r.a)(this.doc,"slot")},events:function(){return Object(r.a)(this.doc,"event")},methods:function(){return Object(r.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(s.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},gKPN:function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),i=n("B2Ms"),r={name:"CommonBadgeAgent",extends:i.default,props:{translateTitle:{type:Boolean,default:!0}},computed:{titleTranslationNeeded:function(){return this.translateTitle},elementClass:function(){return["text-truncate"].concat(i.default.computed.elementClass.call(this))}}},s=n("psIG"),a=Object(s.a)(r,void 0,void 0,!1,null,null,null).exports,l={name:"CommonBadgeAgent",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/Agent",componentPath:"Apps/Agent/Components/Common/CommonBadgeAgent",component:a,example:{translateTitle:{default:!0,type:"checkbox"},title:{default:"My Badge",type:"input"},tooltipTitle:{default:"My Badge Tooltip",type:"input"},disabled:{default:!1,type:"checkbox"},inline:{default:!1,type:"checkbox"},variant:{type:"select",options:["primary"]},size:{type:"select",options:["sm"]},tooltipPlacement:{type:"select",options:[{value:null,text:"-"},{value:"top",text:"top"},{value:"topleft",text:"topleft"},{value:"topright",text:"topright"},{value:"right",text:"right"},{value:"righttop",text:"righttop"},{value:"rightbottom",text:"rightbottom"},{value:"bottom",text:"bottom"},{value:"bottomleft",text:"bottomleft"},{value:"bottomright",text:"bottomright"},{value:"left",text:"left"},{value:"lefttop",text:"lefttop"},{value:"leftbottom",text:"leftbottom"}]},truncateTitle:{default:!1,type:"checkbox"}}}}},c=Object(s.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=c.exports},mv8j:function(t,e,n){"use strict";var o=n("ELK8");n.n(o).a}}]);