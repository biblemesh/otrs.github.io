(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1BT7":function(e,t,o){"use strict";o.r(t);var l=o("gki9"),n=o.n(l),i=o("F/wX"),r=o.n(i),a={name:"FormAutocomplete",components:{FormSelect:function(){return Promise.all([o.e(0),o.e(2),o.e(24)]).then(o.bind(null,"cDBQ"))}},props:{value:{type:null},url:{type:String,required:!0},params:{type:Object},error:{type:String},label:{type:String},labelPlaceholder:{type:Array},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},autoFocus:{type:Boolean,default:!1},name:{type:String},noResultsText:{type:String},multiple:{type:Boolean,default:!1},searchPromptText:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1},placeholder:{type:String},clearOnSelect:{type:Boolean,default:!1},testMode:{type:Boolean,default:!1}},data:function(){return{options:[],searchTimeout:{id:null,callback:null}}},computed:{localValue:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t)}},finalParams:function(){return this.params}},methods:{loadOptions:function(e){var t=this,o=e.action,l=e.callback,n=e.searchQuery;if("ASYNC_SEARCH"===o){if(this.searchQuery=n,this.searchTimeout.id&&(clearTimeout(this.searchTimeout.id),this.searchTimeout.callback(null,[]),this.searchTimeout.id=null,this.searchTimeout.callback=null),!n)return this.options=[],void l(null,this.options);this.searchTimeout.callback=l,this.searchTimeout.id=setTimeout(function(){t.fetchOptions(n,l)},400)}},fetchOptions:function(e,t){var o=this;this.testMode?setTimeout(function(){o.options=r.a.tz.names().reduce(function(t,o){return t.length<20&&-1!==o.toLowerCase().indexOf(e.toLowerCase())&&t.push({id:o,label:o,data:{timezoneId:o}}),t},[]),t(null,o.options)},300):this.clientSendRequest({Path:this.url,Method:"get",Query:n()({SearchTerm:e},this.finalParams)}).then(function(e){o.options=e.Body.Options,t(null,o.options)}).catch(function(e){o.options=[],o.$log.error(e),t("An error occurred while fetching the options.",[])})},focus:function(){this.$refs.formSelect&&this.$refs.formSelect.focus()},select:function(e,t){this.$emit("select",e,t)},filter:function(e){return this.$refs.formSelect.filter(e)}}},s=(o("Mk2q"),o("psIG")),c=Object(s.a)(a,function(){var e=this,t=e.$createElement;return(e._self._c||t)("FormSelect",{ref:"formSelect",staticClass:"Form__Autocomplete",attrs:{"auto-focus":e.autoFocus,error:e.error,label:e.label,"label-placeholder":e.labelPlaceholder,"label-sr-only":e.labelSrOnly,required:e.required,description:e.description,name:e.name,multiple:e.multiple,disabled:e.disabled,hidden:e.hidden,"hide-description":e.hideDescription,placeholder:e.placeholder,"clear-on-select":e.clearOnSelect,options:e.options,"load-options":e.loadOptions,"cache-options":!1,"no-results-text":e.noResultsText,"search-prompt-text":e.searchPromptText,async:"","open-on-focus":""},on:{select:e.select},scopedSlots:e._u([{key:"append-inline",fn:function(){return[e._t("append-inline")]},proxy:!0}],null,!0),model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}})},[],!1,null,null,null);t.default=c.exports},"9Zdt":function(e,t,o){},Mk2q:function(e,t,o){"use strict";var l=o("9Zdt");o.n(l).a}}]);