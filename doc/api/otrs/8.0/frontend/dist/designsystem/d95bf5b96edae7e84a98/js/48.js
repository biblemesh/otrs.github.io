(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{MMt3:function(t,e,n){},Moml:function(t,e,n){"use strict";var o=n("MMt3");n.n(o).a},egwB:function(t,e,n){"use strict";n.r(e);n("W1QL"),n("K/PF"),n("t91x"),n("75LO");var o=n("srL7"),i=n("CqAs"),a={name:"BusinessObjectCommunicationStream",components:{CommunicationGroupDate:function(){return n.e(73).then(n.bind(null,"C/R+"))}},extends:o.default,mixins:[i.a],props:{disableItemLoading:{type:Boolean,default:!1}},data:function(){return{expandedRow:null,testColumns:this.columns,testItems:[]}},computed:{localRemainingItemCount:function(){return this.totalItemCount&&this.maxItems&&(this.items||this.testMode)?(this.totalItemCount>this.maxItems?this.maxItems:this.totalItemCount)-this.localItems.length:0}},methods:{toggleExpandableRow:function(t){var e=!this.items[t].itemExpanded;this.$set(this.items[t],"itemExpanded",e),this.$emit("select",this.items[t],e)},loadTestItems:function(t,e){for(var n=this,o=[],i=function(t){var i={};Object.keys(n.columns).forEach(function(o){n.columns[o].isRowKey?i[o]=e+t:/articleNumber/.test(o)?i[o]=e+t+1:/subject/.test(o)&&(i[o]=n.testTitles[Math.floor(Math.random()*n.testTitles.length)])}),o.push(i)},a=0;a<t;a++)i(a);return o}}},s=(n("Moml"),n("psIG")),m=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-3 BusinessObjectCommunicationStream"},[t._l(t.localItems,function(e,o){return n("b-row",{key:e[t.getItemRowId(e)],staticClass:"BusinessObjectCommunicationStream__Row",attrs:{"align-v":"center"}},[n("CommunicationGroupDate",{attrs:{"current-date":e.CreateTime,"previous-date":0!==o?t.localItems[o-1].CreateTime:""}}),t._v(" "),n("div",{staticClass:"BusinessObjectCommunicationStream__ExpandableContent",on:{click:function(e){return t.toggleExpandableRow(o)}}},[t._t("expandable-content",null,null,e)],2)],1)}),t._v(" "),t.localItems&&0===t.localItems.length?n("b-row",{staticClass:"BusinessObjectCommunicationStream__EmptyText"},[n("CommonIcon",{staticClass:"BusinessObjectListTable__EmptyIcon",attrs:{weight:t.emptyIconWeight,icon:t.emptyIcon,decorative:""}}),t._v(" "),n("p",[t._v(t._s(t._f("translate")(t.emptyText)))])],1):t._e(),t._v(" "),n("b-row",{directives:[{name:"show",rawName:"v-show",value:null!==t.itemLoadingMode&&t.localRemainingItemCount>0&&!t.disableItemLoading,expression:"itemLoadingMode !== null && localRemainingItemCount > 0 && !disableItemLoading"}],staticClass:"text-center bg-transparent BusinessObjectCommunicationStream__LoadMore pt-3 pb-1"},[n("b-col",{attrs:{colspan:t.visibleColumnCount}},[t._t("loading-info",[t.localRemainingItemCount&&!t.itemLoadingButtonState?n("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{title:t._f("translate")(t.getBusinessObjectText("+ %s Objects"),t.localRemainingItemCount)},on:{click:t.loadNextItems}},[n("CommonIcon",{attrs:{weight:"bold",icon:"navigation-menu-horizontal",decorative:""}})],1):t.localRemainingItemCount&&t.itemLoadingButtonState?n("CommonIcon",{attrs:{icon:"loading",spin:"",decorative:""}}):t._e()],{value:t.localRemainingItemCount})],2)],1)],2)},[],!1,null,null,null);e.default=m.exports}}]);