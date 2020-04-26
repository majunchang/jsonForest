(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d90f7020"],{"0106":function(t,e,n){"use strict";var i=n("c7f0"),a=n.n(i);a.a},"0e3f":function(t,e,n){},"151a":function(t,e,n){},"366e":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:["button",{disabled:t.disabled}],style:t.customStyle,on:{click:t.clickHandler}},[t._t("default"),t._t("desc"),t.loading?n("div",{staticClass:"button__loading"}):t._e()],2)},a=[],r={name:"Button",props:{loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customStyle:{type:Object,default:()=>({})}},methods:{clickHandler(){this.disabled||this.$emit("click")}}},o=r,s=(n("f9ce"),n("2877")),c=Object(s["a"])(o,i,a,!1,null,"5da6ccb1",null);e["a"]=c.exports},"498a":function(t,e,n){"use strict";var i=n("23e7"),a=n("58a8").trim,r=n("c8d2");i({target:"String",proto:!0,forced:r("trim")},{trim:function(){return a(this)}})},"4fbe":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));n("e6cf");var i=n("0c6d");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].get("/api/v1/identity/authinfo",t).then(t=>200!==t.data.status?(Object(i["a"])(t),Promise.reject(t.data)):Promise.resolve(t.data.data))}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].post("/api/v1/identity/auth",t).then(t=>200!==t.data.status?Promise.reject(t.data):Promise.resolve())}function o(t){return i["b"].post("/api/v1/identity/bind",t).then(t=>200!==t.data.status?Promise.reject(t.data):Promise.resolve(t.data))}},"4fce":function(t,e,n){"use strict";var i=n("151a"),a=n.n(i);a.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),a=n("5899"),r="["+a+"]",o=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),c=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},"716e":function(t,e,n){},"994c":function(t,e,n){},a2a5:function(t,e,n){"use strict";var i=n("0e3f"),a=n.n(i);a.a},c7f0:function(t,e,n){},c8d2:function(t,e,n){var i=n("d039"),a=n("5899"),r="​᠎";t.exports=function(t){return i((function(){return!!a[t]()||r[t]()!=r||a[t].name!==t}))}},ca845:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth"},[n("nav-bar",{attrs:{title:"提现认证",hairline:!1}}),n("div",{staticClass:"auth__form"},[n("div",{class:["auth__form-group",{error:t.error}]},[t.identityInfo.needName?n("div",{staticClass:"auth__form-item"},[n("field",{attrs:{label:"真实姓名",placeholder:"请输入微信实名认证的姓名"},on:{focus:t.inputFocusHandler},model:{value:t.identityInfo.realName,callback:function(e){t.$set(t.identityInfo,"realName",e)},expression:"identityInfo.realName"}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.identityInfo.realName,expression:"identityInfo.realName"}],staticClass:"auth__tip exclamation-mark"},[n("span",[t._v("需与微信实名认证的姓名相同，如不一致将打款失败")])])],1):t._e(),t.identityInfo.needCardNo?n("div",{staticClass:"auth__form-item"},[n("field",{attrs:{label:"身份证号",placeholder:"请输入正确的身份证号"},on:{focus:t.inputFocusHandler},model:{value:t.identityInfo.cardNo,callback:function(e){t.$set(t.identityInfo,"cardNo",e)},expression:"identityInfo.cardNo"}}),n("div",{staticClass:"auth__tip question-mark",on:{click:function(e){return t.highlightTip(0)}}},[n("span",{staticClass:"underline"},[t._v("为什么要填身份证号")])])],1):t._e()]),n("field",{attrs:{label:"微信授权",input:!1}},[t.identityInfo.isWechatAuth?n("div",{staticClass:"auth__wechat",attrs:{slot:"text"},slot:"text"},[t.identityInfo.wechatNickname?[t._v(' "'),n("span",{staticClass:"auth__wechatNickname"},[t._v(" "+t._s(t.identityInfo.wechatNickname)+" ")]),t._v('" ')]:t._e(),n("span",[t._v("已授权")])],2):n("div",{staticClass:"auth__btn arrow-right",attrs:{slot:"button"},on:{click:t.wechatAuthHandler},slot:"button"},[t._v("去授权")])]),n("field",{attrs:{label:"绑定手机号",input:!1,disabled:!!t.identityInfo.phoneNumber}},[t.identityInfo.phoneNumber?n("div",{attrs:{slot:"text"},slot:"text"},[t._v('"'+t._s(t.identityInfo.phoneNumber)+'"已绑定')]):n("div",{staticClass:"auth__btn arrow-right",attrs:{slot:"button"},on:{click:t.phoneAuthHandler},slot:"button"},[t._v("去绑定")])])],1),n("div",{staticClass:"auth__footer"},[n("Button",{attrs:{disabled:!t.canAuth,customStyle:{width:"100%",height:"0.47rem",fontSize:"0.16rem"}},on:{click:t.authHandler}},[t._v("立即认证")]),n("rule",{staticClass:"auth__rule",attrs:{"need-card-no":t.identityInfo.needCardNo,"highlighted-tip-index":t.highlightedTipIndex}})],1)],1)},a=[],r=(n("5319"),n("498a"),n("ade3")),o=n("f7fe"),s=n.n(o),c=n("db49"),l=n("e590"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field Hairline Hairline_bottom"},[n("label",{staticClass:"field__label"},[t._t("label",[t._v(t._s(t.label))]),t.input?n("input",{staticClass:"field__input",attrs:{type:t.type,placeholder:t.placeholder,disabled:t.disabled},domProps:{value:t.value},on:{focus:function(e){return t.$emit("focus")},input:function(e){return t.$emit("input",e.target.value)}}}):t._e()],2),n("div",{staticClass:"field__text"},[t._t("button"),t._t("text")],2)])},d=[],h={name:"Field",props:{label:{type:String,default:null},value:{type:[String,Number],default:null},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},type:{type:String,default:"text"},input:{type:Boolean,default:!0}}},f=h,p=(n("a2a5"),n("2877")),b=Object(p["a"])(f,u,d,!1,null,"68612f78",null),_=b.exports,m=n("366e"),y=n("4fbe"),v=n("edb0"),g=n("42a5"),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rule"},[n("h1",[t._v(t._s(t.rules.title))]),n("p",[n("ul",t._l(t.finalRules,(function(e,i){return n("li",{key:e,class:{highlight:i===t.highlightedTipIndex}},[t._v(t._s(e))])})),0)])])},N=[],w=(n("fb6a"),n("2934")),O="fe-config_withdraw-auth-rule",k={name:"Rule",props:{highlightedTipIndex:{type:Number,default:null},needCardNo:{type:Boolean,default:!0}},data(){return{rules:{content:[]}}},computed:{finalRules(){if(!this.needCardNo){var t=[];return this.rules.content.forEach((e,n)=>{n>0&&t.push(n+e.slice(1))}),t}return this.rules.content}},created(){this.getRules()},methods:{getRules(){Object(w["b"])({key:O}).then(t=>{this.rules=t.data}).catch(()=>{this.$error(this.$route.name)})}}},j=k,x=(n("ccc7"),Object(p["a"])(j,I,N,!1,null,"7c067faa",null)),C=x.exports;function $(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var A={name:"Withdraw",components:{NavBar:l["a"],Field:_,Button:m["a"],Rule:C},data(){return{identityInfo:{realName:null,cardNo:null,needCardNo:!1},error:!1,highlightedTipIndex:null}},computed:{canAuth(){return(!this.identityInfo.needName||this.identityInfo.needName&&this.identityInfo.realName)&&(!this.identityInfo.needCardNo||this.identityInfo.needCardNo&&this.identityInfo.cardNo)&&this.identityInfo.isWechatAuth&&this.identityInfo.phoneNumber&&!this.identityInfo.auth}},beforeRouteEnter(t,e,n){n(t=>t.getIdentityInfo())},created(){g["a"]("focus",this.getIdentityInfo),this.$o2o({e_c:"提现",e_a:"曝光",e_n:"提现认证"})},methods:{getIdentityInfo(){Object(y["b"])({forceAuth:"1"===this.$route.query.forceAuth}).then(t=>{t.isWechatAuth||(t.isWechatAuth=!!Object(v["l"])(),t.wechatNickname=Object(v["l"])()),this.identityInfo.realName&&(t.realName=this.identityInfo.realName),this.identityInfo.cardNo&&(t.cardNo=this.identityInfo.cardNo),this.identityInfo=H({},this.identityInfo,{},t),this.identityInfo.auth&&this.goAuthResult(),this.$root.hidePlaceholder()}).catch(()=>{this.$error(this.$route.name)})},highlightTip(t){this.highlightedTipIndex=t},wechatAuthHandler:s()((function(){this.identityInfo.isWechatAuth||(Object(v["c"])(),this.$o2o({e_c:"提现",e_a:"点击",e_n:"去授权"}))}),c["a"].debounceWait),phoneAuthHandler:s()((function(){this.identityInfo.phoneNumber||(Object(v["b"])("withdrawAuth"),this.$o2o({e_c:"提现",e_a:"点击",e_n:"去绑定"}))}),c["a"].debounceWait),goAuthResult(){this.$router.replace({name:"withdrawAuthResult",query:{cardNo:this.identityInfo.needCardNo?1:0,has5Yuan:this.$route.query.has5Yuan}})},authHandler:s()((function(){return this.identityInfo.needName&&!this.identityInfo.realName.trim()?Object(v["H"])("请输入微信实名认证的姓名"):Object(y["c"])({realName:this.identityInfo.realName,cardNo:this.identityInfo.cardNo||"",forceAuth:"1"===this.$route.query.forceAuth}).then(()=>{this.goAuthResult(),this.$o2o({e_c:"提现",e_a:"点击",e_n:"立刻认证",e_x:{result:"认证成功"}})}).catch(t=>{this.error=!0,Object(v["H"])(t.msg||"网络错误"),this.$o2o({e_c:"提现",e_a:"点击",e_n:"立刻认证",e_x:{result:"认证失败"}})})}),c["a"].debounceWait),inputFocusHandler(){this.error=!1}}},B=A,P=(n("0106"),Object(p["a"])(B,i,a,!1,null,"e0bdc6c4",null));e["default"]=P.exports},ccc7:function(t,e,n){"use strict";var i=n("716e"),a=n.n(i);a.a},e590:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:"nav-bar "+(t.hairline?"Hairline Hairline_bottom":"")},[n("i",{class:[t.customBack?"nav-bar_backWhite":"nav-bar__back"],on:{click:t.backHandler}}),n("h1",{staticClass:"nav-bar__title",style:t.customTitleStyle},[t._v(t._s(t.title))]),n("div",{staticClass:"nav-bar__info"},[t._t("default")],2)])},a=[],r=n("edb0"),o={name:"NavBar",props:{title:{type:String,default:""},hairline:{type:Boolean,default:!0},finishExecute:{type:Boolean,default:!1},clickBackHandler:{type:Function,default:null},webview:{type:Boolean,default:!0},customBack:{type:Boolean,default:!1},customTitleStyle:{type:Object,default:()=>({})}},methods:{backHandler(){this.clickBackHandler&&(this.clickBackHandler(),this.finishExecute)||(this.webview?Object(r["D"])():this.$router.go(-1))}}},s=o,c=(n("4fce"),n("2877")),l=Object(c["a"])(s,i,a,!1,null,"d8cf0938",null);e["a"]=l.exports},f9ce:function(t,e,n){"use strict";var i=n("994c"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-d90f7020.37391ae6.js.map