(window.webpackJsonp=window.webpackJsonp||[]).push([[34,23,54,68,277,304],{"+3YS":function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},"+bRE":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},"3Hfo":function(e,t,l){"use strict";var a=l("8CHY");t.a={methods:{filter:function(e){var t=this,l="";l+=this.$locale.translate(this.label,this.labelPlaceholder);return["description","localPlaceholder"].forEach(function(e){l+=t.$locale.translate(t[e])}),Object(a.a)(l,e)}}}},A86J:function(e,t,l){"use strict";t.a={directives:{focus:{inserted:function(e,t){t.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}},watch:{autoFocus:function(e){e&&"function"==typeof this.focus&&this.focus()}},methods:{focus:function(){this.$el&&"function"==typeof this.$el.focus&&this.$el.focus()}}}},LGHX:function(e,t,l){"use strict";var a=l("xxjL");l.n(a).a},S411:function(e,t){e.exports=function(e,t){var l=[],a=!0,o=!1,n=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(l.push(i.value),!t||l.length!==t);a=!0);}catch(e){o=!0,n=e}finally{try{a||null==s.return||s.return()}finally{if(o)throw n}}return l}},VixF:function(e,t,l){"use strict";var a=l("A86J"),o=l("3Hfo"),n=l("rpZP");t.a={mixins:[a.a,o.a,{data:function(){return{localPlaceholder:""}},watch:{labelSrOnly:function(){this.buildLocalPlaceholder()},required:function(){this.buildLocalPlaceholder()},placeholder:function(){this.buildLocalPlaceholder()}},created:function(){var e=this;this.$bus.$on("forceUpdate",function(){e.buildLocalPlaceholder()}),this.buildLocalPlaceholder()},methods:{buildLocalPlaceholder:function(){if(this.placeholder){var e=this.$locale.translate(this.placeholder);this.labelSrOnly&&this.required&&(e="".concat(e,"*")),this.localPlaceholder=e}else this.localPlaceholder=""}}},n.a],mounted:function(){var e=this;this.$nextTick(function(){e.$emit("loaded")})}}},cMQF:function(e,t,l){"use strict";l.r(t);l("it7j"),l("W1QL"),l("K/PF"),l("t91x"),l("75LO"),l("U8p0"),l("e2Kn");var a=l("VixF"),o={name:"FormLanguage",components:{FormSelect:l("cDBQ").default},mixins:[a.a],props:{value:{type:null},allowClearingDisabled:{type:Boolean},allowSelectingDisabledDescendants:{type:Boolean},alwaysOpen:{type:Boolean},async:{type:Boolean},autoLoadRootOptions:{type:Boolean,default:!0},backspaceRemoves:{type:Boolean},beforeClearAll:{type:Function},branchNodesFirst:{type:Boolean,default:!1},cacheOptions:{type:Boolean,default:!0},clearable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},defaultExpandLevel:{type:Number,default:0},defaultOptions:{type:[Boolean,Array],default:!1},deleteRemoves:{type:Boolean,default:!0},delimiter:{type:String},description:{type:String},disableBranchNodes:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},enableFuzzyMatching:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1},error:{type:String},joinValues:{type:Boolean},label:{type:String},labelPlaceholder:{type:Array},labelSrOnly:{type:Boolean,default:!1},limit:{type:Number,default:1/0},limitText:{type:Function},loading:{type:Boolean},loadOptions:{type:Function},matchKeys:{type:Array},maxHeight:{type:Number,default:300},multiple:{type:Boolean,default:!1},name:{type:String},noResultsText:{type:String,default:"No results found."},normalizer:{type:Function},openDirection:{type:String,default:"auto"},openOnClick:{type:Boolean,default:!0,note:"Whether to automatically open the menu when the control is clicked."},openOnFocus:{type:Boolean,default:!1},placeholder:{type:String},required:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},searchNested:{type:Boolean,default:!0},searchPromptText:{type:String,default:"Type to search..."},showCount:{type:Boolean,default:!1},showCountOf:{type:String},showCountOnSearch:{type:Boolean,default:!1},selectClass:{type:String},sortValueBy:{type:String},tabIndex:{type:Number},valueConsistsOf:{type:String},valueFormat:{type:String},languageData:{type:Object},showAllLanguages:{type:Boolean,default:!1},isShowAllLanguagesAvailable:{type:Boolean,default:!1}},data:function(){return{selectedValue:this.value,localLanguages:this.getLanguages(),localShowAllLanguages:this.showAllLanguages}},computed:{title:function(){return this.localShowAllLanguages?"Hide incomplete languages":"Show all languages"},tooltipTriggerId:function(){return"showAllLanguages-".concat(this.uuid)}},watch:{value:function(e){this.selectedValue=e},showAllLanguages:function(e){this.localShowAllLanguages=e},localShowAllLanguages:function(){this.localLanguages=this.getLanguages()},isShowAllLanguagesAvailable:function(){this.localLanguages=this.getLanguages()},title:function(){var e=this;this.$root.$emit("bv::hide::tooltip",this.tooltipTriggerId),this.$nextTick(function(){e.$root.$emit("bv::show::tooltip",e.tooltipTriggerId)})}},mounted:function(){var e=this;this.$bus.$on("forceUpdate",function(){e.localLanguages=e.getLanguages()})},methods:{getLanguages:function(){var e=this,t=[];if(Object.keys(this.languageData).sort().forEach(function(l){var a=e.languageData[l].Incomplete&&1===parseInt(e.languageData[l].Incomplete,10);if(!e.isShowAllLanguagesAvailable||!a||e.localShowAllLanguages){var o=e.languageData[l].NameEnglish,n=e.$options.filters.translate(o),i=e.languageData[l].NameNative,s=e.isShowAllLanguagesAvailable&&a?" ".concat(e.$options.filters.translate("(incomplete)")):"",c=i===n?"".concat(i).concat(s):"".concat(i," - ").concat(n).concat(s);t.push({id:l,label:c})}}),this.multiple){var l=(this.selectedValue||[]).filter(function(e){return t.filter(function(t){return t.id===e}).length>0});this.setSelectedValue(l)}else if(this.value){t.find(function(t){return t.id===e.value})||this.setSelectedValue(null)}return t},onOpen:function(e){this.$emit("open",e)},onInput:function(e){this.setSelectedValue(e)},onShowAllLanguages:function(){this.localShowAllLanguages=!this.localShowAllLanguages},setSelectedValue:function(e){var t=this,l=function(){t.$emit("input",e,t.selectedValue),t.selectedValue=e},a=Array.isArray(e)?e:[e],o=Array.isArray(this.selectedValue)?this.selectedValue:[this.selectedValue];return a.length!==o.length?l():(o.forEach(function(e,t){return e===a[t]||(l(),!1)}),null)},filter:function(e){return this.$refs.formSelect.filter(e)},focus:function(){this.$refs.formSelect&&this.$refs.formSelect.focus()}}},n=(l("LGHX"),l("psIG")),i=Object(n.a)(o,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("FormSelect",{ref:"formSelect",staticClass:"FormLanguage",attrs:{value:e.selectedValue,"allow-clearing-disabled":e.allowClearingDisabled,"allow-selecting-disabled-descendents":e.allowSelectingDisabledDescendants,"always-open":e.alwaysOpen,async:e.async,"auto-load-root-options":e.autoLoadRootOptions,"backspace-removes":e.backspaceRemoves,"before-clear-all":e.beforeClearAll,"branch-nodes-first":e.branchNodesFirst,"cache-options":e.cacheOptions,clearable:e.clearable,"clear-on-select":e.clearOnSelect,"close-on-select":e.closeOnSelect,"default-expand-level":e.defaultExpandLevel,"default-options":e.defaultOptions,"delete-removes":e.deleteRemoves,delimiter:e.delimiter,description:e.description,disabled:e.disabled,"enable-fuzzy-matching":e.enableFuzzyMatching,hidden:e.hidden,"hide-description":e.hideDescription,error:e.error,label:e.label,"label-placeholder":e.labelPlaceholder,"label-sr-only":e.labelSrOnly,limit:e.limit,"limit-text":e.limitText,loading:e.loading,"load-options":e.loadOptions,"match-keys":e.matchKeys,"max-height":e.maxHeight,multiple:e.multiple,name:e.name,"no-results-text":e.noResultsText,"open-direction":e.openDirection,"open-on-click":e.openOnClick,"open-on-focus":e.openOnFocus,options:e.localLanguages,placeholder:e.placeholder,required:e.required,searchable:e.searchable,"search-nested":e.searchNested,"search-prompt-text":e.searchPromptText,"show-count":e.showCount,"show-count-of":e.showCountOf,"show-count-on-search":e.showCountOnSearch,"select-class":e.selectClass,"sort-value-by":e.sortValueBy,"tab-index":e.tabIndex,"value-consists-of":e.valueConsistsOf,"value-format":e.valueFormat,"auto-focus":e.autoFocus},on:{input:e.onInput,open:e.onOpen},scopedSlots:e._u([e.isShowAllLanguagesAvailable?{key:"append-inline",fn:function(){return[l("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],class:{Disabled:!e.localShowAllLanguages},attrs:{id:e.tooltipTriggerId,title:e._f("translate")(e.title)},on:{click:e.onShowAllLanguages}},[l("CommonIcon",{staticClass:"mt-1",attrs:{weight:"bold",icon:"earth-3"}})],1)]},proxy:!0}:null],null,!0)})},[],!1,null,null,null);t.default=i.exports},nxTg:function(e,t,l){var a=l("+3YS"),o=l("S411"),n=l("+bRE");e.exports=function(e,t){return a(e)||o(e,t)||n()}},xxjL:function(e,t,l){}}]);