(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{B2Ms:function(t,e,n){"use strict";n.r(e);n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO");var i=n("OvAC"),r=n.n(i),l=n("lOrp");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}var o={name:"CommonBadge",props:{title:{type:String,required:!0},tooltipTitle:{type:String},disabled:{type:Boolean,default:!1},size:{type:String},variant:{type:String},inline:{type:Boolean},tooltipPlacement:{type:String,default:"top"},truncateTitle:{type:Boolean}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){r()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},Object(l.b)(["language"]),{titleTranslationNeeded:function(){return!0},localTitle:function(){return this.titleTranslationNeeded?this.$locale.translate(this.title):this.title},localTooltipTitle:function(){var t=this.tooltipTitle||this.title;return this.titleTranslationNeeded?this.$locale.translate(t):t},elementClass:function(){var t=["badge","Badge"];switch(this.disabled&&t.push("Badge--Disabled"),this.inline&&t.push("Badge--Inline"),this.variant){case"primary":t.push("Badge--Primary")}switch(this.size){case"sm":t.push("Badge--Smaller")}return t}})},s=(n("mv8j"),n("psIG")),c=Object(s.a)(o,function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip",value:{trigger:"hover",placement:t.tooltipPlacement},expression:"{ trigger: 'hover', placement: tooltipPlacement }"}],class:t.elementClass,attrs:{title:t.localTooltipTitle}},[t.truncateTitle?[t._v("\n        "+t._s(t._f("truncate")(t.localTitle,100))+"\n    ")]:[t._v("\n        "+t._s(t.localTitle)+"\n    ")]],2)},[],!1,null,null,null);e.default=c.exports},ELK8:function(t,e,n){},mv8j:function(t,e,n){"use strict";var i=n("ELK8");n.n(i).a}}]);