(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"3xx5":function(e,t,i){"use strict";var n=i("XmBj");i.n(n).a},"70Qt":function(e,t,i){"use strict";i.r(t);var n={name:"CommonCheckIcon",props:{value:{type:Boolean,default:!1},name:{type:String},weight:{type:String,default:"regular",validator:function(e){return-1!==["light","regular","bold"].indexOf(e)}},icon:{type:String},weightWithIcon:{type:String},size:{type:String,validator:function(e){return-1!==["sm","lg","2x","3x","4x","5x"].indexOf(e)}},fixedWidth:{type:Boolean,default:!1},spin:{type:Boolean},invisible:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},methods:{toggle:function(){this.disabled||this.$emit("input",!this.value)}}},o=(i("3xx5"),i("psIG")),l=Object(o.a)(n,function(){var e=this,t=e.$createElement;return(e._self._c||t)("CommonIcon",{ref:"commonIcon",staticClass:"CheckIcon",class:{"CheckIcon--Checked":e.value,"CheckIcon--Disabled":e.disabled},attrs:{weight:e.weight,icon:e.icon,"weight-with-icon":e.weightWithIcon,size:e.size,"fixed-width":e.fixedWidth,spin:e.spin,invisible:e.invisible},on:{click:e.toggle}})},[],!1,null,null,null);t.default=l.exports},XmBj:function(e,t,i){}}]);