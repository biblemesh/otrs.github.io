(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3PFr":function(t,e,s){"use strict";s.r(e);var n=s("SDJZ"),i=s.n(n),o=s("NToG"),a=s.n(o),l=s("K4DB"),r=s.n(l),c=s("+IV6"),u=s.n(c),m=s("eef+"),d=s.n(m),h=function(t){function e(){return i()(this,e),r()(this,u()(e).apply(this,arguments))}return d()(e,t),a()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible attachments","+ %s object":"+ %s attachment","+ %s objects":"+ %s attachments","Table limit of %s objects reached (%s remaining).":"Table limit of %s attachments reached (%s remaining).","%s object":"%s attachment","%s objects":"%s attachments","(%s object)":"(%s attachment)","(%s objects)":"(%s attachments)","%s object selected":"%s attachment selected","%s objects selected":"%s attachments selected","Export %s Object":"Export %s Attachment","Export %s Objects":"Export %s Attachments"}}},{key:"getString",value:function(t){var e=this.strings();return e[t]?e[t]:t}}]),e}(s("FgkW").default);e.default=new h},C0sb:function(t,e,s){},CqAs:function(t,e,s){"use strict";s("Z8gF"),s("GkPX"),s("J8hF");var n=s("R8iU"),i=s.n(n),o=s("IrnS"),a=function(t){return function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return e.forEach(function(e){if(RegExp(/\.js$/).test(e.name)||e.items)if(e.items)a=t(e.items,n,"".concat(o).concat(e.name,"/"),a);else{var l=i.a.basename(e.name,".js");if("index"===l&&(l=i.a.basename(o.replace(/\/index\.js$/,"")),o=o.substr(0,o.length-l.length-1)),n&&!new RegExp("^".concat(n)).test(o))return;a[l]=s("Y2DI")("./".concat(o).concat(l)).default}}),a}(o,"")[t]};e.a={data:function(){return{businessObjectTypeTextsName:"businessObjectType"}},methods:{getBusinessObjectText:function(t){if(this.unitTestMode)return t;if(!this[this.businessObjectTypeTextsName])return this.$log.error("Error: missing '".concat(this.businessObjectTypeTextsName,"' property!")),t;var e=a(this[this.businessObjectTypeTextsName]);return e?e.getString(t):(this.$log.error("Error: missing locale text object for '".concat(this[this.businessObjectTypeTextsName],"'!")),t)}}}},FgkW:function(t,e,s){"use strict";s.r(e);var n=s("SDJZ"),i=s.n(n),o=s("NToG"),a=s.n(o),l=function(){function t(){i()(this,t)}return a()(t,[{key:"baseStrings",value:function(){return["Select all visible objects","+ %s object","+ %s objects","Table limit of %s objects reached (%s remaining).","%s object","%s objects","(%s object)","(%s objects)","%s object selected","%s objects selected","Export %s Object","Export %s Objects"]}},{key:"getString",value:function(t){var e=this.strings();return e[t]?e[t]:t}}]),t}();e.default=l},IrnS:function(t){t.exports=JSON.parse('[{"name":"Base.js"},{"name":"KnowledgeBaseArticle.js"},{"name":"Ticket.js"},{"name":"TicketArticle.js"},{"name":"TicketAttachment.js"},{"name":"WebNotification.js"}]')},"O+kl":function(t,e,s){"use strict";s.r(e);var n=s("SDJZ"),i=s.n(n),o=s("NToG"),a=s.n(o),l=s("K4DB"),r=s.n(l),c=s("+IV6"),u=s.n(c),m=s("eef+"),d=s.n(m),h=function(t){function e(){return i()(this,e),r()(this,u()(e).apply(this,arguments))}return d()(e,t),a()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible articles","+ %s object":"+ %s article","+ %s objects":"+ %s articles","Table limit of %s objects reached (%s remaining).":"Table limit of %s articles reached (%s remaining).","%s object":"%s article","%s objects":"%s articles","(%s object)":"(%s article)","(%s objects)":"(%s articles)","%s object selected":"%s article selected","%s objects selected":"%s articles selected","Export %s Object":"Export %s Article","Export %s Objects":"Export %s Articles"}}}]),e}(s("FgkW").default);e.default=new h},QbXJ:function(t,e,s){"use strict";var n=s("C0sb");s.n(n).a},Qp1C:function(t,e,s){"use strict";s.r(e);var n=s("SDJZ"),i=s.n(n),o=s("NToG"),a=s.n(o),l=s("K4DB"),r=s.n(l),c=s("+IV6"),u=s.n(c),m=s("eef+"),d=s.n(m),h=function(t){function e(){return i()(this,e),r()(this,u()(e).apply(this,arguments))}return d()(e,t),a()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible articles","+ %s object":"+ %s article","+ %s objects":"+ %s articles","Table limit of %s objects reached (%s remaining).":"Table limit of %s articles reached (%s remaining).","%s object":"%s article","%s objects":"%s articles","(%s object)":"(%s article)","(%s objects)":"(%s articles)","%s object selected":"%s article selected","%s objects selected":"%s articles selected","Export %s Object":"Export %s Article","Export %s Objects":"Export %s Articles"}}}]),e}(s("FgkW").default);e.default=new h},T81T:function(t,e,s){"use strict";s.r(e);var n=s("SDJZ"),i=s.n(n),o=s("NToG"),a=s.n(o),l=s("K4DB"),r=s.n(l),c=s("+IV6"),u=s.n(c),m=s("eef+"),d=s.n(m),h=function(t){function e(){return i()(this,e),r()(this,u()(e).apply(this,arguments))}return d()(e,t),a()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible notifications","+ %s object":"+ %s notification","+ %s objects":"+ %s notifications","Table limit of %s objects reached (%s remaining).":"Table limit of %s notifications reached (%s remaining).","%s object":"%s notification","%s objects":"%s notifications","(%s object)":"(%s notification)","(%s objects)":"(%s notifications)","%s object selected":"%s notification selected","%s objects selected":"%s notifications selected","Export %s Object":"Export %s Notification","Export %s Objects":"Export %s Notifications"}}},{key:"getString",value:function(t){var e=this.strings();return e[t]?e[t]:t}}]),e}(s("FgkW").default);e.default=new h},Y2DI:function(t,e,s){var n={"./Base":"FgkW","./Base.js":"FgkW","./KnowledgeBaseArticle":"Qp1C","./KnowledgeBaseArticle.js":"Qp1C","./Ticket":"hkXo","./Ticket.js":"hkXo","./TicketArticle":"O+kl","./TicketArticle.js":"O+kl","./TicketAttachment":"3PFr","./TicketAttachment.js":"3PFr","./WebNotification":"T81T","./WebNotification.js":"T81T","./directory-index":"IrnS","./directory-index.json":"IrnS"};function i(t){var e=o(t);return s(e)}function o(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=o,t.exports=i,i.id="Y2DI"},hkXo:function(t,e,s){"use strict";s.r(e);var n=s("SDJZ"),i=s.n(n),o=s("NToG"),a=s.n(o),l=s("K4DB"),r=s.n(l),c=s("+IV6"),u=s.n(c),m=s("eef+"),d=s.n(m),h=function(t){function e(){return i()(this,e),r()(this,u()(e).apply(this,arguments))}return d()(e,t),a()(e,[{key:"strings",value:function(){return{"Select all visible objects":"Select all visible tickets","+ %s object":"+ %s ticket","+ %s objects":"+ %s tickets","Table limit of %s objects reached (%s remaining).":"Table limit of %s tickets reached (%s remaining).","%s object":"%s ticket","%s objects":"%s tickets","(%s object)":"(%s ticket)","(%s objects)":"(%s tickets)","%s object selected":"%s ticket selected","%s objects selected":"%s tickets selected","Export %s Object":"Export %s Ticket","Export %s Objects":"Export %s Tickets"}}}]),e}(s("FgkW").default);e.default=new h},srL7:function(t,e,s){"use strict";s.r(e);s("2Tod"),s("ABKx"),s("DbwS");var n=s("NthX"),i=s.n(n),o=(s("wcNg"),s("fFdx")),a=s.n(o),l=(s("4aJ6"),s("9ovy"),s("oMRA"),s("6d4m"),s("U8p0"),s("3DBk"),s("5hJT"),s("5WRv")),r=s.n(l),c=(s("asZ9"),s("nxTg")),u=s.n(c),m=(s("W1QL"),s("K/PF"),s("t91x"),s("75LO"),s("it7j"),s("e2Kn"),s("OvAC")),d=s.n(m),h=s("pE35"),f=s.n(h),b=s("yBo+"),g=s("CqAs");function p(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,n)}return s}function v(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?p(s,!0).forEach(function(e){d()(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):p(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var I={name:"BusinessObjectListTable",components:v({InfiniteLoading:f.a,FormCheckbox:function(){return s.e(26).then(s.bind(null,"Hzqv"))},FormButton:function(){return Promise.all([s.e(1),s.e(274)]).then(s.bind(null,"dphA"))}},Object(b.a)("Components/DynamicField/Driver")),mixins:[g.a],props:{testMode:{type:Boolean,default:!1},unitTestMode:{type:Boolean},businessObjectType:{type:String},value:{type:Array,default:function(){return[]}},columns:{type:Object,required:!0},dynamicFieldsConfig:{type:Array,default:null},items:{type:Array,default:null},footerItem:{type:Object},maxItems:{type:Number,default:1e3},totalItemCount:{type:Number,default:0},emptyText:{type:String,default:"There are no records."},emptyIconWeight:{type:String,default:"bold",validator:function(t){return-1!==["regular","bold"].indexOf(t)}},emptyIcon:{type:String,default:"check"},bulkActionMode:{type:Boolean,default:!1},disabledBulkActionItemIds:{type:Array,default:function(){return[]}},itemLoadingMode:{type:String,validator:function(t){return-1!==["button","infinite",void 0].indexOf(t)}},disableItemLoading:{type:Boolean,default:!1},forceUseInfiniteWrapper:{type:String},loadingState:{type:Boolean,default:!1}},data:function(){return{itemLoadingButtonState:!1,infiniteLoadingIdentifier:+new Date,refreshLastPage:!1,testColumns:this.columns,testItems:[],testPriorities:["very high","high","normal","low","very low"],testStates:["open","new","closed successfully","pending reminder","pending auto close"],testTitles:["Playing For Keeps","All Greek To Me","Fool's Gold","Hit Below The Belt","Elephant in the Room","Know the Ropes","Eat My Hat","What Am I, Chopped Liver?","Down And Out","Dropping Like Flies","Back to Square One","Ugly Duckling","Break The Ice","Needle In a Haystack","Mouth-watering","Drive Me Nuts","Man of Few Words","You Can't Judge a Book By Its Cover","Right Out of the Gate","Par For the Course"],testOwners:["Jann Smoot","Erlinda Wessner","Sadie Crudup","Donte Ligon","Juliane Montz","Marion Rock","Shiloh Heady","Gladis Zanders","Manda Ruano","Eliza Norman","Pearly Ladner","Waltraud Holdeman","Sang Reighard","Ardell Helle","Jeanne Barra","Maxie Rumley","Nedra Montanye","Ron Ange","Wm Ingwersen","Emelina Durante"]}},computed:{localValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},bulkActionSelectedAll:function(){if(this.bulkActionMode&&this.localValue&&this.localAvailableBulkItems&&this.localAvailableBulkItems.length>0){var t=this.localValue.length===this.localAvailableBulkItems.length;return this.$emit("bulk-all-selected",t),t}return!1},containerClass:function(){return{"BusinessObjectListTable--Empty":!this.localItems||0===this.localItems.length}},rowKeyColumn:function(){var t=this,e=Object.keys(this.columns).find(function(e){return t.columns[e].isRowKey});if(void 0===e){var s=Object.keys(this.columns);e=u()(s,1)[0]}return e},localColumns:function(){var t=this.columns;this.testMode&&(t=this.testColumns);var e={};return Object.keys(t).forEach(function(s){t[s].isHidden||(e[s]=t[s])}),e},visibleColumnCount:function(){var t=this.bulkActionMode?1:0;return Object.keys(this.localColumns).length+t},localItems:function(){return this.testMode?this.testItems?this.testItems.slice(0,this.maxItems):[]:this.items?this.items.slice(0,this.maxItems):null},localAvailableBulkItems:function(){var t=this;return this.localItems.filter(function(e){return!t.getBulkActionRowDisabled(t.getItemRowId(e))})},localRemainingItemCount:function(){return this.totalItemCount&&this.maxItems&&(this.localItems||this.testMode)?(this.totalItemCount>this.maxItems?this.maxItems:this.totalItemCount)-this.localItems.length:0},remainingItemCount:function(){return this.totalItemCount&&this.localItems?this.totalItemCount-this.localItems.length:0},remainingItemsText:function(){return this.localRemainingItemCount>1?"+ %s objects":"+ %s object"},headerColumnClasses:function(){var t=this;return v({},Object.keys(this.localColumns).map(function(e){var s=t.localColumns[e].headerClasses;return s?(("string"==typeof s||s instanceof String)&&(s=s.split(" ")),Array.isArray(s)?Object.assign.apply(Object,[{}].concat(r()(s.map(function(t){return d()({},t,!0)})))):s):{}}))},dynamicFieldsConfigLookup:function(){var t={};return this.dynamicFieldsConfig&&Object.values(this.dynamicFieldsConfig).forEach(function(e){t["DynamicField_".concat(e.Name)]=e}),t}},methods:{columnTitle:function(t){return this.columns[t]&&void 0!==this.columns[t].text?this.columns[t].text:t},sort:function(t,e){var s=this;if(this.localItems&&this.localItems.length&&this.localColumns[e].isSortable){var n=!0;this.localColumns[e].isSorted&&this.localColumns[e].isAscending&&(n=!1),this.testMode&&(Object.keys(this.localColumns).forEach(function(t){t!==e&&s.localColumns[t].isSorted&&(s.testColumns[t].isSorted=!1,s.testColumns[t].isAscending=!1)}),this.localColumns[e].isSorted?this.testColumns[e].isAscending=n:(this.testColumns[e].isSorted=!0,this.testColumns[e].isAscending=!0),this.testItems.sort(function(t,s){return n?t[e].localeCompare(s[e]):s[e].localeCompare(t[e])})),this.$emit("sort",e,n)}},click:function(t,e){var s=this.getItemRowId(e);this.$emit("select",s,e)},bulkActionSelectAll:function(t){var e=this,s=[];t&&Object.values(this.localItems).forEach(function(t){var n=e.getItemRowId(t);e.getBulkActionRowDisabled(n)||s.push(n)}),this.localValue=s},getItemRowId:function(t){return t[this.rowKeyColumn]},getBulkActionRowDisabled:function(t){return void 0===t||this.disabledBulkActionItemIds.includes(parseInt(t,10))},isDateTimeValue:function(t){return!!t.toString().match(/^\d{4}-\d{1,2}-\d{1,2}[ ]\d{1,2}:\d{1,2}:\d{1,2}$/i)},infiniteHandler:function(){var t=a()(i.a.mark(function t(e){var s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.testMode){t.next=9;break}if(!(this.testItems.length>=this.totalItemCount||this.testItems.length>=this.maxItems)){t.next=5;break}e.complete(),t.next=9;break;case 5:return t.next=7,this.sleep(1e3);case 7:(s=this.testItems).push.apply(s,r()(this.loadTestItems(20,this.testItems.length))),e.loaded();case 9:this.$emit("infinite",e,this.refreshLastPage),this.refreshLastPage=!1;case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),resetInfiniteLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$refs.infiniteLoading&&(this.infiniteLoadingIdentifier=+new Date,this.refreshLastPage=t)},loadTestItems:function(t,e){for(var s=this,n=[],i=function(t){var i={};Object.keys(s.columns).forEach(function(n){s.columns[n].isRowKey?i[n]=e+t:/title/.test(n)?i[n]=s.testTitles[Math.floor(Math.random()*s.testTitles.length)]:/priority/.test(n)?i[n]=s.testPriorities[Math.floor(Math.random()*s.testPriorities.length)]:/state/.test(n)?i[n]=s.testStates[Math.floor(Math.random()*s.testStates.length)]:/owner/.test(n)?i[n]=s.testOwners[Math.floor(Math.random()*s.testOwners.length)]:i[n]=s.generateRandomString()}),n.push(i)},o=0;o<t;o++)i(o);return n},sleep:function(t){return new Promise(function(e){return setTimeout(e,t)})},loadNextItems:function(){var t=a()(i.a.mark(function t(){var e,s=this;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.itemLoadingButtonState=!0,!this.testMode){t.next=10;break}if(!(this.testItems.length>=this.totalItemCount||this.testItems.length>=this.maxItems)){t.next=6;break}this.itemLoadingButtonState=!1,t.next=10;break;case 6:return t.next=8,this.sleep(1e3);case 8:(e=this.testItems).push.apply(e,r()(this.loadTestItems(20,this.testItems.length))),this.itemLoadingButtonState=!1;case 10:this.$emit("load-next-items",{loaded:function(){s.itemLoadingButtonState=!1},complete:function(){s.itemLoadingButtonState=!1}},this.refreshLastPage),this.refreshLastPage=!1;case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),footerItemValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=this.localColumns[t],n=this.footerItem[t];return"title"!==e||s.isTextTruncated?(s.isTranslatable&&(n=this.$locale.translate(n)),s.isTextTruncated&&(n=this.$options.filters.truncate(n,50)),n):""}}},j=(s("QbXJ"),s("psIG")),y=Object(j.a)(I,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{attrs:{fluid:""}},[s("b-row",{staticClass:"BusinessObjectListTable__Row"},[s("b-col",{staticClass:"table-responsive BusinessObjectListTable",class:t.containerClass},[t.localColumns&&Object.keys(t.localColumns).length?s("table",{staticClass:"table",class:{"table-hover":t.localItems&&t.localItems.length}},[t.localItems&&0===t.localItems.length?s("caption",{staticClass:"sr-only"},[s("div",[t._v(t._s(t._f("translate")(t.emptyText)))])]):t._e(),t._v(" "),s("thead",[s("tr",[t.bulkActionMode?s("th",{staticClass:"border-bottom text-center BusinessObjectListTable__BulkActionCheckbox"},[t.localItems&&t.localItems.length?s("b-form-checkbox",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{checked:t.bulkActionSelectedAll,disabled:0===t.localAvailableBulkItems.length,title:t._f("translate")(t.getBusinessObjectText("Select all visible objects")),"aria-label":t._f("translate")(t.getBusinessObjectText("Select all visible objects"))},on:{change:t.bulkActionSelectAll}},[s("span",{staticClass:"sr-only"},[t._v("\n                                    "+t._s(t._f("translate")(t.getBusinessObjectText("Select all visible objects")))+"\n                                ")])]):t._e()],1):t._e(),t._v(" "),t._l(t.localColumns,function(e,n,i){return s("th",{key:n,staticClass:"border-bottom",class:Object.assign({},{BusinessObjectListTable__SortingColumn:t.localItems&&t.localItems.length&&e.isSortable,"BusinessObjectListTable__SortingColumn--Sorted":t.localItems&&t.localItems.length&&e.isSortable&&e.isSorted},t.headerColumnClasses[i]),style:e.headerStyles,on:{click:function(e){return t.sort(e,n)}}},[t._t("header-"+n,[t._v("\n                                "+t._s(t._f("translate")(t.columnTitle(n)))+"\n                            ")],{columnKey:n,columnTitle:t.columnTitle(n)}),t._v(" "),e.isSortable&&e.isSorted?s("CommonIcon",{staticClass:"ml-1",attrs:{icon:e.isAscending?"arrow-up-1":"arrow-down-1",decorative:""}}):t._e()],2)})],2)]),t._v(" "),s("tbody",[!t.loadingState||t.localItems&&t.localItems.length?t.localItems&&0===t.localItems.length?s("tr",{staticClass:"BusinessObjectListTable__EmptyText"},[s("td",{attrs:{colspan:t.visibleColumnCount}},[s("CommonIcon",{staticClass:"BusinessObjectListTable__EmptyIcon",attrs:{weight:t.emptyIconWeight,icon:t.emptyIcon,decorative:""}}),t._v(" "),s("div",[t._v(t._s(t._f("translate")(t.emptyText)))])],1)]):t._e():s("tr",[s("td",{staticClass:"BusinessObjectListTable__LoadingState",attrs:{colspan:t.visibleColumnCount}},[s("CommonIcon",{attrs:{icon:"loading",spin:"",decorative:""}})],1)]),t._v(" "),t._l(t.localItems,function(e,n){return s("tr",{key:e[t.getItemRowId(e)],staticClass:"BusinessObjectListTable__Row",class:e.rowClass,on:{click:function(s){return t.click(s,e)}}},[t.bulkActionMode?s("td",{staticClass:"text-center BusinessObjectListTable__BulkActionCheckbox"},[s("b-form-checkbox",{attrs:{"aria-label":t._f("translate")("Select row %s",n+1),value:t.getItemRowId(e),disabled:t.getBulkActionRowDisabled(t.getItemRowId(e))},nativeOn:{click:function(t){t.stopPropagation()}},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}},[s("span",{staticClass:"sr-only"},[t._v("\n                                    "+t._s(t._f("translate")(t.getBusinessObjectText("Select row %s"),n+1))+"\n                                ")])])],1):t._e(),t._v(" "),t._l(t.localColumns,function(n,i){return[e[i]&&"object"==typeof e[i]&&t.dynamicFieldsConfigLookup[i]?[s("td",{key:i},[s("DynamicField"+t.dynamicFieldsConfigLookup[i].FieldType,{tag:"component",attrs:{"dynamic-field-config":t.dynamicFieldsConfigLookup[i],"dynamic-field":e[i],type:"list"}})],1)]:e[i]&&"object"==typeof e[i]?[s("td",{key:i},[t._t(i,null,{value:e[i],itemData:e,itemId:t.getItemRowId(e)})],2)]:e[i]&&t.isDateTimeValue(e[i])?[s("td",{key:i,class:n.class,style:n.style},[t._t(i,[s("CommonDateTime",{attrs:{"date-time":e[i],"tooltip-placement":"right"}})],{value:e[i],itemData:e,itemId:t.getItemRowId(e)})],2)]:[n.isClickable?s("td",{key:i,class:n.class,style:n.style,on:{click:function(t){t.stopPropagation()}}},[t._t(i,[n.isTranslatable?s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{title:n.isTextTruncated?t.$locale.translate(e[i]):""}},[n.isTextTruncated?[t._v("\n                                                "+t._s(t._f("truncate")(t._f("translate")(e[i]),50))+"\n                                            ")]:[t._v("\n                                                "+t._s(t._f("translate")(e[i]))+"\n                                            ")]],2):s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{title:n.isTextTruncated?e[i]:""}},[n.isTextTruncated?[t._v("\n                                                "+t._s(t._f("truncate")(e[i],50))+"\n                                            ")]:[t._v("\n                                                "+t._s(e[i])+"\n                                            ")]],2)],{value:e[i],itemData:e,itemId:t.getItemRowId(e)})],2):s("td",{key:i,class:n.class,style:n.style},[t._t(i,[n.isTranslatable?s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{title:n.isTextTruncated?t.$locale.translate(e[i]):""}},[n.isTextTruncated?[t._v("\n                                                "+t._s(t._f("truncate")(t._f("translate")(e[i]),50))+"\n                                            ")]:[t._v("\n                                                "+t._s(t._f("translate")(e[i]))+"\n                                            ")]],2):s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{title:n.isTextTruncated?e[i]:""}},[n.isTextTruncated?[t._v("\n                                                "+t._s(t._f("truncate")(e[i],50))+"\n                                            ")]:[t._v("\n                                                "+t._s(e[i])+"\n                                            ")]],2)],{value:e[i],itemData:e,itemId:t.getItemRowId(e)})],2)]]})],2)}),t._v(" "),t.loadingState?t._e():s("tr",{directives:[{name:"show",rawName:"v-show",value:null!==t.itemLoadingMode&&t.localRemainingItemCount>0&&!t.disableItemLoading,expression:"itemLoadingMode !== null && localRemainingItemCount > 0 && !disableItemLoading"}],staticClass:"BusinessObjectListTable__Loading"},[s("td",{attrs:{colspan:t.visibleColumnCount}},["infinite"===t.itemLoadingMode?s("infinite-loading",{ref:"infiniteLoading",attrs:{identifier:t.infiniteLoadingIdentifier,"force-use-infinite-wrapper":!t.forceUseInfiniteWrapper||t.forceUseInfiniteWrapper},on:{infinite:t.infiniteHandler},scopedSlots:t._u([{key:"spinner",fn:function(){return[t._t("loading-info",[s("CommonIcon",{attrs:{icon:"loading",spin:"",decorative:""}}),t._v(" "),t.localRemainingItemCount?s("p",[t._v("\n                                            "+t._s(t._f("translate")(t.getBusinessObjectText(t.remainingItemsText),t.localRemainingItemCount))+"\n                                        ")]):t._e()],{value:t.localRemainingItemCount})]},proxy:!0},{key:"no-more",fn:function(){},proxy:!0},{key:"no-results",fn:function(){},proxy:!0},{key:"error",fn:function(){},proxy:!0}],null,!0)}):t._t("loading-info",[t.localRemainingItemCount&&!t.itemLoadingButtonState?s("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],staticClass:"BusinessObjectListTable__LoadMoreButton",attrs:{title:t._f("translate")(t.getBusinessObjectText(t.remainingItemsText),t.localRemainingItemCount),"aria-label":t._f("translate")(t.getBusinessObjectText("+ %s Objects"),t.localRemainingItemCount)},on:{click:t.loadNextItems}},[s("CommonIcon",{attrs:{weight:"bold",icon:"navigation-menu-horizontal",decorative:""}})],1):t.localRemainingItemCount&&t.itemLoadingButtonState?s("CommonIcon",{attrs:{icon:"loading",spin:"",decorative:""}}):t._e()],{value:t.localRemainingItemCount})],2)]),t._v(" "),0==t.localRemainingItemCount&&t.remainingItemCount>t.localRemainingItemCount?s("tr",{staticClass:"BusinessObjectListTable__ItemLimitReached"},[s("td",{attrs:{colspan:t.visibleColumnCount}},[t._v("\n                            "+t._s(t._f("translate")(t.getBusinessObjectText("Table limit of %s objects reached (%s remaining)."),t.maxItems,t.remainingItemCount))+"\n                        ")])]):t._e()],2),t._v(" "),t.footerItem?s("tfoot",[s("tr",[t.bulkActionMode?s("th",{staticClass:"border-top text-center BusinessObjectListTable__BulkActionCheckbox"}):t._e(),t._v(" "),t._l(t.localColumns,function(e,n,i){return s("th",{key:n,staticClass:"border-top",class:t.headerColumnClasses[i],style:e.headerStyles},[t._t("footer-"+n,[s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{title:t.footerItemValue(n,"title")}},[[t._v("\n                                        "+t._s(t.footerItemValue(n))+"\n                                    ")]],2)],{columnKey:n,value:t.footerItem[n],itemId:i})],2)})],2)]):t._e()]):t._e()])],1)],1)},[],!1,null,null,null);e.default=y.exports}}]);