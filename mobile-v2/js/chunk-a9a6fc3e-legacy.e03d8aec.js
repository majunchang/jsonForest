(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9a6fc3e"],{1148:function(t,e,n){"use strict";var o=n("a691"),a=n("1d80");t.exports="".repeat||function(t){var e=String(a(this)),n="",i=o(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},"20e9":function(t,e,n){},2909:function(t,e,n){"use strict";function o(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0");function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){return o(t)||a(t)||i()}n.d(e,"a",(function(){return s}))},3410:function(t,e,n){},"408a":function(t,e,n){var o=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=o(t))throw TypeError("Incorrect invocation");return+t}},4106:function(t,e,n){"use strict";var o=n("20e9"),a=n.n(o);a.a},"4df4":function(t,e,n){"use strict";var o=n("0366"),a=n("7b0b"),i=n("9bdd"),s=n("e95a"),c=n("50c4"),r=n("8418"),u=n("35a1");t.exports=function(t){var e,n,l,d,f,h,p=a(t),m="function"==typeof this?this:Array,g=arguments.length,b=g>1?arguments[1]:void 0,v=void 0!==b,_=u(p),w=0;if(v&&(b=o(b,g>2?arguments[2]:void 0,2)),void 0==_||m==Array&&s(_))for(e=c(p.length),n=new m(e);e>w;w++)h=v?b(p[w],w):p[w],r(n,w,h);else for(d=_.call(p),f=d.next,n=new m;!(l=f.call(d)).done;w++)h=v?i(d,b,[l.value,w],!0):l.value,r(n,w,h);return n.length=w,n}},"58c4":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("gray-mask",{attrs:{show:t.show}},[n("div",{staticClass:"dialog"},[n("div",{staticClass:"light"}),n("div",{staticClass:"close",on:{click:t.closeDialog}}),n("h2",{staticClass:"title"},[t._v("悄悄告诉你 赚金币秘籍")]),n("div",{staticClass:"btns"},[n("button",{staticClass:"btn1",on:{click:function(e){return t.goOtherAct("抽免单")}}},[t._v(" 去抽免单 ")]),n("button",{staticClass:"btn2",on:{click:function(e){return t.goOtherAct("领金币")}}},[t._v(" 去领200金币 ")])]),n("p",{staticClass:"back",on:{click:t.goBack}},[t._v(" 继续返回 ")])])])},a=[],i=n("a1ba"),s=n("685a"),c=n("edb0"),r={components:{GrayMask:i["a"]},props:{page:{type:String,default:"PDD商品列表页"},url:{type:String,default:"bikan://web.goto/commonWebView?url_encode=https%3A%2F%2Ffeed.browser.miui.com%2Fmobile-v2%2Fact%2FpddExchange"}},data:function(){return{show:!0}},created:function(){this.$o2o({e_c:"挽留弹窗",e_a:"曝光",e_n:this.page})},methods:{closeDialog:function(){this.$o2o({e_c:"挽留弹窗关闭",e_a:"点击",e_n:this.page}),this.show=!1,this.$emit("close")},goBack:function(){this.$o2o({e_c:"挽留弹窗继续返回",e_a:"点击",e_n:this.page}),Object(s["g"])()?Object(c["D"])():this.$router.go(-1)},goOtherAct:function(t){this.$o2o({e_c:"挽留弹窗".concat(t),e_a:"点击",e_n:this.page}),location.href=this.url}}},u=r,l=(n("c058"),n("2877")),d=Object(l["a"])(u,o,a,!1,null,"7eab1b42",null);e["a"]=d.exports},8226:function(t,e,n){},"857a":function(t,e,n){var o=n("1d80"),a=/"/g;t.exports=function(t,e,n,i){var s=String(o(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),c+">"+s+"</"+e+">"}},8825:function(t,e,n){"use strict";var o=n("d8d8"),a=n.n(o);a.a},"8e92":function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return r}));n("d3b7");var o=n("0c6d");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["b"].get("/api/v4/pinduoduo/goods/search/list",t).then((function(t){return 200!==t.data.status?(Object(o["a"])(t),Promise.reject(t.data)):Promise.resolve(t.data.data)}))}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["b"].get("/api/v4/pinduoduo/top/goods/list",t).then((function(t){return 200!==t.data.status?(Object(o["a"])(t),Promise.reject(t.data)):Promise.resolve(t.data.data)}))}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["b"].get("/api/v4/pinduoduo/merchant/list",t).then((function(t){return 200!==t.data.status?(Object(o["a"])(t),Promise.reject(t.data)):Promise.resolve(t.data.data)}))}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["b"].get("/api/v4/pinduoduo/goods/detail",t).then((function(t){return 200!==t.data.status?(Object(o["a"])(t),Promise.reject(t.data)):Promise.resolve(t.data.data)}))}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["b"].get("/api/v4/pinduoduo/mall/goods/list",t).then((function(t){return 200!==t.data.status?(Object(o["a"])(t),Promise.reject(t.data)):Promise.resolve(t.data.data)}))}},9911:function(t,e,n){"use strict";var o=n("23e7"),a=n("857a"),i=n("af03");o({target:"String",proto:!0,forced:i("link")},{link:function(t){return a(this,"a","href",t)}})},9991:function(t,e,n){},a1ba:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g({directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"gray-mask"},t.$listeners),[t._t("default")],2)},a=[],i={name:"GrayMask",props:{show:{type:[String,Boolean],default:""}},methods:{stopSlide:function(t){t.preventDefault()}},watch:{show:{handler:function(t){t?(console.log("禁止滑动"),document.body.addEventListener("touchmove",this.stopSlide,{passive:!1})):(console.log("可以滑动"),document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1}))},immediate:!0}},destroyed:function(){document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1})}},s=i,c=(n("bccd"),n("2877")),r=Object(c["a"])(s,o,a,!1,null,"4cb2c41a",null);e["a"]=r.exports},a630:function(t,e,n){var o=n("23e7"),a=n("4df4"),i=n("1c7e"),s=!i((function(t){Array.from(t)}));o({target:"Array",stat:!0,forced:s},{from:a})},af03:function(t,e,n){var o=n("d039");t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b053:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("div",{class:["top",t.page],attrs:{id:t.page}},[n("div",{staticClass:"back",on:{click:t.backHandler}}),t._t("top")],2),n("div",{staticClass:"content"},[t._t("default")],2),n("div",{class:["bottom",t.page]},[t._v(t._s(t.bottomText))])])},a=[],i=(n("b0c0"),n("6b43")),s=n("685a"),c=n("edb0"),r="pddmall-backdialog",u={props:{bottomText:{type:String,default:""},page:{type:String,default:"channel"}},methods:{backHandler:function(){"pddMallChannel"===this.$route.name&&this.$o2o({e_c:"首页返回",e_a:"点击",e_n:"PDD商品列表页"}),Object(s["g"])()&&"true"===Object(i["d"])(r)&&"pddMallChannel"===this.$route.name?Object(c["D"])():this.$router.back()}}},l=u,d=(n("4106"),n("2877")),f=Object(d["a"])(l,o,a,!1,null,"6dfae2e1",null);e["a"]=f.exports},b0c0:function(t,e,n){var o=n("83ab"),a=n("9bf2").f,i=Function.prototype,s=i.toString,c=/^\s*function ([^ (]*)/,r="name";!o||r in i||a(i,r,{configurable:!0,get:function(){try{return s.call(this).match(c)[1]}catch(t){return""}}})},b289:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return r})),n.d(e,"g",(function(){return u})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d}));n("b680");var o=n("6b43"),a=null,i="pddmall-backdialog";function s(t,e){var n=t-e;return Math.round(n)===n?n:n.toFixed(1)}function c(t){a=t}function r(t){"backDialog"===t.state&&a&&(a.dialogShow=!0,Object(o["f"])(i,"true"),window.removeEventListener("popstate",r))}var u=[{optId:-1,optName:"精选"},{optId:-11,optName:"清仓"},{optId:15,optName:"百货"},{optId:4,optName:"母婴"},{optId:1,optName:"食品"},{optId:14,optName:"女装"},{optId:18,optName:"电器"},{optId:1281,optName:"鞋包"},{optId:1282,optName:"内衣"},{optId:16,optName:"美妆"},{optId:743,optName:"男装"},{optId:13,optName:"水果"},{optId:818,optName:"家纺"},{optId:2478,optName:"文具"},{optId:1451,optName:"运动"},{optId:590,optName:"虚拟"},{optId:2048,optName:"汽车"},{optId:1917,optName:"家装"},{optId:2974,optName:"家具"},{optId:3279,optName:"医药"}],l="cashShopInfo",d="fe-config-xiangkan-common"},b680:function(t,e,n){"use strict";var o=n("23e7"),a=n("a691"),i=n("408a"),s=n("1148"),c=n("d039"),r=1..toFixed,u=Math.floor,l=function(t,e,n){return 0===e?n:e%2===1?l(t,e-1,n*t):l(t*t,e/2,n)},d=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},f=r&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){r.call({})}));o({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,n,o,c,r=i(this),f=a(t),h=[0,0,0,0,0,0],p="",m="0",g=function(t,e){var n=-1,o=e;while(++n<6)o+=t*h[n],h[n]=o%1e7,o=u(o/1e7)},b=function(t){var e=6,n=0;while(--e>=0)n+=h[e],h[e]=u(n/t),n=n%t*1e7},v=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==h[t]){var n=String(h[t]);e=""===e?n:e+s.call("0",7-n.length)+n}return e};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return String(r);if(r<0&&(p="-",r=-r),r>1e-21)if(e=d(r*l(2,69,1))-69,n=e<0?r*l(2,-e,1):r/l(2,e,1),n*=4503599627370496,e=52-e,e>0){g(0,n),o=f;while(o>=7)g(1e7,0),o-=7;g(l(10,o,1),0),o=e-1;while(o>=23)b(1<<23),o-=23;b(1<<o),g(1,1),b(2),m=v()}else g(0,n),g(1<<-e,0),m=v()+s.call("0",f);return f>0?(c=m.length,m=p+(c<=f?"0."+s.call("0",f-c)+m:m.slice(0,c-f)+"."+m.slice(c-f))):m=p+m,m}})},bb2f:function(t,e,n){var o=n("d039");t.exports=!o((function(){return Object.isExtensible(Object.preventExtensions({}))}))},bccd:function(t,e,n){"use strict";var o=n("9991"),a=n.n(o);a.a},c058:function(t,e,n){"use strict";var o=n("8226"),a=n.n(o);a.a},c5e9:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pdd-layout",{attrs:{page:"channel","bottom-text":t.bottomText}},[n("div",{staticClass:"channel"},[n("div",{staticClass:"channel-generalize-banner"}),n("div",{staticClass:"channel-generalize"},t._l(t.generalizeInfo,(function(e,o){return n("div",{key:o,staticClass:"generalize-goods",on:{click:function(n){return t.goGeneralize(e)}}},[n("div",{staticClass:"goods-img",style:{backgroundImage:"url("+e.imgUrl+")"}}),n("div",{staticClass:"generalize-text"},[t._v(t._s(e.text))])])})),0),n("div",{staticClass:"channel-title"},[t._v(" 今日特价福利还剩 "),n("span",{staticClass:"channel-title-countdown"},[n("p",[t._v(" "+t._s(t.countDown.hour))]),t._v(" : "),n("p",[t._v(" "+t._s(t.countDown.minute))]),t._v(" : "),n("p",[t._v(" "+t._s(t.countDown.second))])]),t._v(" 结束 ")]),n("pddMallTabs",{on:{finish:t.finish}})],1),t.dialogShow?n("BackDialog"):t._e()],1)},a=[],i=(n("b0c0"),n("9911"),n("2934")),s=n("6b43"),c=n("58c4"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tabs",{staticClass:"channel-tabs",on:{select:t.selectTab}},t._l(t.tabs,(function(e,o){return n("tab",{key:o,attrs:{selected:0===o,"class-custom":"channel-tab",name:e.optName}},[n("van-list",{attrs:{finished:t.finished,"immediate-check":!1},on:{load:t.getSearchList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("div",{staticClass:"channel-goods-list"},t._l(t.goodlist,(function(e,o){return n("div",{key:o,staticClass:"channel-goods",on:{click:function(n){return t.goGoodsDetail(e.goodsId)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgUrl,expression:"item.imgUrl"}],key:e.goodsId,staticClass:"channel-goods-img"}),n("div",{staticClass:"channel-container"},[n("div",{staticClass:"channel-goods-name"},[t._v(" "+t._s(e.name)+" ")]),n("div",[n("span",{staticClass:"salecount"},[t._v(" 已售"+t._s(e.salesTip)+"件 ")]),n("div",{staticClass:"channel-goods-discounts"},[n("div",{staticClass:"discounts-icon"},[t._v(" 省 ")]),t._v(" "+t._s(e.discount)+"元劵 ")])]),n("div",{staticClass:"channel-goods-info"},[n("div",{staticClass:"sale"},[t._v(" ￥"),n("span",{staticClass:"sale-symbol"},[t._v(t._s(e.computePrice))])]),n("s",{staticClass:"original-sale"},[t._v(" ￥"+t._s(e.originalPrice)+" ")])])])])})),0)])],1)})),1)},u=[],l=(n("99af"),n("4160"),n("d81d"),n("dca8"),n("159b"),n("2909")),d=n("26a1"),f=n("8e92"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"tabs"},[n("ul",{attrs:{id:"tabs-ui"}},t._l(t.tabs,(function(e,o){return n("li",{key:o,class:[e.isActive?"active":"",""+e.classCustom]},[n("div",{staticClass:"tab-name",on:{click:function(n){return t.selectTab(e,o)}}},[t._v(t._s(e.name))])])})),0)]),n("div",{staticClass:"tabs-details"},[t._t("default")],2)])},p=[],m={name:"Tabs",data:function(){return{tabs:[],selectedTabIndex:0}},created:function(){this.tabs=this.$children},methods:{selectTab:function(t,e){this.tabs.forEach((function(e){e.isActive=e.name===t.name})),this.$emit("select",{selectedTab:t,index:e})}}},g=m,b=n("2877"),v=Object(b["a"])(g,h,p,!1,null,null,null),_=v.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}]},[t._t("default")],2)},y=[],x={name:"Tab",props:{name:{type:String,required:!0},selected:{type:Boolean,default:!1},classCustom:{type:String,default:""}},data:function(){return{isActive:!1}},mounted:function(){this.isActive=this.selected}},k=x,I=Object(b["a"])(k,w,y,!1,null,null,null),O=I.exports,C=n("b289"),j="PDD商品列表页",S="第一屏",D={name:"PDDMallTabs",components:{Tabs:_,Tab:O},created:function(){this.getOptList()},mounted:function(){this.computedFixedHeight()},data:function(){return{tabs:[],goodlist:[],selectedOptId:"",fixedTop:"",page:1,pageSize:10,fixTabs:!1,loading:!1,finished:!1}},watch:{selectedOptId:function(t,e){if(t!==e){var n=this.getScrollTop();this.page=1,this.goodlist=this.goodlist.map((function(){return{goodsId:"",name:"",imgUrl:"",discount:0,salesTip:0,originalPrice:0}})),n>this.fixedTop&&this.setScrollTop(this.fixedTop),this.getSearchList()}}},methods:{getOptList:function(){this.tabs=C["g"],this.selectedOptId=this.tabs[0].optId,this.getSearchList()},computedFixedHeight:function(){var t=Object(d["b"])("channel-title")[0],e=Object(d["b"])("channel-generalize")[0],n=parseFloat(window.getComputedStyle(t).getPropertyValue("margin-bottom")),o=parseFloat(window.getComputedStyle(e).getPropertyValue("margin-bottom"));this.fixedTop=t.clientHeight+e.clientHeight+n+o},getSearchList:function(){var t=this;this.loading=!0,Object(f["d"])({optId:this.selectedOptId,page:this.page,pageSize:this.pageSize}).then((function(e){t.loading=!1,e.length||(t.finished=!0,t.$emit("finish",t.page>1)),e.forEach((function(e){e.computePrice=t.computePrice(e.originalPrice,e.discount)})),1===t.page?t.goodlist=Object.freeze(e):t.goodlist=Object.freeze([].concat(Object(l["a"])(t.goodlist),Object(l["a"])(e))),t.page+=1})).catch((function(){t.$error()}))},setScrollTop:function(t){document.documentElement.scrollTop=t,document.body.scrollTop=t},getScrollTop:function(){return document.body.scrollTop||document.documentElement.scrollTop},selectTab:function(t){var e=t.index;this.$o2o({e_c:"分类点击",e_a:"点击",e_n:j,e_x:{name:this.tabs[e].optName}}),this.selectedOptId=this.tabs[e].optId},goGoodsDetail:function(t){this.$o2o({e_c:"商品列表",e_a:"点击",e_n:j,e_x:{path:S}}),this.$router.push({name:"pddMallGoodsDetail",query:{goodsId:t}})},computePrice:function(t,e){return Object(C["c"])(t,e)}}},T=D,$=(n("8825"),Object(b["a"])(T,r,u,!1,null,"1f2a43d4",null)),E=$.exports,N=n("b053"),P="- 今日全部优惠都在上面啦 -",A="- 该分类下暂无优惠商品哦 -",z="PDD商品列表页",F={name:"PDDMallChannel",components:{pddMallTabs:E,pddLayout:N["a"],BackDialog:c["a"]},created:function(){this.$o2o({e_c:"首页",e_a:"曝光",e_n:z}),this.$root.hidePlaceholder(),this.getApolloInfo(),this.getTime()},data:function(){return{timer:null,countDown:{hour:"12",minute:"12",second:"12"},generalizeInfo:[],bottomText:"",dialogShow:!1}},mounted:function(){var t="true"!==Object(s["d"])(C["d"]);t&&Object(C["f"])(this),!this.$router.from.name&&t&&(history.replaceState("backDialog",null,document.URL),history.pushState(null,null,document.URL),window.addEventListener("popstate",C["e"]))},methods:{getApolloInfo:function(){var t=this;Object(i["b"])({key:C["a"]}).then((function(e){t.generalizeInfo=e.data.pddMall})).catch((function(){t.$error()}))},goGeneralize:function(t){t["xiangkan-innerActPath"]?this.$router.push(t.link):window.location.href=t.link,this.$o2o({e_c:"顶部推荐",e_a:"点击",e_n:z,e_x:{name:t.text}})},getTime:function(){var t=this;clearTimeout(this.timer),this.computeCountDown()>0&&(this.timer=setTimeout((function(){t.getTime()}),1e3))},computeCountDown:function(){var t=Date.now(),e=(new Date).setHours(24,0,0,0),n=new Date(e-t-288e5),o=this.checktime(n.getHours()),a=this.checktime(n.getMinutes()),i=this.checktime(n.getSeconds());return this.countDown={hour:o,minute:a,second:i},e-t>0},checktime:function(t){return t<10?"0".concat(t):t},goShops:function(){this.$router.push("/act/pddMall/shops")},finish:function(t){this.bottomText=t?P:A}}},L=F,M=(n("f917"),Object(b["a"])(L,o,a,!1,null,"590ea6f0",null));e["default"]=M.exports},d81d:function(t,e,n){"use strict";var o=n("23e7"),a=n("b727").map,i=n("1dde"),s=n("ae40"),c=i("map"),r=s("map");o({target:"Array",proto:!0,forced:!c||!r},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},d8d8:function(t,e,n){},dca8:function(t,e,n){var o=n("23e7"),a=n("bb2f"),i=n("d039"),s=n("861d"),c=n("f183").onFreeze,r=Object.freeze,u=i((function(){r(1)}));o({target:"Object",stat:!0,forced:u,sham:!a},{freeze:function(t){return r&&s(t)?r(c(t)):t}})},f183:function(t,e,n){var o=n("d012"),a=n("861d"),i=n("5135"),s=n("9bf2").f,c=n("90e3"),r=n("bb2f"),u=c("meta"),l=0,d=Object.isExtensible||function(){return!0},f=function(t){s(t,u,{value:{objectID:"O"+ ++l,weakData:{}}})},h=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,u)){if(!d(t))return"F";if(!e)return"E";f(t)}return t[u].objectID},p=function(t,e){if(!i(t,u)){if(!d(t))return!0;if(!e)return!1;f(t)}return t[u].weakData},m=function(t){return r&&g.REQUIRED&&d(t)&&!i(t,u)&&f(t),t},g=t.exports={REQUIRED:!1,fastKey:h,getWeakData:p,onFreeze:m};o[u]=!0},f917:function(t,e,n){"use strict";var o=n("3410"),a=n.n(o);a.a}}]);
//# sourceMappingURL=chunk-a9a6fc3e-legacy.e03d8aec.js.map