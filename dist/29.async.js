(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{"0vrW":function(e,t,a){"use strict";var l=a("TqRt"),d=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+BJd");var u,r,n=l(a("mr32")),c=l(a("lwsE")),i=l(a("W8MJ")),s=l(a("a1gu")),o=l(a("Nsbk")),f=l(a("7W2i")),m=d(a("q1tI")),p=a("MuoO"),h=l(a("v99g")),v=l(a("wd/R")),E=l(a("DStq")),w=(u=(0,p.connect)(function(e){var t=e.home;return{home:t}}),u(r=function(e){function t(e){var a;return(0,c.default)(this,t),a=(0,s.default)(this,(0,o.default)(t).call(this,e)),a.id=e.match.params.id,a}return(0,f.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"home/articleDetail",id:this.id})}},{key:"render",value:function(){var e=this.props.home.articleDetailRes;return m.default.createElement(h.default,null,e&&m.default.createElement("div",{className:E.default.article_detail},m.default.createElement("h2",{className:E.default.title},e.data.title),m.default.createElement("div",{className:E.default.date},"\u7f16\u8f91\u65f6\u95f4\uff1a",(0,v.default)(e.data.lrsj).format("YYYY-MM-DD")),e.data.img?m.default.createElement("div",{className:E.default.img},m.default.createElement("img",{src:e.data.img})):null,m.default.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.content}}),m.default.createElement("p",{className:E.default.keyword},m.default.createElement(n.default,{color:"magenta"},e.data.keyword)),m.default.createElement("p",{className:E.default.source},"\u6765\u6e90\uff1a",e.data.source)))}}]),t}(m.PureComponent))||r),g=w;t.default=g}}]);