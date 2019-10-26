(window.webpackJsonp=window.webpackJsonp||[]).push([[242,282],{DuyL:function(t,e,n){"use strict";n.r(e);n("GkPX"),n("Z8gF"),n("2UZ+"),n("e2Kn");var o={name:"BusinessObjectNavigationContext",props:{itemId:{type:[Number,String],required:!0},context:{type:Object,required:!0}},computed:{currentItemIndex:function(){var t=this;return this.context.currentItemIds.findIndex(function(e){return parseInt(e,10)===parseInt(t.itemId,10)})},currentPage:function(){return Math.floor(this.currentItemIndex/this.context.itemsPerPage)+1},isLastPage:function(){return this.context.currentItemIds.length===this.currentItemIndex+1}},methods:{back:function(){var t=this.context.routeContext.params;t.listContext={sortBy:this.context.sortBy,currentPresetFilters:this.context.currentPresetFilters,selectedFilterPreset:this.context.selectedFilterPreset,currentPage:this.currentPage},this.$router.replace({name:this.context.routeContext.name,params:t,query:{highlightItemId:this.itemId}})},previous:function(){this.navigate(this.context.currentItemIds[this.currentItemIndex-1])},next:function(){this.navigate(this.context.currentItemIds[this.currentItemIndex+1])},navigate:function(t){this.$router.replace({name:this.$route.name,params:{itemId:t,listNavigationContext:this.context}})}}},r=(n("GZa/"),n("psIG")),i=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"NavigationContextItems"},[n("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"ml-2",attrs:{title:t._f("translate")("Back to list view"),"aria-label":t._f("translate")("Back to list view")},on:{click:function(e){return t.back()}}},[n("CommonIcon",{attrs:{icon:"navigation-left-circle"}})],1),t._v(" "),n("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"ml-2",attrs:{disabled:0===t.currentItemIndex,title:t._f("translate")("Previous Ticket"),"aria-label":t._f("translate")("Previous Ticket")},on:{click:function(e){return t.previous()}}},[n("CommonIcon",{attrs:{icon:"navigation-left-circle-1_1"}})],1),t._v(" "),n("CommonLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"ml-2",attrs:{disabled:t.isLastPage,title:t._f("translate")("Next Ticket"),"aria-label":t._f("translate")("Next Ticket")},on:{click:function(e){return t.next()}}},[n("CommonIcon",{attrs:{icon:"navigation-right-circle-1"}})],1)],1)},[],!1,null,null,null);e.default=i.exports},"GZa/":function(t,e,n){"use strict";var o=n("dgYx");n.n(o).a},Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),r=n.n(o),i=n("nS/B"),s=n("lOrp");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}e.a={components:{CommonNotice:function(){return n.e(339).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(75).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(77).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){r()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(i.b)(this.doc,"summary")},version:function(){return Object(i.b)(this.doc,"version")},description:function(){return Object(i.b)(this.doc,"description")},props:function(){return Object(i.a)(this.doc,"prop")},slots:function(){return Object(i.a)(this.doc,"slot")},events:function(){return Object(i.a)(this.doc,"event")},methods:function(){return Object(i.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(s.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},dgYx:function(t,e,n){},xL95:function(t,e,n){"use strict";n.r(e);n("W1QL"),n("K/PF"),n("t91x");var o=n("5WRv"),r=n.n(o),i=n("Iptl"),s=n("DuyL"),a={name:"BusinessObjectNavigationContext",mixins:[i.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/BusinessObject/BusinessObjectNavigationContext",value:[],component:s.default,filterText:"",example:{itemId:{default:2,type:"input"},context:{default:{routeContext:{name:"TicketListView",params:{type:"organizer",name:"2be6051b-a7e9-11e9-9b33-c429f9ef4385"}},currentItemIds:r()(Array(30).keys()),itemsPerPage:25,currentPresetFilters:{StateType:{Value:"Open"}},selectedFilterPreset:"Open",sortBy:[{Column:"Created",Direction:"Down"}]},type:"object"}}}}},c=n("psIG"),u=Object(c.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=u.exports}}]);