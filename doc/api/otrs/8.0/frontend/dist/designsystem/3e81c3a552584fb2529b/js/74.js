(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"7CRW":function(t,e,o){},"cZP/":function(t,e,o){"use strict";o.r(e);o("DbwS"),o("t91x");var n={name:"BusinessObjectWidgetPropertyLayout",components:{Form:function(){return Promise.all([o.e(7),o.e(8),o.e(15)]).then(o.bind(null,"GgUG"))}},props:{propertyName:{type:String,required:!0},active:{type:[Boolean],default:!0},isEditable:{type:[Boolean],default:!1},label:{type:String,required:!0},formSchemaUrl:{type:String,required:!0},propertyUpdateUrl:{type:String,required:!0},formRequestParams:{type:Object},formMode:{type:Boolean,default:!1},columnLayout:{type:String}},data:function(){return{expanded:!1,dataChanged:!1}},computed:{localFormMode:{get:function(){return this.formMode},set:function(t){this.$emit("form-mode",t)}},xlCols:function(){switch(this.columnLayout){case"ThreeColumns":return this.expanded?12:6;case"TwoColumns":return this.expanded?12:4;case"OneColumn":default:return this.expanded?12:3}},lgCols:function(){switch(this.columnLayout){case"ThreeColumns":return 12;case"TwoColumns":return this.expanded?12:6;case"OneColumn":default:return this.expanded?12:4}},mdCols:function(){switch(this.columnLayout){case"ThreeColumns":case"TwoColumns":return 12;case"OneColumn":default:return this.expanded?12:6}}},methods:{toggleProperty:function(){this.expanded=!this.expanded},toggleFormMode:function(){this.localFormMode?this.cancel():this.localFormMode=!this.localFormMode},saveAndClose:function(){this.$refs.form.submit()},onFormChanged:function(){this.dataChanged=!0},onFormValid:function(t){var e=this;if(!this.dataChanged)return this.$emit("cancel"),void(this.localFormMode=!1);var o=t;this.clientSendRequest({Path:this.propertyUpdateUrl,Method:"post",Body:o}).then(function(){e.$emit("updated"),e.dataChanged=!1,e.localFormMode=!1,e.$nextTick(function(){e.$test.setFlag("WidgetPropertyUpdate::".concat(e.propertyName))})}).catch(function(t){e.$log.error(t),e.$bus.$emit("showToastMessage",{id:"propertyUpdate",text:"The widget property could not be updated.",variant:"danger",persistent:!1})})},confirmCancel:function(){var t=this;return new Promise(function(e){t.dataChanged?t.$bus.$emit("showModalMessage",{id:"confirmCancel",heading:"Discard Changes",text:"You have unsaved changes. Do you really want to close?",buttonBehavior:"yesNo",okCallback:function(){t.$refs.form&&t.$refs.form.resetForm(!0,!0),e(!0)},cancelCallback:function(){e(!1)}}):e(!0)})},onFormInValid:function(t){this.$emit("invalid",t)},cancel:function(){var t=this;this.confirmCancel().then(function(e){e&&(t.$emit("cancel"),t.dataChanged=!1,t.localFormMode=!1)})}}},a=(o("vjyK"),o("psIG")),r=Object(a.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.active?o("b-col",{attrs:{xl:t.xlCols,lg:t.lgCols,md:t.mdCols}},[o("b-row",[o("b-col",{staticClass:"border bg-white mr-3 mb-3 PropertyCard"},[o("b-row",{staticClass:"py-2 border-bottom",attrs:{"align-v":"center"}},[o("b-col",{staticClass:"PropertyCard__Header"},[o("h3",{staticClass:"p-0 m-0"},[t._v("\n                        "+t._s(t._f("translate")(t.label))+"\n                    ")])]),t._v(" "),o("b-col",{staticClass:"text-right",attrs:{cols:"auto"}},[t.isEditable?o("CommonLink",{on:{click:t.toggleFormMode}},[o("CommonIcon",{attrs:{icon:"content-pen-3"}})],1):t._e(),t._v(" "),o("CommonLink",{staticClass:"ml-2",on:{click:t.toggleProperty}},[o("CommonIcon",{attrs:{icon:t.expanded?"shrink-2":"expand-3"}})],1)],1)],1),t._v(" "),o("b-row",[o("b-col",{staticClass:"py-2 mx-3 px-0 PropertyCard__Content__Wrapper",class:t.formMode||t.expanded?"DynamicHeight":"FixedHeight"},[t.formMode?o("div",{key:"form"+t.propertyName+"Property"},[o("Form",{ref:"form",attrs:{url:t.formSchemaUrl,params:t.formRequestParams,"hide-description":"","emit-values-in-complex-object":""},on:{changed:t.onFormChanged,invalid:t.onFormInValid,valid:t.onFormValid}}),t._v(" "),o("b-row",{attrs:{"no-gutters":""}},[o("b-col",{staticClass:"col-12 text-right"},[o("CommonLink",{staticClass:"btn btn-secondary Button Button--Secondary",on:{click:function(e){return t.cancel()}}},[t._v("\n                                    "+t._s(t._f("translate")("Cancel"))+"\n                                ")]),t._v(" "),o("CommonLink",{staticClass:"btn btn-primary Button Button--Primary",on:{click:function(e){return t.saveAndClose()}}},[t._v("\n                                    "+t._s(t._f("translate")("Save"))+"\n                                ")])],1)],1)],1):t._t("default")],2)],1)],1)],1)],1):t._e()},[],!1,null,null,null);e.default=r.exports},vjyK:function(t,e,o){"use strict";var n=o("7CRW");o.n(n).a}}]);