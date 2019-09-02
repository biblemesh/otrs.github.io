(window.webpackJsonp=window.webpackJsonp||[]).push([[212,49,282],{"2IPJ":function(e,t,o){"use strict";o.r(t);o("2Tod"),o("ABKx"),o("W1QL"),o("K/PF"),o("t91x"),o("75LO"),o("oMRA"),o("6d4m");var s=o("OvAC"),r=o.n(s),a=o("VixF"),n=o("lOrp");function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,s)}return o}var l={name:"FormTwoFactorPreferences",components:{CommonDialog:function(){return o.e(12).then(o.bind(null,"CqLK"))},FormButton:function(){return Promise.all([o.e(1),o.e(234)]).then(o.bind(null,"dphA"))},TwoFactorSetup:function(){return o.e(28).then(o.bind(null,"kpUM"))},TwoFactorPasswordCheck:function(){return o.e(55).then(o.bind(null,"/kAC"))}},mixins:[a.a],props:{methods:{type:Array,default:function(){return[]}},requiredSetup:{type:Boolean,default:!1},userType:{type:String,required:!0,validator:function(e){return-1!==["agent","customer"].indexOf(e)}}},data:function(){return{localMethods:this.methods,setupMethod:null,deleteSetupMethod:null}},computed:function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(o,!0).forEach(function(t){r()(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}({fieldId:function(){return"formTwoFactorPreferences-".concat(this.uuid)}},Object(n.b)(["config"]),{showDeletePasswordCheckDialog:function(){return Boolean(!this.isSSOAuthModule()&&this.deleteSetupMethod)},deleteSetupPossible:function(){if(!this.requiredSetup)return!0;var e=0;return this.localMethods.forEach(function(t){t.IsMethodSetupForUser&&e++}),e>1}}),methods:{onCancelSetup:function(){this.setupMethod=null},onCancelDeleteSetup:function(){this.deleteSetupMethod=null},onFinishedSetup:function(){this.setupMethod=null,this.fetchAvailableMethods()},openSetup:function(e){this.setupMethod=e},isSSOAuthModule:function(){return("agent"===this.userType?this.config.AuthModule:this.config["Customer::AuthModule"]).includes("HTTPBasicAuth")},fetchAvailableMethods:function(){var e=this;this.clientSendRequest({Path:"".concat(this.userType,"/account/twofactor/available-method-list"),Method:"get"}).then(function(t){e.localMethods=t.Body.TwoFactorAvailableMethodList||[],e.$nextTick(function(){e.$test.setFlag("Account::TwoFactor::AvailableMethodList")})}).catch(function(t){e.availableMethodList=[],e.$bus.$emit("showToastMessage",{id:"serverErrorMessage",heading:"Server communication error",text:"Please try again later.",variant:"danger"}),e.$log.error("Fetch available two-factor method list failed!",t)})},showDeleteSetupPasswordCheck:function(e){this.deleteSetupMethod=e,this.isSSOAuthModule()&&this.triggerDeleteSetup()},triggerDeleteSetup:function(){var e=this,t=this.deleteSetupMethod.Name;this.deleteSetupMethod=null,this.clientSendRequest({Path:"".concat(this.userType,"/account/twofactor/delete-setup/").concat(t),Method:"post"}).then(function(){e.fetchAvailableMethods(),e.$bus.$emit("showToastMessage",{id:"deleteSetupSuccessfulMessage",heading:"Deletion of two-factor setup successful",text:"The setup for two-factor was successfully deleted.",variant:"success"}),e.$nextTick(function(){e.$test.setFlag("Account::TwoFactor::DeleteSetup")})}).catch(function(t){t?t.response&&900===t.response.Code?e.$bus.$emit("showToastMessage",{id:"".concat(t.response.Body.ErrorIdentifier,"CustomErrorMessage"),text:t.response.Body.ErrorMessage,variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"failedDeleteSetup",heading:"Delete two-factor setup",text:"Something went wrong. Please try again.",variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"serverErrorMessage",heading:"Server communication error",text:"Please try again later.",variant:"danger"})})},revokeAllDevices:function(){var e=this;this.clientSendRequest({Path:"".concat(this.userType,"/account/twofactor/revoke-browser-trust"),Method:"post"}).then(function(){e.$bus.$emit("showToastMessage",{id:"revokedBrowserSuccessfulMessage",heading:"The trusted devices were successfully revoked.",text:"You have successfully revoked all trusted devices.",variant:"success"})}).catch(function(t){t?t.response&&900===t.response.Code?e.$bus.$emit("showToastMessage",{id:"".concat(t.response.Body.ErrorIdentifier,"CustomErrorMessage"),text:t.response.Body.ErrorMessage,variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"failedRevokingBrowsers",heading:"Revoke trusted devices",text:"Something went wrong. Please try again.",variant:"danger"}):e.$bus.$emit("showToastMessage",{id:"serverErrorMessage",heading:"Server communication error",text:"Please try again later.",variant:"danger"})})},focus:function(){this.$refs.formButton&&this.$refs.formButton.focus()}}},c=o("psIG"),u=Object(c.a)(l,function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.localMethods.length?o("b-form-group",{staticClass:"TwoFactorUserPreferences",attrs:{"aria-label":e._f("translate")("Two-factor Authentication")}},[e._l(e.localMethods,function(t,s){return o("b-row",{key:t.Name,staticClass:"py-1 border-bottom",class:s===e.methods.length-1?"mb-3":"mb-1",attrs:{"no-gutters":""}},[o("b-col",{attrs:{cols:"8"}},[o("CommonIcon",{attrs:{"weight-with-icon":t.Icon}}),e._v("\n            "+e._s(e._f("translate")(t.Label))+"\n        ")],1),e._v(" "),t.IsMethodSetupForUser?o("b-col",{staticClass:"text-right",attrs:{cols:"4"}},[t.IsSetupPossible?o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e._f("translate")("Edit setup for two-factor method.")},on:{click:function(o){return e.openSetup(t)}}},[o("CommonIcon",{attrs:{icon:"content-pen-3"}})],1):e._e(),e._v(" "),e.deleteSetupPossible?o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e._f("translate")("Delete setup for two-factor method.")},on:{click:function(o){return e.showDeleteSetupPasswordCheck(t)}}},[o("CommonIcon",{staticClass:"ml-2",attrs:{weight:"regular",icon:"bin-2-alternate"}})],1):e._e()],1):t.IsSetupPossible?o("b-col",{attrs:{cols:"4"}},[o("FormButton",{ref:0===s?"formButton":void 0,refInFor:!0,staticClass:"TwofaMethod__Setup",attrs:{text:e._f("translate")("Setup"),disabled:!t.IsSetupPossible,title:e._f("translate")("Start setup for the two-factor method."),variant:"primary",block:""},on:{click:function(o){return e.openSetup(t)}}})],1):e._e(),e._v(" "),t.IsSetupPossible?e._e():o("b-col",{staticClass:"text-right",attrs:{cols:"12"}},[e._v("\n            "+e._s(e._f("translate")("Not available at the moment."))+"\n            "),t.SetupErrorMessage?o("CommonLink",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"collapse-"+e.fieldId,expression:"'collapse-' + fieldId"}],staticClass:"HoverUnderline"},[e._v("\n                "+e._s(e._f("translate")("Details"))+"\n            ")]):e._e(),e._v(" "),t.SetupErrorMessage?o("b-collapse",{attrs:{id:"collapse-"+e.fieldId}},[o("small",[e._v("\n                    "+e._s(e._f("translate")(t.SetupErrorMessage))+"\n                ")])]):e._e()],1)],1)}),e._v(" "),o("b-form",{on:{reset:function(e){e.preventDefault()},submit:function(e){e.preventDefault()}}},[o("CommonDialog",{ref:"twoFactorSetupModal",attrs:{id:"twoFactorSetupModal",value:!!e.setupMethod,"no-close-on-backdrop":"","no-close-on-esc":"","hide-header":"","hide-footer":"","no-fade":"",lazy:""}},[o("TwoFactorSetup",{attrs:{"user-type":e.userType,method:e.setupMethod,"check-password":!e.isSSOAuthModule()},on:{cancel:e.onCancelSetup,"finished-setup":e.onFinishedSetup}})],1),e._v(" "),o("CommonDialog",{ref:"twoFactorDeletePasswordCheckModal",attrs:{id:"twoFactorDeletePasswordCheckModal",value:e.showDeletePasswordCheckDialog,"no-close-on-backdrop":"","no-close-on-esc":"","hide-header":"","hide-footer":"","no-fade":"",lazy:""}},[o("TwoFactorPasswordCheck",{attrs:{"user-type":e.userType,description:e._f("translate")("Please enter your password to confirm the deletion.")},on:{verified:e.triggerDeleteSetup,cancel:e.onCancelDeleteSetup}})],1)],1),e._v(" "),o("b-row",{staticClass:"mb-3"},[o("b-col",[e._v("\n            "+e._s(e._f("translate")("Revoke all trusted devices"))+"\n        ")]),e._v(" "),o("b-col",{staticClass:"text-right",attrs:{cols:"2"}},[o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e._f("translate")("Revoke all trusted devices")},on:{click:function(t){return e.revokeAllDevices()}}},[o("CommonIcon",{staticClass:"Color--Alert",attrs:{weight:"regular",icon:"bin-2-alternate"}})],1)],1)],1)],2):o("b-form-group",{staticClass:"TwoFactorUserPreferences"},[o("b-row",{staticClass:"mb-3"},[o("b-col",[e._v("\n            "+e._s(e._f("translate")("There are currently no configured two-factor authentication methods. Please contact your administrator."))+"\n        ")])],1)],1)},[],!1,null,null,null);t.default=u.exports},"3Hfo":function(e,t,o){"use strict";var s=o("8CHY");t.a={methods:{filter:function(e){var t=this,o="";o+=this.$locale.translate(this.label,this.labelPlaceholder);return["description","localPlaceholder"].forEach(function(e){o+=t.$locale.translate(t[e])}),Object(s.a)(o,e)}}}},A86J:function(e,t,o){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}},watch:{autoFocus:function(e){e&&"function"==typeof this.focus&&this.focus()}},methods:{focus:function(){this.$el&&"function"==typeof this.$el.focus&&this.$el.focus()}}}},VixF:function(e,t,o){"use strict";var s=o("A86J"),r=o("3Hfo"),a=o("rpZP");t.a={mixins:[s.a,r.a,{data:function(){return{localPlaceholder:""}},watch:{labelSrOnly:function(){this.buildLocalPlaceholder()},required:function(){this.buildLocalPlaceholder()},placeholder:function(){this.buildLocalPlaceholder()}},created:function(){var e=this;this.$bus.$on("forceUpdate",function(){e.buildLocalPlaceholder()}),this.buildLocalPlaceholder()},methods:{buildLocalPlaceholder:function(){if(this.placeholder){var e=this.$locale.translate(this.placeholder);this.labelSrOnly&&this.required&&(e="".concat(e,"*")),this.localPlaceholder=e}else this.localPlaceholder=""}}},a.a],mounted:function(){var e=this;this.$nextTick(function(){e.$emit("loaded")})}}}}]);