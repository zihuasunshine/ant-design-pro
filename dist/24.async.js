(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{a4KE:function(e,t,a){"use strict";var s=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Mwp2");var r=n(a("VXEj")),u=n(a("2Taf")),d=n(a("vZ4D")),l=n(a("l4Ni")),i=n(a("ujKo")),o=n(a("MhPg")),f=s(a("q1tI")),c=a("LLXN"),m=n(a("mOP9")),p={strong:f.default.createElement("font",{className:"strong"},f.default.createElement(c.FormattedMessage,{id:"app.settings.security.strong",defaultMessage:"Strong"})),medium:f.default.createElement("font",{className:"medium"},f.default.createElement(c.FormattedMessage,{id:"app.settings.security.medium",defaultMessage:"Medium"})),weak:f.default.createElement("font",{className:"weak"},f.default.createElement(c.FormattedMessage,{id:"app.settings.security.weak",defaultMessage:"Weak"}),"Weak")},g=function(e){function t(){var e,a;(0,u.default)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return a=(0,l.default)(this,(e=(0,i.default)(t)).call.apply(e,[this].concat(n))),a.getData=function(){return[{title:(0,c.formatMessage)({id:"app.settings.security.password"},{}),description:f.default.createElement(f.Fragment,null,(0,c.formatMessage)({id:"app.settings.security.password-description"}),"\uff1a",p.strong),actions:[f.default.createElement(m.default,{to:"/user/modifypwd"},f.default.createElement(c.FormattedMessage,{id:"app.settings.security.modify",defaultMessage:"Modify"}))]}]},a}return(0,o.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return f.default.createElement(f.Fragment,null,f.default.createElement(r.default,{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(e){return f.default.createElement(r.default.Item,{actions:e.actions},f.default.createElement(r.default.Item.Meta,{title:e.title,description:e.description}))}}))}}]),t}(f.Component),M=g;t.default=M}}]);