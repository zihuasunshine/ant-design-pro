(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{USAq:function(e,t,a){"use strict";var n=a("TqRt"),c=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5NDa");var l,r,o,u=n(a("5rEg")),i=n(a("lwsE")),s=n(a("W8MJ")),d=n(a("a1gu")),h=n(a("Nsbk")),p=n(a("7W2i")),f=c(a("q1tI")),b=n(a("usdK")),k=a("MuoO"),m=n(a("zHco")),v=(l=(0,k.connect)(),l((o=function(e){function t(){var e,a;(0,i.default)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return a=(0,d.default)(this,(e=(0,h.default)(t)).call.apply(e,[this].concat(c))),a.handleTabChange=function(e){var t=a.props.match;switch(e){case"articles":b.default.push("".concat(t.url,"/articles"));break;case"applications":b.default.push("".concat(t.url,"/applications"));break;case"projects":b.default.push("".concat(t.url,"/projects"));break;default:break}},a.handleFormSubmit=function(e){console.log(e)},a}return(0,p.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=[{key:"articles",tab:"\u6587\u7ae0"},{key:"projects",tab:"\u9879\u76ee"},{key:"applications",tab:"\u5e94\u7528"}],t=f.default.createElement("div",{style:{textAlign:"center"}},f.default.createElement(u.default.Search,{placeholder:"\u8bf7\u8f93\u5165",enterButton:"\u641c\u7d22",size:"large",onSearch:this.handleFormSubmit,style:{width:522}})),a=this.props,n=a.match,c=a.children,l=a.location;return f.default.createElement(m.default,{title:"\u641c\u7d22\u5217\u8868",content:t,tabList:e,tabActiveKey:l.pathname.replace("".concat(n.path,"/"),""),onTabChange:this.handleTabChange},c)}}]),t}(f.Component),r=o))||r),w=v;t.default=w}}]);