(window.webpackJsonp=window.webpackJsonp||[]).push([[7,10],{"3Hfo":function(e,t,n){"use strict";var a=n("8CHY");t.a={methods:{filter:function(e){var t=this,n="";return["label","description","localPlaceholder"].forEach(function(e){n+=t.$locale.translate(t[e])}),Object(a.a)(n,e)}}}},"5v/B":function(e,t,n){(function(t){function n(e){var t=o([["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/],["Search Bot",/(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]]).filter(function(t){return t.rule&&t.rule.test(e)})[0];return t?t.name:null}function a(){return void 0!==t&&t.version&&{name:"node",version:t.version.slice(1),os:t.platform}}function i(e){var t=o([["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["vivaldi",/Vivaldi\/([0-9\.]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)$/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/]]);if(!e)return null;var a=t.map(function(t){var n=t.rule.exec(e),a=n&&n[1].split(/[._]/).slice(0,3);return a&&a.length<3&&(a=a.concat(1==a.length?[0,0]:[0])),n&&{name:t.name,version:a.join(".")}}).filter(Boolean)[0]||null;return a&&(a.os=n(e)),/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/i.test(e)&&((a=a||{}).bot=!0),a}function o(e){return e.map(function(e){return{name:e[0],rule:e[1]}})}e.exports={detect:function(){return"undefined"!=typeof navigator?i(navigator.userAgent):a()},detectOS:n,getNodeVersion:a,parseUserAgent:i}}).call(this,n("5IsQ"))},A86J:function(e,t,n){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}},CGHn:function(e,t,n){"use strict";var a=n("Kyb9");n.n(a).a},Kyb9:function(e,t,n){},MKqb:function(e,t,n){"use strict";n.r(t);n("it7j"),n("lQyR"),n("YhIr"),n("GkPX"),n("W1QL"),n("K/PF"),n("75LO");var a=n("gki9"),i=n.n(a),o=n("5v/B"),r=n("A86J"),s=n("3Hfo"),l=n("lOrp"),u=Object(o.detect)();function c(e){e.focus(),e.classList.add("Avatar__ChangeButton--Focus")}var d={name:"FormAvatar",directives:{focus:{inserted:function(e,t){t.value&&c(e)}}},mixins:[r.a,s.a],props:{value:{type:String},name:{type:String},error:{type:String},required:{type:Boolean,default:!1},description:{type:String},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1}},data:function(){return{image:void 0,uploadText:"",uploadTextType:"",label:"Change Avatar Image"}},computed:i()({},Object(l.b)(["userInfo"]),{fieldId:function(){return"formAvatar-".concat(this._uid)},initials:function(){var e="";return this.$store&&this.$store.getters&&void 0!==this.$store.getters.userInfo&&Object.keys(this.$store.getters.userInfo).length?(e+=this.$store.getters.userInfo.UserFirstname.charAt(0).toUpperCase(),e+=this.$store.getters.userInfo.UserLastname.charAt(0).toUpperCase()):e="CU",e},avatarImage:function(){if(null!==this.value&&void 0!==this.value)return this.value}}),updated:function(){var e=this;this.$nextTick(function(){e.$test.setFlag("FormAvatar::Updated")})},methods:{onEnterSpaceInput:function(e){return"firefox"!==u.name||(e.preventDefault(),this.$el.querySelector("input").click(),!1)},onTabInput:function(e){if("firefox"!==u.name||e.shiftKey)return!0;e.preventDefault();var t=Array.from(this.$el.form.querySelectorAll(".b-form-group")).find(function(e){return!!e.classList.contains("b-form-group")&&!e.querySelector("label.Avatar__ChangeButton")});return!t||(t.querySelector("label").click(),!0)},onBlur:function(){!function(e){e.classList.remove("Avatar__ChangeButton--Focus")}(this.$el.querySelector("label.Avatar__ChangeButton"))},onFocus:function(){c(this.$el.querySelector("label.Avatar__ChangeButton"))},uploadImage:function(){var e=this;if(this.image){if(this.image.size>1048576)return this.$refs.uploadImage.reset(),this.uploadText="Image size exceeded (1MB).",this.uploadTextType="danger",void this.$nextTick(function(){e.$test.setFlag("FormAvatar::ImageTooBig")});var t=new FileReader;t.addEventListener("load",function(t){e.$emit("input",t.target.result),e.uploadTextType="",e.uploadText=""}),t.addEventListener("error",function(){e.uploadText="An error occurred during image upload.",e.uploadTextType="danger"}),t.readAsDataURL(this.image)}},removeAvatar:function(){this.$refs.uploadImage.reset(),this.$emit("input",void 0)},dismissStatus:function(){var e=this;setTimeout(function(){e.uploadTextType="",e.uploadText=""},2e3)}}},f=(n("cI0P"),n("CGHn"),n("psIG")),p=Object(f.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error)}},[e.description&&e.hideDescription?n("template",{slot:"description"},[n("small",{staticClass:"sr-only"},[e._v("\n            "+e._s(e._f("translate")(e.description))+"\n        ")])]):e._e(),e._v(" "),n("div",{staticClass:"Form__Avatar"},[n("div",{staticClass:"Avatar Avatar__Image"},[e.avatarImage?n("img",{attrs:{src:e.avatarImage}}):n("span",[e._v(e._s(e.initials))])]),e._v(" "),n("label",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],staticClass:"btn btn-secondary Button Button--Secondary Avatar__ChangeButton"},[e._v("\n            "+e._s(e._f("translate")(e.label))+"\n\n            "),e.description&&e.hideDescription?[n("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],staticClass:"float-right",attrs:{title:e._f("translate")(e.description)}},[n("CommonIcon",{staticClass:"mx-2",attrs:{icon:"info-circle"}})],1)]:e._e(),e._v(" "),n("b-form-file",{ref:"uploadImage",attrs:{multiple:!1,accept:"image/*",plain:""},on:{input:e.uploadImage},nativeOn:{blur:function(t){return e.onBlur(t)},focus:function(t){return e.onFocus(t)},keyup:[function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onEnterSpaceInput(t):null},function(t){return"button"in t||!e._k(t.keyCode,"space",32,t.key," ")?e.onEnterSpaceInput(t):null}],keydown:function(t){return"button"in t||!e._k(t.keyCode,"tab",9,t.key,"Tab")?e.onTabInput(t):null}},model:{value:e.image,callback:function(t){e.image=t},expression:"image"}})],2),e._v(" "),e.value?n("i",{staticClass:"fas fa-times fa-md Avatar__Remove",attrs:{title:e._f("translate")("Remove avatar")},on:{click:e.removeAvatar}}):e._e(),e._v(" "),n("transition",{attrs:{"enter-class":"Transition--SlideFadeEnter","enter-active-class":"Transition--SlideFadeEnterActive","leave-active-class":"Transition--SlideFadeLeaveActive","leave-to-class":"Transition--SlideFadeLeaveTo"},on:{"after-enter":e.dismissStatus}},[e.uploadText?n("small",{staticClass:"form-text Form__Help",class:"text-"+e.uploadTextType},["success"==e.uploadTextType?n("i",{staticClass:"fas fa-check"}):n("i",{staticClass:"fas fa-exclamation-circle"}),e._v("\n                "+e._s(e._f("translate")(e.uploadText))+"\n            ")]):e._e()])],1)],2)},[],!1,null,null,null);p.options.__file="index.vue";t.default=p.exports},"Zgm+":function(e,t,n){},cI0P:function(e,t,n){"use strict";var a=n("Zgm+");n.n(a).a}}]);