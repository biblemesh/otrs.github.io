(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{"+J7U":function(e,t,n){var o,r,s=n("We69"),i=n("4feL"),a=0,c=0;e.exports=function(e,t,n){var u=t&&n||0,p=t||[],l=(e=e||{}).node||o,d=void 0!==e.clockseq?e.clockseq:r;if(null==l||null==d){var m=s();null==l&&(l=o=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==d&&(d=r=16383&(m[6]<<8|m[7]))}var f=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:c+1,b=f-a+(v-c)/1e4;if(b<0&&void 0===e.clockseq&&(d=d+1&16383),(b<0||f>a)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=f,c=v,r=d;var h=(1e4*(268435455&(f+=122192928e5))+v)%4294967296;p[u++]=h>>>24&255,p[u++]=h>>>16&255,p[u++]=h>>>8&255,p[u++]=255&h;var y=f/4294967296*1e4&268435455;p[u++]=y>>>8&255,p[u++]=255&y,p[u++]=y>>>24&15|16,p[u++]=y>>>16&255,p[u++]=d>>>8|128,p[u++]=255&d;for(var x=0;x<6;++x)p[u+x]=l[x];return t||i(p)}},"4feL":function(e,t){for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);e.exports=function(e,t){var o=t||0,r=n;return[r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]]].join("")}},Iptl:function(e,t,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),r=n.n(o),s=n("nS/B"),i=n("lOrp");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}t.a={components:{CommonNotice:function(){return n.e(388).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(84).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(87).then(n.bind(null,"8txu"))}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(s.b)(this.doc,"summary")},version:function(){return Object(s.b)(this.doc,"version")},description:function(){return Object(s.b)(this.doc,"description")},props:function(){return Object(s.a)(this.doc,"prop")},slots:function(){return Object(s.a)(this.doc,"slot")},events:function(){return Object(s.a)(this.doc,"event")},methods:function(){return Object(s.a)(this.doc,"method")},initialFrontend:function(){var e=this.componentNamespace.split("/");return e.length>1?e[1]:""}},Object(i.b)(["frontend"])),mounted:function(){var e=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){e.$test.setFlag("DocComponent::".concat(e.component.name,"::Mounted"))})}}},NokX:function(e,t,n){"use strict";n.r(t);var o=n("Iptl"),r=n("haP8"),s={name:"FormTwoFactorToken",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormTwoFactorToken",value:void 0,component:r.default,example:{error:{type:"input"},label:{type:"input"},labelSrOnly:{type:"checkbox",default:!1},required:{type:"checkbox",default:!1},description:{type:"input"},name:{type:"input"},size:{type:"select",options:[{value:void 0,text:"-"},{value:"sm",text:"sm"},{value:"md",text:"md"},{value:"lg",text:"lg"}]},disabled:{type:"checkbox",default:!1},type:{default:"text",type:"select",options:[{value:"text",text:"text"},{value:"password",text:"password"},{value:"email",text:"email"},{value:"number",text:"number"},{value:"url",text:"url"},{value:"tel",text:"tel"},{value:"search",text:"search"}]},readonly:{type:"checkbox",default:!1},plaintext:{type:"checkbox",default:!1},maxLength:{type:"input",subtype:"number"},autocomplete:{type:"input"},placeholder:{type:"input"},hidden:{default:!1,type:"checkbox"},hideDescription:{default:!1,type:"checkbox"},enterVerificationCodeMessage:{default:{Message:"Enter the verification code through %s",Placeholder:"SMS"},type:"object"}}}}},i=n("psIG"),a=Object(i.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v("\n            "+e._s(e.version)+"\n        ")])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-namespace":e.componentNamespace,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);t.default=a.exports},We69:function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var o=new Uint8Array(16);e.exports=function(){return n(o),o}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},rpZP:function(e,t,n){"use strict";var o=n("+J7U"),r=n.n(o);t.a={data:function(){return{uuid:this.getUuid()}},methods:{getUuid:function(){return r()()}}}}}]);