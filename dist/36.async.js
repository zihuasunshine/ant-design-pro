(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{"9XhI":function(e,t,a){e.exports={articleList:"antd-pro\\pages\\-account\\-center\\-questions-articleList",listItemMetaTitle:"antd-pro\\pages\\-account\\-center\\-questions-listItemMetaTitle"}},WmoD:function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Mwp2");var u=l(a("VXEj"));a("+BJd");var r=l(a("mr32"));a("Pwec");var i,s,d=l(a("CtXQ")),c=l(a("lwsE")),f=l(a("W8MJ")),o=l(a("a1gu")),m=l(a("Nsbk")),p=l(a("7W2i")),E=n(a("q1tI")),y=a("MuoO"),g=l(a("ZJDs")),h=l(a("9XhI")),v=(i=(0,y.connect)(function(e){return{center:e}}),i(s=function(e){function t(){return(0,c.default)(this,t),(0,o.default)(this,(0,m.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(sessionStorage.getItem("user")),t=this.props.dispatch;t({type:"center/getMyQuestion",params:{userId:e.uid}})}},{key:"render",value:function(){var e=function(e){var t=e.type,a=e.text;return E.default.createElement("span",null,E.default.createElement(d.default,{type:t,style:{marginRight:8}}),a)};return E.default.createElement(u.default,{size:"large",className:h.default.articleList,rowKey:"id",itemLayout:"vertical",dataSource:[],renderItem:function(t){return E.default.createElement(u.default.Item,{key:t.id,actions:[E.default.createElement(e,{type:"star-o",text:t.star}),E.default.createElement(e,{type:"like-o",text:t.like}),E.default.createElement(e,{type:"message",text:t.message})]},E.default.createElement(u.default.Item.Meta,{title:E.default.createElement("a",{className:h.default.listItemMetaTitle,href:t.href},t.title),description:E.default.createElement("span",null,E.default.createElement(r.default,null,"Ant Design"),E.default.createElement(r.default,null,"\u8bbe\u8ba1\u8bed\u8a00"),E.default.createElement(r.default,null,"\u8682\u8681\u91d1\u670d"))}),E.default.createElement(g.default,{data:t}))}})}}]),t}(E.PureComponent))||s),I=v;t.default=I}}]);