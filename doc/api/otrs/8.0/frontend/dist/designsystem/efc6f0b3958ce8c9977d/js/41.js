(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"5v/B":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0});var t=function(){return function(e,n,t){this.name=e,this.version=n,this.os=t}}();n.BrowserInfo=t;var i=function(){return function(n){this.version=n,this.name="node",this.os=e.platform}}();n.NodeInfo=i;var o=function(){return function(){this.bot=!0,this.name="bot",this.version=null,this.os=null}}();n.BotInfo=o;var a=3,s=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["vivaldi",/Vivaldi\/([0-9\.]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/Edg\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],l=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/],["Search Bot",/(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]];function r(e){var n=""!==e&&s.reduce(function(n,t){var i=t[0],o=t[1];if(n)return n;var a=o.exec(e);return!!a&&[i,a]},!1);if(!n)return null;var i=n[0],l=n[1];if("searchbot"===i)return new o;var r=l[1]&&l[1].split(/[._]/).slice(0,3);return r?r.length<a&&(r=r.concat(function(e){for(var n=[],t=0;t<e;t++)n.push("0");return n}(a-r.length))):r=[],new t(i,r.join("."),c(e))}function c(e){for(var n=0,t=l.length;n<t;n++){var i=l[n],o=i[0];if(i[1].test(e))return o}return null}function d(){return void 0!==e&&e.version?new i(e.version.slice(1)):null}n.detect=function(e){return e?r(e):"undefined"!=typeof navigator?r(navigator.userAgent):d()},n.parseUserAgent=r,n.detectOS=c,n.getNodeVersion=d}).call(this,t("5IsQ"))},IA8J:function(e,n,t){"use strict";t("9ovy"),t("J8hF"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO");n.a=function(e){var n={image:{name:"Image",icon:"image-file-landscape"},audio:{name:"Audio",icon:"audio-file"},video:{name:"Video",icon:"video-file-camera"},"application/pdf":{name:"PDF",icon:"office-file-pdf"},"application/msword":{name:"Document",icon:"office-file-doc"},"application/vnd.ms-word":{name:"Document",icon:"office-file-doc"},"application/vnd.oasis.opendocument.text":{name:"Document",icon:"office-file-doc"},"application/vnd.openxmlformats-officedocument.wordprocessingml":{name:"Document",icon:"office-file-doc"},"application/vnd.ms-excel":{name:"Spreadsheet",icon:"office-file-xls"},"application/vnd.openxmlformats-officedocument.spreadsheetml":{name:"Spreadsheet",icon:"office-file-xls"},"application/vnd.oasis.opendocument.spreadsheet":{name:"Spreadsheet",icon:"office-file-xls"},"application/vnd.ms-powerpoint":{name:"Presentation",icon:"office-file-ppt"},"application/vnd.openxmlformats-officedocument.presentationml":{name:"Presentation",icon:"office-file-ppt"},"application/vnd.oasis.opendocument.presentation":{name:"Presentation",icon:"office-file-ppt"},"text/plain":{name:"Text",icon:"common-file-text"},"text/html":{name:"HTML",icon:"file-code"},"application/json":{name:"JSON",icon:"file-code-1"},"text/calendar":{name:"Calendar",icon:"time-clock-file-1"},"application/gzip":{name:"ZIP",icon:"zip-file"},"application/zip":{name:"ZIP",icon:"zip-file"}},t={name:"File",icon:"common-file-empty"};return void 0!==e&&Object.keys(n).forEach(function(i){var o=new RegExp(i);e.match(o)&&(t=n[i])}),t}},Ko5F:function(e,n,t){"use strict";var i=t("u0g0");t.n(i).a},YdGJ:function(e,n,t){"use strict";t.r(n);t("GkPX"),t("asZ9"),t("e2Kn");var i=t("5v/B"),o=t("IA8J"),a=Object(i.detect)(),s={name:"CommonDownload",props:{variant:{type:String,default:"full"},columnSize:{type:Number,default:null},url:{type:String,required:!0},isExternal:{type:Boolean,default:!1},filename:{type:String,required:!0},filesize:{type:String},contentType:{type:String},additionalValues:{type:Object},downloadType:{type:String}},computed:{filetypeSimple:function(){return Object(o.a)(this.contentType)}},methods:{download:function(){var e=this;this.clientSendRequest({Path:this.url,Method:"head"}).then(function(){var n=document.createElement("a"),t=e.$store.getters.serverInfo,i=e.url.split("?");n.href="".concat(t.protocol,"//").concat(t.hostname,":").concat(t.port).concat(t.prefixPath,"/api")+"".concat(i[0]),a&&"ie"===a.name||e.downloadType&&"inline"===e.downloadType?n.setAttribute("target","_blank"):(n.href+="/download",n.setAttribute("download",e.filename)),i[1]&&(n.href+="?".concat(i[1])),document.body.appendChild(n),n.click(),n.remove()}).catch(function(){e.$bus.$emit("showToastMessage",{id:"downloadError",heading:"An error occurred while downloading.",text:"The file could not be downloaded from the server.",variant:"danger",persistent:!0})})}}},l=(t("Ko5F"),t("psIG")),r=Object(l.a)(s,function(){var e=this,n=e.$createElement,t=e._self._c||n;return"simple"!=e.variant||e.isExternal?"simple"==e.variant&&e.isExternal?t("span",{staticClass:"DownloadSimple"},[t("CommonLink",{staticClass:"btn btn-secondary Button Button--Secondary",attrs:{link:e.url,target:"_blank","is-external":""}},[t("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"attachment"}}),e._v("\n        "+e._s(e.filename)+"\n        "),e.filesize?t("span",{staticClass:"Filesize"},[e._v("\n            ("+e._s(e._f("filesize")(e.filesize))+")\n        ")]):e._e()],1)],1):"plain"==e.variant?t("b-col",{staticClass:"Download DownloadPlain",attrs:{md:e.columnSize}},[t("b-row",[t("b-col",[t("ul",{staticClass:"small list-unstyled"},[t("li",{staticClass:"text-truncate Filename"},[e._v("\n                    "+e._s(e._f("translate")("Name"))+":\n                    "),t("span",{attrs:{title:e.filename}},[e._v("\n                        "+e._s(e.filename)+"\n                    ")])]),e._v(" "),e.contentType?t("li",{staticClass:"Filetype",attrs:{title:e.contentType}},[e._v("\n                    "+e._s(e._f("translate")("Type"))+":\n                    "),t("span",[e._v(e._s(e.filetypeSimple.name))])]):e._e(),e._v(" "),e.filesize?t("li",{staticClass:"Filesize"},[e._v("\n                    "+e._s(e._f("translate")("Size"))+":\n                    "),t("span",[e._v(e._s(e._f("filesize")(e.filesize)))])]):e._e(),e._v(" "),e._l(e.additionalValues,function(n,i){return t("li",{key:i},[e._v("\n                    "+e._s(e._f("translate")(i))+":\n                    "),t("span",[e._v(e._s(n))])])})],2)]),e._v(" "),t("b-col",{attrs:{md:"12"}},[e.isExternal?t("CommonLink",{staticClass:"btn btn-primary btn-block Button Button--PrimaryInverted",attrs:{link:e.url,target:"_blank","is-external":""}},[t("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"attachment"}}),e._v("\n                "+e._s(e._f("translate")("Download File"))+"\n            ")],1):t("a",{staticClass:"btn btn-primary btn-block Button Button--PrimaryInverted",attrs:{href:""},on:{click:function(n){return n.preventDefault(),e.download(n)}}},[t("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"attachment"}}),e._v("\n                "+e._s(e._f("translate")("Download File"))+"\n            ")],1)],1)],1)],1):t("b-col",{staticClass:"Download DownloadFull",attrs:{md:e.columnSize}},[t("div",{staticClass:"border"},[t("b-row",[t("b-col",{staticClass:"text-right",attrs:{cols:"2"}},[t("CommonIcon",{staticClass:"mr-2",attrs:{icon:e.filetypeSimple.icon,weight:"bold",size:"2x"}})],1),e._v(" "),t("b-col",{attrs:{cols:"10"}},[t("ul",{staticClass:"small list-unstyled"},[t("li",{staticClass:"text-truncate Filename"},[e._v("\n                        "+e._s(e._f("translate")("Name"))+":\n                        "),t("span",{attrs:{title:e.filename}},[e._v("\n                            "+e._s(e.filename)+"\n                        ")])]),e._v(" "),e.contentType?t("li",{staticClass:"Filetype",attrs:{title:e.contentType}},[e._v("\n                        "+e._s(e._f("translate")("Type"))+":\n                        "),t("span",[e._v(e._s(e.filetypeSimple.name))])]):e._e(),e._v(" "),e.filesize?t("li",{staticClass:"Filesize"},[e._v("\n                        "+e._s(e._f("translate")("Size"))+":\n                        "),t("span",[e._v(e._s(e._f("filesize")(e.filesize)))])]):e._e(),e._v(" "),e._l(e.additionalValues,function(n,i){return t("li",{key:i},[e._v("\n                        "+e._s(e._f("translate")(i))+":\n                        "),t("span",[e._v(e._s(n))])])})],2)]),e._v(" "),t("b-col",{attrs:{md:"12"}},[e.isExternal?t("CommonLink",{staticClass:"btn btn-primary btn-block Button Button--PrimaryInverted",attrs:{link:e.url,target:"_blank","is-external":""}},[t("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"attachment"}}),e._v("\n                    "+e._s(e._f("translate")("Download File"))+"\n                ")],1):t("a",{staticClass:"btn btn-primary btn-block Button Button--PrimaryInverted",attrs:{href:""},on:{click:function(n){return n.preventDefault(),e.download(n)}}},[t("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"attachment"}}),e._v("\n                    "+e._s(e._f("translate")("Download File"))+"\n                ")],1)],1)],1)],1)]):t("span",{staticClass:"DownloadSimple",on:{click:function(n){return n.preventDefault(),e.download(n)}}},[t("a",{staticClass:"d-inline-block btn btn-secondary Button Button--Secondary",attrs:{title:e.filename,href:"#"}},[t("CommonIcon",{staticClass:"mr-2",attrs:{weight:"bold",icon:"attachment"}}),e._v(" "),t("span",{staticClass:"align-text-bottom d-inline-block text-truncate",staticStyle:{"max-width":"200px"}},[e._v("\n            "+e._s(e.filename)+"\n        ")]),e._v(" "),e.filesize?t("span",{staticClass:"align-text-bottom d-inline-block Filesize"},[e._v("\n            ("+e._s(e._f("filesize")(e.filesize))+")\n        ")]):e._e()],1)])},[],!1,null,null,null);n.default=r.exports},u0g0:function(e,n,t){}}]);