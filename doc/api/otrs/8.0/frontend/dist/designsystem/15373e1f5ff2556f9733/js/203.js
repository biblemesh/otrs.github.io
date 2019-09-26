(window.webpackJsonp=window.webpackJsonp||[]).push([[203,249],{"0oln":function(t,e,n){"use strict";var o=n("2FXn");n.n(o).a},"2FXn":function(t,e,n){},Iptl:function(t,e,n){"use strict";n("2Tod"),n("ABKx"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("asZ9"),n("GkPX");var o=n("OvAC"),s=n.n(o),i=n("nS/B"),a=n("lOrp");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}e.a={components:{CommonNotice:function(){return n.e(276).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(71).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(73).then(n.bind(null,"8txu"))}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){s()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({doc:function(){var t=this.componentNamespace||"Components";return this.$store.getters.componentDoc[t][this.$options.name]||[]},summary:function(){return Object(i.b)(this.doc,"summary")},version:function(){return Object(i.b)(this.doc,"version")},description:function(){return Object(i.b)(this.doc,"description")},props:function(){return Object(i.a)(this.doc,"prop")},slots:function(){return Object(i.a)(this.doc,"slot")},events:function(){return Object(i.a)(this.doc,"event")},methods:function(){return Object(i.a)(this.doc,"method")},initialFrontend:function(){var t=this.componentNamespace.split("/");return t.length>1?t[1]:""}},Object(a.b)(["frontend"])),mounted:function(){var t=this;this.frontend!==this.initialFrontend&&this.$store.commit("frontend",{frontend:this.initialFrontend}),this.$nextTick(function(){t.$test.setFlag("DocComponent::".concat(t.component.name,"::Mounted"))})}}},ZRMi:function(t,e,n){"use strict";n.r(e);var o=n("Iptl"),s=n("ob7a"),i={name:"BusinessObjectWidgetListTable",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/BusinessObject/BusinessObjectWidgetListTable",value:[],component:s.default,example:{testMode:{default:!0},items:{type:"array"},columns:{default:{id:{isRowKey:!0,isHidden:!0},title:{text:"Title",isSortable:!0,isSorted:!1,isAscending:!1},priority:{text:"Priority",isSortable:!0,isSorted:!1,isAscending:!1},state:{text:"State",isSortable:!0,isSorted:!1,isAscending:!1},owner:{text:"Owner",isClickable:!0}},type:"object"},totalItemCount:{default:100,type:"input"},emptyText:{default:"There are no records",type:"input"},emptyIconWeight:{type:"select",options:[{value:void 0,text:"-"},{value:"regular",text:"regular"},{value:"bold",text:"bold"}]},emptyIcon:{type:"input",default:"check"},bulkActionMode:{type:"checkbox",default:!0},itemLoadingMode:{default:"button",type:"select",options:[{value:"infinite",text:"infinite"},{value:"button",text:"button"}]},loadingState:{type:"checkbox",default:!1}}}}},a=n("psIG"),r=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DesignSystem__Main"},[n("h1",{staticClass:"DesignSystem"},[t._v("\n        "+t._s(t.summary)+"\n        "),n("b-badge",{attrs:{variant:t.docVersion!==t.version?"warning":"info"}},[t._v("\n            "+t._s(t.version)+"\n        ")])],1),t._v(" "),n("p",[t._v("\n        "+t._s(t.description)+"\n    ")]),t._v(" "),t.docVersion!==t.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+t.docVersion+" !== "+t.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:t._e(),t._v(" "),n("h2",{staticClass:"DesignSystem"},[t._v("\n        Wrapper Component\n    ")]),t._v(" "),n("p",[t._v("\n        This component is simply a wrapper around the Business Object List Table, suitable for usage inside a\n        widget. As such it provides exactly the same API as the wrapped component, so make sure to read\n        "),n("b-link",{staticClass:"DesignSystem",attrs:{to:"/documentation/components/data/data-table"}},[t._v("\n            its documentation\n        ")]),t._v("\n        for more information.\n    ")],1),t._v(" "),n("p",[t._v("\n        The biggest difference is the default item loading mode, since infinite loading is not suitable in the\n        widget context. Also, there is a difference in styling, especially colors for striping purposes.\n    ")]),t._v(" "),n("b-tabs",{staticClass:"DesignSystem__TabContent"},[n("b-tab",{staticClass:"tab-pane tab-pane-demo",attrs:{title:"Demo","title-link-class":"DesignSystem",active:""}},[n("DocsExample",{attrs:{component:t.component,"component-namespace":t.componentNamespace,"component-path":t.componentPath,props:t.props,events:t.events,slots:t.slots,example:t.example},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),n("b-tab",{staticClass:"tab-pane tab-pane-api",attrs:{title:"API Documentation","title-link-class":"DesignSystem"}},[n("DocsComponentAPI",{attrs:{props:t.props,events:t.events,slots:t.slots,methods:t.methods}})],1)],1)],2)},[],!1,null,null,null);e.default=r.exports},ob7a:function(t,e,n){"use strict";n.r(e);var o={name:"BusinessObjectWidgetListTable",extends:n("srL7").default,props:{itemLoadingMode:{type:String,validator:function(t){return-1!==["button","infinite",void 0].indexOf(t)},default:"button"}},computed:{containerClass:function(){var t=["px-0","BusinessObjectListTable--Widget"];return this.localItems&&0!==this.localItems.length||t.push("BusinessObjectListTable--Empty"),t}}},s=(n("0oln"),n("psIG")),i=Object(s.a)(o,void 0,void 0,!1,null,null,null);e.default=i.exports}}]);