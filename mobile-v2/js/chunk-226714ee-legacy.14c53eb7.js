(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-226714ee"],{"183c":function(t,e,n){"use strict";var a=n("354e"),r=n.n(a);r.a},"224b":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));n("d3b7");var a=n("0c6d");function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["b"].get("/api/v1/news/popular",t).then((function(t){return 200!==t.data.status?(Object(a["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["b"].get("/api/v1/news/poster",t).then((function(t){return 200!==t.data.status?(Object(a["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}},2909:function(t,e,n){"use strict";function a(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0");function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(t){return a(t)||r(t)||i()}n.d(e,"a",(function(){return o}))},"2a1d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"diversion"})},r=[],i=(n("4de4"),n("2909")),o=n("c36a"),c=n("224b"),s=n("db49"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card customize-expose",attrs:{"data-expose":t.getTrackData()}},[n("div",{staticClass:"hot-title"},[t._v(t._s(t.title))]),t._l(t.newsList,(function(e){return n("div",{key:e.docId,staticClass:"news Hairline Hairline_bottom",on:{click:function(n){return t.deeplinkApp(e)}}},[n("img",{attrs:{src:e.images[0]}}),n("div",{staticClass:"info"},[n("p",{staticClass:"title"},[t._v(t._s(e.title))]),n("div",{staticClass:"footer"},[t._v(" "+t._s(e.authorName)+" ")])]),n("div",{staticClass:"open-in-app"},[t._v("打开想看阅读")])])}))],2)},d=[],f=n("3126"),l={props:{newsList:{type:Array,default:function(){return[]}},title:{type:String,required:!0}},mounted:function(){this.$expose()},methods:{getTrackData:function(){return JSON.stringify({e_c:"资讯分享页",e_a:"曝光",e_n:"back页今日热点",e_x:{type:"图文"}})},deeplinkApp:function(t){this.$o2o({e_c:"资讯分享页",e_a:"点击",e_n:"back页今日热点",e_x:{type:"图文"}}),/source=liulanqi/.test(location.href)?Object(o["f"])(Object(f["a"])(t.type,t.docId),"CK1430771235862"):Object(o["g"])({page:"read",source:"news",title:t.title,channel:"xiaomi_tuwen.apk",schema:Object(f["a"])(t.type,t.docId)})}}},b=l,p=(n("183c"),n("2877")),h=Object(p["a"])(b,u,d,!1,null,"2a50d7e6",null),v=h.exports,m={name:"DiversionNews",components:{Card:v},data:function(){return{config:s["a"],loading:!1,finished:!1,startTime:null,cardList:[],schema:"bikan://goto/newsTab"}},methods:{getNews:function(){var t=this;Object(c["b"])({startTime:this.startTime-864e5}).then((function(e){var n;t.loading=!1,(n=t.cardList).push.apply(n,Object(i["a"])(e.newsList.filter((function(t){return t.documentList.length})))),e.newsList.length>0?(t.finished=!e.hasMore,t.startTime=t.cardList[t.cardList.length-1].millisAtStartOfDay):t.finished=!0})).catch((function(){t.loading=!1,t.finished=!0}))},goApp:function(t){"top"===t&&this.$o2o({e_c:"资讯分享页",e_a:"点击",e_n:"back中间页顶部banner"}),Object(o["g"])({page:"read",source:"news",channel:"xiaomi_tuwen.apk",schema:this.schema})}},mounted:function(){this.$root.hidePlaceholder()}},g=m,w=(n("b8d0"),Object(p["a"])(g,a,r,!1,null,"22610e4e",null));e["default"]=w.exports},3126:function(t,e,n){"use strict";n.d(e,"i",(function(){return i})),n.d(e,"f",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"g",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"h",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return b}));n("99af");var a=n("db49"),r=n("2d8f");function i(t){var e=t.deepLink;return Object(r["b"])("openDeepLink",e)}function o(t){return Object(r["a"])("web.tab/".concat(t))}function c(t){return Object(r["a"])("goto/".concat(t))}function s(t){var e=t.headIcon,n=void 0===e?a["a"].default.userIcon:e,i=t.nickname,o=t.userId;return Object(r["a"])("goto/userInfoDetail?userId=".concat(o,"&headIcon=").concat(encodeURIComponent(n),"&nickName=").concat(i))}function u(t){return"bikan://web.goto/commonWebView?url_encode=".concat(encodeURIComponent(t))}function d(t){location.href=t}function f(t){return"bikan://goto/".concat(t)}function l(){var t="goto/mineTab/task";return Object(r["a"])(t)}function b(t,e){return"bikan://goto/".concat(t,"Detail?docId=").concat(e)}},"354e":function(t,e,n){},"4df4":function(t,e,n){"use strict";var a=n("0366"),r=n("7b0b"),i=n("9bdd"),o=n("e95a"),c=n("50c4"),s=n("8418"),u=n("35a1");t.exports=function(t){var e,n,d,f,l,b,p=r(t),h="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,g=void 0!==m,w=u(p),_=0;if(g&&(m=a(m,v>2?arguments[2]:void 0,2)),void 0==w||h==Array&&o(w))for(e=c(p.length),n=new h(e);e>_;_++)b=g?m(p[_],_):p[_],s(n,_,b);else for(f=w.call(p),l=f.next,n=new h;!(d=l.call(f)).done;_++)b=g?i(f,m,[d.value,_],!0):d.value,s(n,_,b);return n.length=_,n}},a630:function(t,e,n){var a=n("23e7"),r=n("4df4"),i=n("1c7e"),o=!i((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:o},{from:r})},b8d0:function(t,e,n){"use strict";var a=n("ebc8"),r=n.n(a);r.a},ebc8:function(t,e,n){}}]);
//# sourceMappingURL=chunk-226714ee-legacy.14c53eb7.js.map