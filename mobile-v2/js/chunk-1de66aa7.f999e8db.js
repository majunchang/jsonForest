(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1de66aa7"],{"06bb":function(t,e,i){"use strict";var s=i("416b"),a=i.n(s);a.a},"151a":function(t,e,i){},"1baf":function(t,e,i){},"25f0":function(t,e,i){"use strict";var s=i("6eeb"),a=i("825a"),n=i("d039"),o=i("ad6d"),r="toString",c=RegExp.prototype,l=c[r],d=n((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),h=l.name!=r;(d||h)&&s(RegExp.prototype,r,(function(){var t=a(this),e=String(t.source),i=t.flags,s=String(void 0===i&&t instanceof RegExp&&!("flags"in c)?o.call(t):i);return"/"+e+"/"+s}),{unsafe:!0})},"416b":function(t,e,i){},4214:function(t,e,i){"use strict";var s=i("bfef"),a=i.n(s);a.a},"4fce":function(t,e,i){"use strict";var s=i("151a"),a=i.n(s);a.a},"67d2":function(t,e,i){"use strict";var s=i("fbf9"),a=i.n(s);a.a},9039:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[t.show?i("div",{staticClass:"dialog",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeHandler(e,"outside")}}},[i("div",{staticClass:"dialog__content"},[i("div",{staticClass:"dialog__close",on:{click:t.closeHandler}}),t._t("default",[i("div",{staticClass:"dialog__inner"},[t._t("icon"),i("div",{staticClass:"dialog__msg"},[t._t("title",[i("h1",{domProps:{innerHTML:t._s(t.title)}})]),t._t("msg",[i("p",{domProps:{innerHTML:t._s(t.msg)}})])],2),t._t("footer"),i("Button",{attrs:{customStyle:{width:"1.9rem",height:"0.43rem",fontSize:"0.16rem"}},on:{click:t.clickHandler}},[t._v(t._s(t.btnText))])],2)])],2)]):t._e()])},a=[],n=i("366e"),o={name:"Dialog",components:{Button:n["a"]},props:{show:{type:Boolean,default:!1},outsideClose:{type:Boolean,default:!0},title:{type:String,default:""},msg:{type:String,default:""},btnText:{type:String,default:""},clickHandler:{type:Function,default:()=>{}}},methods:{closeHandler(t,e){("outside"!==e||this.outsideClose)&&this.$emit("update:show",!1)}}},r=o,c=(i("4214"),i("2877")),l=Object(c["a"])(r,s,a,!1,null,"98be046a",null);e["a"]=l.exports},9343:function(t,e,i){"use strict";var s=i("1baf"),a=i.n(s);a.a},b7d5:function(t,e,i){"use strict";i.d(e,"f",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"d",(function(){return o})),i.d(e,"e",(function(){return r})),i.d(e,"g",(function(){return c})),i.d(e,"a",(function(){return l})),i.d(e,"b",(function(){return d})),i.d(e,"h",(function(){return h})),i.d(e,"m",(function(){return u})),i.d(e,"l",(function(){return f})),i.d(e,"k",(function(){return v})),i.d(e,"j",(function(){return m})),i.d(e,"i",(function(){return p}));i("e6cf");var s=i("0c6d");function a(t){return s["b"].get("/api/v4/invitation/share",t).then(t=>(200!==t.data.status&&Object(s["a"])(t),Promise.resolve(t)))}function n(t){return s["b"].get("/api/v4/invitation/activity",t).then(t=>(200!==t.data.status&&Object(s["a"])(t),Promise.resolve(t)))}function o(t){return s["b"].get("/api/v4/disciple/my",t).then(t=>(200!==t.data.status&&Object(s["a"])(t),Promise.resolve(t)))}function r(t){return s["b"].post("/api/v4/invitation/preinvited",t)}function c(t){return s["b"].get("/api/v4/invitation/f2f/packetRecords",t).then(t=>200!==t.data.status?(Object(s["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data))}function l(){return s["b"].get("/api/v4/invitation/f2f/home").then(t=>200!==t.data.status?(Object(s["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data))}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s["b"].post("/api/v4/invitation/f2f/packet",t)}function h(){return s["b"].get("/api/v4/invitation/f2f/refresh").then(t=>200!==t.data.status?(Object(s["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data))}function u(){return s["b"].post("/api/v4/invitation/tutorialAward").then(t=>200!==t.data.status?(Object(s["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data))}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s["b"].post("/api/v4/invitation/sms/upload",t).then(t=>200!==t.data.status?(Object(s["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data))}function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s["b"].get("/api/v4/invitation/sms/status",t).then(t=>200!==t.data.status?(Object(s["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data))}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s["b"].post("/api/v4/invitation/sms/invited",t).then(t=>200!==t.data.status?(Object(s["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data))}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s["b"].get("/api/v4/invitation/sms/home",t).then(t=>200!==t.data.status?(Object(s["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data))}},bfef:function(t,e,i){},cadb:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return a})),i.d(e,"d",(function(){return n})),i.d(e,"c",(function(){return o}));i("fb6a"),i("5319");function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY年MM月DD日 hh:mm:ss",i=new Date(t),s=i.getFullYear(),a=i.getMonth()+1,n=i.getDate(),o=i.getHours(),r=i.getMinutes(),c=i.getSeconds(),l=function(t){return"0".concat(t).slice(-2)},d={YYYY:s,YY:l(s),MM:l(a),M:a,DD:l(n),D:n,hh:l(o),h:o,mm:l(r),m:r,ss:l(c),s:c};return e.replace(/Y{2,4}|M{1,2}|D{1,2}|h{1,2}|m{1,2}|s{1,2}/g,t=>d[t]||t)}function a(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"day",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"YYYY年MM月DD日 hh:mm:ss",a=["minute","hour","day","week","month","year"],n=[1e3,6e4,36e5,864e5,6048e5,2592e6,31104e6],o=["秒前","分钟前","小时前","天前","周前","月前","年前"],r=Date.now()-t,c=0,l=n.length;c<l;c+=1){if(c+1===l||r<=n[c+1]){var d=Math.floor(r/n[c]);return 0===d?"刚刚":d+o[c]}if(e===a[c])return s(t,i)}return s(t,i)}function n(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hh:mm:ss",i=parseFloat(t)||0,s=[60,3600],a={60(t){return[0,0,t]},3600(t){var e=Math.floor(t/60);return[0,e,t-60*e]}},n=function(t){return"0".concat(t).slice(-2)},o={1(t){return t},2(t){return n(t)}},r=function(t,e,i){return e.replace(/(h+)(.?)(m+)(.?)(s+)/gi,(function(){for(var e=arguments.length,s=new Array(e),a=0;a<e;a++)s[a]=arguments[a];var n=Array.prototype.slice.call(s,1,6),o=0;return n.map((e,s)=>{var a;return s%2===0?(a=i[e.length](t[o]),o+=1,a):e}).join("").replace(/^(00:)/g,"")}))},c=[],l=0,d=s.length;l<d;l+=1)if(i<s[l])return r(a[s[l]](i),e,o);return c[0]=Math.floor(i/3600),c[1]=Math.floor((i-3600*c[0])/60),c[2]=i-3600*c[0]-60*c[1],r(c,e,o)}function o(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}},d3ea:function(t,e,i){"use strict";i.r(e),i.d(e,"shareMap",(function(){return s})),i.d(e,"dialogTrackMap",(function(){return a})),i.d(e,"faceTofaceRule",(function(){return n})),i.d(e,"video",(function(){return o})),i.d(e,"smsSuccessText",(function(){return r}));var s={qq:[1,"QQ","QQ邀请","QQ好友"],wechat:[2,"微信","微信邀请","微信好友"],moments:[3,"朋友圈","朋友圈邀请","朋友圈"],face:[-1,"面对面","面对面邀请","面对面分享"],sms:[-1,"短信","短信邀请","短信分享"]},a={remindNotice:"好友提醒师父弹窗",successNotice:"成功邀请弹窗",friendsRemind:"好友提醒分享弹窗"},n=['1. 好友使用微信扫描您的二维码，您可领到<span color="red">100-666</span>金币不等的随机红包，每日最高可领10次，同一微信好友只可领1次；',"2. 若好友（特指想看新用户）通过您的扫码链接下载想看并微信登录，只需连续三天每天认真阅读三条内容以上，您和好友均可领4元邀请奖励，首次邀请成功最高可得5元；","3. 若发现有不正当的手段刷金币行为，平台有权取消该用户已获得奖励并封号处理。"],o={url:"https://ts.market.mi-img.com/download/AppStore/018dac54db0264f8837323595f4a1a97c7450101e",poster:"https://ts.market.mi-img.com/download/AppStore/042185f767a5f7aa7d1376056b7c4c7cc0e4061a8",CSStyle:{width:"100vw",height:"172vw"}},r=["好友通过链接安装想看",'微信登录并<span style="color:#fa4137">绑定手机号</span>','每天认真阅读，各得<span style="color:#fa4137">4元现金</span>']},e590:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{class:"nav-bar "+(t.hairline?"Hairline Hairline_bottom":"")},[i("i",{class:[t.customBack?"nav-bar_backWhite":"nav-bar__back"],on:{click:t.backHandler}}),i("h1",{staticClass:"nav-bar__title",style:t.customTitleStyle},[t._v(t._s(t.title))]),i("div",{staticClass:"nav-bar__info"},[t._t("default")],2)])},a=[],n=i("edb0"),o={name:"NavBar",props:{title:{type:String,default:""},hairline:{type:Boolean,default:!0},finishExecute:{type:Boolean,default:!1},clickBackHandler:{type:Function,default:null},webview:{type:Boolean,default:!0},customBack:{type:Boolean,default:!1},customTitleStyle:{type:Object,default:()=>({})}},methods:{backHandler(){this.clickBackHandler&&(this.clickBackHandler(),this.finishExecute)||(this.webview?Object(n["D"])():this.$router.go(-1))}}},r=o,c=(i("4fce"),i("2877")),l=Object(c["a"])(r,s,a,!1,null,"d8cf0938",null);e["a"]=l.exports},f11d:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"invitation"},[i("nav-bar",{ref:"nav-bar",staticClass:"title-bar",attrs:{title:"邀请好友"}},[i("span",{staticClass:"rule-btn",on:{click:function(e){return t.setDialog("rule")}}},[t._v("活动规则")])]),t.baseInfo.invitationCarousel&&t.baseInfo.invitationCarousel.length?i("van-swipe",{staticClass:"swipe",attrs:{autoplay:3e3,"show-indicators":!1,vertical:!0}},t._l(t.baseInfo.invitationCarousel,(function(e,s){return i("van-swipe-item",{key:s,staticClass:"swipe-item"},[t._v(" "+t._s(e.user)+"邀请了"+t._s(e.discipleNum)+"位好友，预计获得"+t._s(4*e.discipleNum)+"元现金 ")])})),1):t._e(),i("div",{staticClass:"content"},[i("div",{staticClass:"invite-btn scale-infinite",on:{click:function(e){return t.quickShare("0")}}}),t.baseInfo.invitationCode?i("div",{staticClass:"code Hairline Hairline_box"},[t._v("我的邀请码 "),i("span",{staticClass:"number"},[t._v(t._s(t.baseInfo.invitationCode))]),i("span",{staticClass:"copy",on:{click:t.copyCode}},[t._v("点击复制")])]):t._e(),t.discipleList.length?i("div",{ref:"friends-list",staticClass:"income"},[i("h2",[t._v("我的邀请收益")]),t._m(0),i("van-list",{attrs:{finished:t.finished},on:{load:t.getMyfriends},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.discipleList,(function(e,s){return i("div",{key:s,staticClass:"disciple"},[i("div",{staticClass:"user"},[t._v(" "+t._s(e.discipleInfo.discipleUserInfo.nickname)+" ")]),1!==e.taskInfo.status?i("div",{staticClass:"day"},[t._v(" 第"),i("span",[t._v(t._s(e.taskInfo.currentDay))]),t._v("天")]):i("div",{staticClass:"day"},[i("span",[t._v("第"+t._s(e.taskInfo.currentDay)+"天未完成")])]),i("div",{staticClass:"money"},[i("span",[t._v(" ￥"+t._s(e.taskInfo.currentAward/100)+" ")])]),i("div",[i("span",{class:{action:!0,active:1===e.taskInfo.status},on:{click:function(i){return t.setDialog(1===e.taskInfo.status?"friendsRemind":"")}}},[t._v(t._s(e.taskInfo.statusText))])])])})),0)],1):t._e(),i("div",{staticClass:"lucky"},[i("h2",[t._v("如何快速获得奖励")]),t._m(1),i("h2",[t._v("我的奖励")]),t.baseInfo.taskDescription.awardCashList.length?i("div",{staticClass:"task"},[t._l(t.baseInfo.taskDescription.awardCashList,(function(e,s){return i("div",{key:s},[t._v(" 第"+t._s(t.day[s])+"天 "),i("p",{staticClass:"task-text"},[t._v(t._s(e)),i("i",[t._v("元")])])])})),t._m(2)],2):t._e(),i("p",[t._v(t._s(t.baseInfo.taskDescription.taskDesc))])]),0===t.discipleList.length?i("div",{staticClass:"income"},[i("h2",[t._v("我的邀请收益")]),i("p",[t._v("暂无收益")]),i("div",{staticClass:"income__btn",on:{click:function(e){return t.quickShare("1")}}},[t._v("马上邀请")])]):t._e(),i("div",{staticClass:"tips"},[i("h2",[t._v("财运锦囊")]),t._l(t.baseInfo.invitationTips,(function(e,s){return i("p",{key:s},[t._v(t._s(s+1+"."+e))])})),i("div",{staticClass:"teach"},[i("b",{on:{click:function(e){return t.watchVideo()}}},[t._v("观看视频教程领100金币>")])])],2)]),t.channels.length?i("share-bar",{staticClass:"share-bar",attrs:{channels:t.channels},on:{share:t.share}}):t._e(),i("gray-mask",{attrs:{show:t.moreInvite}},[i("div",{staticClass:"more-invite"},[i("div",{staticClass:"more-invite__close",on:{click:t.closeMoreInvite}}),i("div",{staticClass:"more-invite-btn",on:{click:function(e){return t.share("wechat",!0)}}},[t._v(" （"+t._s(t.moreInviteCount)+"/3） ")])])]),i("gray-mask",{staticClass:"video-container",attrs:{show:t.showVideo}},[i("div",{staticClass:"teach-video-title"},[i("div",{staticClass:"teach-video-title__back",on:{click:function(e){return t.setShowVideo(!1)}}}),t._v(" 邀请码视频教程 ")]),i("mi-video",{staticClass:"teach-video",attrs:{"video-url":t.baseInfo.config.videoUrl,poster:t.baseInfo.config.videoPoster,duration:0,"c-s-style":t.config.video.CSStyle}})],1),i("invi-dialog",{directives:[{name:"show",rawName:"v-show",value:"successNotice"===t.dialog,expression:"dialog === 'successNotice'"}],attrs:{title:"邀请成功通知",content:t.baseInfo.inviteSuccessPopText,"btn-text":"立即查看"},on:{btnClick:function(e){return t.toFriendsList("successNotice")},close:function(e){return t.setDialog("")}}}),i("invi-dialog",{directives:[{name:"show",rawName:"v-show",value:"remindNotice"===t.dialog,expression:"dialog === 'remindNotice'"}],attrs:{title:"好友提醒通知",content:t.baseInfo.inviteRemindPopText,"btn-text":"立即查看及提醒"},on:{btnClick:function(e){return t.toFriendsList("remindNotice")},close:function(e){return t.setDialog("")}}}),i("invi-dialog",{directives:[{name:"show",rawName:"v-show",value:"friendsRemind"===t.dialog,expression:"dialog === 'friendsRemind'"}],attrs:{title:"好友提醒",content:t.baseInfo.inviteRemindPopTextSpecial},on:{close:function(e){return t.setDialog("")}}},[i("share-bar",{staticClass:"friends-share",attrs:{channels:["wechat","qq"]},on:{share:t.wakeUp}})],1),i("invi-dialog",{directives:[{name:"show",rawName:"v-show",value:"rule"===t.dialog,expression:"dialog === 'rule'"}],staticClass:"rule",attrs:{title:"活动规则"},on:{close:function(e){return t.setDialog("")}}},[i("div",{staticClass:"rule-container"},[i("div",{ref:"rule-content"},[t._l(t.baseInfo.ruleDescription,(function(e,s){return i("p",{key:s,staticClass:"rule-row"},[t._v(t._s(s+1)+"."+t._s(e))])})),i("p",{staticClass:"rule-bottom"},[t._v("最终解释权归想看所有")])],2)])])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"income-title"},[i("div",{staticClass:"user"},[t._v("好友姓名")]),i("div",{staticClass:"day"},[t._v("当前阶段")]),i("div",{staticClass:"money"},[t._v("当前收益")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"way"},[i("div",[i("p",[t._v("点击按钮")]),i("p",[t._v("分享给好友")])]),i("div",[i("p",[t._v("好友下载")]),i("p",[t._v("安装想看")])]),i("div",[i("p",[t._v("好友登录阅读")]),i("p",[t._v("各得4元")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v("首次邀请"),i("p",{staticClass:"task-text"},[t._v("1"),i("i",[t._v("元")])])])}];i("e260"),i("fb6a"),i("ddb0"),i("25f0"),i("1276");class n{constructor(t){this.props=t,this.checkParams(t),this.startY=0,this.moveEndY=0,this.oldMoveY=0,this.offsetSum=0,this.curDistance=0,this.init()}checkParams(){var t=["Dom","slider"],e=["moveTopLimit","moveBottomLimit","modifyTopLimit","modifyBottomLimit"];t.forEach(t=>{if(!this.props[t])throw new Error("".concat(t,"传参错误，请检查之后重试"))}),e.forEach(t=>{if(void 0===this.props[t]||"[object Number]"!==Object.prototype.toString.call(this.props[t])&&"[object String]"!==Object.prototype.toString.call(this.props[t]))throw new Error("".concat(t,"传参错误，请传入数字或者字符类型的数字"))})}init(){this.Dom=this.props.Dom,this.slider=this.props.slider,this.moveTopLimit=parseInt(this.props.moveTopLimit,10)||0,this.moveBottomLimit=parseInt(this.props.moveBottomLimit,10)||0,this.modifyTopLimit=parseInt(this.props.modifyTopLimit,10)||0,this.modifyBottomLimit=parseInt(this.props.modifyBottomLimit,10)||0,this.addListenerWheel()}addListenerWheel(){this.Dom.addEventListener("touchstart",t=>{this.touchStart(t)}),this.Dom.addEventListener("touchmove",t=>{this.touchMove(t)}),this.Dom.addEventListener("touchend",t=>{this.touchEnd(t)})}touchStart(t){this.startY=parseInt(t.touches[0].clientY,10),this.oldMoveY=this.startY}touchMove(t){t.targetTouches.length>1||t.scale&&1!==t.scale||(t.preventDefault(),this.moveY=t.touches[0].clientY,this.offset=this.moveY-this.oldMoveY,this.getCurDistance(),this.offsetSum=this.offset+this.curDistance,this.offsetSum>0?this.offsetSum=Math.min(this.offsetSum,this.moveTopLimit):this.offsetSum<0&&(this.offsetSum=Math.max(this.offsetSum,this.moveBottomLimit)),this.oldMoveY=this.moveY,this.movePosition(this.offsetSum))}touchEnd(t){this.moveEndY=parseInt(t.changedTouches[0].clientY,10),this.offset=this.moveEndY-this.startY,this.getCurDistance(),this.offsetSum=this.offset+this.curDistance}getCurDistance(){this.slider.style.transform?this.curDistance=parseInt(this.slider.style.transform.split(",")[1],10)||0:this.curDistance=parseInt(this.slider.style.webkitTransform.split(",")[1],10)||0}movePosition(t){this.slider.style.webkitTransform="translate3d(0,".concat(t,"px, 0)"),this.slider.style.transform="translate3d(0,".concat(t,"px, 0)")}modifyPosition(t){t>this.modifyTopLimit?(this.curDistance=this.modifyTopLimit,this.movePosition(this.modifyTopLimit)):t<this.modifyBottomLimit&&(this.curDistance=this.modifyBottomLimit,this.movePosition(this.modifyBottomLimit))}}var o=i("e590"),r=i("84bd"),c=i("9039"),l=i("a1ba"),d=i("b7d5"),h=i("edb0"),u=i("5962"),f=i("6b43"),v=i("cadb"),m=i("db49"),p=i("42a5"),b=i("c36a"),_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Dialog",{attrs:{show:t.showDialog,outsideClose:!0},on:{"update:show":function(e){t.showDialog=e}}},[i("h3",[t._v(t._s(t.title))]),t.content?i("p",{domProps:{innerHTML:t._s(t.content)}}):t._e(),t._t("default",[i("div",{staticClass:"btn",on:{click:t.btnClickHandler}},[t._v(t._s(t.btnText))])])],2)},g=[],y={name:"InvitationDialog",components:{Dialog:c["a"]},props:{title:{type:String,required:!0},content:{type:String,default:""},btnText:{type:String,default:"立即查看"}},data(){return{showDialog:!0}},watch:{showDialog(t){t||(this.$emit("close",!1),this.showDialog=!0)}},methods:{btnClickHandler(){this.$emit("btnClick")}}},k=y,C=(i("06bb"),i("2877")),w=Object(C["a"])(k,_,g,!1,null,"5ce60f91",null),I=w.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"share"},t._l(t.channels,(function(e){return i("div",{key:e,class:e,on:{click:function(i){return t.share(e)}}},[t._v(" "+t._s(t.config.shareMap[e][2])+" ")])})),0)},j=[],S=i("d3ea"),L={name:"ShareBar",props:{channels:{type:Array,default:()=>[]}},data(){return{config:S}},methods:{share(t){this.$o2o({e_c:"邀请码",e_a:"点击",e_n:"邀请码分享",e_x:{platform:S["shareMap"][t][3]}}),this.$emit("share",t)}}},T=L,M=(i("9343"),Object(C["a"])(T,D,j,!1,null,"7e83eba2",null)),O=M.exports,x={name:"Invite",components:{NavBar:o["a"],ShareBar:O,InviDialog:I,Dialog:c["a"],GrayMask:l["a"],MiVideo:r["a"]},data(){return{page:1,config:S,swipeLIst:[],steps:[],dialog:"",baseInfo:{shareInfos:[],taskDescription:{awardCashList:[]},myFriendsDefaultText:[],config:{videoUrl:"",videoPoster:""}},discipleList:[],loading:!0,finished:!1,isTrackRemindBtn:!1,rootConfig:m["a"],day:["一","二","三","四","五","六","七"],moreInvite:!1,moreInviteCount:1,showVideo:!1,isFirstOpenRule:!0}},computed:{channels(){var t=this.baseInfo.shareInfos.map(t=>t.type);return t.length?[t[0],"face","sms",...t.slice(1)]:[]}},created(){Object(d["c"])({}).then(t=>{200===t.data.status?(this.baseInfo=t.data.data,this.baseInfo.inviteSuccessPopText?this.setDialog("successNotice"):this.baseInfo.inviteRemindPopText&&this.setDialog("remindNotice"),Object(f["f"])("shareInfo",JSON.stringify(this.baseInfo.shareInfos)),this.$o2o({e_c:"邀请码",e_a:"曝光",e_n:"邀请码详情页曝光",e_x:{login:this.baseInfo.invitationCode?1:0}})):this.$error(),this.$root.hidePlaceholder()}).catch(()=>{this.$error(),this.$root.hidePlaceholder()}),this.$root.hidePlaceholder(),this.getMyfriends(),Object(p["a"])("backKey",this.backKeyHandler),this.userInfo=Object(h["t"])(),this.moreInviteCount=Object(f["a"])("lastMoreInviteday")===Object(v["b"])(Date.now(),"YY-MM-DD")?4:1},destroyed(){Object(h["z"])(!1),Object(p["f"])("backKey",this.backKeyHandler)},methods:{setShowVideo(t){this.showVideo=t,Object(h["z"])(t),t&&this.$o2o({e_c:"邀请码",e_a:"点击",e_n:"观看视频教程"}),Object(h["E"])(t?"false":"true")},watchVideo(){this.setShowVideo(!0),Object(d["m"])().then(()=>{Object(h["H"])("100金币到账成功")})},quickShare(t){this.$o2o({e_c:"邀请码",e_a:"点击",e_n:"立即邀请按钮点击",e_x:{position:t}}),this.share("wechat")},share(t,e){if(this.baseInfo.invitationCode)if(1!==this.moreInviteCount||e||"wechat"!==t||setTimeout(()=>{this.moreInvite=!0,this.setDialog(""),Object(h["z"])(!0),Object(f["c"])("lastMoreInviteday",Object(v["b"])(Date.now(),"YY-MM-DD")),this.$o2o({e_c:"邀请码",e_a:"曝光",e_n:"微信分享引导弹窗",e_x:{count:1}})},1e3),e&&(this.$o2o({e_c:"邀请码",e_a:"点击",e_n:"微信分享引导弹窗",e_x:{count:this.moreInviteCount}}),3===this.moreInviteCount&&(Object(h["z"])(!1),this.moreInvite=!1),setTimeout(()=>{this.moreInviteCount+=1,this.moreInviteCount<4&&this.$o2o({e_c:"邀请码",e_a:"曝光",e_n:"微信分享引导弹窗",e_x:{count:this.moreInviteCount}})},1e3)),"face"!==t)if("sms"!==t){var i=this.baseInfo.shareInfos.filter(e=>e.type===t);if(i.length)if("wechat"===t){var s=i[0].shareUrl;Object(b["i"])("".concat(s,"&share=wechat"),this.baseInfo.invitationCode)}else Object(u["i"])(i[0].title,i[0].shareUrl,i[0].summary,i[0].imageUrl,S["shareMap"][t][0])}else this.$router.push({name:"SmsInvite",query:{shareId:this.baseInfo.invitationCode}});else this.$router.push({name:"invitationFace",query:{shareId:this.baseInfo.invitationCode}});else Object(h["h"])("location.reload")},copyCode(){this.$o2o({e_c:"邀请码",e_a:"点击",e_n:"邀请码复制点击",e_x:{page:"邀请码详情页"}}),!1!==Object(h["f"])(this.baseInfo.invitationCode)?Object(h["H"])("复制邀请码成功"):Object(h["H"])("复制邀请码失败")},setDialog(t){this.dialog=t,Object(h["z"])(""!==t),t?(document.body.addEventListener("touchmove",this.stopSlide,{passive:!1}),S["dialogTrackMap"][t]&&this.$o2o({e_c:"邀请码弹窗",e_a:"曝光",e_n:S["dialogTrackMap"][t]}),"friendsRemind"===t?this.$o2o({e_c:"邀请码",e_a:"点击",e_n:"去提醒按钮"}):"rule"===t&&this.$o2o({e_c:"邀请码",e_a:"点击",e_n:"活动规则按钮"}),"rule"===t&&this.isFirstOpenRule&&(this.$nextTick(this.addListenerWheel),this.isFirstOpenRule=!1)):document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1})},stopSlide(t){t.preventDefault()},wakeUp(t){var e=S["shareMap"][t][0],i="".concat(location.origin,"/mobile-v2/act/invitation/rouse?shareId=").concat(this.baseInfo.invitationCode),s={thumbUrl:m["a"].default.rectLogo,title:this.baseInfo.remindText.title,text:this.baseInfo.remindText.oldVersionDesc,url:i,socialType:e};if(this.$o2o({e_c:"邀请码弹窗",e_a:"点击",e_n:"好友提醒分享弹窗",e_x:{platform:S["shareMap"][t][3]}}),2===e)try{window.miui.shareText("".concat(this.baseInfo.remindText.newVersionDesc).concat(i),e)}catch(a){Object(u["k"])(s)}else Object(u["k"])(s);this.setDialog("")},toFriendsList(t){this.$o2o({e_c:"邀请码弹窗",e_a:"点击",e_n:S["dialogTrackMap"][t]}),window.scrollTo(0,this.$refs["friends-list"].offsetTop-this.$refs["nav-bar"].offsetHeight),this.setDialog("")},getMyfriends(){this.loading=!0,Object(d["d"])({page:this.page}).then(t=>{200===t.data.status?(this.page+=1,this.discipleList=this.discipleList.concat(t.data.data.discipleList),this.finished=this.discipleList.length===t.data.data.discipleCount,!this.isTrackRemindBtn&&t.data.data.discipleList.some(t=>1===t.taskInfo.status)&&this.$o2o({e_c:"邀请码",e_a:"曝光",e_n:"去提醒按钮"}),this.loading=!1):this.$error()}).catch(t=>{this.finished=!0,this.loading=!1,t&&t.response&&401===t.response.status||this.$error()})},closeMoreInvite(){this.moreInvite=!1,this.moreInviteCount=4,Object(h["z"])(!1)},backKeyHandler(){this.moreInvite?this.closeMoreInvite():this.showVideo?this.setShowVideo(!1):this.setDialog("")},addListenerWheel(){console.log(this.$refs["rule-content"].clientHeight),new n({Dom:this.$refs["rule-content"],slider:this.$refs["rule-content"],moveTopLimit:0,moveBottomLimit:380-this.$refs["rule-content"].clientHeight,modifyTopLimit:0,modifyBottomLimit:380-this.$refs["rule-content"].clientHeight})}}},$=x,P=(i("67d2"),Object(C["a"])($,s,a,!1,null,"21e12336",null));e["default"]=P.exports},fbf9:function(t,e,i){}}]);
//# sourceMappingURL=chunk-1de66aa7.f999e8db.js.map