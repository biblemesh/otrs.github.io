(window.webpackJsonp=window.webpackJsonp||[]).push([[204,21,220],{"89rm":function(e,n,t){"use strict";t.r(n);var i={name:"DynamicFieldMultiselect",extends:t("m5Tc").default},a=t("psIG"),l=Object(a.a)(i,function(){var e=this,n=e.$createElement,t=e._self._c||n;return"list"==e.type?t("span",[e._l(e.dynamicField.Values,function(n,t){return[e.dynamicField.TranslatableValues?[e._v("\n            "+e._s(e._f("translate")(n))),t<e.dynamicField.Values.length-1?[e._v("\n                "+e._s(e.dynamicField.ItemSeparator)+"\n            ")]:e._e()]:[e._v("\n            "+e._s(n)),t<e.dynamicField.Values.length-1?[e._v("\n                "+e._s(e.dynamicField.ItemSeparator)+"\n            ")]:e._e()]]})],2):t("p",[t("strong",[e._v("\n        "+e._s(e.dynamicFieldConfig.Label)),"detail"==e.type?[e._v("\n            :\n        ")]:e._e()],2),e._v(" "),"sidebar"==e.type?t("br"):e._e(),e._v(" "),e._l(e.dynamicField.Values,function(n,t){return[e.dynamicField.TranslatableValues?[e._v("\n            "+e._s(e._f("translate")(n))),t<e.dynamicField.Values.length-1?[e._v("\n                "+e._s(e.dynamicField.ItemSeparator)+"\n            ")]:e._e()]:[e._v("\n            "+e._s(n)),t<e.dynamicField.Values.length-1?[e._v("\n                "+e._s(e.dynamicField.ItemSeparator)+"\n            ")]:e._e()]]})],2)},[],!1,null,null,null);n.default=l.exports},IKuE:function(e,n,t){},QAut:function(e,n,t){"use strict";t.r(n);t("2Tod"),t("ABKx"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO");var i=t("OvAC"),a=t.n(i),l=t("yBo+");function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}var s={name:"DynamicField",components:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(t,!0).forEach(function(n){a()(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({CommonPopover:function(){return t.e(51).then(t.bind(null,"7oBH"))},CommonDateTime:function(){return t.e(59).then(t.bind(null,"g17x"))},DynamicFieldLabel:function(){return t.e(71).then(t.bind(null,"R4nj"))}},Object(l.a)("Components/DynamicField/Value")),props:{dynamicFieldConfig:{type:Object},dynamicField:{type:Object},type:{type:String},valueLabelClass:{type:String}},data:function(){return{isMultiline:!1}},computed:{classes:function(){var e=[],n="ListItem";return"list"!==this.type&&(n="DetailItem"),e.push(n),e},displayLink:function(){return this.dynamicField.Link||""},displayPreview:function(){return this.dynamicField.LinkPreview},displayValue:function(){return this.dynamicField.Value},isTranslatable:function(){return this.dynamicField.TranslatableValues},wrapper:function(){return"list"===this.type?"span":"p"}}},c=(t("YDFM"),t("psIG")),u=Object(c.a)(s,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t(e.wrapper,{tag:"component",class:e.classes},["list"!==e.type?t("DynamicFieldLabel",{attrs:{"css-class":e.valueLabelClass,type:e.type,text:e.dynamicFieldConfig.Label}}):e._e(),e._v(" "),"sidebar"===e.type?t("br"):e._e(),e._v(" "),t("DynamicFieldValue"+e.dynamicFieldConfig.FieldType,{tag:"component",attrs:{"dynamic-field-config":e.dynamicFieldConfig,"dynamic-field":e.dynamicField,type:e.type}})],1)},[],!1,null,"af79b530",null);n.default=u.exports},YDFM:function(e,n,t){"use strict";var i=t("IKuE");t.n(i).a},m5Tc:function(e,n,t){"use strict";t.r(n);var i={name:"DynamicFieldBase",extends:t("QAut").default},a=t("psIG"),l=Object(a.a)(i,void 0,void 0,!1,null,null,null);n.default=l.exports}}]);