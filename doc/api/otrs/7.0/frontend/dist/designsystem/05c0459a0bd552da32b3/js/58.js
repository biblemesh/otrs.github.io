(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"+J7U":function(e,t,n){var r,i,o=n("We69"),s=n("4feL"),a=0,u=0;e.exports=function(e,t,n){var c=t&&n||0,l=t||[],d=(e=e||{}).node||r,f=void 0!==e.clockseq?e.clockseq:i;if(null==d||null==f){var m=o();null==d&&(d=r=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==f&&(f=i=16383&(m[6]<<8|m[7]))}var h=void 0!==e.msecs?e.msecs:(new Date).getTime(),p=void 0!==e.nsecs?e.nsecs:u+1,v=h-a+(p-u)/1e4;if(v<0&&void 0===e.clockseq&&(f=f+1&16383),(v<0||h>a)&&void 0===e.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=h,u=p,i=f;var y=(1e4*(268435455&(h+=122192928e5))+p)%4294967296;l[c++]=y>>>24&255,l[c++]=y>>>16&255,l[c++]=y>>>8&255,l[c++]=255&y;var b=h/4294967296*1e4&268435455;l[c++]=b>>>8&255,l[c++]=255&b,l[c++]=b>>>24&15|16,l[c++]=b>>>16&255,l[c++]=f>>>8|128,l[c++]=255&f;for(var g=0;g<6;++g)l[c+g]=d[g];return t||s(l)}},"0HwX":function(e,t,n){var r=n("kBaS"),i=n("zJT+"),o=n("T/1i"),s=n("HbTz"),a=n("qA3Z"),u=n("UTwT"),c=Object.getOwnPropertyDescriptor;t.f=n("lBnu")?c:function(e,t){if(e=o(e),t=s(t,!0),u)try{return c(e,t)}catch(e){}if(a(e,t))return i(!r.f.call(e,t),e[t])}},"3m03":function(e,t,n){"use strict";n.r(t);var r=n("tZmG"),i=n.n(r),o=n("wv3L"),s=n.n(o),a=n("Zv/C"),u=n.n(a),c=n("2lBV"),l=n.n(c),d=new(function(){function e(){u()(this,e)}return l()(e,[{key:"validate",value:function(e){return e&&"object"===(void 0===e?"undefined":s()(e))?Boolean(i()(e).length):Boolean(e)}},{key:"errorMessage",value:function(){return"This field is required."}}]),e}());t.default=d},"4Xtu":function(e,t,n){n("YlUf")("asyncIterator")},"4feL":function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,i=n;return[i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]]].join("")}},"6/sB":function(e){e.exports=[{name:"DataType.js"},{name:"DateTime.js"},{name:"FileUpload.js"},{name:"Pattern.js"},{name:"Required.js"}]},Iptl:function(e,t,n){"use strict";var r=n("nS/B");t.a={components:{CommonNotice:function(){return n.e(117).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(7).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(8).then(n.bind(null,"8txu"))}},computed:{doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(r.b)(this.doc,"summary")},version:function(){return Object(r.b)(this.doc,"version")},description:function(){return Object(r.b)(this.doc,"description")},props:function(){return Object(r.a)(this.doc,"prop")},slots:function(){return Object(r.a)(this.doc,"slot")},events:function(){return Object(r.a)(this.doc,"event")},methods:function(){return Object(r.a)(this.doc,"method")}}}},Jh4J:function(e,t,n){var r=n("g2rQ");e.exports=Array.isArray||function(e){return"Array"==r(e)}},KELd:function(e,t,n){n("MRte"),n("iKhv"),n("4Xtu"),n("UvcN"),e.exports=n("TaGV").Symbol},KyLU:function(e,t,n){e.exports={default:n("KELd"),__esModule:!0}},Kz1y:function(e,t,n){"use strict";t.__esModule=!0;var r,i=n("PSh9"),o=(r=i)&&r.__esModule?r:{default:r};t.default=o.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},MRte:function(e,t,n){"use strict";var r=n("41F1"),i=n("qA3Z"),o=n("lBnu"),s=n("/6KZ"),a=n("5BpW"),u=n("hYpR").KEY,c=n("/Vl9"),l=n("67sl"),d=n("sWB5"),f=n("ct/D"),m=n("0Sp3"),h=n("eTWF"),p=n("YlUf"),v=n("T4P6"),y=n("Jh4J"),b=n("ADe/"),g=n("fGh/"),F=n("T/1i"),S=n("HbTz"),T=n("zJT+"),A=n("G+Zn"),_=n("dn9X"),w=n("0HwX"),O=n("eOWL"),x=n("/Lgp"),P=w.f,j=O.f,D=_.f,E=r.Symbol,V=r.JSON,$=V&&V.stringify,k=m("_hidden"),C=m("toPrimitive"),N={}.propertyIsEnumerable,I=l("symbol-registry"),R=l("symbols"),M=l("op-symbols"),L=Object.prototype,B="function"==typeof E,U=r.QObject,Z=!U||!U.prototype||!U.prototype.findChild,q=o&&c(function(){return 7!=A(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=P(L,t);r&&delete L[t],j(e,t,n),r&&e!==L&&j(L,t,r)}:j,W=function(e){var t=R[e]=A(E.prototype);return t._k=e,t},G=B&&"symbol"==typeof E.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof E},z=function(e,t,n){return e===L&&z(M,t,n),b(e),t=S(t,!0),b(n),i(R,t)?(n.enumerable?(i(e,k)&&e[k][t]&&(e[k][t]=!1),n=A(n,{enumerable:T(0,!1)})):(i(e,k)||j(e,k,T(1,{})),e[k][t]=!0),q(e,t,n)):j(e,t,n)},H=function(e,t){b(e);for(var n,r=v(t=F(t)),i=0,o=r.length;o>i;)z(e,n=r[i++],t[n]);return e},J=function(e){var t=N.call(this,e=S(e,!0));return!(this===L&&i(R,e)&&!i(M,e))&&(!(t||!i(this,e)||!i(R,e)||i(this,k)&&this[k][e])||t)},K=function(e,t){if(e=F(e),t=S(t,!0),e!==L||!i(R,t)||i(M,t)){var n=P(e,t);return!n||!i(R,t)||i(e,k)&&e[k][t]||(n.enumerable=!0),n}},Y=function(e){for(var t,n=D(F(e)),r=[],o=0;n.length>o;)i(R,t=n[o++])||t==k||t==u||r.push(t);return r},X=function(e){for(var t,n=e===L,r=D(n?M:F(e)),o=[],s=0;r.length>s;)!i(R,t=r[s++])||n&&!i(L,t)||o.push(R[t]);return o};B||(a((E=function(){if(this instanceof E)throw TypeError("Symbol is not a constructor!");var e=f(arguments.length>0?arguments[0]:void 0),t=function(n){this===L&&t.call(M,n),i(this,k)&&i(this[k],e)&&(this[k][e]=!1),q(this,e,T(1,n))};return o&&Z&&q(L,e,{configurable:!0,set:t}),W(e)}).prototype,"toString",function(){return this._k}),w.f=K,O.f=z,n("sqS1").f=_.f=Y,n("kBaS").f=J,n("phsM").f=X,o&&!n("gtwY")&&a(L,"propertyIsEnumerable",J,!0),h.f=function(e){return W(m(e))}),s(s.G+s.W+s.F*!B,{Symbol:E});for(var Q="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;Q.length>ee;)m(Q[ee++]);for(var te=x(m.store),ne=0;te.length>ne;)p(te[ne++]);s(s.S+s.F*!B,"Symbol",{for:function(e){return i(I,e+="")?I[e]:I[e]=E(e)},keyFor:function(e){if(!G(e))throw TypeError(e+" is not a symbol!");for(var t in I)if(I[t]===e)return t},useSetter:function(){Z=!0},useSimple:function(){Z=!1}}),s(s.S+s.F*!B,"Object",{create:function(e,t){return void 0===t?A(e):H(A(e),t)},defineProperty:z,defineProperties:H,getOwnPropertyDescriptor:K,getOwnPropertyNames:Y,getOwnPropertySymbols:X}),V&&s(s.S+s.F*(!B||c(function(){var e=E();return"[null]"!=$([e])||"{}"!=$({a:e})||"{}"!=$(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=t=r[1],(g(t)||void 0!==e)&&!G(e))return y(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!G(t))return t}),r[1]=t,$.apply(V,r)}}),E.prototype[C]||n("PPkd")(E.prototype,C,E.prototype.valueOf),d(E,"Symbol"),d(Math,"Math",!0),d(r.JSON,"JSON",!0)},RF5L:function(e,t,n){"use strict";n.r(t);var r=n("Zv/C"),i=n.n(r),o=n("2lBV"),s=n.n(o),a=new(function(){function e(){i()(this,e)}return s()(e,[{key:"validate",value:function(e){return!!e.toString().match(/^\d{4}-\d{1,2}-\d{1,2}T\d{1,2}:\d{1,2}:\d{1,2}(.+)$/i)||!!e.toString().match(/^(\d{4})-(\d{1,2})-(\d{1,2})(\s(\d{1,2}):(\d{1,2})(:(\d{1,2}))?)?$/)}},{key:"errorMessage",value:function(){return"This field must contain a date in a valid format."}}]),e}());t.default=a},T4P6:function(e,t,n){var r=n("/Lgp"),i=n("phsM"),o=n("kBaS");e.exports=function(e){var t=r(e),n=i.f;if(n)for(var s,a=n(e),u=o.f,c=0;a.length>c;)u.call(e,s=a[c++])&&t.push(s);return t}},UvcN:function(e,t,n){n("YlUf")("observable")},We69:function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var i=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),i[t]=e>>>((3&t)<<3)&255;return i}}},YlUf:function(e,t,n){var r=n("41F1"),i=n("TaGV"),o=n("gtwY"),s=n("eTWF"),a=n("eOWL").f;e.exports=function(e){var t=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||a(t,e,{value:s.f(e)})}},dn9X:function(e,t,n){var r=n("T/1i"),i=n("sqS1").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return s&&"[object Window]"==o.call(e)?function(e){try{return i(e)}catch(e){return s.slice()}}(e):i(r(e))}},e1y0:function(e,t,n){"use strict";n.r(t);var r=n("tZmG"),i=n.n(r),o=n("wv3L"),s=n.n(o),a=n("Zv/C"),u=n.n(a),c=n("2lBV"),l=n.n(c),d=new(function(){function e(){u()(this,e)}return l()(e,[{key:"validate",value:function(e,t){if(0===t.length)return!0;var n=t[0];return"Int"===n?e.toString().match(/^[+-]?[\d]+$/):"PositiveInt"===n?e.toString().match(/^\+?[\d]+$/):"NegativeInt"===n?e.toString().match(/^-[\d]+$/):"Num"===n?e.toString().match(/^[+-]?[\d]+\.?[\d]*$/):"PositiveNum"===n?e.toString().match(/^\+?[\d]+\.?[\d]*$/):"NegativeNum"===n?e.toString().match(/^-[\d]+\.?[\d]*$/):"Str"===n?"string"==typeof e:"StrWithData"===n?"string"==typeof e&&""!==e:"PerlPackage"===n||("MD5"===n?e.toString().match(/^[a-f0-9]{32}$/i):"SHA1"===n?e.toString().match(/^[a-f0-9]{40}$/i):"SHA256"===n?e.toString().match(/^[a-f0-9]{64}$/i):"UUID"===n?e.toString().match(/^[0-9A-F]{8}-[0-9A-F]{4}-[12345][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i):"IPv4"===n?e.toString().match(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/m):"IPv6"===n?e.toString().match(/^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/):"HashRef"===n?"object"===(void 0===e?"undefined":s()(e)):"HashRefWithData"===n?"object"===(void 0===e?"undefined":s()(e))&&i()(e).length>0:"ArrayRefWithData"===n?e instanceof Array&&e.length>0:"EmailAddress"!==n||"string"==typeof e&&e.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))}},{key:"errorMessage",value:function(e){if(0===e.length)return"";var t=e[0];return"Int"===t?"This field must be an integer.":"PositiveInt"===t?"This field must be a positive integer.":"NegativeInt"===t?"This field must be a negative integer.":"Num"===t?"This field must be a number.":"PositiveNum"===t?"This field must be a positive number.":"NegativeNum"===t?"This field must be a negative number.":"Str"===t?"This field must be a string.":"StrWithData"===t?"This field must be a non-empty string.":"PerlPackage"===t?"":"MD5"===t?"This field must be a valid MD5 hash.":"SHA1"===t?"This field must be a valid SHA1 hash.":"SHA256"===t?"This field must be a valid SHA256 hash.":"UUID"===t?"This field must be a valid UUID value.":"IPv4"===t?"This field must be a valid IPv4 address.":"IPv6"===t?"This field must be a valid IPv6 address.":"HashRef"===t?"This field must be a hash reference.":"HashRefWithData"===t?"This field must be a hash reference with data.":"ArrayRefWithData"===t?"This field must be an array reference with data.":"EmailAddress"===t?"This field must be a valid email address.":"This field contains an invalid value."}}]),e}());t.default=d},eR4j:function(e,t,n){e.exports={default:n("gSCB"),__esModule:!0}},eTWF:function(e,t,n){t.f=n("0Sp3")},gSCB:function(e,t,n){n("WwSA"),n("k/kI"),e.exports=n("eTWF").f("iterator")},hYpR:function(e,t,n){var r=n("ct/D")("meta"),i=n("fGh/"),o=n("qA3Z"),s=n("eOWL").f,a=0,u=Object.isExtensible||function(){return!0},c=!n("/Vl9")(function(){return u(Object.preventExtensions({}))}),l=function(e){s(e,r,{value:{i:"O"+ ++a,w:{}}})},d=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,r)){if(!u(e))return"F";if(!t)return"E";l(e)}return e[r].i},getWeak:function(e,t){if(!o(e,r)){if(!u(e))return!0;if(!t)return!1;l(e)}return e[r].w},onFreeze:function(e){return c&&d.NEED&&u(e)&&!o(e,r)&&l(e),e}}},jKEF:function(e,t,n){"use strict";n.r(t);var r=n("Iptl"),i=n("tZmG"),o=n.n(i),s=n("Kz1y"),a=n.n(s),u=n("+J7U"),c=n.n(u),l=n("9va6"),d=n("R8iU"),f=n.n(d),m=n("6/sB"),h=function(){return function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return t.forEach(function(t){if(RegExp(/\.js$/).test(t.name)||t.items)if(t.items)o=e(t.items,r,""+i+t.name+"/",o);else{var s=f.a.basename(t.name,".js");if("index"===s&&(s=f.a.basename(i.replace(/\/index\.js$/,"")),i=i.substr(0,i.length-s.length-1)),r&&!new RegExp("^"+r).test(i))return;o[s]=n("ngLd")("./"+i+s).default}}),o}(m,"")},p={name:"Form",components:{CommonAlert:function(){return n.e(115).then(n.bind(null,"L3zo"))},FormGroup:function(){return n.e(114).then(n.bind(null,"yFPx"))}},props:{url:{type:String},params:{type:Object},propOverride:{type:Object},testMode:{type:Boolean,default:!1}},data:function(){return{schema:{},values:{},errors:{},serverErrors:{},clientValidators:h(),formId:c()(),testSchema:{Fields:[{Name:"FormInput",Label:"Input field",Type:"FormInput",Placeholder:"This is a placeholder",Description:"This is an input field description.",Required:!0,Validators:["Required"]},{Name:"FormSelect",Label:"Select field",Type:"FormSelect",Placeholder:"Select...",Description:"This is a select field description.",Props:{Options:[{id:1,label:"Option 1"},{id:2,label:"Option 2"},{id:3,label:"Option 3"}]}},{Name:"FormTextArea",Label:"Text field",Type:"FormTextArea",Placeholder:"This is a placeholder",Description:"This is a text field description.",Required:!0,Validators:["Required"]},{Name:"FormCheckbox",Label:"Checkbox field",Type:"FormCheckbox",Description:"This is a checkbox field description."},{Name:"FormRadio",Label:"Radio field",Type:"FormRadio",Description:"This is a radio field description.",Props:{Options:[{text:"First choice",value:1},{text:"Second choice",value:2}]}}]}}},computed:{localPropOverride:function(){return a()({},this.propOverride,{formId:this.formId})},body:function(){return a()({},this.params,this.values,{FormID:this.formId})}},watch:{url:function(){this.getSchema()}},mounted:function(){this.getSchema()},methods:{getSchema:function(){var e=this;this.testMode?this.processSchema(this.testSchema):this.clientSendRequest({Path:this.url,Method:"post",Body:this.body}).then(function(t){e.processSchema(t.Body.Schema)}).catch(function(t){e.$log.error(t)})},processSchema:function(e){var t=this,n=e;this.initValues({Name:"",Fields:n.Fields}),this.schema=n,n.Fields.length&&this.$nextTick(function(){t.$emit("ready",t.body)}),this.errors&&this.clientValidation(this.schema,null,!0),this.$nextTick(function(){t.$test.setFlag("Form::Update",t.url)})},initValues:function(e){var t=this,n=e.Name.length>0?e.Name+".":"";e.Fields.forEach(function(e){"FormGroup"!==e.Type?t.$set(t.values,""+n+e.Name,e.Value):t.initValues({Name:n+e.Name,Fields:e.Config.Fields})})},submit:function(){var e=this;o()(this.body).map(function(t){return void 0===e.body[t]&&(e.body[t]=null),e.body}),this.testMode?this.$emit("valid",this.body):this.clientSendRequest({Path:this.url,Method:"post",Body:this.body,Headers:{"X-OTRS-API-ValidateFormData":1}}).then(function(){e.$set(e,"errors",{}),e.$emit("valid",e.body),e.$nextTick(function(){e.$test.setFlag("Form::Valid",e.url)})}).catch(function(t){var n=t.response;n.Body.Errors&&(e.serverErrors=n.Body.Errors),n.Body.Schema&&(e.schema=n.Body.Schema,e.initValues({Name:"",Fields:e.schema.Fields})),422===n.Code&&e.showServerErrors(),e.$emit("invalid",t),e.$nextTick(function(){e.$test.setFlag("Form::Invalid",e.url)})})},showServerErrors:function(){var e=this;this.$set(this,"errors",{}),o()(this.serverErrors).forEach(function(t){var n=Object(l.upperFirst)(Object(l.camelCase)(e.serverErrors[t].Validator)),r=e.clientValidators[n];if(r&&"function"==typeof r.errorMessage){var i=r.errorMessage(e.serverErrors[t].Attributes.Arguments);i&&e.$set(e.errors,t,i)}else e.serverErrors[t].Message&&e.$set(e.errors,t,[e.serverErrors[t].Message,e.serverErrors[t].Data])})},onUpdate:function(){this.getSchema()},onSubmit:function(){this.clientValidation(this.schema)&&this.submit()},onValidate:function(e,t,n){this.validateField(e,t,n)},clientValidation:function(e,t,n){var r=this,i=!0;return e.Fields.forEach(function(e){var o=void 0;o=t?t+"."+e.Name:e.Name,"FormGroup"===e.Type?r.clientValidation(e.Config,o,n)||(i=!1):n?r.errors[o]&&(r.validateField(e,o,r.values[o])||(i=!1)):r.validateField(e,o,r.values[o])||(i=!1)}),i},validateField:function(e,t,n){var r=this;if(this.errors[t]&&this.$delete(this.errors,t),void 0===e.Validators)return!0;var i=!1;return e.Validators.forEach(function(o){if(!i&&(e.Required||null!==n&&void 0!==n&&""!==n)){var s=[],a=o;o instanceof Object&&(a=o.Validator,s=o.Arguments),a=Object(l.upperFirst)(Object(l.camelCase)(a));var u=r.clientValidators[a];if(u&&"function"==typeof u.validate&&!u.validate(n,s)&&(i=!0,"function"==typeof u.errorMessage)){var c=u.errorMessage(s);c&&r.$set(r.errors,t,c)}}}),!i},resetForm:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&this.$set(this,"schema",{}),this.$set(this,"values",{}),this.formId=c()(),t&&this.getSchema(),this.$nextTick(function(){e.$set(e,"errors",{})})}}},v=n("psIG"),y=Object(v.a)(p,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.schema.Fields?n("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._t("before-form-fields"),e._v(" "),n("FormGroup",{attrs:{fields:e.schema.Fields,errors:e.errors,"prop-override":e.localPropOverride},on:{update:e.onUpdate,submit:e.onSubmit,validate:e.onValidate},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}}),e._v(" "),e._t("after-form-fields"),e._v(" "),e._t("submit-buttons")],2):e._e()},[],!1,null,null,null);y.options.__file="index.vue";var b=y.exports,g={name:"Form",mixins:[r.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form",value:void 0,component:b,example:{url:{type:"input",default:"path/to/form/endpoint"},testMode:{default:!0}}}}},F=Object(v.a)(g,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v(e._s(e.version))])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),e._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[n("h2",{staticClass:"design-system"},[e._v("Header Level 2")]),e._v(" "),n("ol",{staticClass:"design-system"},[n("li",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" "),n("li",[e._v("Aliquam tincidunt mauris eu risus.")])]),e._v(" "),n("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[e._v("Do")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),e._v(" "),n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[e._v("Don't")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),e._v(" "),n("h3",{staticClass:"design-system"},[e._v("Header Level 3")]),e._v(" "),n("ul",{staticClass:"design-system"},[n("li",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" "),n("li",[e._v("Aliquam tincidunt mauris eu risus.")])])],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);F.options.__file="Form.vue";t.default=F.exports},ngLd:function(e,t,n){var r={"./DataType":"e1y0","./DataType.js":"e1y0","./DateTime":"RF5L","./DateTime.js":"RF5L","./FileUpload":"xibV","./FileUpload.js":"xibV","./Pattern":"wGFV","./Pattern.js":"wGFV","./Required":"3m03","./Required.js":"3m03","./directory-index":"6/sB","./directory-index.json":"6/sB"};function i(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id="ngLd"},sqS1:function(e,t,n){var r=n("Qqke"),i=n("miGZ").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},wGFV:function(e,t,n){"use strict";n.r(t);var r=n("Zv/C"),i=n.n(r),o=n("2lBV"),s=n.n(o),a=new(function(){function e(){i()(this,e)}return s()(e,[{key:"validate",value:function(e,t){if(0===t.length)return!0;var n=void 0;try{n=new RegExp(t[0])}catch(e){return!0}return e.toString().match(n)}},{key:"errorMessage",value:function(e){return e&&0!==e.length?["This field must match the configured pattern: %s",e]:"This field must match the configured pattern."}}]),e}());t.default=a},wv3L:function(e,t,n){"use strict";t.__esModule=!0;var r=s(n("eR4j")),i=s(n("KyLU")),o="function"==typeof i.default&&"symbol"==typeof r.default?function(e){return typeof e}:function(e){return e&&"function"==typeof i.default&&e.constructor===i.default&&e!==i.default.prototype?"symbol":typeof e};function s(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof i.default&&"symbol"===o(r.default)?function(e){return void 0===e?"undefined":o(e)}:function(e){return e&&"function"==typeof i.default&&e.constructor===i.default&&e!==i.default.prototype?"symbol":void 0===e?"undefined":o(e)}},xibV:function(e,t,n){"use strict";n.r(t);var r=n("Zv/C"),i=n.n(r),o=n("2lBV"),s=n.n(o),a=new(function(){function e(){i()(this,e)}return s()(e,[{key:"errorMessage",value:function(){return"This field must contain a valid file upload."}}]),e}());t.default=a}}]);