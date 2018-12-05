(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{"34UB":function(t,e,o){"use strict";o.r(e);var n=o("Iptl"),a=o("KtqP"),s={name:"FormDateTime",mixins:[n.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormDateTime",value:void 0,component:a.default,example:{name:{type:"input"},allowInput:{default:!0,type:"checkbox"},dateFormat:{default:"Y-m-d H:i:S",type:"input"},defaultDate:{type:"input"},defaultHour:{type:"input",subType:"number"},defaultMinute:{type:"input",subType:"number"},description:{type:"input"},disabled:{default:!1,type:"checkbox"},error:{type:"input"},enableTime:{default:!0,type:"checkbox"},enableSeconds:{default:!1,type:"checkbox"},futureOnly:{default:!1,type:"checkbox"},hourIncrement:{type:"input",subType:"number"},inline:{type:"checkbox"},label:{type:"input"},labelSrOnly:{default:!1,type:"checkbox"},maxDate:{type:"input"},minDate:{type:"input"},minuteIncrement:{type:"input",subType:"number"},mode:{type:"select",options:[{value:void 0,text:"-"},{value:"single",text:"single"},{value:"multiple",text:"multiple"},{value:"range",text:"range"}]},noCalendar:{default:!1,type:"checkbox"},pastOnly:{default:!1,type:"checkbox"},required:{default:!1,type:"checkbox"},systemTimezone:{type:"select",options:[{value:void 0,text:"-"},{value:"UTC",text:"UTC"},{value:"America/New_York",text:"America/New_York"},{value:"Europe/Berlin",text:"Europe/Berlin"},{value:"Europe/London",text:"Europe/London"}]},time24Hr:{default:!0,type:"checkbox"},userTimezone:{type:"select",options:[{value:void 0,text:"-"},{value:"UTC",text:"UTC"},{value:"America/New_York",text:"America/New_York"},{value:"Europe/Berlin",text:"Europe/Berlin"},{value:"Europe/London",text:"Europe/London"}]},weekNumbers:{default:!1,type:"checkbox"},placeholder:{type:"input"}}}}},r=o("psIG"),i=Object(r.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main"},[o("h1",{staticClass:"design-system"},[t._v("\n        "+t._s(t.summary)+"\n        "),o("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v(t._s(t.version))])],1),t._v(" "),o("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[o("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),o("b-tabs",{staticClass:"tab-content"},[o("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[o("DocsExample",{attrs:{component:t.component,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),o("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[o("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1),t._v(" "),o("b-tab",{staticClass:"tab-pane",attrs:{title:"Appendix","title-link-class":"design-system"}},[o("h2",{staticClass:"design-system"},[t._v("Date Format Tokens")]),t._v(" "),o("table",{staticClass:"api-doc"},[o("thead",[o("tr",[o("th",[t._v("Token")]),t._v(" "),o("th",[t._v("Description")]),t._v(" "),o("th",[t._v("Values")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("d")])]),t._v(" "),o("td",[t._v("Day of the month, 2 digits with leading zeros")]),t._v(" "),o("td",[t._v("01 to 31")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("D")])]),t._v(" "),o("td",[t._v("A textual representation of a day")]),t._v(" "),o("td",[t._v("Mon through Sun")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("l")])]),t._v(" "),o("td",[t._v("A full textual representation of the day of the week")]),t._v(" "),o("td",[t._v("Sunday through Saturday")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("j")])]),t._v(" "),o("td",[t._v("Day of the month without leading zeros")]),t._v(" "),o("td",[t._v("1 to 31")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("J")])]),t._v(" "),o("td",[t._v("Day of the month without leading zeros and ordinal suffix")]),t._v(" "),o("td",[t._v("1st, 2nd, to 31st")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("w")])]),t._v(" "),o("td",[t._v("Numeric representation of the day of the week")]),t._v(" "),o("td",[t._v("0 (for Sunday) through 6 (for Saturday)")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("F")])]),t._v(" "),o("td",[t._v("A full textual representation of a month")]),t._v(" "),o("td",[t._v("January through December")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("m")])]),t._v(" "),o("td",[t._v("Numeric representation of a month, with leading zero")]),t._v(" "),o("td",[t._v("01 through 12")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("n")])]),t._v(" "),o("td",[t._v("Numeric representation of a month, without leading zeros")]),t._v(" "),o("td",[t._v("1 through 12")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("M")])]),t._v(" "),o("td",[t._v("A short textual representation of a month")]),t._v(" "),o("td",[t._v("Jan through Dec")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("U")])]),t._v(" "),o("td",[t._v("The number of seconds since the Unix Epoch")]),t._v(" "),o("td",[t._v("1413704993")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("y")])]),t._v(" "),o("td",[t._v("A two digit representation of a year")]),t._v(" "),o("td",[t._v("99 or 03")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("Y")])]),t._v(" "),o("td",[t._v("A full numeric representation of a year, 4 digits")]),t._v(" "),o("td",[t._v("1999 or 2003")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("z")])]),t._v(" "),o("td",[t._v("ISO Date format")]),t._v(" "),o("td",[t._v("2017-03-04T01:23:43.000Z")])])])]),t._v(" "),o("h2",{staticClass:"design-system"},[t._v("Time Format Tokens")]),t._v(" "),o("table",{staticClass:"api-doc"},[o("thead",[o("tr",[o("th",[t._v("Token")]),t._v(" "),o("th",[t._v("Description")]),t._v(" "),o("th",[t._v("Values")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("H")])]),t._v(" "),o("td",[t._v("Hours (24 hours)")]),t._v(" "),o("td",[t._v("00 to 23")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("h")])]),t._v(" "),o("td",[t._v("Hours")]),t._v(" "),o("td",[t._v("1 to 12")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("i")])]),t._v(" "),o("td",[t._v("Minutes")]),t._v(" "),o("td",[t._v("00 to 59")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("S")])]),t._v(" "),o("td",[t._v("Seconds, 2 digits")]),t._v(" "),o("td",[t._v("00 to 59")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("s")])]),t._v(" "),o("td",[t._v("Seconds")]),t._v(" "),o("td",[t._v("0, 1 to 59")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("K")])]),t._v(" "),o("td",[t._v("AM/PM")]),t._v(" "),o("td",[t._v("AM or PM")])])])])])],1)],2)},[],!1,null,null,null);i.options.__file="FormDateTime.vue";e.default=i.exports},Iptl:function(t,e,o){"use strict";o("GkPX");var n=o("nS/B");e.a={components:{CommonNotice:function(){return o.e(113).then(o.bind(null,"mkLc"))},DocsExample:function(){return o.e(10).then(o.bind(null,"GD02"))},DocsComponentAPI:function(){return o.e(11).then(o.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(n.b)(this.doc,"summary")},version:function(){return Object(n.b)(this.doc,"version")},description:function(){return Object(n.b)(this.doc,"description")},props:function(){return Object(n.a)(this.doc,"prop")},slots:function(){return Object(n.a)(this.doc,"slot")},events:function(){return Object(n.a)(this.doc,"event")},methods:function(){return Object(n.a)(this.doc,"method")}},mounted:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}}}]);