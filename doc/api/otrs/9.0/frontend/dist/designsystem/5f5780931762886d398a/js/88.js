(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"4L3h":function(t,e,n){"use strict";n.r(e);var s={name:"ChatFooter",components:{FormInput:function(){return n.e(17).then(n.bind(null,"CJfq"))}},props:{value:{type:String},isValid:{type:Boolean},isSendingActive:{type:Boolean},primaryColor:{type:String},writeMessageText:{type:String,default:"Write a message."}},computed:{localValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{send:function(){this.isValid&&this.isSendingActive&&this.$emit("send")}}},a=n("psIG"),i=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-col",{staticClass:"col-12 py-0 Chat__Footer",attrs:{cols:"12"}},[n("b-row",[n("b-col",{staticClass:"px-0",attrs:{cols:"11"}},[n("FormInput",{staticClass:"Chat__Message",attrs:{placeholder:t._f("translate")(t.writeMessageText),"max-length":3800,readonly:!t.isSendingActive,autocomplete:"none",required:""},on:{enter:t.send},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}})],1),t._v(" "),n("b-col",{staticClass:"px-0 d-flex align-items-center Chat__Icons",attrs:{cols:"1"}},[t.isSendingActive?n("CommonLink",{staticClass:"Chat__Icon Chat__Icon__Send",class:{"Chat--Primary":t.isValid},style:{color:t.isValid&&t.primaryColor?t.primaryColor+" !important":null},attrs:{disabled:!t.isValid},on:{click:t.send}},[n("CommonIcon",{attrs:{weight:"bold",icon:"send-email",size:"lg"}})],1):n("CommonIcon",{attrs:{icon:"loading",spin:"",decorative:""}})],1)],1)],1)},[],!1,null,null,null);e.default=i.exports}}]);