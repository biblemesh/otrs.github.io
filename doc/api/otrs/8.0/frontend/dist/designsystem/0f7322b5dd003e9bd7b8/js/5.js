(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{C0sb:function(t,e,n){},QbXJ:function(t,e,n){"use strict";var i=n("C0sb");n.n(i).a},srL7:function(t,e,n){"use strict";n.r(e);n("2Tod"),n("ABKx"),n("DbwS");var i=n("NthX"),s=n.n(i),o=(n("wcNg"),n("fFdx")),a=n.n(o),l=(n("9ovy"),n("4aJ6"),n("oMRA"),n("6d4m"),n("U8p0"),n("3DBk"),n("5hJT"),n("5WRv")),r=n.n(l),c=(n("asZ9"),n("nxTg")),u=n.n(c),m=(n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("it7j"),n("e2Kn"),n("OvAC")),d=n.n(m),h=n("pE35"),f=n.n(h),g=n("yBo+"),b=n("CqAs"),p=n("rpZP");function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(n,!0).forEach(function(e){d()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var y={name:"BusinessObjectListTable",components:v({InfiniteLoading:f.a,FormCheckbox:function(){return n.e(6).then(n.bind(null,"Hzqv"))},FormButton:function(){return Promise.all([n.e(3),n.e(381)]).then(n.bind(null,"dphA"))}},Object(g.a)("Components/DynamicField/Driver")),mixins:[b.a,p.a],props:{testMode:{type:Boolean,default:!1},unitTestMode:{type:Boolean},businessObjectType:{type:String},value:{type:Array,default:function(){return[]}},columns:{type:Object,required:!0},dynamicFieldsConfig:{type:Array,default:null},items:{type:Array,default:null},footerItem:{type:Object},maxItems:{type:Number,default:1e3},totalItemCount:{type:Number,default:0},emptyText:{type:String,default:"Currently no data available."},bulkActionMode:{type:Boolean,default:!1},bulkSelectOnRowClick:{type:Boolean,default:!1},bulkActionSingleSelection:{type:Boolean,default:!1},disabledBulkActionItemIds:{type:Array,default:function(){return[]}},itemLoadingMode:{type:String,validator:function(t){return-1!==["button","infinite",void 0].indexOf(t)}},disableItemLoading:{type:Boolean,default:!1},forceUseInfiniteWrapper:{type:String},loadingState:{type:Boolean,default:!1}},data:function(){return{itemLoadingButtonState:!1,infiniteLoadingIdentifier:+new Date,refreshLastPage:!1,testColumns:this.columns,testItems:[],testPriorities:["very high","high","normal","low","very low"],testStates:["open","new","closed successfully","pending reminder","pending auto close"],testTitles:["Playing For Keeps","All Greek To Me","Fool's Gold","Hit Below The Belt","Elephant in the Room","Know the Ropes","Eat My Hat","What Am I, Chopped Liver?","Down And Out","Dropping Like Flies","Back to Square One","Ugly Duckling","Break The Ice","Needle In a Haystack","Mouth-watering","Drive Me Nuts","Man of Few Words","You Can't Judge a Book By Its Cover","Right Out of the Gate","Par For the Course"],testOwners:["Jann Smoot","Erlinda Wessner","Sadie Crudup","Donte Ligon","Juliane Montz","Marion Rock","Shiloh Heady","Gladis Zanders","Manda Ruano","Eliza Norman","Pearly Ladner","Waltraud Holdeman","Sang Reighard","Ardell Helle","Jeanne Barra","Maxie Rumley","Nedra Montanye","Ron Ange","Wm Ingwersen","Emelina Durante"]}},computed:{localValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},listId:function(){return"list-table-".concat(this.uuid)},bulkActionSelectedAll:function(){var t=this;if(this.bulkActionMode&&this.localValue&&this.localAvailableBulkItems&&this.localAvailableBulkItems.length>0){var e=(this.localValue||[]).filter(function(e){return!t.getBulkActionRowDisabled(e)}).length===this.localAvailableBulkItems.length;return this.$emit("bulk-all-selected",e),e}return!1},containerClass:function(){return{"BusinessObjectListTable--Empty":!this.localItems||0===this.localItems.length}},rowKeyColumn:function(){var t=this,e=Object.keys(this.columns).find(function(e){return t.columns[e].isRowKey});if(void 0===e){var n=Object.keys(this.columns);e=u()(n,1)[0]}return e},localColumns:function(){var t=this.columns;this.testMode&&(t=this.testColumns);var e={};return Object.keys(t).forEach(function(n){t[n].isHidden||(e[n]=t[n])}),e},visibleColumnCount:function(){var t=this.bulkActionMode?1:0;return Object.keys(this.localColumns).length+t},localItems:function(){return this.testMode?this.testItems?this.testItems.slice(0,this.maxItems):[]:this.items?this.items.slice(0,this.maxItems):null},localAvailableBulkItems:function(){var t=this;return this.localItems.filter(function(e){return!t.getBulkActionRowDisabled(t.getItemRowId(e))})},localRemainingItemCount:function(){return this.totalItemCount&&this.maxItems&&(this.localItems||this.testMode)?(this.totalItemCount>this.maxItems?this.maxItems:this.totalItemCount)-this.localItems.length:0},remainingItemCount:function(){return this.totalItemCount&&this.localItems?this.totalItemCount-this.localItems.length:0},remainingItemsText:function(){return this.localRemainingItemCount>1?"+ %s objects":"+ %s object"},headerColumnClasses:function(){var t=this;return v({},Object.keys(this.localColumns).map(function(e){var n=t.localColumns[e].headerClasses;return n?(("string"==typeof n||n instanceof String)&&(n=n.split(" ")),Array.isArray(n)?Object.assign.apply(Object,[{}].concat(r()(n.map(function(t){return d()({},t,!0)})))):n):{}}))},dynamicFieldsConfigLookup:function(){var t={};return this.dynamicFieldsConfig&&Object.values(this.dynamicFieldsConfig).forEach(function(e){t["DynamicField_".concat(e.Name)]=e}),t},translatedColumnTitles:function(){var t=this,e={};return Object.keys(this.columns).forEach(function(n){if(t.columns[n]&&void 0!==t.columns[n].text){var i,s=[];return(t.columns[n].textPlaceholders||[]).forEach(function(e){s.push(t.$locale.translate(e))}),void(e[n]=(i=t.$locale).translate.apply(i,[t.columns[n].text].concat(s)))}e[n]=t.$locale.translate(n)}),e}},methods:{sort:function(t,e){var n=this;if(this.localItems&&this.localItems.length&&this.localColumns[e].isSortable){var i=!0;this.localColumns[e].isSorted&&this.localColumns[e].isAscending&&(i=!1),this.testMode&&(Object.keys(this.localColumns).forEach(function(t){t!==e&&n.localColumns[t].isSorted&&(n.testColumns[t].isSorted=!1,n.testColumns[t].isAscending=!1)}),this.localColumns[e].isSorted?this.testColumns[e].isAscending=i:(this.testColumns[e].isSorted=!0,this.testColumns[e].isAscending=!0),this.testItems.sort(function(t,n){return i?t[e].localeCompare(n[e]):n[e].localeCompare(t[e])})),this.$emit("sort",e,i)}},click:function(t,e){var n=this.getItemRowId(e);if(this.bulkSelectOnRowClick){if(this.bulkActionSingleSelection)return void(this.localValue&&this.localValue[0]!==n&&(this.localValue=[n]));if(this.localValue.includes(n)){var i=this.localValue.indexOf(n);this.localValue.splice(i,1)}else this.localValue.push(n)}else this.$emit("select",n,e)},bulkActionSelectAll:function(t){var e=this,n=[];t?Object.values(this.localItems).forEach(function(t){var i=e.getItemRowId(t);e.getBulkActionRowDisabled(i)&&!e.localValue.includes(i)||n.push(i)}):Object.values(this.localItems).forEach(function(t){var i=e.getItemRowId(t);e.getBulkActionRowDisabled(i)&&e.localValue.includes(i)&&n.push(i)}),this.localValue=n},getItemRowId:function(t){return t[this.rowKeyColumn]},getBulkActionRowDisabled:function(t){return void 0===t||this.disabledBulkActionItemIds.includes(t.toString())},isDateTimeValue:function(t){return!!t.toString().match(/^\d{4}-\d{1,2}-\d{1,2}[ ]\d{1,2}:\d{1,2}:\d{1,2}$/i)},infiniteHandler:function(){var t=a()(s.a.mark(function t(e){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.testMode){t.next=9;break}if(!(this.testItems.length>=this.totalItemCount||this.testItems.length>=this.maxItems)){t.next=5;break}e.complete(),t.next=9;break;case 5:return t.next=7,this.sleep(1e3);case 7:(n=this.testItems).push.apply(n,r()(this.loadTestItems(20,this.testItems.length))),e.loaded();case 9:this.$emit("infinite",e,this.refreshLastPage),this.refreshLastPage=!1;case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),resetInfiniteLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.infiniteLoadingIdentifier=+new Date,this.refreshLastPage=t},loadTestItems:function(t,e){for(var n=this,i=[],s=function(t){var s={};Object.keys(n.columns).forEach(function(i){n.columns[i].isRowKey?s[i]=e+t:/title/.test(i)?s[i]=n.testTitles[Math.floor(Math.random()*n.testTitles.length)]:/priority/.test(i)?s[i]=n.testPriorities[Math.floor(Math.random()*n.testPriorities.length)]:/state/.test(i)?s[i]=n.testStates[Math.floor(Math.random()*n.testStates.length)]:/owner/.test(i)?s[i]=n.testOwners[Math.floor(Math.random()*n.testOwners.length)]:s[i]=n.generateRandomString()}),i.push(s)},o=0;o<t;o++)s(o);return i},sleep:function(t){return new Promise(function(e){return setTimeout(e,t)})},loadNextItems:function(){var t=a()(s.a.mark(function t(){var e,n=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.itemLoadingButtonState=!0,!this.testMode){t.next=10;break}if(!(this.testItems.length>=this.totalItemCount||this.testItems.length>=this.maxItems)){t.next=6;break}this.itemLoadingButtonState=!1,t.next=10;break;case 6:return t.next=8,this.sleep(1e3);case 8:(e=this.testItems).push.apply(e,r()(this.loadTestItems(20,this.testItems.length))),this.itemLoadingButtonState=!1;case 10:this.$emit("load-next-items",{loaded:function(){n.itemLoadingButtonState=!1},complete:function(){n.itemLoadingButtonState=!1}},this.refreshLastPage),this.refreshLastPage=!1;case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),footerItemValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this.localColumns[t],i=this.footerItem[t];return"title"!==e||n.isTextTruncated?(n.isTranslatable&&(i=this.$locale.translate(i)),n.isTextTruncated&&(i=this.$options.filters.truncate(i,50)),i):""},onBulkRadioCheck:function(t,e){t&&(this.localValue=[e])}}},C=(n("QbXJ"),n("psIG")),_=Object(C.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-row",{staticClass:"BusinessObjectListTable__Row"},[n("b-col",{staticClass:"px-0 table-responsive BusinessObjectListTable",class:t.containerClass},[t.localColumns&&Object.keys(t.localColumns).length?n("table",{staticClass:"table",class:{"table-hover":t.localItems&&t.localItems.length}},[t.localItems&&0===t.localItems.length?n("caption",{staticClass:"sr-only"},[n("div",[t._v(t._s(t._f("translate")(t.emptyText)))])]):t._e(),t._v(" "),n("thead",[n("tr",[t.bulkActionMode?n("th",{staticClass:"border-bottom BusinessObjectListTable__BulkActionCheckbox"},[t.localItems&&t.localItems.length&&!t.bulkActionSingleSelection?n("FormCheckbox",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{value:t.bulkActionSelectedAll,disabled:0===t.localAvailableBulkItems.length,title:t._f("translate")(t.getBusinessObjectText("Select all visible objects")),label:t._f("translate")(t.getBusinessObjectText("Select all visible objects")),"label-sr-only":""},on:{change:t.bulkActionSelectAll}}):t._e()],1):t._e(),t._v(" "),t._l(t.localColumns,function(e,i,s){return n("th",{key:i,staticClass:"border-bottom",class:Object.assign({},{BusinessObjectListTable__SortingColumn:t.localItems&&t.localItems.length&&e.isSortable,"BusinessObjectListTable__SortingColumn--Sorted":t.localItems&&t.localItems.length&&e.isSortable&&e.isSorted},t.headerColumnClasses[s]),style:e.headerStyles,on:{click:function(e){return t.sort(e,i)}}},[t._t("header-"+i,[t._v("\n                                "+t._s(t.translatedColumnTitles[i])+"\n                            ")],{columnKey:i,columnTitle:t.translatedColumnTitles[i]}),t._v(" "),t.localItems&&t.localItems.length&&e.isSortable&&e.isSorted?n("CommonIcon",{staticClass:"ml-1",attrs:{icon:e.isAscending?"arrow-up-1":"arrow-down-1",decorative:""}}):t._e()],2)})],2)]),t._v(" "),n("tbody",t._l(t.localItems,function(e,i){return n("tr",{key:e[t.getItemRowId(e)],staticClass:"BusinessObjectListTable__Row",class:e.rowClass,on:{click:function(n){return t.click(n,e)}}},[t.bulkActionMode?n("td",{staticClass:"BusinessObjectListTable__BulkActionCheckbox"},[t.bulkActionSingleSelection?n("b-form-radio",{attrs:{checked:t.getItemRowId(e)===t.localValue[0],value:!0,name:t.listId,disabled:t.getBulkActionRowDisabled(t.getItemRowId(e)),label:t._f("translate")(t.getBusinessObjectText("Select row %s"),i+1)},on:{input:function(n){t.onBulkRadioCheck(n,t.getItemRowId(e))}},nativeOn:{click:function(t){t.stopPropagation()}}}):n("FormCheckbox",{attrs:{"checked-value":t.getItemRowId(e),disabled:t.getBulkActionRowDisabled(t.getItemRowId(e)),label:t._f("translate")(t.getBusinessObjectText("Select row %s"),i+1),"label-sr-only":""},nativeOn:{click:function(t){t.stopPropagation()}},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}})],1):t._e(),t._v(" "),t._l(t.localColumns,function(i,s){return[e[s]&&"object"==typeof e[s]&&t.dynamicFieldsConfigLookup[s]?[n("td",{key:s},[n("DynamicField"+t.dynamicFieldsConfigLookup[s].FieldType,{tag:"component",attrs:{"dynamic-field-config":t.dynamicFieldsConfigLookup[s],"dynamic-field":e[s],type:"list"}})],1)]:e[s]&&"object"==typeof e[s]?[n("td",{key:s},[t._t(s,null,{value:e[s],itemData:e,itemId:t.getItemRowId(e)})],2)]:e[s]&&t.isDateTimeValue(e[s])?[n("td",{key:s,class:i.class,style:i.style},[t._t(s,[n("CommonDateTime",{attrs:{"date-time":e[s],"tooltip-placement":"right"}})],{value:e[s],itemData:e,itemId:t.getItemRowId(e)})],2)]:[i.isClickable?n("td",{key:s,class:i.class,style:i.style,on:{click:function(t){t.stopPropagation()}}},[t._t(s,[i.isTranslatable?n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{title:i.isTextTruncated?t.$locale.translate(e[s]):""}},[i.isTextTruncated?[t._v("\n                                                "+t._s(t._f("truncate")(t._f("translate")(e[s]),50))+"\n                                            ")]:[t._v("\n                                                "+t._s(t._f("translate")(e[s]))+"\n                                            ")]],2):n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{title:i.isTextTruncated?e[s]:""}},[i.isTextTruncated?[t._v("\n                                                "+t._s(t._f("truncate")(e[s],50))+"\n                                            ")]:[t._v("\n                                                "+t._s(e[s])+"\n                                            ")]],2)],{value:e[s],itemData:e,itemId:t.getItemRowId(e)})],2):n("td",{key:s,class:i.class,style:i.style},[t._t(s,[i.isTranslatable?n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{title:i.isTextTruncated?t.$locale.translate(e[s]):""}},[i.isTextTruncated?[t._v("\n                                                "+t._s(t._f("truncate")(t._f("translate")(e[s]),50))+"\n                                            ")]:[t._v("\n                                                "+t._s(t._f("translate")(e[s]))+"\n                                            ")]],2):n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{title:i.isTextTruncated?e[s]:""}},[i.isTextTruncated?[t._v("\n                                                "+t._s(t._f("truncate")(e[s],50))+"\n                                            ")]:[t._v("\n                                                "+t._s(e[s])+"\n                                            ")]],2)],{value:e[s],itemData:e,itemId:t.getItemRowId(e)})],2)]]})],2)}),0),t._v(" "),t.footerItem&&Object.keys(t.footerItem).length?n("tfoot",[n("tr",[t.bulkActionMode?n("th",{staticClass:"border-top BusinessObjectListTable__BulkActionCheckbox"}):t._e(),t._v(" "),t._l(t.localColumns,function(e,i,s){return n("th",{key:i,staticClass:"border-top",class:t.headerColumnClasses[s],style:e.headerStyles},[t._t("footer-"+i,[n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{title:t.footerItemValue(i,"title")}},[[t._v("\n                                        "+t._s(t.footerItemValue(i))+"\n                                    ")]],2)],{columnKey:i,value:t.footerItem[i],itemId:s})],2)})],2)]):t._e()]):t._e()])],1),t._v(" "),!t.loadingState||t.localItems&&t.localItems.length?t.localItems&&0===t.localItems.length?n("div",{staticClass:"py-3 text-center BusinessObjectListTable__EmptyText"},[n("span",[t._v("\n            "+t._s(t._f("translate")(t.emptyText))+"\n        ")])]):t._e():n("div",{staticClass:"my-2 text-center BusinessObjectListTable__LoadingState"},[n("CommonIcon",{attrs:{size:"sm",icon:"loading",spin:"",decorative:""}})],1),t._v(" "),t.loadingState?t._e():n("div",{directives:[{name:"show",rawName:"v-show",value:null!==t.itemLoadingMode&&t.localRemainingItemCount>0&&!t.disableItemLoading,expression:"itemLoadingMode !== null && localRemainingItemCount > 0 && !disableItemLoading"}],staticClass:"my-2 text-center BusinessObjectListTable__Loading"},["infinite"===t.itemLoadingMode?n("infinite-loading",{ref:"infiniteLoading",attrs:{identifier:t.infiniteLoadingIdentifier,"force-use-infinite-wrapper":!t.forceUseInfiniteWrapper||t.forceUseInfiniteWrapper},on:{infinite:t.infiniteHandler},scopedSlots:t._u([{key:"spinner",fn:function(){return[t._t("loading-info",[n("CommonIcon",{attrs:{size:"sm",icon:"loading",spin:"",decorative:""}}),t._v(" "),t.localRemainingItemCount?n("small",[t._v("\n                        "+t._s(t._f("translate")(t.getBusinessObjectText(t.remainingItemsText),t.localRemainingItemCount))+"\n                    ")]):t._e()],{value:t.localRemainingItemCount})]},proxy:!0},{key:"no-more",fn:function(){},proxy:!0},{key:"no-results",fn:function(){},proxy:!0},{key:"error",fn:function(){},proxy:!0}],null,!0)}):t._t("loading-info",[t.localRemainingItemCount&&!t.itemLoadingButtonState?n("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],staticClass:"BusinessObjectListTable__LoadMoreButton",attrs:{title:t._f("translate")(t.getBusinessObjectText(t.remainingItemsText),t.localRemainingItemCount),"aria-label":t._f("translate")(t.getBusinessObjectText("+ %s Objects"),t.localRemainingItemCount)},on:{click:t.loadNextItems}},[n("CommonIcon",{attrs:{size:"sm",weight:"bold",icon:"navigation-menu-horizontal",decorative:""}})],1):t.localRemainingItemCount&&t.itemLoadingButtonState?n("CommonIcon",{attrs:{size:"sm",icon:"loading",spin:"",decorative:""}}):t._e()],{value:t.localRemainingItemCount})],2),t._v(" "),0==t.localRemainingItemCount&&t.remainingItemCount>t.localRemainingItemCount?n("div",{staticClass:"mt-2 BusinessObjectListTable__ItemLimitReached"},[n("small",[t._v("\n            "+t._s(t._f("translate")(t.getBusinessObjectText("Table limit of %s objects reached (%s remaining)."),t.maxItems,t.remainingItemCount))+"\n        ")])]):t._e()],1)},[],!1,null,null,null);e.default=_.exports}}]);