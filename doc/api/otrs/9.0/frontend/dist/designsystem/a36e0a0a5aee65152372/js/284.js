(window.webpackJsonp=window.webpackJsonp||[]).push([[284,22,364],{"+3YS":function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},"+bRE":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},"683a":function(t,e,o){"use strict";o.r(e);o("it7j"),o("oMRA"),o("6d4m");var s=o("e+GP"),i=o.n(s),r=(o("W1QL"),o("K/PF"),o("t91x"),o("75LO"),o("nxTg")),n=o.n(r),a=(o("e2Kn"),o("N7uR")),l=o("J+oh"),u=o("9va6"),c={name:"FormStatisticDateTimeScale",extends:a.default,mixins:[l.a],props:{allowedFormatOptions:{type:Object,default:function(){return{Second:["Minute"],Minute:["Hour"],Hour:["Day"],Day:["Month"],Week:["Week"],Month:["Year"],Quarter:["Year"],HalfYear:["Year"]}}},formValues:{type:Object},reportPosition:{type:Number,default:0}},computed:{localFormatOptions:function(){var t="Statistic-".concat(this.reportPosition);if(this.complexFormValues&&this.complexFormValues.UseAsXvalue||this.reportPosition&&this.complexFormValues.Statistics[t].UseAsXvalue){var e;if(this.reportPosition&&this.complexFormValues.Statistics[t].UseAsXvalue){var o=Object.keys(this.complexFormValues.Statistics[t].UseAsXvalue),s=n()(o,1)[0];e=this.complexFormValues.Statistics[t].UseAsXvalue[s]}else if(this.reportPosition&&this.complexFormValues[t].UseAsXvalue){var r=Object.keys(this.complexFormValues[t].UseAsXvalue),a=n()(r,1)[0];e=this.complexFormValues[t].UseAsXvalue[a]}else if(this.complexFormValues.UseAsXvalue.ActiveFields){var l=Object.keys(this.complexFormValues.UseAsXvalue.ActiveFields),u=n()(l,1)[0];e=this.complexFormValues.UseAsXvalue.ActiveFields[u].Value}else if(this.complexFormValues.UseAsXvalue){var c=Object.keys(this.complexFormValues.UseAsXvalue),m=n()(c,1)[0];e=this.complexFormValues.UseAsXvalue[m]}if("object"===i()(e)&&e.Scale.Unit){var p=this.allowedFormatOptions[e.Scale.Unit];return p?this.formatOptions.filter(function(t){return p.includes(t.id)}):[]}}return this.formatOptions},complexFormValues:function(){return this.formValues?this.convertDotNotationToComplex(this.formValues):null}},watch:{localFormatOptions:function(t,e){var o=this;this.localFormatOptions&&0!==this.localFormatOptions.length?Object(u.isEqual)(t,e)?this.onInputUnit(this.localFormatOptions[0].id):this.localFormatOptions.find(function(t){return t.id===o.localValue.Unit})||this.onInputUnit(this.localFormatOptions[0].id):this.onInputUnit(null)}}},m=o("psIG"),p=Object(m.a)(c,void 0,void 0,!1,null,null,null);e.default=p.exports},"J+oh":function(t,e,o){"use strict";o("asZ9"),o("9ovy"),o("W1QL"),o("K/PF"),o("t91x"),o("75LO");e.a={methods:{convertDotNotationToComplex:function(t){var e={};return Object.keys(t).forEach(function(o){var s=t[o];if(o.match(/\./)){var i=e,r=o.split(".");r.forEach(function(t,e){if(e+1<r.length)return i[t]||(i[t]={}),void(i=i[t]);i[t]=s})}else e[o]=s}),e}}}},S411:function(t,e){t.exports=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var o=[],s=!0,i=!1,r=void 0;try{for(var n,a=t[Symbol.iterator]();!(s=(n=a.next()).done)&&(o.push(n.value),!e||o.length!==e);s=!0);}catch(t){i=!0,r=t}finally{try{s||null==a.return||a.return()}finally{if(i)throw r}}return o}}},nxTg:function(t,e,o){var s=o("+3YS"),i=o("S411"),r=o("+bRE");t.exports=function(t,e){return s(t)||i(t,e)||r()}}}]);