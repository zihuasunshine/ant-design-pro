(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{MyUa:function(e,t,a){"use strict";var r=a("g09b"),l=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var i=r(a("2/Rp"));a("14J3");var d=r(a("BMrR"));a("jCWc");var n=r(a("kPKH")),s=r(a("p0pE")),o=r(a("2Taf")),f=r(a("vZ4D")),u=r(a("l4Ni")),c=r(a("ujKo")),m=r(a("MhPg"));a("5NDa");var p=r(a("5rEg"));a("OaEy");var v=r(a("2fM7"));a("y8nQ");var g,h,w,E,M=r(a("Vl3Y")),b=l(a("q1tI")),C=a("MuoO"),y=a("LLXN"),k=r(a("mOP9")),S=r(a("usdK")),q=r(a("+NUW")),D=(r(a("fZJM")),r(a("5WY0"))),N=a("dCQc"),z=a("+n12"),F=(r(a("Yy7e")),M.default.Item),I=(v.default.Option,p.default.Group),P=(g=(0,C.connect)(function(e){var t=e.register,a=e.findpwd,r=e.loading;return{register:t,findpwd:a,submitting:r.effects["findpwd/submit"]}}),h=M.default.create(),g(w=h((E=function(e){function t(e){var a;return(0,o.default)(this,t),a=(0,u.default)(this,(0,c.default)(t).call(this,e)),a.onGetCaptcha=function(){var e=a.props,t=e.form.validateFields,r=e.dispatch,l=a.state.token;t(["resultCode","mobile"],function(e,t){if(!e){var i=59;a.setState({count:i}),a.interval=setInterval(function(){i-=1,a.setState({count:i}),0===i&&clearInterval(a.interval)},1e3),r({type:"findpwd/getSMSCode",payload:(0,s.default)({},t,{token:l})}).then(function(){var e=a.props.findpwd.codeRes;200===e.code?(0,z.notificationTip)((0,y.formatMessage)({id:"get_code_success"}),!0):(a.setState({count:0}),clearInterval(a.interval))})}})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,r=t.form,l=t.dispatch;r.validateFields({force:!0},function(e,t){if(!e){a.state.prefix;l({type:"findpwd/submit",payload:(0,s.default)({},t)}).then(function(){var e=a.props.findpwd.findpwdRes;200===e.code?((0,z.notificationTip)((0,y.formatMessage)({id:"findpwd_success"}),!0),S.default.push({pathname:"/"})):console.log("\u627e\u56de\u5bc6\u7801\u63a5\u53e3\u8bf7\u6c42\u5931\u8d25")})}})},a.handleChange=function(e){var t=e.target.value;a.setState({value:t})},a.handleConfirmBlur=function(e){var t=e.target.value,r=a.state.confirmDirty;a.setState({confirmDirty:r||!!t})},a.checkConfirm=function(e,t,r){var l=a.props.form;t&&t!==l.getFieldValue("password")?r((0,y.formatMessage)({id:"validation.password.twice"})):r()},a.checkPassword=function(e,t,r){var l=a.state,i=l.visible,d=l.confirmDirty;if(t)if(a.setState({help:""}),i||a.setState({visible:!!t}),t.length<6||t.length>12)r("error");else{var n=a.props.form;t&&d&&n.validateFields(["confirm"],{force:!0}),r()}else a.setState({help:(0,y.formatMessage)({id:"validation.password.required"}),visible:!!t}),r("error")},a.refreshCode=function(){var e=(0,z.generateUUID)();a.setState({token:e,src:N.imgCodeURL+"?token="+e})},a.state={count:0,value:0,confirmDirty:!1,visible:!1,help:"",prefix:"86",src:""},a}return(0,m.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){this.refreshCode()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=e.form,a=e.submitting,r=t.getFieldDecorator,l=this.state,s=l.count,o=l.value,f=(l.prefix,l.help),u=l.visible,c=l.src;return b.default.createElement("div",{className:D.default.findpwd_main},b.default.createElement("div",{className:D.default.header},(0,y.formatMessage)({id:"app.findpwd.findpwd"})," "),b.default.createElement(M.default,{onSubmit:this.handleSubmit},b.default.createElement(F,{help:f},b.default.createElement(q.default,{visible:u,value:o},r("password",{rules:[{required:!0,message:(0,y.formatMessage)({id:"validation.password.required"})},{validator:(0,z.isMobile)()?"":this.checkPassword}]})(b.default.createElement(p.default,{size:"large",type:"password",placeholder:(0,y.formatMessage)({id:"form.findpwd.placeholder"}),onChange:this.handleChange})))),b.default.createElement(F,null,r("confirm",{rules:[{required:!0,message:(0,y.formatMessage)({id:"validation.confirm-password.required"})},{validator:this.checkConfirm}]})(b.default.createElement(p.default,{size:"large",type:"password",placeholder:(0,y.formatMessage)({id:"form.confirm-password.placeholder"})}))),b.default.createElement(F,null,b.default.createElement(d.default,{gutter:8},b.default.createElement(n.default,{span:16},r("resultCode",{rules:[{required:!0,message:(0,y.formatMessage)({id:"validation.resultCode.required"})}]})(b.default.createElement(p.default,{size:"large",placeholder:(0,y.formatMessage)({id:"form.resultCode.placeholder"})}))),b.default.createElement(n.default,{span:8},b.default.createElement("img",{className:D.default.imgCode,src:c,onClick:this.refreshCode})))),b.default.createElement(F,null,b.default.createElement(I,{compact:!0},r("mobile",{rules:[{required:!0,message:(0,y.formatMessage)({id:"validation.phone-number.required"})},{pattern:/^\d{11}$/,message:(0,y.formatMessage)({id:"validation.phone-number.wrong-format"})}]})(b.default.createElement(p.default,{size:"large",style:{width:"100%"},placeholder:(0,y.formatMessage)({id:"form.phone-number.placeholder"})})))),b.default.createElement(F,null,b.default.createElement(d.default,{gutter:8},b.default.createElement(n.default,{span:16},r("verifycode",{rules:[{required:!0,message:(0,y.formatMessage)({id:"validation.verification-code.required"})}]})(b.default.createElement(p.default,{size:"large",placeholder:(0,y.formatMessage)({id:"form.verification-code.placeholder"})}))),b.default.createElement(n.default,{span:8},b.default.createElement(i.default,{size:"large",disabled:s,className:D.default.getCaptcha,onClick:this.onGetCaptcha},s?"".concat(s," s"):(0,y.formatMessage)({id:"app.register.get-verification-code"}))))),b.default.createElement(F,null,b.default.createElement(i.default,{size:"large",loading:a,className:D.default.submit,type:"primary",htmlType:"submit"},b.default.createElement(y.FormattedMessage,{id:"app.findpwd.findpwd"})),b.default.createElement(k.default,{className:D.default.login,to:"/"},b.default.createElement(y.FormattedMessage,{id:"app.register-result.back-home"})))))}}]),t}(b.Component),w=E))||w)||w),U=P;t.default=U}}]);