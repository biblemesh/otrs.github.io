(window.webpackJsonp=window.webpackJsonp||[]).push([[83,7,19,120],{"+J7U":function(t,e,o){var n,a,s=o("We69"),i=o("4feL"),l=0,u=0;t.exports=function(t,e,o){var c=e&&o||0,r=e||[],m=(t=t||{}).node||n,d=void 0!==t.clockseq?t.clockseq:a;if(null==m||null==d){var p=s();null==m&&(m=n=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==d&&(d=a=16383&(p[6]<<8|p[7]))}var f=void 0!==t.msecs?t.msecs:(new Date).getTime(),h=void 0!==t.nsecs?t.nsecs:u+1,C=f-l+(h-u)/1e4;if(C<0&&void 0===t.clockseq&&(d=d+1&16383),(C<0||f>l)&&void 0===t.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=f,u=h,a=d;var v=(1e4*(268435455&(f+=122192928e5))+h)%4294967296;r[c++]=v>>>24&255,r[c++]=v>>>16&255,r[c++]=v>>>8&255,r[c++]=255&v;var y=f/4294967296*1e4&268435455;r[c++]=y>>>8&255,r[c++]=255&y,r[c++]=y>>>24&15|16,r[c++]=y>>>16&255,r[c++]=d>>>8|128,r[c++]=255&d;for(var g=0;g<6;++g)r[c+g]=m[g];return e||i(r)}},"+p0e":function(t,e,o){"use strict";o.r(e);o("GkPX"),o("IKQL");var n=o("gki9"),a=o.n(n),s=(o("W1QL"),o("K/PF"),o("t91x"),o("75LO"),o("+J7U")),i=o.n(s),l=o("9va6"),u=o("8CHY"),c=o("Q6E5"),r=o.n(c),m=o("3Hfo"),d=o("A86J"),p={name:"FormColumnsLayout",components:{VueDraggable:r.a},mixins:[d.a,m.a],props:{name:{type:String},value:{type:Object},hidden:{type:Boolean,default:!1},activeColumnLayout:{type:String,default:"OneColumn"},availableWidgets:{type:Object,default:function(){return{}}},label:{type:String},labelSrOnly:{type:Boolean,default:!1},description:{type:String},error:{type:String},hideDescription:{type:Boolean,default:!1}},data:function(){return{oldLocalValue:null,localActiveColumnLayout:this.activeColumnLayout,addingInCol:null}},computed:{fieldId:function(){return"formInput-".concat(this._uid)},localValue:{get:function(){return this.value},set:function(t,e){this.$emit("input",t,e)}},isOneColumnLayout:function(){return"OneColumn"===this.localActiveColumnLayout},isTwoColumnsLayout:function(){return"TwoColumns"===this.localActiveColumnLayout},isThreeColumnsLayout:function(){return"ThreeColumns"===this.localActiveColumnLayout},columnLayoutConfig:function(){return this.localValue.ColumnLayout[this.localActiveColumnLayout]||this.$set(this.localValue.ColumnLayout,this.localActiveColumnLayout,{}),this.localValue.ColumnLayout[this.localActiveColumnLayout]},availableWidgetsList:function(){var t=this;return Object.keys(this.availableWidgets).map(function(e){return a()({Name:e},t.availableWidgets[e])})},columns:function(){return new Array({OneColumn:1,TwoColumns:2,ThreeColumns:3}[this.localActiveColumnLayout]).fill().map(function(t,e){return e+1})},realLabel:function(){return this.label===this.name?null:this.label}},watch:{activeColumnLayout:function(t){this.localActiveColumnLayout=t}},methods:{switchLayout:function(t){this.addingInCol=null,this.localActiveColumnLayout=t},widgets:function(t){this.columnLayoutConfig[t]||this.$set(this.localValue.ColumnLayout[this.localActiveColumnLayout],t,{});var e=this.columnLayoutConfig[t];return e||this.$set(e,[]),e},setWidgets:function(t,e){this.columnLayoutConfig[t]=e,this.emitValue()},deleteWidget:function(t,e){var o=this;this.$bus.$emit("showModalMessage",{id:"deleteColumnConfigWidgetOne",heading:"Delete widget",text:"Do you really want to remove this widget?",buttonBehavior:"yesNo",okCallback:function(){o.columnLayoutConfig[t].splice(e,1),o.emitValue()}})},openWidgetSelection:function(t){t!==this.addingInCol?this.addingInCol=t:this.addingInCol=null},addWidget:function(t){this.columnLayoutConfig[this.addingInCol].push(a()({},t,{ID:i()()})),this.emitValue()},emitValue:function(){Object(l.isEqual)(this.localValue,this.oldLocalValue)||(this.$emit("input",this.localValue,this.oldLocalValue),this.$emit("changed",this.localValue,this.oldLocalValue),this.oldLocalValue=Object(l.cloneDeep)(this.localValue))},colMDForSection:function(t){return{OneColumn:{container:12,widgetName:11,deleteButton:1},TwoColumns:{container:6,widgetName:10,deleteButton:2},ThreeColumns:{container:4,widgetName:9,deleteButton:3}}[this.localActiveColumnLayout][t]},isTheLastColumn:function(t){return t>1&&t===this.columns.length},filter:function(t){var e=this,o="";return["label","description"].forEach(function(t){o+=e.$locale.translate(e[t])}),Object.keys(this.availableWidgets).forEach(function(t){var n=e.availableWidgets[t];o+=e.$locale.translate(n.Title)}),Object(u.a)(o,t)}}},f=(o("oswe"),o("psIG")),h=Object(f.a)(p,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!hidden"}],staticClass:"ColumnsConfig",attrs:{state:Boolean(t.error)?"invalid":null,label:t._f("translate")(t.realLabel),"label-for":t.fieldId,"label-sr-only":t.labelSrOnly,description:t._f("translate")(t.description),"invalid-feedback":t._f("translate")(t.error)}},[t.realLabel&&t.description&&t.hideDescription?[o("template",{slot:"label"},[t._v("\n            "+t._s(t._f("translate")(t.realLabel))+"\n            "),o("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],attrs:{title:t._f("translate")(t.description)}},[o("CommonIcon",{staticClass:"mx-2 Font--Small",attrs:{weight:"regular",icon:"messages-bubble-square-information"}})],1)],1),t._v(" "),o("template",{slot:"description"},[o("small",{staticClass:"sr-only"},[t._v("\n                "+t._s(t._f("translate")(t.description))+"\n            ")])])]:t._e(),t._v(" "),o("b-row",{staticClass:"mt-1",attrs:{"align-v":"center"}},[o("b-col",{attrs:{md:"12"}},[o("span",[t._v("\n                "+t._s(t._f("translate")("Select the layout you want to edit"))+"\n            ")]),t._v(" "),o("CommonLink",{directives:[{name:"focus",rawName:"v-focus",value:t.autoFocus,expression:"autoFocus"}],staticClass:"Icon--OpenOneColumnView",on:{click:function(e){return t.switchLayout("OneColumn")}}},[o("CommonIcon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"Icon m-2",class:{ActiveColumnLayout:t.isOneColumnLayout},attrs:{title:t._f("translate")("Settings for one-column layout"),icon:"layout-top"}})],1),t._v(" "),o("CommonLink",{staticClass:"Icon--OpenTwoColumsView",on:{click:function(e){return t.switchLayout("TwoColumns")}}},[o("CommonIcon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"Icon m-2",class:{ActiveColumnLayout:t.isTwoColumnsLayout},attrs:{title:t._f("translate")("Settings for two-column layout"),icon:"layout-4"}})],1),t._v(" "),o("CommonLink",{staticClass:"Icon--OpenThreeColumsView",on:{click:function(e){return t.switchLayout("ThreeColumns")}}},[o("CommonIcon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"Icon m-2",class:{ActiveColumnLayout:t.isThreeColumnsLayout},attrs:{title:t._f("translate")("Settings for three-column layout"),icon:"layout-3"}})],1)],1)],1),t._v(" "),o("b-row",{attrs:{"align-v":"center"}},[o("b-col",[t._v("\n            "+t._s(t._f("translate")("Edit %s column layout",t.columns.length))+"\n        ")])],1),t._v(" "),o("b-row",{staticClass:"mt-2",attrs:{"no-gutters":""}},t._l(t.columns,function(e){return o("b-col",{key:e,staticClass:"ColumnLayoutSettings__Box px-2 pb-2",attrs:{cols:t.colMDForSection("container")}},[o("b-row",{attrs:{"no-gutters":""}},[o("b-col",[o("VueDraggable",{attrs:{value:t.widgets(e),group:"threeColumnLayout",animation:"200","ghost-class":"DragDropGhost",handle:".FormColumnsLayout__DragAndDrop"},on:{input:function(o){return t.setWidgets(e,o)}}},t._l(t.widgets(e),function(n,a){return o("b-row",{key:n.ID,staticClass:"mt-2",attrs:{"no-gutters":""}},[o("b-col",{attrs:{md:t.colMDForSection("widgetName")}},[o("b-row",{staticClass:"ColumnLayoutSettings__Item",attrs:{"no-gutters":""}},[o("b-col",{staticClass:"pl-2 text-truncate",attrs:{md:"10",title:t._f("translate")(n.Title)}},[t._v("\n                                        "+t._s(t._f("translate")(n.Title))+"\n                                    ")]),t._v(" "),o("b-col",{staticClass:"pr-2 text-right",attrs:{md:"2",lg:"2"}},[o("CommonIcon",{staticClass:"FormColumnsLayout__DragAndDrop",attrs:{weight:"bold",icon:"navigation-menu"}})],1)],1)],1),t._v(" "),o("b-col",{staticClass:"text-right",attrs:{md:t.colMDForSection("deleteButton")}},[o("CommonLink",{staticClass:"Color--Alert Delete",on:{click:function(o){return t.deleteWidget(e,a)}}},[o("CommonIcon",{staticClass:"Icon",attrs:{weight:"regular",icon:"bin-2-alternate"}})],1)],1)],1)}),1),t._v(" "),o("b-row",{staticClass:"mt-2 text-center",attrs:{"no-gutters":""}},[o("b-col",{staticClass:"position-relative"},[t.addingInCol===e?o("div",{staticClass:"ColumnLayoutSettings__AddLayer position-absolute",class:{"ColumnLayoutSettings__AddLayer--inverted":t.isTheLastColumn(e)}},t._l(t.availableWidgetsList,function(e){return o("b-row",{key:e.Name,staticClass:"my-2 mx-1",attrs:{"no-gutters":""}},[o("b-col",{staticClass:"text-truncate"},[o("CommonLink",{staticClass:"d-block ColumnLayoutSettings__Item",on:{click:function(o){return t.addWidget(e)}}},[t._v("\n                                            "+t._s(t._f("translate")(e.Title))+"\n                                        ")])],1)],1)}),1):t._e(),t._v(" "),o("CommonLink",{staticClass:"ColumnLayoutSettings__AddButton",class:{"ColumnLayoutSettings__AddButton--Active":t.addingInCol===e},on:{click:function(o){return t.openWidgetSelection(e)}}},[o("CommonIcon",{staticClass:"icon",attrs:{weight:"bold",icon:t.addingInCol===e?"close":"add"}})],1)],1)],1)],1)],1)],1)}),1),t._v(" "),o("b-row",{staticClass:"my-2"},[o("b-col",{staticClass:"text-left"},[o("p",{staticClass:"m-0"},[t._v("\n                "+t._s(t._f("translate")("Here you can design the column layout of the detail view according to your requirements."))+"\n            ")]),t._v(" "),o("p",{staticClass:"m-0"},[t._v("\n                "+t._s(t._f("translate")("Please press the add button at the bottom to add a module you want to get displayed."))+"\n            ")]),t._v(" "),o("p",{staticClass:"m-0"},[t._v("\n                "+t._s(t._f("translate")("You can remove a module by clicking the trash icon."))+"\n            ")]),t._v(" "),o("p",{staticClass:"m-0"},[t._v("\n                "+t._s(t._f("translate")("You change the settings of each box inside the box ."))+"\n            ")]),t._v(" "),o("p",{staticClass:"m-0"},[t._v("\n                "+t._s(t._f("translate")("Hint: You can add modules multiple times. Each module has its own settings."))+"\n            ")])])],1)],2)},[],!1,null,null,null);e.default=h.exports},"3Hfo":function(t,e,o){"use strict";var n=o("8CHY");e.a={methods:{filter:function(t){var e=this,o="";return["label","description","localPlaceholder"].forEach(function(t){o+=e.$locale.translate(e[t])}),Object(n.a)(o,t)}}}},"4feL":function(t,e){for(var o=[],n=0;n<256;++n)o[n]=(n+256).toString(16).substr(1);t.exports=function(t,e){var n=e||0,a=o;return[a[t[n++]],a[t[n++]],a[t[n++]],a[t[n++]],"-",a[t[n++]],a[t[n++]],"-",a[t[n++]],a[t[n++]],"-",a[t[n++]],a[t[n++]],"-",a[t[n++]],a[t[n++]],a[t[n++]],a[t[n++]],a[t[n++]],a[t[n++]]].join("")}},"8CHY":function(t,e,o){"use strict";o.d(e,"a",function(){return s});o("asZ9");var n={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","ẞ":"SS","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ɶ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ſ":"s","ẛ":"s","ß":"ss","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","０":"0","₀":"0","⓪":"0","⁰":"0","¹":"1","⑴":"1","₁":"1","❶":"1","⓵":"1","⒈":"1","①":"1","１":"1","²":"2","❷":"2","⑵":"2","２":"2","₂":"2","⓶":"2","②":"2","⒉":"2","³":"3","３":"3","⒊":"3","⑶":"3","₃":"3","❸":"3","⓷":"3","③":"3","⓸":"4","④":"4","⒋":"4","４":"4","⁴":"4","₄":"4","❹":"4","⑷":"4","⒌":"5","₅":"5","⓹":"5","⑸":"5","❺":"5","⑤":"5","５":"5","⁵":"5","⑹":"6","⁶":"6","６":"6","❻":"6","₆":"6","⑥":"6","⓺":"6","⒍":"6","７":"7","⁷":"7","❼":"7","⓻":"7","⒎":"7","₇":"7","⑺":"7","⑦":"7","⑧":"8","⒏":"8","⓼":"8","⑻":"8","⁸":"8","８":"8","❽":"8","₈":"8","⓽":"9","９":"9","⒐":"9","❾":"9","⑼":"9","₉":"9","⑨":"9","⁹":"9"},a=function(t){for(var e,o=t.split(""),a=o.length-1,s=!1;a>=0;a--)e=o[a],n[e]&&(o[a]=n[e],s=!0);return s&&(t=o.join("")),t},s=function(t,e){var o=a(t),n=a(e);return-1!==o.toLowerCase().indexOf(n.toLowerCase())||-1!==o.toUpperCase().indexOf(n.toUpperCase())}},A86J:function(t,e,o){"use strict";e.a={directives:{focus:{inserted:function(t,e){e.value&&t.focus()}}},props:{autoFocus:{type:Boolean,default:!1}},watch:{autoFocus:function(t){t&&"function"==typeof this.focus&&this.focus()}},methods:{focus:function(){this.$el&&"function"==typeof this.$el.focus&&this.$el.focus()}}}},HANb:function(t,e,o){},Iptl:function(t,e,o){"use strict";o("GkPX");var n=o("nS/B");e.a={components:{CommonNotice:function(){return o.e(164).then(o.bind(null,"mkLc"))},DocsExample:function(){return o.e(22).then(o.bind(null,"GD02"))},DocsComponentAPI:function(){return o.e(23).then(o.bind(null,"8txu"))}},computed:{doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(n.b)(this.doc,"summary")},version:function(){return Object(n.b)(this.doc,"version")},description:function(){return Object(n.b)(this.doc,"description")},props:function(){return Object(n.a)(this.doc,"prop")},slots:function(){return Object(n.a)(this.doc,"slot")},events:function(){return Object(n.a)(this.doc,"event")},methods:function(){return Object(n.a)(this.doc,"method")}},mounted:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},We69:function(t,e){var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(o){var n=new Uint8Array(16);t.exports=function(){return o(n),n}}else{var a=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),a[e]=t>>>((3&e)<<3)&255;return a}}},"ZM2+":function(t,e,o){"use strict";o.r(e);var n=o("Iptl"),a=o("+p0e"),s={name:"FormColumnsLayout",mixins:[n.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormColumnsLayout",value:void 0,component:a.default,example:{name:{type:"input"},hidden:{default:!1,type:"checkbox"},availableWidgets:{default:{Dummy1:{Config:{Collapsed:0},Title:"Dummy 1",Name:"Dummy1"},Dummy2:{Config:{Collapsed:0},Title:"Dummy 2",Name:"Dummy2"},Dummy3:{Config:{Collapsed:0},Title:"Dummy3",Name:"Dummy3"}},type:"object"},columnLayout:{type:"select",options:["OneColumn","TwoColumn","ThreeColumn"],default:"OneColumn"},hideDescription:{default:!1,type:"checkbox"},error:{type:"input"},label:{type:"input"},labelSrOnly:{type:"checkbox",default:!1},description:{type:"input"}}}}},i=o("psIG"),l=Object(i.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"DesignSystem__Main"},[o("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),o("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),o("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[o("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),o("b-tabs",{staticClass:"DesignSystem__TabContent"},[o("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[o("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),o("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[o("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=l.exports},oswe:function(t,e,o){"use strict";var n=o("HANb");o.n(n).a}}]);