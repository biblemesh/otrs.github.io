(window.webpackJsonp=window.webpackJsonp||[]).push([[222,68],{"+J7U":function(e,t,o){var m,n,i=o("We69"),a=o("4feL"),s=0,r=0;e.exports=function(e,t,o){var u=t&&o||0,l=t||[],c=(e=e||{}).node||m,d=void 0!==e.clockseq?e.clockseq:n;if(null==c||null==d){var F=i();null==c&&(c=m=[1|F[0],F[1],F[2],F[3],F[4],F[5]]),null==d&&(d=n=16383&(F[6]<<8|F[7]))}var C=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:r+1,D=C-s+(v-r)/1e4;if(D<0&&void 0===e.clockseq&&(d=d+1&16383),(D<0||C>s)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=C,r=v,n=d;var h=(1e4*(268435455&(C+=122192928e5))+v)%4294967296;l[u++]=h>>>24&255,l[u++]=h>>>16&255,l[u++]=h>>>8&255,l[u++]=255&h;var y=C/4294967296*1e4&268435455;l[u++]=y>>>8&255,l[u++]=255&y,l[u++]=y>>>24&15|16,l[u++]=y>>>16&255,l[u++]=d>>>8|128,l[u++]=255&d;for(var p=0;p<6;++p)l[u+p]=c[p];return t||a(l)}},"4feL":function(e,t){for(var o=[],m=0;m<256;++m)o[m]=(m+256).toString(16).substr(1);e.exports=function(e,t){var m=t||0,n=o;return[n[e[m++]],n[e[m++]],n[e[m++]],n[e[m++]],"-",n[e[m++]],n[e[m++]],"-",n[e[m++]],n[e[m++]],"-",n[e[m++]],n[e[m++]],"-",n[e[m++]],n[e[m++]],n[e[m++]],n[e[m++]],n[e[m++]],n[e[m++]]].join("")}},CY3u:function(e){e.exports=JSON.parse('[{"name":"BusinessObject","items":[{"name":"BusinessObjectActions.vue"},{"name":"BusinessObjectColumnLayout.vue"},{"name":"BusinessObjectColumnLayoutSwitch.vue"},{"name":"BusinessObjectCommunicationStream","items":[{"name":"CommunicationGroupDate.vue"},{"name":"index.vue"}]},{"name":"BusinessObjectExpandableListTable.vue"},{"name":"BusinessObjectListTable","items":[{"name":"Styles","items":[{"name":"_listtable.scss"}]},{"name":"index.vue"}]},{"name":"BusinessObjectNavigationContext.vue"},{"name":"BusinessObjectWidgetItemViewTypeToggle.vue"},{"name":"BusinessObjectWidgetLayout.vue"},{"name":"BusinessObjectWidgetListRefreshNotification.vue"},{"name":"BusinessObjectWidgetListTable.vue"},{"name":"BusinessObjectWidgetPropertyCustomerLayout.vue"},{"name":"BusinessObjectWidgetPropertyLayout.vue"}]},{"name":"ChatWidget","items":[{"name":"ChatBubble.vue"},{"name":"ChatButton","items":[{"name":"AudioMute.vue"},{"name":"AudioVolume.vue"},{"name":"CallEnd.vue"},{"name":"VideoExpand.vue"},{"name":"VideoMute.vue"},{"name":"index.vue"}]},{"name":"ChatClosed","items":[{"name":"Images","items":[{"name":"chatmailicon.png"}]},{"name":"index.vue"}]},{"name":"ChatConversation.vue"},{"name":"ChatCreate","items":[{"name":"Images","items":[{"name":"chaticon.png"}]},{"name":"index.vue"}]},{"name":"ChatFooter.vue"},{"name":"ChatMessage.vue"},{"name":"ChatNewMessage.vue"},{"name":"ChatOverview.vue"},{"name":"ChatVideo.vue"},{"name":"ChatVideoInvite.vue"},{"name":"Styles","items":[{"name":"_chat.scss"}]},{"name":"index.vue"}]},{"name":"Common","items":[{"name":"CommonAlert","items":[{"name":"Styles","items":[{"name":"_alert.scss"}]},{"name":"index.vue"}]},{"name":"CommonAnnouncer","items":[{"name":"index.vue"}]},{"name":"CommonAttachmentPreview","items":[{"name":"PreviewAudio.vue"},{"name":"PreviewImage.vue"},{"name":"PreviewVideo.vue"}]},{"name":"CommonAvatar","items":[{"name":"Styles","items":[{"name":"_avatar.scss"}]},{"name":"index.vue"}]},{"name":"CommonBadge","items":[{"name":"Styles","items":[{"name":"_badge.scss"}]},{"name":"index.vue"}]},{"name":"CommonBreadcrumb","items":[{"name":"Styles","items":[{"name":"_breadcrumb.scss"}]},{"name":"index.vue"}]},{"name":"CommonCheckIcon","items":[{"name":"Styles","items":[{"name":"_checkicon.scss"}]},{"name":"index.vue"}]},{"name":"CommonChips","items":[{"name":"Styles","items":[{"name":"_chips.scss"}]},{"name":"index.vue"}]},{"name":"CommonClock.vue"},{"name":"CommonCollapsible.vue"},{"name":"CommonCollisionDetectionMessage.vue"},{"name":"CommonCopyToClipboard.vue"},{"name":"CommonDateTime.vue"},{"name":"CommonDebugger.vue"},{"name":"CommonDelete.vue"},{"name":"CommonDialog","items":[{"name":"Styles","items":[{"name":"_modal.scss"}]},{"name":"index.vue"}]},{"name":"CommonDirection.vue"},{"name":"CommonDownload","items":[{"name":"Styles","items":[{"name":"_download.scss"}]},{"name":"index.vue"}]},{"name":"CommonIcon","items":[{"name":"Fonts","items":[{"name":"streamline-bold.woff"},{"name":"streamline-bold.woff2"},{"name":"streamline-regular.woff"},{"name":"streamline-regular.woff2"}]},{"name":"Meta","items":[{"name":"streamline-bold.json"},{"name":"streamline-regular.json"}]},{"name":"Styles","items":[{"name":"_streamline-bold.scss"},{"name":"_streamline-regular.scss"}]},{"name":"index.vue"}]},{"name":"CommonLink.vue"},{"name":"CommonMessages","items":[{"name":"AppReloadMessage.vue"},{"name":"index.vue"}]},{"name":"CommonOneTimeLogin.vue"},{"name":"CommonPieChart.vue"},{"name":"CommonPills","items":[{"name":"Styles","items":[{"name":"_pills.scss"}]},{"name":"index.vue"}]},{"name":"CommonPopover.vue"},{"name":"CommonProgressBar.vue"},{"name":"CommonRelativeDateTime.vue"},{"name":"CommonSidebar.vue"},{"name":"CommonTicker.vue"}]},{"name":"Data","items":[{"name":"DataFixedTable.vue"},{"name":"DataList.vue"},{"name":"DataPager","items":[{"name":"Styles","items":[{"name":"_pagination.scss"}]},{"name":"index.vue"}]},{"name":"DataTable","items":[{"name":"Styles","items":[{"name":"_datatable.scss"}]},{"name":"index.vue"}]}]},{"name":"DynamicField","items":[{"name":"Driver","items":[{"name":"DynamicFieldActivityID.vue"},{"name":"DynamicFieldBase.vue"},{"name":"DynamicFieldCheckbox.vue"},{"name":"DynamicFieldDate.vue"},{"name":"DynamicFieldDateTime.vue"},{"name":"DynamicFieldDropdown.vue"},{"name":"DynamicFieldMultiselect.vue"},{"name":"DynamicFieldProcessID.vue"},{"name":"DynamicFieldText.vue"},{"name":"DynamicFieldTextArea.vue"}]},{"name":"DynamicFieldLabel.vue"},{"name":"Value","items":[{"name":"DynamicFieldValueActivityID.vue"},{"name":"DynamicFieldValueBase.vue"},{"name":"DynamicFieldValueCheckbox.vue"},{"name":"DynamicFieldValueDate.vue"},{"name":"DynamicFieldValueDateTime.vue"},{"name":"DynamicFieldValueDropdown.vue"},{"name":"DynamicFieldValueMultiselect.vue"},{"name":"DynamicFieldValueProcessID.vue"},{"name":"DynamicFieldValueText.vue"},{"name":"DynamicFieldValueTextArea.vue"}]},{"name":"index.vue"}]},{"name":"Form","items":[{"name":"Field","items":[{"name":"FormActionButton.vue"},{"name":"FormAgentStyle.vue"},{"name":"FormAutocomplete.vue"},{"name":"FormAvatar","items":[{"name":"Styles","items":[{"name":"_formavatar.scss"}]},{"name":"index.vue"}]},{"name":"FormButton","items":[{"name":"Styles","items":[{"name":"_button.scss"}]},{"name":"index.vue"}]},{"name":"FormCheckbox.vue"},{"name":"FormColumnsLayout.vue"},{"name":"FormCronScheduler.vue"},{"name":"FormCustomer.vue"},{"name":"FormCustomerSearch.vue"},{"name":"FormCustomerUserSearch.vue"},{"name":"FormDateTime","items":[{"name":"FlatPickr","items":[{"name":"Plugins","items":[{"name":"CalendarSelect","items":[{"name":"CalendarSelect.js"}]}]},{"name":"index.vue"}]},{"name":"Styles","items":[{"name":"_datetime.scss"}]},{"name":"index.vue"}]},{"name":"FormDateTimePeriod.vue"},{"name":"FormDateTimeRange.vue"},{"name":"FormDateTimeRelative","items":[{"name":"Styles","items":[{"name":"_formdatetimerelative.scss"}]},{"name":"index.vue"}]},{"name":"FormDateTimeScale.vue"},{"name":"FormEditor","items":[{"name":"DummyUploadAdapter.js"},{"name":"index.vue"}]},{"name":"FormEmailSecurity.vue"},{"name":"FormFilterBy.vue"},{"name":"FormIconChooser.vue"},{"name":"FormInput.vue"},{"name":"FormLanguage.vue"},{"name":"FormNotificationEvents.vue"},{"name":"FormPassword.vue"},{"name":"FormPasswordChange.vue"},{"name":"FormPlaceholder.vue"},{"name":"FormRadio.vue"},{"name":"FormRadioAutocomplete.vue"},{"name":"FormRadioButton.vue"},{"name":"FormRateFilter","items":[{"name":"Styles","items":[{"name":"_formratefilter.scss"}]},{"name":"index.vue"}]},{"name":"FormRecipients.vue"},{"name":"FormRelevantKnowledge.vue"},{"name":"FormSelect","items":[{"name":"VueTreeselect.vue"},{"name":"index.vue"}]},{"name":"FormSignature.vue"},{"name":"FormSortBy.vue"},{"name":"FormStatisticDateTimeScale.vue"},{"name":"FormStatisticPreview.vue"},{"name":"FormTextArea.vue"},{"name":"FormTrustDevice.vue"},{"name":"FormTwoFactorPreferences.vue"},{"name":"FormTwoFactorToken.vue"},{"name":"FormUpload.vue"},{"name":"FormVisibleColumns.vue"},{"name":"FormVisibleItems.vue"},{"name":"FormVoteFilter","items":[{"name":"Styles","items":[{"name":"_formvotefilter.scss"}]},{"name":"index.vue"}]}]},{"name":"FormGroup.vue"},{"name":"index.vue"}]},{"name":"Statistics","items":[{"name":"ChartBase.vue"},{"name":"Charts","items":[{"name":"BarChart.vue"},{"name":"LineChart.vue"},{"name":"StackedAreaChart.vue"}]},{"name":"Styles","items":[{"name":"nv.d3.css"}]},{"name":"index.vue"}]},{"name":"TwoFactorSetup","items":[{"name":"Method","items":[{"name":"AuthenticatorApp.vue"},{"name":"Base.vue"},{"name":"Email.vue"},{"name":"SMS.vue"}]},{"name":"PasswordCheck.vue"},{"name":"SecretVerify.vue"},{"name":"index.vue"}]}]')},Hu8H:function(e,t,o){"use strict";o.r(t);var m=o("Iptl"),n=o("egwB"),i={name:"BusinessObjectCommunicationStream",mixins:[m.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/BusinessObject/BusinessObjectCommunicationStream",value:[],component:n.default,filterText:"",example:{testMode:{default:!0},columns:{default:{articleId:{isRowKey:!0,isHidden:!0},articleNumber:{text:"#",isSortable:!1,isSorted:!1,isAscending:!1},subject:{text:"Subject",isSortable:!0,isSorted:!1,isAscending:!1}},type:"object"},totalItemCount:{default:100,type:"input"},emptyText:{default:"Currently no data available.",type:"input"},bulkActionMode:{type:"checkbox",default:!0},itemLoadingMode:{default:"button",type:"select",options:[{value:"infinite",text:"infinite"},{value:"button",text:"button"}]}}}}},a=o("psIG"),s=Object(a.a)(i,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"DesignSystem__Main"},[o("h1",{staticClass:"DesignSystem"},[e._v("\n        "+e._s(e.summary)+"\n        "),o("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v("\n            "+e._s(e.version)+"\n        ")])],1),e._v(" "),o("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[o("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),o("h2",{staticClass:"DesignSystem"},[e._v("\n        Business Object Communication Stream\n    ")]),e._v(" "),o("b-tabs",{staticClass:"DesignSystem__TabContent"},[o("b-tab",{staticClass:"tab-pane tab-pane-demo",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[o("DocsExample",{attrs:{component:e.component,"component-namespace":e.componentNamespace,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),o("b-tab",{staticClass:"tab-pane tab-pane-api",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[o("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);t.default=s.exports},Iptl:function(e,t,o){"use strict";o("2Tod"),o("ABKx"),o("W1QL"),o("K/PF"),o("t91x"),o("75LO"),o("asZ9"),o("GkPX");var m=o("OvAC"),n=o.n(m),i=o("nS/B"),a=o("lOrp");function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);t&&(m=m.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,m)}return o}t.a={components:{CommonNotice:function(){return o.e(376).then(o.bind(null,"mkLc"))},DocsExample:function(){return o.e(83).then(o.bind(null,"GD02"))},DocsComponentAPI:function(){return o.e(85).then(o.bind(null,"8txu"))}},computed:function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(o,!0).forEach(function(t){n()(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}({doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(i.b)(this.doc,"summary")},version:function(){return Object(i.b)(this.doc,"version")},description:function(){return Object(i.b)(this.doc,"description")},props:function(){return Object(i.a)(this.doc,"prop")},slots:function(){return Object(i.a)(this.doc,"slot")},events:function(){return Object(i.a)(this.doc,"event")},methods:function(){return Object(i.a)(this.doc,"method")},initialFrontend:function(){var e=this.componentNamespace.split("/");return e.length>1?e[1]:""}},Object(a.b)(["frontend"])),mounted:function(){var e=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){e.$test.setFlag("DocComponent::".concat(e.component.name,"::Mounted"))})}}},MMt3:function(e,t,o){},Moml:function(e,t,o){"use strict";var m=o("MMt3");o.n(m).a},We69:function(e,t){var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(o){var m=new Uint8Array(16);e.exports=function(){return o(m),m}}else{var n=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),n[t]=e>>>((3&t)<<3)&255;return n}}},d81p:function(e,t,o){var m={"./BusinessObject/BusinessObjectActions":["jsZX",9,377],"./BusinessObject/BusinessObjectActions.vue":["jsZX",9,377],"./BusinessObject/BusinessObjectColumnLayout":["ayTP",9,338],"./BusinessObject/BusinessObjectColumnLayout.vue":["ayTP",9,338],"./BusinessObject/BusinessObjectColumnLayoutSwitch":["0ysT",9,339],"./BusinessObject/BusinessObjectColumnLayoutSwitch.vue":["0ysT",9,339],"./BusinessObject/BusinessObjectCommunicationStream":["egwB",9,4,3,68],"./BusinessObject/BusinessObjectCommunicationStream/":["egwB",9,4,3,68],"./BusinessObject/BusinessObjectCommunicationStream/CommunicationGroupDate":["C/R+",9,91],"./BusinessObject/BusinessObjectCommunicationStream/CommunicationGroupDate.vue":["C/R+",9,91],"./BusinessObject/BusinessObjectCommunicationStream/index":["egwB",9,4,3,68],"./BusinessObject/BusinessObjectCommunicationStream/index.vue":["egwB",9,4,3,68],"./BusinessObject/BusinessObjectExpandableListTable":["g93n",9,4,3,340],"./BusinessObject/BusinessObjectExpandableListTable.vue":["g93n",9,4,3,340],"./BusinessObject/BusinessObjectListTable":["srL7",9,4,3],"./BusinessObject/BusinessObjectListTable/":["srL7",9,4,3],"./BusinessObject/BusinessObjectListTable/Styles/_listtable.scss":["CdQl",7,406],"./BusinessObject/BusinessObjectListTable/index":["srL7",9,4,3],"./BusinessObject/BusinessObjectListTable/index.vue":["srL7",9,4,3],"./BusinessObject/BusinessObjectNavigationContext":["DuyL",9,341],"./BusinessObject/BusinessObjectNavigationContext.vue":["DuyL",9,341],"./BusinessObject/BusinessObjectWidgetItemViewTypeToggle":["3V5U",9,342],"./BusinessObject/BusinessObjectWidgetItemViewTypeToggle.vue":["3V5U",9,342],"./BusinessObject/BusinessObjectWidgetLayout":["Hqm2",9,46],"./BusinessObject/BusinessObjectWidgetLayout.vue":["Hqm2",9,46],"./BusinessObject/BusinessObjectWidgetListRefreshNotification":["EiUu",9,343],"./BusinessObject/BusinessObjectWidgetListRefreshNotification.vue":["EiUu",9,343],"./BusinessObject/BusinessObjectWidgetListTable":["ob7a",9,4,3,344],"./BusinessObject/BusinessObjectWidgetListTable.vue":["ob7a",9,4,3,344],"./BusinessObject/BusinessObjectWidgetPropertyCustomerLayout":["NvFU",9,345],"./BusinessObject/BusinessObjectWidgetPropertyCustomerLayout.vue":["NvFU",9,345],"./BusinessObject/BusinessObjectWidgetPropertyLayout":["cZP/",9,346],"./BusinessObject/BusinessObjectWidgetPropertyLayout.vue":["cZP/",9,346],"./ChatWidget":["GAVU",9,22,64],"./ChatWidget/":["GAVU",9,22,64],"./ChatWidget/ChatBubble":["uuxT",9,98],"./ChatWidget/ChatBubble.vue":["uuxT",9,98],"./ChatWidget/ChatButton":["EpQy",9,42],"./ChatWidget/ChatButton/":["EpQy",9,42],"./ChatWidget/ChatButton/AudioMute":["TOBL",9,99],"./ChatWidget/ChatButton/AudioMute.vue":["TOBL",9,99],"./ChatWidget/ChatButton/AudioVolume":["ZqpL",9,100],"./ChatWidget/ChatButton/AudioVolume.vue":["ZqpL",9,100],"./ChatWidget/ChatButton/CallEnd":["iSMn",9,101],"./ChatWidget/ChatButton/CallEnd.vue":["iSMn",9,101],"./ChatWidget/ChatButton/VideoExpand":["iAEM",9,102],"./ChatWidget/ChatButton/VideoExpand.vue":["iAEM",9,102],"./ChatWidget/ChatButton/VideoMute":["iMOA",9,103],"./ChatWidget/ChatButton/VideoMute.vue":["iMOA",9,103],"./ChatWidget/ChatButton/index":["EpQy",9,42],"./ChatWidget/ChatButton/index.vue":["EpQy",9,42],"./ChatWidget/ChatClosed":["+gqe",9,38],"./ChatWidget/ChatClosed/":["+gqe",9,38],"./ChatWidget/ChatClosed/Images/chatmailicon.png":["xRqa",7,427],"./ChatWidget/ChatClosed/index":["+gqe",9,38],"./ChatWidget/ChatClosed/index.vue":["+gqe",9,38],"./ChatWidget/ChatConversation":["4DBq",9,22,367],"./ChatWidget/ChatConversation.vue":["4DBq",9,22,367],"./ChatWidget/ChatCreate":["cFE3",9,36],"./ChatWidget/ChatCreate/":["cFE3",9,36],"./ChatWidget/ChatCreate/Images/chaticon.png":["FYTe",7,428],"./ChatWidget/ChatCreate/index":["cFE3",9,36],"./ChatWidget/ChatCreate/index.vue":["cFE3",9,36],"./ChatWidget/ChatFooter":["4L3h",9,76],"./ChatWidget/ChatFooter.vue":["4L3h",9,76],"./ChatWidget/ChatMessage":["OaC0",9,77],"./ChatWidget/ChatMessage.vue":["OaC0",9,77],"./ChatWidget/ChatNewMessage":["cDum",9,104],"./ChatWidget/ChatNewMessage.vue":["cDum",9,104],"./ChatWidget/ChatOverview":["6AFu",9,105],"./ChatWidget/ChatOverview.vue":["6AFu",9,105],"./ChatWidget/ChatVideo":["IZlg",9,22,254],"./ChatWidget/ChatVideo.vue":["IZlg",9,22,254],"./ChatWidget/ChatVideoInvite":["YC5O",9,106],"./ChatWidget/ChatVideoInvite.vue":["YC5O",9,106],"./ChatWidget/Styles/_chat.scss":["nJn7",7,407],"./ChatWidget/index":["GAVU",9,22,64],"./ChatWidget/index.vue":["GAVU",9,22,64],"./Common/CommonAlert":["L3zo",9,55],"./Common/CommonAlert/":["L3zo",9,55],"./Common/CommonAlert/Styles/_alert.scss":["u+XV",7,408],"./Common/CommonAlert/index":["L3zo",9,55],"./Common/CommonAlert/index.vue":["L3zo",9,55],"./Common/CommonAnnouncer":["fWD7",9,78],"./Common/CommonAnnouncer/":["fWD7",9,78],"./Common/CommonAnnouncer/index":["fWD7",9,78],"./Common/CommonAnnouncer/index.vue":["fWD7",9,78],"./Common/CommonAttachmentPreview/PreviewAudio":["LZlC",9,347],"./Common/CommonAttachmentPreview/PreviewAudio.vue":["LZlC",9,347],"./Common/CommonAttachmentPreview/PreviewImage":["CnDm",9,379],"./Common/CommonAttachmentPreview/PreviewImage.vue":["CnDm",9,379],"./Common/CommonAttachmentPreview/PreviewVideo":["r1j1",9,380],"./Common/CommonAttachmentPreview/PreviewVideo.vue":["r1j1",9,380],"./Common/CommonAvatar":["Mb4K",9,65],"./Common/CommonAvatar/":["Mb4K",9,65],"./Common/CommonAvatar/Styles/_avatar.scss":["jHT7",7,409],"./Common/CommonAvatar/index":["Mb4K",9,65],"./Common/CommonAvatar/index.vue":["Mb4K",9,65],"./Common/CommonBadge":["B2Ms",9,31],"./Common/CommonBadge/":["B2Ms",9,31],"./Common/CommonBadge/Styles/_badge.scss":["9fjE",7,410],"./Common/CommonBadge/index":["B2Ms",9,31],"./Common/CommonBadge/index.vue":["B2Ms",9,31],"./Common/CommonBreadcrumb":["W0aG",9,39],"./Common/CommonBreadcrumb/":["W0aG",9,39],"./Common/CommonBreadcrumb/Styles/_breadcrumb.scss":["5Ydp",7,411],"./Common/CommonBreadcrumb/index":["W0aG",9,39],"./Common/CommonBreadcrumb/index.vue":["W0aG",9,39],"./Common/CommonCheckIcon":["70Qt",9,32],"./Common/CommonCheckIcon/":["70Qt",9,32],"./Common/CommonCheckIcon/Styles/_checkicon.scss":["cfE9",7,412],"./Common/CommonCheckIcon/index":["70Qt",9,32],"./Common/CommonCheckIcon/index.vue":["70Qt",9,32],"./Common/CommonChips":["2yIX",9,69],"./Common/CommonChips/":["2yIX",9,69],"./Common/CommonChips/Styles/_chips.scss":["b8rE",7,413],"./Common/CommonChips/index":["2yIX",9,69],"./Common/CommonChips/index.vue":["2yIX",9,69],"./Common/CommonClock":["X54R",9,381],"./Common/CommonClock.vue":["X54R",9,381],"./Common/CommonCollapsible":["MLVc",9,86],"./Common/CommonCollapsible.vue":["MLVc",9,86],"./Common/CommonCollisionDetectionMessage":["JKnt",9,107],"./Common/CommonCollisionDetectionMessage.vue":["JKnt",9,107],"./Common/CommonCopyToClipboard":["HvPz",9,84],"./Common/CommonCopyToClipboard.vue":["HvPz",9,84],"./Common/CommonDateTime":["g17x",9,41],"./Common/CommonDateTime.vue":["g17x",9,41],"./Common/CommonDebugger":["YBRF",9,319],"./Common/CommonDebugger.vue":["YBRF",9,319],"./Common/CommonDelete":["uda8",9,33],"./Common/CommonDelete.vue":["uda8",9,33],"./Common/CommonDialog":["CqLK",9,18],"./Common/CommonDialog/":["CqLK",9,18],"./Common/CommonDialog/Styles/_modal.scss":["cqqM",7,414],"./Common/CommonDialog/index":["CqLK",9,18],"./Common/CommonDialog/index.vue":["CqLK",9,18],"./Common/CommonDirection":["PTw7",9,382],"./Common/CommonDirection.vue":["PTw7",9,382],"./Common/CommonDownload":["YdGJ",9,63],"./Common/CommonDownload/":["YdGJ",9,63],"./Common/CommonDownload/Styles/_download.scss":["wMmX",7,415],"./Common/CommonDownload/index":["YdGJ",9,63],"./Common/CommonDownload/index.vue":["YdGJ",9,63],"./Common/CommonIcon":["QyZy",9,7],"./Common/CommonIcon/":["QyZy",9,7],"./Common/CommonIcon/Fonts/streamline-bold.woff":["Jw1u",7,429],"./Common/CommonIcon/Fonts/streamline-bold.woff2":["1u2J",7,430],"./Common/CommonIcon/Fonts/streamline-regular.woff":["oxjK",7,431],"./Common/CommonIcon/Fonts/streamline-regular.woff2":["bGLB",7,432],"./Common/CommonIcon/Meta/streamline-bold":["L0H3",3,92],"./Common/CommonIcon/Meta/streamline-bold.json":["L0H3",3,92],"./Common/CommonIcon/Meta/streamline-regular":["si/1",3,93],"./Common/CommonIcon/Meta/streamline-regular.json":["si/1",3,93],"./Common/CommonIcon/Styles/_streamline-bold.scss":["qSy5",7,416],"./Common/CommonIcon/Styles/_streamline-regular.scss":["O+6j",7,417],"./Common/CommonIcon/index":["QyZy",9,7],"./Common/CommonIcon/index.vue":["QyZy",9,7],"./Common/CommonLink":["9iYM",9,90],"./Common/CommonLink.vue":["9iYM",9,90],"./Common/CommonMessages":["B0ip",9,34,29],"./Common/CommonMessages/":["B0ip",9,34,29],"./Common/CommonMessages/AppReloadMessage":["FAt1",9,383],"./Common/CommonMessages/AppReloadMessage.vue":["FAt1",9,383],"./Common/CommonMessages/index":["B0ip",9,34,29],"./Common/CommonMessages/index.vue":["B0ip",9,34,29],"./Common/CommonOneTimeLogin":["RQQp",9,384],"./Common/CommonOneTimeLogin.vue":["RQQp",9,384],"./Common/CommonPieChart":["Q2Z8",9,87],"./Common/CommonPieChart.vue":["Q2Z8",9,87],"./Common/CommonPills":["6WrW",9,70],"./Common/CommonPills/":["6WrW",9,70],"./Common/CommonPills/Styles/_pills.scss":["enTF",7,418],"./Common/CommonPills/index":["6WrW",9,70],"./Common/CommonPills/index.vue":["6WrW",9,70],"./Common/CommonPopover":["7oBH",9,71],"./Common/CommonPopover.vue":["7oBH",9,71],"./Common/CommonProgressBar":["iAOG",9,12,45,75],"./Common/CommonProgressBar.vue":["iAOG",9,12,45,75],"./Common/CommonRelativeDateTime":["raa/",9,385],"./Common/CommonRelativeDateTime.vue":["raa/",9,385],"./Common/CommonSidebar":["MT4e",9,386],"./Common/CommonSidebar.vue":["MT4e",9,386],"./Common/CommonTicker":["hOs3",9,108],"./Common/CommonTicker.vue":["hOs3",9,108],"./Data/DataFixedTable":["R445",9,13,72],"./Data/DataFixedTable.vue":["R445",9,13,72],"./Data/DataList":["U49d",9,348],"./Data/DataList.vue":["U49d",9,348],"./Data/DataPager":["2axH",9,73],"./Data/DataPager/":["2axH",9,73],"./Data/DataPager/Styles/_pagination.scss":["E/IC",7,419],"./Data/DataPager/index":["2axH",9,73],"./Data/DataPager/index.vue":["2axH",9,73],"./Data/DataTable":["v1gf",9,13],"./Data/DataTable/":["v1gf",9,13],"./Data/DataTable/Styles/_datatable.scss":["Dkea",7,420],"./Data/DataTable/index":["v1gf",9,13],"./Data/DataTable/index.vue":["v1gf",9,13],"./DynamicField":["QAut",9,40],"./DynamicField/":["QAut",9,40],"./DynamicField/Driver/DynamicFieldActivityID":["9L8B",9,300],"./DynamicField/Driver/DynamicFieldActivityID.vue":["9L8B",9,300],"./DynamicField/Driver/DynamicFieldBase":["m5Tc",9,329],"./DynamicField/Driver/DynamicFieldBase.vue":["m5Tc",9,329],"./DynamicField/Driver/DynamicFieldCheckbox":["Hc4e",9,301],"./DynamicField/Driver/DynamicFieldCheckbox.vue":["Hc4e",9,301],"./DynamicField/Driver/DynamicFieldDate":["lkqN",9,302],"./DynamicField/Driver/DynamicFieldDate.vue":["lkqN",9,302],"./DynamicField/Driver/DynamicFieldDateTime":["cGDY",9,303],"./DynamicField/Driver/DynamicFieldDateTime.vue":["cGDY",9,303],"./DynamicField/Driver/DynamicFieldDropdown":["QiXS",9,304],"./DynamicField/Driver/DynamicFieldDropdown.vue":["QiXS",9,304],"./DynamicField/Driver/DynamicFieldMultiselect":["89rm",9,305],"./DynamicField/Driver/DynamicFieldMultiselect.vue":["89rm",9,305],"./DynamicField/Driver/DynamicFieldProcessID":["c7r1",9,306],"./DynamicField/Driver/DynamicFieldProcessID.vue":["c7r1",9,306],"./DynamicField/Driver/DynamicFieldText":["NsxO",9,307],"./DynamicField/Driver/DynamicFieldText.vue":["NsxO",9,307],"./DynamicField/Driver/DynamicFieldTextArea":["3AsB",9,308],"./DynamicField/Driver/DynamicFieldTextArea.vue":["3AsB",9,308],"./DynamicField/DynamicFieldLabel":["R4nj",9,88],"./DynamicField/DynamicFieldLabel.vue":["R4nj",9,88],"./DynamicField/Value/DynamicFieldValueActivityID":["XQpQ",9,321],"./DynamicField/Value/DynamicFieldValueActivityID.vue":["XQpQ",9,321],"./DynamicField/Value/DynamicFieldValueBase":["NSvX",9,349],"./DynamicField/Value/DynamicFieldValueBase.vue":["NSvX",9,349],"./DynamicField/Value/DynamicFieldValueCheckbox":["PIl9",9,249],"./DynamicField/Value/DynamicFieldValueCheckbox.vue":["PIl9",9,249],"./DynamicField/Value/DynamicFieldValueDate":["330A",9,322],"./DynamicField/Value/DynamicFieldValueDate.vue":["330A",9,322],"./DynamicField/Value/DynamicFieldValueDateTime":["4CtR",9,323],"./DynamicField/Value/DynamicFieldValueDateTime.vue":["4CtR",9,323],"./DynamicField/Value/DynamicFieldValueDropdown":["jYJ2",9,324],"./DynamicField/Value/DynamicFieldValueDropdown.vue":["jYJ2",9,324],"./DynamicField/Value/DynamicFieldValueMultiselect":["nf9x",9,325],"./DynamicField/Value/DynamicFieldValueMultiselect.vue":["nf9x",9,325],"./DynamicField/Value/DynamicFieldValueProcessID":["z/9O",9,326],"./DynamicField/Value/DynamicFieldValueProcessID.vue":["z/9O",9,326],"./DynamicField/Value/DynamicFieldValueText":["viZ3",9,327],"./DynamicField/Value/DynamicFieldValueText.vue":["viZ3",9,327],"./DynamicField/Value/DynamicFieldValueTextArea":["9YTs",9,328],"./DynamicField/Value/DynamicFieldValueTextArea.vue":["9YTs",9,328],"./DynamicField/index":["QAut",9,40],"./DynamicField/index.vue":["QAut",9,40],"./Form":["GgUG",9,11,14,23],"./Form/":["GgUG",9,11,14,23],"./Form/Field/FormActionButton":["mHjo",9,66],"./Form/Field/FormActionButton.vue":["mHjo",9,66],"./Form/Field/FormAgentStyle":["Wd/+",9,252],"./Form/Field/FormAgentStyle.vue":["Wd/+",9,252],"./Form/Field/FormAutocomplete":["1BT7",9,15,363],"./Form/Field/FormAutocomplete.vue":["1BT7",9,15,363],"./Form/Field/FormAvatar":["MKqb",9,12,19,25],"./Form/Field/FormAvatar/":["MKqb",9,12,19,25],"./Form/Field/FormAvatar/Styles/_formavatar.scss":["XJnz",7,421],"./Form/Field/FormAvatar/index":["MKqb",9,12,19,25],"./Form/Field/FormAvatar/index.vue":["MKqb",9,12,19,25],"./Form/Field/FormButton":["dphA",9,2,10],"./Form/Field/FormButton/":["dphA",9,2,10],"./Form/Field/FormButton/Styles/_button.scss":["7go6",7,422],"./Form/Field/FormButton/index":["dphA",9,2,10],"./Form/Field/FormButton/index.vue":["dphA",9,2,10],"./Form/Field/FormCheckbox":["Hzqv",9,5],"./Form/Field/FormCheckbox.vue":["Hzqv",9,5],"./Form/Field/FormColumnsLayout":["+p0e",9,8,56],"./Form/Field/FormColumnsLayout.vue":["+p0e",9,8,56],"./Form/Field/FormCronScheduler":["6J94",9,47],"./Form/Field/FormCronScheduler.vue":["6J94",9,47],"./Form/Field/FormCustomer":["BV6l",9,333],"./Form/Field/FormCustomer.vue":["BV6l",9,333],"./Form/Field/FormCustomerSearch":["ZCj2",9,15,334],"./Form/Field/FormCustomerSearch.vue":["ZCj2",9,15,334],"./Form/Field/FormCustomerUserSearch":["kInA",9,15,28,387],"./Form/Field/FormCustomerUserSearch.vue":["kInA",9,15,28,387],"./Form/Field/FormDateTime":["KtqP",9,6,9,52],"./Form/Field/FormDateTime/":["KtqP",9,6,9,52],"./Form/Field/FormDateTime/FlatPickr":["2O7/",9,6,79],"./Form/Field/FormDateTime/FlatPickr/":["2O7/",9,6,79],"./Form/Field/FormDateTime/FlatPickr/Plugins/CalendarSelect/CalendarSelect":["hAWS",9,373],"./Form/Field/FormDateTime/FlatPickr/Plugins/CalendarSelect/CalendarSelect.js":["hAWS",9,373],"./Form/Field/FormDateTime/FlatPickr/index":["2O7/",9,6,79],"./Form/Field/FormDateTime/FlatPickr/index.vue":["2O7/",9,6,79],"./Form/Field/FormDateTime/Styles/_datetime.scss":["1bk3",7,423],"./Form/Field/FormDateTime/index":["KtqP",9,6,9,52],"./Form/Field/FormDateTime/index.vue":["KtqP",9,6,9,52],"./Form/Field/FormDateTimePeriod":["CPql",9,0,6,9,1,218],"./Form/Field/FormDateTimePeriod.vue":["CPql",9,0,6,9,1,218],"./Form/Field/FormDateTimeRange":["jkjz",9,6,9,26,350],"./Form/Field/FormDateTimeRange.vue":["jkjz",9,6,9,26,350],"./Form/Field/FormDateTimeRelative":["jvGc",9,57],"./Form/Field/FormDateTimeRelative/":["jvGc",9,57],"./Form/Field/FormDateTimeRelative/Styles/_formdatetimerelative.scss":["t+CN",7,424],"./Form/Field/FormDateTimeRelative/index":["jvGc",9,57],"./Form/Field/FormDateTimeRelative/index.vue":["jvGc",9,57],"./Form/Field/FormDateTimeScale":["N7uR",9,0,1,30,331],"./Form/Field/FormDateTimeScale.vue":["N7uR",9,0,1,30,331],"./Form/Field/FormEditor":["GJff",9,24],"./Form/Field/FormEditor/":["GJff",9,24],"./Form/Field/FormEditor/DummyUploadAdapter":["m9dD",9,374],"./Form/Field/FormEditor/DummyUploadAdapter.js":["m9dD",9,374],"./Form/Field/FormEditor/index":["GJff",9,24],"./Form/Field/FormEditor/index.vue":["GJff",9,24],"./Form/Field/FormEmailSecurity":["zs+/",9,53],"./Form/Field/FormEmailSecurity.vue":["zs+/",9,53],"./Form/Field/FormFilterBy":["DAvA",9,48],"./Form/Field/FormFilterBy.vue":["DAvA",9,48],"./Form/Field/FormIconChooser":["LdC7",9,7,58],"./Form/Field/FormIconChooser.vue":["LdC7",9,7,58],"./Form/Field/FormInput":["CJfq",9,17],"./Form/Field/FormInput.vue":["CJfq",9,17],"./Form/Field/FormLanguage":["cMQF",9,0,1,49],"./Form/Field/FormLanguage.vue":["cMQF",9,0,1,49],"./Form/Field/FormNotificationEvents":["5ZVq",9,59],"./Form/Field/FormNotificationEvents.vue":["5ZVq",9,59],"./Form/Field/FormPassword":["dz1a",9,16],"./Form/Field/FormPassword.vue":["dz1a",9,16],"./Form/Field/FormPasswordChange":["huZh",9,11,16,14,351],"./Form/Field/FormPasswordChange.vue":["huZh",9,11,16,14,351],"./Form/Field/FormPlaceholder":["MREi",9,335],"./Form/Field/FormPlaceholder.vue":["MREi",9,335],"./Form/Field/FormRadio":["Khac",9,245],"./Form/Field/FormRadio.vue":["Khac",9,245],"./Form/Field/FormRadioAutocomplete":["V8Iu",9,54],"./Form/Field/FormRadioAutocomplete.vue":["V8Iu",9,54],"./Form/Field/FormRadioButton":["rl1q",9,21],"./Form/Field/FormRadioButton.vue":["rl1q",9,21],"./Form/Field/FormRateFilter":["+t8H",9,60],"./Form/Field/FormRateFilter/":["+t8H",9,60],"./Form/Field/FormRateFilter/Styles/_formratefilter.scss":["9XGi",7,425],"./Form/Field/FormRateFilter/index":["+t8H",9,60],"./Form/Field/FormRateFilter/index.vue":["+t8H",9,60],"./Form/Field/FormRecipients":["N66M",9,28,352],"./Form/Field/FormRecipients.vue":["N66M",9,28,352],"./Form/Field/FormRelevantKnowledge":["JDJN",9,61],"./Form/Field/FormRelevantKnowledge.vue":["JDJN",9,61],"./Form/Field/FormSelect":["cDBQ",9,0,1,27],"./Form/Field/FormSelect/":["cDBQ",9,0,1,27],"./Form/Field/FormSelect/VueTreeselect":["frf2",9,0,309],"./Form/Field/FormSelect/VueTreeselect.vue":["frf2",9,0,309],"./Form/Field/FormSelect/index":["cDBQ",9,0,1,27],"./Form/Field/FormSelect/index.vue":["cDBQ",9,0,1,27],"./Form/Field/FormSignature":["TQeE",9,253],"./Form/Field/FormSignature.vue":["TQeE",9,253],"./Form/Field/FormSortBy":["4org",9,8,50],"./Form/Field/FormSortBy.vue":["4org",9,8,50],"./Form/Field/FormStatisticDateTimeScale":["683a",9,0,1,30,255],"./Form/Field/FormStatisticDateTimeScale.vue":["683a",9,0,1,30,255],"./Form/Field/FormStatisticPreview":["6m2j",9,21,239],"./Form/Field/FormStatisticPreview.vue":["6m2j",9,21,239],"./Form/Field/FormTextArea":["TQwJ",9,35],"./Form/Field/FormTextArea.vue":["TQwJ",9,35],"./Form/Field/FormTrustDevice":["eSUN",9,5,388],"./Form/Field/FormTrustDevice.vue":["eSUN",9,5,388],"./Form/Field/FormTwoFactorPreferences":["2IPJ",9,336],"./Form/Field/FormTwoFactorPreferences.vue":["2IPJ",9,336],"./Form/Field/FormTwoFactorToken":["haP8",9,67],"./Form/Field/FormTwoFactorToken.vue":["haP8",9,67],"./Form/Field/FormUpload":["433n",9,51],"./Form/Field/FormUpload.vue":["433n",9,51],"./Form/Field/FormVisibleColumns":["DYV+",9,8,5,330],"./Form/Field/FormVisibleColumns.vue":["DYV+",9,8,5,330],"./Form/Field/FormVisibleItems":["Q6MJ",9,8,5,353],"./Form/Field/FormVisibleItems.vue":["Q6MJ",9,8,5,353],"./Form/Field/FormVoteFilter":["5PhL",9,62],"./Form/Field/FormVoteFilter/":["5PhL",9,62],"./Form/Field/FormVoteFilter/Styles/_formvotefilter.scss":["vxe5",7,426],"./Form/Field/FormVoteFilter/index":["5PhL",9,62],"./Form/Field/FormVoteFilter/index.vue":["5PhL",9,62],"./Form/FormGroup":["yFPx",9,318],"./Form/FormGroup.vue":["yFPx",9,318],"./Form/index":["GgUG",9,11,14,23],"./Form/index.vue":["GgUG",9,11,14,23],"./Statistics":["OUCj",9,74],"./Statistics/":["OUCj",9,74],"./Statistics/ChartBase":["Tla7",9,20],"./Statistics/ChartBase.vue":["Tla7",9,20],"./Statistics/Charts/BarChart":["n3vJ",9,20,369],"./Statistics/Charts/BarChart.vue":["n3vJ",9,20,369],"./Statistics/Charts/LineChart":["jFzU",9,20,368],"./Statistics/Charts/LineChart.vue":["jFzU",9,20,368],"./Statistics/Charts/StackedAreaChart":["C7To",9,20,370],"./Statistics/Charts/StackedAreaChart.vue":["C7To",9,20,370],"./Statistics/Styles/nv.d3.css":["NvO6",7,405],"./Statistics/index":["OUCj",9,74],"./Statistics/index.vue":["OUCj",9,74],"./TwoFactorSetup":["kpUM",9,44],"./TwoFactorSetup/":["kpUM",9,44],"./TwoFactorSetup/Method/AuthenticatorApp":["9xT8",9,215,371],"./TwoFactorSetup/Method/AuthenticatorApp.vue":["9xT8",9,215,371],"./TwoFactorSetup/Method/Base":["T0ip",9,389],"./TwoFactorSetup/Method/Base.vue":["T0ip",9,389],"./TwoFactorSetup/Method/Email":["ns/e",9,372],"./TwoFactorSetup/Method/Email.vue":["ns/e",9,372],"./TwoFactorSetup/Method/SMS":["kAYO",9,11,362],"./TwoFactorSetup/Method/SMS.vue":["kAYO",9,11,362],"./TwoFactorSetup/PasswordCheck":["/kAC",9,80],"./TwoFactorSetup/PasswordCheck.vue":["/kAC",9,80],"./TwoFactorSetup/SecretVerify":["0i9X",9,109],"./TwoFactorSetup/SecretVerify.vue":["0i9X",9,109],"./TwoFactorSetup/index":["kpUM",9,44],"./TwoFactorSetup/index.vue":["kpUM",9,44],"./directory-index":["CY3u",3],"./directory-index.json":["CY3u",3]};function n(e){if(!o.o(m,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=m[e],n=t[0];return Promise.all(t.slice(2).map(o.e)).then(function(){return o.t(n,t[1])})}n.keys=function(){return Object.keys(m)},n.id="d81p",e.exports=n},egwB:function(e,t,o){"use strict";o.r(t);o("W1QL"),o("K/PF"),o("t91x"),o("75LO");var m=o("srL7"),n=o("CqAs"),i={name:"BusinessObjectCommunicationStream",components:{CommunicationGroupDate:function(){return o.e(91).then(o.bind(null,"C/R+"))}},extends:m.default,mixins:[n.a],props:{disableItemLoading:{type:Boolean,default:!1}},data:function(){return{expandedRow:null,testColumns:this.columns,testItems:[]}},computed:{localRemainingItemCount:function(){return this.totalItemCount&&this.maxItems&&(this.items||this.testMode)?(this.totalItemCount>this.maxItems?this.maxItems:this.totalItemCount)-this.localItems.length:0}},methods:{toggleExpandableRow:function(e){var t=!this.items[e].itemExpanded;this.$set(this.items[e],"itemExpanded",t),this.$emit("select",this.items[e],t)},loadTestItems:function(e,t){for(var o=this,m=[],n=function(e){var n={};Object.keys(o.columns).forEach(function(m){o.columns[m].isRowKey?n[m]=t+e:/articleNumber/.test(m)?n[m]=t+e+1:/subject/.test(m)&&(n[m]=o.testTitles[Math.floor(Math.random()*o.testTitles.length)])}),m.push(n)},i=0;i<e;i++)n(i);return m}}},a=(o("Moml"),o("psIG")),s=Object(a.a)(i,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"px-3 BusinessObjectCommunicationStream"},[e._l(e.localItems,function(t,m){return o("b-row",{key:t[e.getItemRowId(t)],staticClass:"BusinessObjectCommunicationStream__Row",attrs:{"align-v":"center"}},[o("CommunicationGroupDate",{attrs:{"current-date":t.CreateTime,"previous-date":0!==m?e.localItems[m-1].CreateTime:""}}),e._v(" "),o("div",{staticClass:"BusinessObjectCommunicationStream__ExpandableContent",on:{click:function(t){return e.toggleExpandableRow(m)}}},[e._t("expandable-content",null,null,t)],2)],1)}),e._v(" "),e.localItems&&0===e.localItems.length?o("b-row",{staticClass:"py-3 text-center BusinessObjectCommunicationStream__EmptyText"},[o("b-col",[e._v("\n            "+e._s(e._f("translate")(e.emptyText))+"\n        ")])],1):e._e(),e._v(" "),o("b-row",{directives:[{name:"show",rawName:"v-show",value:null!==e.itemLoadingMode&&e.localRemainingItemCount>0&&!e.disableItemLoading,expression:"itemLoadingMode !== null && localRemainingItemCount > 0 && !disableItemLoading"}],staticClass:"my-2 text-center bg-transparent BusinessObjectCommunicationStream__LoadMore"},[o("b-col",[e._t("loading-info",[e.localRemainingItemCount&&!e.itemLoadingButtonState?o("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],attrs:{title:e._f("translate")(e.getBusinessObjectText(e.remainingItemsText),e.localRemainingItemCount)},on:{click:e.loadNextItems}},[o("CommonIcon",{attrs:{size:"sm",weight:"bold",icon:"navigation-menu-horizontal",decorative:""}})],1):e.localRemainingItemCount&&e.itemLoadingButtonState?o("CommonIcon",{attrs:{size:"sm",icon:"loading",spin:"",decorative:""}}):e._e()],{value:e.localRemainingItemCount})],2)],1)],2)},[],!1,null,null,null);t.default=s.exports},rpZP:function(e,t,o){"use strict";var m=o("+J7U"),n=o.n(m);t.a={data:function(){return{uuid:this.getUuid()}},methods:{getUuid:function(){return n()()}}}},"yBo+":function(e,t,o){"use strict";o.d(t,"a",function(){return a});o("Z8gF"),o("GkPX"),o("J8hF");var m=o("R8iU"),n=o.n(m),i=o("CY3u"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var t=new RegExp("^Components/");e=e.replace(t,"")}return function e(t){var m=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return t.forEach(function(t){if(RegExp(/\.vue$/).test(t.name)||t.items)if(t.items)a=e(t.items,m,"".concat(i).concat(t.name,"/"),a);else{var s=n.a.basename(t.name,".vue");if("index"===s&&(s=n.a.basename(i.replace(/\/index\.vue$/,"")),i=i.substr(0,i.length-s.length-1)),m&&!new RegExp("^".concat(m)).test(i))return;a[s]=function(){return o("d81p")("./".concat(i).concat(s))}}}),a}(i,e)}}}]);