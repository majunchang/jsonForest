(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1503d09f"],{1148:function(t,e,a){"use strict";var r=a("a691"),i=a("1d80");t.exports="".repeat||function(t){var e=String(i(this)),a="",s=r(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(a+=e);return a}},"11a7":function(t,e,a){"use strict";var r=a("c418"),i=a.n(r);i.a},"151a":function(t,e,a){},2392:function(t,e,a){"use strict";var r=a("43ce"),i=a.n(r);i.a},"2ac7":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("input",{class:["feed-ui-input",t.error?"feed-ui-input-error":""],attrs:{disabled:t.disabled,placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.inputMsg,blur:t.inputBlur}}),t.error?a("p",{staticClass:"feed-ui-input-error-msg"},[t._v(t._s(t.errorMsg))]):t._e()])},i=[],s=function(t){var e=/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,a=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],r=[1,0,"X",9,8,7,6,5,4,3,2],i=t.substring(17);if(e.test(t)){for(var s=0,n=0;n<17;n++)s+=t[n]*a[n];if(r[s%11]==i.toUpperCase())return!0}return!1},n=function(t){var e=/^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;if(e.test(t)){var a=t.substring(0,4),r=t.substring(4,6),i=t.substring(6,8),s=new Date(a+"-"+r+"-"+i);if(s&&s.getMonth()==parseInt(r)-1)return!0}return!1},o=function(t){var e=/^[1-9][0-9]/,a={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门"};return!(!e.test(t)||!a[t])};function l(t){if(s(t)){var e=t.substring(6,14);if(n(e)&&o(t.substring(0,2)))return!0}return!1}function c(t){return!!/^1[3|4|5|7|8]\d{9}$/.test(t)}var u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("textarea",{class:["feed-ui-textarea",t.error?"feed-ui-textarea-error":""],attrs:{disabled:t.disabled,placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.textareaMsg,blur:t.textareaBlur}}),t._v(" "),t.error?a("p",{staticClass:"feed-ui-textarea-error-msg"},[t._v(t._s(t.errorMsg))]):t._e()])},d=[],h={},f={name:"fuiTextarea",props:{disabled:{type:Boolean,default:!1},label:{type:String,default:""},labelKey:{type:String,default:""},value:{type:[String,Number],required:!0,default:null},length:{type:Number,default:0},valiedateMessage:{type:String,default:""},type:{type:String,default:""},placeholder:{type:String,default:""},required:{type:Boolean,default:!1},hanleValidate:{type:Function},errorStatus:{type:Boolean,default:!1}},data(){return{error:!1,errorMsg:""}},watch:{errorStatus(t){this.error=t||!1},valiedateMessage(t){this.errorMsg=t||""}},methods:{textareaMsg(t){var e=t.target.value;this.validate(e),this.$emit("input",e)},textareaBlur(t){var e=t.target.value;if(this.hanleValidate){var a=this.hanleValidate(e);this.error=!a.validate,this.errorMsg=a.valiedateMessage}else switch(this.type){case"idNumber":l(e)||(this.error=!0,this.errorMsg=this.label?"".concat(this.label,"输入有误，请检查！"):"输入有误，请检查");break;case"phone":c(e)||(this.error=!0,this.errorMsg=this.label?"".concat(this.label,"输入有误，请检查！"):"输入有误，请检查");break;default:this.error=this.error,this.errorMsg=this.errorMsg}this.length&&e&&e.length<this.length&&(this.error=!0,this.errorMsg=this.label?"".concat(this.label,"输入不能少于").concat(this.length,"个字"):"输入不能少于".concat(this.length,"个字")),h={value:e,error:this.error,labelKey:this.labelKey},this.$emit("onBlur",h),this.$emit("getFieldsError",this.error,this.labelKey)},validate(t){if(!t&&this.required)return this.error=!0,void(this.errorMsg=this.label?"".concat(this.label,"输入不能为空"):"输入不能为空");this.error=!1}}},v=f,p=(a("11a7"),a("2877")),g=Object(p["a"])(v,u,d,!1,null,null,null),b=g.exports,m={},_={name:"fuiInput",props:{disabled:{type:Boolean,default:!1},label:{type:String,default:""},labelKey:{type:String,default:""},value:{type:[String,Number],required:!0,default:null},length:{type:Number,default:0},valiedateMessage:{type:String,default:""},type:{type:String,default:""},placeholder:{type:String,default:""},required:{type:Boolean,default:!1},hanleValidate:{type:Function},errorStatus:{type:Boolean,default:!1}},data(){return{error:!1,errorMsg:""}},watch:{errorStatus(t){this.error=t||!1},valiedateMessage(t){this.errorMsg=t||""}},methods:{inputMsg(t){var e=t.target.value;this.validate(e),this.$emit("input",e)},inputBlur(t){var e=t.target.value;if(this.hanleValidate){var a=this.hanleValidate(e);this.error=!a.validate,this.errorMsg=a.valiedateMessage}else switch(this.type){case"idNumber":l(e)||(this.error=!0,this.errorMsg=this.label?"".concat(this.label,"输入有误，请检查！"):"输入有误，请检查");break;case"phone":c(e)||(this.error=!0,this.errorMsg=this.label?"".concat(this.label,"输入有误，请检查！"):"输入有误，请检查");break;default:this.error=this.error,this.errorMsg=this.errorMsg}this.length&&e&&e.length<this.length&&(this.error=!0,this.errorMsg=this.label?"".concat(this.label,"输入不能少于").concat(this.length,"个字"):"输入不能少于".concat(this.length,"个字")),m={value:e,error:this.error,labelKey:this.labelKey},this.$emit("onBlur",m),this.$emit("getFieldsError",this.error,this.labelKey)},validate(t){if(!t&&this.required)return this.error=!0,void(this.errorMsg=this.label?"".concat(this.label,"输入不能为空"):"输入不能为空");this.error=!1}}};_.fuiTextarea=b;var y=_,w=y,M=(a("2392"),Object(p["a"])(w,r,i,!1,null,null,null));e["a"]=M.exports},"366e":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:["button",{disabled:t.disabled}],style:t.customStyle,on:{click:t.clickHandler}},[t._t("default"),t._t("desc"),t.loading?a("div",{staticClass:"button__loading"}):t._e()],2)},i=[],s={name:"Button",props:{loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customStyle:{type:Object,default:()=>({})}},methods:{clickHandler(){this.disabled||this.$emit("click")}}},n=s,o=(a("f9ce"),a("2877")),l=Object(o["a"])(n,r,i,!1,null,"5da6ccb1",null);e["a"]=l.exports},"408a":function(t,e,a){var r=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},4214:function(t,e,a){"use strict";var r=a("bfef"),i=a.n(r);i.a},"43ce":function(t,e,a){},"4fce":function(t,e,a){"use strict";var r=a("151a"),i=a.n(r);i.a},5133:function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"g",(function(){return n})),a.d(e,"f",(function(){return o})),a.d(e,"a",(function(){return l})),a.d(e,"c",(function(){return c})),a.d(e,"e",(function(){return u})),a.d(e,"h",(function(){return h})),a.d(e,"b",(function(){return f}));a("b680"),a("cca6"),a("e6cf");var r=a("cadb"),i=a("0c6d");function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].get("/api/v4/exchange/withdraw/page",t).then(t=>200!==t.data.status?(Object(i["a"])(t),Promise.reject(t.data.data)):Promise.resolve(t.data.data))}function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].post("/api/v4/exchange/withdraw",t).then(t=>200!==t.data.status&&2e3!==t.data.status?(401!==t.data.status&&Object(i["a"])(t),Promise.reject(t.data)):Promise.resolve(t.data.data||t.data))}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].get("/api/v1/recharge/list",t)}function l(t){return i["b"].post("/api/v4/feedback/add",t).then(t=>200!==t.data.status?(Object(i["a"])(t),Promise.reject()):Promise.resolve(t.data.data))}function c(t){return i["b"].get("/api/v4/oauth/login/status",t).then(t=>200!==t.data.status?(Object(i["a"])(t),Promise.reject()):Promise.resolve(t.data.data))}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i["b"].get("/api/v4/withdraw/list",t)}function d(t){var{withdrawingRecord:e,recordList:a,nextPage:i}=t,s=t=>{var e={0:"话费充值",1:"微信提现"},a=e[t.withdrawType]||e[1],r=t.phoneNo?"".concat(a,"（").concat(t.phoneNo,"）"):a;return r},n=t=>(t.cash/100).toFixed(2),o={empty:!0};e&&(o={withdrawType:s(e),cash:n(e),applyTime:Object(r["b"])(e.createTime,"YYYY-MM-DD hh:mm"),releaseTime:Object(r["b"])(e.updateTime,"YYYY-MM-DD hh:mm"),progress:[{name:"已提交",finished:10===e.status},{name:"待审核",finished:10===e.status},{name:"审核通过",finished:20===e.status}]});var l=a.map(t=>Object.assign(t,{withdrawType:s(t),cash:n(t),applyTime:Object(r["b"])(t.createTime,"YYYY-MM-DD hh:mm")})),c={withdrawRecord:o,withdrawRecords:l,nextPage:i};return c}function h(t){if(200!==t.data.status)return Object(i["a"])(t),Promise.reject(t.data.data);var e=d(t.data.data);return e}function f(t){return i["b"].get("/api/v4/bubble",t).then(t=>200!==t.data.status?(Object(i["a"])(t),Promise.reject()):Promise.resolve(t.data.data))}},"5d4b":function(t,e,a){},"754e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"apply"},[a("nav-bar",{attrs:{title:"我要申诉"}}),a("div",{staticClass:"container"},[a("div",{staticClass:"item"},[t._m(0),a("fui-textarea",{attrs:{required:!0,length:5,"valiedate-message":"原因不能未空",placeholder:"请描述申请原因","hanle-validate":t.hanleValidate},model:{value:t.reanson,callback:function(e){t.reanson=e},expression:"reanson"}})],1),a("div",{staticClass:"item"},[a("div",{staticClass:"tip",on:{click:t.openTeachDialog}},[t._v(" 查看样例 ")]),t._m(1),t.photo?a("div",{staticClass:"photo"},[a("img",{staticClass:"photo__user",attrs:{src:t.photo.imageUrl},on:{click:t.openPhoto}}),a("div",{staticClass:"close",on:{click:t.cancalPhoto}})]):a("div",{staticClass:"photo__empty",on:{click:t.takePhoto}},[t._v("点击拍摄")])]),a("div",{staticClass:"item"},[t._m(2),a("fui-input",{attrs:{type:"phone"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1)]),a("div",{staticClass:"footer"},[a("button",{class:{actived:t.formReady},on:{click:t.submit}},[t._v("提交申诉")])]),a("gray-mask",{attrs:{show:t.dialog}},[a("Dialog",{attrs:{show:t.dialog,btnText:"我知道了",clickHandler:t.closeDialog},on:{"update:show":function(e){t.dialog=e}}},[a("h3",{staticClass:"dialog__title",attrs:{slot:"title"},slot:"title"},[t._v(" 已提交 ")]),a("div",{staticClass:"dialog__msg",attrs:{slot:"msg"},slot:"msg"},[a("p",[t._v("48小时内反馈申诉结果")]),a("p",[t._v("请注意查看")])])])],1),a("Dialog",{staticClass:"teach",attrs:{show:t.showTeach},on:{"update:show":function(e){t.showTeach=e}}},[a("div",{staticClass:"teach__box"},[a("div",{staticClass:"teach__top"}),a("div",{staticClass:"teach__content"},[a("div",{staticClass:"teach__person"}),a("div",{staticClass:"teach__mask"})]),a("div",{staticClass:"teach__bottom"},[a("div",{staticClass:"teach__finger"})])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("申诉原因"),a("span",[t._v("(必填)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("自拍认证"),a("span",[t._v("(必填)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("手机号码"),a("span",[t._v("(必填)")])])}],s=(a("fb6a"),a("e590")),n=a("2ac7"),o=a("a1ba"),l=a("42a5"),c=a("9039"),u=a("5133"),d=a("edb0"),h=n["a"].fuiTextarea,f={components:{NavBar:s["a"],fuiInput:n["a"],fuiTextarea:h,GrayMask:o["a"],Dialog:c["a"]},data(){return{reanson:"",tel:"",photo:!1,dialog:!1,showTeach:!1}},computed:{formReady(){return!!(this.reanson.length>4&&this.reanson.length<201&&11===this.tel.length&&this.photo)}},created(){this.$root.hidePlaceholder(),Object(l["a"])("backKey",this.backKeyHandler)},watch:{dialog(t){t||Object(d["D"])()},showTeach(t){Object(d["z"])(t)}},methods:{takePhoto(){window.withdrawTakePhotoCallBack=this.updatePhoto,Object(d["G"])("withdrawTakePhotoCallBack",()=>{Object(d["H"])("升级最新版APP才能使用该功能")})},openPhoto(){Object(d["H"])("暂未支持预览")},cancalPhoto(){this.photo=!1},updatePhoto(t){t?this.photo=t:Object(d["H"])("选取照片失败")},closeDialog(){this.dialog=!1},submit(){this.formReady&&Object(u["a"])({category:"申诉",type:"问题",phone:this.tel,imageInfo:JSON.stringify([this.photo]),content:this.reanson.slice(0,200)}).then(()=>{this.dialog=!0}).catch(()=>{Object(d["H"])("操作失败了，再试试")})},openTeachDialog(){this.showTeach=!0},backKeyHandler(){this.showTeach=!1},hanleValidate(t){return t.length>200?{validate:!1,valiedateMessage:"字数不能大于200字"}:{validate:!0,valiedateMessage:""}}}},v=f,p=(a("c49f"),a("2877")),g=Object(p["a"])(v,r,i,!1,null,"6e11cf2a",null);e["default"]=g.exports},9039:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.show?a("div",{staticClass:"dialog",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeHandler(e,"outside")}}},[a("div",{staticClass:"dialog__content"},[a("div",{staticClass:"dialog__close",on:{click:t.closeHandler}}),t._t("default",[a("div",{staticClass:"dialog__inner"},[t._t("icon"),a("div",{staticClass:"dialog__msg"},[t._t("title",[a("h1",{domProps:{innerHTML:t._s(t.title)}})]),t._t("msg",[a("p",{domProps:{innerHTML:t._s(t.msg)}})])],2),t._t("footer"),a("Button",{attrs:{customStyle:{width:"1.9rem",height:"0.43rem",fontSize:"0.16rem"}},on:{click:t.clickHandler}},[t._v(t._s(t.btnText))])],2)])],2)]):t._e()])},i=[],s=a("366e"),n={name:"Dialog",components:{Button:s["a"]},props:{show:{type:Boolean,default:!1},outsideClose:{type:Boolean,default:!0},title:{type:String,default:""},msg:{type:String,default:""},btnText:{type:String,default:""},clickHandler:{type:Function,default:()=>{}}},methods:{closeHandler(t,e){("outside"!==e||this.outsideClose)&&this.$emit("update:show",!1)}}},o=n,l=(a("4214"),a("2877")),c=Object(l["a"])(o,r,i,!1,null,"98be046a",null);e["a"]=c.exports},"994c":function(t,e,a){},9991:function(t,e,a){},a1ba:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._g({directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"gray-mask"},t.$listeners),[t._t("default")],2)},i=[],s={name:"GrayMask",props:{show:{type:[String,Boolean],default:""}},methods:{stopSlide(t){t.preventDefault()}},watch:{show:{handler(t){t?(console.log("禁止滑动"),document.body.addEventListener("touchmove",this.stopSlide,{passive:!1})):(console.log("可以滑动"),document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1}))},immediate:!0}},destroyed(){document.body.removeEventListener("touchmove",this.stopSlide,{passive:!1})}},n=s,o=(a("bccd"),a("2877")),l=Object(o["a"])(n,r,i,!1,null,"4cb2c41a",null);e["a"]=l.exports},b680:function(t,e,a){"use strict";var r=a("23e7"),i=a("a691"),s=a("408a"),n=a("1148"),o=a("d039"),l=1..toFixed,c=Math.floor,u=function(t,e,a){return 0===e?a:e%2===1?u(t,e-1,a*t):u(t*t,e/2,a)},d=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},h=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){l.call({})}));r({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,a,r,o,l=s(this),h=i(t),f=[0,0,0,0,0,0],v="",p="0",g=function(t,e){var a=-1,r=e;while(++a<6)r+=t*f[a],f[a]=r%1e7,r=c(r/1e7)},b=function(t){var e=6,a=0;while(--e>=0)a+=f[e],f[e]=c(a/t),a=a%t*1e7},m=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var a=String(f[t]);e=""===e?a:e+n.call("0",7-a.length)+a}return e};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(v="-",l=-l),l>1e-21)if(e=d(l*u(2,69,1))-69,a=e<0?l*u(2,-e,1):l/u(2,e,1),a*=4503599627370496,e=52-e,e>0){g(0,a),r=h;while(r>=7)g(1e7,0),r-=7;g(u(10,r,1),0),r=e-1;while(r>=23)b(1<<23),r-=23;b(1<<r),g(1,1),b(2),p=m()}else g(0,a),g(1<<-e,0),p=m()+n.call("0",h);return h>0?(o=p.length,p=v+(o<=h?"0."+n.call("0",h-o)+p:p.slice(0,o-h)+"."+p.slice(o-h))):p=v+p,p}})},bccd:function(t,e,a){"use strict";var r=a("9991"),i=a.n(r);i.a},bfef:function(t,e,a){},c418:function(t,e,a){},c49f:function(t,e,a){"use strict";var r=a("5d4b"),i=a.n(r);i.a},cadb:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return i})),a.d(e,"d",(function(){return s})),a.d(e,"c",(function(){return n}));a("fb6a"),a("5319");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY年MM月DD日 hh:mm:ss",a=new Date(t),r=a.getFullYear(),i=a.getMonth()+1,s=a.getDate(),n=a.getHours(),o=a.getMinutes(),l=a.getSeconds(),c=function(t){return"0".concat(t).slice(-2)},u={YYYY:r,YY:c(r),MM:c(i),M:i,DD:c(s),D:s,hh:c(n),h:n,mm:c(o),m:o,ss:c(l),s:l};return e.replace(/Y{2,4}|M{1,2}|D{1,2}|h{1,2}|m{1,2}|s{1,2}/g,t=>u[t]||t)}function i(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"day",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"YYYY年MM月DD日 hh:mm:ss",i=["minute","hour","day","week","month","year"],s=[1e3,6e4,36e5,864e5,6048e5,2592e6,31104e6],n=["秒前","分钟前","小时前","天前","周前","月前","年前"],o=Date.now()-t,l=0,c=s.length;l<c;l+=1){if(l+1===c||o<=s[l+1]){var u=Math.floor(o/s[l]);return 0===u?"刚刚":u+n[l]}if(e===i[l])return r(t,a)}return r(t,a)}function s(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hh:mm:ss",a=parseFloat(t)||0,r=[60,3600],i={60(t){return[0,0,t]},3600(t){var e=Math.floor(t/60);return[0,e,t-60*e]}},s=function(t){return"0".concat(t).slice(-2)},n={1(t){return t},2(t){return s(t)}},o=function(t,e,a){return e.replace(/(h+)(.?)(m+)(.?)(s+)/gi,(function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var s=Array.prototype.slice.call(r,1,6),n=0;return s.map((e,r)=>{var i;return r%2===0?(i=a[e.length](t[n]),n+=1,i):e}).join("").replace(/^(00:)/g,"")}))},l=[],c=0,u=r.length;c<u;c+=1)if(a<r[c])return o(i[r[c]](a),e,n);return l[0]=Math.floor(a/3600),l[1]=Math.floor((a-3600*l[0])/60),l[2]=a-3600*l[0]-60*l[1],o(l,e,n)}function n(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}},e590:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{class:"nav-bar "+(t.hairline?"Hairline Hairline_bottom":"")},[a("i",{class:[t.customBack?"nav-bar_backWhite":"nav-bar__back"],on:{click:t.backHandler}}),a("h1",{staticClass:"nav-bar__title",style:t.customTitleStyle},[t._v(t._s(t.title))]),a("div",{staticClass:"nav-bar__info"},[t._t("default")],2)])},i=[],s=a("edb0"),n={name:"NavBar",props:{title:{type:String,default:""},hairline:{type:Boolean,default:!0},finishExecute:{type:Boolean,default:!1},clickBackHandler:{type:Function,default:null},webview:{type:Boolean,default:!0},customBack:{type:Boolean,default:!1},customTitleStyle:{type:Object,default:()=>({})}},methods:{backHandler(){this.clickBackHandler&&(this.clickBackHandler(),this.finishExecute)||(this.webview?Object(s["D"])():this.$router.go(-1))}}},o=n,l=(a("4fce"),a("2877")),c=Object(l["a"])(o,r,i,!1,null,"d8cf0938",null);e["a"]=c.exports},f9ce:function(t,e,a){"use strict";var r=a("994c"),i=a.n(r);i.a}}]);
//# sourceMappingURL=chunk-1503d09f.5561a89d.js.map