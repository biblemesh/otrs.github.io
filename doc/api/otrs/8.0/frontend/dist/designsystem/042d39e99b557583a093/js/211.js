(window.webpackJsonp=window.webpackJsonp||[]).push([[211,56,246,363,387,388],{"+J7U":function(t,e,n){var o,i,a=n("We69"),r=n("4feL"),s=0,c=0;t.exports=function(t,e,n){var l=e&&n||0,u=e||[],p=(t=t||{}).node||o,f=void 0!==t.clockseq?t.clockseq:i;if(null==p||null==f){var d=a();null==p&&(p=o=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==f&&(f=i=16383&(d[6]<<8|d[7]))}var m=void 0!==t.msecs?t.msecs:(new Date).getTime(),h=void 0!==t.nsecs?t.nsecs:c+1,v=m-s+(h-c)/1e4;if(v<0&&void 0===t.clockseq&&(f=f+1&16383),(v<0||m>s)&&void 0===t.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=m,c=h,i=f;var b=(1e4*(268435455&(m+=122192928e5))+h)%4294967296;u[l++]=b>>>24&255,u[l++]=b>>>16&255,u[l++]=b>>>8&255,u[l++]=255&b;var O=m/4294967296*1e4&268435455;u[l++]=O>>>8&255,u[l++]=255&O,u[l++]=O>>>24&15|16,u[l++]=O>>>16&255,u[l++]=f>>>8|128,u[l++]=255&f;for(var y=0;y<6;++y)u[l+y]=p[y];return e||r(u)}},"3Hfo":function(t,e,n){"use strict";var o=n("8CHY");e.a={methods:{filter:function(t){var e=this,n="";n+=this.$locale.translate(this.label,this.labelPlaceholder);return["description","localPlaceholder"].forEach(function(t){n+=e.$locale.translate(e[t])}),Object(o.a)(n,t)}}}},"4feL":function(t,e){for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);t.exports=function(t,e){var o=e||0,i=n;return[i[t[o++]],i[t[o++]],i[t[o++]],i[t[o++]],"-",i[t[o++]],i[t[o++]],"-",i[t[o++]],i[t[o++]],"-",i[t[o++]],i[t[o++]],"-",i[t[o++]],i[t[o++]],i[t[o++]],i[t[o++]],i[t[o++]],i[t[o++]]].join("")}},"5ZVq":function(t,e,n){"use strict";n.r(e);n("U8p0"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO");var o=n("VixF"),i=n("8CHY"),a={name:"FormNotificationEvents",components:{CommonCheckIcon:function(){return n.e(23).then(n.bind(null,"70Qt"))}},mixins:[o.a],props:{value:{type:Object},name:{type:String,default:""},label:{type:String},labelPlaceholder:{type:Array},description:{type:String},error:{type:String},hidden:{type:Boolean,default:!1},transports:{type:Object,required:!0},notifications:{type:Object,required:!0}},data:function(){return{localValue:null,oldLocalValue:null,runningInput:!1}},computed:{transportsList:function(){var t=this;return Object.keys(this.transports).map(function(e){return t.transports[e]}).sort(function(t,e){return t.Prio-e.Prio})},notificationsList:function(){var t=this;return Object.keys(this.notifications).map(function(e){return t.notifications[e]}).sort(function(t,e){var n=t.Name.toLowerCase(),o=e.Name.toLowerCase();return n<o?-1:n>o?1:0})},anyNotificationWithRequired:function(){var t=!1;return this.notificationsList.forEach(function(e){return!e.Required||(t=!0,!1)}),t}},watch:{value:function(){this.buildLocalValue()}},created:function(){this.buildLocalValue()},methods:{onInput:function(t,e,n){var o=this;this.runInput(function(){o.setValue(t,e,n),o.emitValue()})},onTransportInput:function(t,e){var n=this;this.runInput(function(){n.notificationsList.forEach(function(o){n.isNotificationTransportDisabled(o,t)||n.setValue(o,t,e)}),n.emitValue()})},buildLocalValue:function(){var t=this.value&&this.value instanceof Object?JSON.parse(JSON.stringify(this.value)):{};this.localValue=t,this.oldLocalValue=JSON.parse(JSON.stringify(t))},emitValue:function(){var t=this,e=function(){var e=JSON.parse(JSON.stringify(t.localValue)),n=JSON.parse(JSON.stringify(e));t.$emit("input",e,t.oldLocalValue),t.oldLocalValue=n};return this.oldLocalValue?Object.keys(this.localValue).length!==Object.keys(this.oldLocalValue).length?e():(Object.keys(this.localValue).every(function(n){return Object.prototype.hasOwnProperty.call(t.oldLocalValue,n)&&t.localValue[n]===t.oldLocalValue[n]||(e(),!1)}),null):e()},notificationTransportValue:function(t,e){if(this.isNotificationTransportDisabled(t,e))return!1;var n=this.localValue[t.ID]||{};return Object.prototype.hasOwnProperty.call(n,e.Name)?Boolean(n[e.Name]):Boolean(t.EnabledTransports[e.Name])},isNotificationTransportDisabled:function(t,e){return!t.Transports[e.Name]},isTransportDisabled:function(t){var e=this,n=!0;return this.notificationsList.forEach(function(o){return!!e.isNotificationTransportDisabled(o,t)||(n=!1,!1)}),n},transportValue:function(t){var e=this,n=!0;return this.notificationsList.forEach(function(o){var i=e.isNotificationTransportDisabled(o,t),a=e.notificationTransportValue(o,t);return!(!i&&!a)||(n=!1,!1)}),n},setValue:function(t,e,n){var o=this.localValue[t.ID]||{};if(!n&&t.Required){var i=!1;if(this.transportsList.forEach(function(t){return t.Name===e.Name||(!Object.prototype.hasOwnProperty.call(o,t.Name)||!o[t.Name]||(i=!0,!1))}),!i)return!1}return o[e.Name]=n?1:0,this.$set(this.localValue,t.ID,o),!0},filter:function(t){var e=this,n="";n+=this.$locale.translate(this.label,this.labelPlaceholder);return["description"].forEach(function(t){n+=e.$locale.translate(e[t])}),this.notificationsList.forEach(function(t){n+=t.Name+t.Description}),Object(i.a)(n,t)},runInput:function(t){var e=this;this.runningInput||(this.runningInput=!0,t(),this.$nextTick(function(){e.runningInput=!1}))}}},r=(n("Fc5e"),n("psIG")),s=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!hidden"}],attrs:{state:!Boolean(t.error)&&null,"invalid-feedback":t._f("translate")(t.error),"aria-label":t._f("translate")(t.label,t.labelPlaceholder)}},[n("table",{staticClass:"table table-sm"},[n("thead",[n("tr",[n("th",{staticClass:"LabelCol",attrs:{scope:"col"}},[n("label",[t._v(t._s(t._f("translate")(t.label,t.labelPlaceholder)))]),t._v(" "),t.description?n("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],attrs:{title:t._f("translate")(t.description)}},[n("CommonIcon",{staticClass:"mx-2 Font--Small",attrs:{weight:"regular",icon:"messages-bubble-square-information"}})],1):t._e()],1),t._v(" "),n("th",{staticClass:"SelectAllCol"},[t._v("\n                    "+t._s(t._f("translate")("all/none"))+"\n                ")]),t._v(" "),t._l(t.transportsList,function(e){return n("th",{key:e.Name,staticClass:"IconCol text-center",attrs:{scope:"col"}},[n("CommonCheckIcon",{attrs:{title:e.Name,name:"Transport-"+e.Name,"weight-with-icon":e.CommonIcon,disabled:t.isTransportDisabled(e),value:t.transportValue(e)},on:{input:function(n){return t.onTransportInput(e,n)}}})],1)})],2)]),t._v(" "),n("tbody",t._l(t.notificationsList,function(e){return n("tr",{key:e.ID},[n("td",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],attrs:{title:t._f("translate")(e.Description)}},[1==e.Required?n("span",[t._v("\n                        *\n                    ")]):t._e(),t._v(t._s(t._f("translate")(e.Name))+"\n                ")]),t._v(" "),n("td"),t._v(" "),t._l(t.transportsList,function(o){return n("td",{key:e.ID+"-"+o.Name,staticClass:"text-center"},[n("CommonCheckIcon",{attrs:{name:"Notification-"+e.ID+"-"+o.Name,"weight-with-icon":o.CommonIcon,value:t.notificationTransportValue(e,o),disabled:t.isNotificationTransportDisabled(e,o)},on:{input:function(n){return t.onInput(e,o,n)}}})],1)})],2)}),0),t._v(" "),t.anyNotificationWithRequired?n("tfoot",{staticClass:"RequiredHint"},[n("tr",[n("td",{attrs:{colspan:2+t.transportsList.length}},[t._v("\n                    * "+t._s(t._f("translate")("To activate this notification, at least one transport method must be activated."))+"\n                ")])])]):t._e()])])},[],!1,null,null,null);e.default=s.exports},"8CHY":function(t,e,n){"use strict";n.d(e,"a",function(){return a});n("asZ9");var o={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","ẞ":"SS","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ɶ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ſ":"s","ẛ":"s","ß":"ss","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","０":"0","₀":"0","⓪":"0","⁰":"0","¹":"1","⑴":"1","₁":"1","❶":"1","⓵":"1","⒈":"1","①":"1","１":"1","²":"2","❷":"2","⑵":"2","２":"2","₂":"2","⓶":"2","②":"2","⒉":"2","³":"3","３":"3","⒊":"3","⑶":"3","₃":"3","❸":"3","⓷":"3","③":"3","⓸":"4","④":"4","⒋":"4","４":"4","⁴":"4","₄":"4","❹":"4","⑷":"4","⒌":"5","₅":"5","⓹":"5","⑸":"5","❺":"5","⑤":"5","５":"5","⁵":"5","⑹":"6","⁶":"6","６":"6","❻":"6","₆":"6","⑥":"6","⓺":"6","⒍":"6","７":"7","⁷":"7","❼":"7","⓻":"7","⒎":"7","₇":"7","⑺":"7","⑦":"7","⑧":"8","⒏":"8","⓼":"8","⑻":"8","⁸":"8","８":"8","❽":"8","₈":"8","⓽":"9","９":"9","⒐":"9","❾":"9","⑼":"9","₉":"9","⑨":"9","⁹":"9"},i=function(t){for(var e,n=t.split(""),i=n.length-1,a=!1;i>=0;i--)e=n[i],o[e]&&(n[i]=o[e],a=!0);return a&&(t=n.join("")),t},a=function(t,e){var n=i(t),o=i(e);return-1!==n.toLowerCase().indexOf(o.toLowerCase())||-1!==n.toUpperCase().indexOf(o.toUpperCase())}},A86J:function(t,e,n){"use strict";e.a={directives:{focus:{inserted:function(t,e){e.value&&t.focus()}}},props:{autoFocus:{type:Boolean,default:!1}},watch:{autoFocus:function(t){t&&"function"==typeof this.focus&&this.focus()}},methods:{focus:function(){this.$el&&"function"==typeof this.$el.focus&&this.$el.focus()}}}},Fc5e:function(t,e,n){"use strict";var o=n("Zdip");n.n(o).a},Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),i=n.n(o),a=n("nS/B"),r=n("lOrp");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}e.a={components:{CommonNotice:function(){return n.e(338).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(68).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(70).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach(function(e){i()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(a.b)(this.doc,"summary")},version:function(){return Object(a.b)(this.doc,"version")},description:function(){return Object(a.b)(this.doc,"description")},props:function(){return Object(a.a)(this.doc,"prop")},slots:function(){return Object(a.a)(this.doc,"slot")},events:function(){return Object(a.a)(this.doc,"event")},methods:function(){return Object(a.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(r.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},VixF:function(t,e,n){"use strict";var o=n("A86J"),i=n("3Hfo"),a=n("rpZP");e.a={mixins:[o.a,i.a,{computed:{localPlaceholder:function(){if(!this.placeholder)return"";var t=this.$locale.translate(this.placeholder);return this.labelSrOnly&&this.required&&(t="".concat(t,"*")),t}}},a.a],mounted:function(){var t=this;this.$nextTick(function(){t.$emit("loaded")})}}},We69:function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var o=new Uint8Array(16);t.exports=function(){return n(o),o}}else{var i=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),i[e]=t>>>((3&e)<<3)&255;return i}}},Zdip:function(t,e,n){},rpZP:function(t,e,n){"use strict";var o=n("+J7U"),i=n.n(o);e.a={data:function(){return{uuid:this.getUuid()}},methods:{getUuid:function(){return i()()}}}},sg6I:function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),i=n("5ZVq"),a={name:"FormNotificationEvents",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormNotificationEvents",value:void 0,component:i.default,example:{name:{type:"input"},error:{type:"input"},label:{default:"dummy notifications",type:"input"},description:{default:"dummy description",type:"input"},hidden:{default:!1,type:"checkbox"},transports:{default:{Email:{CommonIcon:"regular,envelope",Name:"Email",Prio:1},SMS:{CommonIcon:"regular,mobile-phone",Name:"SMS",Prio:2}},type:"object"},notifications:{default:{1:{Description:"Description for notification 1",EnabledTransports:{Email:1},ID:"1",Name:"Notification 1",Transports:{Email:1,SMS:1}},2:{Description:"Description for notification 2",EnabledTransports:{},ID:"2",Name:"Notification 2",Transports:{Email:1}}},type:"object"}}}}},r=n("psIG"),s=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=s.exports}}]);