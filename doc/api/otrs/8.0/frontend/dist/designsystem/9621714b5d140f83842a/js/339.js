(window.webpackJsonp=window.webpackJsonp||[]).push([[339,389,390],{"2IPJ":function(e,t,o){"use strict";o.r(t);o("2Tod"),o("ABKx"),o("W1QL"),o("K/PF"),o("t91x"),o("75LO"),o("oMRA"),o("6d4m");var r=o("OvAC"),s=o.n(r),a=o("VixF"),n=o("lOrp");function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o}var l={name:"FormTwoFactorPreferences",components:{CommonDialog:function(){return o.e(16).then(o.bind(null,"CqLK"))},FormButton:function(){return Promise.all([o.e(3),o.e(96)]).then(o.bind(null,"dphA"))},TwoFactorSetup:function(){return o.e(45).then(o.bind(null,"kpUM"))},TwoFactorPasswordCheck:function(){return o.e(83).then(o.bind(null,"/kAC"))},CommonDelete:function(){return o.e(35).then(o.bind(null,"uda8"))}},mixins:[a.a],props:{methods:{type:Array,default:function(){return[]}},requiredSetup:{type:Boolean},userType:{type:String,required:!0,validator:function(e){return-1!==["agent","customer"].indexOf(e)}}},data:function(){return{localMethods:this.methods,setupMethod:null,deleteSetupMethod:null}},computed:function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach(function(t){s()(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}({fieldId:function(){return"formTwoFactorPreferences-".concat(this.uuid)}},Object(n.b)(["config"]),{showDeletePasswordCheckDialog:function(){return Boolean(!this.isSSOAuthModule()&&this.deleteSetupMethod)},deleteSetupPossible:function(){if(!this.requiredSetup)return!0;var e=0;return this.localMethods.forEach(function(t){t.IsMethodSetupForUser&&e++}),e>1}}),methods:{onCancelSetup:function(){this.setupMethod=null},onCancelDeleteSetup:function(){this.deleteSetupMethod=null},onFinishedSetup:function(){this.setupMethod=null,this.fetchAvailableMethods()},openSetup:function(e){this.setupMethod=e},isSSOAuthModule:function(){return("agent"===this.userType?this.config.AuthModule:this.config["Customer::AuthModule"]).includes("HTTPBasicAuth")},fetchAvailableMethods:function(){var e=this;this.clientSendRequest({Path:"".concat(this.userType,"/account/twofactor/available-method-list"),Method:"get"}).then(function(t){e.localMethods=t.Body.TwoFactorAvailableMethodList||[],e.$nextTick(function(){e.$test.setFlag("Account::TwoFactor::AvailableMethodList")})}).catch(function(t){e.availableMethodList=[],e.$bus.$emit("showToastMessage",{id:"serverErrorMessage",heading:"Server Communication Error",text:"A server communication error has occurred. Please try again later.",variant:"danger"}),e.$log.error("Loading available two-factor method list failed!",t)})},showDeleteSetupPasswordCheck:function(e){this.deleteSetupMethod=e,this.isSSOAuthModule()&&this.triggerDeleteSetup()},triggerDeleteSetup:function(){var e=this,t=this.deleteSetupMethod.Name;this.deleteSetupMethod=null,this.clientSendRequest({Path:"".concat(this.userType,"/account/twofactor/delete-setup/").concat(t),Method:"post"}).then(function(){e.fetchAvailableMethods(),e.$bus.$emit("showToastMessage",{id:"deleteSetupSuccessfulMessage",heading:"Deleting Successful",text:"The setup for two-factor was successfully deleted.",variant:"success"}),e.$nextTick(function(){e.$test.setFlag("Account::TwoFactor::DeleteSetup")})}).catch(function(t){t?t.response&&900===t.response.Code?e.$bus.$emit("showToastMessage",{id:"".concat(t.response.Body.ErrorIdentifier,"CustomErrorMessage"),text:t.response.Body.ErrorMessage,variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"failedDeleteSetup",heading:"Error Deleting Two-Factor Setup",text:"The two-factor setup could not be deleted. Please try again later.",variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"serverErrorMessage",heading:"Server Communication Error",text:"A server communication error has occurred. Please try again later.",variant:"danger"})})},revokeAllDevices:function(){var e=this;this.clientSendRequest({Path:"".concat(this.userType,"/account/twofactor/revoke-browser-trust"),Method:"post"}).then(function(){e.$bus.$emit("showToastMessage",{id:"revokedBrowserSuccessfulMessage",heading:"Trusted Devices Successfully Revoked",text:"You have successfully revoked all trusted devices.",variant:"success"})}).catch(function(t){t?t.response&&900===t.response.Code?e.$bus.$emit("showToastMessage",{id:"".concat(t.response.Body.ErrorIdentifier,"CustomErrorMessage"),text:t.response.Body.ErrorMessage,variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"failedRevokingBrowsers",heading:"Error Revoking Trusted Devices",text:"Something went wrong. Please try again.",variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"serverErrorMessage",heading:"Server Communication Error",text:"A server communication error has occurred. Please try again later.",variant:"danger"})})},focus:function(){this.$refs.formButton&&this.$refs.formButton.focus()}}},c=o("psIG"),u=Object(c.a)(l,function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.localMethods.length?o("b-form-group",{staticClass:"TwoFactorUserPreferences",attrs:{"aria-label":e._f("translate")("Two-factor Authentication")}},[e._l(e.localMethods,function(t,r){return o("b-row",{key:t.Name,staticClass:"py-1 border-bottom",class:r===e.methods.length-1?"mb-3":"mb-1",attrs:{"no-gutters":""}},[o("b-col",{attrs:{cols:"8"}},[o("CommonIcon",{attrs:{"weight-with-icon":t.Icon}}),e._v("\n            "+e._s(e._f("translate")(t.Label))+"\n        ")],1),e._v(" "),t.IsMethodSetupForUser?o("b-col",{staticClass:"text-right",attrs:{cols:"4"}},[t.IsSetupPossible?o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e._f("translate")("Edit setup for two-factor method"),disabled:e.disabled},on:{click:function(o){return e.openSetup(t)}}},[o("CommonIcon",{attrs:{icon:"content-pen-3"}})],1):e._e(),e._v(" "),e.deleteSetupPossible?o("CommonDelete",{staticClass:"ml-2",attrs:{title:e._f("translate")("Delete setup for two-factor method"),disabled:e.disabled},on:{click:function(o){return e.showDeleteSetupPasswordCheck(t)}}}):e._e()],1):t.IsSetupPossible?o("b-col",{attrs:{cols:"4"}},[o("FormButton",{ref:0===r?"formButton":void 0,refInFor:!0,staticClass:"TwofaMethod__Setup",attrs:{text:e._f("translate")("Setup"),disabled:e.disabled||!t.IsSetupPossible,title:e._f("translate")("Start setup for the two-factor method."),variant:"primary",block:""},on:{click:function(o){return e.openSetup(t)}}})],1):e._e(),e._v(" "),t.IsSetupPossible?e._e():o("b-col",{staticClass:"text-right",attrs:{cols:"12"}},[e._v("\n            "+e._s(e._f("translate")("Not available at the moment."))+"\n            "),t.SetupErrorMessage?o("CommonLink",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"collapse-"+e.fieldId,expression:"'collapse-' + fieldId"}],staticClass:"HoverUnderline",attrs:{disabled:e.disabled}},[e._v("\n                "+e._s(e._f("translate")("Details"))+"\n            ")]):e._e(),e._v(" "),t.SetupErrorMessage?o("b-collapse",{attrs:{id:"collapse-"+e.fieldId}},[o("small",[e._v("\n                    "+e._s(e._f("translate")(t.SetupErrorMessage))+"\n                ")])]):e._e()],1)],1)}),e._v(" "),o("b-form",{on:{reset:function(e){e.preventDefault()},submit:function(e){e.preventDefault()}}},[o("CommonDialog",{ref:"twoFactorSetupModal",attrs:{id:"twoFactorSetupModal",value:!!e.setupMethod,"no-close-on-backdrop":"","no-close-on-esc":"","hide-header":"","hide-footer":"","no-fade":"",lazy:""}},[o("TwoFactorSetup",{attrs:{"user-type":e.userType,method:e.setupMethod,"check-password":!e.isSSOAuthModule()},on:{cancel:e.onCancelSetup,"finished-setup":e.onFinishedSetup}})],1),e._v(" "),o("CommonDialog",{ref:"twoFactorDeletePasswordCheckModal",attrs:{id:"twoFactorDeletePasswordCheckModal",value:e.showDeletePasswordCheckDialog,"no-close-on-backdrop":"","no-close-on-esc":"","hide-header":"","hide-footer":"","no-fade":"",lazy:""}},[o("TwoFactorPasswordCheck",{attrs:{"user-type":e.userType,description:e._f("translate")("Please enter your password to confirm the deletion.")},on:{verified:e.triggerDeleteSetup,cancel:e.onCancelDeleteSetup}})],1)],1),e._v(" "),o("b-row",{staticClass:"mb-3"},[o("b-col",[e._v("\n            "+e._s(e._f("translate")("Revoke all trusted devices"))+"\n        ")]),e._v(" "),o("b-col",{staticClass:"text-right",attrs:{cols:"2"}},[o("CommonDelete",{attrs:{title:e._f("translate")("Revoke all trusted devices"),disabled:e.disabled},on:{click:function(t){return e.revokeAllDevices()}}})],1)],1)],2):o("b-form-group",{staticClass:"TwoFactorUserPreferences"},[o("b-row",{staticClass:"mb-3"},[o("b-col",[e._v("\n            "+e._s(e._f("translate")("There are currently no configured two-factor authentication methods. Please contact your administrator."))+"\n        ")])],1)],1)},[],!1,null,null,null);t.default=u.exports},"3Hfo":function(e,t,o){"use strict";var r=o("5WRv"),s=o.n(r),a=o("8CHY");t.a={methods:{filter:function(e){var t,o=this,r="";r+=(t=this.$locale).translate.apply(t,[this.label].concat(s()(this.localLabelPlaceholder)));return["description","localPlaceholder"].forEach(function(e){r+=o.$locale.translate(o[e])}),Object(a.a)(r,e)}}}},"8CHY":function(e,t,o){"use strict";o.d(t,"a",function(){return a});o("asZ9");var r={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","ẞ":"SS","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ɶ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ſ":"s","ẛ":"s","ß":"ss","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","０":"0","₀":"0","⓪":"0","⁰":"0","¹":"1","⑴":"1","₁":"1","❶":"1","⓵":"1","⒈":"1","①":"1","１":"1","²":"2","❷":"2","⑵":"2","２":"2","₂":"2","⓶":"2","②":"2","⒉":"2","³":"3","３":"3","⒊":"3","⑶":"3","₃":"3","❸":"3","⓷":"3","③":"3","⓸":"4","④":"4","⒋":"4","４":"4","⁴":"4","₄":"4","❹":"4","⑷":"4","⒌":"5","₅":"5","⓹":"5","⑸":"5","❺":"5","⑤":"5","５":"5","⁵":"5","⑹":"6","⁶":"6","６":"6","❻":"6","₆":"6","⑥":"6","⓺":"6","⒍":"6","７":"7","⁷":"7","❼":"7","⓻":"7","⒎":"7","₇":"7","⑺":"7","⑦":"7","⑧":"8","⒏":"8","⓼":"8","⑻":"8","⁸":"8","８":"8","❽":"8","₈":"8","⓽":"9","９":"9","⒐":"9","❾":"9","⑼":"9","₉":"9","⑨":"9","⁹":"9"},s=function(e){for(var t,o=e.split(""),s=o.length-1,a=!1;s>=0;s--)t=o[s],r[t]&&(o[s]=r[t],a=!0);return a&&(e=o.join("")),e},a=function(e,t){var o=s(e),r=s(t);return-1!==o.toLowerCase().indexOf(r.toLowerCase())||-1!==o.toUpperCase().indexOf(r.toUpperCase())}},A86J:function(e,t,o){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}},watch:{autoFocus:function(e){e&&"function"==typeof this.focus&&this.focus()}},methods:{focus:function(){this.$el&&"function"==typeof this.$el.focus&&this.$el.focus()}}}},VixF:function(e,t,o){"use strict";var r=o("A86J"),s=o("3Hfo"),a=o("rpZP");t.a={mixins:[r.a,s.a,{computed:{localPlaceholder:function(){if(!this.placeholder)return"";var e=this.$locale.translate(this.placeholder);return this.labelSrOnly&&this.required&&(e="".concat(e,"*")),e}}},a.a],props:{label:{type:String},labelPlaceholder:{type:Array},labelSrOnly:{type:Boolean,default:!1},placeholder:{type:String},description:{type:String},hideDescription:{type:Boolean,default:!1},error:{type:String},required:{type:Boolean,default:!1},name:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},computed:{localLabelPlaceholder:function(){var e=this,t=[];return Array.isArray(this.labelPlaceholder)?(this.labelPlaceholder.forEach(function(o){t.push(e.$locale.translate(o))}),t):t}},mounted:function(){var e=this;this.$nextTick(function(){e.$emit("loaded")})}}}}]);