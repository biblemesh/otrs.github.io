(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{"5v/B":function(o,e,t){"use strict";(function(o){Object.defineProperty(e,"__esModule",{value:!0});var t=function(){return function(o,e,t){this.name=o,this.version=e,this.os=t}}();e.BrowserInfo=t;var i=function(){return function(e){this.version=e,this.name="node",this.os=o.platform}}();e.NodeInfo=i;var n=function(){return function(){this.bot=!0,this.name="bot",this.version=null,this.os=null}}();e.BotInfo=n;var r=3,s=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["vivaldi",/Vivaldi\/([0-9\.]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/Edg\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],a=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/],["Search Bot",/(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]];function l(o){var e=""!==o&&s.reduce(function(e,t){var i=t[0],n=t[1];if(e)return e;var r=n.exec(o);return!!r&&[i,r]},!1);if(!e)return null;var i=e[0],a=e[1];if("searchbot"===i)return new n;var l=a[1]&&a[1].split(/[._]/).slice(0,3);return l?l.length<r&&(l=l.concat(function(o){for(var e=[],t=0;t<o;t++)e.push("0");return e}(r-l.length))):l=[],new t(i,l.join("."),c(o))}function c(o){for(var e=0,t=a.length;e<t;e++){var i=a[e],n=i[0];if(i[1].test(o))return n}return null}function d(){return void 0!==o&&o.version?new i(o.version.slice(1)):null}e.detect=function(o){return o?l(o):"undefined"!=typeof navigator?l(navigator.userAgent):d()},e.parseUserAgent=l,e.detectOS=c,e.getNodeVersion=d}).call(this,t("5IsQ"))},CC0I:function(o,e,t){"use strict";var i=t("ZW6s");t.n(i).a},YBRF:function(o,e,t){"use strict";t.r(e);t("GkPX"),t("oMRA"),t("6d4m");var i=t("F/wX"),n=t.n(i),r=t("5v/B"),s=t("tb9w"),a=t("WlT7"),l=t("rpZP"),c=Object(r.detect)(),d={name:"CommonDebugger",components:{FormButton:function(){return Promise.all([t.e(1),t.e(6)]).then(t.bind(null,"dphA"))},FormSelect:function(){return Promise.all([t.e(0),t.e(2),t.e(253)]).then(t.bind(null,"cDBQ"))},CommonDialog:function(){return t.e(12).then(t.bind(null,"CqLK"))}},mixins:[l.a],props:{app:{type:String,default:"OTRS"}},data:function(){return{minimized:!1,stopped:!1}},computed:{logLevel:{get:function(){return this.$store.getters["Plugins/Store/LoggerOptions/".concat(this.app,"/logLevel")]},set:function(o){s.b.includes(o)&&(this.$store.commit("Plugins/Store/LoggerOptions/".concat(this.app,"/logLevel"),{logLevel:o}),this.$log.info("Log level changed to `".concat(o,"`.")))}},logLevelOptions:function(){return s.b.map(function(o){return{id:o,label:o}})},emptyRecordingModalId:function(){return"emptyRecordingModal-".concat(this.uuid)}},created:function(){var o=this;Object(a.a)(this.$store,this.app),this.$store.getters["Plugins/Store/LoggerOptions/".concat(this.app,"/logRecord")]&&this.$log.info("Log recording started on `".concat(this.logLevel,"` level...")),s.b.forEach(function(e){window[e]=function(){return o.minimized=!1,o.stopped=!1,s.b.includes(e)&&o.$store.commit("Plugins/Store/LoggerOptions/".concat(o.app,"/logLevel"),{logLevel:e}),o.startRecording(),o.$log.info("Log recording started on `".concat(o.logLevel,"` level...")),!0}})},methods:{startRecording:function(){this.$store.commit("Plugins/Store/LoggerOptions/".concat(this.app,"/logRecord"),{logRecord:!0})},stopRecording:function(){this.$store.commit("Plugins/Store/LoggerOptions/".concat(this.app,"/logRecord"),{logRecord:!1})},download:function(){var o=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.$log.recording.length){var e=document.createElement("a"),t=new Blob([JSON.stringify(this.$log.recording,null,4)],{type:"application/json"});c&&"ie"===c.name||this.downloadType&&"inline"===this.downloadType?e.setAttribute("target","_blank"):e.setAttribute("download","debug-".concat(n()().format(),".json")),e.href=window.URL.createObjectURL(t),document.body.appendChild(e),e.click(),window.URL.revokeObjectURL(e.href),e.remove(),this.$log.clear(),o&&(this.stopped=!1)}else this.$refs.emptyRecordingModal.open()},closeDialog:function(){this.$refs.emptyRecordingModal.close(),this.stopped=!1},stop:function(){this.stopRecording(),this.$store.commit("Plugins/Store/LoggerOptions/".concat(this.app,"/logLevel"),{logLevel:"info"}),this.$log.info("Log recording stopped, switched back to `info` level."),this.stopped=!0},minimize:function(){this.minimized=!0},maximize:function(){this.minimized=!1}}},g=(t("CC0I"),t("psIG")),u=Object(g.a)(d,function(){var o=this,e=o.$createElement,t=o._self._c||e;return o.$store.getters["Plugins/Store/LoggerOptions/"+o.app+"/logRecord"]||o.stopped?t("div",{staticClass:"mx-3 my-2 mr-md-4 position-fixed Debugger"},[t("b-row",[o.minimized?t("b-col",{staticClass:"clearfix px-0",attrs:{md:"12"}},[t("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"float-left text-center Debugger--Circle Debugger--Alert",attrs:{title:o._f("translate")("Restore debugger")},on:{click:o.maximize}},[t("CommonIcon",{staticClass:"mt-3",attrs:{weight:"bold",icon:"controls-stop",size:"lg"}})],1)],1):o.stopped?t("b-col",{staticClass:"clearfix px-0",attrs:{md:"12"}},[t("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"float-left text-center Debugger--Circle Debugger--Primary",attrs:{title:o._f("translate")("Download log file")},on:{click:function(e){return o.download(!0)}}},[t("CommonIcon",{staticClass:"mt-3",attrs:{icon:"download-bottom",size:"lg"}})],1)],1):t("b-col",{staticClass:"bg-white mb-3 shadow",attrs:{cols:"12"}},[t("b-row",[t("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"Debugger__Icon",attrs:{title:o._f("translate")("Minimize debugger")},on:{click:o.minimize}},[t("CommonIcon",{attrs:{icon:"arrow-up-1"}})],1)],1),o._v(" "),t("b-row",[t("b-col",[t("div",{staticClass:"pt-2 Animation--Spinner"},[t("div",{staticClass:"bounce1"}),o._v(" "),t("div",{staticClass:"bounce2"}),o._v(" "),t("div",{staticClass:"bounce3"})])])],1),o._v(" "),t("b-row",[t("b-col",[t("p",{staticClass:"pt-4 text-center"},[o._v("\n                        "+o._s(o._f("translate")("Debugging mode active, log is being recorded..."))+"\n                    ")]),o._v(" "),t("p",{staticClass:"text-center"},[t("FormSelect",{attrs:{label:o._f("translate")("Log level"),options:o.logLevelOptions,clearable:!1},model:{value:o.logLevel,callback:function(e){o.logLevel=e},expression:"logLevel"}})],1)])],1),o._v(" "),t("b-row",{staticClass:"mb-3"},[t("b-col",{attrs:{cols:"6"}},[t("FormButton",{attrs:{size:"md",variant:"primary",block:""},on:{click:o.download}},[t("CommonIcon",{staticClass:"mr-2",attrs:{icon:"download-bottom"}}),o._v("\n                        "+o._s(o._f("translate")("Download Log File"))+"\n                    ")],1)],1),o._v(" "),t("b-col",{attrs:{cols:"6"}},[t("FormButton",{staticClass:"Debugger__StopButton",attrs:{size:"md",variant:"danger",block:""},on:{click:o.stop}},[t("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"controls-stop"}}),o._v("\n                        "+o._s(o._f("translate")("Stop Recording"))+"\n                    ")],1)],1)],1)],1)],1),o._v(" "),t("CommonDialog",{ref:"emptyRecordingModal",attrs:{id:o.emptyRecordingModalId,title:o._f("translate")("Empty log recording"),"hide-default-cancel-button":"","footer-class":"pull-right",lazy:""},on:{ok:o.closeDialog}},[o._v("\n        "+o._s(o._f("translate")("The log recording is currently empty. There is nothing to download at the moment."))+"\n    ")])],1):o._e()},[],!1,null,null,null);e.default=u.exports},ZW6s:function(o,e,t){}}]);