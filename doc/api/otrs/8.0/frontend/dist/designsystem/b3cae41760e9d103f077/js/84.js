(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{"+PXy":function(t,e,r){},OUCj:function(t,e,r){"use strict";r.r(e);r("2Tod"),r("ABKx"),r("W1QL"),r("K/PF"),r("t91x"),r("75LO");var a=r("OvAC"),n=r.n(a),o=r("rpZP"),i=r("yBo+");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}var c={name:"Statistic",components:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach(function(e){n()(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},Object(i.a)("Components/Statistics/Charts")),mixins:[o.a],props:{format:{type:String},data:{type:Array},options:{type:Object},errorMessage:{type:String},errorType:{type:String},loadingState:{type:Boolean}},computed:{chartId:function(){return"StatisticChart-".concat(this.uuid)},errorIcon:function(){switch(this.errorType){case"NoStatisticData":return"loading";default:return"graph-stats-square"}},spin:function(){return!(!this.errorType||"NoStatisticData"!==this.errorType)}},methods:{updateGraphPreferences:function(t){this.$emit("graph-preferences-updated",t)},onGraphRendered:function(){this.$emit("graph-rendered")}}},p=(r("epiD"),r("psIG")),d=Object(p.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loadingState?r("div",{staticClass:"StatisticChart__Loading"},[r("CommonIcon",{attrs:{weight:"regular",icon:"loading",spin:"",decorative:""}}),t._v(" "),r("div",[t._v("\n        "+t._s(t._f("translate")("The content of this statistic is being prepared for you. Please be patient."))+"\n    ")])],1):t.errorMessage?r("div",{staticClass:"StatisticChart__Error"},[r("CommonIcon",{attrs:{weight:"regular",icon:t.errorIcon,spin:t.spin,decorative:""}}),t._v(" "),r("div",[t._v(t._s(t._f("translate")(t.errorMessage)))])],1):t.errorType&&"NoDataAvailable"===t.errorType||!t.data?r("div",{staticClass:"StatisticChart__NoData"},[r("CommonIcon",{attrs:{weight:"regular",icon:t.errorIcon,decorative:""}}),t._v(" "),r("div",[t._v("\n        "+t._s(t._f("translate")("There is no statistic result data available. Please contact your administrator."))+"\n    ")])],1):r("div",{attrs:{id:t.chartId}},[t.format?r(t.format.replace("D3::",""),{tag:"component",attrs:{"chart-id":t.chartId,type:t.format,data:t.data,options:t.options},on:{"graph-preferences-updated":t.updateGraphPreferences,"graph-rendered":t.onGraphRendered}}):t._e()],1)},[],!1,null,null,null);e.default=d.exports},epiD:function(t,e,r){"use strict";var a=r("+PXy");r.n(a).a}}]);