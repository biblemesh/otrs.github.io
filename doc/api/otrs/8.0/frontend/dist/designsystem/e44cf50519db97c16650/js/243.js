(window.webpackJsonp=window.webpackJsonp||[]).push([[243,18,22,361],{"+3YS":function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},"+bRE":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},"8/EA":function(t,e,n){"use strict";n.r(e);n("W1QL"),n("K/PF"),n("t91x"),n("75LO");var o=n("Iptl"),i=n("QyZy"),r={name:"CommonIcon",mixins:[o.a],data:function(){return{docVersion:"2.0.1",componentNamespace:"Components",componentPath:"Components/Common/CommonIcon",component:i.default,isGlobal:!0,metaData:{},example:{weight:{type:"select",options:["regular","bold"],default:"regular"},icon:{type:"select",options:[{value:void 0,text:"-"}],default:"envelope"},weightWithIcon:{type:"input"},size:{type:"select",options:[{value:void 0,text:"-"},"sm","lg","2x","3x","4x","5x"]},fixedWidth:{type:"checkbox",default:!1},spin:{type:"checkbox",default:!1},invisible:{type:"checkbox",default:!1}}}},computed:{icons:function(){var t=this,e=[{value:void 0,text:"-"}];return Object.keys(this.metaData).forEach(function(n){Object.keys(t.metaData[n]).forEach(function(o){Object.keys(t.metaData[n][o]).forEach(function(t){e.push(t)})})}),e}},watch:{icons:function(){this.$set(this.example.icon,"options",this.icons)}},created:function(){this.loadMetaData("regular")},methods:{loadMetaData:function(t){var e=this;this.component.methods.metaData(t).then(function(t){e.metaData=t.default})},onInputGeneratorValue:function(t,e){"weight"===t&&this.loadMetaData(e)}}},a=n("psIG"),s=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!"}})]:t._e(),t._v(" "),n("CommonNotice",{attrs:{text:"Please note that the component API has changed recently. Icon choice has been switched from\n            the FontAwesome to the Streamline library. Make sure you convert all your usages of this component\n            accordingly, in order to avoid incorrectly rendered icons.",title:"Component API updated",type:"Info"}}),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{ref:"docsExample",attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,"is-global":t.isGlobal,props:t.props,events:t.events,slots:t.slots,example:t.example},on:{"input-generator-value":t.onInputGeneratorValue}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=s.exports},Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),i=n.n(o),r=n("nS/B"),a=n("lOrp");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}e.a={components:{CommonNotice:function(){return n.e(402).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(91).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(94).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach(function(e){i()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(r.b)(this.doc,"summary")},version:function(){return Object(r.b)(this.doc,"version")},description:function(){return Object(r.b)(this.doc,"description")},props:function(){return Object(r.a)(this.doc,"prop")},slots:function(){return Object(r.a)(this.doc,"slot")},events:function(){return Object(r.a)(this.doc,"event")},methods:function(){return Object(r.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(a.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},LSql:function(t,e,n){},QyZy:function(t,e,n){"use strict";n.r(e);n("DbwS"),n("t91x");var o=n("nxTg"),i=n.n(o),r=(n("asZ9"),n("9va6")),a={name:"CommonIcon",props:{weight:{type:String,default:"regular",validator:function(t){return-1!==["regular","bold"].indexOf(t)}},icon:{type:String},weightWithIcon:{type:String},size:{type:String,validator:function(t){return-1!==["sm","lg","2x","3x","4x","5x"].indexOf(t)}},fixedWidth:{type:Boolean,default:!1},spin:{type:Boolean},invisible:{type:Boolean,default:!1},decorative:{type:Boolean,default:!1},flipHorizontal:{type:Boolean,default:!1}},computed:{iconClass:function(){var t=this.weight,e=this.icon;if(this.weightWithIcon){var n=this.weightWithIcon.split(",");if(Array.isArray(n)&&2===n.length){var o=i()(n,2);t=o[0],e=o[1]}}var r=["CommonIcon__".concat(this.pascalCase(t)),"CommonIcon__".concat(this.pascalCase(t),"--").concat(this.sizeModifier),"CommonIcon__".concat(this.pascalCase(t),"--").concat(this.pascalCase(e))];return this.fixedWidth&&r.push("CommonIcon__".concat(this.pascalCase(t),"--FixedWidth")),this.spin&&r.push("CommonIcon--Spin"),this.flipHorizontal&&r.push("CommonIcon--FlipHorizontal"),r},sizeModifier:function(){switch(this.size){case"sm":return"Small";case"lg":return"Large";case"2x":return"ExtraLarge";case"3x":return"ExtraLarge3";case"4x":return"ExtraLarge4";case"5x":return"ExtraLarge5";default:return"Normal"}}},methods:{pascalCase:function(t){return Object(r.upperFirst)(Object(r.camelCase)(t))},metaData:function(t){if(-1===["regular","bold"].indexOf(t))return Promise.reject();var e=n("camQ")("./streamline-".concat(t,".json"));return new Promise(function(t,n){e.then(function(e){t(e)}).catch(function(t){n(t)})})},click:function(t){this.$emit("click",t)}}},s=(n("lZap"),n("psIG")),c=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.icon||t.weightWithIcon?n("i",{class:t.iconClass,style:{visibility:!0===t.invisible?"hidden":null},attrs:{"aria-hidden":!0===t.decorative?"true":"false"},on:{click:function(e){return t.click(e)}}}):t._e()},[],!1,null,null,null);e.default=c.exports},S411:function(t,e){t.exports=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){i=!0,r=t}finally{try{o||null==s.return||s.return()}finally{if(i)throw r}}return n}}},camQ:function(t,e,n){var o={"./streamline-bold.json":["L0H3",102],"./streamline-regular.json":["si/1",103]};function i(t){if(!n.o(o,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=o[t],i=e[0];return n.e(e[1]).then(function(){return n.t(i,3)})}i.keys=function(){return Object.keys(o)},i.id="camQ",t.exports=i},lZap:function(t,e,n){"use strict";var o=n("LSql");n.n(o).a},nxTg:function(t,e,n){var o=n("+3YS"),i=n("S411"),r=n("+bRE");t.exports=function(t,e){return o(t)||i(t,e)||r()}}}]);