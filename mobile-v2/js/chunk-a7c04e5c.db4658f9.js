(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7c04e5c"],{"2cc1":function(t,a,e){"use strict";var i=e("dcc9"),n=e.n(i);n.a},"445a":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"rouse"},[e("div",{staticClass:"header"},[e("div",{staticClass:"header-bg"}),e("div",{staticClass:"header-content"},[e("div",{staticClass:"headicon"},[t.headicon?e("img",{attrs:{src:t.headicon}}):t._e()]),e("p",{staticClass:"header-title"},[t._v("Hi 亲爱的朋友~")]),e("p",{staticClass:"header-tip"},[t._v("我是"+t._s(t.nickname)+"，邀请你一起来想看赚钱，你完成新手任务，咱俩都有钱赚！")])])]),t._m(0),e("div",{staticClass:"btn",on:{click:t.download}},[t._v("去APP内完成")])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"guide"},[e("p",[t._v("1、当日下载登录并绑定邀请码，获得¥1.3+¥0.1元现金，前5天每天都可提现。")]),e("div",{staticClass:"rouse-money"},[e("div",[e("p",[t._v("送 "),e("span",[t._v("1.3")]),t._v(" 元")]),e("p",[t._v("官方新用户红包")])]),e("div",[e("p",[t._v("送 "),e("span",[t._v("0.1")]),t._v(" 元")]),e("p",[t._v("绑定成为我的好友")])])]),e("p",[t._v("2、在赚金币页面完成所有新手任务，再得¥3元。")]),e("div",{staticClass:"rouse-money"},[e("div",[e("p",[t._v("送 "),e("span",[t._v("1")]),t._v(" 元")]),e("p",[t._v("阅读，领时段金币")])]),e("div",[e("p",[t._v("奖 "),e("span",[t._v("2")]),t._v(" 元")]),e("p",[t._v("连续3天看3条内容")])])])])}],r=e("b7d5"),s=e("c36a"),o={name:"InvitationRouse",data(){return{nickname:"",headicon:"",code:this.$route.query.shareId}},created(){window.document.title="跟我一起领红包！- 想看资讯 - 想看世界，想看你！",Object(r["f"])({invitationCode:this.code}).then(t=>{200===t.data.status?(this.headicon=t.data.data.headIcon,this.nickname=t.data.data.user,this.$root.hidePlaceholder()):(this.$root.hidePlaceholder(),this.$error(this.$route.name))}).catch(()=>{this.$root.hidePlaceholder(),this.$error(this.$route.name)}),this.$o2o({e_c:"分享页",e_a:"曝光",e_n:"邀请码提醒好友"})},methods:{download(){this.$o2o({e_c:"分享页",e_a:"点击",e_n:"挑战8元奖励"}),Object(s["e"])("bikan://goto/mineTab","".concat(window.location.origin,"/api/v1/package/xiangkan_invitation.apk"),{ckey:"CK1429645648411"})}}},d=o,c=(e("2cc1"),e("2877")),u=Object(c["a"])(d,i,n,!1,null,"9df02caa",null);a["default"]=u.exports},b7d5:function(t,a,e){"use strict";e.d(a,"f",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"d",(function(){return s})),e.d(a,"e",(function(){return o})),e.d(a,"g",(function(){return d})),e.d(a,"a",(function(){return c})),e.d(a,"b",(function(){return u})),e.d(a,"h",(function(){return v})),e.d(a,"m",(function(){return h})),e.d(a,"l",(function(){return l})),e.d(a,"k",(function(){return p})),e.d(a,"j",(function(){return f})),e.d(a,"i",(function(){return m}));e("e6cf");var i=e("0c6d");function n(t){return i["b"].get("/api/v4/invitation/share",t).then(t=>(200!==t.data.status&&Object(i["a"])(t),Promise.resolve(t)))}function r(t){return i["b"].get("/api/v4/invitation/activity",t).then(t=>(200!==t.data.status&&Object(i["a"])(t),Promise.resolve(t)))}function s(t){return i["b"].get("/api/v4/disciple/my",t).then(t=>(200!==t.data.status&&Object(i["a"])(t),Promise.resolve(t)))}function o(t){return i["b"].post("/api/v4/invitation/preinvited",t)}function d(t){return i["b"].get("/api/v4/invitation/f2f/packetRecords",t).then(t=>200!==t.data.status?(Object(i["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data))}function c(){return i["b"].get("/api/v4/invitation/f2f/home").then(t=>200!==t.data.status?(Object(i["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data))}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].post("/api/v4/invitation/f2f/packet",t)}function v(){return i["b"].get("/api/v4/invitation/f2f/refresh").then(t=>200!==t.data.status?(Object(i["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data))}function h(){return i["b"].post("/api/v4/invitation/tutorialAward").then(t=>200!==t.data.status?(Object(i["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data))}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].post("/api/v4/invitation/sms/upload",t).then(t=>200!==t.data.status?(Object(i["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data))}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].get("/api/v4/invitation/sms/status",t).then(t=>200!==t.data.status?(Object(i["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data))}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].post("/api/v4/invitation/sms/invited",t).then(t=>200!==t.data.status?(Object(i["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data))}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].get("/api/v4/invitation/sms/home",t).then(t=>200!==t.data.status?(Object(i["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data))}},dcc9:function(t,a,e){}}]);
//# sourceMappingURL=chunk-a7c04e5c.db4658f9.js.map