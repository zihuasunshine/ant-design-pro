(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"0evu":function(e,t,n){e.exports={main:"antd-pro\\pages\\-account\\-settings\\-info-main",leftmenu:"antd-pro\\pages\\-account\\-settings\\-info-leftmenu",right:"antd-pro\\pages\\-account\\-settings\\-info-right",title:"antd-pro\\pages\\-account\\-settings\\-info-title"}},"N01/":function(e,t,n){"use strict";var a=n("TqRt"),i=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n("lwsE")),u=a(n("W8MJ")),r=a(n("a1gu")),l=a(n("Nsbk")),c=a(n("7W2i"));n("lUTK");var o,d,f,m=a(n("BvKs")),p=i(n("q1tI")),h=n("MuoO"),v=a(n("usdK")),g=n("LLXN"),y=a(n("v99g")),M=a(n("0evu")),w=m.default.Item,E=(o=(0,h.connect)(function(e){var t=e.user;return{currentUser:t.currentUser}}),o((f=function(e){function t(e){var n;(0,s.default)(this,t),n=(0,r.default)(this,(0,l.default)(t).call(this,e)),n.getmenu=function(){var e=n.state.menuMap;return Object.keys(e).map(function(t){return p.default.createElement(w,{key:t},e[t])})},n.getRightTitle=function(){var e=n.state,t=e.selectKey,a=e.menuMap;return a[t]},n.selectKey=function(e){var t=e.key;v.default.push("/account/settings/".concat(t)),n.setState({selectKey:t})},n.resize=function(){n.main&&requestAnimationFrame(function(){var e="inline",t=n.main.offsetWidth;n.main.offsetWidth<641&&t>400&&(e="horizontal"),window.innerWidth<768&&t>400&&(e="horizontal"),n.setState({mode:e})})};var a=e.match,i=e.location,u={base:p.default.createElement(g.FormattedMessage,{id:"app.settings.menuMap.basic",defaultMessage:"Basic Settings"}),security:p.default.createElement(g.FormattedMessage,{id:"app.settings.menuMap.security",defaultMessage:"Security Settings"})},c=i.pathname.replace("".concat(a.path,"/"),"");return n.state={mode:"inline",menuMap:u,selectKey:u[c]?c:"base"},n}return(0,c.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize),this.resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.state,a=n.mode,i=n.selectKey;return p.default.createElement(y.default,null,p.default.createElement("div",{className:M.default.main,ref:function(t){e.main=t}},p.default.createElement("div",{className:M.default.leftmenu},p.default.createElement(m.default,{mode:a,selectedKeys:[i],onClick:this.selectKey},this.getmenu())),p.default.createElement("div",{className:M.default.right},p.default.createElement("div",{className:M.default.title},this.getRightTitle()),t)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.match,a=e.location,i=a.pathname.replace("".concat(n.path,"/"),"");return i=t.menuMap[i]?i:"base",i!==t.selectKey?{selectKey:i}:null}}]),t}(p.Component),d=f))||d),K=E;t.default=K}}]);