(window.webpackJsonp=window.webpackJsonp||[]).push([[177,42],{"5v/B":function(t,e,n){"use strict";(function(t){var n=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var o=Array(t),i=0;for(e=0;e<n;e++)for(var a=arguments[e],s=0,r=a.length;s<r;s++,i++)o[i]=a[s];return o};Object.defineProperty(e,"__esModule",{value:!0});var o=function(){return function(t,e,n){this.name=t,this.version=e,this.os=n}}();e.BrowserInfo=o;var i=function(){return function(e){this.version=e,this.name="node",this.os=t.platform}}();e.NodeInfo=i;var a=function(){return function(){this.bot=!0,this.name="bot",this.version=null,this.os=null}}();e.BotInfo=a;var s=3,r=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["vivaldi",/Vivaldi\/([0-9\.]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/Edg\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],l=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/],["Search Bot",/(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]];function c(t){var e=""!==t&&r.reduce(function(e,n){var o=n[0],i=n[1];if(e)return e;var a=i.exec(t);return!!a&&[o,a]},!1);if(!e)return null;var i=e[0],l=e[1];if("searchbot"===i)return new a;var c=l[1]&&l[1].split(/[._]/).slice(0,3);return c?c.length<s&&(c=n(c,function(t){for(var e=[],n=0;n<t;n++)e.push("0");return e}(s-c.length))):c=[],new o(i,c.join("."),m(t))}function m(t){for(var e=0,n=l.length;e<n;e++){var o=l[e],i=o[0];if(o[1].test(t))return i}return null}function p(){return void 0!==t&&t.version?new i(t.version.slice(1)):null}e.detect=function(t){return t?c(t):"undefined"!=typeof navigator?c(navigator.userAgent):p()},e.parseUserAgent=c,e.detectOS=m,e.getNodeVersion=p}).call(this,n("5IsQ"))},IA8J:function(t,e,n){"use strict";n("9ovy"),n("J8hF"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO");e.a=function(t){var e={image:{name:"Image",icon:"image-file-landscape"},audio:{name:"Audio",icon:"audio-file"},video:{name:"Video",icon:"video-file-camera"},"application/pdf":{name:"PDF",icon:"office-file-pdf"},"application/msword":{name:"Document",icon:"office-file-doc"},"application/vnd.ms-word":{name:"Document",icon:"office-file-doc"},"application/vnd.oasis.opendocument.text":{name:"Document",icon:"office-file-doc"},"application/vnd.openxmlformats-officedocument.wordprocessingml":{name:"Document",icon:"office-file-doc"},"application/vnd.ms-excel":{name:"Spreadsheet",icon:"office-file-xls"},"application/vnd.openxmlformats-officedocument.spreadsheetml":{name:"Spreadsheet",icon:"office-file-xls"},"application/vnd.oasis.opendocument.spreadsheet":{name:"Spreadsheet",icon:"office-file-xls"},"application/vnd.ms-powerpoint":{name:"Presentation",icon:"office-file-ppt"},"application/vnd.openxmlformats-officedocument.presentationml":{name:"Presentation",icon:"office-file-ppt"},"application/vnd.oasis.opendocument.presentation":{name:"Presentation",icon:"office-file-ppt"},"text/plain":{name:"Text",icon:"common-file-text"},"text/html":{name:"HTML",icon:"file-code"},"application/json":{name:"JSON",icon:"file-code-1"},"text/calendar":{name:"Calendar",icon:"time-clock-file-1"},"application/gzip":{name:"ZIP",icon:"zip-file"},"application/zip":{name:"ZIP",icon:"zip-file"}},n={name:"File",icon:"common-file-empty-alternate"};return void 0!==t&&Object.keys(e).every(function(o){var i=new RegExp(o);return!t.match(i)||(n=e[o],!1)}),n}},Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),i=n.n(o),a=n("nS/B"),s=n("lOrp");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}e.a={components:{CommonNotice:function(){return n.e(276).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(71).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(73).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){i()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(a.b)(this.doc,"summary")},version:function(){return Object(a.b)(this.doc,"version")},description:function(){return Object(a.b)(this.doc,"description")},props:function(){return Object(a.a)(this.doc,"prop")},slots:function(){return Object(a.a)(this.doc,"slot")},events:function(){return Object(a.a)(this.doc,"event")},methods:function(){return Object(a.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(s.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},Ko5F:function(t,e,n){"use strict";var o=n("u0g0");n.n(o).a},YdGJ:function(t,e,n){"use strict";n.r(e);n("GkPX"),n("asZ9"),n("e2Kn");var o=n("5v/B"),i=n("IA8J"),a=Object(o.detect)(),s={name:"CommonDownload",props:{variant:{type:String,default:"full"},columnSize:{type:Number,default:null},url:{type:String,required:!0},isExternal:{type:Boolean,default:!1},filename:{type:String,required:!0},filesize:{type:String},contentType:{type:String},additionalValues:{type:Object},downloadType:{type:String}},computed:{filetypeSimple:function(){return Object(i.a)(this.contentType)}},methods:{download:function(){var t=this;this.clientSendRequest({Path:this.url,Method:"head"}).then(function(){var e=document.createElement("a"),n=t.$store.getters.serverInfo,o=t.url.split("?");e.href="".concat(n.protocol,"//").concat(n.hostname,":").concat(n.port).concat(n.prefixPath,"/api")+"".concat(o[0]),a&&"ie"===a.name||t.downloadType&&"inline"===t.downloadType?e.setAttribute("target","_blank"):(e.href+="/download",e.setAttribute("download",t.filename)),o[1]&&(e.href+="?".concat(o[1])),document.body.appendChild(e),e.click(),e.remove()}).catch(function(){t.$bus.$emit("showToastMessage",{id:"downloadError",heading:"An error occurred while downloading.",text:"The file could not be downloaded from the server.",variant:"danger",persistent:!0})})}}},r=(n("Ko5F"),n("psIG")),l=Object(r.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return"simple"!==t.variant||t.isExternal?"simple"===t.variant&&t.isExternal?n("span",{staticClass:"DownloadSimple"},[n("CommonLink",{staticClass:"btn btn-secondary Button Button--Secondary",attrs:{link:t.url,target:"_blank","is-external":""}},[n("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"attachment"}}),t._v("\n        "+t._s(t.filename)+"\n        "),t.filesize?n("span",{staticClass:"Filesize"},[t._v("\n            ("+t._s(t._f("filesize")(t.filesize))+")\n        ")]):t._e()],1)],1):"plain"===t.variant?n("b-col",{staticClass:"Download DownloadPlain",attrs:{md:t.columnSize}},[n("b-row",[n("b-col",[n("ul",{staticClass:"small list-unstyled"},[n("li",{staticClass:"text-truncate Filename"},[t._v("\n                    "+t._s(t._f("translate")("Name"))+":\n                    "),n("span",{attrs:{title:t.filename}},[t._v("\n                        "+t._s(t.filename)+"\n                    ")])]),t._v(" "),t.contentType?n("li",{staticClass:"Filetype",attrs:{title:t.contentType}},[t._v("\n                    "+t._s(t._f("translate")("Type"))+":\n                    "),n("span",[t._v(t._s(t._f("translate")(t.filetypeSimple.name)))])]):t._e(),t._v(" "),t.filesize?n("li",{staticClass:"Filesize"},[t._v("\n                    "+t._s(t._f("translate")("Size"))+":\n                    "),n("span",[t._v(t._s(t._f("filesize")(t.filesize)))])]):t._e(),t._v(" "),t._l(t.additionalValues,function(e,o){return n("li",{key:o},[t._v("\n                    "+t._s(t._f("translate")(o))+":\n                    "),n("span",[t._v(t._s(e))])])})],2)]),t._v(" "),n("b-col",{attrs:{md:"12"}},[t.isExternal?n("CommonLink",{staticClass:"btn btn-primary btn-block Button Button--PrimaryInverted",attrs:{link:t.url,target:"_blank","is-external":""}},[n("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"attachment"}}),t._v("\n                "+t._s(t._f("translate")("Download File"))+"\n            ")],1):n("a",{staticClass:"btn btn-primary btn-block Button Button--PrimaryInverted",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.download(e)}}},[n("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"attachment"}}),t._v("\n                "+t._s(t._f("translate")("Download File"))+"\n            ")],1)],1)],1)],1):"icon"===t.variant?n("b-col",{staticClass:"Download DownloadIcon",attrs:{lg:t.columnSize}},[t.isExternal?n("CommonLink",{staticClass:"p-1 d-block text-truncate DownloadIcon__Link",attrs:{link:"#",target:"_blank","is-external":""}},[n("CommonIcon",{staticClass:"mr-1",attrs:{icon:t.filetypeSimple.icon,weight:"bold",size:"lg"}}),t._v(" "),n("span",[t._v("\n            "+t._s(t.filename)+"\n        ")])],1):n("CommonLink",{staticClass:"p-1 d-block text-truncate DownloadIcon__Link",on:{click:function(e){return e.preventDefault(),t.download(e)}}},[n("CommonIcon",{staticClass:"mr-1",attrs:{icon:t.filetypeSimple.icon,weight:"bold",size:"lg"}}),t._v(" "),n("span",[t._v("\n            "+t._s(t.filename)+"\n        ")])],1)],1):n("b-col",{staticClass:"Download DownloadFull",attrs:{md:t.columnSize}},[n("div",{staticClass:"border"},[n("b-row",[n("b-col",{staticClass:"text-right",attrs:{cols:"2"}},[n("CommonIcon",{staticClass:"mr-2",attrs:{icon:t.filetypeSimple.icon,weight:"bold",size:"2x"}})],1),t._v(" "),n("b-col",{attrs:{cols:"10"}},[n("ul",{staticClass:"small list-unstyled"},[n("li",{staticClass:"text-truncate Filename"},[t._v("\n                        "+t._s(t._f("translate")("Name"))+":\n                        "),n("span",{attrs:{title:t.filename}},[t._v("\n                            "+t._s(t.filename)+"\n                        ")])]),t._v(" "),t.contentType?n("li",{staticClass:"Filetype",attrs:{title:t.contentType}},[t._v("\n                        "+t._s(t._f("translate")("Type"))+":\n                        "),n("span",[t._v(t._s(t._f("translate")(t.filetypeSimple.name)))])]):t._e(),t._v(" "),t.filesize?n("li",{staticClass:"Filesize"},[t._v("\n                        "+t._s(t._f("translate")("Size"))+":\n                        "),n("span",[t._v(t._s(t._f("filesize")(t.filesize)))])]):t._e(),t._v(" "),t._l(t.additionalValues,function(e,o){return n("li",{key:o},[t._v("\n                        "+t._s(t._f("translate")(o))+":\n                        "),n("span",[t._v(t._s(e))])])})],2)]),t._v(" "),n("b-col",{attrs:{md:"12"}},[t.isExternal?n("CommonLink",{staticClass:"btn btn-primary btn-block Button Button--PrimaryInverted",attrs:{link:t.url,target:"_blank","is-external":""}},[n("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"attachment"}}),t._v("\n                    "+t._s(t._f("translate")("Download File"))+"\n                ")],1):n("a",{staticClass:"btn btn-primary btn-block Button Button--PrimaryInverted",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.download(e)}}},[n("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"attachment"}}),t._v("\n                    "+t._s(t._f("translate")("Download File"))+"\n                ")],1)],1)],1)],1)]):n("span",{staticClass:"DownloadSimple",on:{click:function(e){return e.preventDefault(),t.download(e)}}},[n("a",{staticClass:"d-inline-block btn btn-secondary Button Button--Secondary",attrs:{title:t.filename,href:"#"}},[n("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"attachment"}}),t._v(" "),n("span",{staticClass:"align-text-bottom d-inline-block text-truncate",staticStyle:{"max-width":"200px"}},[t._v("\n            "+t._s(t.filename)+"\n        ")]),t._v(" "),t.filesize?n("span",{staticClass:"align-text-bottom d-inline-block Filesize"},[t._v("\n            ("+t._s(t._f("filesize")(t.filesize))+")\n        ")]):t._e()],1)])},[],!1,null,null,null);e.default=l.exports},pImI:function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),i=n("YdGJ"),a={name:"CommonDownload",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonDownload",component:i.default,isGlobal:!0,example:{variant:{default:"full",type:"select",options:[{value:"full",text:"full"},{value:"plain",text:"plain"},{value:"icon",text:"icon"},{value:"simple",text:"simple"}]},columnSize:{default:5,type:"input"},url:{default:"/public/knowledge-base/1/attachment/2",type:"input"},filename:{default:"dummy.pdf",type:"input"},filesize:{default:"1024",type:"input"},contentType:{default:"application/pdf",type:"input"},additionalValues:{default:{Example:"Example Text"},type:"object"},downloadType:{default:"attachment",type:"input"}}}}},s=n("psIG"),r=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,"is-global":t.isGlobal,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=r.exports},u0g0:function(t,e,n){}}]);