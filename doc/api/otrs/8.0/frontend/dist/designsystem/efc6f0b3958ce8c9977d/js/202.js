(window.webpackJsonp=window.webpackJsonp||[]).push([[202,21,220],{IKuE:function(e,t,n){},QAut:function(e,t,n){"use strict";n.r(t);n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO");var i=n("OvAC"),a=n.n(i),l=n("yBo+");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}var o={name:"DynamicField",components:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){a()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({CommonPopover:function(){return n.e(51).then(n.bind(null,"7oBH"))},CommonDateTime:function(){return n.e(59).then(n.bind(null,"g17x"))},DynamicFieldLabel:function(){return n.e(71).then(n.bind(null,"R4nj"))}},Object(l.a)("Components/DynamicField/Value")),props:{dynamicFieldConfig:{type:Object},dynamicField:{type:Object},type:{type:String},valueLabelClass:{type:String}},data:function(){return{isMultiline:!1}},computed:{classes:function(){var e=[],t="ListItem";return"list"!==this.type&&(t="DetailItem"),e.push(t),e},displayLink:function(){return this.dynamicField.Link||""},displayPreview:function(){return this.dynamicField.LinkPreview},displayValue:function(){return this.dynamicField.Value},isTranslatable:function(){return this.dynamicField.TranslatableValues},wrapper:function(){return"list"===this.type?"span":"p"}}},s=(n("YDFM"),n("psIG")),c=Object(s.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.wrapper,{tag:"component",class:e.classes},["list"!==e.type?n("DynamicFieldLabel",{attrs:{"css-class":e.valueLabelClass,type:e.type,text:e.dynamicFieldConfig.Label}}):e._e(),e._v(" "),"sidebar"===e.type?n("br"):e._e(),e._v(" "),n("DynamicFieldValue"+e.dynamicFieldConfig.FieldType,{tag:"component",attrs:{"dynamic-field-config":e.dynamicFieldConfig,"dynamic-field":e.dynamicField,type:e.type}})],1)},[],!1,null,"af79b530",null);t.default=c.exports},YDFM:function(e,t,n){"use strict";var i=n("IKuE");n.n(i).a},cGDY:function(e,t,n){"use strict";n.r(t);var i={name:"DynamicFieldDateTime",extends:n("m5Tc").default},a=n("psIG"),l=Object(a.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return"list"===e.type&&e.displayValue?n("CommonDateTime",{attrs:{type:e.dynamicFieldConfig.OutputTypeFormat,"date-time":e.displayValue}}):"list"!==e.type?n("p",[n("strong",[e._v("\n        "+e._s(e.dynamicFieldConfig.Label)),"detail"==e.type?[e._v("\n            :\n        ")]:e._e()],2),e._v(" "),"sidebar"==e.type?n("br"):e._e(),e._v(" "),e.dynamicField.LinkPreview?n("CommonPopover",{attrs:{link:e.displayLink,preview:e.displayPreview,"link-text":e._f("localize")(e.displayValue,"TimeShort")}}):e.displayLink?n("CommonLink",{attrs:{link:e.displayLink}},[e.displayValue?n("CommonDateTime",{attrs:{type:e.dynamicFieldConfig.OutputTypeFormat,"date-time":e.displayValue}}):e._e(),e._v(" "),n("CommonIcon",{attrs:{icon:"app-window-link"}})],1):[e.displayValue?n("CommonDateTime",{attrs:{type:e.dynamicFieldConfig.OutputTypeFormat,"date-time":e.displayValue}}):e._e()]],2):e._e()},[],!1,null,null,null);t.default=l.exports},m5Tc:function(e,t,n){"use strict";n.r(t);var i={name:"DynamicFieldBase",extends:n("QAut").default},a=n("psIG"),l=Object(a.a)(i,void 0,void 0,!1,null,null,null);t.default=l.exports}}]);