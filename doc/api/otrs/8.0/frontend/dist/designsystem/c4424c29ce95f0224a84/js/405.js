(window.webpackJsonp=window.webpackJsonp||[]).push([[405,66],{"09aC":function(t,e,i){},1:function(t,e){},"8Lk7":function(t,e,i){"use strict";i("W1QL"),i("K/PF"),i("t91x"),i("75LO");var a={system:"OS",agent:"AG",customer:"CU"};e.a={props:{userType:{type:String,required:!0,validator:function(t){return-1!==Object.keys(a).indexOf(t)}}},computed:{initials:function(){var t=this.user||{},e=[],i=t.UserFirstname,r=t.UserLastname;return i?(e.push(i.charAt(0).toUpperCase()),r&&e.push(r.charAt(0).toUpperCase()),e.join("")):a[this.userType]}}}},KbHG:function(t,e,i){"use strict";var a=i("09aC");i.n(a).a},Mb4K:function(t,e,i){"use strict";i.r(e);var a={name:"CommonAvatar",mixins:[i("8Lk7").a],props:{image:{type:String},icon:{type:String},iconWeight:{type:String,default:"bold"},user:{type:Object},title:{type:String}},data:function(){return{}},computed:{avatarImage:function(){if(null!==this.image&&void 0!==this.image)return this.image}},methods:{click:function(t){this.$emit("click",t)}}},r=(i("KbHG"),i("psIG")),n=Object(r.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Avatar Avatar__Image",on:{click:function(e){return t.click()}}},[t.icon?i("span",[i("CommonIcon",{attrs:{icon:t.icon,weight:t.iconWeight,size:"lg"}})],1):t.avatarImage?i("img",{attrs:{src:t.avatarImage,title:t.title,alt:""}}):i("span",{attrs:{title:t.title}},[t._v("\n        "+t._s(t.initials)+"\n    ")])])},[],!1,null,null,null);e.default=n.exports},aT5g:function(t,e,i){"use strict";var a=i("xfeF");i.n(a).a},evpg:function(t,e,i){"use strict";i.r(e);i("2Tod"),i("ABKx"),i("W1QL"),i("K/PF"),i("t91x"),i("75LO");var a=i("OvAC"),r=i.n(a),n=i("Mb4K"),o=i("cq1r"),s=i.n(o),l=i("lOrp"),c={computed:{chatAvailability:function(){return this.chatEngineActive&&null!==this.$store.getters.userInfo.ChatAvailability?parseInt(this.$store.getters.userInfo.ChatAvailability,10):null},chatEngineActive:function(){return this.config&&this.config["ChatEngine::Active"]}}};function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,a)}return i}var g={name:"CommonAvatarAgent",extends:n.default,mixins:[c],props:{gravatarEmailAddress:{type:String},borderColor:{type:String},disabled:{type:Boolean,default:!1},testMode:{type:Boolean,default:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach(function(e){r()(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}({gravatarLink:function(){if(this.$store&&this.$store.getters&&void 0!==this.$store.getters.config&&Object.keys(this.$store.getters.config).length&&"Gravatar"===this.$store.getters.config["AgentFrontend::Avatar::Fallback"]&&"agent"===this.userType&&this.gravatarEmailAddress){var t="mm",e=(new s.a).update(this.gravatarEmailAddress).digest("hex");return this.$store&&this.$store.getters&&void 0!==this.$store.getters.config&&Object.keys(this.$store.getters.config).length&&this.$store.getters.config["AgentFrontend::Gravatar::DefaultImage"]&&(t=this.$store.getters.config["AgentFrontend::Gravatar::DefaultImage"]),"//www.gravatar.com/avatar/".concat(e,"?s=100&d=").concat(t)}},chatEngineActive:function(){return!this.testMode&&this.config["ChatEngine::Active"]},chatAvailabilityIcon:function(){return 1===this.chatAvailability?"regular,messages-bubble":2===this.chatAvailability?"bold,messages-bubble":"regular,messages-bubble-disable"},chatAvailabilityIconClass:function(){return 1===this.chatAvailability?"Avatar__ChatAvailability--Internal":2===this.chatAvailability?"Avatar__ChatAvailability--External":"Avatar__ChatAvailability--NotAvailable"}},Object(l.b)(["config"]))},v=(i("aT5g"),i("psIG")),h=Object(v.a)(g,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("CommonLink",{staticClass:"d-inline-block Avatar Avatar__Image",attrs:{disabled:t.disabled},on:{click:function(e){return t.click()}}},[t.icon?i("span",{style:{borderColor:t.borderColor}},[i("CommonIcon",{attrs:{icon:t.icon,weight:t.iconWeight,size:"lg"}})],1):t.avatarImage?i("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline-block overflow-hidden",style:{borderColor:t.borderColor},attrs:{src:t.avatarImage,title:t.title,alt:t._f("translate")("Avatar image of the user")}}):t.gravatarLink?i("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline-block overflow-hidden",style:{borderColor:t.borderColor},attrs:{src:t.gravatarLink,title:t.title,alt:t._f("translate")("Gravatar image of the user")}}):i("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],style:{borderColor:t.borderColor},attrs:{title:t.title}},[t._v("\n        "+t._s(t.initials)+"\n    ")]),t._v(" "),t.chatEngineActive?i("CommonIcon",{staticClass:"Avatar__ChatAvailability",class:t.chatAvailabilityIconClass,attrs:{"weight-with-icon":t.chatAvailabilityIcon}}):t._e()],1)},[],!1,null,null,null);e.default=h.exports},xfeF:function(t,e,i){}}]);