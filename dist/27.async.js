(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{vcPf:function(e,t,a){"use strict";var l=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Mwp2");var n=l(a("VXEj"));a("+BJd");var u=l(a("mr32"));a("14J3");var d=l(a("BMrR"));a("jCWc");var o,s,c=l(a("kPKH")),i=l(a("2Taf")),m=l(a("vZ4D")),f=l(a("l4Ni")),p=l(a("ujKo")),v=l(a("MhPg")),M=r(a("q1tI")),E=a("MuoO"),w=l(a("wd/R")),h=l(a("9XhI")),y={xs:24,sm:24,md:18,lg:18,xl:18,xxl:18},I={xs:24,sm:24,md:6,lg:6,xl:6,xxl:68},g=[{color:"blue",name:"\u5f85\u5ba1\u6838"},{color:"blue",name:"\u5f85\u56de\u7b54"},{color:"green",name:"\u5df2\u56de\u7b54"},{color:"blue",name:"\u5f85\u5b8c\u5584"},{color:"red",name:"\u5ba1\u6838\u4e0d\u901a\u8fc7"},{color:"red",name:"\u5df2\u5220\u9664"}],b=(o=(0,E.connect)(function(e){var t=e.center;return{center:t}}),o(s=function(e){function t(){return(0,i.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,v.default)(t,e),(0,m.default)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(sessionStorage.getItem("user")),t=this.props.dispatch;t({type:"center/getMyQuestion",params:{userId:e.uid}})}},{key:"render",value:function(){var e=this.props.center.myQuestionRes,t=e&&200===e.code?e.data.list:[];return M.default.createElement(n.default,{size:"large",className:h.default.articleList,rowKey:"id",itemLayout:"vertical",dataSource:t,renderItem:function(e){return M.default.createElement(n.default.Item,{key:e.id},M.default.createElement(n.default.Item.Meta,{title:M.default.createElement(d.default,null,M.default.createElement(c.default,y,5!==e.state?M.default.createElement("a",{className:h.default.listItemMetaTitle,href:"/question/answer/".concat(e.id)},e.title):M.default.createElement("span",{className:h.default.listItemMetaTitle},e.title)),M.default.createElement(c.default,I,M.default.createElement("span",{className:h.default.listItemMetaTitle},0==e.bestAnswer?"\u672a\u56de\u7b54":"\u5df2\u56de\u7b54"," | ",(0,w.default)(e.addTime).format("YYYY-MM-DD HH:mm")))),description:M.default.createElement("div",null,M.default.createElement(u.default,{color:g[e.state].color},g[e.state].name))}))}})}}]),t}(M.PureComponent))||s),x=b;t.default=x}}]);