(window.webpackJsonp=window.webpackJsonp||[]).push([[220,96,235],{"+IV6":function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},"+J7U":function(t,e,n){var o,i,s=n("We69"),r=n("4feL"),a=0,c=0;t.exports=function(t,e,n){var l=e&&n||0,u=e||[],p=(t=t||{}).node||o,f=void 0!==t.clockseq?t.clockseq:i;if(null==p||null==f){var d=s();null==p&&(p=o=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==f&&(f=i=16383&(d[6]<<8|d[7]))}var m=void 0!==t.msecs?t.msecs:(new Date).getTime(),b=void 0!==t.nsecs?t.nsecs:c+1,g=m-a+(b-c)/1e4;if(g<0&&void 0===t.clockseq&&(f=f+1&16383),(g<0||m>a)&&void 0===t.nsecs&&(b=0),b>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=m,c=b,i=f;var y=(1e4*(268435455&(m+=122192928e5))+b)%4294967296;u[l++]=y>>>24&255,u[l++]=y>>>16&255,u[l++]=y>>>8&255,u[l++]=255&y;var v=m/4294967296*1e4&268435455;u[l++]=v>>>8&255,u[l++]=255&v,u[l++]=v>>>24&15|16,u[l++]=v>>>16&255,u[l++]=f>>>8|128,u[l++]=255&f;for(var h=0;h<6;++h)u[l+h]=p[h];return e||r(u)}},"4feL":function(t,e){for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);t.exports=function(t,e){var o=e||0,i=n;return[i[t[o++]],i[t[o++]],i[t[o++]],i[t[o++]],"-",i[t[o++]],i[t[o++]],"-",i[t[o++]],i[t[o++]],"-",i[t[o++]],i[t[o++]],"-",i[t[o++]],i[t[o++]],i[t[o++]],i[t[o++]],i[t[o++]],i[t[o++]]].join("")}},Aubc:function(t,e,n){},Hqm2:function(t,e,n){"use strict";n.r(e);n("e2Kn");var o=n("rpZP"),i={name:"BusinessObjectWidgetLayout",mixins:[n("CqAs").a,o.a],props:{title:{type:String},customTitle:{type:String},totalItemCount:{type:Number},collapsed:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},isCollapsable:{type:Boolean,default:!0},isConfigurable:{type:Boolean,default:!0},widgetId:{type:String,required:!0},isConfigOpen:{type:Boolean,default:!1},scrollContent:{type:Boolean,default:!0},businessObjectType:{type:String}},data:function(){return{configOpened:!1}},computed:{collapseId:function(){return"widget-".concat(this.uuid)},tooltipWidgetConfiguration:function(){return this.configOpened?this.$locale.translate("Close widget configuration"):this.$locale.translate("Open widget configuration")},expandCollapseTitle:function(){return this.collapsed?this.$locale.translate("Expand widget"):this.$locale.translate("Collapse widget")},totalItemsText:function(){return this.totalItemCount>1?"(%s Objects)":"(%s Object)"}},watch:{isConfigOpen:function(t){this.configOpened=t}},methods:{switchCollapse:function(){this.collapsed?this.$emit("expand"):this.$emit("collapse")},toggleWidgetConfiguration:function(){this.configOpened=!this.configOpened,this.$emit("toggle-configuration")}}},s=(n("iUTv"),n("psIG")),r=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"border mt-3 Background--LightGray Widget",class:{"Widget--Expanded":!t.collapsed},attrs:{"data-widget-id":t.widgetId}},[t.showHeader?n("div",{staticClass:"Widget__Header",class:{"border-bottom":!t.collapsed}},[n("b-row",{staticClass:"px-3 py-2",attrs:{"no-gutters":"","align-v":"center"}},[n("b-col",{staticClass:"mb-2 mb-lg-0",attrs:{lg:"6"}},[t.isCollapsable?n("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mr-2",attrs:{title:t.expandCollapseTitle,"aria-label":t.expandCollapseTitle},on:{click:function(e){return t.switchCollapse()}}},[n("CommonIcon",{staticClass:"Font--Small Widget__Icon",attrs:{icon:t.collapsed?"arrow-right-1":"arrow-down-1"}})],1):t._e(),t._v(" "),t._t("title",[n("h3",{staticClass:"Widget__Header__Title"},[t.customTitle?n("span",{staticClass:"Widget__Header__Title--Custom"},[t._v("\n                            "+t._s(t.customTitle)+"\n                        ")]):n("span",[t._v("\n                            "+t._s(t._f("translate")(t.title))+"\n                        ")]),t._v(" "),t.totalItemCount?[t._v("\n                            "+t._s(t._f("translate")(t.getBusinessObjectText(t.totalItemsText),t.totalItemCount))+"\n                        ")]:t._e()],2)])],2),t._v(" "),t.isConfigurable?n("b-col",{staticClass:"text-right",attrs:{lg:"6"}},[t.$slots.configuration?[t._t("configuration")]:[t._t("additional-configuration"),t._v(" "),n("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:t.tooltipWidgetConfiguration,"aria-label":t.tooltipWidgetConfiguration},on:{click:function(e){return t.toggleWidgetConfiguration()}}},[n("CommonIcon",{staticClass:"Widget__Icon Widget__Action",attrs:{icon:"cog"}})],1)]],2):t._e()],1)],1):t._e(),t._v(" "),n("b-collapse",{staticClass:"position-relative Widget__Content",class:{"overflow-auto":!t.isConfigOpen&&t.scrollContent,"overflow-hidden":t.isConfigOpen},attrs:{id:t.collapseId,visible:!t.collapsed}},[t._t("default")],2)],1)},[],!1,null,null,null);e.default=r.exports},Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),i=n.n(o),s=n("nS/B"),r=n("lOrp");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}e.a={components:{CommonNotice:function(){return n.e(382).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(85).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(88).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){i()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(r.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},K4DB:function(t,e,n){var o=n("e+GP"),i=n("T1e2");t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?i(t):e}},T1e2:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},WI9V:function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},We69:function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var o=new Uint8Array(16);t.exports=function(){return n(o),o}}else{var i=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),i[e]=t>>>((3&e)<<3)&255;return i}}},"e+GP":function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function(t){return n(t)}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o(e)}t.exports=o},"eef+":function(t,e,n){var o=n("WI9V");t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},iUTv:function(t,e,n){"use strict";var o=n("Aubc");n.n(o).a},qn6m:function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),i=n("Hqm2"),s={name:"BusinessObjectWidgetLayout",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/BusinessObject/BusinessObjectWidgetLayout",value:[],component:i.default,filterText:"",example:{title:{default:"Title Example",type:"input"},collapsed:{type:"checkbox"},isCollapsable:{type:"checkbox",default:!0},isConfigurable:{type:"checkbox",default:!0},widgetId:{type:"input",default:"c945728e-2324-11e8-9b56-9fdee36e124b"},isConfigOpen:{type:"checkbox",default:!0},scrollContent:{type:"checkbox",default:!0},slots:{default:{content:"\x3c!-- WIDGET CONTENT GOES HERE --\x3e",render:function(t){return function(){return t("div",{},["Test content",t("br"),"Some more test content"])}}}}}}}},r=n("psIG"),a=Object(r.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=a.exports},rpZP:function(t,e,n){"use strict";var o=n("+J7U"),i=n.n(o);e.a={data:function(){return{uuid:this.getUuid()}},methods:{getUuid:function(){return i()()}}}}}]);