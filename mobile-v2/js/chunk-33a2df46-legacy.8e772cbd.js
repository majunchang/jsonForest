(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33a2df46"],{1172:function(t,e,o){"use strict";o.d(e,"a",(function(){return d})),o.d(e,"b",(function(){return u}));var n=o("26a1"),i=16,c=!0;function a(t,e){var o=this,n=!0,i=null;return function(){for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];n&&(n=!1,clearTimeout(i),i=setTimeout((function(){t.apply(o,a),n=!0}),e))}}function r(t){var e=t.targetDom,o=t.customMonitorFn,i=t.callback,a=t.threshold,r=t.keepAlive;"function"===typeof o?o()&&c&&(i&&i(),r||(c=!1)):Object(n["c"])(e,a)&&c&&(i(),c=!1)}function s(t){var e=t.delay;return a((function(){r(t)}),e)}var l=null;function d(t){var e=t.dom,o=Object.assign(t,{delay:t.delay||i});l=s(o),e.addEventListener("scroll",l)}function u(t){var e=t.dom;c=!1,e.removeEventListener("scroll",l)}},3126:function(t,e,o){"use strict";o.d(e,"i",(function(){return c})),o.d(e,"f",(function(){return a})),o.d(e,"d",(function(){return r})),o.d(e,"g",(function(){return s})),o.d(e,"c",(function(){return l})),o.d(e,"h",(function(){return d})),o.d(e,"b",(function(){return u})),o.d(e,"e",(function(){return m})),o.d(e,"a",(function(){return h}));o("99af");var n=o("db49"),i=o("2d8f");function c(t){var e=t.deepLink;return Object(i["b"])("openDeepLink",e)}function a(t){return Object(i["a"])("web.tab/".concat(t))}function r(t){return Object(i["a"])("goto/".concat(t))}function s(t){var e=t.headIcon,o=void 0===e?n["a"].default.userIcon:e,c=t.nickname,a=t.userId;return Object(i["a"])("goto/userInfoDetail?userId=".concat(a,"&headIcon=").concat(encodeURIComponent(o),"&nickName=").concat(c))}function l(t){return"bikan://web.goto/commonWebView?url_encode=".concat(encodeURIComponent(t))}function d(t){location.href=t}function u(t){return"bikan://goto/".concat(t)}function m(){var t="goto/mineTab/task";return Object(i["a"])(t)}function h(t,e){return"bikan://goto/".concat(t,"Detail?docId=").concat(e)}},"366e":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{class:["button",{disabled:t.disabled}],style:t.customStyle,on:{click:t.clickHandler}},[t._t("default"),t._t("desc"),t.loading?o("div",{staticClass:"button__loading"}):t._e()],2)},i=[],c={name:"Button",props:{loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customStyle:{type:Object,default:function(){return{}}}},methods:{clickHandler:function(){this.disabled||this.$emit("click")}}},a=c,r=(o("f9ce"),o("2877")),s=Object(r["a"])(a,n,i,!1,null,"5da6ccb1",null);e["a"]=s.exports},4130:function(t,e,o){"use strict";var n=o("f5c6"),i=o.n(n);i.a},"413c":function(t,e,o){},"84bd":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"video"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showPlaceholderVideo,expression:"showPlaceholderVideo"}],staticClass:"placeholder-video",style:t.CSStyle,on:{click:t.handleClickPlaceholderVideo}},[t.title?o("div",{staticClass:"video-header"},[o("span",{staticClass:"vjs-header-layer"}),o("span",{staticClass:"vjs-header-title"},[t._v(t._s(t.title))])]):t._e(),o("ImageLoader",{staticClass:"placeholder-poster",attrs:{src:t.posterThumbnail}}),o("ImageLoader",{staticClass:"placeholder-video-play",attrs:{src:"https://ts.market.mi-img.com/download/Browser/0fb9151b60e39311ed1d0fec6799ebb3521419224/play.png"}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.showPlaceholderVideo,expression:"!showPlaceholderVideo"}]},[o("video",{ref:"miVideoPlayer",staticClass:"video-js",style:t.CSStyle,attrs:{"x5-playsinline":"",playsinline:"","webkit-playsinline":"",controls:"",id:t.id,preload:"auto",poster:t.posterThumbnail}},[o("source",{attrs:{type:"video/mp4",duration:t.duration,src:t.videoUrl,title:t.title}})])]),o("Modal",{attrs:{show:t.modalShow,msg:t.modal.msg,close:!1,"confirm-text":t.modal.confirmText,"cancel-text":t.modal.cancelText},on:{confirm:t.confirm,cancel:t.cancel}})],1)},i=[],c=(o("a4d3"),o("4de4"),o("4160"),o("a9e3"),o("e439"),o("dbb4"),o("b64b"),o("159b"),o("ade3")),a=o("f76b"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"fade"}},[t.show?o("div",{staticClass:"modal",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModal(e)}}},[o("div",{staticClass:"modal__content"},[t._t("default",[o("div",{staticClass:"modal__inner"},[o("div",{staticClass:"modal__msg"},[t.title?o("h1",[t._v(t._s(t.title))]):t._e(),t._t("msg",[o("p",{domProps:{innerHTML:t._s(t.msg)}})])],2),o("div",{staticClass:"modal-footer"},[o("Button",{attrs:{customStyle:t.cancelbtnStyle},on:{click:t.onCancel}},[t._v(t._s(t.cancelText))]),o("Button",{attrs:{customStyle:t.confirmbtnStyle},on:{click:t.onConfirm}},[t._v(t._s(t.confirmText))])],1)])])],2)]):t._e()])},s=[],l=o("366e");function d(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?d(Object(o),!0).forEach((function(e){Object(c["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var m={background:"#fff",height:"0.30rem",fontSize:"0.14rem",flex:"1",margin:0},h={name:"Modal",components:{Button:l["a"]},data:function(){return{confirmbtnStyle:u({color:this.confirmColor},m),cancelbtnStyle:u({color:this.cancelColor},m)}},props:{show:{type:Boolean,default:!1},title:{type:String,default:""},msg:{type:String,default:""},close:{type:Boolean,default:!1},confirmText:{type:String,default:""},cancelText:{type:String,default:""},confirmColor:{type:String,default:"#eb4940"},cancelColor:{type:String,default:"#d9d9d9"},confirm:{type:Function,default:function(){}},cancel:{type:Function,default:function(){}}},methods:{closeModal:function(){this.close&&this.$emit("cancel")},onConfirm:function(){this.$emit("confirm")},onCancel:function(){this.$emit("cancel")},stopSlide:function(t){t.preventDefault()}},watch:{show:function(t){t?document.body.addEventListener("touchmove",this.stopSlide,{passive:!1}):document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1})}},destroyed:function(){document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1})}},f=h,p=(o("8a30"),o("2877")),v=Object(p["a"])(f,r,s,!1,null,"68bc51d7",null),b=v.exports,y=o("d755"),w=o("6b43");function g(t,e){var o=document.createElement("link");function n(t,e){var o=!1;if(/webkit/i.test(navigator.userAgent))t.sheet&&(o=!0);else if(t.sheet)try{t.sheet.cssRules&&(o=!0)}catch(i){1e3===i.code&&(o=!0)}o?setTimeout((function(){e(null,t)}),1):setTimeout((function(){n(t,e)}),10)}o.rel="stylesheet",o.href=t,document.head.insertBefore(o,document.head.firstChild),o.attachEvent?o.attachEvent("onload",(function(){e(null,o)})):setTimeout((function(){n(o,e)}),0),o.onLoad=function(){e(null,o)}}var O=o("26a1"),j=o("7f46"),k=(o("99af"),o("ac1f"),o("5319"),o("685a"));function S(t,e,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:80;if(!t&&"string"!==typeof t)return t;var i=function(){var t=["http://t1.market.xiaomi.com/thumbnail/","http://t2.market.xiaomi.com/thumbnail/","http://t3.market.xiaomi.com/thumbnail/","http://t4.market.xiaomi.com/thumbnail/","http://t5.market.xiaomi.com/thumbnail/","http://t1.market.mi-img.com/thumbnail/","http://t2.market.mi-img.com/thumbnail/","http://t3.market.mi-img.com/thumbnail/","http://t4.market.mi-img.com/thumbnail/","http://t5.market.mi-img.com/thumbnail/","https://ts.market.mi-img.com/thumbnail/"],e=Math.floor(11*Math.random());return t[e]||t[10]},c=Object(k["b"])()?"jpeg":"webp",a=/^(https?:\/\/t[s12345]\.market\.(mi-img|xiaomi)\.com\/download\/)(.*?)$/g;if(a.test(t)){var r=t.replace(a,(function(t,a,r,s){return e&&o?"".concat(i()).concat(c,"/w").concat(e,"h").concat(o,"q").concat(n,"/").concat(s):"".concat(i()).concat(c,"/q").concat(n,"/").concat(s)}));return r}var s=/^(https?:\/\/images\.cdn\.pt\.xiaomi\.com\/thumbnail\/).*?(\/Feeds.*?)$/g;if(s.test(t)){var l=t.replace(s,(function(t,i,a){return e&&o?"".concat(i).concat(c,"/w").concat(e,"h").concat(o,"q").concat(n,"/").concat(a):"".concat(i).concat(c,"/q").concat(n,"/").concat(a)}));return l}var d=t.replace(/^(https?:\/\/t[s12345]\.market\.(mi-img|xiaomi)\.com\/thumbnail\/)(.*?)(\/MiddleReview.*)$/g,(function(t,i,a,r,s){return e&&o?"".concat(i).concat(c,"/w").concat(e,"h").concat(o,"q").concat(n).concat(s):"".concat(i).concat(c,"/q").concat(n).concat(s)}));return d}var P=o("3126"),_=o("c36a"),C=o("1172");function T(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function x(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?T(Object(o),!0).forEach((function(e){Object(c["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):T(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var V={name:"MiVideo",components:{ImageLoader:a["a"],Modal:b},props:{CSStyle:{type:Object,default:function(){return{}}},onlyShowPlaceholderVideo:{type:Boolean,default:!1},poster:{type:String,default:""},duration:{type:Number,required:!0},videoUrl:{type:String,required:!0},title:{type:String,default:""},playTimeToApp:{type:Number,default:0},docId:{type:String,default:""},handleClickPlaceholderVideo:{type:Function,default:function(){}}},methods:{deeplinkCallBack:function(){},confirm:function(){this.modalShow=!1,window.history.back(),this.$o2o({e_c:"资讯分享页",e_a:"点击确定",e_n:"前往APP观看原视频"}),Object(_["g"])({page:"read",source:"video",channel:"xiaomi_shipin.apk",title:this.title,schema:Object(P["a"])("video",this.$route.params.id)})},cancel:function(t){var e=this;t||window.history.back(),this.modalShow=!1,this.$o2o({e_c:"资讯分享页",e_a:"点击取消",e_n:"前往APP观看原视频"}),this.player.ready((function(){e.player.play()}))},monitorHistoryBack:function(){Object(w["f"])("notAllowMonitorVideoPlay",!0),window.history.pushState(null,null,"#historyVideo"),window.addEventListener("popstate",this.videoBack,!1)},videoBack:function(){this.modalShow=!1},whetherShowModal:function(){parseInt(this.player.currentTime())===this.playTimeToApp&&(this.player.pause(),this.modalShow=!0,this.$o2o({e_c:"资讯分享页",e_a:"曝光",e_n:"前往APP观看原视频"}),this.monitorHistoryBack(),this.player.off("timeupdate",this.whetherShowModal))},monitorPlayTime:function(){var t=Object(w["d"])("notAllowMonitorVideoPlay");this.showPlaceholderVideo||!this.playTimeToApp||t||this.player.on("timeupdate",this.whetherShowModal),!this.showPlaceholderVideo&&this.playTimeToApp&&this.decidevideoPlayOrPause()},decidevideoPlayOrPause:function(){this.videoDom=Object(O["b"])("video-content")[0],Object(C["a"])({dom:window,targetDom:this.videoDom,customMonitorFn:this.VideoplayOrPause,delay:100})},VideoplayOrPause:function(){var t=this.videoDom.clientHeight,e=parseInt(this.videoDom.getBoundingClientRect().top);e<0&&Math.abs(e)>t&&this.player.pause()},initVideojs:function(t){var e=this,o="https://ssl-cdn.static.browser.mi-img.com/feed/sdk/videojs/video-js.min.css",n="https://ssl-cdn.static.browser.mi-img.com/feed/sdk/videojs/video.min.js";g(o,(function(){y["a"](n,(function(){e.player=window.videojs(t,{controlBar:{playToggle:{replay:!1},children:["currentTimeDisplay","progressControl","durationDisplay"]}},(function(){e.$nextTick((function(){e.showPlaceholderVideo=!1,e.monitorPlayTime(),Object(O["a"])("#".concat(e.id),x({},e.CSStyle,{},{display:"none"})),Object(O["d"])("#".concat(e.id))}))})),e.player.on("error",(function(){e.docId&&e.$o2o({e_c:"死链上报",e_a:"曝光",e_n:"视频",e_x:{docId:e.docId}})})),e.player.on("ended",(function(){e.$emit("ended")}))}))}))}},computed:{id:function(){var t=Object(j["c"])("0123456789abcdefghijklmnopqrstuvwxyz",20),e="mi-video-js-".concat(t);return e},posterThumbnail:function(){var t=parseInt(100*parseFloat(this.CSStyle.height),10),e=parseInt(100*parseFloat(this.CSStyle.width),10);return S(this.poster,t,e)}},data:function(){return{showPlaceholderVideo:!0,player:{},modalShow:!1,modal:{msg:"前往想看APP观看原视频,播放更流畅",confirmText:"确定",cancelText:"取消"},videoDom:{}}},mounted:function(){var t=this;this.onlyShowPlaceholderVideo||this.$nextTick((function(){t.$refs.miVideoPlayer&&t.initVideojs(t.$refs.miVideoPlayer)}))},beforeDestroy:function(){!this.showPlaceholderVideo&&this.playTimeToApp&&(Object(C["b"])({dom:window}),Object(w["e"])("notAllowMonitorVideoPlay"),window.removeEventListener("popstate",this.goBack))}},D=V,$=(o("4130"),Object(p["a"])(D,n,i,!1,null,"6b63c869",null));e["a"]=$.exports},"8a30":function(t,e,o){"use strict";var n=o("413c"),i=o.n(n);i.a},"994c":function(t,e,o){},9991:function(t,e,o){},a1ba:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._g({directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"gray-mask"},t.$listeners),[t._t("default")],2)},i=[],c={name:"GrayMask",props:{show:{type:[String,Boolean],default:""}},methods:{stopSlide:function(t){t.preventDefault()}},watch:{show:{handler:function(t){t?(console.log("禁止滑动"),document.body.addEventListener("touchmove",this.stopSlide,{passive:!1})):(console.log("可以滑动"),document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1}))},immediate:!0}},destroyed:function(){document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1})}},a=c,r=(o("bccd"),o("2877")),s=Object(r["a"])(a,n,i,!1,null,"4cb2c41a",null);e["a"]=s.exports},bccd:function(t,e,o){"use strict";var n=o("9991"),i=o.n(n);i.a},f5c6:function(t,e,o){},f9ce:function(t,e,o){"use strict";var n=o("994c"),i=o.n(n);i.a}}]);
//# sourceMappingURL=chunk-33a2df46-legacy.8e772cbd.js.map