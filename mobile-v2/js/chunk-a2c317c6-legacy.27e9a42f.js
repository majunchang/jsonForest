(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2c317c6"],{"11a7":function(e,t,a){"use strict";var r=a("c418"),o=a.n(r);o.a},"11d4":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"f",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return l})),a.d(t,"b",(function(){return s})),a.d(t,"e",(function(){return c})),a.d(t,"g",(function(){return u}));a("d3b7");var r=a("0c6d");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r["b"].get("/api/v4/promotion/home",e).then((function(e){return 200!==e.data.status?(Object(r["a"])(e),Promise.reject(e.data)):Promise.resolve(e.data.data)}))}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r["b"].post("/api/v4/promotion/create",e).then((function(e){return 200!==e.data.status?(Object(r["a"])(e),Promise.reject(e.data)):Promise.resolve(e.data.data)}))}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r["b"].get("/api/v4/promotion/disciple",e).then((function(e){return 200!==e.data.status?(Object(r["a"])(e),Promise.reject(e.data)):Promise.resolve(e.data.data)}))}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r["b"].get("/api/v4/promotion/bonus/page",e).then((function(e){return 200!==e.data.status?(Object(r["a"])(e),Promise.reject(e.data)):Promise.resolve(e.data.data)}))}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r["b"].get("/api/v4/promotion/bonus/detail",e).then((function(e){return 200!==e.data.status?(Object(r["a"])(e),Promise.reject(e.data)):Promise.resolve(e.data.data)}))}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r["b"].get("/api/v4/exchange/withdraw/promotion/page",e).then((function(e){return 200!==e.data.status?(Object(r["a"])(e),Promise.reject(e.data)):Promise.resolve(e.data.data)}))}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r["b"].post("/api/v4/exchange/withdraw/promotion",e).then((function(e){return 200!==e.data.status?(Object(r["a"])(e),Promise.reject(e.data)):Promise.resolve(e.data.data)}))}},"151a":function(e,t,a){},2392:function(e,t,a){"use strict";var r=a("43ce"),o=a.n(r);o.a},"2ac7":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input",{class:["feed-ui-input",e.error?"feed-ui-input-error":""],attrs:{disabled:e.disabled,placeholder:e.placeholder},domProps:{value:e.value},on:{input:e.inputMsg,blur:e.inputBlur}}),e.error?a("p",{staticClass:"feed-ui-input-error-msg"},[e._v(e._s(e.errorMsg))]):e._e()])},o=[],i=(a("99af"),a("a9e3"),function(e){var t=/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,a=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],r=[1,0,"X",9,8,7,6,5,4,3,2],o=e.substring(17);if(t.test(e)){for(var i=0,n=0;n<17;n++)i+=e[n]*a[n];if(r[i%11]==o.toUpperCase())return!0}return!1}),n=function(e){var t=/^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;if(t.test(e)){var a=e.substring(0,4),r=e.substring(4,6),o=e.substring(6,8),i=new Date(a+"-"+r+"-"+o);if(i&&i.getMonth()==parseInt(r)-1)return!0}return!1},l=function(e){var t=/^[1-9][0-9]/,a={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门"};return!(!t.test(e)||!a[e])};function s(e){if(i(e)){var t=e.substring(6,14);if(n(t)&&l(e.substring(0,2)))return!0}return!1}function c(e){return!!/^1[3|4|5|7|8]\d{9}$/.test(e)}var u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("textarea",{class:["feed-ui-textarea",e.error?"feed-ui-textarea-error":""],attrs:{disabled:e.disabled,placeholder:e.placeholder},domProps:{value:e.value},on:{input:e.textareaMsg,blur:e.textareaBlur}}),e._v(" "),e.error?a("p",{staticClass:"feed-ui-textarea-error-msg"},[e._v(e._s(e.errorMsg))]):e._e()])},d=[],f={},h={name:"fuiTextarea",props:{disabled:{type:Boolean,default:!1},label:{type:String,default:""},labelKey:{type:String,default:""},value:{type:[String,Number],required:!0,default:null},length:{type:Number,default:0},valiedateMessage:{type:String,default:""},type:{type:String,default:""},placeholder:{type:String,default:""},required:{type:Boolean,default:!1},hanleValidate:{type:Function},errorStatus:{type:Boolean,default:!1}},data:function(){return{error:!1,errorMsg:""}},watch:{errorStatus:function(e){this.error=e||!1},valiedateMessage:function(e){this.errorMsg=e||""}},methods:{textareaMsg:function(e){var t=e.target.value;this.validate(t),this.$emit("input",t)},textareaBlur:function(e){var t=e.target.value;if(this.hanleValidate){var a=this.hanleValidate(t);this.error=!a.validate,this.errorMsg=a.valiedateMessage}else switch(this.type){case"idNumber":s(t)||(this.error=!0,this.errorMsg=this.label?"".concat(this.label,"输入有误，请检查！"):"输入有误，请检查");break;case"phone":c(t)||(this.error=!0,this.errorMsg=this.label?"".concat(this.label,"输入有误，请检查！"):"输入有误，请检查");break;default:this.error=this.error,this.errorMsg=this.errorMsg}this.length&&t&&t.length<this.length&&(this.error=!0,this.errorMsg=this.label?"".concat(this.label,"输入不能少于").concat(this.length,"个字"):"输入不能少于".concat(this.length,"个字")),f={value:t,error:this.error,labelKey:this.labelKey},this.$emit("onBlur",f),this.$emit("getFieldsError",this.error,this.labelKey)},validate:function(e){if(!e&&this.required)return this.error=!0,void(this.errorMsg=this.label?"".concat(this.label,"输入不能为空"):"输入不能为空");this.error=!1}}},m=h,b=(a("11a7"),a("2877")),v=Object(b["a"])(m,u,d,!1,null,null,null),p=v.exports,g={},y={name:"fuiInput",props:{disabled:{type:Boolean,default:!1},label:{type:String,default:""},labelKey:{type:String,default:""},value:{type:[String,Number],required:!0,default:null},length:{type:Number,default:0},valiedateMessage:{type:String,default:""},type:{type:String,default:""},placeholder:{type:String,default:""},required:{type:Boolean,default:!1},hanleValidate:{type:Function},errorStatus:{type:Boolean,default:!1}},data:function(){return{error:!1,errorMsg:""}},watch:{errorStatus:function(e){this.error=e||!1},valiedateMessage:function(e){this.errorMsg=e||""}},methods:{inputMsg:function(e){var t=e.target.value;this.validate(t),this.$emit("input",t)},inputBlur:function(e){var t=e.target.value;if(this.hanleValidate){var a=this.hanleValidate(t);this.error=!a.validate,this.errorMsg=a.valiedateMessage}else switch(this.type){case"idNumber":s(t)||(this.error=!0,this.errorMsg=this.label?"".concat(this.label,"输入有误，请检查！"):"输入有误，请检查");break;case"phone":c(t)||(this.error=!0,this.errorMsg=this.label?"".concat(this.label,"输入有误，请检查！"):"输入有误，请检查");break;default:this.error=this.error,this.errorMsg=this.errorMsg}this.length&&t&&t.length<this.length&&(this.error=!0,this.errorMsg=this.label?"".concat(this.label,"输入不能少于").concat(this.length,"个字"):"输入不能少于".concat(this.length,"个字")),g={value:t,error:this.error,labelKey:this.labelKey},this.$emit("onBlur",g),this.$emit("getFieldsError",this.error,this.labelKey)},validate:function(e){if(!e&&this.required)return this.error=!0,void(this.errorMsg=this.label?"".concat(this.label,"输入不能为空"):"输入不能为空");this.error=!1}}};y.fuiTextarea=p;var j=y,_=j,k=(a("2392"),Object(b["a"])(_,r,o,!1,null,null,null));t["a"]=k.exports},"43ce":function(e,t,a){},"4fce":function(e,t,a){"use strict";var r=a("151a"),o=a.n(r);o.a},6284:function(e,t,a){"use strict";var r=a("b7b0"),o=a.n(r);o.a},"7db0":function(e,t,a){"use strict";var r=a("23e7"),o=a("b727").find,i=a("44d2"),n=a("ae40"),l="find",s=!0,c=n(l);l in[]&&Array(1)[l]((function(){s=!1})),r({target:"Array",proto:!0,forced:s||!c},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i(l)},"91e4":function(e,t,a){"use strict";var r={title:"加入平台一起分红",content:"地推合伙人平台，为大家提供一个创收的机会 。通过完成平台任务（如推荐朋友下载应用，完成网络购物等） ，每月获得千元分红奖励。这是一个通过自己努力和人脉去实现梦想的平台，尊重每个人的梦想，也希望生活因平台更美好。"},o={title:"那些人适合加入平台",content:[{title:"手机店员",avatar:"https://ts.market.mi-img.com/download/Browser/9b2e83566d12f59b7e3e3dd6d266999e8d221d33/1.png",content:"我有线下的门店资源，可以推荐买我手机的朋友安装app、下单体验，也希望通过这个平台实现自己第一台车的目标"},{title:"超市老板",avatar:"https://ts.market.mi-img.com/download/Browser/721a917efcc623fcf86ca7bc7571df13e3b25bb3/1.png",content:"平时来超市的人很多，跟大家也很熟，通过让朋友下载APP送一个小礼物的形式，获得平台的补贴，还能长期分红，希望可以开第二家超市。"},{title:"宝妈",avatar:"https://ts.market.mi-img.com/download/Browser/9440a284b40564a2801786fec24ed5bab888c4cf/1.png",content:"我是一名宝妈，现在在家带孩子，丈夫一个人在工作，希望可以通过自己的人脉在平台赚取孩子的奶粉钱。"}]},i={title:"合伙人要求",example:"举个例子，如果我们的任务是，邀请周围人下载应用 ，那么：",content:["需要找到周围能下载应用的人，如周围的亲属，广场舞的小伙伴等。","为了梦想肯吃苦，平台会提供方法和素材帮助大家更好完成推广任务","认可合伙人平台，平台每月月底发分红，如果发信作弊等行为平台会取消合伙人身份并永不再录用"]},n="感谢你对平台的认可，填写完个人资料，我们工作人员会在7个工作日内给出反馈，可以添加小助手的微信：xkan007，方便后续咨询",l={url:"http://t1.market.xiaomi.com/download/Browser/085894caa60fa8cddcd17fc9786e16e754e400e75/1.mp4",src:"http://t1.market.xiaomi.com/download/Browser/09525e585eff1436f1f654ac0fe2c10acd2322cee/1.png",poster:"http://t1.market.xiaomi.com/download/Browser/0158954aae04a4cd50d177c97e3e17e55cfdf6708/1.png",CSStyle:{width:"100vw",height:"100vh",position:"fixed",top:0,left:0}};t["a"]={dividend:r,suitPeople:o,partnerRequest:i,joinRemind:n,video:l}},b0c0:function(e,t,a){var r=a("83ab"),o=a("9bf2").f,i=Function.prototype,n=i.toString,l=/^\s*function ([^ (]*)/,s="name";!r||s in i||o(i,s,{configurable:!0,get:function(){try{return n.call(this).match(l)[1]}catch(e){return""}}})},b7b0:function(e,t,a){},c418:function(e,t,a){},e399:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"join"},[e.isShowNavbar()?a("nav-bar",{staticClass:"title-bar",attrs:{title:"资料填写",webview:!1,hairline:!1}}):e._e(),a("div",{staticClass:"form"},[a("div",{staticClass:"form-item"},[a("label",{attrs:{for:"name"}},[e._v("姓名:")]),a("fui-input",{attrs:{label:e.form.name.label,"label-key":e.form.name.labelKey,placeholder:e.form.name.placeholder,required:e.form.name.required,"valiedate-message":e.form.name.valiedateMessage,"error-status":e.form.name.errorStatus},on:{getFieldsError:e.errorCollect},model:{value:e.form.name.value,callback:function(t){e.$set(e.form.name,"value",t)},expression:"form.name.value"}})],1),a("div",{staticClass:"form-item"},[a("label",{attrs:{for:"telephone"}},[e._v("手机号:")]),a("fui-input",{attrs:{label:e.form.phone.label,"label-key":e.form.phone.labelKey,placeholder:e.form.phone.placeholder,required:e.form.phone.required,"valiedate-message":e.form.phone.valiedateMessage,"error-status":e.form.phone.errorStatus,"hanle-validate":e.hanleValidate},on:{getFieldsError:e.errorCollect},model:{value:e.form.phone.value,callback:function(t){e.$set(e.form.phone,"value",t)},expression:"form.phone.value"}})],1),a("div",{staticClass:"form-item"},[a("label",{attrs:{for:"job"}},[e._v("职业:")]),a("div",{class:["select",e.form.job.value?"":"select-disabled",e.form.job.errorStatus?"feed-item-select-error":""],on:{click:e.showAction}},[e._v(" "+e._s(e.form.job.value||"请选择职业")+" ")]),e.form.job.errorStatus?a("p",{staticClass:"feed-item-select-error-msg"},[e._v(e._s(e.form.job.valiedateMessage))]):e._e(),a("van-actionsheet",{attrs:{"cancel-text":"取消",actions:e.form.job.actions},on:{cancel:e.onCancel,select:e.onSelect},model:{value:e.form.job.show,callback:function(t){e.$set(e.form.job,"show",t)},expression:"form.job.show"}})],1),a("div",{staticClass:"form-item"},[a("label",{attrs:{for:"telephone"}},[e._v("我的梦想:")]),a("fui-textarea",{attrs:{label:e.form.dream.label,"label-key":e.form.dream.labelKey,placeholder:e.form.dream.placeholder,required:e.form.dream.required,"valiedate-message":e.form.dream.valiedateMessage,"error-status":e.form.dream.errorStatus},on:{getFieldsError:e.errorCollect},model:{value:e.form.dream.value,callback:function(t){e.$set(e.form.dream,"value",t)},expression:"form.dream.value"}})],1),a("div",{staticClass:"form-item"},[a("label",{attrs:{for:"telephone"}},[e._v("合伙人宣言:")]),a("fui-textarea",{attrs:{label:e.form.declaration.label,"label-key":e.form.declaration.labelKey,placeholder:e.form.declaration.placeholder,length:e.form.declaration.length,required:e.form.declaration.required,"valiedate-message":e.form.declaration.valiedateMessage,"error-status":e.form.declaration.errorStatus},on:{getFieldsError:e.errorCollect},model:{value:e.form.declaration.value,callback:function(t){e.$set(e.form.declaration,"value",t)},expression:"form.declaration.value"}})],1)]),a("div",{staticClass:"join-tip"},[a("div",{staticClass:"join-tip-title"},[e._v(" 温馨提示: ")]),a("div",{staticClass:"join-tip-content"},[e._v(" "+e._s(e.joinRemind)+" ")])]),a("div",{staticClass:"join-footer"},[a("div",{staticClass:"join-footer-btn",on:{click:e.check}},[e._v(" 立即提交 ")])])],1)},o=[],i=(a("7db0"),a("4160"),a("b0c0"),a("b64b"),a("ac1f"),a("5319"),a("159b"),a("e590")),n=a("685a"),l=a("11d4"),s=a("edb0"),c=a("42a5"),u=a("2ac7"),d=a("91e4"),f=u["a"].fuiTextarea,h={name:"JoinPartner",components:{fuiInput:u["a"],fuiTextarea:f,NavBar:i["a"]},data:function(){return{form:{name:{label:"姓名",labelKey:"name",placeholder:"请填写真实姓名",value:"",required:!0,errorStatus:!1,valiedateMessage:"输入不能为空"},phone:{label:"手机号",labelKey:"phone",placeholder:"请填写常用手机号码",value:"",required:!0,errorStatus:!1,valiedateMessage:"输入不能为空"},job:{show:!1,value:"",actions:[{name:"超市老板"},{name:"手机店老板"},{name:"退休职工"},{name:"自由职业"},{name:"学生"},{name:"宝妈"},{name:"务农"},{name:"其他"}],label:"职业",labelKey:"job",errorStatus:!1,valiedateMessage:"输入不能为空"},dream:{label:"我的梦想",labelKey:"dream",placeholder:"小目标还是要有的，万一平台帮你实现了呢~",value:"",required:!0,errorStatus:!1,valiedateMessage:"输入不能为空"},declaration:{label:"合伙人宣言",labelKey:"declaration",placeholder:"请介绍一下自己，不少于50字",length:50,value:"",required:!0,errorStatus:!1,valiedateMessage:"输入不能为空"}},joinRemind:d["a"].joinRemind}},created:function(){this.$root.hidePlaceholder(),this.$o2o({e_c:"申请页曝光",e_a:"曝光",e_n:"地推合伙人平台"}),Object(s["z"])(!0),Object(c["a"])("backKey",this.backKeyHandler)},destroyed:function(){Object(s["z"])(!1),Object(c["f"])("backKey",this.backKeyHandler)},methods:{isShowNavbar:function(){return Object(n["g"])()},showAction:function(){this.form.job.show=!0},backKeyHandler:function(){this.$router.go(-1)},hanleValidate:function(e){return/^1[0-9]{10}$/.test(e)?{validate:!0,valiedateMessage:""}:{validate:!1,valiedateMessage:"手机号输入有误！"}},check:function(){var e=this,t=Object.keys(this.form);t.forEach((function(t){e.form[t].value||(e.form[t].errorStatus=!0,e.form[t].valiedateMessage="".concat(e.form[t].label,"输入不能为空"))})),t.find((function(t){return!0===e.form[t].errorStatus}))||this.submit()},submit:function(){var e=this;this.$o2o({e_c:"立即提交申请",e_a:"点击",e_n:"地推合伙人平台"});var t={name:this.form.name.value,telephone:this.form.phone.value,career:this.form.job.value,dream:this.form.dream.value,manifesto:this.form.declaration.value,id:0};Object(l["f"])(t).then((function(t){e.$router.replace({path:"/act/partner",query:{inviteNo:t}})})).catch((function(e){Object(s["H"])(e.msg||"内部错误")}))},errorCollect:function(e,t){this.form[t].errorStatus=e},onSelect:function(e){this.form.job.value=e.name,this.form.job.errorStatus=!1,this.form.job.show=!1},onCancel:function(){this.form.job.show=!1}}},m=h,b=(a("6284"),a("2877")),v=Object(b["a"])(m,r,o,!1,null,"31c4d01e",null);t["default"]=v.exports},e590:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{class:"nav-bar "+(e.hairline?"Hairline Hairline_bottom":"")},[a("i",{class:[e.customBack?"nav-bar_backWhite":"nav-bar__back"],on:{click:e.backHandler}}),a("h1",{staticClass:"nav-bar__title",style:e.customTitleStyle},[e._v(e._s(e.title))]),a("div",{staticClass:"nav-bar__info"},[e._t("default")],2)])},o=[],i=a("edb0"),n={name:"NavBar",props:{title:{type:String,default:""},hairline:{type:Boolean,default:!0},finishExecute:{type:Boolean,default:!1},clickBackHandler:{type:Function,default:null},webview:{type:Boolean,default:!0},customBack:{type:Boolean,default:!1},customTitleStyle:{type:Object,default:function(){return{}}}},methods:{backHandler:function(){this.clickBackHandler&&(this.clickBackHandler(),this.finishExecute)||(this.webview?Object(i["D"])():this.$router.go(-1))}}},l=n,s=(a("4fce"),a("2877")),c=Object(s["a"])(l,r,o,!1,null,"d8cf0938",null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-a2c317c6-legacy.27e9a42f.js.map