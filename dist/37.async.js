(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{cq3J:function(e,t,a){"use strict";var r=a("TqRt"),s=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var l=r(a("2/Rp"));a("14J3");var i=r(a("BMrR"));a("jCWc");var o=r(a("kPKH"));a("Q9mQ");var d=r(a("diRs"));a("MXD1");var n=r(a("CFYs")),u=r(a("MVZn")),c=r(a("lwsE")),f=r(a("W8MJ")),m=r(a("a1gu")),p=r(a("Nsbk")),g=r(a("7W2i"));a("5NDa");var h=r(a("5rEg"));a("OaEy");var v=r(a("2fM7"));a("y8nQ");var E,M,w,y,b=r(a("Vl3Y")),k=s(a("q1tI")),N=a("MuoO"),C=a("LLXN"),S=r(a("mOP9")),q=r(a("usdK")),F=r(a("5WY0")),P=a("+n12"),_=a("dCQc"),x=r(a("Yy7e")),D=b.default.Item,U=(v.default.Option,h.default.Group,{ok:k.default.createElement("div",{className:F.default.success},k.default.createElement(C.FormattedMessage,{id:"validation.password.strength.strong"})),pass:k.default.createElement("div",{className:F.default.warning},k.default.createElement(C.FormattedMessage,{id:"validation.password.strength.medium"})),poor:k.default.createElement("div",{className:F.default.error},k.default.createElement(C.FormattedMessage,{id:"validation.password.strength.short"})),long:k.default.createElement("div",{className:F.default.error},k.default.createElement(C.FormattedMessage,{id:"validation.password.strength.long"}))}),z={ok:"success",pass:"normal",poor:"exception",long:"exception"},R=(E=(0,N.connect)(function(e){var t=e.register,a=e.loading;return{register:t,submitting:a.effects["register/submit"]}}),M=b.default.create(),E(w=M((y=function(e){function t(e){var a;return(0,c.default)(this,t),a=(0,m.default)(this,(0,p.default)(t).call(this,e)),a.onGetCaptcha=function(){var e=a.props,t=e.form.validateFields,r=e.dispatch,s=a.state.token;t(["resultCode","mobile"],function(e,t){if(!e){var l=59;a.setState({count:l}),a.interval=setInterval(function(){l-=1,a.setState({count:l}),0===l&&clearInterval(a.interval)},1e3),r({type:"register/getSMSCode",payload:(0,u.default)({},t,{token:s})}).then(function(){var e=a.props.register.codeRes;200===e.code?(0,P.notificationTip)((0,C.formatMessage)({id:"get_code_success"}),!0):(a.setState({count:0}),clearInterval(a.interval))})}})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,r=t.form,s=t.dispatch;r.validateFields({force:!0},function(e,t){if(!e){a.state.prefix;s({type:"register/submit",payload:(0,u.default)({},t)}).then(function(){var e=a.props.register.registerRes;200===e.code&&((0,P.notificationTip)((0,C.formatMessage)({id:"register_success"}),!0),q.default.push({pathname:"/user/register-result"}))})}})},a.getPasswordStatus=function(){var e=a.props.form,t=e.getFieldValue("password");return t&&t.length>9&&t.length<13?"ok":t&&t.length>5&&t.length<13?"pass":t&&t.length>12?"long":"poor"},a.handleConfirmBlur=function(e){var t=e.target.value,r=a.state.confirmDirty;a.setState({confirmDirty:r||!!t})},a.checkConfirm=function(e,t,r){var s=a.props.form;t&&t!==s.getFieldValue("password")?r((0,C.formatMessage)({id:"validation.password.twice"})):r()},a.checkUserName=function(e,t,r){var s=a.props.dispatch;t&&s({type:"register/checkUserNameExisted",payload:{userName:t}}).then(function(){var e=a.props.register.checkUserNameRes;e&&200===e.code?e.data?r((0,C.formatMessage)({id:"user_name_already_exist"})):r():r((0,C.formatMessage)({id:"request_faild"}))})},a.checkMobile=function(e,t,r){var s=a.props.dispatch;/\d{11}$/.test(t)&&s({type:"register/checkUserMobileExisted",payload:{mobile:t}}).then(function(){var e=a.props.register.checkMobileRes;e&&200===e.code?e.data?r((0,C.formatMessage)({id:"mobile_already_exist"})):r():r((0,C.formatMessage)({id:"request_faild"}))})},a.checkPassword=function(e,t,r){var s=a.state,l=s.visible,i=s.confirmDirty;if(t)if(a.setState({help:""}),l||a.setState({visible:!!t}),t.length<6||t.length>12)r("error");else{var o=a.props.form;t&&i&&o.validateFields(["confirm"],{force:!0}),r()}else a.setState({help:(0,C.formatMessage)({id:"validation.password.required"}),visible:!!t}),r("error")},a.changePrefix=function(e){a.setState({prefix:e})},a.renderPasswordProgress=function(){var e=a.props.form,t=e.getFieldValue("password"),r=a.getPasswordStatus();return t&&t.length?k.default.createElement("div",{className:F.default["progress-".concat(r)]},k.default.createElement(n.default,{status:z[r],className:F.default.progress,strokeWidth:6,percent:10*t.length>100?100:10*t.length,showInfo:!1})):null},a.refreshCode=function(){var e=(0,P.generateUUID)();a.setState({token:e,src:_.imgCodeURL+"?token="+e})},a.state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86",src:""},a}return(0,g.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){this.refreshCode()}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.form,a=e.register,r=t.getFieldValue("mail");"ok"===a.status&&q.default.push({pathname:"/user/register-result",state:{account:r}})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=e.form,a=e.submitting,r=t.getFieldDecorator,s=this.state,n=s.count,u=(s.prefix,s.help),c=s.visible,f=s.src;return console.log(f),k.default.createElement("div",{className:F.default.main},k.default.createElement("div",{className:F.default.header},k.default.createElement(S.default,{to:"/"},k.default.createElement("img",{alt:"logo",className:F.default.logo,src:x.default}))),k.default.createElement(b.default,{onSubmit:this.handleSubmit},k.default.createElement(D,null,r("userName",{rules:[{required:!0,message:(0,C.formatMessage)({id:"validation.userName.required"})},{pattern:/([a-zA-Z0-9\u4e00-\u9fa5]){4,20}$/,message:(0,C.formatMessage)({id:"validation.userName.wrong-format"})},{validator:this.checkUserName}]})(k.default.createElement(h.default,{size:"large",placeholder:(0,C.formatMessage)({id:"form.userName.placeholder"})}))),k.default.createElement(D,{help:u},k.default.createElement(d.default,{getPopupContainer:function(e){return e.parentNode},content:k.default.createElement("div",{style:{padding:"4px 0"}},U[this.getPasswordStatus()],this.renderPasswordProgress(),k.default.createElement("div",{style:{marginTop:10}},k.default.createElement(C.FormattedMessage,{id:"validation.password.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:c},r("password",{rules:[{validator:this.checkPassword}]})(k.default.createElement(h.default,{size:"large",type:"password",placeholder:(0,C.formatMessage)({id:"form.findpwd.placeholder"})})))),k.default.createElement(D,null,r("confirm",{rules:[{required:!0,message:(0,C.formatMessage)({id:"validation.confirm-password.required"})},{validator:this.checkConfirm}]})(k.default.createElement(h.default,{size:"large",type:"password",placeholder:(0,C.formatMessage)({id:"form.confirm-password.placeholder"})}))),k.default.createElement(D,null,k.default.createElement(i.default,{gutter:8},k.default.createElement(o.default,{span:16},r("resultCode",{rules:[{required:!0,message:(0,C.formatMessage)({id:"validation.resultCode.required"})}]})(k.default.createElement(h.default,{size:"large",placeholder:(0,C.formatMessage)({id:"form.resultCode.placeholder"})}))),k.default.createElement(o.default,{span:8},k.default.createElement("img",{title:(0,C.formatMessage)({id:"change_img_code"}),className:F.default.imgCode,src:f,onClick:this.refreshCode})))),k.default.createElement(D,null,r("mobile",{rules:[{required:!0,message:(0,C.formatMessage)({id:"validation.phone-number.required"})},{pattern:/^\d{11}$/,message:(0,C.formatMessage)({id:"validation.phone-number.wrong-format"})},{validator:this.checkMobile}]})(k.default.createElement(h.default,{size:"large",placeholder:(0,C.formatMessage)({id:"form.phone-number.placeholder"})}))),k.default.createElement(D,null,k.default.createElement(i.default,{gutter:8},k.default.createElement(o.default,{span:16},r("verifycode",{rules:[{required:!0,message:(0,C.formatMessage)({id:"validation.verification-code.required"})}]})(k.default.createElement(h.default,{size:"large",placeholder:(0,C.formatMessage)({id:"form.verification-code.placeholder"})}))),k.default.createElement(o.default,{span:8},k.default.createElement(l.default,{size:"large",disabled:n,className:F.default.getCaptcha,onClick:this.onGetCaptcha},n?"".concat(n," s"):(0,C.formatMessage)({id:"app.register.get-verification-code"}))))),k.default.createElement(D,null,k.default.createElement(l.default,{size:"large",loading:a,className:F.default.submit,type:"primary",htmlType:"submit"},k.default.createElement(C.FormattedMessage,{id:"app.register.register"})),k.default.createElement(S.default,{className:F.default.login,to:"/User/Login"},k.default.createElement(C.FormattedMessage,{id:"app.register.sign-in"})))))}}]),t}(k.Component),w=y))||w)||w),I=R;t.default=I}}]);