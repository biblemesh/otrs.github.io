(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{IeUr:function(t,n,e){"use strict";e.r(n);var r={name:"CommonButton",props:{type:String,text:String,link:String,icon:String},computed:{customClass:function(){switch(this.type){case"Primary":return"btn btn-md Button--Primary";case"PrimaryInverted":return"btn btn-md Button--PrimaryInverted";case"Secondary":return"btn btn-md Button--Secondary";default:return"btn btn-md"}},iconClass:function(){switch(this.icon){case"Continue":return"long-arrow-alt-right";default:return""}}}},s=e("psIG"),o=Object(s.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-link",{staticClass:"design-system",class:t.customClass,attrs:{to:t.link}},[t._v("\n    "+t._s(t.text)+"\n    "),t.icon?e("CommonIcon",{attrs:{icon:t.iconClass}}):t._e()],1)},[],!1,null,null,null);o.options.__file="CommonButton.vue";n.default=o.exports}}]);