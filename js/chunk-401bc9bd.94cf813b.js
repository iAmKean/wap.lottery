(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-401bc9bd"],{"1d9a":function(t,e,a){},"3d2b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"agent"},[a("Header",{attrs:{msg:t.$t("message.agentCenter"),back:!0,leftText:"返回",HomePage:!1}}),a("div",{staticClass:"agent-content"},[a("div",{staticClass:"agent-con"},[a("div",{staticClass:"info-card"},[a("div",{staticClass:"info-name"},[a("div",{staticClass:"icon"},[a("van-icon",{attrs:{name:"user-circle-o",size:"42"}})],1),a("div",{staticClass:"name"},[a("span",[t._v(" "+t._s(t.agentName)+" ")]),a("span",[t._v(t._s(t.$t("message.agentLevel"))+": "+t._s(t.agencyLevel)+" ")])]),a("van-button",{attrs:{type:"default",size:"small"},on:{click:function(e){return t.goPage("Pinces")}}},[t._v(t._s(t.$t("message.promAgent")))])],1),a("van-divider",{style:{borderColor:"#fff",padding:"0px",margin:"19px 0px 20px 0px"}}),a("div",{staticClass:"info-balance"},[a("van-grid",{attrs:{border:!1,"column-num":3,clickable:!1}},[a("van-grid-item",[a("span",[t._v(" "+t._s("￥ 68,888.00")+" ")]),a("span",[t._v(t._s(t.$t("message.myComm")))])]),a("van-grid-item",[a("span",[t._v(" "+t._s("￥ 4663")+" ")]),a("span",[t._v(t._s(t.$t("message.yesterdayComm")))])]),a("van-grid-item",[a("span",[t._v(" "+t._s("￥ 4663")+" ")]),a("span",[t._v(t._s(t.$t("message.todayComm")))])])],1)],1)],1),a("div",{staticClass:"team-mngt"},[a("div",{staticClass:"team-mngt-content"},t._l(t.teamList,(function(e,s){return a("div",{key:s,staticClass:"mngt",on:{click:function(a){return t.goPage(e.path)}}},[a("div",{staticClass:"mngt-wrapper"},[a("div",{staticClass:"icon"},[a("van-icon",{attrs:{name:e.icon,size:"36"}})],1),a("div",{staticClass:"name"},[a("span",[t._v(" "+t._s(0==s?t.$t("message.teamMember"):t.$t("message.teamOverview"))+" ")]),a("span",[t._v(" "+t._s(e.subTitle)+" ")])])])])})),0)]),a("div",{staticClass:"agent-exc-list"},t._l(t.exclusiveListData,(function(t,e){return a("AgentExclusiveList",{key:e,attrs:{headerText:t.title,isLink:t.isLink,linkText:t.linkText,itemData:t.data,toPath:t.path}})})),1)])]),a("Footer",{attrs:{activeTabs:3}})],1)},i=[],n=a("d4ec"),c=a("bee2"),r=a("262e"),l=a("2caf"),o=a("9ab4"),v=a("60a3"),d=a("0418"),m=a("fd2d"),p=a("4075"),u=function(t){Object(r["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(n["a"])(this,a),t=e.apply(this,arguments),t.pageTitle="代理中心",t.agentName="anxin520",t.agencyLevel=t.$t("message.juniorAgent"),t.teamList=[{icon:"friends",title:"团队管理",subTitle:t.$t("message.currentMembers"),path:"TeamMember"},{icon:"balance-list",title:"团队总览",subTitle:t.$t("message.viewReport"),path:"TeamOverview"}],t.exclusiveListData=[{title:t.$t("message.juniorAgentExclusive"),isLink:!1,linkText:"",path:"",data:[]},{title:t.$t("message.promotionalAgentExclusive"),isLink:!1,linkText:"",path:"",data:[]}],t}return Object(c["a"])(a,[{key:"goPage",value:function(t){t&&this.$router.push({name:t})}}]),a}(v["d"]);u=Object(o["a"])([Object(v["a"])({components:{Header:d["a"],Footer:m["a"],AgentExclusiveList:p["a"]}})],u);var g=u,b=g,_=(a("cd7c"),a("2877")),f=Object(_["a"])(b,s,i,!1,null,null,null);e["default"]=f.exports},4075:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"agent-exc-list-content"},[a("div",{staticClass:"header-link"},[a("van-cell-group",[a("van-cell",{attrs:{title:t.headerText,"is-link":t.isLink,value:t.linkText,to:t.toPath}})],1)],1),a("div",{staticClass:"item-list"},[a("van-grid",{attrs:{border:!1,"column-num":2,clickable:!1}},[a("van-grid-item",[a("div",{staticClass:"item-wrapper"},[a("van-icon",{attrs:{name:"cash-back-record",size:"35"}}),a("div",[a("span",[t._v(" "+t._s("50")+" ")]),a("span",[t._v(t._s(t.$t("message.rebate")))])])],1)]),a("van-grid-item",[a("div",{staticClass:"item-wrapper"},[a("van-icon",{attrs:{name:"idcard",size:"35"}}),a("div",[a("span",[t._v(" "+t._s("3")+" ")]),a("span",[t._v(t._s(t.$t("message.dailyWithdrawals")))])])],1)]),a("van-grid-item",[a("div",{staticClass:"item-wrapper"},[a("van-icon",{attrs:{name:"balance-pay",size:"35"}}),a("div",[a("span",[t._v(" "+t._s("100,000.00")+" ")]),a("span",[t._v(t._s(t.$t("message.dailyWithdrawalsLimit")))])])],1)]),a("van-grid-item",[a("div",{staticClass:"item-wrapper"},[a("van-icon",{attrs:{name:"balance-o",size:"35"}}),a("div",[a("span",[t._v(" "+t._s("50")+" ")]),a("span",[t._v(t._s(t.$t("message.relegationBonus")))])])],1)])],1)],1)])},i=[],n=a("d4ec"),c=a("262e"),r=a("2caf"),l=a("9ab4"),o=a("60a3"),v=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return a}(o["d"]);Object(l["a"])([Object(o["c"])({type:String,default:""})],v.prototype,"headerText",void 0),Object(l["a"])([Object(o["c"])({type:Boolean,default:!1})],v.prototype,"isLink",void 0),Object(l["a"])([Object(o["c"])({type:String,default:""})],v.prototype,"linkText",void 0),Object(l["a"])([Object(o["c"])({type:Array,default:[]})],v.prototype,"itemData",void 0),Object(l["a"])([Object(o["c"])({type:String,default:""})],v.prototype,"toPath",void 0),v=Object(l["a"])([Object(o["a"])({})],v);var d=v,m=d,p=a("2877"),u=Object(p["a"])(m,s,i,!1,null,null,null);e["a"]=u.exports},cd7c:function(t,e,a){"use strict";var s=a("1d9a"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-401bc9bd.94cf813b.js.map