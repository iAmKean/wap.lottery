(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3692c4ea"],{"0410":function(t,n,e){"use strict";var o=e("9d01"),a=e.n(o);a.a},"9d01":function(t,n,e){},a477:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"quotaConversion"},[o("Header",{attrs:{msg:"额度转换",leftText:"返回",back:!0,HomePage:!1}}),o("van-cell-group",{staticClass:"top_quotaConversion"},[o("van-cell",{attrs:{title:"",value:"一键回收"},scopedSlots:t._u([{key:"title",fn:function(){return[o("span",[t._v("钱包余额")]),o("van-icon",{attrs:{name:"replay"}})]},proxy:!0}])})],1),o("van-grid",{staticClass:"info_quotaConversion",attrs:{"column-num":2}},[o("van-grid-item",[o("h5",[o("van-icon",{attrs:{name:"pending-payment",size:"19"}}),t._v("中心钱包")],1),o("p",[t._v(t._s(t.userBalance))])]),o("van-grid-item",[o("h5",[o("van-icon",{attrs:{name:"pending-payment",size:"19"}}),t._v("锁定钱包")],1),o("p",[t._v("0.00")])])],1),o("van-grid",{staticClass:"items_quotaConversion",attrs:{"column-num":4}},[t.loadMore?t._l(t.quotations,(function(n,e){return o("van-grid-item",{key:e,attrs:{text:""},on:{click:function(e){return t.onConfirm(n)}},scopedSlots:t._u([{key:"text",fn:function(){return[o("h5",{class:{active:n.text==t.quotationName}},[t._v(t._s(n.text))]),o("p",{class:{active:n.text==t.quotationName}},[t._v(t._s(n.value))])]},proxy:!0}],null,!0)})})):t._e(),t.loadMore?t._e():t._l(t.quotationsMinimum,(function(n,e){return o("van-grid-item",{key:e,attrs:{text:""},scopedSlots:t._u([{key:"text",fn:function(){return[o("h5",[t._v(t._s(n.text))]),o("p",[t._v(t._s(n.value))])]},proxy:!0}],null,!0)})})),o("van-grid-item",{staticClass:"loadMore",attrs:{text:""},on:{click:function(n){t.loadMore=!t.loadMore}},scopedSlots:t._u([{key:"text",fn:function(){return[o("h5",[t._v("收起")]),o("p",[t.loadMore?o("van-icon",{attrs:{name:"arrow-up"}}):t._e()],1),o("p",[t.loadMore?t._e():o("van-icon",{attrs:{name:"arrow-down"}})],1)]},proxy:!0}])})],2),o("van-cell",{staticClass:"auto_quotaConversion",attrs:{center:"",title:""},scopedSlots:t._u([{key:"title",fn:function(){return[o("van-icon",{attrs:{name:"refund-o"}}),o("span",[t._v("自动转换")]),o("span",{staticClass:"gray"},[t._v("(开启后余额自动化转入游戏大厅）")])]},proxy:!0},{key:"right-icon",fn:function(){return[o("van-switch",{attrs:{size:"15"},model:{value:t.autoQuotaConversion,callback:function(n){t.autoQuotaConversion=n},expression:"autoQuotaConversion"}})]},proxy:!0}])}),t.autoQuotaConversion?t._e():o("div",{staticClass:"no_auto_quotation"},[o("van-grid",{staticClass:"info_account_quotation",attrs:{direction:"horizontal","column-num":3}},[o("van-grid-item",{attrs:{text:""},scopedSlots:t._u([{key:"text",fn:function(){return[o("p",[t._v("中心钱包")]),o("van-icon",{attrs:{name:"arrow"}})]},proxy:!0}],null,!1,1092693345)}),o("van-grid-item",{attrs:{text:""},scopedSlots:t._u([{key:"text",fn:function(){return[o("img",{attrs:{src:e("e215"),height:"15",width:"18",alt:""}})]},proxy:!0}],null,!1,4203741399)}),o("van-grid-item",{attrs:{text:""},scopedSlots:t._u([{key:"text",fn:function(){return[o("van-field",{attrs:{readonly:"",clickable:"",value:t.quotationName},on:{click:function(n){t.showQuotation=!0}}}),o("van-icon",{attrs:{name:"arrow"}})]},proxy:!0}],null,!1,933744221)})],1),o("van-popup",{attrs:{position:"bottom"},model:{value:t.showQuotation,callback:function(n){t.showQuotation=n},expression:"showQuotation"}},[o("van-picker",{attrs:{"show-toolbar":"",columns:t.quotations},on:{confirm:t.onConfirm,cancel:function(n){t.showQuotation=!1}}})],1),o("p",{staticClass:"txt_account_quotation"},[t._v("场馆内钱包不支持互转")]),o("van-form",{on:{submit:t.onSubmit}},[o("van-cell-group",[o("van-field",{attrs:{"left-icon":"gold-coin-o","right-icon":"",placeholder:"请输入转账金额",rules:[{required:!0}]},scopedSlots:t._u([{key:"right-icon",fn:function(){return[o("p",[t._v("最大金额")])]},proxy:!0}],null,!1,3000046999),model:{value:t.amountQuotation,callback:function(n){t.amountQuotation=n},expression:"amountQuotation"}})],1),o("van-button",{attrs:{block:"",type:"info","native-type":"submit"}},[t._v(" 立即转账 ")])],1)],1)],1)},a=[],u=(e("d3b7"),e("ac1f"),e("25f0"),e("5319"),e("d4ec")),i=e("bee2"),r=e("262e"),s=e("2caf"),l=e("9ab4"),c=e("60a3"),v=e("0418"),A=function(t){Object(r["a"])(e,t);var n=Object(s["a"])(e);function e(){var t;return Object(u["a"])(this,e),t=n.apply(this,arguments),t.autoQuotaConversion=!1,t.loadMore=!1,t.showQuotation=!1,t.amountQuotation="",t.quotationName="AA彩票",t.userBalance=t.numberWithCommas(t.$store.state.userBalance),t.quotationsMinimum=[{value:"100.00",text:"AA彩票"},{value:"0.00",text:"KY棋牌"},{value:"0.00",text:"VG棋牌"}],t.quotations=[{value:"100.00",text:"AA彩票"},{value:"0.00",text:"KY棋牌"},{value:"0.00",text:"VG棋牌"},{value:"0.00",text:"QG棋牌"},{value:"0.00",text:"OG视讯"},{value:"0.00",text:"GD视讯"},{value:"0.00",text:"欧博视讯"},{value:"0.00",text:"EB视讯"},{value:"0.00",text:"AG视讯"},{value:"0.00",text:"BG视讯"},{value:"0.00",text:"DG视讯"},{value:"0.00",text:"AG捕鱼王"},{value:"0.00",text:"BG捕鱼"},{value:"0.00",text:"TTG电子"},{value:"0.00",text:"CQ9电子"},{value:"0.00",text:"AG电子"},{value:"0.00",text:"BG电子"},{value:"0.00",text:"CMD体育"},{value:"0.00",text:"AG体育"}],t}return Object(i["a"])(e,[{key:"onConfirm",value:function(t){this.quotationName=t.text,this.showQuotation=!1}},{key:"onSubmit",value:function(){console.log("submit",this.amountQuotation)}},{key:"numberWithCommas",value:function(t){return t.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,",")+".00"}}]),e}(c["d"]);A=Object(l["a"])([Object(c["a"])({components:{Header:v["a"]}})],A);var d=A,m=d,p=(e("0410"),e("2877")),f=Object(p["a"])(m,o,a,!1,null,null,null);n["default"]=f.exports},e215:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAMAAAAXdyW2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAIdQTFRFAAAA////5OTk5eXl////5OTkz8/P2NjY+fn50NDQ6+vr////3Nzc9vb20tLS8PDw9/f39PT0////4ODg4ODg////4eHh1dXV8/Pzz8/P9vb24ODg////0tLS7u7u29vb9vb20NDQ6enp////19fX9PT05OTk1NTU8/Pz5OTk7Ozs5ubm6+vrp7i53AAAAC10Uk5TAA6OiQeQ/9Ar+HABvBvuVx4wFaWjD6DhP/43pxDwWb4d+XMC0i6N40KWaYdyM/FXGAAAAK9JREFUeJyFktsOgjAQRFFhVBQVb4haEa94+f/vc5MqlMTuTLLzsDkPndkGQUudgKvbCykToT/gDIbxiDLAOOEMJtP2dpbOZVLxRHwBq+XKZdaIZSAewVG24QxypwUfA6cFP9O0oDB1CyrzbUFnbAuMQbblzG7PGHOg7ymO7M3l6cyyX66s5/wWslvcq+buD/OUMeIv8dJJrP9Dm1hnbGKN+SVWmDqxl3ES+/Su/iw/XNkUzPgDlUQAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=chunk-3692c4ea.2376c88a.js.map