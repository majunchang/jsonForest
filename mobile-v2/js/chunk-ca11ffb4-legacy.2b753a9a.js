(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca11ffb4"],{"0571":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pdd-exchange",on:{"!click":function(e){return t.clickHandler(e)}}},[i("div",{staticClass:"back",on:{click:t.backHandler}}),i("exchange",{attrs:{options:t.options,"count-down":t.countDownTime,number:t.number,coin:t.currentCoin,install:t.hasPinduoduo()},on:{showdialog:t.dialogHandler}}),i("goods-list",{attrs:{goods:t.goods,options:t.options},on:{showdialog:t.dialogHandler}}),i("pdd-dialog",{attrs:{show:t.dialogType,data:t.dialogData,url:t.turnTableUrl,install:t.hasPinduoduo()},on:{close:t.closeDialog}}),t.backDialogShow?i("BackDialog",{attrs:{page:"金币兑换现金券",url:"bikan://web.goto/commonWebView?url_encode=https%3A%2F%2Ffeed.browser.miui.com%2Fmobile-v2%2Fact%2FpddCooperation"},on:{close:function(e){t.backDialogShow=!1}}}):t._e()],1)},o=[],s=i("edb0"),a=i("42a5"),c=i("6b43"),r=i("58c4"),l=(i("d3b7"),i("0c6d"));function u(){return l["b"].get("/api/v4/pinduoduo/baseinfo").then((function(t){return 200!==t.data.status?(Object(l["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l["b"].post("/api/v4/pinduoduo/exchange",t).then((function(t){return 200!==t.data.status?(Object(l["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}var h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.goods&&t.goods.length?i("div",{staticClass:"list"},[i("p",{staticClass:"list__title"},[t._v("商品样例")]),i("div",{staticClass:"list__wrap"},t._l(t.goods,(function(e,n){return i("div",{key:n,staticClass:"item",attrs:{link:e.linkUrl},on:{click:function(i){return t.clickItem(e)}}},[i("img",{attrs:{src:e.imgUrl,alt:""}}),i("div",{staticClass:"item__title"},[t._v(t._s(e.name))]),i("div",{staticClass:"item__info"},[i("div",{staticClass:"desc"},[t._v(" = "),i("span",{staticClass:"desc__before"},[i("span",[t._v("原价")]),i("i",[t._v(" ¥")]),t._v(t._s(t.getOriginalPrice(e.originalPrice))+" ")]),t._v(" - "),i("span",{staticClass:"desc__discount"},[i("span",[t._v("现金券")]),i("i",[t._v(" ¥")]),t._v(t._s(e.discount)+" ")])]),i("div",{staticClass:"price"},[i("span",{staticClass:"price__title"},[t._v("券后价")]),i("span",{staticClass:"price__content"},[i("i",[t._v("¥")]),t._v(t._s(t.getPrice(e.originalPrice,e.discount))+" ")])])])])})),0),i("div",{staticClass:"list__footer"},[i("div",{staticClass:"button",on:{click:t.clickButton}},[i("p",[t._v("兑换查看全部 >")])])])]):t._e()},f=[],p=(i("b680"),{name:"GoodsList",props:{goods:{type:Array,default:function(){return[]}},options:{type:Array,default:function(){return[]}}},methods:{getOriginalPrice:function(t){return t.toFixed(1)},getPrice:function(t,e){var i=this.getOriginalPrice(t),n=i-e;return 10*n%10>0&&(n=n.toFixed(2)),n},clickItem:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=20===t.discount?1:0;this.options[e]&&(this.options[e].redeemed?Object(s["A"])(t.linkUrl):(t.cash=this.options[e].cash,t.coin=this.options[e].coin,this.$emit("showdialog",t)),this.$o2o({e_c:"商品详情点击",e_a:"点击",e_n:"金币兑换现金券",e_x:{keyword:"".concat(t.discount,"元")}}))},clickButton:function(){this.options[0]&&!this.options[0].redeemed?this.$emit("showdialog",this.options[0]):this.options[1]&&!this.options[1].redeemed?this.$emit("showdialog",this.options[1]):this.options[0]&&Object(s["A"])(this.options[0].uninstalledUrl),this.$o2o({e_c:"底部按钮点击",e_a:"点击",e_n:"金币兑换现金券"})}}}),v=p,_=(i("776e"),i("2877")),g=Object(_["a"])(v,h,f,!1,null,"08045422",null),m=g.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.options&&t.options.length?i("div",{staticClass:"exchange"},[i("div",{staticClass:"hint"},[i("div",{staticClass:"hint-text"},[i("span",[t._v("今日优惠倒计时")]),i("pdd-countdown",{attrs:{time:t.countDown,"is-stop":!0},on:{stop:function(e){return t.$emit("stop")}}}),i("span",[t._v("已有"+t._s(t.people)+"人兑换使用")])],1)]),i("div",{staticClass:"coupon-list"},t._l(t.options,(function(e,n){return i("div",{key:n,staticClass:"coupon coupon-breath",class:"coupon-"+n,on:{click:function(i){return t.clickCoupon(e)}}},[e.redeemed?i("div",[i("div",{staticClass:"seal"}),i("div",{staticClass:"button redeemed"},[t._v(" 去使用 ")])]):i("div",[t._m(0,!0)])])})),0),t._m(1)]):t._e()},w=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"button"},[t._v(" 立即"),i("br"),t._v("兑换 ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rules"},[t._v(" 1、金币兑换的现金券，可用于[拼多多]APP购买商品使用，跳转后需登录领取； "),i("br"),t._v(" 2、每天仅能兑换"),i("span",[t._v("1次")]),t._v("，且需在"),i("span",[t._v("2小时")]),t._v("内使用，过期将不能使用； "),i("br"),t._v(" 3、现金券一经兑换，不可退换哦。 ")])}],k=(i("a9e3"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.countDownTime>=0?i("div",{staticClass:"pdd-countdown"},[i("span",[i("span",[t._v(t._s(("0"+t.hours).slice(-2)))]),t._v(" : ")]),i("span",[i("span",[t._v(t._s(("0"+t.minutes).slice(-2)))]),t._v(" : ")]),i("span",[i("span",[t._v(t._s(("0"+t.seconds).slice(-2)))]),t._v(" . ")]),i("span",[i("span",[t._v(t._s(t.decimal))])])]):t._e()}),y=[],C={name:"PddCountdown",props:{time:{type:Number,required:!0,default:6048e5},isStop:{type:Boolean,default:!1}},data:function(){return{D:864e5,H:36e5,M:6e4,S:1e3,SS:100,intervalId:0,countDownTime:0,previousTime:Date.now()}},computed:{days:function(){var t=Math.floor(this.countDownTime/this.D);return t>=0?t:0},hours:function(){var t=Math.floor((this.countDownTime-this.days*this.D)/this.H);return t>=0?t:0},minutes:function(){var t=Math.floor((this.countDownTime-this.days*this.D-this.hours*this.H)/this.M);return t>=0?t:0},seconds:function(){var t=Math.floor((this.countDownTime-this.days*this.D-this.hours*this.H-this.minutes*this.M)/this.S);return t>=0?t:0},decimal:function(){var t=Math.floor((this.countDownTime-this.days*this.D-this.hours*this.H-this.minutes*this.M-this.seconds*this.S)/this.SS);return t>=0?t:0}},watch:{time:{handler:function(t){var e=this;t?setTimeout((function(){e.countDownTime=t,e.intervalId=setInterval(e.tick,100)}),0):clearInterval(this.intervalId)},immediate:!0}},destoryed:function(){clearInterval(this.intervalId)},methods:{tick:function(){var t=Date.now(),e=t-this.previousTime;this.countDownTime=this.countDownTime-e,this.previousTime=t,this.isStop&&(this.countDownTime<100&&this.countDownTime>0||this.countDownTime<0&&this.countDownTime>-100)&&(this.$emit("stop"),clearInterval(this.intervalId)),this.countDownTime<0&&(this.countDownTime=0)}}},D=C,x=(i("c1fd"),Object(_["a"])(D,k,y,!1,null,"549e31b5",null)),$=x.exports,T={name:"Exchange",props:{options:{type:Array,default:function(){return[]}},countDown:{type:Number,default:0},number:{type:Number,default:0},install:{type:Boolean,default:!1}},components:{PddCountdown:$},computed:{people:function(){return this.number>=1e4?"".concat((this.number/1e4).toFixed(1),"万"):this.number}},methods:{clickCoupon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.redeemed?(this.install?location.href=t.installedUrl:Object(s["A"])(t.uninstalledUrl),this.$o2o({e_c:"".concat(t.cash,"元券使用"),e_a:"点击",e_n:"金币兑换现金券"})):(this.$emit("showdialog",t),this.$o2o({e_c:"".concat(t.cash,"元券兑换"),e_a:"点击",e_n:"金币兑换现金券"}))}}},O=T,j=(i("4985"),Object(_["a"])(O,b,w,!1,null,"227b276e",null)),S=j.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.data&&t.data.cash?i("gray-mask",{attrs:{show:!!t.show}},[i("div",{staticClass:"dialog"},[i("div",{staticClass:"close",on:{click:t.clickClose}}),"exchange"===t.show?i("div",[i("div",{staticClass:"title"},[t._v("兑换确认")]),i("div",{staticClass:"desc"},[t._v("即将兑换限时"+t._s(t.data.cash)+"元现金券，仅需0.1折（"+t._s(t.data.coin)+"金币），点击兑换按钮立即去使用现金券。")]),i("div",{staticClass:"button",on:{click:t.clickExchange}},[t._v(" 立即兑换使用 ")])]):i("div",[i("div",{staticClass:"title"},[t._v("金币不足")]),i("div",{staticClass:"desc"},[t._v("呀，账户金币不足，暂时无法兑换高额优惠券。推荐使用大转盘抽奖功能，领取金币和小额度优惠券再兑换。")]),i("div",{staticClass:"button",on:{click:t.gotoTurn}},[t._v(" 去转盘抽免单 ")])])])]):t._e()},P=[],H=i("a1ba"),F={components:{GrayMask:H["a"]},props:{show:{type:[String,Boolean],default:""},data:{type:Object,default:function(){}},url:{type:String,default:""},install:{type:Boolean,default:!1}},methods:{gotoTurn:function(){this.$o2o({e_c:"去大转盘按钮",e_a:"点击",e_n:"金币兑换现金券",e_x:{keyword:"".concat(this.data&&this.data.cash,"元")}}),location.href=this.url,this.$emit("close")},clickClose:function(){this.$emit("close"),this.$o2o({e_c:"exchange"===this.show?"兑换确认弹窗":"金币不足弹窗",e_a:"关闭",e_n:"金币兑换现金券",e_x:{keyword:"".concat(this.data&&this.data.cash,"元")}})},clickExchange:function(){var t=this,e=10===this.data.cash?1:2;d({type:e}).then((function(){t.data.linkUrl?Object(s["A"])(t.data.linkUrl):t.install?location.href=t.data.installedUrl:Object(s["A"])(t.data.uninstalledUrl),t.$emit("close")})).catch((function(){Object(s["H"])("领取失败，请重试")})),this.$o2o({e_c:"兑换并使用按钮",e_a:"点击",e_n:"金币兑换现金券",e_x:{keyword:"".concat(this.data&&this.data.cash,"元"),status:this.install?"已安装":"未安装"}})}}},A=F,L=(i("df77"),Object(_["a"])(A,E,P,!1,null,"950c0af6",null)),U=L.exports,I="pddExchange-backdialog",M={name:"PddExchange",components:{GoodsList:m,Exchange:S,PddDialog:U,BackDialog:r["a"]},data:function(){return{isLogin:!1,currentCoin:0,countDownTime:0,number:0,turnTableUrl:"https://feed.browser.miui.com/mobile-v2/act/pddCooperation",options:[],goods:[],pinduoduo:"com.xunmeng.pinduoduo",dialogType:"",dialogData:{},backDialogShowed:"true"===Object(c["d"])(I),backDialogShow:!1}},mounted:function(){Object(a["a"])("backKey",this.backKeyHandler),Object(s["z"])(!0)},methods:{login:function(){try{Object(s["h"])("pddExchangeLoginCallback")}catch(t){console.log(t)}},hasPinduoduo:function(){return Object(s["k"])(this.pinduoduo)>0},getData:function(){var t=this;u().then((function(e){t.currentCoin=e.currentCoin||0,t.countDownTime=e.remainingTime,t.number=e.number,t.turnTableUrl=e.turnTableUrl,t.options=e.options,t.goods.length||(t.goods=e.goods),t.isLogin=e.login,t.isLogin||t.login(),t.$root.hidePlaceholder()})).catch((function(){t.$error()}))},closeDialog:function(){this.dialogType=""},clickHandler:function(t){this.isLogin||(t.stopPropagation(),this.login())},dialogHandler:function(t){this.dialogData=t,this.currentCoin>=t.coin?(this.dialogType="exchange",this.$o2o({e_c:"兑换确认弹窗",e_a:"曝光",e_n:"金币兑换现金券",e_x:{keyword:"".concat(t.cash,"元")}})):(this.dialogType="toturn",this.$o2o({e_c:"金币不足弹窗",e_a:"曝光",e_n:"金币兑换现金券",e_x:{keyword:"".concat(t.cash,"元")}}))},focusHandler:function(){this.isLogin&&this.getData()},backHandler:function(){this.$o2o({e_c:"返回按钮",e_a:"点击",e_n:"金币兑换现金券"}),this.backKeyHandler()},backKeyHandler:function(){this.dialogType?this.closeDialog():this.backDialogShowed?this.backDialogShow?this.backDialogShow=!1:Object(s["D"])():(Object(c["f"])(I,"true"),this.backDialogShowed=!0,this.backDialogShow=!0)},addListeners:function(){var t=this;window.pddExchangeLoginCallback=function(e){e&&t.getData()},Object(a["a"])("focus",this.focusHandler)},init:function(){this.getData(),this.$o2o({e_c:"主页",e_a:"曝光",e_n:"金币兑换现金券"})}},created:function(){this.addListeners(),this.init()},destroyed:function(){Object(s["z"])(!1),Object(a["f"])("backKey",this.backKeyHandler),Object(a["f"])("focus",this.focusHandler)}},B=M,N=(i("b7ab"),Object(_["a"])(B,n,o,!1,null,"58567943",null));e["default"]=N.exports},1148:function(t,e,i){"use strict";var n=i("a691"),o=i("1d80");t.exports="".repeat||function(t){var e=String(o(this)),i="",s=n(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(i+=e);return i}},"408a":function(t,e,i){var n=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},4985:function(t,e,i){"use strict";var n=i("5f70"),o=i.n(n);o.a},"58c4":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("gray-mask",{attrs:{show:t.show}},[i("div",{staticClass:"dialog"},[i("div",{staticClass:"light"}),i("div",{staticClass:"close",on:{click:t.closeDialog}}),i("h2",{staticClass:"title"},[t._v("悄悄告诉你 赚金币秘籍")]),i("div",{staticClass:"btns"},[i("button",{staticClass:"btn1",on:{click:function(e){return t.goOtherAct("抽免单")}}},[t._v(" 去抽免单 ")]),i("button",{staticClass:"btn2",on:{click:function(e){return t.goOtherAct("领金币")}}},[t._v(" 去领200金币 ")])]),i("p",{staticClass:"back",on:{click:t.goBack}},[t._v(" 继续返回 ")])])])},o=[],s=i("a1ba"),a=i("685a"),c=i("edb0"),r={components:{GrayMask:s["a"]},props:{page:{type:String,default:"PDD商品列表页"},url:{type:String,default:"bikan://web.goto/commonWebView?url_encode=https%3A%2F%2Ffeed.browser.miui.com%2Fmobile-v2%2Fact%2FpddExchange"}},data:function(){return{show:!0}},created:function(){this.$o2o({e_c:"挽留弹窗",e_a:"曝光",e_n:this.page})},methods:{closeDialog:function(){this.$o2o({e_c:"挽留弹窗关闭",e_a:"点击",e_n:this.page}),this.show=!1,this.$emit("close")},goBack:function(){this.$o2o({e_c:"挽留弹窗继续返回",e_a:"点击",e_n:this.page}),Object(a["g"])()?Object(c["D"])():this.$router.go(-1)},goOtherAct:function(t){this.$o2o({e_c:"挽留弹窗".concat(t),e_a:"点击",e_n:this.page}),location.href=this.url}}},l=r,u=(i("c058"),i("2877")),d=Object(u["a"])(l,n,o,!1,null,"7eab1b42",null);e["a"]=d.exports},"5f70":function(t,e,i){},6910:function(t,e,i){},"6d6a":function(t,e,i){},"776e":function(t,e,i){"use strict";var n=i("8552"),o=i.n(n);o.a},8226:function(t,e,i){},8552:function(t,e,i){},9991:function(t,e,i){},a1ba:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._g({directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"gray-mask"},t.$listeners),[t._t("default")],2)},o=[],s={name:"GrayMask",props:{show:{type:[String,Boolean],default:""}},methods:{stopSlide:function(t){t.preventDefault()}},watch:{show:{handler:function(t){t?(console.log("禁止滑动"),document.body.addEventListener("touchmove",this.stopSlide,{passive:!1})):(console.log("可以滑动"),document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1}))},immediate:!0}},destroyed:function(){document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1})}},a=s,c=(i("bccd"),i("2877")),r=Object(c["a"])(a,n,o,!1,null,"4cb2c41a",null);e["a"]=r.exports},b308:function(t,e,i){},b680:function(t,e,i){"use strict";var n=i("23e7"),o=i("a691"),s=i("408a"),a=i("1148"),c=i("d039"),r=1..toFixed,l=Math.floor,u=function(t,e,i){return 0===e?i:e%2===1?u(t,e-1,i*t):u(t*t,e/2,i)},d=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},h=r&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){r.call({})}));n({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,i,n,c,r=s(this),h=o(t),f=[0,0,0,0,0,0],p="",v="0",_=function(t,e){var i=-1,n=e;while(++i<6)n+=t*f[i],f[i]=n%1e7,n=l(n/1e7)},g=function(t){var e=6,i=0;while(--e>=0)i+=f[e],f[e]=l(i/t),i=i%t*1e7},m=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var i=String(f[t]);e=""===e?i:e+a.call("0",7-i.length)+i}return e};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return String(r);if(r<0&&(p="-",r=-r),r>1e-21)if(e=d(r*u(2,69,1))-69,i=e<0?r*u(2,-e,1):r/u(2,e,1),i*=4503599627370496,e=52-e,e>0){_(0,i),n=h;while(n>=7)_(1e7,0),n-=7;_(u(10,n,1),0),n=e-1;while(n>=23)g(1<<23),n-=23;g(1<<n),_(1,1),g(2),v=m()}else _(0,i),_(1<<-e,0),v=m()+a.call("0",h);return h>0?(c=v.length,v=p+(c<=h?"0."+a.call("0",h-c)+v:v.slice(0,c-h)+"."+v.slice(c-h))):v=p+v,v}})},b7ab:function(t,e,i){"use strict";var n=i("b308"),o=i.n(n);o.a},bccd:function(t,e,i){"use strict";var n=i("9991"),o=i.n(n);o.a},c058:function(t,e,i){"use strict";var n=i("8226"),o=i.n(n);o.a},c1fd:function(t,e,i){"use strict";var n=i("6910"),o=i.n(n);o.a},df77:function(t,e,i){"use strict";var n=i("6d6a"),o=i.n(n);o.a}}]);
//# sourceMappingURL=chunk-ca11ffb4-legacy.2b753a9a.js.map