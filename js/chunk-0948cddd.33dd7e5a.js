(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0948cddd"],{a2f1:function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-theme"},[n("Header",{attrs:{msg:"主题换肤",back:!0,leftText:"返回"}}),n("van-radio-group",{staticClass:"themes_block",model:{value:e.selectedTheme,callback:function(t){e.selectedTheme=t},expression:"selectedTheme"}},[n("van-cell-group",e._l(e.themeList,(function(t,c){return n("van-cell",{key:c,attrs:{title:t.title+""+(e.getThemeColor==t.color?"(当前)":""),clickable:""},on:{click:function(t){return e.changeTheme(c)}},scopedSlots:e._u([{key:"right-icon",fn:function(){return[n("van-radio",{attrs:{name:""+c}})]},proxy:!0}],null,!0)})})),1)],1)],1)},i=[],r=(n("c740"),n("d4ec")),o=n("bee2"),a=n("262e"),l=n("2caf"),s=n("9ab4"),u=n("0418"),h=n("60a3"),d=function(e){Object(a["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(r["a"])(this,n),e=t.apply(this,arguments),e.selectedTheme="",e.themeList=[{title:"经典蓝",color:"classic-blue"},{title:"经典红",color:"classic-red"},{title:"尊贵黑金",color:"noble-black-gold"},{title:"简约白金",color:"simple-platinum"}],e}return Object(o["a"])(n,[{key:"filterTheme",value:function(){var e=this,t=this.themeList.findIndex((function(t){return t.color==e.getThemeColor}));return t}},{key:"changeTheme",value:function(e){this.selectedTheme="".concat(e),this.$store.dispatch("setThemeSkin",this.themeList[e].color)}},{key:"created",value:function(){this.selectedTheme="".concat(this.filterTheme())}},{key:"getThemeColor",get:function(){return this.$store.state.themeColor}}]),n}(h["d"]);d=Object(s["a"])([Object(h["a"])({components:{Header:u["a"]}})],d);var f=d,m=f,b=(n("b659"),n("2877")),p=Object(b["a"])(m,c,i,!1,null,"f97081ec",null);t["default"]=p.exports},b659:function(e,t,n){"use strict";var c=n("d667"),i=n.n(c);i.a},c740:function(e,t,n){"use strict";var c=n("23e7"),i=n("b727").findIndex,r=n("44d2"),o=n("ae40"),a="findIndex",l=!0,s=o(a);a in[]&&Array(1)[a]((function(){l=!1})),c({target:"Array",proto:!0,forced:l||!s},{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r(a)},d667:function(e,t,n){}}]);
//# sourceMappingURL=chunk-0948cddd.33dd7e5a.js.map