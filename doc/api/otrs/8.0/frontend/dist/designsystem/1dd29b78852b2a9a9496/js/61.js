(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{Hqm2:function(t,e,i){"use strict";i.r(e);var o={name:"BusinessObjectWidgetLayout",props:{title:{type:String},collapsed:{type:Boolean,default:!1},isCollapsable:{type:Boolean,default:!0},isConfigurable:{type:Boolean,default:!0}},computed:{collapseId:function(){return"widget-".concat(this._uid)}},methods:{switchCollapse:function(){this.collapsed?this.$emit("expand"):this.$emit("collapse")}}},s=(i("iUTv"),i("psIG")),a=Object(s.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"border mt-3 pt-2 Background--LightGray Widget"},[i("div",{staticClass:"Widget__Header",class:{"border-bottom":!t.collapsed}},[i("b-row",{staticClass:"px-2 pb-2",attrs:{"no-gutters":""}},[i("b-col",{attrs:{cols:t.isConfigurable?10:12}},[t.isCollapsable?i("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mr-2",attrs:{title:t._f("translate")("Toggle widget visibility")},on:{click:function(e){return t.switchCollapse()}}},[i("CommonIcon",{staticClass:"Widget__Icon",attrs:{weight:"regular",icon:t.collapsed?"arrow-right-1":"arrow-down-1"}})],1):t._e(),t._v(" "),t.$slots.title?[t._t("title")]:[i("h2",[t._v(t._s(t._f("translate")(t.title)))])]],2),t._v(" "),t.isConfigurable?i("b-col",{staticClass:"text-right",attrs:{cols:"2"}},[t.$slots.configuration?[t._t("configuration")]:[i("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:t._f("translate")("Open widget configuration")}},[i("CommonIcon",{staticClass:"Widget__Icon Widget__Action",attrs:{icon:"cog"}})],1)]],2):t._e()],1)],1),t._v(" "),i("b-collapse",{staticClass:"Widget__Content",attrs:{id:t.collapseId,visible:!t.collapsed}},[t._t("default")],2)],1)},[],!1,null,null,null);e.default=a.exports},cfD9:function(t,e,i){},iUTv:function(t,e,i){"use strict";var o=i("cfD9");i.n(o).a}}]);