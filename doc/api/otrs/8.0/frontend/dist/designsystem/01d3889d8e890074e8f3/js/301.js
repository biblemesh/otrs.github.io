(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{DDRm:function(n,e,t){"use strict";var r=t("z+fN");t.n(r).a},QBNS:function(n,e,t){"use strict";t.r(e);var r={name:"FormPermanentConfiguration",components:{Form:function(){return Promise.all([t.e(7),t.e(8),t.e(15),t.e(300)]).then(t.bind(null,"GgUG"))}},props:{screenType:{type:String},moduleType:{type:String},params:{type:Object,default:null},organizerItemName:{type:String,default:null},widgetId:{type:String}},data:function(){return{dataChanged:!1}},computed:{permanentFormConfigEndpointUrl:function(){if(this.organizerItemName)return"frontend/agent/form/config/organizer/item/permanent/".concat(this.organizerItemName);var n="frontend/agent/form/config/screen/module/permanent/".concat(this.screenType,"/").concat(this.moduleType);return this.widgetId&&(n="".concat(n,"/").concat(this.widgetId)),n}},methods:{submit:function(){this.$refs.formPermanentConfig&&this.$refs.formPermanentConfig.submit()},resetForm:function(){this.$refs.formPermanentConfig&&this.$refs.formPermanentConfig.resetForm(!0,!0)},onFormPermanentInValid:function(n){this.$emit("invalid",n)},onFormPermanentValid:function(n){delete n.FormID,delete n.Config,delete n.ContextType,this.$emit("valid",JSON.parse(JSON.stringify(n)))},onPermanentFormChanged:function(n,e){this.$emit("changed",n,e)}}},i=(t("DDRm"),t("psIG")),o=Object(i.a)(r,function(){var n=this.$createElement;return(this._self._c||n)("Form",{key:"formPermanentConfig",ref:"formPermanentConfig",attrs:{url:this.permanentFormConfigEndpointUrl,params:this.params,"hide-description":"","emit-values-in-complex-object":""},on:{changed:this.onPermanentFormChanged,invalid:this.onFormPermanentInValid,valid:this.onFormPermanentValid}})},[],!1,null,null,null);e.default=o.exports},"z+fN":function(n,e,t){}}]);