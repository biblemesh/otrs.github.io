(window.webpackJsonp=window.webpackJsonp||[]).push([[227,70],{"09aC":function(t,e,n){},1:function(t,e){},"8Lk7":function(t,e,n){"use strict";n("W1QL"),n("K/PF"),n("t91x"),n("75LO");var o={system:"OS",agent:"AG",customer:"CU"};e.a={props:{userType:{type:String,required:!0,validator:function(t){return-1!==Object.keys(o).indexOf(t)}}},computed:{initials:function(){var t=this.user||{},e=[],n=t.UserFirstname,r=t.UserLastname;return n?(e.push(n.charAt(0).toUpperCase()),r&&e.push(r.charAt(0).toUpperCase()),e.join("")):o[this.userType]}}}},Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),r=n.n(o),s=n("nS/B"),a=n("lOrp");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}e.a={components:{CommonNotice:function(){return n.e(377).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(84).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(86).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach(function(e){r()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(a.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},KbHG:function(t,e,n){"use strict";var o=n("09aC");n.n(o).a},Mb4K:function(t,e,n){"use strict";n.r(e);var o={name:"CommonAvatar",mixins:[n("8Lk7").a],props:{image:{type:String},icon:{type:String},iconWeight:{type:String,default:"bold"},user:{type:Object},title:{type:String}},data:function(){return{}},computed:{avatarImage:function(){if(null!==this.image&&void 0!==this.image)return this.image}},methods:{click:function(t){this.$emit("click",t)}}},r=(n("KbHG"),n("psIG")),s=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Avatar Avatar__Image",on:{click:function(e){return t.click()}}},[t.icon?n("span",[n("CommonIcon",{attrs:{icon:t.icon,weight:t.iconWeight,size:"lg"}})],1):t.avatarImage?n("img",{attrs:{src:t.avatarImage,title:t.title,alt:""}}):n("span",{attrs:{title:t.title}},[t._v("\n        "+t._s(t.initials)+"\n    ")])])},[],!1,null,null,null);e.default=s.exports},"VPD/":function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),r=(n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("Mb4K")),s=n("cq1r"),a=n.n(s),i={name:"CommonAvatarAgent",extends:r.default,props:{gravatarEmailAddress:{type:String},borderColor:{type:String},disabled:{type:Boolean,default:!1}},computed:{gravatarLink:function(){if(this.$store&&this.$store.getters&&void 0!==this.$store.getters.config&&Object.keys(this.$store.getters.config).length&&"Gravatar"===this.$store.getters.config["AgentFrontend::Avatar::Fallback"]&&"agent"===this.userType&&this.gravatarEmailAddress){var t="mm",e=(new a.a).update(this.gravatarEmailAddress).digest("hex");return this.$store&&this.$store.getters&&void 0!==this.$store.getters.config&&Object.keys(this.$store.getters.config).length&&this.$store.getters.config["AgentFrontend::Gravatar::DefaultImage"]&&(t=this.$store.getters.config["AgentFrontend::Gravatar::DefaultImage"]),"//www.gravatar.com/avatar/".concat(e,"?s=100&d=").concat(t)}}}},c=(n("aT5g"),n("psIG")),l=Object(c.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CommonLink",{staticClass:"d-inline-block Avatar Avatar__Image",attrs:{disabled:t.disabled},on:{click:function(e){return t.click()}}},[t.icon?n("span",{style:{borderColor:t.borderColor}},[n("CommonIcon",{attrs:{icon:t.icon,weight:t.iconWeight,size:"lg"}})],1):t.avatarImage?n("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline-block overflow-hidden",style:{borderColor:t.borderColor},attrs:{src:t.avatarImage,title:t.title,alt:t._f("translate")("Avatar image of the user")}}):t.gravatarLink?n("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline-block overflow-hidden",style:{borderColor:t.borderColor},attrs:{src:t.gravatarLink,title:t.title,alt:t._f("translate")("Gravatar image of the user")}}):n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],style:{borderColor:t.borderColor},attrs:{title:t.title}},[t._v("\n        "+t._s(t.initials)+"\n    ")])])},[],!1,null,null,null).exports,p={name:"CommonAvatarAgent",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Apps/Agent",componentPath:"Apps/Agent/Components/Common/CommonAvatarAgent",component:l,example:{userType:{default:"agent",type:"select",options:[{value:"agent",text:"agent"},{value:"customer",text:"customer"},{value:"system",text:"system"}]},image:{type:"input"},icon:{type:"input"},gravatarEmailAddress:{type:"input"},disabled:{type:"checkbox"},user:{type:"object",UserFistname:{type:"input"},UserLastname:{type:"input"}},title:{type:"input"},borderColor:{type:"select",options:[{value:void 0,text:"-"},{value:"#ff0",text:"#ff0"},{value:"#f00",text:"#f00"},{value:"#00f",text:"#00f"},{value:"#0f0",text:"#0f0"},{value:"#0ff",text:"#0ff"},{value:"#f0f",text:"#f0f"}]}}}}},u=Object(c.a)(p,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=u.exports},aT5g:function(t,e,n){"use strict";var o=n("xfeF");n.n(o).a},xfeF:function(t,e,n){}}]);