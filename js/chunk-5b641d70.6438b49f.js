(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b641d70"],{"1edb":function(n,e,i){"use strict";i.r(e);var t=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"tm-info"},[i("Header",{attrs:{msg:n.pageTitle,back:!0,HomePage:!1,leftText:"返回",iconRight:""}}),i("div",{staticClass:"tm-head"},[i("van-grid",{attrs:{border:!1,"column-num":6,clickable:!1}},[i("van-grid-item",[i("span",[n._v("用户名")])]),i("van-grid-item",[i("span",[n._v("余额")])]),i("van-grid-item",[i("span",[n._v("返点")])]),i("van-grid-item",[i("span",[n._v("等级")])]),i("van-grid-item",[i("span")])],1)],1),i("div",{staticClass:"tm-content"},[i("van-pull-refresh",{on:{refresh:n.onRefresh},model:{value:n.refreshing,callback:function(e){n.refreshing=e},expression:"refreshing"}},[i("van-list",{attrs:{finished:n.finished,"finished-text":"加载完毕"},on:{load:n.onLoad},model:{value:n.loading,callback:function(e){n.loading=e},expression:"loading"}},[i("van-grid",{staticClass:"tm-info-grid",attrs:{border:!1,"column-num":5,clickable:!1}},n._l(n.list,(function(e){return i("van-grid-item",{key:e,staticClass:"list-item"},[i("span",[n._v("anxin521")]),i("span",[n._v("108888")]),i("span",[n._v("7.8")]),i("span",[n._v("会员")]),i("span",{staticClass:"more-info",on:{click:n.goToSingleAgent}},[n._v("查看详情 "),i("van-icon",{attrs:{name:"arrow"}})],1)])})),1)],1)],1)],1)],1)},a=[],s=i("d4ec"),r=i("bee2"),o=i("262e"),l=i("2caf"),c=i("9ab4"),f=i("60a3"),d=i("0418"),u=function(n){Object(o["a"])(i,n);var e=Object(l["a"])(i);function i(){var n;return Object(s["a"])(this,i),n=e.apply(this,arguments),n.pageTitle="团队管理",n.loading=!1,n.finished=!1,n.refreshing=!1,n.list=[],n}return Object(r["a"])(i,[{key:"onLoad",value:function(){var n=this;setTimeout((function(){n.refreshing&&(n.list=[],n.refreshing=!1);for(var e=0;e<10;e++)n.list.push(n.list.length+1);n.loading=!1,n.list.length>=40&&(n.finished=!0)}),1e3)}},{key:"goToSingleAgent",value:function(){this.$router.push({name:"SingleAgent"})}},{key:"onRefresh",value:function(){this.finished=!1,this.loading=!0,this.onLoad()}}]),i}(f["d"]);u=Object(c["a"])([Object(f["a"])({components:{Header:d["a"]}})],u);var g=u,v=g,h=(i("f3b1"),i("2877")),p=Object(h["a"])(v,t,a,!1,null,null,null);e["default"]=p.exports},"1fff":function(n,e,i){},f3b1:function(n,e,i){"use strict";var t=i("1fff"),a=i.n(t);a.a}}]);
//# sourceMappingURL=chunk-5b641d70.6438b49f.js.map