(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a1ca7c6"],{1148:function(t,e,n){"use strict";var r=n("a691"),a=n("1d80");t.exports="".repeat||function(t){var e=String(a(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},1184:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c}));n("d3b7");var r=n("0c6d");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r["b"].get("/api/v4/turntable/getbaseinfo",t).then((function(t){return 200!==t.data.status?(Object(r["a"])(t),Promise.reject(t.data)):Promise.resolve(t.data.data)}))}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r["b"].get("/api/v4/turntable/drawlottery",t).then((function(t){return 200!==t.data.status?(Object(r["a"])(t),Promise.reject(t.data)):Promise.resolve(t.data.data)}))}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r["b"].get("/api/v4/turntable/getrecordlist",t).then((function(t){return 200!==t.data.status?(Object(r["a"])(t),Promise.reject(t.data)):Promise.resolve(t.data.data)}))}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r["b"].get("/api/v4/turntable/share",t).then((function(t){return 200!==t.data.status?(Object(r["a"])(t),Promise.reject(t.data)):Promise.resolve(t.data.data)}))}},"151a":function(t,e,n){},"20aa":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"income-list"},t._l(t.incomeList,(function(e){return n("div",{key:e.recordTime,staticClass:"income-list__item Hairline Hairline_bottom"},[n("div",{staticClass:"income-list__info"},[n("div",{staticClass:"income-list__reason"},[t._v(t._s(e.reason))]),n("div",{staticClass:"income-list__date"},[t._v(t._s(t._f("formatDay")(e.recordTime)))])]),n("div",{class:["income-list__coin",{positive:e.change>0},{negetive:e.change<=0}]},[n("span",[t._v(t._s(t.formatCoin(e.change)))]),t._v("金币 ")])])})),0)},a=[],i=n("8975"),o={name:"IncomeList",props:{incomeList:{type:Array,default:function(){return[]}}},filters:{formatDay:i["b"]},methods:{formatCoin:function(t){return t>0?"+".concat(Object(i["c"])(t)):Object(i["c"])(t)}}},c=o,s=(n("e7cd"),n("2877")),u=Object(s["a"])(c,r,a,!1,null,"7c9cda84",null);e["a"]=u.exports},"36a8":function(t,e,n){"use strict";var r=n("4a1e"),a=n.n(r);a.a},"408a":function(t,e,n){var r=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},"4a1e":function(t,e,n){},"4fce":function(t,e,n){"use strict";var r=n("151a"),a=n.n(r);a.a},8975:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return o}));n("a15b"),n("d81d"),n("fb6a"),n("a9e3"),n("b680"),n("d3b7"),n("ac1f"),n("25f0"),n("5319");var r=n("cadb");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=Number(t);return e%1!==0?e:parseFloat(t/100).toFixed(2)}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t.toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=(new Date).getDate(),n=new Date(t),a=n.getDate(),i=[n.getHours(),n.getMinutes(),n.getSeconds()].map((function(t){return t<10?"0".concat(t):t})).join(":"),o=e-a;switch(o){case 0:return"今天 ".concat(i);case 1:return"昨天 ".concat(i);case 2:return"前天 ".concat(i);default:return Object(r["b"])(n)}}},a15b:function(t,e,n){"use strict";var r=n("23e7"),a=n("44ad"),i=n("fc6a"),o=n("a640"),c=[].join,s=a!=Object,u=o("join",",");r({target:"Array",proto:!0,forced:s||!u},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},b0f9:function(t,e,n){},b680:function(t,e,n){"use strict";var r=n("23e7"),a=n("a691"),i=n("408a"),o=n("1148"),c=n("d039"),s=1..toFixed,u=Math.floor,l=function(t,e,n){return 0===e?n:e%2===1?l(t,e-1,n*t):l(t*t,e/2,n)},f=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},d=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){s.call({})}));r({target:"Number",proto:!0,forced:d},{toFixed:function(t){var e,n,r,c,s=i(this),d=a(t),h=[0,0,0,0,0,0],v="",m="0",g=function(t,e){var n=-1,r=e;while(++n<6)r+=t*h[n],h[n]=r%1e7,r=u(r/1e7)},b=function(t){var e=6,n=0;while(--e>=0)n+=h[e],h[e]=u(n/t),n=n%t*1e7},p=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==h[t]){var n=String(h[t]);e=""===e?n:e+o.call("0",7-n.length)+n}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(v="-",s=-s),s>1e-21)if(e=f(s*l(2,69,1))-69,n=e<0?s*l(2,-e,1):s/l(2,e,1),n*=4503599627370496,e=52-e,e>0){g(0,n),r=d;while(r>=7)g(1e7,0),r-=7;g(l(10,r,1),0),r=e-1;while(r>=23)b(1<<23),r-=23;b(1<<r),g(1,1),b(2),m=p()}else g(0,n),g(1<<-e,0),m=p()+o.call("0",d);return d>0?(c=m.length,m=v+(c<=d?"0."+o.call("0",d-c)+m:m.slice(0,c-d)+"."+m.slice(c-d))):m=v+m,m}})},cadb:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return o}));n("a15b"),n("d81d"),n("fb6a"),n("ac1f"),n("5319");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY年MM月DD日 hh:mm:ss",n=new Date(t),r=n.getFullYear(),a=n.getMonth()+1,i=n.getDate(),o=n.getHours(),c=n.getMinutes(),s=n.getSeconds(),u=function(t){return"0".concat(t).slice(-2)},l={YYYY:r,YY:u(r),MM:u(a),M:a,DD:u(i),D:i,hh:u(o),h:o,mm:u(c),m:c,ss:u(s),s:s};return e.replace(/Y{2,4}|M{1,2}|D{1,2}|h{1,2}|m{1,2}|s{1,2}/g,(function(t){return l[t]||t}))}function a(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"day",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"YYYY年MM月DD日 hh:mm:ss",a=["minute","hour","day","week","month","year"],i=[1e3,6e4,36e5,864e5,6048e5,2592e6,31104e6],o=["秒前","分钟前","小时前","天前","周前","月前","年前"],c=Date.now()-t,s=0,u=i.length;s<u;s+=1){if(s+1===u||c<=i[s+1]){var l=Math.floor(c/i[s]);return 0===l?"刚刚":l+o[s]}if(e===a[s])return r(t,n)}return r(t,n)}function i(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hh:mm:ss",n=parseFloat(t)||0,r=[60,3600],a={60:function(t){return[0,0,t]},3600:function(t){var e=Math.floor(t/60);return[0,e,t-60*e]}},i=function(t){return"0".concat(t).slice(-2)},o={1:function(t){return t},2:function(t){return i(t)}},c=function(t,e,n){return e.replace(/(h+)(.?)(m+)(.?)(s+)/gi,(function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var i=Array.prototype.slice.call(r,1,6),o=0;return i.map((function(e,r){var a;return r%2===0?(a=n[e.length](t[o]),o+=1,a):e})).join("").replace(/^(00:)/g,"")}))},s=[],u=0,l=r.length;u<l;u+=1)if(n<r[u])return c(a[r[u]](n),e,o);return s[0]=Math.floor(n/3600),s[1]=Math.floor((n-3600*s[0])/60),s[2]=n-3600*s[0]-60*s[1],c(s,e,o)}function o(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}},d81d:function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").map,i=n("1dde"),o=n("ae40"),c=i("map"),s=o("map");r({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},e590:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:"nav-bar "+(t.hairline?"Hairline Hairline_bottom":"")},[n("i",{class:[t.customBack?"nav-bar_backWhite":"nav-bar__back"],on:{click:t.backHandler}}),n("h1",{staticClass:"nav-bar__title",style:t.customTitleStyle},[t._v(t._s(t.title))]),n("div",{staticClass:"nav-bar__info"},[t._t("default")],2)])},a=[],i=n("edb0"),o={name:"NavBar",props:{title:{type:String,default:""},hairline:{type:Boolean,default:!0},finishExecute:{type:Boolean,default:!1},clickBackHandler:{type:Function,default:null},webview:{type:Boolean,default:!0},customBack:{type:Boolean,default:!1},customTitleStyle:{type:Object,default:function(){return{}}}},methods:{backHandler:function(){this.clickBackHandler&&(this.clickBackHandler(),this.finishExecute)||(this.webview?Object(i["D"])():this.$router.go(-1))}}},c=o,s=(n("4fce"),n("2877")),u=Object(s["a"])(c,r,a,!1,null,"d8cf0938",null);e["a"]=u.exports},e7cd:function(t,e,n){"use strict";var r=n("b0f9"),a=n.n(r);a.a},f67a:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"record"},[n("nav-bar",{attrs:{title:"我的翻倍记录"}}),t._m(0),t.showList?n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.getList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("income-list",{staticClass:"income__list-list",attrs:{"income-list":t.list}})],1):n("div",{staticClass:"empty"},[t._v(" 去翻倍一次就有记录啦~ ")])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"income__list-header"},[n("div",{staticClass:"income__list-label"},[t._v("金币收益")]),n("div",{staticClass:"income__list-duration"},[t._v("近7天")])])}],i=(n("99af"),n("ac1f"),n("5319"),n("20aa")),o=n("1184"),c=n("e590"),s={name:"LotteryRecord",components:{IncomeList:i["a"],NavBar:c["a"]},data:function(){return{loading:!1,list:[],finished:!1,page:0,showList:!0}},methods:{getList:function(){var t=this;this.loading=!0,this.page+=1,Object(o["c"])({page:this.page}).then((function(e){t.list=t.list.concat(e),0===t.list.length&&(t.showList=!1),t.finished=e.length<20,t.loading=!1,t.$root.hidePlaceholder()})).catch((function(){t.$router.replace({name:"error"})}))}},mounted:function(){this.$o2o({e_c:"大转盘",e_a:"曝光",e_n:"我的翻倍记录"})}},u=s,l=(n("36a8"),n("2877")),f=Object(l["a"])(u,r,a,!1,null,"6f25f046",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-8a1ca7c6-legacy.87e13af3.js.map