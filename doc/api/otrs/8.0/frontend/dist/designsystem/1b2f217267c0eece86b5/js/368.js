(window.webpackJsonp=window.webpackJsonp||[]).push([[368,384],{"9xT8":function(t,e,n){"use strict";n.r(e);n("Z8gF"),n("9ovy");var a=n("T0ip"),r=n("+a/P"),o=n.n(r),c={name:"AuthenticatorApp",components:{FormButton:function(){return Promise.all([n.e(2),n.e(10)]).then(n.bind(null,"dphA"))},FormInput:function(){return n.e(15).then(n.bind(null,"CJfq"))}},extends:a.default,data:function(){return{disabledButton:!0,initialSetup:!0,qrCodeDataUrl:void 0}},computed:{readableSharedSecret:function(){return this.sharedSecret.toLowerCase().match(/.{1,4}/g).join(" ")}},mounted:function(){var t=this,e=encodeURIComponent(this.config.ProductName.replace(/:/g,"")),n=encodeURIComponent(this.userInfo.UserLogin.replace(/:/g,"")),a="otpauth://totp/".concat(e,":").concat(n,"?secret=").concat(this.sharedSecret,"&issuer=").concat(e);o.a.toDataURL(a).then(function(e){t.qrCodeDataUrl=e,t.disabledButton=!1}).catch(function(e){t.$log.error(e)}),this.$nextTick(function(){t.$test.setFlag("AuthenticatorApp::Mounted")})},methods:{showHelpScreen:function(){var t=this;this.initialSetup=!1,this.$nextTick(function(){t.$test.setFlag("AuthenticatorApp::ShowHelpScreen")})}}},s=n("psIG"),l=Object(s.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",[n("b-col",[n("b-row",[n("b-col",{staticClass:"mt-4 mb-3 text-center"},[n("h3",[t._v(t._s(t._f("translate")("Two-factor Setup")))])])],1),t._v(" "),t.initialSetup?[n("b-row",[n("b-col",{staticClass:"text-center"},[n("p",[t._v("\n                        "+t._s(t._f("translate")("Please open your preferred two-factor authenticator app, add a new account and scan the code below."))+"\n                    ")])])],1),t._v(" "),n("b-row",{staticClass:"TwoFASetup"},[n("b-col",[n("b-row",[n("b-col",[n("h5",[t._v("\n                                "+t._s(t._f("translate")("How do I get the app?"))+"\n                            ")]),t._v(" "),n("ol",[n("li",[t._v(t._s(t._f("translate")("Go to your app store.")))]),t._v(" "),n("li",[t._v(t._s(t._f("translate")('Search for an "Authenticator" app.')))]),t._v(" "),n("li",[t._v(t._s(t._f("translate")("Install and open the app.")))]),t._v(" "),n("li",[t._v(t._s(t._f("translate")("Follow the instructions on the screen to add a new account.")))]),t._v(" "),n("li",[t._v(t._s(t._f("translate")("Scan the code below.")))])])])],1),t._v(" "),n("b-row",{staticClass:"text-center"},[n("b-col",[n("img",{attrs:{src:t.qrCodeDataUrl,alt:t._f("translate")("QR code")}})])],1),t._v(" "),n("b-row",{staticClass:"text-center"},[n("b-col",[n("CommonLink",{staticClass:"HoverUnderline",on:{click:function(e){return t.showHelpScreen()}}},[t._v("\n                                "+t._s(t._f("translate")("Unable to scan the code?"))+"\n                            ")])],1)],1),t._v(" "),n("b-row",[n("b-col",{staticClass:"my-3",attrs:{cols:"6"}},[n("FormButton",{attrs:{text:t._f("translate")("Cancel"),variant:"secondary",block:""},on:{click:function(e){return t.cancel()}}})],1),t._v(" "),n("b-col",{staticClass:"my-3",attrs:{cols:"6"}},[n("FormButton",{attrs:{text:t._f("translate")("Next"),disabled:t.disabledButton,variant:"primary",block:"","auto-focus":""},on:{click:function(e){return t.provideSetupData()}}})],1)],1)],1)],1)]:[n("b-row",{staticClass:"TwoFASetup"},[n("b-col",[n("b-row",[n("b-col",[n("h5",[t._v("\n                                "+t._s(t._f("translate")("Unable to scan the code?"))+"\n                            ")]),t._v(" "),n("ol",[n("li",[t._v(t._s(t._f("translate")("Open the two-factor authenticator app and setup a new account.")))]),t._v(" "),n("li",[t._v(t._s(t._f("translate")("Select the manual entry for a provided secret key.")))]),t._v(" "),n("li",[t._v("\n                                    "+t._s(t._f("translate")("Enter your email address and the key below:"))+"\n                                    "),n("FormInput",{attrs:{"field-classes":{TwoFASetup__AuthenticatorCode:!0},readonly:""},model:{value:t.readableSharedSecret,callback:function(e){t.readableSharedSecret=e},expression:"readableSharedSecret"}})],1),t._v(" "),n("li",[t._v("\n                                    "+t._s(t._f("translate")("Make sure that time-based algorithm is turned on, and save it."))+"\n                                ")])])])],1),t._v(" "),n("b-row",[n("b-col",{staticClass:"my-3",attrs:{cols:"6"}},[n("FormButton",{attrs:{text:t._f("translate")("Cancel"),variant:"secondary",block:""},on:{click:function(e){return t.cancel()}}})],1),t._v(" "),n("b-col",{staticClass:"my-3",attrs:{cols:"6"}},[n("FormButton",{attrs:{text:t._f("translate")("Next"),disabled:!t.sharedSecret,variant:"primary",block:""},on:{click:function(e){return t.provideSetupData()}}})],1)],1)],1)],1)]],2)],1)},[],!1,null,null,null);e.default=l.exports},T0ip:function(t,e,n){"use strict";n.r(e);n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO");var a=n("OvAC"),r=n.n(a),o=n("lOrp");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}var s={name:"Base",props:{userType:{type:String,required:!0,validator:function(t){return-1!==["agent","customer"].indexOf(t)}},method:{type:Object}},data:function(){return{sharedSecret:null,emailSecurity:null}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach(function(e){r()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},Object(o.b)(["userInfo","config"])),mounted:function(){this.sharedSecret=this.generateSecret()},methods:{cancel:function(){this.$emit("cancel")},provideSetupData:function(){this.$emit("setup-data-provided",{sharedSecret:this.sharedSecret})},generateSecret:function(){for(var t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","2","3","4","5","6","7"],e="",n=0;n<t.length;n++){var a=Math.floor(Math.random()*t.length),r=t[n];t[n]=t[a],t[a]=r}for(var o=0;o<16;o++)e+=t[o];return e}}},l=n("psIG"),i=Object(l.a)(s,void 0,void 0,!1,null,null,null);e.default=i.exports}}]);