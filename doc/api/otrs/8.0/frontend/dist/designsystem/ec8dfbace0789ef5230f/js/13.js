(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1BT7":function(e,t,o){"use strict";o.r(t);o("2Tod"),o("ABKx"),o("W1QL"),o("K/PF"),o("t91x"),o("75LO");var n=o("OvAC"),r=o.n(n),l=o("F/wX"),i=o.n(l);function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}var c={name:"FormAutocomplete",components:{FormSelect:function(){return Promise.all([o.e(0),o.e(2),o.e(143)]).then(o.bind(null,"cDBQ"))}},props:{value:{type:null},url:{type:String,required:!0},params:{type:Object},error:{type:String},label:{type:String},labelPlaceholder:{type:Array},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},autoFocus:{type:Boolean,default:!1},name:{type:String},noResultsText:{type:String},multiple:{type:Boolean,default:!1},searchPromptText:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1},placeholder:{type:String},clearOnSelect:{type:Boolean,default:!1},testMode:{type:Boolean,default:!1}},data:function(){return{options:[],searchTimeout:{id:null,callback:null}}},computed:{localValue:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t)}},finalParams:function(){return this.params}},methods:{loadOptions:function(e){var t=this,o=e.action,n=e.callback,r=e.searchQuery;if("ASYNC_SEARCH"===o){if(this.searchQuery=r,this.searchTimeout.id&&(clearTimeout(this.searchTimeout.id),this.searchTimeout.callback(null,[]),this.searchTimeout.id=null,this.searchTimeout.callback=null),!r)return this.options=[],void n(null,this.options);this.searchTimeout.callback=n,this.searchTimeout.id=setTimeout(function(){t.fetchOptions(r,n)},400)}},fetchOptions:function(e,t){var o=this;this.testMode?setTimeout(function(){o.options=i.a.tz.names().reduce(function(t,o){return t.length<20&&-1!==o.toLowerCase().indexOf(e.toLowerCase())&&t.push({id:o,label:o,data:{timezoneId:o}}),t},[]),t(null,o.options)},300):this.clientSendRequest({Path:this.url,Method:"get",Query:function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(o,!0).forEach(function(t){r()(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}({SearchTerm:e},this.finalParams)}).then(function(e){o.options=e.Body.Options,t(null,o.options)}).catch(function(e){o.options=[],o.$log.error(e),t("An error occurred while fetching the options.",[])})},focus:function(){this.$refs.formSelect&&this.$refs.formSelect.focus()},select:function(e,t){this.$emit("select",e,t)},filter:function(e){return this.$refs.formSelect.filter(e)}}},s=(o("Mk2q"),o("psIG")),u=Object(s.a)(c,function(){var e=this,t=e.$createElement;return(e._self._c||t)("FormSelect",{ref:"formSelect",staticClass:"Form__Autocomplete",attrs:{"auto-focus":e.autoFocus,error:e.error,label:e.label,"label-placeholder":e.labelPlaceholder,"label-sr-only":e.labelSrOnly,required:e.required,description:e.description,name:e.name,multiple:e.multiple,disabled:e.disabled,hidden:e.hidden,"hide-description":e.hideDescription,placeholder:e.placeholder,"clear-on-select":e.clearOnSelect,options:e.options,"load-options":e.loadOptions,"cache-options":!1,"no-results-text":e.noResultsText,"search-prompt-text":e.searchPromptText,async:"","open-on-focus":""},on:{select:e.select},scopedSlots:e._u([{key:"append-inline",fn:function(){return[e._t("append-inline")]},proxy:!0}],null,!0),model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}})},[],!1,null,null,null);t.default=u.exports},"9Zdt":function(e,t,o){},Mk2q:function(e,t,o){"use strict";var n=o("9Zdt");o.n(n).a}}]);