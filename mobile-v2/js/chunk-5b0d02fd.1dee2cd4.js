(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b0d02fd"],{"09a4":function(t,e,n){},"151a":function(t,e,n){},3115:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logoff"},[n("NavBar",{attrs:{title:"账号注销"}}),n("div",{staticClass:"logoff-text-box"},[n("div",{staticClass:"logoff-title"},[t._v("注意事项")]),t._l(t.tips,(function(e,a){return n("div",{key:a,staticClass:"logoff-tips",domProps:{innerHTML:t._s(e)}})})),n("label",{staticClass:"checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isRead,expression:"isRead"}],staticClass:"logoff-check",attrs:{name:"isread",value:"1",type:"checkbox"},domProps:{checked:Array.isArray(t.isRead)?t._i(t.isRead,"1")>-1:t.isRead},on:{change:function(e){var n=t.isRead,a=e.target,o=!!a.checked;if(Array.isArray(n)){var c="1",i=t._i(n,c);a.checked?i<0&&(t.isRead=n.concat([c])):i>-1&&(t.isRead=n.slice(0,i).concat(n.slice(i+1)))}else t.isRead=o}}}),n("i",{staticClass:"check-icon",class:{"checked-icon":t.isRead}}),n("span",[t._v(" 我已阅读并同意 ")])]),n("Button",{staticClass:"logoff-button",class:{disabled:!t.isRead},on:{click:t.logoff}},[t._v("继续注销")]),n("logoffConfirm",{attrs:{msg:t.hint,show:t.showConfirm},on:{action:t.logoffAction,cancel:t.cancel}})],2)],1)},o=[],c=n("e590"),i=n("2934"),s=n("366e"),r=(n("e6cf"),n("0c6d"));function l(){return r["b"].get("/api/oauth/logouthint").then(t=>200!==t.data.status?(Object(r["a"])(t),Promise.reject(t.data)):Promise.resolve(t.data.data))}function u(){return r["b"].get("/api/oauth/logout").then(t=>200!==t.data.status?(Object(r["a"])(t),Promise.reject(t.data)):Promise.resolve(t.data.data))}var d=n("edb0"),f=n("3126"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("GrayMask",{attrs:{show:t.show}},[n("div",{staticClass:"logoff-confirm"},[n("div",{staticClass:"title"},[t._v(t._s(t.msg.title||"重要提示"))]),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.msg.content)}}),n("div",{staticClass:"btn-box"},[n("Button",{staticClass:"action-button",on:{click:function(e){return t.$emit("action")}}},[t._v("确定注销")]),n("Button",{staticClass:"cancel-button",on:{click:function(e){return t.$emit("cancel")}}},[t._v("放弃")])],1)])])},b=[],m=n("a1ba"),v={props:{show:{type:Boolean,default:!1},msg:{type:Object,default:()=>({})}},data(){return{}},components:{GrayMask:m["a"],Button:s["a"]}},p=v,g=(n("aa3f"),n("2877")),k=Object(g["a"])(p,h,b,!1,null,"1ce693ec",null),_=k.exports,y={data(){return{tips:[],isRead:!1,hint:{title:"重要提示",content:"注销账号是不可撤销操作，注销后该账号将无法再次使用。"},showConfirm:!1}},components:{NavBar:c["a"],Button:s["a"],logoffConfirm:_},methods:{cancel(){this.showConfirm=!1,this.isRead=!1},logoffAction(){u().then(()=>{Object(d["g"])(),Object(f["d"])("newsTab")})},getTips(){return Object(i["b"])({key:"fe-config_logoff"}).then(t=>{this.tips=t.data,this.$root.hidePlaceholder()})},logoff(){this.isRead?l().then(t=>{t.coinAmount&&(this.hint.content='您账号内还有<span class="color-red">'.concat(t.coinAmount,"</span>金币未提现，注销后金币余额会清零，且无法撤销。")),this.showConfirm=!0}).catch(t=>{Object(d["H"])(t.msg)}):Object(d["H"])("请点击我已阅读并同意")}},created(){this.getTips()}},w=y,C=(n("4f4d"),Object(g["a"])(w,a,o,!1,null,"098b369a",null));e["default"]=C.exports},3126:function(t,e,n){"use strict";n.d(e,"i",(function(){return c})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"g",(function(){return r})),n.d(e,"c",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"a",(function(){return h}));var a=n("db49"),o=n("2d8f");function c(t){var{deepLink:e}=t;return Object(o["b"])("openDeepLink",e)}function i(t){return Object(o["a"])("web.tab/".concat(t))}function s(t){return Object(o["a"])("goto/".concat(t))}function r(t){var{headIcon:e=a["a"].default.userIcon,nickname:n,userId:c}=t;return Object(o["a"])("goto/userInfoDetail?userId=".concat(c,"&headIcon=").concat(encodeURIComponent(e),"&nickName=").concat(n))}function l(t){return"bikan://web.goto/commonWebView?url_encode=".concat(encodeURIComponent(t))}function u(t){location.href=t}function d(t){return"bikan://goto/".concat(t)}function f(){var t="goto/mineTab/task";return Object(o["a"])(t)}function h(t,e){return"bikan://goto/".concat(t,"Detail?docId=").concat(e)}},"366e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:["button",{disabled:t.disabled}],style:t.customStyle,on:{click:t.clickHandler}},[t._t("default"),t._t("desc"),t.loading?n("div",{staticClass:"button__loading"}):t._e()],2)},o=[],c={name:"Button",props:{loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customStyle:{type:Object,default:()=>({})}},methods:{clickHandler(){this.disabled||this.$emit("click")}}},i=c,s=(n("f9ce"),n("2877")),r=Object(s["a"])(i,a,o,!1,null,"5da6ccb1",null);e["a"]=r.exports},"4f4d":function(t,e,n){"use strict";var a=n("09a4"),o=n.n(a);o.a},"4fce":function(t,e,n){"use strict";var a=n("151a"),o=n.n(a);o.a},"96ca":function(t,e,n){},"994c":function(t,e,n){},9991:function(t,e,n){},a1ba:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g({directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"gray-mask"},t.$listeners),[t._t("default")],2)},o=[],c={name:"GrayMask",props:{show:{type:[String,Boolean],default:""}},methods:{stopSlide(t){t.preventDefault()}},watch:{show:{handler(t){t?(console.log("禁止滑动"),document.body.addEventListener("touchmove",this.stopSlide,{passive:!1})):(console.log("可以滑动"),document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1}))},immediate:!0}},destroyed(){document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1})}},i=c,s=(n("bccd"),n("2877")),r=Object(s["a"])(i,a,o,!1,null,"4cb2c41a",null);e["a"]=r.exports},aa3f:function(t,e,n){"use strict";var a=n("96ca"),o=n.n(a);o.a},bccd:function(t,e,n){"use strict";var a=n("9991"),o=n.n(a);o.a},e590:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:"nav-bar "+(t.hairline?"Hairline Hairline_bottom":"")},[n("i",{class:[t.customBack?"nav-bar_backWhite":"nav-bar__back"],on:{click:t.backHandler}}),n("h1",{staticClass:"nav-bar__title",style:t.customTitleStyle},[t._v(t._s(t.title))]),n("div",{staticClass:"nav-bar__info"},[t._t("default")],2)])},o=[],c=n("edb0"),i={name:"NavBar",props:{title:{type:String,default:""},hairline:{type:Boolean,default:!0},finishExecute:{type:Boolean,default:!1},clickBackHandler:{type:Function,default:null},webview:{type:Boolean,default:!0},customBack:{type:Boolean,default:!1},customTitleStyle:{type:Object,default:()=>({})}},methods:{backHandler(){this.clickBackHandler&&(this.clickBackHandler(),this.finishExecute)||(this.webview?Object(c["D"])():this.$router.go(-1))}}},s=i,r=(n("4fce"),n("2877")),l=Object(r["a"])(s,a,o,!1,null,"d8cf0938",null);e["a"]=l.exports},f9ce:function(t,e,n){"use strict";var a=n("994c"),o=n.n(a);o.a}}]);
//# sourceMappingURL=chunk-5b0d02fd.1dee2cd4.js.map