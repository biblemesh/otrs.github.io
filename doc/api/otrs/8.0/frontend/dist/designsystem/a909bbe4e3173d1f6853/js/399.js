(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{eSUN:function(e,t,r){"use strict";r.r(t);r("2Tod"),r("ABKx"),r("W1QL"),r("K/PF"),r("t91x"),r("75LO");var o=r("OvAC"),n=r.n(o),i=r("Hzqv"),c=r("VixF"),l=r("lOrp");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}var u={name:"FormTrustDevice",components:{FormCheckbox:i.default},mixins:[c.a],props:{value:{type:Boolean}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){n()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({localValue:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t)}}},Object(l.b)(["deviceUuid"])),methods:{filter:function(e){return this.$refs.formCheckbox.filter(e)},onChange:function(e,t){this.$emit("change",e,t),e&&!this.deviceUuid&&this.$store.commit("deviceUuid",{deviceUuid:this.getUuid()})},focus:function(){this.$refs.formCheckbox&&this.$refs.formCheckbox.focus()}}},a=r("psIG"),d=Object(a.a)(u,function(){var e=this,t=e.$createElement;return(e._self._c||t)("FormCheckbox",{ref:"formCheckbox",attrs:{name:e.name,error:e.error,label:e.label,"label-placeholder":e.labelPlaceholder,required:e.required,description:e.description,disabled:e.disabled,hidden:e.hidden,"hide-description":e.hideDescription,"auto-focus":e.autoFocus},on:{change:e.onChange},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}})},[],!1,null,null,null);t.default=d.exports}}]);