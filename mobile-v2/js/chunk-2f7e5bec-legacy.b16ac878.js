(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f7e5bec"],{9991:function(t,e,n){},"9aee":function(t,e,n){},a0f1:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"share"},[n("img",{staticClass:"logo",attrs:{src:t.config.default.logo}}),n("div",{staticClass:"title"}),n("div",{staticClass:"card"},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:t.info.headIcon||t.config.default.userIcon}})]),n("p",[t._v("邀你下载想看")]),n("p",[t._v("一起看资讯挣话费")]),n("div",{staticClass:"code"},[t._v(t._s(t.showUser)+"的邀请码："+t._s(t.showInvitationCode))])]),n("div",{staticClass:"steps"},[n("h2",[t._v("快速领红包攻略")]),n("p",[t._v("第一步：点击下方按钮下载想看APP")]),n("p",[t._v("第二步：打开登录，领高额新人红包")]),n("button",{staticClass:"scale-infinite",on:{click:t.download}},[t._v("前往下载")])]),n("gray-mask",{attrs:{show:t.login}},[n("div",{staticClass:"dialog"},[n("div",{staticClass:"close",on:{click:function(e){t.login=!1}}}),n("p",[t._v("允许微信登录后可自动绑定好友关系")]),n("button",{on:{click:function(e){return t.auth()}}},[t._v("去登录")])])])],1)},i=[],o=(n("ac1f"),n("5319"),n("db49")),r=n("b7d5"),s=n("a1ba"),u=n("c36a"),c=n("7f46"),d={components:{GrayMask:s["a"]},data:function(){return{config:o["a"],invitationCode:this.$route.query.shareId||"XIANGKAN",login:!0,info:{user:"想看小助手"}}},computed:{showInvitationCode:function(){return"partner"===this.$route.query.share?this.invitationCode:this.invitationCode.replace(/^.*?#/,"")},showUser:function(){var t=this.info.user.length<=6?this.info.user:"".concat(this.info.user.substring(0,6),"...");return t},shareChannel:function(){return this.$route.query.share?this.$route.query.share:"XIANGKAN"===this.showInvitationCode?"news":"invite"}},created:function(){var t=this;this.$route.query.code?(this.login=!1,this.submitPreinvited()):this.$route.query.state?this.$o2o({e_c:"邀请分享页",e_a:"曝光",e_n:"引导授权弹窗",e_x:{share_channel:this.shareChannel}}):this.auth(!0),Object(r["f"])({invitationCode:this.invitationCode}).then((function(e){200===e.data.status?(t.info=e.data.data,t.$o2o({e_c:"邀请分享页",e_a:"曝光",e_n:"邀请码分享页面",e_x:{share_channel:t.shareChannel}}),t.$root.hidePlaceholder()):t.$error()})).catch(this.$error)},methods:{auth:function(t){t||this.$o2o({e_c:"邀请分享页",e_a:"点击",e_n:"去登陆授权",e_x:{share_channel:this.shareChannel}}),this.login=!1,Object(u["k"])(window.location.href)},download:function(){this.$o2o({e_c:"邀请分享页",e_a:"点击",e_n:"前往下载",e_x:{share_channel:this.shareChannel}}),Object(c["b"])(this.invitationCode),"partner"===this.$route.query.share?Object(u["f"])("","CK1433782967648"):Object(u["f"])("","CK1429645648411")},submitPreinvited:function(){Object(r["e"])({invitationCode:this.invitationCode,type:"wechat",key:this.$route.query.code,channel:this.$route.query.share,token:this.$route.query.token})}}},h=d,v=(n("a251"),n("2877")),f=Object(v["a"])(h,a,i,!1,null,"bebbf6b6",null);e["default"]=f.exports},a1ba:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g({directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"gray-mask"},t.$listeners),[t._t("default")],2)},i=[],o={name:"GrayMask",props:{show:{type:[String,Boolean],default:""}},methods:{stopSlide:function(t){t.preventDefault()}},watch:{show:{handler:function(t){t?(console.log("禁止滑动"),document.body.addEventListener("touchmove",this.stopSlide,{passive:!1})):(console.log("可以滑动"),document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1}))},immediate:!0}},destroyed:function(){document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1})}},r=o,s=(n("bccd"),n("2877")),u=Object(s["a"])(r,a,i,!1,null,"4cb2c41a",null);e["a"]=u.exports},a251:function(t,e,n){"use strict";var a=n("9aee"),i=n.n(a);i.a},b7d5:function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return s})),n.d(e,"g",(function(){return u})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"h",(function(){return h})),n.d(e,"m",(function(){return v})),n.d(e,"l",(function(){return f})),n.d(e,"k",(function(){return l})),n.d(e,"j",(function(){return b})),n.d(e,"i",(function(){return p}));n("d3b7");var a=n("0c6d");function i(t){return a["b"].get("/api/v4/invitation/share",t).then((function(t){return 200!==t.data.status&&Object(a["a"])(t),Promise.resolve(t)}))}function o(t){return a["b"].get("/api/v4/invitation/activity",t).then((function(t){return 200!==t.data.status&&Object(a["a"])(t),Promise.resolve(t)}))}function r(t){return a["b"].get("/api/v4/disciple/my",t).then((function(t){return 200!==t.data.status&&Object(a["a"])(t),Promise.resolve(t)}))}function s(t){return a["b"].post("/api/v4/invitation/preinvited",t)}function u(t){return a["b"].get("/api/v4/invitation/f2f/packetRecords",t).then((function(t){return 200!==t.data.status?(Object(a["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}function c(){return a["b"].get("/api/v4/invitation/f2f/home").then((function(t){return 200!==t.data.status?(Object(a["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["b"].post("/api/v4/invitation/f2f/packet",t)}function h(){return a["b"].get("/api/v4/invitation/f2f/refresh").then((function(t){return 200!==t.data.status?(Object(a["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}function v(){return a["b"].post("/api/v4/invitation/tutorialAward").then((function(t){return 200!==t.data.status?(Object(a["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["b"].post("/api/v4/invitation/sms/upload",t).then((function(t){return 200!==t.data.status?(Object(a["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["b"].get("/api/v4/invitation/sms/status",t).then((function(t){return 200!==t.data.status?(Object(a["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["b"].post("/api/v4/invitation/sms/invited",t).then((function(t){return 200!==t.data.status?(Object(a["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a["b"].get("/api/v4/invitation/sms/home",t).then((function(t){return 200!==t.data.status?(Object(a["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data)}))}},bccd:function(t,e,n){"use strict";var a=n("9991"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-2f7e5bec-legacy.b16ac878.js.map