(window.webpackJsonp=window.webpackJsonp||[]).push([[35,335],{"+IV6":function(t,e){function s(e){return t.exports=s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(e)}t.exports=s},"3PFr":function(t,e,s){"use strict";s.r(e);var n=s("SDJZ"),i=s.n(n),o=s("NToG"),c=s.n(o),r=s("K4DB"),a=s.n(r),l=s("+IV6"),u=s.n(l),f=s("eef+"),b=s.n(f),p=function(t){function e(){return i()(this,e),a()(this,u()(e).apply(this,arguments))}return b()(e,t),c()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible attachments","+ %s object":"+ %s attachment","+ %s objects":"+ %s attachments","Table limit of %s objects reached (%s remaining).":"Table limit of %s attachments reached (%s remaining).","%s object":"%s attachment","%s objects":"%s attachments","(%s object)":"(%s attachment)","(%s objects)":"(%s attachments)","%s object selected":"%s attachment selected","%s objects selected":"%s attachments selected","Export %s Object":"Export %s Attachment","Export %s Objects":"Export %s Attachments"}}},{key:"getString",value:function(t){var e=this.strings();return e[t]?e[t]:t}}]),e}(s("FgkW").default);e.default=new p},Aubc:function(t,e,s){},CqAs:function(t,e,s){"use strict";s("Z8gF"),s("GkPX"),s("J8hF");var n=s("R8iU"),i=s.n(n),o=s("IrnS"),c=function(t){return function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return e.forEach(function(e){if(RegExp(/\.js$/).test(e.name)||e.items)if(e.items)c=t(e.items,n,"".concat(o).concat(e.name,"/"),c);else{var r=i.a.basename(e.name,".js");if("index"===r&&(r=i.a.basename(o.replace(/\/index\.js$/,"")),o=o.substr(0,o.length-r.length-1)),n&&!new RegExp("^".concat(n)).test(o))return;c[r]=s("Y2DI")("./".concat(o).concat(r)).default}}),c}(o,"")[t]};e.a={data:function(){return{businessObjectTypeTextsName:"businessObjectType"}},methods:{getBusinessObjectText:function(t){if(this.unitTestMode)return t;if(!this[this.businessObjectTypeTextsName])return this.$log.error("Error: missing '".concat(this.businessObjectTypeTextsName,"' property!")),t;var e=c(this[this.businessObjectTypeTextsName]);return e?e.getString(t):(this.$log.error("Error: missing locale text object for '".concat(this[this.businessObjectTypeTextsName],"'!")),t)}}}},FgkW:function(t,e,s){"use strict";s.r(e);var n=s("SDJZ"),i=s.n(n),o=s("NToG"),c=s.n(o),r=function(){function t(){i()(this,t)}return c()(t,[{key:"baseStrings",value:function(){return["Select all visible objects","+ %s object","+ %s objects","Table limit of %s objects reached (%s remaining).","%s object","%s objects","(%s object)","(%s objects)","%s object selected","%s objects selected","Export %s Object","Export %s Objects"]}},{key:"getString",value:function(t){var e=this.strings();return e[t]?e[t]:t}}]),t}();e.default=r},Hqm2:function(t,e,s){"use strict";s.r(e);s("e2Kn");var n=s("rpZP"),i={name:"BusinessObjectWidgetLayout",mixins:[s("CqAs").a,n.a],props:{title:{type:String},customTitle:{type:String},totalItemCount:{type:Number},collapsed:{type:Boolean,default:!1},isCollapsable:{type:Boolean,default:!0},isConfigurable:{type:Boolean,default:!0},widgetId:{type:String,required:!0},clipContent:{type:Boolean,default:!1},scrollContent:{type:Boolean,default:!0},businessObjectType:{type:String}},data:function(){return{configOpened:!1}},computed:{collapseId:function(){return"widget-".concat(this.uuid)},tooltipWidgetConfiguration:function(){return this.configOpened?this.$locale.translate("Close widget configuration"):this.$locale.translate("Open widget configuration")},expandCollapseTitle:function(){return this.collapsed?this.$locale.translate("Expand widget"):this.$locale.translate("Collapse widget")},totalItemsText:function(){return this.totalItemCount>1?"(%s objects)":"(%s object)"}},methods:{switchCollapse:function(){this.collapsed?this.$emit("expand"):this.$emit("collapse")},toggleWidgetConfiguration:function(){this.configOpened=!this.configOpened,this.$emit("toggle-configuration")}}},o=(s("iUTv"),s("psIG")),c=Object(o.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"border mt-3 pt-2 Background--LightGray Widget",class:{"Widget--Expanded":!t.collapsed},attrs:{"data-widget-id":t.widgetId}},[s("div",{staticClass:"Widget__Header",class:{"border-bottom":!t.collapsed}},[s("b-row",{staticClass:"px-2 pb-2",attrs:{"no-gutters":"","align-v":"center"}},[s("b-col",[t.isCollapsable?s("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mr-2",attrs:{title:t.expandCollapseTitle},on:{click:function(e){return t.switchCollapse()}}},[s("CommonIcon",{staticClass:"Widget__Icon",attrs:{weight:"regular",icon:t.collapsed?"arrow-right-1":"arrow-down-1"}})],1):t._e(),t._v(" "),t._t("title",[s("h2",{staticClass:"Widget__Header__Title"},[t.customTitle?s("span",{staticClass:"Widget__Header__Title--Custom"},[t._v("\n                            "+t._s(t.customTitle)+" -\n                        ")]):t._e(),t._v("\n                        "+t._s(t._f("translate")(t.title))+"\n                        "),t.totalItemCount?[t._v("\n                            "+t._s(t._f("translate")(t.getBusinessObjectText(t.totalItemsText),t.totalItemCount))+"\n                        ")]:t._e()],2)])],2),t._v(" "),t.isConfigurable?s("b-col",{staticClass:"text-right"},[t.$slots.configuration?[t._t("configuration")]:[t._t("additional-configuration"),t._v(" "),s("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:t.tooltipWidgetConfiguration},on:{click:function(e){return t.toggleWidgetConfiguration()}}},[s("CommonIcon",{staticClass:"Widget__Icon Widget__Action",attrs:{icon:"cog"}})],1)]],2):t._e()],1)],1),t._v(" "),s("b-collapse",{staticClass:"position-relative Widget__Content",class:{"overflow-auto":!t.clipContent&&t.scrollContent,"overflow-hidden":t.clipContent},attrs:{id:t.collapseId,visible:!t.collapsed}},[t._t("default")],2)],1)},[],!1,null,null,null);e.default=c.exports},IrnS:function(t){t.exports=JSON.parse('[{"name":"Base.js"},{"name":"KnowledgeBaseArticle.js"},{"name":"Ticket.js"},{"name":"TicketArticle.js"},{"name":"TicketAttachment.js"},{"name":"WebNotification.js"}]')},K4DB:function(t,e,s){var n=s("e+GP"),i=s("T1e2");t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?i(t):e}},"O+kl":function(t,e,s){"use strict";s.r(e);var n=s("SDJZ"),i=s.n(n),o=s("NToG"),c=s.n(o),r=s("K4DB"),a=s.n(r),l=s("+IV6"),u=s.n(l),f=s("eef+"),b=s.n(f),p=function(t){function e(){return i()(this,e),a()(this,u()(e).apply(this,arguments))}return b()(e,t),c()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible articles","+ %s object":"+ %s article","+ %s objects":"+ %s articles","Table limit of %s objects reached (%s remaining).":"Table limit of %s articles reached (%s remaining).","%s object":"%s article","%s objects":"%s articles","(%s object)":"(%s article)","(%s objects)":"(%s articles)","%s object selected":"%s article selected","%s objects selected":"%s articles selected","Export %s Object":"Export %s Article","Export %s Objects":"Export %s Articles"}}}]),e}(s("FgkW").default);e.default=new p},Qp1C:function(t,e,s){"use strict";s.r(e);var n=s("SDJZ"),i=s.n(n),o=s("NToG"),c=s.n(o),r=s("K4DB"),a=s.n(r),l=s("+IV6"),u=s.n(l),f=s("eef+"),b=s.n(f),p=function(t){function e(){return i()(this,e),a()(this,u()(e).apply(this,arguments))}return b()(e,t),c()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible articles","+ %s object":"+ %s article","+ %s objects":"+ %s articles","Table limit of %s objects reached (%s remaining).":"Table limit of %s articles reached (%s remaining).","%s object":"%s article","%s objects":"%s articles","(%s object)":"(%s article)","(%s objects)":"(%s articles)","%s object selected":"%s article selected","%s objects selected":"%s articles selected","Export %s Object":"Export %s Article","Export %s Objects":"Export %s Articles"}}}]),e}(s("FgkW").default);e.default=new p},T1e2:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},T81T:function(t,e,s){"use strict";s.r(e);var n=s("SDJZ"),i=s.n(n),o=s("NToG"),c=s.n(o),r=s("K4DB"),a=s.n(r),l=s("+IV6"),u=s.n(l),f=s("eef+"),b=s.n(f),p=function(t){function e(){return i()(this,e),a()(this,u()(e).apply(this,arguments))}return b()(e,t),c()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible notifications","+ %s object":"+ %s notification","+ %s objects":"+ %s notifications","Table limit of %s objects reached (%s remaining).":"Table limit of %s notifications reached (%s remaining).","%s object":"%s notification","%s objects":"%s notifications","(%s object)":"(%s notification)","(%s objects)":"(%s notifications)","%s object selected":"%s notification selected","%s objects selected":"%s notifications selected","Export %s Object":"Export %s Notification","Export %s Objects":"Export %s Notifications"}}},{key:"getString",value:function(t){var e=this.strings();return e[t]?e[t]:t}}]),e}(s("FgkW").default);e.default=new p},WI9V:function(t,e){function s(e,n){return t.exports=s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(e,n)}t.exports=s},Y2DI:function(t,e,s){var n={"./Base":"FgkW","./Base.js":"FgkW","./KnowledgeBaseArticle":"Qp1C","./KnowledgeBaseArticle.js":"Qp1C","./Ticket":"hkXo","./Ticket.js":"hkXo","./TicketArticle":"O+kl","./TicketArticle.js":"O+kl","./TicketAttachment":"3PFr","./TicketAttachment.js":"3PFr","./WebNotification":"T81T","./WebNotification.js":"T81T","./directory-index":"IrnS","./directory-index.json":"IrnS"};function i(t){var e=o(t);return s(e)}function o(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=o,t.exports=i,i.id="Y2DI"},"e+GP":function(t,e){function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(e){return"function"==typeof Symbol&&"symbol"===s(Symbol.iterator)?t.exports=n=function(t){return s(t)}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":s(t)},n(e)}t.exports=n},"eef+":function(t,e,s){var n=s("WI9V");t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},hkXo:function(t,e,s){"use strict";s.r(e);var n=s("SDJZ"),i=s.n(n),o=s("NToG"),c=s.n(o),r=s("K4DB"),a=s.n(r),l=s("+IV6"),u=s.n(l),f=s("eef+"),b=s.n(f),p=function(t){function e(){return i()(this,e),a()(this,u()(e).apply(this,arguments))}return b()(e,t),c()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible tickets","+ %s object":"+ %s ticket","+ %s objects":"+ %s tickets","Table limit of %s objects reached (%s remaining).":"Table limit of %s tickets reached (%s remaining).","%s object":"%s ticket","%s objects":"%s tickets","(%s object)":"(%s ticket)","(%s objects)":"(%s tickets)","%s object selected":"%s ticket selected","%s objects selected":"%s tickets selected","Export %s Object":"Export %s Ticket","Export %s Objects":"Export %s Tickets"}}}]),e}(s("FgkW").default);e.default=new p},iUTv:function(t,e,s){"use strict";var n=s("Aubc");s.n(n).a}}]);