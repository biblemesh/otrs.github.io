(window.webpackJsonp=window.webpackJsonp||[]).push([[171,39,78,273,296],{"9iYM":function(t,e,n){"use strict";n.r(e);n("ScpY");var o={name:"CommonLink",mixins:[n("MHmu").a],props:{link:{type:[String,Object]},isExternal:{type:Boolean,default:!1},isRoute:{type:Boolean,default:!1},active:{type:Boolean,default:!1},activeClass:{type:String},append:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},exact:{type:Boolean,default:!1},exactActiveClass:{type:String},flyoutId:{type:String},rel:{type:String},replace:{type:Boolean,default:!1},routerTag:{type:String},srOnlyText:{type:String},target:{type:String},externalInNewTab:{type:Boolean}},data:function(){return{showFlyout:!1}},computed:{isInternalLink:function(){return!this.isExternal&&(!!this.isRoute||this.isRouteLink(this.link))},localTarget:function(){return this.target?this.target:this.externalInNewTab&&!this.isInternalLink?"_blank":null}},methods:{click:function(t){this.$emit("click",t)},isBlured:function(){var t=this;this.flyoutId&&(this.showFlyout=!1,this.$nextTick(function(){t.checkFocusedElements()}))},isFocused:function(){var t=this;this.flyoutId&&(this.showFlyout=!0,this.$nextTick(function(){t.checkFocusedElements()}))},checkFocusedElements:function(){var t=document.getElementById(this.flyoutId);if(t&&t.classList.contains("has-flyout")){var e=t.getElementsByClassName("Flyout");e&&e.length&&(this.showFlyout?e[0].classList.add("Flyout__Show"):e[0].classList.remove("Flyout__Show"))}}}},s=n("psIG"),i=Object(s.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-link",{style:{"pointer-events":t.disabled?"none":"inherit"},attrs:{active:t.active,"active-class":t.activeClass,append:t.append,disabled:t.disabled,exact:t.exact,"exact-active-class":t.exactActiveClass,href:t.isInternalLink?null:t.link,rel:t.rel,replace:t.replace,"router-tag":t.routerTag,target:t.localTarget,to:t.isInternalLink?t.link:null,"sr-only-text":t.srOnlyText},on:{click:t.click},nativeOn:{blur:function(e){return t.isBlured(e)},focus:function(e){return t.isFocused(e)}}},[t._t("default"),t._v(" "),t.srOnlyText?n("span",{staticClass:"sr-only"},[t._v("\n        "+t._s(t._f("translate")(t.srOnlyText))+"\n    ")]):t._e()],2)},[],!1,null,null,null);e.default=i.exports},Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),s=n.n(o),i=n("nS/B"),r=n("lOrp");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}e.a={components:{CommonNotice:function(){return n.e(276).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(71).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(73).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){s()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(i.b)(this.doc,"summary")},version:function(){return Object(i.b)(this.doc,"version")},description:function(){return Object(i.b)(this.doc,"description")},props:function(){return Object(i.a)(this.doc,"prop")},slots:function(){return Object(i.a)(this.doc,"slot")},events:function(){return Object(i.a)(this.doc,"event")},methods:function(){return Object(i.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(r.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},L3zo:function(t,e,n){"use strict";n.r(e);var o={name:"CommonAlert",components:{CommonLink:n("9iYM").default},model:{prop:"show",event:"input"},props:{title:{type:String,required:!0},description:{type:String},link:{type:[String,Object]},linkText:{type:String,default:"Please follow this link"},dismissible:{type:Boolean},variant:{type:String,default:"info"},show:{type:Boolean}},computed:{variantClass:function(){switch(this.variant){case"success":return"Alert--Success";case"danger":return"Alert--Danger";case"warning":return"Alert--Warning";default:return"Alert--Neutral"}}},methods:{onLinkClick:function(t){this.$emit("click",t)},dismissed:function(t){this.$emit("dismissed",t)},input:function(t){this.$emit("input",t)}}},s=(n("TEtD"),n("psIG")),i=Object(s.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-alert",{staticClass:"Alert",class:[t.variantClass],attrs:{dismissible:t.dismissible,"dismiss-label":t._f("translate")("Dismiss this alert"),variant:t.variant,show:t.show},on:{dismissed:t.dismissed,input:t.input}},[n("p",[n("strong",[t._v(t._s(t._f("translate")(t.title)))]),t._v(" "),t.description?[t._v("\n            "+t._s(t._f("translate")(t.description))+"\n        ")]:t._e(),t._v(" "),t.link?n("CommonLink",{staticClass:"ml-2",attrs:{link:t.link},on:{click:t.onLinkClick}},[t._v("\n            "+t._s(t._f("translate")(t.linkText))+"\n        ")]):t._e()],2),t._v(" "),n("div",{staticClass:"Alert__Actions"},[t._t("action")],2)])},[],!1,null,null,null);e.default=i.exports},MHmu:function(t,e,n){"use strict";n("GkPX");var o=n("e+GP"),s=n.n(o);e.a={methods:{isRouteLink:function(t){if("object"===s()(t))return!0;if(!this.$router)return!1;var e=this.$router.resolve({path:t});return!!(e.route&&e.route.matched&&e.route.matched.length&&"ErrorPage"!==e.route.matched[0].name&&"LayoutError"!==e.route.matched[0].name)}}}},TEtD:function(t,e,n){"use strict";var o=n("uG4I");n.n(o).a},"e+GP":function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function(t){return n(t)}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o(e)}t.exports=o},eXAr:function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),s=n("L3zo"),i={name:"CommonAlert",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonAlert",component:s.default,example:{title:{default:"Sample Alert",type:"input"},description:{default:"Some Important Message",type:"input"},link:{default:"http://www.otrs.com",type:"input"},linkText:{type:"input",default:"Please follow this link"},dismissible:{type:"checkbox"},variant:{default:"info",type:"select",options:[{value:"success",text:"success"},{value:"danger",text:"danger"},{value:"warning",text:"warning"},{value:"info",text:"info"}]},show:{default:!0,type:"checkbox"}}}}},r=n("psIG"),a=Object(r.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=a.exports},uG4I:function(t,e,n){}}]);