(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ef4c91c"],{"3ac0":function(t,n,i){},"5cb5":function(t,n,i){"use strict";var s=i("e26e"),e=i.n(s);e.a},"951b":function(t,n,i){"use strict";i.r(n);var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"sign"},[i("div",{staticClass:"back",on:{click:t.handleBackClick}}),i("div",{staticClass:"content"},[i("div",{staticClass:"container list"},[i("div",{staticClass:"title"},[t._v("已签"),i("span",[t._v(t._s(t.signDays))]),t._v("/"+t._s(t.totalDays)+"天")]),i("sign-list",{attrs:{"sign-days":t.signDays,"sign-list":t.signList}})],1),i("div",{staticClass:"container rules"},[i("div",{staticClass:"title"},[t._v("签到规则")]),i("ul",t._l(t.rules,(function(n,s){return i("li",{key:s,domProps:{innerHTML:t._s(n)}})})),0)])]),i("div",{staticClass:"footer",on:{click:t.goInvite}})])},e=[],a=i("edb0"),c=i("2934"),r=(i("d3b7"),i("0c6d"));function o(){return r["b"].get("/api/v4/task/sign/data").then((function(t){return 200!==t.data.status?(Object(r["a"])(t),Promise.reject()):Promise.resolve(t.data.data)}))}var u="fe-config_sign-rules",l=["每日签到可领金币。","连续签到时间越长，金币越多。","签到每30天一周期。","断签后，将从第1天开始签到。"],d=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"sign-list"},t._l(t.signedList,(function(t,n){return i("sign-item",{key:n,attrs:{index:n,sign:t}})})),1)},f=[],g=(i("a9e3"),function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{class:["sign-item"]},[t.tomorrow?i("div",{staticClass:"tomorrow"},[t._v("明日领取")]):t._e(),i("div",{class:[t.type,{signed:t.signed}]},[t._v(t._s(t.award))]),i("div",{staticClass:"text"},[t._v(t._s(t.text))])])}),v=[],h={name:"SignItem",props:{index:{type:Number,default:0},sign:{type:Object,default:function(){return{}}}},computed:{award:function(){return this.sign.award||0},signed:function(){return!!this.sign.signed},tomorrow:function(){return!!this.sign.tomorrow},style:function(){return this.sign.style||0},type:function(){return this.style?"gift":"coin"},text:function(){return this.signed?"已签":"".concat(this.index+1,"天")}}},m=h,_=(i("f894"),i("2877")),p=Object(_["a"])(m,g,v,!1,null,"7de8ff97",null),b=p.exports,y={name:"SignList",components:{SignItem:b},props:{signDays:{type:Number,default:0},signList:{type:Array,default:function(){return[]}}},computed:{signedList:function(){var t=this.signDays,n=this.signList;if(!t||!n.length)return n;for(var i=0;i<=t;i+=1)i<t?n[i].signed=!0:n[i]&&(n[i].tomorrow=!0);return n}}},k=y,w=(i("5cb5"),Object(_["a"])(k,d,f,!1,null,"65f40a10",null)),C=w.exports,L={name:"Sign",components:{SignList:C},data:function(){return{signDays:0,signList:[],rules:[]}},created:function(){this.getSignInfo(),this.getRules(),this.$o2o({e_c:"任务",e_a:"曝光",e_n:"签到挑战页面曝光"}),this.$root.hidePlaceholder()},computed:{totalDays:function(){return this.signList?this.signList.length:30}},methods:{getSignInfo:function(){var t=this;o().then((function(n){t.signDays=n.signDays,t.signList=n.elements})).catch(this.$error)},getRules:function(){var t=this;Object(c["b"])({key:u}).then((function(n){t.rules=n.data})).catch((function(){t.rules=l}))},handleBackClick:function(){Object(a["D"])()},goInvite:function(){Object(a["B"])("/mobile-v2/act/invitation"),this.$o2o({e_c:"任务",e_a:"点击",e_n:"签到挑战页面点击邀请好友"})}}},D=L,j=(i("bdc9"),Object(_["a"])(D,s,e,!1,null,"12ff4462",null));n["default"]=j.exports},bdc9:function(t,n,i){"use strict";var s=i("ce58"),e=i.n(s);e.a},ce58:function(t,n,i){},e26e:function(t,n,i){},f894:function(t,n,i){"use strict";var s=i("3ac0"),e=i.n(s);e.a}}]);
//# sourceMappingURL=chunk-2ef4c91c-legacy.ffd57c80.js.map