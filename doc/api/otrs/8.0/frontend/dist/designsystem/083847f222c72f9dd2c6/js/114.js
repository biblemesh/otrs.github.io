(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{G5pt:function(e,t,s){"use strict";var a=s("NhU8");s.n(a).a},Iptl:function(e,t,s){"use strict";s("GkPX");var a=s("nS/B");t.a={components:{CommonNotice:function(){return s.e(155).then(s.bind(null,"mkLc"))},DocsExample:function(){return s.e(18).then(s.bind(null,"GD02"))},DocsComponentAPI:function(){return s.e(20).then(s.bind(null,"8txu"))}},computed:{doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(a.b)(this.doc,"summary")},version:function(){return Object(a.b)(this.doc,"version")},description:function(){return Object(a.b)(this.doc,"description")},props:function(){return Object(a.a)(this.doc,"prop")},slots:function(){return Object(a.a)(this.doc,"slot")},events:function(){return Object(a.a)(this.doc,"event")},methods:function(){return Object(a.a)(this.doc,"method")}},mounted:function(){var e=this;this.$nextTick(function(){e.$test.setFlag("DocComponent::".concat(e.component.name,"::Mounted"))})}}},NhU8:function(e,t,s){},tegL:function(e,t,s){"use strict";s.r(t);var a=s("Iptl"),o=s("6DIm"),i=s("bmGB"),n={name:"AppReloadMessage",data:function(){return{manifest:void 0}},mounted:function(){this.manifestFetch(),this.intervalId=setInterval(this.manifestFetch,3e4)},beforeDestroy:function(){clearInterval(this.intervalId)},methods:{manifestFetch:function(){var e=this;return this.clientSendRequest({Path:"".concat(this.$router.options.base,"/manifest"),Method:"get"},{xhr:!0,apiPrefix:"",responseType:"text",skipAuthentication:!0}).then(function(t){e.manifestCheck(t.Body)},function(t){e.$log.error("Manifest check failed!",t)})},manifestCheck:function(e){void 0!==this.manifest?this.manifest!==e&&(this.manifest=e,this.$bus.$emit("showToastMessage",{id:"appReloadMessage",heading:"Update available",text:"The app is not current anymore, please reload it at your earliest.",variant:"warning",persistent:!0,dismissible:!1,callback:function(){window.location.reload(!0)}}),this.$router.options.reloadApp=!0):this.manifest=e}},render:function(){return null}},l=s("psIG"),r=Object(l.a)(n,void 0,void 0,!1,null,null,null).exports;o.default.use(i.b,{toast:{position:i.a.rightBottom,showProgressBar:!1,icon:!1}});var c={name:"CommonMessages",components:{AppReloadMessage:r,CommonDialog:function(){return s.e(21).then(s.bind(null,"CqLK"))},FormButton:function(){return Promise.all([s.e(0),s.e(8)]).then(s.bind(null,"dphA"))}},props:{autoClearToastMessages:{type:Boolean,default:!1},noAppReloadMessage:{type:Boolean,default:!1}},data:function(){return{isModalVisible:!1,modalId:"",modalHeading:"",modalHeadingPlaceholders:[],modalText:"",modalSize:"md",modalTextPlaceholders:[],modalButtonBehavior:"ok",modalAllowClose:!1,modalOkCallback:null,modalCancelCallback:null,frostModeId:null}},created:function(){this.$bus.$on(["showToastMessage","showNotification"],this.showToastMessage),this.$router.afterEach(this.clearToastMessages),this.$bus.$on(["hideToastMessage","clearNotification"],this.hideToastMessage),this.$bus.$on("showModalMessage",this.showModalMessage),this.$bus.$on("hideModalMessage",this.hideModalMessage),this.$bus.$on("activateFrostMode",this.activateFrostMode),this.$bus.$on("deactivateFrostMode",this.deactivateFrostMode)},beforeDestroy:function(){this.$bus.$off(["showToastMessage","showNotification"],this.showToastMessage),this.$bus.$off(["hideToastMessage","clearNotification"],this.hideToastMessage),this.$bus.$off("showModalMessage",this.showModalMessage),this.$bus.$off("hideModalMessage",this.hideModalMessage)},methods:{showToastMessage:function(e){var t,s=this;switch(e.variant){case"danger":t="error";break;case"warning":t="warning";break;case"success":t="success";break;case"info":default:t="info"}e.id&&this.$snotify.remove(e.id,!0);var a=e.dismissTimeout||3e3;e.persistent&&(a=0);var o=!0;(void 0!==e.dismissible&&!e.dismissible||this.frostModeId&&this.frostModeId!==e.frostModeId)&&(o=!1),this.$nextTick(function(){var i=s.$snotify[t](s.$locale.translate(e.text,e.textPlaceholders),s.$locale.translate(e.heading,e.headingPlaceholders),{id:e.id,timeout:a,closeOnClick:o,titleMaxLength:255,bodyMaxLength:255});e.callback&&i.on("click",function(){if(s.frostModeId&&s.frostModeId!==e.frostModeId)return s.showModalMessage({id:"frostModeCallbackSuppressedMessage",text:"Please finish your current task first before you try to interact with this message again.",frostModeId:s.frostModeId}),void s.$log.warn("Frost mode active, callback suppressed.",e);(void 0===e.dismissible||e.dismissible)&&s.$snotify.remove(i.id),e.callback.call()})})},hideToastMessage:function(e){this.$snotify.clear(e)},clearToastMessages:function(){this.autoClearToastMessages&&this.$snotify.clear()},showModalMessage:function(e){var t=this;e&&e.text&&(this.isModalVisible?this.$log.error("Modal already active, message will not be shown.",e):this.frostModeId&&this.frostModeId!==e.frostModeId?this.$log.warn("Frost mode active, message will not be shown.",e):(this.modalText=e.text,this.modalTextPlaceholders=e.textPlaceholders||[],this.modalHeading=e.heading||"",this.modalHeadingPlaceholders=e.headingPlaceholders||[],this.modalAllowClose=e.allowClose||!1,this.modalSize=e.size||"md",this.modalButtonBehavior=e.buttonBehavior||"ok",this.modalId=e.id||"",e.okCallback&&"function"==typeof e.okCallback?this.modalOkCallback=e.okCallback:this.modalOkCallback=null,e.cancelCallback&&"function"==typeof e.cancelCallback?this.modalCancelCallback=e.cancelCallback:this.modalCancelCallback=null,this.$nextTick(function(){t.modalShow()})))},hideModalMessage:function(e){this.isModalVisible&&this.modalId===e&&this.modalClose()},modalOk:function(){this.modalClose(),this.modalOkCallback&&this.modalOkCallback()},modalCancel:function(){this.modalClose(),this.modalCancelCallback&&this.modalCancelCallback()},modalShow:function(){this.isModalVisible=!0},modalClose:function(){this.isModalVisible=!1},activateFrostMode:function(e){this.frostModeId=e},deactivateFrostMode:function(e){this.frostModeId===e&&(this.frostModeId=null)}}},d=(s("G5pt"),Object(l.a)(c,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("vue-snotify"),e._v(" "),e.noAppReloadMessage?e._e():s("AppReloadMessage",{ref:"appReloadMessage"}),e._v(" "),s("CommonDialog",{attrs:{size:e.modalSize,"no-close-on-backdrop":!e.modalAllowClose,"no-close-on-esc":!e.modalAllowClose,"hide-header":!e.modalHeading&&!e.modalAllowClose,"modal-class":"Modal","body-class":"Modal__Body text-left",lazy:""},model:{value:e.isModalVisible,callback:function(t){e.isModalVisible=t},expression:"isModalVisible"}},[e.modalHeading?s("template",{slot:"header"},[s("h4",{staticClass:"modal-title Modal__Title"},[e._v("\n                "+e._s(e._f("translate")(e.modalHeading,e.modalHeadingPlaceholders))+"\n            ")]),e._v(" "),e.modalAllowClose?s("b-btn",{staticClass:"close Modal__CloseButton",on:{click:function(t){return e.modalClose()}}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("\n                    ×\n                ")])]):e._e()],1):e._e(),e._v(" "),e.modalText?s("p",[e._v("\n            "+e._s(e._f("translate")(e.modalText,e.modalTextPlaceholders))+"\n        ")]):e._e(),e._v(" "),s("template",{slot:"footer"},["yesNo"===e.modalButtonBehavior?s("div",{staticClass:"float-right"},[s("FormButton",{staticClass:"mr-2 Modal__NoButton",attrs:{text:e._f("translate")("No"),variant:"secondary"},on:{click:function(t){return e.modalCancel()}}}),e._v(" "),s("FormButton",{staticClass:"Modal__YesButton",attrs:{text:e._f("translate")("Yes"),variant:"primary"},on:{click:function(t){return e.modalOk()}}})],1):"okCancel"===e.modalButtonBehavior?s("div",{staticClass:"float-right"},[s("FormButton",{staticClass:"mr-2 Modal__CancelButton",attrs:{text:e._f("translate")("Cancel"),variant:"secondary"},on:{click:function(t){return e.modalCancel()}}}),e._v(" "),s("FormButton",{staticClass:"Modal__OKButton",attrs:{text:e._f("translate")("OK"),variant:"primary"},on:{click:function(t){return e.modalOk()}}})],1):s("FormButton",{staticClass:"float-right Modal__OKButton",attrs:{text:e._f("translate")("OK"),variant:"primary"},on:{click:function(t){return e.modalOk()}}})],1)],2)],1)},[],!1,null,null,null).exports),h=s("+J7U"),m=s.n(h),u={name:"CommonMessages",mixins:[a.a],data:function(){var e=this;return{docVersion:"1.0.2",componentNamespace:"Components",componentPath:"Components/Common/CommonMessages",component:d,isGlobal:!0,hasOwnApi:!0,example:{noAppReloadMessage:{default:!0}},frostModeId:null,customCode:[{tag:"b-button",directives:[],props:{variant:"info"},on:{click:function(){e.$bus.$emit("showToastMessage",{id:"infoToast",heading:"Info toast heading",text:"Info toast text with a %s. It will fade away automatically.",textPlaceholders:["placeholder"]})}},value:"Info toast"},{tag:"b-button",directives:[],class:{"ml-2":!0},props:{variant:"success"},on:{click:function(){e.$bus.$emit("showToastMessage",{id:"successToast",heading:"Success toast heading",text:"Success toast text. Click to dismiss and execute the callback.",variant:"success",persistent:!0,callback:function(){e.$refs.docsExample.$refs.callbackModal.show()}})}},value:"Success toast w/ callback"},{tag:"b-button",directives:[],class:{"ml-2":!0},props:{variant:"warning"},on:{click:function(){e.$bus.$emit("showToastMessage",{id:"warningToast",heading:"Warning toast heading",text:"Warning toast text. Will persist, but will be dismissed on click.",variant:"warning",persistent:!0})}},value:"Warning toast"},{tag:"b-button",directives:[],class:{"ml-2":!0},props:{variant:"danger"},on:{click:function(){e.$bus.$emit("showToastMessage",{id:"dangerToast",heading:"Danger toast heading",text:"Danger toast text. Will persist and cannot be dismissed.",variant:"danger",persistent:!0,dismissible:!1})}},value:"Error toast (persistent)"},{tag:"b-modal",directives:[],props:{okOnly:!0,size:"sm",centered:!0,lazy:!0,"hide-header":!0},ref:"callbackModal",value:"Shown by the callback!"},{tag:"br"},{tag:"b-button",directives:[],on:{click:function(){e.$bus.$emit("showModalMessage",{id:"okModal",text:"Modal with an %s button.",textPlaceholders:["OK"],buttonBehavior:"ok"})}},value:"OK modal"},{tag:"b-button",directives:[],class:{"ml-2":!0},props:{variant:"dark"},on:{click:function(){e.$bus.$emit("showModalMessage",{id:"yesNoModal",heading:"Are you sure?",text:"Modal with a Yes/No choice and a confirm callback.",buttonBehavior:"yesNo",okCallback:function(){e.$refs.docsExample.$refs.callbackModal.show()}})}},value:"Yes/No modal"},{tag:"b-button",directives:[],class:{"ml-2":!0},props:{variant:"light"},on:{click:function(){e.$bus.$emit("showModalMessage",{id:"okCancelModal",heading:"All your base are belong to us.",text:"Modal with an OK/Cancel choice, both confirm and deny callbacks and a close\n                                    button.",buttonBehavior:"okCancel",allowClose:!0,okCallback:function(){e.$refs.docsExample.$refs.callbackModal.show()},cancelCallback:function(){e.$refs.docsExample.$refs.callbackModal.show()}})}},value:"OK/Cancel modal"},{tag:"br"},{tag:"br"},{tag:"b-button",directives:[],props:{variant:"outline-primary"},on:{click:function(){e.frostModeId=m()(),e.$bus.$emit("activateFrostMode",e.frostModeId)}},value:"Activate frost mode"},{tag:"b-button",class:{"ml-2":!0},directives:[],props:{variant:"outline-secondary"},on:{click:function(){e.$bus.$emit("deactivateFrostMode",e.frostModeId),e.frostModeId=null}},value:"Deactivate frost mode"},{tag:"b-button",directives:[],class:{"ml-2":!0},props:{variant:"outline-info"},on:{click:function(){e.$bus.$emit("showToastMessage",{id:"infoToastFrostMode",heading:"Frost Toast",text:"My callback works in frost mode too. Go on, click at me, I dare you!",variant:"info",callback:function(){e.$refs.docsExample.$refs.callbackModal.show()},frostModeId:e.frostModeId})}},value:"Info toast w/ callback (frost mode)"},{tag:"b-button",directives:[],class:{"ml-2":!0},props:{variant:"outline-dark"},on:{click:function(){e.$bus.$emit("showModalMessage",{id:"okModalFrostMode",text:"I work in the frost mode too!",buttonBehavior:"ok",frostModeId:e.frostModeId})}},value:"OK modal (frost mode)"}]}}},f=Object(l.a)(u,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"DesignSystem__Main"},[s("h1",{staticClass:"DesignSystem"},[e._v("\n            "+e._s(e.summary)+"\n            "),s("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v("\n                "+e._s(e.version)+"\n            ")])],1),e._v(" "),s("p",[e._v("\n            "+e._s(e.description)+"\n        ")]),e._v(" "),e.docVersion!==e.version?[s("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                    ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),s("p",[e._v("\n            This is a global component with its own API that is supposed to be included in the app on the base level. In\n            order to display a message to the user, you can use one of the methods found below.\n        ")]),e._v(" "),s("h2",{staticClass:"DesignSystem"},[e._v("\n            Toast Messages\n        ")]),e._v(" "),s("p",[e._v("Toast messages can be spawned by emitting on the global event bus with the message payload:")]),e._v(" "),s("pre",{staticClass:"DesignSystem"},[e._v("this.$bus.$emit('showToastMessage', message);")]),e._v(" "),e._m(0),e._v(" "),s("p",[e._v("\n            In order to dismiss the toast message from code, without waiting for it to disappear, emit a separate event\n            with the same message ID set earlier:\n        ")]),e._v(" "),s("pre",{staticClass:"DesignSystem"},[e._v("this.$bus.$emit('hideToastMessage', id);")]),e._v(" "),e._m(1),e._v(" "),s("h2",{staticClass:"DesignSystem"},[e._v("\n            Modal Messages\n        ")]),e._v(" "),s("p",[e._v("Modal messages can be also triggered by emitting on the global event bus with the message payload:")]),e._v(" "),s("pre",{staticClass:"DesignSystem"},[e._v("this.$bus.$emit('showModalMessage', message);")]),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("\n            In order to forcefully dismiss the modal message from code, emit a separate event with the same message ID\n            set earlier:\n        ")]),e._v(" "),s("pre",{staticClass:"DesignSystem"},[e._v("this.$bus.$emit('hideModalMessage', id);")]),e._v(" "),e._m(3),e._v(" "),s("CommonNotice",{attrs:{text:"Modal messages support only a single message at one time. If you trigger another message while\n                the modal is still open, the component will just throw an error in the browser console and preserve the\n                last message on screen. If your use-case is about showing multiple messages that could be displayed at\n                the same time, please consider using toast messages instead.",title:"One at a time",type:"Warning"}}),e._v(" "),s("h2",{staticClass:"DesignSystem"},[e._v("\n            Recommended Usage\n        ")]),e._v(" "),s("p",[e._v("\n            It is strongly recommended to primarily use toast messages for informing users about the application events.\n            They support multiple messages at the same time, and will be automatically dismissed by default. An example\n            includes an error message about failed action, or confirmation message that an action was successfully\n            executed.\n        ")]),e._v(" "),s("p",[e._v("\n            Only in case you need to explicitly block the user from interacting with the app should you use modal\n            messages. Even in this case you need to be extra careful not to trigger them in an automated way, since they\n            support only one message at a time. An example could be a confirmation dialog in case an entity will\n            irrevocably be deleted, or if the user is asked to acknowledge an important information.\n        ")]),e._v(" "),s("h2",{staticClass:"DesignSystem"},[e._v("\n            Frost Mode\n        ")]),e._v(" "),s("p",[e._v('\n            Both toast and modal messages support the "frost mode". It can be used to limit the user interaction with\n            the messages in case they don\'t originate from the current task. The filtering is done via an identifier\n            which is unique for the current view (i.e. one that activated the frost mode).\n        ')]),e._v(" "),s("p",[e._v("\n            To activate the frost mode, simply emit the following event with a randomly generated identifier:\n        ")]),e._v(" "),s("pre",{staticClass:"DesignSystem"},[e._v("this.$bus.$emit('activateFrostMode', '473d8240-5b77-11e9-befd-0b344ce825c2');")]),e._v(" "),s("CommonNotice",{attrs:{text:"If frost mode is activated by several different views, only the identifier of the last caller\n                that did it will be considered the valid one. This behavior will try to rectify an unexpected state\n                where one caller forgot to deactivate the frost mode.",title:"Last caller wins",type:"Warning"}}),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("For example, following modal message will be blocked:")]),e._v(" "),s("pre",{staticClass:"DesignSystem"},[e._v("this.$bus.$emit('showModalMessage', {\n    id: 'anExternalModalMessage',\n    text: translatable('You will never see me :('),\n    okCallback: () => {\n        // Do something when OK is clicked.\n    },\n});")]),e._v(" "),s("p",[e._v("\n            However, the following modal message will be shown to the user, since it contains the same identifier used\n            to activate the frost mode:\n        ")]),e._v(" "),s("pre",{staticClass:"DesignSystem"},[e._v("this.$bus.$emit('showModalMessage', {\n    id: 'anInternalModalMessage',\n    text: translatable('I work even in frost mode!'),\n    okCallback: () => {\n        // Do something when OK is clicked.\n    },\n    frostModeId: '473d8240-5b77-11e9-befd-0b344ce825c2',\n});")]),e._v(" "),s("CommonNotice",{attrs:{text:"It's always a good practice to save the frost mode identifier in the local data model for\n                further usage. Remember, you will still be required to deactivate the frost mode after it's not\n                applicable anymore (i.e. user task has been finished).",title:"Keep track of the frost mode identifier locally"}}),e._v(" "),s("p",[e._v("\n            To deactivate the frost mode, just emit the following event with the same identifier used to activate it:\n        ")]),e._v(" "),s("pre",{staticClass:"DesignSystem"},[e._v("this.$bus.$emit('deactivateFrostMode', '473d8240-5b77-11e9-befd-0b344ce825c2');")]),e._v(" "),s("CommonNotice",{attrs:{text:"If supplied identifier during the deactivation call is not the same as one used to activate\n                the current frost mode, it will simply be ignored, and the frost mode will persist.",title:"Make sure your deactivation identifier is valid",type:"Warning"}}),e._v(" "),s("h2",{staticClass:"DesignSystem"},[e._v("\n            Application Reload Message\n        ")]),e._v(" "),e._m(5),e._v(" "),s("b-tabs",{staticClass:"DesignSystem__TabContent"},[s("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[s("DocsExample",{ref:"docsExample",attrs:{component:e.component,"component-namespace":e.componentNamespace,"component-path":e.componentPath,props:e.props,events:e.events,"custom-code":e.customCode,slots:e.slots,"is-global":e.isGlobal,"has-own-api":e.hasOwnApi,example:e.example}})],1),e._v(" "),s("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[s("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n            Please take a look at the API Documentation for "),t("code",[this._v("showToastMessage()")]),this._v(" method for the description\n            of the message payload and supported features.\n        ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n            It's also possible to automatically dismiss any shown toast messages every time app navigates to another\n            route. Just make sure that "),t("code",[this._v("autoClearToastMessages")]),this._v(" prop is set to true, this is a global\n            configuration.\n        ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n            Please take a look at the API Documentation for "),t("code",[this._v("showModalMessage()")]),this._v(" method for the description\n            of the message payload and supported features.\n        ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n            Please note that modal messages are of blocking nature by default. If you want to allow users to dismiss the\n            modal without actually selecting one of the offered choices, you can trigger it with "),t("code",[this._v("allowClose")]),this._v("\n            flag. In this case, users will be able to close the dialog via a close button too, or by clicking anywhere\n            outside it, or via the escape key.\n        ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n            When the frost mode is active, all toast callbacks (i.e. on "),t("em",[this._v("click")]),this._v(") and complete modal messages will\n            be blocked with a suitable message, unless they contain the same identifier for their\n            "),t("code",[this._v("frostModeId")]),this._v(" message key as the one used to activate it.\n        ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n            When this component is included in the app, an application manifest check will be executed in the background\n            every 30 seconds. If the manifest changes (i.e. app has been rebuilt), a suitable toast message will inform\n            user about it and offer a way to reload the app. In case this is not desired, the feature can be disabled\n            via "),t("code",[this._v("noAppReloadMessage")]),this._v(" prop, just make sure it's set to true.\n        ")])}],!1,null,null,null);t.default=f.exports}}]);