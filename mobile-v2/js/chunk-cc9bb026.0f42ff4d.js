(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc9bb026"],{"03cb":function(e,t,a){},3854:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.data.redPacketPicCash,expression:"data.redPacketPicCash"}],staticClass:"content"},[a("swipe-list",{staticClass:"swipe",attrs:{theme:"black",list:e.data.invitationCarousel}}),a("div",{class:{invitation__container:!0,preinvited:e.preinvited}},[e.noWithdrawTip?a("div",{staticClass:"no-withdraw-tip scale",on:{click:e.showNoWithdrawTipDialog}},[a("i"),a("span",[e._v("提现不了？")])]):e._e(),e.preinvited?e._e():a("div",{staticClass:"refuser"},[a("img",{staticClass:"invitation__headIcon",attrs:{src:e.data.headIcon||e.headIcon}}),a("div",{staticClass:"invitation__tip"},[a("p",{staticClass:"invitation-source"},[e._v("“"+e._s(e.getShortName(e.data.user))+"”给你发来了现金红包")]),e.invitationCode?a("p",{staticClass:"invitation-code"},[e._v("Ta的邀请码："+e._s(e.showInvitationCode))]):e._e()])]),e.data.redPacketPicCash?a("div",{staticClass:"invitation__money"},[e._v(" "+e._s((+e.data.redPacketPicCash).toFixed(2))),a("span",[e._v("元")])]):e._e(),e.preinvited?a("div",{staticClass:"preinvited-invitation-tip"},[e._v(" 红包已到账，马上去提现 ")]):e._e(),e.preinvited?a("div",{staticClass:"preinvited-invitation-code"},[e._v(" Ta的邀请码："+e._s(e.showInvitationCode)+" ")]):e._e(),e.isWechatBrowser()&&!e.preinvited?a("big-button",{staticClass:"wechat-login scale-infinite",on:{click:e.wehcatAuth}},[e._v("微信登录 立即领取")]):e._e(),e.isWechatBrowser()||e.preinvited?e._e():a("div",{ref:"phoneLogin",staticClass:"phone-login"},[a("div",{staticClass:"phonenumber"},[a("i",{staticClass:"i-phone"}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phonenumber,expression:"phonenumber"}],ref:"phonenumber",attrs:{type:"number",placeholder:"请输入您的手机号领取"},domProps:{value:e.phonenumber},on:{blur:function(t){return e.telInputStatusHandler(!1)},focus:function(t){return e.telInputStatusHandler(!0)},input:function(t){t.target.composing||(e.phonenumber=t.target.value)}}}),e.phonenumberError?a("i",{staticClass:"i-phone-error heartBeat"}):e._e()]),a("big-button",{class:{"phone-login-btn":!0,"scale-infinite":e.telBtnActive},on:{click:e.submitPhoneNumber}},[e._v("立即领取")])],1),e.preinvited?a("div",{staticClass:"countdown-container"},[a("p",[e._v("24小时后将过期，请尽快提现")]),a("CountDown",{staticClass:"countdown",attrs:{"is-show-day":!1,time:86399e3,separator:":","c-style":{height:"26px",color:"rgba(104, 79, 52, 1)",time:{display:"flex",height:"26px",width:"26px",backgroundColor:"rgba(104, 79, 52, 1)",color:"#fff",fontSize:"17px",justifyContent:"center",alignItems:"center",borderRadius:"4px"}}}}),a("big-button",{staticClass:"go-withdraw scale-infinite",on:{click:e.goWithdraw}},[e._v("下载提现")]),a("div",{staticClass:"footer",on:{click:function(t){return e.setDownloadTip(!0)}}},[e._v("？下载不了点这里")])],1):e._e(),e.wechatLoginDialog?a("div",{staticClass:"wechat-dialog"},[a("div",{staticClass:"wechat-login-dialog"},[a("i",{staticClass:"wechat-dialog-close",on:{click:e.goSJQQ}}),a("p",[e._v("微信登录后可立即提现")]),a("div",{on:{click:function(t){return e.wehcatAuth("dialogLogin")}}},[e._v("去登录")])])]):e._e(),e.noWithdrawTipDialog?a("div",{staticClass:"no-withdraw-tip-dialog"},[a("div",[a("i",{staticClass:"no-withdraw-tip-logo"}),a("p",{staticClass:"no-withdraw-tip-dialog-title"},[e._v("温馨提示")]),e._m(0),a("p",{staticClass:"no-withdraw-tip-dialog-shop"},[e._v(" 常见的应用商店有：应用宝、360手机助手、PP手机助手、小米应用商店、华为应用市场、oppo应用商店、vivo应用商店等")]),a("div",{staticClass:"no-withdraw-tip-hide",on:{click:e.hideNoWithdrawTipDialog}},[e._v("知道了")])])]):e._e(),e.browserOpenDialog?a("div",{staticClass:"browser-open-dialog",on:{click:e.hideBrowserOpenDialog}}):e._e()],1),a("gray-mask",{attrs:{show:e.downloading},on:{click:function(t){return e.setDownloading(!1)}}},[a("div",{staticClass:"download"},[a("div",{staticClass:"download-top"}),a("div",{staticClass:"download-title"},[e._v("正在前往官方应用市场下载…")]),a("div",{staticClass:"download-tips"},[e._v("若跳转失败")]),a("div",{staticClass:"download-tips"},[e._v("请选择浏览器打开")]),a("div",{staticClass:"download-browser"})])]),a("gray-mask",{attrs:{show:e.showDownloadTip}},[a("div",{staticClass:"download-tip"},[a("p",{staticClass:"download-tip__title"},[e._v("如你无法下载请到")]),a("p",{staticClass:"download-tip__title"},[e._v("手机应用商店或手机下载助手")]),a("p",{staticClass:"download-tip__des"},[e._v("搜索“想看”下载安装")]),a("div",{staticClass:"download-tip__logo"}),a("div",{staticClass:"download-tip__btn",on:{click:function(t){return e.setDownloadTip(!1)}}},[e._v("知道了")])])]),a("gray-mask",{style:{background:"rgba(0, 0, 0, 0.8)"},attrs:{show:e.pastDueModal}},[a("div",[a("div",{staticClass:"pastDue"},[e._v(" 该链接已过期，请退出重新扫码～ ")])])])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"no-withdraw-tip-dialog-text"},[e._v(" 提现需要下载安装“想看APP”，如果您现在依然无法下载，请到您手机中的应用商店"),a("span",[e._v("搜索“想看”进行安装")])])}],s=(a("c975"),a("cca6"),a("5319"),a("b7d5")),o=a("8b5c"),r=a("a1ba"),c=a("c36a"),h=a("685a"),d=a("7f46"),l=a("6b43"),u=a("75ec"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"button",on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)},v=[],m={name:"BigButton"},_=m,w=(a("7695"),a("2877")),b=Object(w["a"])(_,p,v,!1,null,"7502154a",null),f=b.exports,g={name:"Sharecode",components:{SwipeList:u["a"],BigButton:f,CountDown:o["a"],GrayMask:r["a"]},data(){return{data:{},phonenumber:"",phonenumberError:!1,invitationCode:this.$route.query.shareId||"",preinvited:"1"===this.$route.query.preinvited,wechatLoginDialog:!1,noWithdrawTipDialog:!1,noWithdrawTip:!1,browserOpenDialog:!1,downloading:!1,showDownloadTip:!1,telBtnActive:!1,headIcon:"https://ts.market.mi-img.com/download/Browser/05c8b647588f540a93348bd68816ff64149a83f74/default-icon.png",pastDueModal:!1}},watch:{preinvited(e){e&&setTimeout(()=>{this.downloading||this.download()},3e3)}},computed:{showInvitationCode(){return this.invitationCode.replace(/^.*?#/,"")},channelName(){return this.invitationCode.indexOf("#")>-1?this.invitationCode.replace(/#\w+/,""):"0"},shareChannel(){var e=Object(c["c"])(this.$route.query.share);return e||("face2face"===this.$route.query.share?"面对面":"XIANGKAN"===this.showInvitationCode?"分享页":"Unkown-Channel")}},beforeCreate(){Object(h["f"])()&&!this.$route.query.token&&this.$router.replace({name:"invitationNewShare",query:this.$route.query}),window.document.title="跟我一起领红包！- 想看资讯 - 想看世界，想看你！"},created(){Object(l["c"])("clickGoWithdraw",0),Object(s["f"])({invitationCode:this.$route.query.shareId}).then(e=>{200===e.data.status?(this.data=e.data.data,this.$route.query.code&&this.submitPreinvited(),this.$root.hidePlaceholder()):(this.$root.hidePlaceholder(),this.goError())}).catch(()=>{this.$root.hidePlaceholder(),this.goError()}),"1"===this.$route.query.preinvited?this.$o2o({e_c:"分享页",e_a:"曝光",e_n:"领取成功页",e_x:{share_channel:this.shareChannel,channel_name:this.channelName}}):this.$o2o({e_c:"分享页",e_a:"曝光",e_n:"邀请码分享页面",e_x:{source:this.$route.query.source,share_channel:this.shareChannel,channel_name:this.channelName}})},methods:{telInputStatusHandler(e){e?(this.$refs.phonenumber.type="number",this.phonenumber="",this.phonenumberError=!1,this.$refs.phonenumber.style.color="#000",this.$refs.phonenumber.scrollIntoView&&this.$refs.phonenumber.scrollIntoView(),this.$refs.phonenumber.scrollIntoViewIfNeeded&&this.$refs.phonenumber.scrollIntoViewIfNeeded(),this.$refs.phoneLogin&&(this.$refs.phoneLogin.style.bottom="29px"),this.telBtnActive=!1):this.telBtnActive=11===this.phonenumber.length},setDownloadTip(e){this.showDownloadTip=e,e&&(this.$o2o({e_c:"分享页",e_a:"点击",e_n:"下载不了点这里",e_x:{share_channel:this.shareChannel,channel_name:this.channelName}}),this.$o2o({e_c:"分享页",e_a:"曝光",e_n:"温馨提示页",e_x:{share_channel:this.shareChannel,channel_name:this.channelName}}))},setDownloading(e){this.downloading=e,e&&this.$o2o({e_c:"分享页",e_a:"曝光",e_n:"微信跳浏览器弹窗",e_x:{share_channel:this.shareChannel,channel_name:this.channelName}})},goError(){this.$error(this.$route.name)},setWecahtPreinvited(e){var t=this.$route.path,a=this.$route.query,i={path:t,query:Object.assign({},a,{preinvited:e,wechat:e})};this.$router.replace(i)},hideBrowserOpenDialog(){this.browserOpenDialog=!1},showBrowserOpenDialog(){this.$o2o({e_c:"分享页",e_a:"曝光",e_n:"浏览器打开浮层",e_x:{share_channel:this.shareChannel,channel_name:this.channelName}}),this.setWecahtPreinvited(1),this.browserOpenDialog=!0},showNoWithdrawTipDialog(){this.$o2o({e_c:"分享页",e_a:"点击",e_n:"悬浮提示",e_x:{share_channel:this.shareChannel,channel_name:this.channelName}}),this.$o2o({e_c:"分享页",e_a:"曝光",e_n:"悬浮提示弹窗",e_x:{share_channel:this.shareChannel,channel_name:this.channelName}}),this.noWithdrawTipDialog=!0},hideNoWithdrawTipDialog(){this.$o2o({e_c:"分享页",e_a:"点击",e_n:"关闭悬浮提示弹窗",e_x:{share_channel:this.shareChannel,channel_name:this.channelName}}),this.noWithdrawTipDialog=!1},showNoWithdrawTip(){this.$o2o({e_c:"分享页",e_a:"曝光",e_n:"悬浮提示",e_x:{share_channel:this.shareChannel,channel_name:this.channelName}}),this.noWithdrawTip=!0},goWithdraw(){if(this.$o2o({e_c:"分享页",e_a:"点击",e_n:"去提现",e_x:{share_channel:this.shareChannel,channel_name:this.channelName}}),!Object(h["f"])())return this.download(),!0;var e=parseInt(Object(l["a"])("clickGoWithdraw"),10);return e?e+=1:e=1,Object(l["c"])("clickGoWithdraw",e),this.download(),!0},goSJQQ(){this.download()},wehcatAuth(e){this.copy(),this.$route.query.code?this.submitPreinvited():(this.$o2o({e_c:"分享页",e_a:"点击",e_n:"dialogLogin"===e?"去登陆":"微信登陆",e_x:{share_channel:this.shareChannel,channel_name:this.channelName}}),setTimeout(()=>{this.wechatLoginDialog||this.$o2o({e_c:"分享页",e_a:"曝光",e_n:"未授权弹窗",e_x:{share_channel:this.shareChannel,channel_name:this.channelName}}),this.wechatLoginDialog=!0},1e3),location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx64f017709ff9fc6e&redirect_uri=".concat(encodeURIComponent(location.href),"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect"))},submitPreinvited(){Object(s["e"])({invitationCode:this.$route.query.shareId,type:"wechat",key:this.$route.query.code,channel:this.$route.query.share,token:this.$route.query.token}).then(e=>{200===e.data.status?(this.$o2o({e_c:"分享页",e_a:"曝光",e_n:"领取成功页",e_x:{share_channel:this.shareChannel,channel_name:this.channelName}}),this.preinvited=!0):500===e.data.status&&e.data.data&&6===e.data.data.code?this.pastDueModal=!0:this.download()}).catch(()=>{this.download()})},submitPhoneNumber(){this.$o2o({e_c:"分享页",e_a:"点击",e_n:"立即领取",e_x:{share_channel:this.shareChannel,channel_name:this.channelName}});var e=/^1\d{10}$/;return e.test(this.phonenumber)?(this.copy(),Object(s["e"])({invitationCode:this.$route.query.shareId,type:"phonenumber",key:this.phonenumber}).then(e=>{if(200===e.data.status)this.$o2o({e_c:"分享页",e_a:"曝光",e_n:"领取成功页",e_x:{share_channel:this.shareChannel,channel_name:this.channelName}}),this.preinvited=!0;else{if(2===e.data.data.code)return this.$refs.phonenumber.type="text",this.phonenumber="请输入正确的手机号码",this.phonenumberError=!0,void(this.$refs.phonenumber.style.color="rgba(255, 46, 40, 1)");this.download()}}).catch(()=>{this.download()}),!0):(this.$refs.phonenumber.type="text",this.phonenumber="请输入正确的手机号码",this.phonenumberError=!0,this.$refs.phonenumber.style.color="rgba(255, 46, 40, 1)",!1)},isWechatBrowser(){return Object(h["f"])()||"1"===this.$route.query.wechat},copy(){var e=this.$route.query.shareId;e=e.replace(/^.*?#/,""),this.isWechatBrowser()?e+=",WECHAT":e+=",BROWSER",Object(d["b"])(e)},download(){this.setDownloading(Object(h["f"])()),Object(c["g"])({page:"invitation",source:"invitation",channel:"xiangkan_invitation.apk",schema:this.$route.query.schema})},getShortName(e){return"string"===typeof e?e.length>5?"".concat(e.substr(0,4),"..."):e:""}}},S=g,C=(a("6b16"),Object(w["a"])(S,i,n,!1,null,"2a4b258b",null));t["default"]=C.exports},"3d72":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAACglBMVEUAAAC+cjP/AAC+czO+czS+czO+czS+czS9czO+cjS/aiuqVQC/dTW/cDC/czO+czS7dzO/czW+czS/czQAAAD/gAC9dTO+czS/czS+czTMZjO+cjTBdTC/czS+czS/dDTAczS8byy7ZjO+czTAdDXBcjTAczS+czS+cjW/dDS+czS+cjO9czO+dDS+cjS+czS+czS+czO0aS3AdDW+cjSzZjO/cTW/gEDAdDTMZjO+czK/dDS+czW+czS/cTK9czS+dDW/czS+czS+czTAczS+czTEdju+czS/czS+czO7cTO/czO+czPVgCu+czS5dC6+czO+czS9czPAdjS5dC69cjS+cjS+dDS/dDO+czPAdjO2bSS+cjS9czS+dDS+cjS+czTRdEa/dDTCbTG8czG/czTIbze/cDC/czTFdC6ZZjO9czO+czS+czO9cjO+czO9czO+czS/dDS+cjS+dDS+czXAczS+dDO/czW/dTW9czW/czW8czTAdTa/czWqVSu+czW9czS8cja/czS+czS+czO+czTAczW8eTa+czS+dDO+czTAdDW/czXIejfBeDS/dTW/czSzgDO+czO9cTO/czO/czO/czS/czO/czPAcjO9dDS+dTS+czS/czTIgDe/czO8cTK+dDO/dDS+dTW+czS+czW+czS+cjS+dDS9czO+czS+dDS+czO/czS+czS+dDS/czS+cTW+czO/dDS+czW+czO9djS/czS+cjS9cS++dDTCcze/czO9dDTDeDy8eje+dDS/gADAdDXCcTS/czS9dDW+czW+dDW+czS+czS/czTGcTm+czPAdTO/czS9cjS/czTBdjS+czXAdTO+czSnMYQEAAAA1XRSTlMA/gH49/389vn8DAMYECj7D1vj5gECI63DzwrEJeeSY8EXD/CVMcWiQ4+omun3zZ3d+RGCTgpIBIoFUmxq2SRJt1Tx+smmDejy0S0UqQa8C9vI/UUWhLmK1u5BB5zKsLDTC7YVKpcXIPoWBWjyvcKBs9cst7WtSdHQSJDUVD1zBuivJrrD4I7BE+aCsXmgFzGMvwrpRp9f0+/fVYRT7eIO2j2RhD/eZrThxJ/JuZX73P2+P7S7qdA2p8Ab7CpzgBEXwQRlNsphfpXvnrIJ14GU9fZO6VVZeT3XAAACPUlEQVR42p3U04LlQAAE0OrMtTVe27Zt27Zt27Zt27ZV/7PduUSWJ3iqNpCgZtF+hXLWVswoWKrELFdeCAYc/pZd7IywVOlQ2IdUWpkixQUTiDb5tTQkcWywMo1tS1JlBUqbaKBqOQ9iRuebachcaUSsrZEqY0hkV4NOq57QlrlvBhVvr4FevcU6GpQyVsZNKrmAypThBc5SMTWGlFeEMd6JQwEq2f0xdo6glNsKCDVtxqjmN12IhCy93Vg2hJK1gYaaAwSjBqkMqDP17OisbyIp1hdD0T6UugWyZw57UxuKGDyqfnHBCiXRYzelvVnobqfUyaMhasxkbdz4CeR0Dcf1luuhEJWFiBNTp6HzDNK7GR4q5ZFDxYk4cvY2zBXkPGA+pa4IUkFSiIuweAmZCyyl1BoVjULLgRXkys5YRSkDGUah1UAnMrAGj/SQcXPrkBkgGzqxMdxcKYNQcBNeWMgmwFZKLVCCSkfEie07UHsnyV34sIdS5chk7kNc8/3OzAMHyUOH4Y9MpqshpSNHNUTZj9U9cVKw2ylknqZ0phHyzglK1vMXmlx0Q+Gly1dI89UeuFaBpLjuTtoqN9pBou7WbTjuiMhWQat8Rtnv3ouG7j8AHloptX0MqZaNMTlP4KTy9Fnd51Sq1kg/CC9fvaaSUbbs28SDAN87M6PMbTKoExb9/749IrIqCRoSH9v92zEHqn0yGWQ+t0cSrXHuF5HU0te2NbT/uMQUrVjWt/JdC2ZkfG9R+Ucjt4aYn+pVIC5botJWAAAAAElFTkSuQmCC"},"52fc":function(e,t,a){},"6b16":function(e,t,a){"use strict";var i=a("52fc"),n=a.n(i);n.a},"75ec":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.list.length?i("div",{class:{invatation__swipe:!0,"invatation__swipe-black":"black"===e.theme}},[i("van-swipe",{attrs:{autoplay:3e3,vertical:"","show-indicators":!1}},e._l(e.list,(function(t,n){return i("van-swipe-item",{key:"swipe"+n},["black"===e.theme?[i("img",{attrs:{src:a("8617")}}),i("span",[e._v("“"+e._s(t.user)+"”提现成功")])]:[i("img",{attrs:{src:a("3d72")}}),i("span",[e._v(e._s(t.user)+"邀请了"+e._s(t.discipleNum)+"名好友")])]],2)})),1)],1):e._e()},n=[],s={name:"SwipeList",props:{list:{type:Array,default(){return[]}},theme:{type:String,default:"red"}}},o=s,r=(a("aa8a"),a("2877")),c=Object(r["a"])(o,i,n,!1,null,"c832b72a",null);t["a"]=c.exports},7695:function(e,t,a){"use strict";var i=a("a496"),n=a.n(i);n.a},8547:function(e,t,a){"use strict";var i=a("03cb"),n=a.n(i);n.a},8617:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAMAAAC7faEHAAAASFBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////8FevL4AAAAF3RSTlMACLnxjyn5/J8QrObg1XxAA3BWShjIZOPo/14AAAHGSURBVHhehZRbjoQgEEUv77eg0rL/nU6kGMMYOnP+Gk4uRVE2ZljNkkdhRPJbrgxr3GFje9BJ5qWZuWh/MMEqvHFSN9Pe6P0VqbxpK4SsmDg/7QuGqyktte98HAbOr6OoFC0ZCGnm3Q+n/bRLQTVepGU9a9453r0LTNJa6CfT8kBbALZ7lqFYipAFwCEmTbrHM9KBUUZQAKNVomuwzdw5emM4Qy9mK6iRiv1I63d0bDjZfWLIYLZfilfk8UAODzYpuFvkwKHHwZKawTB5YmNQsTWt4GLfP0GVbpi9Zg70AAnIsR8XXm+Zaq1F4KImQSy9dqLo1oTD2T0Ps/Yu3CcJBdU9/m9eHnlp6UWqL5RRn4RfeXrc1wNb93Zsw589sReo2NvG+nkmj6mKdfZShbsfLDFk0bcVapo+g+d9q79vcfzOsHdgY5p1jME78p6RhUr0+gByaA+Uap8fhUKSAg3gJD5eqsAlxm1vlH59heRJlIPWUkFnF5OYzkytj8dOFYUMgskp0YRgKEbT6t3MQeXtO7bgQXHd1gjrMOGkWGrh/cfGrrDQUi5442Q0bUanvWABUxsPv6qJfldYU0pV52Y993LPymHmB4CASNnI1ZRfAAAAAElFTkSuQmCC"},"8b5c":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.countDownTime>=0?a("div",{staticClass:"countdown",style:e.CStyle},[e.isShowDay?[e.days>=0?a("span",[a("span",{style:e.CStyle.time},[e._v(e._s(("0"+e.days).slice(-2)))]),e._v(" 天 ")]):e._e()]:e._e(),e.hours>=0?a("span",[a("span",{style:e.CStyle.time},[e._v(e._s(("0"+e.hours).slice(-2)))]),e.separator?[e._v(e._s(e.separator))]:[e._v(" 时")]],2):e._e(),e.minutes>=0?a("span",[a("span",{style:e.CStyle.time},[e._v(e._s(("0"+e.minutes).slice(-2)))]),e.separator?[e._v(e._s(e.separator))]:[e._v(" 分")]],2):e._e(),e.seconds>=0?a("span",[a("span",{style:e.CStyle.time},[e._v(e._s(("0"+e.seconds).slice(-2)))]),e.separator?e._e():[e._v(" 秒")]],2):e._e()],2):e._e()},n=[],s={name:"CountDown",props:{CStyle:{type:Object,default:()=>({time:{}})},time:{type:Number,required:!0,default:6048e5},isShowDay:{type:Boolean,default:!0},isStop:{type:Boolean,default:!1},separator:{type:String,default:""}},data(){return{D:864e5,H:36e5,M:6e4,S:1e3,intervalId:0,countDownTime:0,previousTime:Date.now()}},computed:{days(){var e=Math.floor(this.countDownTime/this.D);return e>=0?e:0},hours(){var e=Math.floor((this.countDownTime-this.days*this.D)/this.H);return e>=0?e:0},minutes(){var e=Math.floor((this.countDownTime-this.days*this.D-this.hours*this.H)/this.M);return e>=0?e:0},seconds(){var e=Math.floor((this.countDownTime-this.days*this.D-this.hours*this.H-this.minutes*this.M)/this.S);return e>=0?e:0}},watch:{time:{handler(e){e?setTimeout(()=>{this.countDownTime=e,this.intervalId=setInterval(()=>this.tick(),1e3)},0):clearInterval(this.intervalId)},immediate:!0}},destoryed(){clearInterval(this.intervalId)},methods:{tick(){var e=Date.now(),t=e-this.previousTime;this.countDownTime=this.countDownTime-t,this.previousTime=e,this.isStop&&(this.countDownTime<1e3&&this.countDownTime>0||this.countDownTime<0&&this.countDownTime>-1e3)&&(this.$emit("stop"),clearInterval(this.intervalId)),this.countDownTime<0&&(this.countDownTime=0)}}},o=s,r=(a("8547"),a("2877")),c=Object(r["a"])(o,i,n,!1,null,"6ad4ebb4",null);t["a"]=c.exports},9991:function(e,t,a){},a1ba:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._g({directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"gray-mask"},e.$listeners),[e._t("default")],2)},n=[],s={name:"GrayMask",props:{show:{type:[String,Boolean],default:""}},methods:{stopSlide(e){e.preventDefault()}},watch:{show:{handler(e){e?(console.log("禁止滑动"),document.body.addEventListener("touchmove",this.stopSlide,{passive:!1})):(console.log("可以滑动"),document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1}))},immediate:!0}},destroyed(){document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1})}},o=s,r=(a("bccd"),a("2877")),c=Object(r["a"])(o,i,n,!1,null,"4cb2c41a",null);t["a"]=c.exports},a496:function(e,t,a){},aa8a:function(e,t,a){"use strict";var i=a("ce97"),n=a.n(i);n.a},b7d5:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return r})),a.d(t,"g",(function(){return c})),a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return d})),a.d(t,"h",(function(){return l})),a.d(t,"m",(function(){return u})),a.d(t,"l",(function(){return p})),a.d(t,"k",(function(){return v})),a.d(t,"j",(function(){return m})),a.d(t,"i",(function(){return _}));a("e6cf");var i=a("0c6d");function n(e){return i["b"].get("/api/v4/invitation/share",e).then(e=>(200!==e.data.status&&Object(i["a"])(e),Promise.resolve(e)))}function s(e){return i["b"].get("/api/v4/invitation/activity",e).then(e=>(200!==e.data.status&&Object(i["a"])(e),Promise.resolve(e)))}function o(e){return i["b"].get("/api/v4/disciple/my",e).then(e=>(200!==e.data.status&&Object(i["a"])(e),Promise.resolve(e)))}function r(e){return i["b"].post("/api/v4/invitation/preinvited",e)}function c(e){return i["b"].get("/api/v4/invitation/f2f/packetRecords",e).then(e=>200!==e.data.status?(Object(i["a"])(e),Promise.reject(e.data.data)):Promise.resolve(e.data.data))}function h(){return i["b"].get("/api/v4/invitation/f2f/home").then(e=>200!==e.data.status?(Object(i["a"])(e),Promise.reject(e.data.data)):Promise.resolve(e.data.data))}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].post("/api/v4/invitation/f2f/packet",e)}function l(){return i["b"].get("/api/v4/invitation/f2f/refresh").then(e=>200!==e.data.status?(Object(i["a"])(e),Promise.reject(e.data.data)):Promise.resolve(e.data.data))}function u(){return i["b"].post("/api/v4/invitation/tutorialAward").then(e=>200!==e.data.status?(Object(i["a"])(e),Promise.reject(e.data.data)):Promise.resolve(e.data.data))}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].post("/api/v4/invitation/sms/upload",e).then(e=>200!==e.data.status?(Object(i["a"])(e),Promise.reject(e.data.data)):Promise.resolve(e.data.data))}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].get("/api/v4/invitation/sms/status",e).then(e=>200!==e.data.status?(Object(i["a"])(e),Promise.reject(e.data.data)):Promise.resolve(e.data.data))}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].post("/api/v4/invitation/sms/invited",e).then(e=>200!==e.data.status?(Object(i["a"])(e),Promise.reject(e.data.data)):Promise.resolve(e.data.data))}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].get("/api/v4/invitation/sms/home",e).then(e=>200!==e.data.status?(Object(i["a"])(e),Promise.reject(e.data.data)):Promise.resolve(e.data.data))}},bccd:function(e,t,a){"use strict";var i=a("9991"),n=a.n(i);n.a},ce97:function(e,t,a){}}]);
//# sourceMappingURL=chunk-cc9bb026.0f42ff4d.js.map