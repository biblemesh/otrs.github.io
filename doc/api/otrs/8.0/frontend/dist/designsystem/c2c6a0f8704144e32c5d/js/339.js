(window.webpackJsonp=window.webpackJsonp||[]).push([[339,359],{NSvX:function(i,e,n){"use strict";n.r(e);var a={name:"DynamicFieldValueBase",components:{CommonPopover:function(){return n.e(72).then(n.bind(null,"7oBH"))},CommonDateTime:function(){return n.e(42).then(n.bind(null,"g17x"))}},props:{dynamicFieldConfig:{type:Object},dynamicField:{type:Object},type:{type:String}},data:function(){return{isMultiline:!1,isExpandable:!0}},computed:{isList:function(){return"list"===this.type},isSidebar:function(){return"sidebar"===this.type},isProperty:function(){return"property"===this.type||"property-expanded"===this.type},isTranslatable:function(){return this.dynamicField.TranslatableValues&&"0"!==this.dynamicField.TranslatableValues},displayLink:function(){return this.dynamicField.Link||""},displayPreview:function(){return this.dynamicField.LinkPreview},displayValue:function(){return this.dynamicField.Value}},created:function(){this.$emit("load",{isMultiline:this.isMultiline,isExpandable:this.isExpandable})}},t=(n("Qeht"),n("psIG")),l=Object(t.a)(a,function(){var i=this,e=i.$createElement,n=i._self._c||e;return i.isList?n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],staticClass:"DynamicFieldValue",attrs:{title:i.displayValue.length>50?i.displayValue:""}},[i.isTranslatable?[i.displayValue.length>50?[i._v("\n                "+i._s(i._f("truncate")(i._f("translate")(i.displayValue),50))+"\n            ")]:[i._v("\n                "+i._s(i._f("translate")(i.displayValue))+"\n            ")]]:[i.displayValue.length>50?[i._v("\n                "+i._s(i._f("truncate")(i.displayValue,50))+"\n            ")]:[i._v("\n                "+i._s(i.displayValue)+"\n            ")]]],2):n("span",{staticClass:"DynamicFieldValue"},[i.dynamicField.LinkPreview?n("CommonPopover",{attrs:{link:i.displayLink,preview:i.displayPreview,"link-text":i.displayValue}}):i.displayLink?n("CommonLink",{attrs:{link:i.displayLink}},[i.isMultiline?n("pre",{staticClass:"DynamicFieldValue__Container"},[i._v(i._s(i.displayValue))]):n("span",[i.isTranslatable?[i._v("\n                    "+i._s(i._f("translate")(i.displayValue))+"\n                ")]:[i._v("\n                    "+i._s(i.displayValue)+"\n                ")]],2),i._v(" "),n("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[i.isMultiline?n("pre",{staticClass:"DynamicFieldValue__Container"},[i._v(i._s(i.displayValue))]):n("span",[i.isTranslatable?[i._v("\n                    "+i._s(i._f("translate")(i.displayValue))+"\n                ")]:[i._v("\n                    "+i._s(i.displayValue)+"\n                ")]],2)]],2)},[],!1,null,null,null);e.default=l.exports},Qeht:function(i,e,n){"use strict";var a=n("mvJA");n.n(a).a},mvJA:function(i,e,n){},"z/9O":function(i,e,n){"use strict";n.r(e);var a={name:"DynamicFieldValueProcessID",extends:n("NSvX").default},t=n("psIG"),l=Object(t.a)(a,void 0,void 0,!1,null,null,null);e.default=l.exports}}]);