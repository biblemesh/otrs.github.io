(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{I2Cc:function(t,n,i){},NvFU:function(t,n,i){"use strict";i.r(n);i("U8p0"),i("W1QL"),i("K/PF"),i("t91x"),i("75LO");var a={name:"BusinessObjectWidgetPropertyCustomerLayout",components:{CommonPieChart:function(){return i.e(69).then(i.bind(null,"Q2Z8"))},DynamicField:function(){return i.e(29).then(i.bind(null,"QAut"))}},props:{columnLayout:{type:String},ticketKpi:{type:[Object]},additionalInfo:{type:[Array],default:function(){return[]}},type:{type:String}},computed:{mdCols:function(){switch(this.columnLayout){case"OneColumn":return 6;default:return 12}},ticketKpiList:function(){var t=this,n=Object.keys(this.ticketKpi).filter(function(t){return"TotalTickets"!==t}).map(function(n){return t.ticketKpi[n]});return n.sort(function(t,n){return t.Title.localeCompare(n.Title)}),this.splitListByCols(n)},totalTicketKpi:function(){return this.ticketKpi.TotalTickets}},methods:{splitListByCols:function(t){var n=[],i=Math.ceil(t.length/2),a=[];return t.forEach(function(t){a.push(t),a.length>=i&&(n.push(a),a=[])}),a.length&&n.push(a),n}}},e=(i("Y3+X"),i("psIG")),l=Object(e.a)(a,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("b-col",{staticClass:"pr-0",attrs:{md:t.mdCols}},[i("b-container",{attrs:{fluid:""}},[i("b-row",{staticClass:"h-100"},[i("b-col",{staticClass:"border bg-white InfoCard",class:"InfoCard__"+t.type},[t._t("default"),t._v(" "),i("b-row",[i("b-col",{staticClass:"py-2 mx-3 px-0 InfoCard__Status",class:{"border-bottom":t.additionalInfo.length}},[i("div",{staticClass:"mb-3 InfoCard__Headline"},[t._t("title")],2),t._v(" "),i("b-row",t._l(t.ticketKpiList,function(n,a){return i("b-col",{key:a,attrs:{md:"6"}},t._l(n,function(n){return i("b-row",{key:n.Name,staticClass:"mb-3",attrs:{"align-v":"center"}},[i("b-col",{attrs:{cols:"auto"}},[i("CommonPieChart",{attrs:{value:n.Count,total:t.totalTicketKpi.Count}})],1),t._v(" "),i("b-col",{staticClass:"pl-0"},[i("span",{staticClass:"InfoCard__Label"},[t._v("\n                                            "+t._s(t._f("translate")(n.Title))+"\n                                        ")]),t._v("\n                                        -\n                                        "),i("CommonLink",{attrs:{title:t._f("translate")(n.Title),link:n.URL}},[t._v("\n                                            "+t._s(n.Count)+"\n                                        ")]),t._v(" "),t.totalTicketKpi?[t._v("\n                                            |\n                                            "),i("CommonLink",{attrs:{title:t._f("translate")(t.totalTicketKpi.Title),link:t.totalTicketKpi.URL}},[t._v("\n                                                "+t._s(t.totalTicketKpi.Count)+"\n                                            ")]),t._v("\n                                            "+t._s(t._f("translate")("total"))+"\n                                        ")]:t._e()],2)],1)}),1)}),1)],1)],1),t._v(" "),t.additionalInfo.length?i("b-row",[i("b-col",{staticClass:"py-2 mx-3 px-0 InfoCard__Information"},[i("div",{staticClass:"mb-3 InfoCard__Headline"},[t._t("extra-info-title")],2),t._v(" "),i("b-row",[i("b-col",[i("ul",t._l(t.additionalInfo,function(n){return i("li",{key:n.name},[n.isDynamicField?i("DynamicField",{attrs:{"dynamic-field-config":n.field.Config,"dynamic-field":n.field.Value,type:"detail","value-label-class":"d-inline-block mr-1 InfoCard__Label"}}):[i("span",{staticClass:"InfoCard__Information__Label"},[t._v("\n                                                "+t._s(t._f("translate")(n.label))+":\n                                            ")]),t._v(" "),i("span",{staticClass:"InfoCard__Information__Value"},[t._v("\n                                                "+t._s(n.value)+"\n                                            ")])]],2)}),0)])],1)],1)],1):t._e()],2)],1)],1)],1)},[],!1,null,null,null);n.default=l.exports},"Y3+X":function(t,n,i){"use strict";var a=i("I2Cc");i.n(a).a}}]);