(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28f2de23"],{"23d6":function(t,e,n){},a0dc:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dailyCheck"},[n("Header",{attrs:{msg:"每日签到",leftText:"返回",back:!0,HomePage:!1,rightText:""}}),n("van-calendar",{style:{height:"250px"},attrs:{title:"查看签到记录",poppable:!1,"show-confirm":!1,type:"range"},on:{confirm:t.onConfirm}}),n("div",{staticClass:"infoSelectDays"},[n("div",{staticClass:"title"},[n("p",[t._v("本月已经连续签到 "),n("span",[t._v(t._s(t.text)+" ")]),t._v(" 天！")])]),n("div",{staticClass:"content"},[n("van-button",{attrs:{type:"info"},on:{click:t.showEnregistrement}},[t._v("打卡签到")])],1)]),n("van-popup",{staticClass:"Enregistrement",attrs:{round:"",closeable:"","close-icon":"close"},model:{value:t.showEnregistre,callback:function(e){t.showEnregistre=e},expression:"showEnregistre"}},[n("div",{staticClass:"Enregistrement"},[n("h2",[t._v("text222")]),n("van-grid",{staticClass:"top_Enregistrement",attrs:{direction:"horizontal","column-num":3}},[n("van-grid-item",{attrs:{text:""},scopedSlots:t._u([{key:"text",fn:function(){return[n("p",[t._v("余额")]),n("h5",[t._v("1,174,917元")])]},proxy:!0}])}),n("van-grid-item",{attrs:{text:""},scopedSlots:t._u([{key:"text",fn:function(){return[n("p",[t._v("积分")]),n("h5",[t._v("22230分")])]},proxy:!0}])}),n("van-grid-item",{attrs:{text:""},scopedSlots:t._u([{key:"text",fn:function(){return[n("p",[t._v("连续签到次数")]),n("h5",[t._v("1次")])]},proxy:!0}])})],1),n("div",{staticClass:"Enregistrement_items"},[n("van-grid",{staticClass:"title_Enregistrement",attrs:{direction:"horizontal","column-num":3}},[n("van-grid-item",{attrs:{text:"签到日期"}}),n("van-grid-item",{attrs:{text:"连续签到天数"}}),n("van-grid-item",{attrs:{text:"积分奖励"}})],1),t._l(t.enregistrements,(function(e,a){return n("van-grid",{key:a,staticClass:"content_Enregistrement",attrs:{direction:"horizontal","column-num":3}},[n("van-list",{attrs:{finished:t.finished},on:{load:t.loadData},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("van-grid-item",{attrs:{text:""},scopedSlots:t._u([{key:"text",fn:function(){return[n("p",[t._v(t._s(e.date))]),n("p",[t._v(t._s(e.time))])]},proxy:!0}],null,!0)}),n("van-grid-item",{attrs:{text:e.day}}),n("van-grid-item",{attrs:{text:e.points}})],1)],1)}))],2)],1)])],1)},r=[];n("99af");function i(t){if(Array.isArray(t))return t}n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function s(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,r=!1,i=void 0;try{for(var s,o=t[Symbol.iterator]();!(a=(s=o.next()).done);a=!0)if(n.push(s.value),e&&n.length===e)break}catch(c){r=!0,i=c}finally{try{a||null==o["return"]||o["return"]()}finally{if(r)throw i}}return n}}var o=n("06c5");function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){return i(t)||s(t,e)||Object(o["a"])(t,e)||c()}var d=n("d4ec"),u=n("bee2"),f=n("262e"),v=n("2caf"),m=n("9ab4"),g=n("60a3"),h=n("0418"),p=function(t){Object(f["a"])(n,t);var e=Object(v["a"])(n);function n(){var t;return Object(d["a"])(this,n),t=e.apply(this,arguments),t.text=1,t.showEnregistre=!1,t.loading=!1,t.finished=!1,t.refreshing=!1,t.enregistrements=[],t}return Object(u["a"])(n,[{key:"loadData",value:function(){var t=this;setTimeout((function(){t.refreshing&&(t.enregistrements=[],t.refreshing=!1),t.enregistrements=[{date:"2020.08.14",time:"23:00:09",day:"004天",points:"1分"},{date:"2020.08.14",time:"23:00:09",day:"003天",points:"1分"},{date:"2020.08.14",time:"23:00:09",day:"002天",points:"1分"},{date:"2020.08.14",time:"23:00:09",day:"001天",points:"1分"}],console.log(t.enregistrements),t.loading=!1,t.finished=!0}),1e3)}},{key:"formatDate",value:function(t){return"".concat(t.getMonth()+1,"/").concat(t.getDate())}},{key:"showEnregistrement",value:function(){this.loadData(),this.showEnregistre=!0}},{key:"onConfirm",value:function(t){var e=l(t,2),n=e[0],a=e[1];this.date="".concat(this.formatDate(n)," - ").concat(this.formatDate(a));var r=a.getTime()-n.getTime(),i=r/864e5;this.text=i}}]),n}(g["d"]);p=Object(m["a"])([Object(g["a"])({components:{Header:h["a"]}})],p);var y=p,b=y,x=(n("ca9f"),n("2877")),_=Object(x["a"])(b,a,r,!1,null,null,null);e["default"]=_.exports},ca9f:function(t,e,n){"use strict";var a=n("23d6"),r=n.n(a);r.a}}]);
//# sourceMappingURL=chunk-28f2de23.aa09c4a6.js.map