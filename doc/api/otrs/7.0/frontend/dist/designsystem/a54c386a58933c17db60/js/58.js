(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"0HwX":function(e,t,n){var i=n("kBaS"),r=n("zJT+"),o=n("T/1i"),s=n("HbTz"),a=n("qA3Z"),u=n("UTwT"),l=Object.getOwnPropertyDescriptor;t.f=n("lBnu")?l:function(e,t){if(e=o(e),t=s(t,!0),u)try{return l(e,t)}catch(e){}if(a(e,t))return r(!i.f.call(e,t),e[t])}},"3m03":function(e,t,n){"use strict";n.r(t);var i=n("tZmG"),r=n.n(i),o=n("wv3L"),s=n.n(o),a=n("Zv/C"),u=n.n(a),l=n("2lBV"),c=n.n(l),d=new(function(){function e(){u()(this,e)}return c()(e,[{key:"validate",value:function(e){return e&&"object"===(void 0===e?"undefined":s()(e))?Boolean(r()(e).length):Boolean(e)}},{key:"errorMessage",value:function(){return"This field is required."}}]),e}());t.default=d},"4Xtu":function(e,t,n){n("YlUf")("asyncIterator")},"6/sB":function(e){e.exports=[{name:"DataType.js"},{name:"DateTime.js"},{name:"FileUpload.js"},{name:"Pattern.js"},{name:"Required.js"}]},Iptl:function(e,t,n){"use strict";var i=n("nS/B");t.a={components:{CommonNotice:function(){return n.e(119).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(7).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(8).then(n.bind(null,"8txu"))}},computed:{doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(i.b)(this.doc,"summary")},version:function(){return Object(i.b)(this.doc,"version")},description:function(){return Object(i.b)(this.doc,"description")},props:function(){return Object(i.a)(this.doc,"prop")},slots:function(){return Object(i.a)(this.doc,"slot")},events:function(){return Object(i.a)(this.doc,"event")},methods:function(){return Object(i.a)(this.doc,"method")}}}},Jh4J:function(e,t,n){var i=n("g2rQ");e.exports=Array.isArray||function(e){return"Array"==i(e)}},KELd:function(e,t,n){n("MRte"),n("iKhv"),n("4Xtu"),n("UvcN"),e.exports=n("TaGV").Symbol},KyLU:function(e,t,n){e.exports={default:n("KELd"),__esModule:!0}},Kz1y:function(e,t,n){"use strict";t.__esModule=!0;var i,r=n("PSh9"),o=(i=r)&&i.__esModule?i:{default:i};t.default=o.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}},MRte:function(e,t,n){"use strict";var i=n("41F1"),r=n("qA3Z"),o=n("lBnu"),s=n("/6KZ"),a=n("5BpW"),u=n("hYpR").KEY,l=n("/Vl9"),c=n("67sl"),d=n("sWB5"),f=n("ct/D"),h=n("0Sp3"),m=n("eTWF"),p=n("YlUf"),v=n("T4P6"),b=n("Jh4J"),y=n("ADe/"),g=n("fGh/"),F=n("T/1i"),S=n("HbTz"),T=n("zJT+"),A=n("G+Zn"),_=n("dn9X"),w=n("0HwX"),O=n("eOWL"),P=n("/Lgp"),x=w.f,j=O.f,D=_.f,N=i.Symbol,V=i.JSON,$=V&&V.stringify,E=h("_hidden"),k=h("toPrimitive"),I={}.propertyIsEnumerable,C=c("symbol-registry"),M=c("symbols"),R=c("op-symbols"),L=Object.prototype,B="function"==typeof N,U=i.QObject,Z=!U||!U.prototype||!U.prototype.findChild,W=o&&l(function(){return 7!=A(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(e,t,n){var i=x(L,t);i&&delete L[t],j(e,t,n),i&&e!==L&&j(L,t,i)}:j,q=function(e){var t=M[e]=A(N.prototype);return t._k=e,t},G=B&&"symbol"==typeof N.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof N},z=function(e,t,n){return e===L&&z(R,t,n),y(e),t=S(t,!0),y(n),r(M,t)?(n.enumerable?(r(e,E)&&e[E][t]&&(e[E][t]=!1),n=A(n,{enumerable:T(0,!1)})):(r(e,E)||j(e,E,T(1,{})),e[E][t]=!0),W(e,t,n)):j(e,t,n)},H=function(e,t){y(e);for(var n,i=v(t=F(t)),r=0,o=i.length;o>r;)z(e,n=i[r++],t[n]);return e},J=function(e){var t=I.call(this,e=S(e,!0));return!(this===L&&r(M,e)&&!r(R,e))&&(!(t||!r(this,e)||!r(M,e)||r(this,E)&&this[E][e])||t)},K=function(e,t){if(e=F(e),t=S(t,!0),e!==L||!r(M,t)||r(R,t)){var n=x(e,t);return!n||!r(M,t)||r(e,E)&&e[E][t]||(n.enumerable=!0),n}},Y=function(e){for(var t,n=D(F(e)),i=[],o=0;n.length>o;)r(M,t=n[o++])||t==E||t==u||i.push(t);return i},X=function(e){for(var t,n=e===L,i=D(n?R:F(e)),o=[],s=0;i.length>s;)!r(M,t=i[s++])||n&&!r(L,t)||o.push(M[t]);return o};B||(a((N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var e=f(arguments.length>0?arguments[0]:void 0),t=function(n){this===L&&t.call(R,n),r(this,E)&&r(this[E],e)&&(this[E][e]=!1),W(this,e,T(1,n))};return o&&Z&&W(L,e,{configurable:!0,set:t}),q(e)}).prototype,"toString",function(){return this._k}),w.f=K,O.f=z,n("sqS1").f=_.f=Y,n("kBaS").f=J,n("phsM").f=X,o&&!n("gtwY")&&a(L,"propertyIsEnumerable",J,!0),m.f=function(e){return q(h(e))}),s(s.G+s.W+s.F*!B,{Symbol:N});for(var Q="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;Q.length>ee;)h(Q[ee++]);for(var te=P(h.store),ne=0;te.length>ne;)p(te[ne++]);s(s.S+s.F*!B,"Symbol",{for:function(e){return r(C,e+="")?C[e]:C[e]=N(e)},keyFor:function(e){if(!G(e))throw TypeError(e+" is not a symbol!");for(var t in C)if(C[t]===e)return t},useSetter:function(){Z=!0},useSimple:function(){Z=!1}}),s(s.S+s.F*!B,"Object",{create:function(e,t){return void 0===t?A(e):H(A(e),t)},defineProperty:z,defineProperties:H,getOwnPropertyDescriptor:K,getOwnPropertyNames:Y,getOwnPropertySymbols:X}),V&&s(s.S+s.F*(!B||l(function(){var e=N();return"[null]"!=$([e])||"{}"!=$({a:e})||"{}"!=$(Object(e))})),"JSON",{stringify:function(e){for(var t,n,i=[e],r=1;arguments.length>r;)i.push(arguments[r++]);if(n=t=i[1],(g(t)||void 0!==e)&&!G(e))return b(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!G(t))return t}),i[1]=t,$.apply(V,i)}}),N.prototype[k]||n("PPkd")(N.prototype,k,N.prototype.valueOf),d(N,"Symbol"),d(Math,"Math",!0),d(i.JSON,"JSON",!0)},RF5L:function(e,t,n){"use strict";n.r(t);var i=n("Zv/C"),r=n.n(i),o=n("2lBV"),s=n.n(o),a=new(function(){function e(){r()(this,e)}return s()(e,[{key:"validate",value:function(e){return!!e.toString().match(/^\d{4}-\d{1,2}-\d{1,2}T\d{1,2}:\d{1,2}:\d{1,2}(.+)$/i)||!!e.toString().match(/^(\d{4})-(\d{1,2})-(\d{1,2})(\s(\d{1,2}):(\d{1,2})(:(\d{1,2}))?)?$/)}},{key:"errorMessage",value:function(){return"This field must contain a date in a valid format."}}]),e}());t.default=a},T4P6:function(e,t,n){var i=n("/Lgp"),r=n("phsM"),o=n("kBaS");e.exports=function(e){var t=i(e),n=r.f;if(n)for(var s,a=n(e),u=o.f,l=0;a.length>l;)u.call(e,s=a[l++])&&t.push(s);return t}},UvcN:function(e,t,n){n("YlUf")("observable")},YlUf:function(e,t,n){var i=n("41F1"),r=n("TaGV"),o=n("gtwY"),s=n("eTWF"),a=n("eOWL").f;e.exports=function(e){var t=r.Symbol||(r.Symbol=o?{}:i.Symbol||{});"_"==e.charAt(0)||e in t||a(t,e,{value:s.f(e)})}},dn9X:function(e,t,n){var i=n("T/1i"),r=n("sqS1").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return s&&"[object Window]"==o.call(e)?function(e){try{return r(e)}catch(e){return s.slice()}}(e):r(i(e))}},e1y0:function(e,t,n){"use strict";n.r(t);var i=n("tZmG"),r=n.n(i),o=n("wv3L"),s=n.n(o),a=n("Zv/C"),u=n.n(a),l=n("2lBV"),c=n.n(l),d=new(function(){function e(){u()(this,e)}return c()(e,[{key:"validate",value:function(e,t){if(0===t.length)return!0;var n=t[0];return"Int"===n?e.toString().match(/^[+-]?[\d]+$/):"PositiveInt"===n?e.toString().match(/^\+?[\d]+$/):"NegativeInt"===n?e.toString().match(/^-[\d]+$/):"Num"===n?e.toString().match(/^[+-]?[\d]+\.?[\d]*$/):"PositiveNum"===n?e.toString().match(/^\+?[\d]+\.?[\d]*$/):"NegativeNum"===n?e.toString().match(/^-[\d]+\.?[\d]*$/):"Str"===n?"string"==typeof e:"StrWithData"===n?"string"==typeof e&&""!==e:"PerlPackage"===n||("MD5"===n?e.toString().match(/^[a-f0-9]{32}$/i):"SHA1"===n?e.toString().match(/^[a-f0-9]{40}$/i):"SHA256"===n?e.toString().match(/^[a-f0-9]{64}$/i):"UUID"===n?e.toString().match(/^[0-9A-F]{8}-[0-9A-F]{4}-[12345][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i):"IPv4"===n?e.toString().match(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/m):"IPv6"===n?e.toString().match(/^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/):"HashRef"===n?"object"===(void 0===e?"undefined":s()(e)):"HashRefWithData"===n?"object"===(void 0===e?"undefined":s()(e))&&r()(e).length>0:"ArrayRefWithData"===n?e instanceof Array&&e.length>0:"EmailAddress"!==n||"string"==typeof e&&e.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))}},{key:"errorMessage",value:function(e){if(0===e.length)return"";var t=e[0];return"Int"===t?"This field must be an integer.":"PositiveInt"===t?"This field must be a positive integer.":"NegativeInt"===t?"This field must be a negative integer.":"Num"===t?"This field must be a number.":"PositiveNum"===t?"This field must be a positive number.":"NegativeNum"===t?"This field must be a negative number.":"Str"===t?"This field must be a string.":"StrWithData"===t?"This field must be a non-empty string.":"PerlPackage"===t?"":"MD5"===t?"This field must be a valid MD5 hash.":"SHA1"===t?"This field must be a valid SHA1 hash.":"SHA256"===t?"This field must be a valid SHA256 hash.":"UUID"===t?"This field must be a valid UUID value.":"IPv4"===t?"This field must be a valid IPv4 address.":"IPv6"===t?"This field must be a valid IPv6 address.":"HashRef"===t?"This field must be a hash reference.":"HashRefWithData"===t?"This field must be a hash reference with data.":"ArrayRefWithData"===t?"This field must be an array reference with data.":"EmailAddress"===t?"This field must be a valid email address.":"This field contains an invalid value."}}]),e}());t.default=d},eR4j:function(e,t,n){e.exports={default:n("gSCB"),__esModule:!0}},eTWF:function(e,t,n){t.f=n("0Sp3")},gSCB:function(e,t,n){n("WwSA"),n("k/kI"),e.exports=n("eTWF").f("iterator")},hYpR:function(e,t,n){var i=n("ct/D")("meta"),r=n("fGh/"),o=n("qA3Z"),s=n("eOWL").f,a=0,u=Object.isExtensible||function(){return!0},l=!n("/Vl9")(function(){return u(Object.preventExtensions({}))}),c=function(e){s(e,i,{value:{i:"O"+ ++a,w:{}}})},d=e.exports={KEY:i,NEED:!1,fastKey:function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,i)){if(!u(e))return"F";if(!t)return"E";c(e)}return e[i].i},getWeak:function(e,t){if(!o(e,i)){if(!u(e))return!0;if(!t)return!1;c(e)}return e[i].w},onFreeze:function(e){return l&&d.NEED&&u(e)&&!o(e,i)&&c(e),e}}},jKEF:function(e,t,n){"use strict";n.r(t);var i=n("Iptl"),r=n("tZmG"),o=n.n(r),s=n("Kz1y"),a=n.n(s),u=n("+J7U"),l=n.n(u),c=n("9va6"),d=n("R8iU"),f=n.n(d),h=n("6/sB"),m=function(){return function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return t.forEach(function(t){if(RegExp(/\.js$/).test(t.name)||t.items)if(t.items)o=e(t.items,i,""+r+t.name+"/",o);else{var s=f.a.basename(t.name,".js");if("index"===s&&(s=f.a.basename(r.replace(/\/index\.js$/,"")),r=r.substr(0,r.length-s.length-1)),i&&!new RegExp("^"+i).test(r))return;o[s]=n("ngLd")("./"+r+s).default}}),o}(h,"")},p={name:"Form",components:{CommonAlert:function(){return n.e(117).then(n.bind(null,"L3zo"))},FormGroup:function(){return n.e(116).then(n.bind(null,"yFPx"))}},props:{url:{type:String},params:{type:Object},propOverride:{type:Object},testMode:{type:Boolean,default:!1}},data:function(){return{schema:{},schemaId:null,values:{},errors:{},serverErrors:{},clientValidators:m(),formId:l()(),testSchema:{Fields:[{Name:"FormInput",Label:"Input field",Type:"FormInput",Placeholder:"This is a placeholder",Description:"This is an input field description.",Required:!0,Validators:["Required"]},{Name:"FormSelect",Label:"Select field",Type:"FormSelect",Placeholder:"Select...",Description:"This is a select field description.",Props:{Options:[{id:1,label:"Option 1"},{id:2,label:"Option 2"},{id:3,label:"Option 3"}]}},{Name:"FormTextArea",Label:"Text field",Type:"FormTextArea",Placeholder:"This is a placeholder",Description:"This is a text field description.",Required:!0,Validators:["Required"]},{Name:"FormCheckbox",Label:"Checkbox field",Type:"FormCheckbox",Description:"This is a checkbox field description."},{Name:"FormRadio",Label:"Radio field",Type:"FormRadio",Description:"This is a radio field description.",Props:{Options:[{text:"First choice",value:1},{text:"Second choice",value:2}]}}]}}},computed:{localPropOverride:function(){return a()({},this.propOverride,{formId:this.formId})},body:function(){return a()({},this.params,this.values,{FormID:this.formId})}},watch:{url:function(){this.getSchema()}},mounted:function(){this.getSchema()},methods:{setValue:function(e,t,n){var i=this.values[t];this.values[t]=n;var r=this.validateField(e,t,n);e.SubmitForm?r&&this.clientValidation(this.schema)&&this.submit():(e.UpdateForm&&this.getSchema({ChangedField:{Name:t,NewValue:n,OldValue:i}}),this.$emit("changed",this.body,{fullName:t,newValue:n,oldValue:i}))},getSchema:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.testMode?this.processSchema(this.testSchema):this.clientSendRequest({Path:this.url,Method:"post",Body:a()({},this.body,{Meta:t})}).then(function(t){e.processSchema(t.Body.Schema)}).catch(function(t){e.$log.error(t)})},processSchema:function(e){var t=this,n=e;this.schemaId=window.performance.now(),this.values={},this.initValues({Name:"",Fields:n.Fields}),this.schema=n,n.Fields.length&&this.$nextTick(function(){t.$emit("ready",t.body)}),this.errors&&this.clientValidation(this.schema,null,!0),this.$nextTick(function(){t.$test.setFlag("Form::Update",t.url)})},initValues:function(e){var t=this,n=e.Name.length>0?e.Name+".":"";e.Fields.forEach(function(e){"FormGroup"!==e.Type?t.$set(t.values,""+n+e.Name,e.Value):t.initValues({Name:n+e.Name,Fields:e.Config.Fields})})},submit:function(){var e=this;o()(this.body).map(function(t){return void 0===e.body[t]&&(e.body[t]=null),e.body}),this.testMode?this.$emit("valid",this.body):this.clientSendRequest({Path:this.url,Method:"post",Body:this.body,Headers:{"X-OTRS-API-ValidateFormData":1}}).then(function(){e.$set(e,"errors",{}),e.$emit("valid",e.body),e.$nextTick(function(){e.$test.setFlag("Form::Valid",e.url)})}).catch(function(t){var n=t.response;n.Body.Errors&&(e.serverErrors=n.Body.Errors),n.Body.Schema&&(e.schema=n.Body.Schema,e.initValues({Name:"",Fields:e.schema.Fields})),422===n.Code&&e.showServerErrors(),e.$emit("invalid",t),e.$nextTick(function(){e.$test.setFlag("Form::Invalid",e.url)})})},showServerErrors:function(){var e=this;this.$set(this,"errors",{}),o()(this.serverErrors).forEach(function(t){var n=Object(c.upperFirst)(Object(c.camelCase)(e.serverErrors[t].Validator)),i=e.clientValidators[n];if(i&&"function"==typeof i.errorMessage){var r=i.errorMessage(e.serverErrors[t].Attributes.Arguments);r&&e.$set(e.errors,t,r)}else e.serverErrors[t].Message&&e.$set(e.errors,t,[e.serverErrors[t].Message,e.serverErrors[t].Data])})},clientValidation:function(e,t,n){var i=this,r=!0;return e.Fields.forEach(function(e){var o=void 0;o=t?t+"."+e.Name:e.Name,"FormGroup"===e.Type?i.clientValidation(e.Config,o,n)||(r=!1):n?i.errors[o]&&(i.validateField(e,o,i.values[o])||(r=!1)):i.validateField(e,o,i.values[o])||(r=!1)}),r},validateField:function(e,t,n){var i=this;if(this.errors[t]&&this.$delete(this.errors,t),void 0===e.Validators)return!0;var r=!1;return e.Validators.forEach(function(o){if(!r&&(e.Required||null!==n&&void 0!==n&&""!==n)){var s=[],a=o;o instanceof Object&&(a=o.Validator,s=o.Arguments),a=Object(c.upperFirst)(Object(c.camelCase)(a));var u=i.clientValidators[a];if(u&&"function"==typeof u.validate&&!u.validate(n,s)&&(r=!0,"function"==typeof u.errorMessage)){var l=u.errorMessage(s);l&&i.$set(i.errors,t,l)}}}),!r},resetForm:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&this.$set(this,"schema",{}),this.$set(this,"values",{}),this.formId=l()(),t&&this.getSchema(),this.$nextTick(function(){e.$set(e,"errors",{})})},onSubmit:function(){this.clientValidation(this.schema)&&this.submit()}}},v=n("psIG"),b=Object(v.a)(p,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.schema.Fields?n("b-form",{key:e.schemaId,on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._t("before-form-fields"),e._v(" "),n("FormGroup",{attrs:{"set-value":e.setValue,fields:e.schema.Fields,errors:e.errors,"prop-override":e.localPropOverride},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}}),e._v(" "),e._t("after-form-fields"),e._v(" "),e._t("submit-buttons")],2):e._e()},[],!1,null,null,null);b.options.__file="index.vue";var y=b.exports,g={name:"Form",mixins:[i.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form",value:void 0,component:y,example:{url:{type:"input",default:"path/to/form/endpoint"},testMode:{default:!0}}}}},F=Object(v.a)(g,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v(e._s(e.version))])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),e._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[n("h2",{staticClass:"design-system"},[e._v("Header Level 2")]),e._v(" "),n("ol",{staticClass:"design-system"},[n("li",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" "),n("li",[e._v("Aliquam tincidunt mauris eu risus.")])]),e._v(" "),n("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[e._v("Do")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),e._v(" "),n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[e._v("Don't")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),e._v(" "),n("h3",{staticClass:"design-system"},[e._v("Header Level 3")]),e._v(" "),n("ul",{staticClass:"design-system"},[n("li",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" "),n("li",[e._v("Aliquam tincidunt mauris eu risus.")])])],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);F.options.__file="Form.vue";t.default=F.exports},ngLd:function(e,t,n){var i={"./DataType":"e1y0","./DataType.js":"e1y0","./DateTime":"RF5L","./DateTime.js":"RF5L","./FileUpload":"xibV","./FileUpload.js":"xibV","./Pattern":"wGFV","./Pattern.js":"wGFV","./Required":"3m03","./Required.js":"3m03","./directory-index":"6/sB","./directory-index.json":"6/sB"};function r(e){var t=o(e);return n(t)}function o(e){var t=i[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(i)},r.resolve=o,e.exports=r,r.id="ngLd"},sqS1:function(e,t,n){var i=n("Qqke"),r=n("miGZ").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,r)}},wGFV:function(e,t,n){"use strict";n.r(t);var i=n("Zv/C"),r=n.n(i),o=n("2lBV"),s=n.n(o),a=new(function(){function e(){r()(this,e)}return s()(e,[{key:"validate",value:function(e,t){if(0===t.length)return!0;var n=void 0;try{n=new RegExp(t[0])}catch(e){return!0}return e.toString().match(n)}},{key:"errorMessage",value:function(e){return e&&0!==e.length?["This field must match the configured pattern: %s",e]:"This field must match the configured pattern."}}]),e}());t.default=a},wv3L:function(e,t,n){"use strict";t.__esModule=!0;var i=s(n("eR4j")),r=s(n("KyLU")),o="function"==typeof r.default&&"symbol"==typeof i.default?function(e){return typeof e}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":typeof e};function s(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof r.default&&"symbol"===o(i.default)?function(e){return void 0===e?"undefined":o(e)}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":void 0===e?"undefined":o(e)}},xibV:function(e,t,n){"use strict";n.r(t);var i=n("Zv/C"),r=n.n(i),o=n("2lBV"),s=n.n(o),a=new(function(){function e(){r()(this,e)}return s()(e,[{key:"errorMessage",value:function(){return"This field must contain a valid file upload."}}]),e}());t.default=a}}]);