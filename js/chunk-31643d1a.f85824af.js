(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31643d1a"],{"0447":function(t,e,a){"use strict";var o=a("aa5c"),n=a.n(o);n.a},"1fd1":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-container"},[a("div",{staticClass:"filter-container-wrapper"},[a("van-field",{attrs:{label:"用户名:"},model:{value:t.filterDetais.userName,callback:function(e){t.$set(t.filterDetais,"userName",e)},expression:"filterDetais.userName"}}),a("van-field",{attrs:{label:" 彩种类型:",readonly:"","right-icon":"arrow-down"},on:{click:function(e){t.showColorType=!0}},model:{value:t.filterDetais.colorType,callback:function(e){t.$set(t.filterDetais,"colorType",e)},expression:"filterDetais.colorType"}}),a("div",{staticClass:"date"},[a("span",{staticClass:"date-label"},[t._v("日期:")]),a("van-field",{attrs:{readonly:""},on:{click:function(e){t.showBeginDate=!0}},model:{value:t.filterDetais.fromDate,callback:function(e){t.$set(t.filterDetais,"fromDate",e)},expression:"filterDetais.fromDate"}}),a("span",{staticClass:"date-divider"},[t._v("--")]),a("van-field",{attrs:{readonly:""},on:{click:function(e){t.showEndDate=!0}},model:{value:t.filterDetais.toDate,callback:function(e){t.$set(t.filterDetais,"toDate",e)},expression:"filterDetais.toDate"}})],1),a("div",{staticClass:"options"},[t.showCheckBox?a("van-checkbox",{attrs:{"checked-color":"#ee0a24","icon-size":"14px",shape:"square"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("下级")]):t._e(),a("van-button",{staticClass:"opt-btn btn-margin",attrs:{type:"default",size:"mini"}},[t._v("取消")]),a("van-button",{staticClass:"opt-btn confirm",attrs:{type:"danger",size:"mini"}},[t._v("确认")])],1)],1),a("van-popup",{staticClass:"color-type-popup",style:{height:"auto",width:"70%"},attrs:{"get-container":"filter-container"},model:{value:t.showColorType,callback:function(e){t.showColorType=e},expression:"showColorType"}},[a("div",{staticClass:"header"},[a("span",[t._v("彩种类型")])]),a("div",{staticClass:"body"},[a("van-radio-group",{on:{change:t.selecColorType},model:{value:t.colorRadio,callback:function(e){t.colorRadio=e},expression:"colorRadio"}},t._l(t.colorList,(function(e,o){return a("van-radio",{key:o,attrs:{name:o,"checked-color":"red"}},[t._v(" "+t._s(e)+" ")])})),1)],1)]),a("van-popup",{style:{height:"30%"},attrs:{round:"",position:"bottom"},model:{value:t.showBeginDate,callback:function(e){t.showBeginDate=e},expression:"showBeginDate"}},[a("van-datetime-picker",{attrs:{type:"datehour","min-date":t.minDate,"max-date":t.maxDate,"columns-order":["year","month","day"],title:"自定义列排序"},on:{cancel:function(e){t.showBeginDate=!1},confirm:t.selectBeginDate},model:{value:t.filterDetais.fromDate,callback:function(e){t.$set(t.filterDetais,"fromDate",e)},expression:"filterDetais.fromDate"}})],1),a("van-popup",{style:{height:"30%"},attrs:{round:"",position:"bottom"},model:{value:t.showEndDate,callback:function(e){t.showEndDate=e},expression:"showEndDate"}},[a("van-datetime-picker",{attrs:{type:"datehour","min-date":t.minDate,"max-date":t.maxDate,"columns-order":["year","month","day"],title:"自定义列排序"},on:{cancel:function(e){t.showEndDate=!1},confirm:t.selectEndDate},model:{value:t.filterDetais.toDate,callback:function(e){t.$set(t.filterDetais,"toDate",e)},expression:"filterDetais.toDate"}})],1)],1)},n=[],s=(a("99af"),a("d4ec")),i=a("bee2"),c=a("262e"),l=a("2caf"),r=a("9ab4"),u=a("60a3"),p=function(t){Object(c["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.showColorType=!1,t.checked=!0,t.colorRadio=0,t.beginDate="",t.endDate="",t.showBeginDate=!1,t.showEndDate=!1,t.minDate=new Date(2020,0,1),t.maxDate=new Date(2025,10,1),t.currentDate=new Date,t.filterDetais={userName:"",colorType:"所有",fromDate:"2021-02-24 00:00:00",toDate:"2021-02-25 22:19:54"},t.colorList=["十分六合彩","重庆时时彩","重庆时时彩2","新疆时时彩","168澳洲幸运5"],t}return Object(i["a"])(a,[{key:"selecColorType",value:function(t){this.filterDetais.colorType=this.colorList[t],this.showColorType=!1}},{key:"selectBeginDate",value:function(t){var e=t.getMonth()+1<10?"0".concat(t.getMonth()+1):t.getMonth()+1,a=t.getDate()<10?"0".concat(t.getDate()):t.getDate();this.filterDetais.fromDate="".concat(t.getFullYear(),"-").concat(e,"-").concat(a),this.showBeginDate=!1}},{key:"selectEndDate",value:function(t){var e=t.getMonth()+1<10?"0".concat(t.getMonth()+1):t.getMonth()+1,a=t.getDate()<10?"0".concat(t.getDate()):t.getDate();this.filterDetais.toDate="".concat(t.getFullYear(),"-").concat(e,"-").concat(a),this.showEndDate=!1}}]),a}(u["d"]);Object(r["a"])([Object(u["c"])({type:Boolean,default:!1})],p.prototype,"showCheckBox",void 0),p=Object(r["a"])([Object(u["a"])({components:{}})],p);var d=p,h=d,v=(a("0447"),a("2877")),f=Object(v["a"])(h,o,n,!1,null,"76a4d348",null);e["a"]=f.exports},2466:function(t,e,a){},"6d9d":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tracking-num-query"},[a("Header",{attrs:{msg:"追号查询",back:!0,leftText:"返回",showFilter:!0},on:{showFilterDate:function(e){return t.showFilterDate()}}}),a("div",{staticClass:"tnq-content"},[t.showDropdown?a("FilterRecord"):t._e(),a("div",{staticClass:"tnq-list"},[t.tnqData.length>0?a("div",{staticClass:"tnq-list-container"},[a("van-list",{attrs:{finished:t.finished,"finished-text":""},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.tnqData,(function(e,o){return a("div",{key:o,staticClass:"tnq-list-item",on:{click:t.showPopup}},[a("div",{staticClass:"left"},[a("div",{staticClass:"top"},[a("span",[t._v(t._s(e.title))]),a("span",[t._v("未开奖")])]),a("div",{staticClass:"body"},[a("span",[t._v("期号: "+t._s(e.issueNumber))]),a("span",[t._v("投注号码:"+t._s(e.betNum))]),a("span",[t._v("下注金额: "+t._s(e.betAmount)+"元")]),a("span",[t._v("派奖金额:"+t._s(e.bonusAmount))]),a("span",{staticClass:"date"},[t._v(t._s(e.date))])])]),a("div",{staticClass:"right"},[a("van-icon",{staticClass:"arrow",attrs:{name:"arrow"}})],1)])})),0)],1):a("div",{staticClass:"no-data"},[a("div",[t._v("还没有任何投注记录")])])])],1),t.showChasePopup?a("ChasePopup",{attrs:{isShow:t.showChasePopup},on:{"hide-popup":function(e){t.showChasePopup=!1}}}):t._e()],1)},n=[],s=(a("99af"),a("d4ec")),i=a("bee2"),c=a("262e"),l=a("2caf"),r=a("9ab4"),u=a("0418"),p=a("60a3"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pl-popup"},[a("van-popup",{staticClass:"pl-popup",style:{width:"80%",height:"auto"},on:{close:function(e){return t.hidePopOver()}},model:{value:t.showPopup,callback:function(e){t.showPopup=e},expression:"showPopup"}},[a("div",{staticClass:"pop-up-container"},[a("div",{staticClass:"popup-header"},[t._v(" 追号详情 ")]),a("div",{staticClass:"popup-content"},[a("p",[t._v("期号")]),a("p",[t._v("投注追号编号 : C21022400002")]),a("p",[t._v("派奖追号时间 : 2021-02-24 22:34:00")]),a("p",[t._v("用户 : chat05")]),a("p",[t._v("期号彩种 : 重庆时时彩[官]")]),a("p",[t._v("投注玩法 : 组选30")]),a("p",[t._v("派奖追号内容 : 7,8|1")]),a("p",[t._v("下注金额 : 2元")]),a("p",[t._v("被追号编号 : C21022400002")]),a("p",[t._v("派奖状态 : 未开奖")])]),a("div",{staticClass:"popup-btn",on:{click:function(e){return t.hidePopOver()}}},[t._v(" 撤单 ")])])])],1)},h=[],v=function(t){Object(c["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.showPopup="",t}return Object(i["a"])(a,[{key:"mounted",value:function(){this.showPopup=this.isShow}},{key:"hidePopOver",value:function(){this.$emit("hide-popup",!1)}}]),a}(p["d"]);Object(r["a"])([Object(p["c"])({type:Boolean,default:!1})],v.prototype,"isShow",void 0),v=Object(r["a"])([Object(p["a"])({components:{}})],v);var f=v,D=f,m=(a("d14de"),a("2877")),b=Object(m["a"])(D,d,h,!1,null,"707710c2",null),w=b.exports,g=a("1fd1"),y=function(t){Object(c["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.showDropdown=!1,t.username="",t.showChasePopup=!1,t.beginDate="",t.endDate="",t.showBeginDate=!1,t.showEndDate=!1,t.minDate=new Date(2020,0,1),t.maxDate=new Date(2025,10,1),t.currentDate=new Date,t.loading=!1,t.finished=!1,t.colorType=0,t.colorOptions=[{text:"All",value:0},{text:"Red",value:1},{text:"Green",value:2},{text:"Blue",value:3}],t.tnqData=[{title:"重庆时时彩[官]",issueNumber:20210224056,betNum:"7.8|1",betAmount:2,bonusAmount:0,date:"2021-02-24 22:34:00"},{title:"重庆时时彩[官]",issueNumber:20210224056,betNum:"7.8|1",betAmount:2,bonusAmount:0,date:"2021-02-24 22:34:00"},{title:"重庆时时彩[官]",issueNumber:20210224056,betNum:"7.8|1",betAmount:2,bonusAmount:0,date:"2021-02-24 22:34:00"},{title:"重庆时时彩[官]",issueNumber:20210224056,betNum:"7.8|1",betAmount:2,bonusAmount:0,date:"2021-02-24 22:34:00"}],t}return Object(i["a"])(a,[{key:"showPopup",value:function(){this.showChasePopup=!0}},{key:"onLoad",value:function(){var t=this;setTimeout((function(){t.loading=!1,t.finished=!0}),1e3)}},{key:"selectBeginDate",value:function(t){var e=t.getMonth()+1<10?"0".concat(t.getMonth()+1):t.getMonth()+1,a=t.getDate()<10?"0".concat(t.getDate()):t.getDate(),o="".concat(t.getFullYear(),".").concat(e,".").concat(a);this.beginDate=o,this.showBeginDate=!1}},{key:"selectEndDate",value:function(t){var e=t.getMonth()+1<10?"0".concat(t.getMonth()+1):t.getMonth()+1,a=t.getDate()<10?"0".concat(t.getDate()):t.getDate(),o="".concat(t.getFullYear(),".").concat(e,".").concat(a);this.endDate=o,this.showEndDate=!1}},{key:"showFilterDate",value:function(){this.showDropdown=!this.showDropdown}}]),a}(p["d"]);y=Object(r["a"])([Object(p["a"])({components:{Header:u["a"],ChasePopup:w,FilterRecord:g["a"]}})],y);var C=y,k=C,_=(a("f725"),Object(m["a"])(k,o,n,!1,null,null,null));e["default"]=_.exports},aa5c:function(t,e,a){},ca42:function(t,e,a){},d14de:function(t,e,a){"use strict";var o=a("2466"),n=a.n(o);n.a},f725:function(t,e,a){"use strict";var o=a("ca42"),n=a.n(o);n.a}}]);
//# sourceMappingURL=chunk-31643d1a.f85824af.js.map