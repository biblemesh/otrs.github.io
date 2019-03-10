(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{"433n":function(e,a,t){"use strict";t.r(a);t("GkPX"),t("K/PF"),t("75LO"),t("W1QL");var i=t("8CHY"),l=t("A86J"),o=t("IA8J"),n={name:"FormUpload",directives:{focus:{inserted:function(e,a){a.value&&e.querySelector("input").focus()}}},mixins:[l.a],props:{name:{type:String},formId:{type:String,required:!0},uploadPath:{type:String,required:!0},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1},placeholder:{type:String,default:"Select or drop files here."},multiple:{type:Boolean,default:!0},testMode:{type:Boolean,default:!1},fileIcon:{type:String,default:"file"},displayValue:{type:Object},value:{type:[Array,Object]}},data:function(){return{files:[],uploads:{},localValue:{},fileSizeUploadError:!1}},computed:{fieldId:function(){return"formUpload-".concat(this._uid)},hasUploadError:function(){var e=this,a=!1;return this.fileSizeUploadError||Object.keys(this.uploads).forEach(function(t){"danger"===e.uploads[t].variant&&(a=!0)}),a}},watch:{localValue:function(e){this.$emit("input",e)},displayValue:function(){this.uploads={}}},mounted:function(){this.initSelectedFiles()},methods:{uploadFiles:function(){var e=this,a=this.files;Array.isArray(a)||(a=[],null!==this.files&&a.push(this.files)),a.length&&(this.multiple||Object.keys(this.uploads).forEach(function(a){var t=e.uploads[a];e.deleteFile(t.fieldId,t.filename)}),a.forEach(function(a){if(e.$set(e.uploads,a.name,{filename:a.name,fileId:null,progress:0,variant:"",type:a.type,size:a.size}),e.testMode)return e.$nextTick(function(){e.uploads[a.name].progress=100}),Math.floor(2*Math.random())?e.uploadFileDisplay(a.name,a):(e.$refs.uploadFile.reset(),e.uploads[a.name].variant="danger"),void(e.files=[]);if(a.size>e.$store.getters.config.WebMaxFileUpload)return e.$refs.uploadFile.reset(),e.uploads[a.name].variant="danger",void(e.fileSizeUploadError=!0);e.fileSizeUploadError=!1;var t=new FormData;t.append("Upload",a),t.append("Disposition","attachment"),e.clientSendRequest({Path:"".concat(e.uploadPath,"/").concat(e.formId),Method:"post",Body:t},{xhr:!0,responseType:"json",responseTimeout:0,onUploadProgress:function(t){t.lengthComputable?e.uploads[a.name].progress=100*t.loaded/t.total:e.uploads[a.name].variant="warning"}}).then(function(t){e.uploadFileDisplay(a.name,t.Body),e.files=[]}).catch(function(t){e.$log.error(t),e.$refs.uploadFile.reset(),e.uploads[a.name].variant="danger",e.files=[]})}))},uploadFileDisplay:function(e,a){this.testMode&&(a.FileSize=a.size,delete a.size,a.ContentType=a.type,delete a.type,a.FileID=Math.floor(100*Math.random()+1));var t=a.FileID;this.$refs.uploadFile.reset(),this.$set(this.uploads[e],"fileId",t),this.$set(this.uploads[e],"variant","success"),this.$set(this.uploads[e],"size",a.FileSize),this.$set(this.uploads[e],"type",a.ContentType),this.$set(this.localValue,t,this.uploads[e]),this.$emit("input",this.localValue)},deleteFile:function(e,a){var t=this;if(e&&!this.testMode)this.clientSendRequest({Path:"".concat(this.uploadPath,"/").concat(this.formId),Method:"delete",Body:{Filename:a}}).then(function(){t.$delete(t.uploads,a),t.$delete(t.localValue,e)}).catch(function(e){t.$log.error(e),t.uploads[a].variant="danger"});else if(e)this.$delete(this.uploads,a),this.$delete(this.localValue,e);else{var i=this.uploads[a].fileId;this.$delete(this.uploads,a),this.localValue[i]&&this.$delete(this.localValue,i)}this.fileSizeUploadError=!1},reset:function(){this.files=[],this.$refs.uploadFile.reset(),this.uploads={},this.localValue={}},initSelectedFiles:function(){var e=this,a=this.value;a&&(Array.isArray(a)||(a=[a]),a.forEach(function(a){a&&Object.keys(a).forEach(function(t){var i=t,l=a[t].filename,o=a[t].type,n=a[t].size;e.$set(e.uploads,l,{fileId:i,filename:l,variant:"success",progress:100,type:o,size:n}),e.$set(e.localValue,i,l)})}))},filter:function(e){var a=this,t="";return["label","description","placeholder"].forEach(function(e){t+=a.$locale.translate(a[e])}),Object(i.a)(t,e)},fileMetadataLabel:function(e){var a;return a=e.filename,e.type&&(a+=" | ".concat(Object(o.a)(e.type).name)),e.size&&(a+=" | ".concat(this.$options.filters.filesize(e.size))),a}}},s=t("psIG"),r=Object(s.a)(n,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,label:e._f("translate")(e.label),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error)}},[e.label&&e.description&&e.hideDescription?[t("template",{slot:"label"},[e._v("\n            "+e._s(e._f("translate")(e.label))+"\n            "),t("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],staticClass:"float-right",attrs:{title:e._f("translate")(e.description)}},[t("CommonIcon",{staticClass:"mx-2",attrs:{icon:"info-circle"}})],1)],1),e._v(" "),t("template",{slot:"description"},[t("small",{staticClass:"sr-only"},[e._v("\n                "+e._s(e._f("translate")(e.description))+"\n            ")])])]:e._e(),e._v(" "),t("b-form-file",{directives:[{name:"focus",rawName:"v-focus",value:e.autoFocus,expression:"autoFocus"}],ref:"uploadFile",attrs:{id:e.fieldId,name:e.name,placeholder:e._f("translate")(e.placeholder),multiple:e.multiple},on:{input:function(a){return e.uploadFiles()}},model:{value:e.files,callback:function(a){e.files=a},expression:"files"}}),e._v(" "),t("div",{staticClass:"container-fluid"},[e.fileSizeUploadError?t("small",{staticClass:"form-text Form--Danger Form__Help"},[t("CommonIcon",{attrs:{icon:"exclamation-circle"}}),e._v("\n            "+e._s(e._f("translate")("File too large"))+"\n        ")],1):e._e(),e._v(" "),e.hasUploadError?t("small",{staticClass:"form-text Form--Danger Form__Help"},[t("CommonIcon",{attrs:{icon:"exclamation-circle"}}),e._v("\n            "+e._s(e._f("translate")("Something went wrong, please try again later."))+"\n        ")],1):e._e(),e._v(" "),e.displayValue?t("b-row",[t("b-col",{staticClass:"FormUpload__CurrentValue"},e._l(e.displayValue,function(a,i){return t("div",{key:"file-"+i},[t("CommonIcon",{attrs:{icon:e.fileIcon}}),e._v(" "+e._s(a)+"\n                ")],1)}),0)],1):e._e(),e._v(" "),e._l(e.uploads,function(a){return t("b-row",{key:a.filename,staticClass:"mt-2",attrs:{"align-v":"center"}},[t("b-col",[t("b-progress",{staticClass:"Form__Progress",attrs:{max:100}},[t("b-progress-bar",{staticClass:"Form__ProgressBar",attrs:{value:a.progress,variant:a.variant,label:e.fileMetadataLabel(a)}})],1)],1),e._v(" "),t("b-col",{attrs:{cols:"0"}},[t("CommonLink",{staticClass:"Form__UploadDelete",on:{click:function(t){return e.deleteFile(a.fileId,a.filename)}}},[t("CommonIcon",{attrs:{icon:"times",size:"md"}})],1)],1)],1)})],2)],2)},[],!1,null,null,null);a.default=r.exports},A86J:function(e,a,t){"use strict";a.a={directives:{focus:{inserted:function(e,a){a.value&&e.focus()}}},props:{autoFocus:{type:Boolean,default:!1}}}},IA8J:function(e,a,t){"use strict";t("9ovy"),t("J8hF"),t("K/PF"),t("75LO"),t("W1QL");a.a=function(e){var a={image:{name:"Image",iconclass:"fa-file-image"},audio:{name:"Audio",iconclass:"fa-file-audio"},video:{name:"Video",iconclass:"fa-file-video"},"application/pdf":{name:"PDF",iconclass:"fa-file-pdf"},"application/msword":{name:"Document",iconclass:"fa-file-word"},"application/vnd.ms-word":{name:"Document",iconclass:"fa-file-word"},"application/vnd.oasis.opendocument.text":{name:"Document",iconclass:"fa-file-word"},"application/vnd.openxmlformats-officedocument.wordprocessingml":{name:"Document",iconclass:"fa-file-word"},"application/vnd.ms-excel":{name:"Spreadsheet",iconclass:"fa-file-excel"},"application/vnd.openxmlformats-officedocument.spreadsheetml":{name:"Spreadsheet",iconclass:"fa-file-excel"},"application/vnd.oasis.opendocument.spreadsheet":{name:"Spreadsheet",iconclass:"fa-file-excel"},"application/vnd.ms-powerpoint":{name:"Presentation",iconclass:"fa-file-powerpoint"},"application/vnd.openxmlformats-officedocument.presentationml":{name:"Presentation",iconclass:"fa-file-powerpoint"},"application/vnd.oasis.opendocument.presentation":{name:"Presentation",iconclass:"fa-file-powerpoint"},"text/plain":{name:"Text",iconclass:"fa-file-text"},"text/html":{name:"HTML",iconclass:"fa-file-code"},"application/json":{name:"JSON",iconclass:"fa-file-code"},"text/calendar":{name:"Calendar",iconclass:"fa-calendar-alt"},"application/gzip":{name:"ZIP",iconclass:"fa-file-archive"},"application/zip":{name:"ZIP",iconclass:"fa-file-archive"}},t={name:"File",iconclass:"fa-file"};return void 0!==e&&Object.keys(a).forEach(function(i){var l=new RegExp(i);e.match(l)&&(t=a[i])}),t}}}]);