(window.webpackJsonp=window.webpackJsonp||[]).push([[141,147],{T0ip:function(e,t,n){"use strict";n.r(t);var r=n("gki9"),o=n.n(r),a=n("lOrp"),s={name:"Base",props:{userType:{type:String,required:!0,validator:function(e){return-1!==["agent","customer"].indexOf(e)}},method:{type:Object}},data:function(){return{sharedSecret:null,emailSecurity:null}},computed:o()({},Object(a.b)(["userInfo","config"])),mounted:function(){this.sharedSecret=this.generateSecret()},methods:{cancel:function(){this.$emit("cancel")},provideSetupData:function(){this.$emit("setup-data-provided",{sharedSecret:this.sharedSecret})},generateSecret:function(){for(var e=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","2","3","4","5","6","7"],t="",n=0;n<e.length;n++){var r=Math.floor(Math.random()*e.length),o=e[n];e[n]=e[r],e[r]=o}for(var a=0;a<16;a++)t+=e[a];return t}}},i=n("psIG"),u=Object(i.a)(s,void 0,void 0,!1,null,null,null);u.options.__file="Base.vue";t.default=u.exports},kAYO:function(e,t,n){"use strict";n.r(t);var r=n("T0ip"),o=n("A+bb"),a={name:"SMS",components:{FormButton:function(){return n.e(7).then(n.bind(null,"dphA"))},FormInput:function(){return n.e(12).then(n.bind(null,"CJfq"))},FormCheckbox:function(){return n.e(138).then(n.bind(null,"Hzqv"))}},extends:r.default,data:function(){return{loading:!1,phoneNumber:"",phoneNumberDescription:"Please enter a phone number in international format, i.e. +49 (0) 123 4567-890.",emailSecurity:!1}},computed:{validPhoneNumber:function(){return!this.phoneNumber||o.default.validate(this.phoneNumber)},phoneNumberError:function(){var e=null;return this.validPhoneNumber||(e=o.default.errorMessage()),e}},mounted:function(){this.phoneNumber=this.method.TransportFieldValue||""},methods:{provideSetupData:function(){var e=this;this.loading=!0,this.clientSendRequest({Path:"".concat(this.userType,"/account/twofactor/send-setup-token-via-transport/SMS"),Method:"post",Body:{Secret:this.sharedSecret,PhoneNumber:this.phoneNumber}}).then(function(){e.$nextTick(function(){e.$bus.$emit("showToastMessage",{id:"SendTokenViaTransportSuccessMessage",text:"Successfully sent a message with the verification code.",variant:"success"}),e.$emit("setup-data-provided",{sharedSecret:e.sharedSecret,emailSecurity:e.emailSecurity,phoneNumber:e.phoneNumber}),e.$nextTick(function(){e.loading=!1,e.$test.setFlag("Account::TwoFactor::SendSetupTokenViaTransport")})})}).catch(function(t){t?t.response&&900===t.response.Code?e.$bus.$emit("showToastMessage",{id:"".concat(t.response.Body.ErrorIdentifier,"CustomErrorMessage"),text:t.response.Body.ErrorMessage,variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"sendTokenViaTransportErrorMessage",heading:"Send setup OTP token via transport failed",text:"Please contact the administrator.",variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"serverErrorMessage",heading:"Server communication error",text:"Please try again later.",variant:"danger"}),e.loading=!1,e.$log.error("Send setup OTP token via transport failed!",t)})}}},s=n("psIG"),i=Object(s.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",[n("b-col",[n("b-row",[n("b-col",{staticClass:"mt-4 mb-3 text-center"},[n("h3",[e._v(e._s(e._f("translate")("Two-factor Setup")))])])],1),e._v(" "),n("b-row",[n("b-col",{staticClass:"text-center"},[n("p",[e._v("\n                    "+e._s(e._f("translate")("Please enter your mobile phone number to receive an authentication code."))+"\n                ")])])],1),e._v(" "),n("b-row",{staticClass:"TwoFASetup"},[n("b-col",[n("b-row",[n("b-col",[n("FormInput",{attrs:{"field-classes":{TwoFASetup__CellphoneNumber:!0},placeholder:e._f("translate")("Enter your mobile phone number"),description:e._f("translate")(e.phoneNumberDescription),error:e._f("translate")(e.phoneNumberError),name:"PhoneNumber","auto-focus":""},on:{enter:function(t){e.provideSetupData()}},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})],1)],1),e._v(" "),n("b-row",[n("b-col",[n("FormCheckbox",{staticClass:"TwoFASetup__EmailSecurity",attrs:{label:e._f("translate")("Enable email security when using the fallback")},model:{value:e.emailSecurity,callback:function(t){e.emailSecurity=t},expression:"emailSecurity"}})],1)],1),e._v(" "),n("b-row",[n("b-col",{staticClass:"my-3",attrs:{cols:"6"}},[n("FormButton",{attrs:{text:e._f("translate")("Cancel"),variant:"primary",block:""},on:{click:function(t){e.cancel()}}})],1),e._v(" "),n("b-col",{staticClass:"my-3",attrs:{cols:"6"}},[n("FormButton",{attrs:{loading:e.loading,text:e._f("translate")("Next"),variant:"primary",block:"",disabled:!e.phoneNumber&&e.validPhoneNumber},on:{click:function(t){e.provideSetupData()}}})],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);i.options.__file="SMS.vue";t.default=i.exports}}]);