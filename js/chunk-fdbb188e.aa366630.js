(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fdbb188e"],{"11e0":function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"new-prom"},[t("Header",{attrs:{msg:e.pageTitle,leftText:"推广链接",back:!0,goToURL:"PushLink"}}),t("van-cell-group",{staticClass:"new-prom-acc"},[t("div",{staticClass:"new-prom-items"},[t("van-field",{staticClass:"new-prom-text-input new-prom-item-value",attrs:{label:"推广域名:",placeholder:"本站"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("div",{staticClass:"new-prom-items"},[t("van-field",{staticClass:"new-prom-text-input new-prom-item-value",attrs:{label:"用户类型:",placeholder:"代理"},on:{click:function(a){e.showUTPopup=!0}},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}})],1),t("div",{staticClass:"new-prom-items bonus-setting"},[e._v("奖金设定")]),t("div",{staticClass:"new-prom-items"},[t("van-field",{staticClass:"new-prom-text-input new-prom-item-value",attrs:{label:"设置奖金:",placeholder:"选择其他奖金组"},on:{click:function(a){e.showBGPopup=!0}},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1),t("div",{staticClass:"new-prom-items"},[t("van-field",{staticClass:"new-prom-text-input new-prom-item-value",attrs:{label:"设置体育返点:",placeholder:"选择其他返点比例"},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}})],1),t("div",{staticClass:"new-prom-items"},[t("van-field",{staticClass:"new-prom-text-input new-prom-item-value",attrs:{label:"设置第三方体育返点:",placeholder:"选择其他返点比例"},model:{value:e.value4,callback:function(a){e.value4=a},expression:"value4"}})],1),t("div",{staticClass:"new-prom-items"},[t("van-field",{staticClass:"new-prom-text-input new-prom-item-value",attrs:{label:"设置真人返点:",placeholder:"选择其他返点比例"},model:{value:e.value5,callback:function(a){e.value5=a},expression:"value5"}})],1),t("div",{staticClass:"new-prom-items"},[t("van-field",{staticClass:"new-prom-text-input new-prom-item-value",attrs:{label:"设置电子返点:",placeholder:"选择其他返点比例"},model:{value:e.value6,callback:function(a){e.value6=a},expression:"value6"}})],1),t("div",{staticClass:"new-prom-items"},[t("van-field",{staticClass:"new-prom-text-input new-prom-item-value",attrs:{label:"设置棋牌返点:",placeholder:"选择其他返点比例"},model:{value:e.value7,callback:function(a){e.value7=a},expression:"value7"}})],1),t("div",{staticClass:"new-prom-items"},[t("van-field",{staticClass:"new-prom-text-input new-prom-item-value",attrs:{label:"设置电竞返点",placeholder:"选择其他返点比例"},model:{value:e.value8,callback:function(a){e.value8=a},expression:"value8"}})],1),t("div",{staticClass:"new-prom-items"},[t("van-field",{staticClass:"new-prom-text-input new-prom-item-value",attrs:{label:"设置捕鱼返点",placeholder:"选择其他返点比例"},model:{value:e.value9,callback:function(a){e.value9=a},expression:"value9"}})],1)]),t("div",{staticClass:"note"},[e._v(" 奖金组一旦设定则无法再调, 请谨慎! ")]),t("van-button",{staticClass:"gen-prom",attrs:{size:"large"}},[e._v("生成链接")]),e.showUTPopup?t("UserTypePopup",{attrs:{isShow:e.showUTPopup},on:{"hide-popup":function(a){e.showUTPopup=!1}}}):e._e(),e.showBGPopup?t("BonusGroup",{attrs:{isShow:e.showBGPopup},on:{"hide-popup":function(a){e.showBGPopup=!1}}}):e._e()],1)},l=[],s=t("d4ec"),n=t("262e"),i=t("2caf"),u=t("9ab4"),p=t("60a3"),c=t("0418"),r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"ut-popup"},[t("van-popup",{style:{width:"70%"},on:{close:function(a){return e.hidePopOver()}},model:{value:e.showPopup,callback:function(a){e.showPopup=a},expression:"showPopup"}},[t("div",{staticClass:"pop-up-container"},[t("div",{staticClass:"popup-header"},[e._v(" 请选择用户类型 ")]),t("div",{staticClass:"popup-content"},[t("van-cell-group",[t("van-radio-group",{model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[t("van-radio",{attrs:{name:"1"}},[e._v("Radio 1")]),t("van-radio",{attrs:{name:"2"}},[e._v("Radio 2")])],1)],1)],1)])])],1)},v=[],d=t("bee2"),m=function(e){Object(n["a"])(t,e);var a=Object(i["a"])(t);function t(){var e;return Object(s["a"])(this,t),e=a.apply(this,arguments),e.showPopup="",e.radio="1",e}return Object(d["a"])(t,[{key:"mounted",value:function(){this.showPopup=this.isShow}},{key:"hidePopOver",value:function(){this.$emit("hide-popup",!1)}}]),t}(p["d"]);Object(u["a"])([Object(p["c"])({type:Boolean,default:!1})],m.prototype,"isShow",void 0),m=Object(u["a"])([Object(p["a"])({components:{}})],m);var w=m,h=w,b=(t("1e5a"),t("2877")),f=Object(b["a"])(h,r,v,!1,null,null,null),C=f.exports,x=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"bg-popup"},[t("van-popup",{style:{width:"70%"},on:{close:function(a){return e.hidePopOver()}},model:{value:e.showPopup,callback:function(a){e.showPopup=a},expression:"showPopup"}},[t("div",{staticClass:"pop-up-container"},[t("div",{staticClass:"popup-header"},[e._v(" 请选择奖金组 ")]),t("div",{staticClass:"popup-content"},[t("van-cell-group",[t("van-radio-group",{model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[t("van-radio",{attrs:{name:"1"}},[e._v("2.0%")]),t("van-radio",{attrs:{name:"2"}},[e._v("1.9%")]),t("van-radio",{attrs:{name:"3"}},[e._v("1.8%")]),t("van-radio",{attrs:{name:"4"}},[e._v("1.7%")]),t("van-radio",{attrs:{name:"5"}},[e._v("1.6%")])],1)],1)],1)])])],1)},O=[],P=function(e){Object(n["a"])(t,e);var a=Object(i["a"])(t);function t(){var e;return Object(s["a"])(this,t),e=a.apply(this,arguments),e.showPopup="",e.radio="1",e}return Object(d["a"])(t,[{key:"mounted",value:function(){this.showPopup=this.isShow}},{key:"hidePopOver",value:function(){this.$emit("hide-popup",!1)}}]),t}(p["d"]);Object(u["a"])([Object(p["c"])({type:Boolean,default:!1})],P.prototype,"isShow",void 0),P=Object(u["a"])([Object(p["a"])({components:{}})],P);var k=P,j=k,_=(t("9697"),Object(b["a"])(j,x,O,!1,null,null,null)),y=_.exports,g=function(e){Object(n["a"])(t,e);var a=Object(i["a"])(t);function t(){var e;return Object(s["a"])(this,t),e=a.apply(this,arguments),e.pageTitle="新建推广",e.showUTPopup=!1,e.showBGPopup=!1,e.value="",e.value1="",e.value2="",e.value3="",e.value4="",e.value5="",e.value6="",e.value7="",e.value8="",e.value9="",e}return t}(p["d"]);g=Object(u["a"])([Object(p["a"])({components:{Header:c["a"],UserTypePopup:C,BonusGroup:y}})],g);var T=g,B=T,U=(t("3ca8"),Object(b["a"])(B,o,l,!1,null,null,null));a["default"]=U.exports},"1e5a":function(e,a,t){"use strict";var o=t("910d"),l=t.n(o);l.a},"24b3":function(e,a,t){},"3ca8":function(e,a,t){"use strict";var o=t("24b3"),l=t.n(o);l.a},"910d":function(e,a,t){},9697:function(e,a,t){"use strict";var o=t("a018"),l=t.n(o);l.a},a018:function(e,a,t){}}]);
//# sourceMappingURL=chunk-fdbb188e.aa366630.js.map