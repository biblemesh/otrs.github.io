(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{H7B9:function(t,s,n){},KOix:function(t,s,n){"use strict";n.r(s);n("U8p0"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO");var a={name:"BusinessObjectWidgetPropertyCustomerLayout",components:{CommonPieChart:function(){return n.e(89).then(n.bind(null,"Q2Z8"))},DynamicField:function(){return n.e(43).then(n.bind(null,"QAut"))}},props:{size:{type:String},ticketKpi:{type:[Object]},additionalInfo:{type:[Array],default:function(){return[]}},type:{type:String},objectId:{type:String},noTitle:{type:Boolean,default:!1}},computed:{mdCols:function(){switch(this.size){case"md":return 6;default:return 12}},ticketKpiList:function(){var t=this,s=[];return Object.keys(this.ticketKpi).forEach(function(n){s.push(t.ticketKpi[n])}),s.sort(function(t,s){return t.Prio>s.Prio}),this.splitListByCols(s)},totalTicketKpi:function(){return this.ticketKpi.TotalTickets},cardCssClasses:function(){var t=["BusinessCard__".concat(this.type)];return this.objectId||t.push("BusinessCard__NoData"),t}},methods:{splitListByCols:function(t){var s=[],n=Math.ceil(t.length/2),a=[];return t.forEach(function(t){a.push(t),a.length>=n&&(s.push(a),a=[])}),a.length&&s.push(a),s},pieKpiTotal:function(t){var s=t.Count,n=t.Totals.Count;return n<s?s+n:n}}},e=(n("sV4L"),n("psIG")),i=Object(e.a)(a,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("b-col",{staticClass:"pr-0",attrs:{md:t.mdCols}},[n("b-container",{attrs:{fluid:""}},[n("b-row",{staticClass:"h-100"},[n("b-col",{staticClass:"mb-3 border bg-white BusinessCard",class:t.cardCssClasses},[t.noTitle?t._e():n("b-row",[n("b-col",{staticClass:"py-3 border-bottom BusinessCard__Header"},[n("h3",{staticClass:"p-0 m-0 BusinessCard__Title"},[t._t("title")],2)])],1),t._v(" "),t.objectId?[t._t("default"),t._v(" "),n("b-row",[n("b-col",{staticClass:"py-3 mx-3 px-0 BusinessCard__Status",class:{"border-bottom":t.additionalInfo.length}},[n("div",{staticClass:"mb-3 BusinessCard__Headline"},[t._t("status-title")],2),t._v(" "),n("b-row",t._l(t.ticketKpiList,function(s,a){return n("b-col",{key:a,attrs:{md:"6"}},t._l(s,function(s){return n("b-row",{key:s.Name,staticClass:"mb-3",attrs:{"align-v":"center"}},[s.Totals?n("b-col",{attrs:{cols:"auto"}},[s.Totals?n("CommonPieChart",{attrs:{value:s.Count,total:t.pieKpiTotal(s)}}):t._e()],1):t._e(),t._v(" "),n("b-col",{class:{"pl-0":s.Totals,"pl-3":!s.Totals}},[n("span",{staticClass:"BusinessCard__Label"},[t._v("\n                                                "+t._s(t._f("translate")(s.Title))+"\n                                            ")]),t._v("\n                                            -\n                                            "),n("CommonLink",{class:t.type+"__TicketKPI__"+s.Name,attrs:{title:t._f("translate")(s.Title),link:s.URL}},[t._v("\n                                                "+t._s(s.Count)+"\n                                            ")]),t._v(" "),s.Totals?[t._v("\n                                                |\n                                                "),n("CommonLink",{class:t.type+"__TicketKPI__"+s.Name+"__Totals",attrs:{title:t._f("translate")(s.Totals.Title),link:s.Totals.URL}},[t._v("\n                                                    "+t._s(s.Totals.Count)+"\n                                                ")]),t._v("\n                                                "+t._s(t._f("translate")(s.Totals.Title))+"\n                                            ")]:t._e()],2)],1)}),1)}),1)],1)],1),t._v(" "),t.additionalInfo.length?n("b-row",[n("b-col",{staticClass:"pt-3 mx-3 px-0 BusinessCard__Information"},[n("div",{staticClass:"mb-3 BusinessCard__Headline"},[t._t("extra-info-title")],2),t._v(" "),n("b-row",[n("b-col",[n("ul",{staticClass:"BusinessCard__Information__List"},t._l(t.additionalInfo,function(s){return n("li",{key:s.name},[s.isDynamicField?n("DynamicField",{attrs:{"dynamic-field-config":s.field.Config,"dynamic-field":s.field.Value,type:"detail","value-label-class":"d-inline-block mr-1 BusinessCard__Label"}}):[n("span",{staticClass:"d-inline-block BusinessCard__Information__Label"},[t._v("\n                                                    "+t._s(t._f("translate")(s.label))+":\n                                                ")]),t._v(" "),n("span",{staticClass:"BusinessCard__Information__Value"},[s.link?n("CommonLink",{class:[t.type+"__Information__"+s.name,s.link.Class],attrs:{link:s.link.URL,target:s.link.Target,"is-external":""}},[t._v("\n                                                        "+t._s(s.value)+"\n                                                    ")]):[t._v("\n                                                        "+t._s(s.value)+"\n                                                    ")]],2)]],2)}),0)])],1)],1)],1):t._e()]:[n("b-row",{staticClass:"my-3"},[n("b-col",{staticClass:"text-center"},[t._v("\n                            "+t._s(t._f("translate")("Currently no data available."))+"\n                        ")])],1)]],2)],1)],1)],1)},[],!1,null,null,null);s.default=i.exports},sV4L:function(t,s,n){"use strict";var a=n("H7B9");n.n(a).a}}]);