(window.webpackJsonp=window.webpackJsonp||[]).push([[119,15],{A86J:function(t,e,o){"use strict";e.a={directives:{focus:{inserted:function(t,e){e.value&&t.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}},CWO9:function(t,e,o){"use strict";var i=o("RC2t");o.n(i).a},LdC7:function(t,e,o){"use strict";o.r(e);o("asZ9"),o("it7j"),o("W1QL"),o("K/PF"),o("75LO");var i=o("QyZy"),n={name:"FormIconChooser",components:{FormInput:function(){return o.e(19).then(o.bind(null,"CJfq"))},FormSelect:function(){return Promise.all([o.e(1),o.e(2),o.e(170)]).then(o.bind(null,"cDBQ"))}},mixins:[o("A86J").a],props:{value:{type:String},default:{type:String},weight:{type:String,default:function(){return"regular"},validator:function(t){return-1!==["regular","bold"].indexOf(t)}}},data:function(){return{metaData:[],listVisible:!1,filterText:"",iconGroupSet:null}},computed:{localValue:{get:function(){return this.value?this.value:this.default?this.default:"regular"===this.weight?"pencil-write":"tags-double"},set:function(t){this.$emit("input",t)}},iconGroupSetOptions:function(){var t=this,e=[],o=this.metaData&&Object.keys(this.metaData);return o?(o.forEach(function(o){var i=[];(t.metaData[o]&&Object.keys(t.metaData[o])).forEach(function(t){i.push({id:"group-".concat(o,"-set-").concat(t),label:t})}),e.push({id:"group-".concat(o),label:o,children:i})}),e):e}},watch:{weight:function(t){this.loadMetaData(t)}},mounted:function(){this.loadMetaData(this.weight),this.autoFocus&&this.focus()},methods:{loadMetaData:function(t){var e=this;i.default.methods.metaData(t).then(function(t){e.metaData=t.default})},toggleList:function(){this.listVisible=!this.listVisible},chooseIcon:function(t){this.localValue=t,this.toggleList()},isGroupVisible:function(t){var e=this;return!this.iconGroupSet&&!this.filterText||(this.iconGroupSet?-1!==this.iconGroupSet.indexOf("group-".concat(t)):!this.filterText||Object.keys(this.metaData[t]).find(function(o){return Object.keys(e.metaData[t][o]).find(function(i){return e.isIconVisible(t,o,i)})}))},isSetVisible:function(t,e){return!this.iconGroupSet||(-1===this.iconGroupSet.indexOf("set-")||-1!==this.iconGroupSet.indexOf("set-".concat(e)))},isIconVisible:function(t,e,o){if(!this.filterText)return!0;var i=this.filterText.toLowerCase().split(" ");return this.metaData[t][e][o].tags.find(function(t){return i.find(function(e){return 0===t.indexOf(e)})})},focus:function(){this.$refs.iconChooser.$el.focus()}}},s=(o("CWO9"),o("psIG")),a=Object(s.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-row",{staticClass:"px-3 pt-4 pb-3 IconChooser",attrs:{"no-gutters":"","align-v":"center"}},[o("b-col",[o("b-row",{attrs:{"no-gutters":""}},[o("b-col",{attrs:{cols:"1"}},[o("CommonLink",{directives:[{name:"focus",rawName:"v-focus",value:t.autoFocus,expression:"autoFocus"}],ref:"iconChooser",staticClass:"text-center p-1 IconChooser__SelectedIcon",on:{click:t.toggleList}},[o("CommonIcon",{attrs:{weight:t.weight,icon:t.localValue}})],1)],1),t._v(" "),o("b-col",{staticClass:"pl-3"},[t._t("default")],2)],1)],1)],1),t._v(" "),t.listVisible?o("b-row",{staticClass:"px-3 border-top border-bottom IconChooser__IconList",attrs:{"no-gutters":"","align-v":"center"}},[o("b-col",{staticClass:"py-3",attrs:{cols:"12"}},[o("b-row",[o("b-col",[o("FormInput",{attrs:{placeholder:t._f("translate")("Start typing to filter...")},model:{value:t.filterText,callback:function(e){t.filterText=e},expression:"filterText"}}),t._v(" "),o("FormSelect",{attrs:{options:t.iconGroupSetOptions,placeholder:t._f("translate")("Select category...")},model:{value:t.iconGroupSet,callback:function(e){t.iconGroupSet=e},expression:"iconGroupSet"}})],1)],1),t._v(" "),o("b-row",[o("b-col",[o("ul",t._l(Object.keys(t.metaData),function(e){return o("li",{key:e},[t.isGroupVisible(e)?[o("h6",{staticClass:"my-2 border-bottom"},[t._v("\n                                    "+t._s(t._f("translate")(e))+"\n                                ")]),t._v(" "),o("ul",[o("li",[t._l(Object.keys(t.metaData[e]),function(i){return[t.isSetVisible(e,i)?[t._l(Object.keys(t.metaData[e][i]),function(n){return[t.isIconVisible(e,i,n)?o("CommonLink",{key:n,staticClass:"IconChooser__Icon",class:{"IconChooser__Icon--Selected":n===t.localValue},attrs:{title:n},on:{click:function(e){return t.chooseIcon(n)}}},[o("CommonIcon",{attrs:{weight:t.weight,icon:n,size:"lg","fixed-width":""}})],1):t._e()]})]:t._e()]})],2)])]:t._e()],2)}),0)])],1)],1)],1):t._e()],1)},[],!1,null,null,null);e.default=a.exports},RC2t:function(t,e,o){}}]);