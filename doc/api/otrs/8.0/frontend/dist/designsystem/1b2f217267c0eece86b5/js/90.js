(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{"C/R+":function(t,e,s){"use strict";s.r(e);var a={name:"CommunicationGroupDate",mixins:[s("NAoP").a],props:{currentDate:{type:String},previousDate:{type:String}},data:function(){return{date:{}}},created:function(){this.formatGroupDate()},methods:{formatGroupDate:function(){var t=this.localizeTimestamp().date,e=t.startOf("day"),s=t.clone().subtract(1,"days").startOf("day"),a=t.clone().subtract(2,"month").startOf("day"),i=this.localizeTimestamp(this.currentDate).date,r=this.localizeTimestamp(this.previousDate).date;if(this.date={},i.isAfter(a,"day")){if(i.isSame(r,"day"))return;i.isSame(e,"day")&&(this.date.label="Today"),i.isSame(s,"day")&&(this.date.label="Yesterday"),this.date.format="Date",this.date.timestamp=i}else{if(i.isSame(r,"month"))return;this.date.format="Month",this.date.timestamp=i.format("MMMM YYYY")}}}},i=s("psIG"),r=Object(i.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.date).length?s("div",{staticClass:"pt-3 text-center BusinessObjectCommunicationStream__Timestamp"},["Month"===t.date.format?s("span",[t._v("\n        "+t._s(t.date.timestamp)+"\n    ")]):s("span",[t.date.label?s("span",[t._v(t._s(t._f("translate")(t.date.label))+" (")]):t._e(),t._v(t._s(t._f("localize")(t.date.timestamp,t.date.format))),t.date.label?s("span",[t._v(")")]):t._e()])]):t._e()},[],!1,null,null,null);e.default=r.exports},NAoP:function(t,e,s){"use strict";var a=s("F/wX"),i=s.n(a);e.a={methods:{localizeTimestamp:function(t){var e="UTC",s="UTC";return this.$store&&this.$store.getters&&this.$store.getters.config&&this.$store.getters.config.OTRSTimeZone&&(e=this.$store.getters.config.OTRSTimeZone),this.$store&&this.$store.getters&&this.$store.getters.userInfo&&this.$store.getters.userInfo.UserTimeZone?s=this.$store.getters.userInfo.UserTimeZone:this.$store&&this.$store.getters&&this.$store.getters.config&&this.$store.getters.config.UserDefaultTimeZone&&(s=this.$store.getters.config.UserDefaultTimeZone),{date:i.a.tz(t,e).clone().tz(s),timezone:s}}}}}}]);