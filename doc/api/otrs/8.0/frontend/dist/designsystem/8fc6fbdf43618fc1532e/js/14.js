(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3,18,162],{"3Hfo":function(e,t,n){"use strict";var i=n("8CHY");t.a={methods:{filter:function(e){var t=this,n="";return["label","description","localPlaceholder"].forEach(function(e){n+=t.$locale.translate(t[e])}),Object(i.a)(n,e)}}}},"5v/B":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(e,t,n){this.name=e,this.version=t,this.os=n}}();t.BrowserInfo=n;var i=function(){return function(t){this.version=t,this.name="node",this.os=e.platform}}();t.NodeInfo=i;var o=function(){return function(){this.bot=!0,this.name="bot",this.version=null,this.os=null}}();t.BotInfo=o;var r=3,a=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["vivaldi",/Vivaldi\/([0-9\.]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/Edg\/([0-9\.]+)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],s=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/],["Search Bot",/(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]];function l(e){var t=""!==e&&a.reduce(function(t,n){var i=n[0],o=n[1];if(t)return t;var r=o.exec(e);return!!r&&[i,r]},!1);if(!t)return null;var i=t[0],s=t[1];if("searchbot"===i)return new o;var l=s[1]&&s[1].split(/[._]/).slice(0,3);return l?l.length<r&&(l=l.concat(function(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}(r-l.length))):l=[],new n(i,l.join("."),d(e))}function d(e){for(var t=0,n=s.length;t<n;t++){var i=s[t],o=i[0];if(i[1].test(e))return o}return null}function c(){return void 0!==e&&e.version?new i(e.version.slice(1)):null}t.detect=function(){return"undefined"!=typeof navigator?l(navigator.userAgent):c()},t.parseUserAgent=l,t.detectOS=d,t.getNodeVersion=c}).call(this,n("5IsQ"))},A86J:function(e,t,n){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}},BFW2:function(e,t,n){"use strict";var i=n("qEle");n.n(i).a},GJff:function(e,t,n){"use strict";n.r(t);n("GkPX");var i=n("m9dD"),o=n("5v/B"),r=n("A86J"),a=n("3Hfo"),s=Object(o.detect)(),l={name:"FormEditor",mixins:[r.a,a.a],props:{value:{type:String},name:{type:String},formId:{type:String,required:!0},uploadPath:{type:String,required:!0},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1},testMode:{type:Boolean,default:!1}},data:function(){return{instance:null,ckFinderInitialized:!1}},computed:{fieldId:function(){return"formEditor-".concat(this._uid)},supported:function(){return s&&"ie"!==s.name},content:{get:function(){return this.value},set:function(e,t){"<p>&nbsp;</p>"===e&&(e=null),this.$emit("input",e,t)}}},watch:{value:function(){this.supported&&(null!==this.value&&void 0!==this.value?this.instance.getData()!==this.value&&this.instance.setData(this.value):this.instance.setData(""))},formId:function(){this.supported&&!this.testMode&&(null!==this.instance?this.initCkFinder():this.ckFinderInitialized=!1)}},mounted:function(){var e=this;this.supported&&n.e(170).then(n.t.bind(null,"dUKf",7)).then(function(t){var n=e.testMode?void 0:"/api/".concat(e.uploadPath,"/").concat(e.formId);t.default.create(e.$refs.formEditor,{toolbar:["heading","bold","italic","link","bulletedList","numberedList","blockQuote","imageUpload"],heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"}]},ckfinder:{uploadUrl:n}}).then(function(t){e.instance=t,e.testMode?e.instance.plugins.get("FileRepository").createUploadAdapter=function(){return new i.default}:e.ckFinderInitialized||e.initCkFinder(),null===e.content||void 0===e.content?e.instance.setData(""):e.instance.setData(e.content),t.model.document.on("change",function(){e.content=t.getData()}),e.autoFocus&&e.$refs.formEditor.focus()}).catch(function(t){e.$log.error(t)})})},destroyed:function(){var e=this;void 0!==this.instance&&null!==this.instance&&this.instance.destroy().catch(function(t){e.$log.error(t)})},methods:{labelClick:function(e){this.supported&&"LABEL"===e.target.tagName&&this.$refs.formEditor.focus()},initCkFinder:function(){this.instance.config.set("ckfinder.uploadUrl","/api/".concat(this.uploadPath,"/").concat(this.formId)),this.instance.plugins._plugins.get("CKFinderUploadAdapter").init(),this.ckFinderInitialized=!0}}},d=(n("BFW2"),n("psIG")),c=Object(d.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,label:e._f("translate")(e.label),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error)},nativeOn:{click:function(t){return e.labelClick(t)}}},[e.label&&e.description&&e.hideDescription?[n("template",{slot:"label"},[e._v("\n            "+e._s(e._f("translate")(e.label))+"\n            "),n("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],attrs:{title:e._f("translate")(e.description)}},[n("CommonIcon",{staticClass:"mx-2 Font--Small",attrs:{weight:"regular",icon:"messages-bubble-square-information"}})],1)],1),e._v(" "),n("template",{slot:"description"},[n("small",{staticClass:"sr-only"},[e._v("\n                "+e._s(e._f("translate")(e.description))+"\n            ")])])]:e._e(),e._v(" "),e.supported?n("div",{ref:"formEditor",staticClass:"form-editor",attrs:{id:e.fieldId,name:e.name,value:e.content}}):n("b-textarea",{staticClass:"form-editor",attrs:{id:e.fieldId,name:e.name},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],2)},[],!1,null,null,null);t.default=c.exports},m9dD:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});n("DbwS"),n("t91x");var i=n("SDJZ"),o=n.n(i),r=n("NToG"),a=n.n(r),s=function(){function e(){o()(this,e)}return a()(e,[{key:"upload",value:function(){return Promise.resolve([])}}]),e}()},qEle:function(e,t,n){}}]);