(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c1a7d20"],{"3c81":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.team.teamId?t("div",{staticClass:"container",on:{click:function(a){return e.goAppChat()}}},[t("div",{staticClass:"tip"}),t("div",{staticClass:"package"},[t("div",{staticClass:"user"},[t("ImageLoader",{class:["headIcon","gender","gender-"+e.user.gender],attrs:{"c-style":{borderRadius:"100%"},src:e.user.headIcon}}),t("p",{staticClass:"nickname"},[e._v(e._s(e.user.nickname))])],1),t("div",{staticClass:"invation one-line-clamp"},[e.team.teamName?t("span",[e._v("看友“"+e._s(e.user.nickname)+"”邀请你加入")]):e._e()]),t("div",{staticClass:"team"},[t("ImageLoader",{staticClass:"team-icon",attrs:{src:e.team.icon}}),t("div",{staticClass:"team-info"},[t("p",{staticClass:"team-name one-line-clamp"},[e._v(e._s(e.team.teamName))]),t("p",{staticClass:"team-intro"},[e.team.memberNumber?t("span",[e._v("当前"+e._s(e.team.memberNumber)+"人 ")]):e._e(),e.team.redPackageNumber?t("span",[e._v("昨日红包"+e._s(e.team.redPackageNumber))]):e._e()])])],1),t("div",{staticClass:"package-btn scale-infinite"})])]):e._e()},r=[],o=(t("99af"),t("d3b7"),t("0c6d"));function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o["b"].get("/api/v4/chat/share/detail",e).then((function(e){return 200===e.data.status?Promise.resolve(e.data.data):(Object(o["a"])(e),Promise.reject(e.data.data))}))}var s=t("f76b"),c=t("db49"),m=t("c36a"),d=t("7f46"),u={name:"Share",components:{ImageLoader:s["a"]},methods:{goAppChat:function(){var e=this;this.copyTeamInfo();var a=function(){Object(m["e"])("bikan://web.tab/newsTab?groupId=".concat(e.team.teamId))};this.$o2o({e_c:"小分队邀请",e_a:"点击",e_n:"小分队邀请页面点击",e_x:{teamId:this.team.teamId,sharedBy:this.$route.query.sharedBy}},a,a)},copyTeamInfo:function(){if(this.team.teamId&&this.invitationCode){var e=JSON.stringify({type:"team",teamId:this.$route.query.teamId,invitationCode:this.invitationCode,sharedBy:this.$route.query.sharedBy});Object(d["b"])(e)}}},data:function(){return{invitationCode:"",user:{headIcon:c["a"].default.userIcon,nickname:"",gender:0},team:{teamId:0,teamName:"",icon:"https://ts.market.mi-img.com/download/Browser/0b26254d06dac47c330937438265b8ddb66c4c6fc/team.png",memberNumber:0,redPackageNumber:0}}},created:function(){var e=this;window.document.title="想看资讯-加入小分队领红包",i({sharedBy:this.$route.query.sharedBy,teamId:this.$route.query.teamId}).then((function(a){e.user={headIcon:a.userInfo&&a.userInfo.headIcon||c["a"].default.userIcon,nickname:a.userInfo&&a.userInfo.nickname||"",gender:a.userInfo&&a.userInfo.gender||-1},e.team={teamId:a.teamInfo&&a.teamInfo.teamId||0,teamName:a.teamInfo&&a.teamInfo.teamName||"",icon:a.teamInfo&&a.teamInfo.icon||"https://ts.market.mi-img.com/download/Browser/0b26254d06dac47c330937438265b8ddb66c4c6fc/team.png",memberNumber:a.teamInfo&&a.teamInfo.memberNumber||0,redPackageNumber:a.teamInfo&&a.teamInfo.redPackageNumber||0},e.invitationCode=a.invitationCode,e.$root.hidePlaceholder();var t={title:"想看-加入小分队领红包",summary:"看友“".concat(a.userInfo.nickname,"”邀请你加入").concat(a.teamInfo.teamName,"小分队"),pic:a.teamInfo.icon,url:window.location.href};Object(m["h"])(t),e.$o2o({e_c:"小分队邀请",e_a:"曝光",e_n:"小分队邀请页面曝光",e_x:{teamId:e.team.teamId,sharedBy:e.$route.query.sharedBy}})})).catch((function(){e.$root.hidePlaceholder(),e.$error()}))}},f=u,h=(t("fe1a"),t("2877")),I=Object(h["a"])(f,n,r,!1,null,"39fd4704",null);a["default"]=I.exports},caab:function(e,a,t){},fe1a:function(e,a,t){"use strict";var n=t("caab"),r=t.n(n);r.a}}]);
//# sourceMappingURL=chunk-6c1a7d20-legacy.d1d1c22d.js.map