(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b66775fa"],{1148:function(t,e,a){"use strict";var o=a("a691"),i=a("1d80");t.exports="".repeat||function(t){var e=String(i(this)),a="",n=o(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(a+=e);return a}},"122d":function(t,e,a){"use strict";var o=a("4991"),i=a.n(o);i.a},"20e9":function(t,e,a){},"408a":function(t,e,a){var o=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=o(t))throw TypeError("Incorrect invocation");return+t}},4106:function(t,e,a){"use strict";var o=a("20e9"),i=a.n(o);i.a},4991:function(t,e,a){},"7a6f":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pdd-layout",{attrs:{page:"shops","bottom-text":t.bottomText}},[a("div",{staticClass:"shops-conten-placeholder"}),a("div",{staticClass:"shops-content"},[a("van-list",{attrs:{finished:t.finished},on:{load:t.getMerchantList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.shoplist,(function(e,o){return a("div",{key:o,staticClass:"shops",on:{click:function(a){return t.goShopDetail(e)}}},[a("div",{staticClass:"shop-title"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img_url,expression:"item.img_url"}],staticClass:"shop-img"}),a("div",{staticClass:"shop-info"},[a("div",{staticClass:"shop-name-tag"},[a("span",{staticClass:"shop-name"},[t._v(t._s(e.mallName))]),a("span",{staticClass:"shop-tag"},[t._v(t._s(t.merchantType[e.merchantType]))])]),a("div",{staticClass:"shop-desc"},[t._v(" 描述相符：高 | 服务态度： 高 | 物流服务：高 ")]),a("div",{staticClass:"shop-sell"},[t._v(" 近30天销量： "+t._s(e.salesTip)+" ")])])]),a("div",{staticClass:"shop-good-list"},t._l(e.list.slice(0,3),(function(e,o){return a("div",{key:o,staticClass:"shop-good"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgUrl,expression:"it.imgUrl"}]}),a("div",{staticClass:"shop-good-info"},[a("div",{staticClass:"shop-good-name"},[t._v(" "+t._s(e.name)+" ")]),a("div",{staticClass:"shop-good-price"},[t._v(" 活动价: "),a("span",[t._v("￥"+t._s(e.computePrice))])])])])})),0),a("div",{staticClass:"shop-btn"},[t._v(" 进店逛逛 ")])])})),0)],1)])},i=[],n=(a("e260"),a("fb6a"),a("ddb0"),a("8e92")),s=a("b053"),r=a("b289"),c="PDD商铺列表页",d="第二屏",l={1:"个人",2:"企业",3:"旗舰店",4:"专卖店",5:"专营店",6:"普通店"},p={name:"PDDMallShops",components:{pddLayout:s["a"]},created(){this.$o2o({e_c:"店铺首页",e_a:"曝光",e_n:c}),this.$root.hidePlaceholder()},data(){return{shoplist:[],bottomText:"",merchantType:l,page:1,pageSize:10,loading:!1,finished:!1,finishedText:""}},methods:{getMerchantList(){this.loading=!0,Object(n["b"])({page:this.page,pageSize:this.pageSize}).then(t=>{this.page+=1,this.loading=!1,t.length||(this.finished=!0,this.bottomText="- 今日热推好店都在上面啦 -"),t.forEach(t=>{t.list.slice(0,3).forEach(t=>{t.computePrice=this.computePrice(t.originalPrice,t.discount)})}),this.shoplist=Object.freeze([...this.shoplist,...t])}).catch(()=>{this.$error()})},goShopDetail(t){this.$o2o({e_c:"店铺",e_a:"点击",e_n:c,e_x:{name:t.mallName,path:d}}),this.$router.push({name:"pddMallShopsDetail",params:{shop:t}})},computePrice(t,e){return Object(r["c"])(t,e)}}},u=p,h=(a("122d"),a("2877")),m=Object(h["a"])(u,o,i,!1,null,"8c456e1e",null);e["default"]=m.exports},"8e92":function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"e",(function(){return n})),a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return r})),a.d(e,"c",(function(){return c}));a("e6cf");var o=a("0c6d");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["b"].get("/api/v4/pinduoduo/goods/search/list",t).then(t=>200!==t.data.status?(Object(o["a"])(t),Promise.reject(t.data)):Promise.resolve(t.data.data))}function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["b"].get("/api/v4/pinduoduo/top/goods/list",t).then(t=>200!==t.data.status?(Object(o["a"])(t),Promise.reject(t.data)):Promise.resolve(t.data.data))}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["b"].get("/api/v4/pinduoduo/merchant/list",t).then(t=>200!==t.data.status?(Object(o["a"])(t),Promise.reject(t.data)):Promise.resolve(t.data.data))}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["b"].get("/api/v4/pinduoduo/goods/detail",t).then(t=>200!==t.data.status?(Object(o["a"])(t),Promise.reject(t.data)):Promise.resolve(t.data.data))}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["b"].get("/api/v4/pinduoduo/mall/goods/list",t).then(t=>200!==t.data.status?(Object(o["a"])(t),Promise.reject(t.data)):Promise.resolve(t.data.data))}},b053:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("div",{class:["top",t.page],attrs:{id:t.page}},[a("div",{staticClass:"back",on:{click:t.backHandler}}),t._t("top")],2),a("div",{staticClass:"content"},[t._t("default")],2),a("div",{class:["bottom",t.page]},[t._v(t._s(t.bottomText))])])},i=[],n=a("6b43"),s=a("685a"),r=a("edb0"),c="pddmall-backdialog",d={props:{bottomText:{type:String,default:""},page:{type:String,default:"channel"}},methods:{backHandler(){"pddMallChannel"===this.$route.name&&this.$o2o({e_c:"首页返回",e_a:"点击",e_n:"PDD商品列表页"}),Object(s["g"])()&&"true"===Object(n["d"])(c)&&"pddMallChannel"===this.$route.name?Object(r["D"])():this.$router.back()}}},l=d,p=(a("4106"),a("2877")),u=Object(p["a"])(l,o,i,!1,null,"6dfae2e1",null);e["a"]=u.exports},b289:function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"f",(function(){return r})),a.d(e,"e",(function(){return c})),a.d(e,"g",(function(){return d})),a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return p}));a("b680");var o=a("6b43"),i=null,n="pddmall-backdialog";function s(t,e){var a=t-e;return Math.round(a)===a?a:a.toFixed(1)}function r(t){i=t}function c(t){"backDialog"===t.state&&i&&(i.dialogShow=!0,Object(o["f"])(n,"true"),window.removeEventListener("popstate",c))}var d=[{optId:-1,optName:"精选"},{optId:-11,optName:"清仓"},{optId:15,optName:"百货"},{optId:4,optName:"母婴"},{optId:1,optName:"食品"},{optId:14,optName:"女装"},{optId:18,optName:"电器"},{optId:1281,optName:"鞋包"},{optId:1282,optName:"内衣"},{optId:16,optName:"美妆"},{optId:743,optName:"男装"},{optId:13,optName:"水果"},{optId:818,optName:"家纺"},{optId:2478,optName:"文具"},{optId:1451,optName:"运动"},{optId:590,optName:"虚拟"},{optId:2048,optName:"汽车"},{optId:1917,optName:"家装"},{optId:2974,optName:"家具"},{optId:3279,optName:"医药"}],l="cashShopInfo",p="fe-config-xiangkan-common"},b680:function(t,e,a){"use strict";var o=a("23e7"),i=a("a691"),n=a("408a"),s=a("1148"),r=a("d039"),c=1..toFixed,d=Math.floor,l=function(t,e,a){return 0===e?a:e%2===1?l(t,e-1,a*t):l(t*t,e/2,a)},p=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},u=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));o({target:"Number",proto:!0,forced:u},{toFixed:function(t){var e,a,o,r,c=n(this),u=i(t),h=[0,0,0,0,0,0],m="",f="0",v=function(t,e){var a=-1,o=e;while(++a<6)o+=t*h[a],h[a]=o%1e7,o=d(o/1e7)},g=function(t){var e=6,a=0;while(--e>=0)a+=h[e],h[e]=d(a/t),a=a%t*1e7},b=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==h[t]){var a=String(h[t]);e=""===e?a:e+s.call("0",7-a.length)+a}return e};if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(m="-",c=-c),c>1e-21)if(e=p(c*l(2,69,1))-69,a=e<0?c*l(2,-e,1):c/l(2,e,1),a*=4503599627370496,e=52-e,e>0){v(0,a),o=u;while(o>=7)v(1e7,0),o-=7;v(l(10,o,1),0),o=e-1;while(o>=23)g(1<<23),o-=23;g(1<<o),v(1,1),g(2),f=b()}else v(0,a),v(1<<-e,0),f=b()+s.call("0",u);return u>0?(r=f.length,f=m+(r<=u?"0."+s.call("0",u-r)+f:f.slice(0,r-u)+"."+f.slice(r-u))):f=m+f,f}})}}]);
//# sourceMappingURL=chunk-b66775fa.ec3d2566.js.map