(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1909eb98"],{1172:function(t,e,a){"use strict";a.d(e,"a",(function(){return u})),a.d(e,"b",(function(){return d}));var i=a("26a1"),n=16,s=!0;function o(t,e){var a=this,i=!0,n=null;return function(){for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];i&&(i=!1,clearTimeout(n),n=setTimeout((function(){t.apply(a,o),i=!0}),e))}}function c(t){var e=t.targetDom,a=t.customMonitorFn,n=t.callback,o=t.threshold,c=t.keepAlive;"function"===typeof a?a()&&s&&(n&&n(),c||(s=!1)):Object(i["c"])(e,o)&&s&&(n(),s=!1)}function r(t){var e=t.delay;return o((function(){c(t)}),e)}var l=null;function u(t){var e=t.dom,a=Object.assign(t,{delay:t.delay||n});l=r(a),e.addEventListener("scroll",l)}function d(t){var e=t.dom;s=!1,e.removeEventListener("scroll",l)}},"151a":function(t,e,a){},"4fce":function(t,e,a){"use strict";var i=a("151a"),n=a.n(i);n.a},"509a":function(t,e,a){},"552d":function(t,e,a){"use strict";var i=a("509a"),n=a.n(i);n.a},9991:function(t,e,a){},a1ba:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._g({directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"gray-mask"},t.$listeners),[t._t("default")],2)},n=[],s={name:"GrayMask",props:{show:{type:[String,Boolean],default:""}},methods:{stopSlide:function(t){t.preventDefault()}},watch:{show:{handler:function(t){t?(console.log("禁止滑动"),document.body.addEventListener("touchmove",this.stopSlide,{passive:!1})):(console.log("可以滑动"),document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1}))},immediate:!0}},destroyed:function(){document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1})}},o=s,c=(a("bccd"),a("2877")),r=Object(c["a"])(o,i,n,!1,null,"4cb2c41a",null);e["a"]=r.exports},b7d5:function(t,e,a){"use strict";a.d(e,"f",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return o})),a.d(e,"e",(function(){return c})),a.d(e,"g",(function(){return r})),a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return u})),a.d(e,"h",(function(){return d})),a.d(e,"m",(function(){return v})),a.d(e,"l",(function(){return h})),a.d(e,"k",(function(){return f})),a.d(e,"j",(function(){return p})),a.d(e,"i",(function(){return m}));a("d3b7");var i=a("0c6d");function n(t){return i["b"].get("/api/v4/invitation/share",t).then((function(t){return 200!==t.data.status&&Object(i["a"])(t),Promise.resolve(t)}))}function s(t){return i["b"].get("/api/v4/invitation/activity",t).then((function(t){return 200!==t.data.status&&Object(i["a"])(t),Promise.resolve(t)}))}function o(t){return i["b"].get("/api/v4/disciple/my",t).then((function(t){return 200!==t.data.status&&Object(i["a"])(t),Promise.resolve(t)}))}function c(t){return i["b"].post("/api/v4/invitation/preinvited",t)}function r(t){return i["b"].get("/api/v4/invitation/f2f/packetRecords",t).then((function(t){return 200!==t.data.status?(Object(i["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}function l(){return i["b"].get("/api/v4/invitation/f2f/home").then((function(t){return 200!==t.data.status?(Object(i["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].post("/api/v4/invitation/f2f/packet",t)}function d(){return i["b"].get("/api/v4/invitation/f2f/refresh").then((function(t){return 200!==t.data.status?(Object(i["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}function v(){return i["b"].post("/api/v4/invitation/tutorialAward").then((function(t){return 200!==t.data.status?(Object(i["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].post("/api/v4/invitation/sms/upload",t).then((function(t){return 200!==t.data.status?(Object(i["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].get("/api/v4/invitation/sms/status",t).then((function(t){return 200!==t.data.status?(Object(i["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].post("/api/v4/invitation/sms/invited",t).then((function(t){return 200!==t.data.status?(Object(i["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].get("/api/v4/invitation/sms/home",t).then((function(t){return 200!==t.data.status?(Object(i["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}},bccd:function(t,e,a){"use strict";var i=a("9991"),n=a.n(i);n.a},d173:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isShowNavbar()?a("nav-bar",{staticClass:"title-bar",attrs:{title:"面对面领红包","click-back-handler":t.clickBackHandler,"finish-execute":!t.code,webview:!1,hairline:!1}},[a("span",{staticClass:"nav-activityRule",on:{click:t.jumpToRule}},[t._v(" 活动规则 ")])]):t._e(),a("div",{staticClass:"face"},[t.carousel.length?a("van-swipe",{staticClass:"swipe",attrs:{height:30,autoplay:3e3,"show-indicators":!1,vertical:!0}},t._l(t.carousel,(function(e,i){return a("van-swipe-item",{key:i},[a("div",{staticClass:"info-bar"},[t._v(" "+t._s(e.nickname)+"邀请了"+t._s(e.count)+"位好友，已获得"+t._s(e.coin)+"金币 ")])])})),1):t._e(),a("div",{staticClass:"getRecord",on:{click:t.goRecordBtn}},[t._v(" 领取记录 ")]),a("canvas",{ref:"qr",staticClass:"qr"}),a("div",{staticClass:"getProcess"},[a("div",{staticClass:"getProcess-title"}),a("div",{staticClass:"getProcess-content"},[t._m(0),a("div",{staticClass:"process-step"},[a("div",{staticClass:"process-step-flex"},t._l(t.totalStep,(function(e,i){return a("li",{key:i,class:["process-step-stepItem",i<=t.step?"process-step-achieve":""]})})),0)]),a("div",{staticClass:"process-line-archieve",style:{width:t.computeWidth+"px"}}),t._m(1)])]),a("div",{class:["activityRule",t.suspendShareBtn?"suspendShareRule":""],attrs:{id:"activityRule"}},[a("div",{staticClass:"activityRule-title"}),a("div",{staticClass:"activityRule-content"},t._l(t.activityRule,(function(e,i){return a("div",{key:i,staticClass:"activityRule-content-item",domProps:{innerHTML:t._s(e)}})})),0)]),a("div",{class:["shareBtn",t.suspendShareBtn?"suspendShareBtn":""],on:{click:t.share}},[a("div",{staticClass:"shareImg"}),t._v(" 点击分享给微信好友 ")]),a("GrayMask",{attrs:{show:t.ShowReceivePacketModal}},[a("div",{class:[t.bounceLeave?"bounceLeave":"","receivePacketModal"]},[a("div",{staticClass:"facePrizeClose",on:{click:t.closeReceiveModal}}),a("div",{staticClass:"open",on:{click:t.openPacket}})])]),a("GrayMask",{attrs:{show:t.ShowGoldIconModal}},[a("div",{staticClass:"goldIconModal"},[a("div",{staticClass:"facePrizeClose",on:{click:t.closeGoldIcon}}),a("div",{staticClass:"goldIcon"},[t._v(" "+t._s(t.coin)+" ")]),a("div",{staticClass:"depositBtn",on:{click:t.depositAccount}}),a("div",{staticClass:"iconInfo"},[a("p",[t._v("提示好友下载想看并登录")]),a("p",[t._v("你可继续得第二份4元现金红包")])])])]),a("GrayMask",{attrs:{show:t.showToastModal}},[a("div",{staticClass:"toastModal"},[a("div",{staticClass:"facePrizeClose",on:{click:function(e){return t.closeModal("showToastModal")}}}),a("div",{staticClass:"toastModalMsg"},[a("p",[t._v(t._s(t.toastMsg.title))]),a("p",[t._v(t._s(t.toastMsg.msg||"该扫码好友信息异常"))])]),a("div",{staticClass:"toastModalFooter"},[a("p",[t._v(t._s(t.toastMsg.hint))])])])])],1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"process-step-icon-box"},[a("li",{staticClass:"process-step-icon icon-one"}),a("li",{staticClass:"process-step-icon icon-two"}),a("li",{staticClass:"process-step-icon icon-three"}),a("li",{staticClass:"process-step-icon icon-four"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"process-step-copyWriter-box"},[a("li",{staticClass:"process-step-copyWriter"},[a("p",[t._v("好友微信")]),a("p",[t._v("扫码授权")])]),a("li",{staticClass:"process-step-copyWriter"},[a("p",[t._v("您得惊喜")]),a("p",[t._v("金币红包")])]),a("li",{staticClass:"process-step-copyWriter"},[a("p",[t._v("好友安装")]),a("p",[t._v("想看APP")])]),a("li",{staticClass:"process-step-copyWriter"},[a("p",[t._v("登录阅读")]),a("p",[t._v("各得4元")])])])}],s=(a("99af"),a("d81d"),a("fb6a"),a("c4a7")),o=a.n(s),c=a("e590"),r=a("a1ba"),l=a("685a"),u=a("c36a"),d=a("26a1"),v=a("b7d5"),h=a("42a5"),f=a("1172"),p=a("edb0"),m=a("d3ea"),b={name:"InvitationFace",components:{NavBar:c["a"],GrayMask:r["a"]},props:{code:String},data:function(){return{userInfo:{},qr:null,activityRule:m["faceTofaceRule"],totalStep:[1,2,3,4],step:0,computeWidth:0,remain:[],carousel:[],token:"",timer:null,key:"",ShowReceivePacketModal:!1,ShowGoldIconModal:!1,bounceLeave:!1,coin:666,suspendShareBtn:!1,showToastModal:!1,toastMsg:"",invitationCode:""}},created:function(){this.userInfo=Object(p["t"])(),this.$root.hidePlaceholder(),this.getHomeInfo(),this.$o2o({e_c:"面对面邀请",e_a:"曝光",e_n:"面对面详情页曝光"}),Object(h["a"])("scanQrmessage",this.scanQrCode)},mounted:function(){Object(p["z"])(!0),Object(h["a"])("backKey",this.backKeyHandler),this.monitorQRious()},destroyed:function(){clearInterval(this.timer),Object(p["z"])(!1),Object(h["f"])("backKey",this.backKeyHandler)},methods:{clickBackHandler:function(){this.code||this.$router.push("/act/invitation")},backKeyHandler:function(){this.$router.push("/act/invitation")},monitorQRious:function(){Object(f["a"])({dom:window,targetDom:Object(d["b"])("qr")[0],customMonitorFn:this.customMonitorFn,callback:this.showShareBtn,keepAlive:!0})},customMonitorFn:function(){var t=Object(d["b"])("qr")[0],e=0,a=0;return t&&(e=t.getBoundingClientRect().top,a=t.clientHeight),e<0&&Math.abs(e)>=a||(this.suspendShareBtn&&(this.suspendShareBtn=!1),!1)},showShareBtn:function(){this.suspendShareBtn||(this.suspendShareBtn=!0)},computeDomWidth:function(){var t=Object(d["b"])("process-step")[0],e=t&&t.clientWidth/3||0,a=e*this.step;this.computeWidth=a>0?a:0},jumpToRule:function(){var t=document.querySelector("#activityRule");t.scrollIntoView(!0),this.$o2o({e_c:"面对面邀请",e_a:"点击",e_n:"活动规则"})},getHomeInfo:function(){var t=this;Object(v["a"])().then((function(e){t.carousel=e.carousel.map((function(t){return t.length>4?"".concat(t.slice(0,4),"***"):t})),t.step=e.step,t.remain=e.remain,t.invitationCode=e.invitationCode||t.code,t.invitationCode?(t.f2fRefresh(),t.autoOpenTimer(),t.traverseRemain(),t.computeDomWidth()):Object(p["h"])("location.reload")})).catch((function(){t.carousel=[]}))},autoOpenTimer:function(){var t=this,e=12e4;this.timer=setInterval((function(){t.f2fRefresh()}),e)},f2fRefresh:function(){var t=this;Object(v["h"])().then((function(e){t.token=e,t.qr||(t.qr=new o.a({element:t.$refs.qr,size:230})),t.qr.value="https://feed.browser.miui.com/mobile-v2/act/invitation/share?shareId=".concat(t.invitationCode,"&share=face2face&token=").concat(t.token)})).catch((function(){t.$error()}))},scanQrCode:function(t){if(console.log("扫码通知"),console.log(t),t.detail){var e=t.detail.message;this.remain.unshift(e),this.traverseRemain()}},traverseRemain:function(){this.remain.length&&(this.key=this.remain.shift(),this.ShowReceivePacketModal=!0,this.$o2o({e_c:"面对面邀请",e_a:"曝光",e_n:"开红包页"}))},getf2fPacket:function(){var t=this;Object(v["b"])({key:this.key}).then((function(e){if(200===e.data.status)t.coin=e.data.data.coin,t.closeModal("ShowReceivePacketModal"),t.ShowGoldIconModal=!0,t.$o2o({e_c:"面对面邀请",e_a:"曝光",e_n:"红包详情页"}),t.bounceLeave=!1;else if(500===e.data.status){var a=e.data.data;a&&a.code&&(t.closeModal("ShowReceivePacketModal"),t.showToastModal=!0,t.toastMsg={title:a.title,hint:a.hint,msg:a.msg})}else t.$error()})).catch((function(){t.$error()}))},goRecordBtn:function(){this.invitationCode?(this.$o2o({e_c:"面对面邀请",e_a:"点击",e_n:"领取记录",e_x:{Page:"首页"}}),this.goRecord()):Object(p["h"])("location.reload")},depositAccount:function(){this.$o2o({e_c:"面对面邀请",e_a:"点击",e_n:"领取记录",e_x:{Page:"红包页"}}),this.goRecord()},goRecord:function(){this.$router.push({name:"receivedRecord",params:{url:"https://feed.browser.miui.com/mobile-v2/act/invitation/share?shareId=".concat(this.invitationCode,"&share=face2face"),code:this.invitationCode,userName:this.userInfo.user_name,pathName:location.pathname}})},closeReceiveModal:function(){var t=this;this.closeModal("ShowReceivePacketModal"),setTimeout((function(){t.traverseRemain()}),500)},closeGoldIcon:function(){this.closeModal("ShowGoldIconModal"),this.traverseRemain()},isShowNavbar:function(){return Object(l["g"])()},closeModal:function(t){this[t]=!1},openPacket:function(){this.bounceLeave=!0,this.getf2fPacket()},share:function(){if(this.invitationCode){this.$o2o({e_c:"面对面邀请",e_a:"点击",e_n:"好友不在身边分享给他",e_x:{Page:"首页"}});var t="https://feed.browser.miui.com/mobile-v2/act/invitation/share?shareId=".concat(this.invitationCode,"&share=face2face");Object(u["i"])(t,this.invitationCode)}else Object(p["h"])("location.reload")}}},_=b,k=(a("552d"),a("2877")),g=Object(k["a"])(_,i,n,!1,null,"d55aebac",null);e["default"]=g.exports},d3ea:function(t,e,a){"use strict";a.r(e),a.d(e,"shareMap",(function(){return i})),a.d(e,"dialogTrackMap",(function(){return n})),a.d(e,"faceTofaceRule",(function(){return s})),a.d(e,"video",(function(){return o})),a.d(e,"smsSuccessText",(function(){return c}));var i={qq:[1,"QQ","QQ邀请","QQ好友"],wechat:[2,"微信","微信邀请","微信好友"],moments:[3,"朋友圈","朋友圈邀请","朋友圈"],face:[-1,"面对面","面对面邀请","面对面分享"],sms:[-1,"短信","短信邀请","短信分享"]},n={remindNotice:"好友提醒师父弹窗",successNotice:"成功邀请弹窗",friendsRemind:"好友提醒分享弹窗"},s=['1. 好友使用微信扫描您的二维码，您可领到<span color="red">100-666</span>金币不等的随机红包，每日最高可领10次，同一微信好友只可领1次；',"2. 若好友（特指想看新用户）通过您的扫码链接下载想看并微信登录，只需连续三天每天认真阅读三条内容以上，您和好友均可领4元邀请奖励，首次邀请成功最高可得5元；","3. 若发现有不正当的手段刷金币行为，平台有权取消该用户已获得奖励并封号处理。"],o={url:"https://ts.market.mi-img.com/download/AppStore/018dac54db0264f8837323595f4a1a97c7450101e",poster:"https://ts.market.mi-img.com/download/AppStore/042185f767a5f7aa7d1376056b7c4c7cc0e4061a8",CSStyle:{width:"100vw",height:"172vw"}},c=["好友通过链接安装想看",'微信登录并<span style="color:#fa4137">绑定手机号</span>','每天认真阅读，各得<span style="color:#fa4137">4元现金</span>']},e590:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{class:"nav-bar "+(t.hairline?"Hairline Hairline_bottom":"")},[a("i",{class:[t.customBack?"nav-bar_backWhite":"nav-bar__back"],on:{click:t.backHandler}}),a("h1",{staticClass:"nav-bar__title",style:t.customTitleStyle},[t._v(t._s(t.title))]),a("div",{staticClass:"nav-bar__info"},[t._t("default")],2)])},n=[],s=a("edb0"),o={name:"NavBar",props:{title:{type:String,default:""},hairline:{type:Boolean,default:!0},finishExecute:{type:Boolean,default:!1},clickBackHandler:{type:Function,default:null},webview:{type:Boolean,default:!0},customBack:{type:Boolean,default:!1},customTitleStyle:{type:Object,default:function(){return{}}}},methods:{backHandler:function(){this.clickBackHandler&&(this.clickBackHandler(),this.finishExecute)||(this.webview?Object(s["D"])():this.$router.go(-1))}}},c=o,r=(a("4fce"),a("2877")),l=Object(r["a"])(c,i,n,!1,null,"d8cf0938",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-1909eb98-legacy.bf092560.js.map