(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79cc917a"],{"151a":function(t,e,a){},"4fce":function(t,e,a){"use strict";var c=a("151a"),i=a.n(c);i.a},"56a1":function(t,e,a){"use strict";var c=a("baa8"),i=a.n(c);i.a},"8c4b":function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bind-example"},[a("nav-bar",{staticClass:"header",attrs:{title:"如何查看微信实名","click-back-handler":t.backHandler,"finish-execute":!0}}),t._l(t.list,(function(e){return a("div",{key:e.src,staticClass:"example-list"},[a("div",{staticClass:"example-title"},[t._v(t._s(e.title))]),a("img",{staticClass:"example-pic",attrs:{src:e.imgSrc}})])}))],2)},i=[],n=a("e590"),l=a("edb0"),r=a("42a5"),s={data:function(){return{list:[{title:"第一步：打开微信我的主页，点击支付",imgSrc:"http://t1.market.xiaomi.com/download/Browser/0e6d1e454c7484746100bb411334e756c0ff98897"},{title:"第二步：点击更多",imgSrc:"http://t1.market.xiaomi.com/download/Browser/0d6d1e454c7484747100b8411314e756c0ff08897"},{title:"第三步：点击实名认证",imgSrc:"http://t1.market.xiaomi.com/download/Browser/0bf004ebb91626b905204655fe9ae68a92042a4ff"},{title:"姓名展示",imgSrc:"http://t1.market.xiaomi.com/download/Browser/0f6d1e454c7584748100bd411324e75cc0ffa8897"}]}},components:{NavBar:n["a"]},methods:{backHandler:function(){this.$router.go(-1)}},created:function(){this.$root.hidePlaceholder()},mounted:function(){Object(l["E"])("false"),Object(l["z"])(!0),Object(r["a"])("backKey",this.backHandler)},destroyed:function(){Object(l["E"])("true"),Object(l["z"])(!1),Object(r["f"])("backKey",this.backHandler)}},o=s,d=(a("56a1"),a("2877")),u=Object(d["a"])(o,c,i,!1,null,"1c349add",null);e["default"]=u.exports},baa8:function(t,e,a){},e590:function(t,e,a){"use strict";var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{class:"nav-bar "+(t.hairline?"Hairline Hairline_bottom":"")},[a("i",{class:[t.customBack?"nav-bar_backWhite":"nav-bar__back"],on:{click:t.backHandler}}),a("h1",{staticClass:"nav-bar__title",style:t.customTitleStyle},[t._v(t._s(t.title))]),a("div",{staticClass:"nav-bar__info"},[t._t("default")],2)])},i=[],n=a("edb0"),l={name:"NavBar",props:{title:{type:String,default:""},hairline:{type:Boolean,default:!0},finishExecute:{type:Boolean,default:!1},clickBackHandler:{type:Function,default:null},webview:{type:Boolean,default:!0},customBack:{type:Boolean,default:!1},customTitleStyle:{type:Object,default:function(){return{}}}},methods:{backHandler:function(){this.clickBackHandler&&(this.clickBackHandler(),this.finishExecute)||(this.webview?Object(n["D"])():this.$router.go(-1))}}},r=l,s=(a("4fce"),a("2877")),o=Object(s["a"])(r,c,i,!1,null,"d8cf0938",null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-79cc917a-legacy.0ec48273.js.map