(window.webpackJsonp=window.webpackJsonp||[]).push([[267,282],{NSvX:function(n,e,a){"use strict";a.r(e);var i={name:"DynamicFieldValueBase",components:{CommonPopover:function(){return a.e(54).then(a.bind(null,"7oBH"))},CommonDateTime:function(){return a.e(57).then(a.bind(null,"g17x"))}},props:{dynamicFieldConfig:{type:Object},dynamicField:{type:Object},type:{type:String}},data:function(){return{isMultiline:!1}},computed:{isList:function(){return"list"===this.type},isSidebar:function(){return"sidebar"===this.type},isTranslatable:function(){return this.dynamicField.TranslatableValues&&"0"!==this.dynamicField.TranslatableValues},displayLink:function(){return this.dynamicField.Link||""},displayPreview:function(){return this.dynamicField.LinkPreview},displayValue:function(){return this.dynamicField.Value}}},l=a("psIG"),t=Object(l.a)(i,function(){var n=this,e=n.$createElement,a=n._self._c||e;return n.isList?a("span",{staticClass:"text-truncate w-100 d-inline-block DynamicFieldValue",attrs:{title:n.displayValue}},[n.isTranslatable?[n._v("\n        "+n._s(n._f("translate")(n.displayValue))+"\n    ")]:[n._v("\n        "+n._s(n.displayValue)+"\n    ")]],2):a("span",{staticClass:"DynamicFieldValue"},[n.dynamicField.LinkPreview?a("CommonPopover",{attrs:{link:n.displayLink,preview:n.displayPreview,"link-text":n.displayValue}}):n.displayLink?a("CommonLink",{attrs:{link:n.displayLink}},[n.isMultiline?a("pre",{staticClass:"DynamicFieldValue__Container"},[n._v("            "+n._s(n.displayValue)+"\n        ")]):a("span",[n.isTranslatable?[n._v("\n                "+n._s(n._f("translate")(n.displayValue))+"\n            ")]:[n._v("\n                "+n._s(n.displayValue)+"\n            ")]],2),n._v(" "),a("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[n.isMultiline?a("pre",{staticClass:"DynamicFieldValue__Container"},[n._v("            "+n._s(n.displayValue)+"\n        ")]):a("span",[n.isTranslatable?[n._v("\n                "+n._s(n._f("translate")(n.displayValue))+"\n            ")]:[n._v("\n                "+n._s(n.displayValue)+"\n            ")]],2)]],2)},[],!1,null,null,null);e.default=t.exports},nf9x:function(n,e,a){"use strict";a.r(e);var i={name:"DynamicFieldValueMultiselect",extends:a("NSvX").default},l=a("psIG"),t=Object(l.a)(i,function(){var n=this,e=n.$createElement,a=n._self._c||e;return n.isList?a("span",{staticClass:"DynamicFieldValue"},[n._l(n.dynamicField.Values,function(e,a){return[n.dynamicField.TranslatableValues?[n._v("\n            "+n._s(n._f("translate")(e))),a<n.dynamicField.Values.length-1?[n._v("\n                "+n._s(n.dynamicField.ItemSeparator)+"\n            ")]:n._e()]:[n._v("\n            "+n._s(e)),a<n.dynamicField.Values.length-1?[n._v("\n                "+n._s(n.dynamicField.ItemSeparator)+"\n            ")]:n._e()]]})],2):a("span",{staticClass:"DynamicFieldValue"},[n._l(n.dynamicField.Values,function(e,a){return[n.isTranslatable?[n._v("\n            "+n._s(n._f("translate")(e))),a<n.dynamicField.Values.length-1?[n._v("\n                "+n._s(n.dynamicField.ItemSeparator)+"\n            ")]:n._e()]:[n._v("\n            "+n._s(e)),a<n.dynamicField.Values.length-1?[n._v("\n                "+n._s(n.dynamicField.ItemSeparator)+"\n            ")]:n._e()]]})],2)},[],!1,null,null,null);e.default=t.exports}}]);