(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fdd86cd6"],{"3e11":function(e,t,n){"use strict";var a=n("aa5a"),r=n.n(a);r.a},9933:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{ref:"main",class:{main:!0,promoter:"promoter"===this.pageName,partner:"partner"===this.pageName}},[n("div",{staticClass:"btn scale-infinite",on:{click:e.goTarget}})])])},r=[],o=(n("b0c0"),{name:"Recruit",mounted:function(){this.$root.hidePlaceholder(),this.$o2o({e_c:"页面曝光",e_a:"曝光",e_n:this.pageInfo.name});var e=window.innerWidth/360*640;this.$refs.main.style.height="".concat(e,"px")},computed:{pageName:function(){var e=this.$route.query.name||"promoter";return e},pageInfo:function(){var e={promoter:{name:"想看地推大使招募"},partner:{name:"想看合伙人招募"}};return e[this.pageName]}},methods:{goTarget:function(){var e=this,t=function(){var t=e.$route.query.target||"https://jinshuju.net/f/F1KurV",n="bikan://web.goto/commonWebView?url_encode=".concat(encodeURIComponent(t),"&show_title=false&page_title=问卷星&menu=share&start_source=recruit&full_screen=false");location.href=n};this.$o2o({e_c:"按钮点击",e_a:"点击",e_n:this.pageInfo.name},t,t)}}}),i=o,c=(n("3e11"),n("2877")),s=Object(c["a"])(i,a,r,!1,null,"5653ddfe",null);t["default"]=s.exports},aa5a:function(e,t,n){},b0c0:function(e,t,n){var a=n("83ab"),r=n("9bf2").f,o=Function.prototype,i=o.toString,c=/^\s*function ([^ (]*)/,s="name";!a||s in o||r(o,s,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-fdd86cd6-legacy.76d304d9.js.map