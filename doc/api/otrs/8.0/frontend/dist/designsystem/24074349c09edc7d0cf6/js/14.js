(window.webpackJsonp=window.webpackJsonp||[]).push([[14,7,22],{1:function(t,e){},"2/Go":function(t,e,a){},"3Hfo":function(t,e,a){"use strict";var r=a("8CHY");e.a={methods:{filter:function(t){var e=this,a="";return["label","description","localPlaceholder"].forEach(function(t){a+=e.$locale.translate(e[t])}),Object(r.a)(a,t)}}}},"8Lk7":function(t,e,a){"use strict";a("Z8gF"),a("asZ9"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO");var r={system:"OS",agent:"AG",customer:"CU"};e.a={props:{userType:{type:String,required:!0,validator:function(t){return-1!==Object.keys(r).indexOf(t)}},realname:{type:String}},computed:{initials:function(){var t=this.realname;t||(t=[this.$store.getters.userInfo.UserFirstname,this.$store.getters.userInfo.UserLastname].join(" "));var e=[],a=(t=t.replace(/"/g,"").split(/\s+/)).slice(0,1).join(""),i=t.slice(-1).join("");return a?(e.push(a.charAt(0).toUpperCase()),i&&e.push(i.charAt(0).toUpperCase()),e.join("")):r[this.userType]}}}},A86J:function(t,e,a){"use strict";e.a={directives:{focus:{inserted:function(t,e){e.value&&t.focus()}}},props:{autoFocus:{type:Boolean,default:!1}},watch:{autoFocus:function(t){t&&"function"==typeof this.focus&&this.focus()}},methods:{focus:function(){this.$el&&"function"==typeof this.$el.focus&&this.$el.focus()}}}},CGHn:function(t,e,a){"use strict";var r=a("PTyU");a.n(r).a},MKqb:function(t,e,a){"use strict";a.r(e);a("W1QL"),a("K/PF"),a("t91x"),a("75LO");var r=a("gki9"),i=a.n(r),s=a("8Lk7"),n=a("VixF"),o=a("lOrp"),l=a("cq1r"),c=a.n(l),u={name:"FormAvatar",components:{FormButton:function(){return a.e(1).then(a.bind(null,"dphA"))}},mixins:[s.a,n.a],props:{value:{type:String},name:{type:String},error:{type:String},required:{type:Boolean,default:!1},description:{type:String},useGravatar:{type:Boolean,default:!1},gravatarEmailAddress:{type:String},gravatarDefaultImage:{type:String},hidden:{type:Boolean,default:!1},hideDescription:{type:Boolean,default:!1}},data:function(){return{image:void 0,uploadText:"",uploadTextType:"",label:"Change Avatar Image",gravatarNoticeHtml:this.getGravatarNoticeHtml()}},computed:i()({},Object(o.b)(["userInfo"]),{fieldId:function(){return"formAvatar-".concat(this._uid)},gravatarImage:function(){if(this.useGravatar){var t,e=this.gravatarDefaultImage||"mm";return this.$store&&this.$store.getters&&void 0!==this.$store.getters.userInfo&&Object.keys(this.$store.getters.userInfo).length&&this.$store.getters.userInfo.UserEmail?t=(new c.a).update(this.$store.getters.userInfo.UserEmail).digest("hex"):this.gravatarEmailAddress&&(t=(new c.a).update(this.gravatarEmailAddress).digest("hex")),"//www.gravatar.com/avatar/".concat(t,"?s=100&d=").concat(e)}},avatarImage:function(){if(null!==this.value&&void 0!==this.value)return this.value}}),mounted:function(){var t=this;this.$nextTick(function(){t.$emit("loaded")})},updated:function(){var t=this;this.$nextTick(function(){t.$test.setFlag("FormAvatar::Updated")})},methods:{getGravatarNoticeHtml:function(){return this.$locale.translate("You're currently using an avatar from %s",['<a href="https://gravatar.com" target="_blank">gravatar.com</a>'])},focus:function(){this.$refs.changeButton&&this.$refs.changeButton.focus()},uploadImage:function(){var t=this;if(this.image){if(this.image.size>1048576)return this.$refs.uploadImage.reset(),this.uploadText="The file size of the image is larger than 1 MB.",this.uploadTextType="danger",void this.$nextTick(function(){t.$test.setFlag("FormAvatar::ImageTooBig")});var e=new FileReader;e.addEventListener("load",function(e){t.$emit("input",e.target.result),t.uploadTextType="",t.uploadText=""}),e.addEventListener("error",function(){t.uploadText="An error occurred during image upload.",t.uploadTextType="danger"}),e.readAsDataURL(this.image)}},removeAvatar:function(){this.$refs.uploadImage.reset(),this.$emit("input",null)},dismissStatus:function(){var t=this;setTimeout(function(){t.uploadTextType="",t.uploadText=""},2e3)},onClick:function(){this.$refs.uploadImage&&this.$refs.uploadImage.$el.click()}}},d=(a("cI0P"),a("CGHn"),a("psIG")),f=Object(d.a)(u,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!hidden"}],attrs:{"label-for":t.fieldId,state:Boolean(t.error)?"invalid":null,description:t._f("translate")(t.description),"invalid-feedback":t._f("translate")(t.error),"aria-label":t._f("translate")(t.label)},scopedSlots:t._u([t.label&&t.description&&t.hideDescription?{key:"label",fn:function(){return[t._v("\n        "+t._s(t._f("translate")(t.label))+"\n        "),a("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.html",modifiers:{html:!0}}],attrs:{title:t._f("translate")(t.description)}},[a("CommonIcon",{staticClass:"mx-2 Font--Small",attrs:{weight:"regular",icon:"messages-bubble-square-information"}})],1)]},proxy:!0}:null,t.label&&t.description&&t.hideDescription?{key:"description",fn:function(){return[a("small",{staticClass:"sr-only"},[t._v("\n            "+t._s(t._f("translate")(t.description))+"\n        ")])]},proxy:!0}:null],null,!0)},[t._v(" "),t._v(" "),a("div",{staticClass:"Form__Avatar"},[a("b-row",[a("b-col",{attrs:{cols:"4"}},[a("div",{staticClass:"Avatar Avatar__Image",on:{click:t.onClick}},[t.avatarImage?a("img",{attrs:{src:t.avatarImage,alt:t._f("translate")("Avatar image of the user")}}):t.gravatarImage?a("img",{attrs:{src:t.gravatarImage,alt:t._f("translate")("Gravatar image of the user")}}):a("span",[t._v("\n                        "+t._s(t.initials)+"\n                    ")])])]),t._v(" "),a("b-col",{staticClass:"px-0",attrs:{cols:"7","align-self":"center"}},[!t.avatarImage&&t.gravatarImage?a("div",{staticClass:"Avatar__GravatarHint",domProps:{innerHTML:t._s(t.gravatarNoticeHtml)}}):t._e(),t._v(" "),a("FormButton",{ref:"changeButton",staticClass:"Avatar__ChangeButton",attrs:{"auto-focus":t.autoFocus,text:t.label,variant:"secondary"},on:{click:t.onClick,loaded:function(e){return t.$emit("loaded")}}}),t._v(" "),a("b-form-file",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"uploadImage",attrs:{id:t.fieldId,multiple:!1,accept:"image/*",plain:""},on:{input:t.uploadImage},model:{value:t.image,callback:function(e){t.image=e},expression:"image"}})],1),t._v(" "),a("b-col",{staticClass:"pr-0",attrs:{cols:"1","align-self":"center"}},[t.value?a("CommonLink",{staticClass:"Avatar__Remove",attrs:{title:t._f("translate")("Remove avatar")},on:{click:t.removeAvatar}},[a("CommonIcon",{attrs:{weight:"bold",icon:"close"}})],1):t._e()],1)],1),t._v(" "),a("b-row",[a("b-col",[a("transition",{attrs:{"enter-class":"Transition--SlideFadeEnter","enter-active-class":"Transition--SlideFadeEnterActive","leave-active-class":"Transition--SlideFadeLeaveActive","leave-to-class":"Transition--SlideFadeLeaveTo"},on:{"after-enter":t.dismissStatus}},[t.uploadText?a("small",{staticClass:"form-text Form__Help",class:"text-"+t.uploadTextType},["success"==t.uploadTextType?a("CommonIcon",{attrs:{weight:"bold",icon:"check"}}):a("CommonIcon",{attrs:{weight:"bold",icon:"alert-circle"}}),t._v("\n                        "+t._s(t._f("translate")(t.uploadText))+"\n                    ")],1):t._e()])],1)],1)],1)])},[],!1,null,null,null);e.default=f.exports},PTyU:function(t,e,a){},VixF:function(t,e,a){"use strict";var r=a("A86J"),i=a("3Hfo");e.a={mixins:[r.a,i.a,{data:function(){return{localPlaceholder:""}},watch:{labelSrOnly:function(){this.buildLocalPlaceholder()},required:function(){this.buildLocalPlaceholder()},placeholder:function(){this.buildLocalPlaceholder()}},created:function(){var t=this;this.$bus.$on("forceUpdate",function(){t.buildLocalPlaceholder()}),this.buildLocalPlaceholder()},methods:{buildLocalPlaceholder:function(){if(this.placeholder){var t=this.$locale.translate(this.placeholder);this.labelSrOnly&&this.required&&(t="".concat(t,"*")),this.localPlaceholder=t}else this.localPlaceholder=""}}}],mounted:function(){var t=this;this.$nextTick(function(){t.$emit("loaded")})}}},cI0P:function(t,e,a){"use strict";var r=a("2/Go");a.n(r).a}}]);