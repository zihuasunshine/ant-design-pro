(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{llR0:function(e,t,a){"use strict";var n=a("TqRt"),u=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Mwp2");var r=n(a("VXEj"));a("14J3");var l=n(a("BMrR"));a("jCWc");var i=n(a("kPKH"));a("Pwec");n(a("CtXQ"));var o=n(a("MVZn")),d=n(a("lwsE")),s=n(a("W8MJ")),c=n(a("a1gu")),f=n(a("Nsbk")),p=n(a("7W2i"));a("5NDa");var h,m,v,y=n(a("5rEg")),g=u(a("q1tI")),q=a("MuoO"),w=n(a("ZJDs")),E=n(a("aTf1")),k=y.default.Search,M=(h=(0,q.connect)(function(e){var t=e.home;return{home:t}}),h((v=function(e){function t(e){var a;return(0,d.default)(this,t),a=(0,c.default)(this,(0,f.default)(t).call(this,e)),a.handleSerach=function(e){a.question=e,a.getQuestionList()},a.getQuestionList=function(){var e=a.props.dispatch;e({type:"home/fetchList",params:(0,o.default)({question:a.question,qtype:a.qtype},a.pager)})},a.question="",a.qtype=e.route.query.key,a.pager={page:1,size:10},a}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.props.dispatch;this.getQuestionList()}},{key:"render",value:function(){var e={xs:24,sm:24,md:12,lg:6,xl:6,xxl:6},t=this.props.home.list;return g.default.createElement(g.Fragment,null,g.default.createElement(l.default,null,g.default.createElement(i.default,e,g.default.createElement(k,{placeholder:"\u8f93\u5165\u5173\u952e\u8bcd",onSearch:this.handleSerach,enterButton:!0}))),g.default.createElement(r.default,{size:"large",className:E.default.articleList,rowKey:"id",itemLayout:"vertical",dataSource:t&&t.data?t.data:[],renderItem:function(e){return g.default.createElement(r.default.Item,{key:e.id},g.default.createElement(r.default.Item.Meta,{title:"",description:""}),g.default.createElement(w.default,{data:e,link:"/question/answer/".concat(e.id)}))}}))}}]),t}(g.PureComponent),m=v))||m),L=M;t.default=L}}]);