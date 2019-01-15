(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{AlsA:function(e,t,a){"use strict";var s=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var d=s(a("2/Rp"));a("Q9mQ");var l=s(a("diRs"));a("5NDa");var o=s(a("5rEg"));a("MXD1");var i=s(a("CFYs"));a("miYZ");var n=s(a("tsqr")),u=s(a("MVZn")),f=s(a("lwsE")),c=s(a("W8MJ")),m=s(a("a1gu")),p=s(a("Nsbk")),g=s(a("7W2i"));a("y8nQ");var h,v,w,y,E=s(a("Vl3Y")),M=r(a("q1tI")),k=a("MuoO"),b=a("LLXN"),P=s(a("usdK")),N=s(a("mOP9")),F=s(a("5WY0")),S=s(a("fZJM")),C=a("dCQc"),q=s(a("Yy7e")),D=E.default.Item,_={ok:M.default.createElement("div",{className:F.default.success},M.default.createElement(b.FormattedMessage,{id:"validation.password.strength.strong"})),pass:M.default.createElement("div",{className:F.default.warning},M.default.createElement(b.FormattedMessage,{id:"validation.password.strength.medium"})),poor:M.default.createElement("div",{className:F.default.error},M.default.createElement(b.FormattedMessage,{id:"validation.password.strength.short"}))},I={ok:"success",pass:"normal",poor:"exception"},R=(h=(0,k.connect)(function(e){var t=e.findpwd,a=e.loading;return{findpwd:t,submitting:a.effects["findpwd/submit"]}}),v=E.default.create(),h(w=v((y=function(e){function t(e){var a;return(0,f.default)(this,t),a=(0,m.default)(this,(0,p.default)(t).call(this,e)),a.getPasswordStatus=function(){var e=a.props.form,t=e.getFieldValue("password");return t&&t.length>9?"ok":t&&t.length>5?"pass":"poor"},a.handleSubmit=function(e){e.preventDefault();var t=a.props,s=t.form,r=t.dispatch;s.validateFields({force:!0},function(e,t){e||r({type:"findpwd/modifyPwd",payload:(0,u.default)({},t),token:sessionStorage.getItem("access_token")}).then(function(){var e=a.props.findpwd.modifyPwdRes;if(200===e.code)n.default.success((0,b.formatMessage)({id:"modifypwd_success"})),P.default.push({pathname:"/user/login"});else{var t=e.msg,s=(0,b.formatMessage)({id:t})?(0,b.formatMessage)({id:t}):(0,b.formatMessage)({id:"modifypwd_faild"});n.default.error(s)}})})},a.checkConfirm=function(e,t,s){var r=a.props.form;t&&t!==r.getFieldValue("password")?s((0,b.formatMessage)({id:"validation.password.twice"})):s()},a.checkPassword=function(e,t,s){var r=a.state,d=r.visible,l=r.confirmDirty;if(t)if(a.setState({help:""}),d||a.setState({visible:!!t}),t.length<6||t.length>12)s("error");else{var o=a.props.form;t&&l&&o.validateFields(["confirm"],{force:!0}),s()}else a.setState({help:(0,b.formatMessage)({id:"validation.password.required"}),visible:!!t}),s("error")},a.renderPasswordProgress=function(){var e=a.props.form,t=e.getFieldValue("password"),s=a.getPasswordStatus();return t&&t.length?M.default.createElement("div",{className:F.default["progress-".concat(s)]},M.default.createElement(i.default,{status:I[s],className:F.default.progress,strokeWidth:6,percent:10*t.length>100?100:10*t.length,showInfo:!1})):null},a.refreshCode=function(){var e=S.default.sha256().digest("hex");a.setState({token:e,src:C.imgCodeURL+"?token="+e})},a.state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86",src:""},a}return(0,g.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.refreshCode()}},{key:"componentDidUpdate",value:function(){var e=this.props,t=(e.form,e.findpwd);"ok"===t.status&&P.default.push({pathname:"/user/findpwd-result",state:{account:account}})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=e.form,a=e.submitting,s=t.getFieldDecorator,r=this.state,i=r.help,n=r.visible;return M.default.createElement("div",{className:F.default.main},M.default.createElement("div",{className:F.default.header},M.default.createElement(N.default,{to:"/"},M.default.createElement("img",{alt:"logo",className:F.default.logo,src:q.default}))),M.default.createElement(E.default,{onSubmit:this.handleSubmit},M.default.createElement(D,null,s("oldPassword",{rules:[{required:!0,message:(0,b.formatMessage)({id:"validation.old-password.required"})}]})(M.default.createElement(o.default,{size:"large",type:"password",placeholder:(0,b.formatMessage)({id:"form.old-password.placeholder"})}))),M.default.createElement(D,{help:i},M.default.createElement(l.default,{getPopupContainer:function(e){return e.parentNode},content:M.default.createElement("div",{style:{padding:"4px 0"}},_[this.getPasswordStatus()],this.renderPasswordProgress(),M.default.createElement("div",{style:{marginTop:10}},M.default.createElement(b.FormattedMessage,{id:"validation.password.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:n},s("password",{rules:[{validator:this.checkPassword}]})(M.default.createElement(o.default,{size:"large",type:"password",placeholder:(0,b.formatMessage)({id:"form.findpwd.placeholder"})})))),M.default.createElement(D,null,s("confirm",{rules:[{required:!0,message:(0,b.formatMessage)({id:"validation.confirm-password.required"})},{validator:this.checkConfirm}]})(M.default.createElement(o.default,{size:"large",type:"password",placeholder:(0,b.formatMessage)({id:"form.confirm-password.placeholder"})}))),M.default.createElement(D,null,M.default.createElement(d.default,{className:F.default.modify_btn,size:"large",loading:a,type:"primary",htmlType:"submit"},M.default.createElement(b.FormattedMessage,{id:"app.modifypwd.modifypwd"})))))}}]),t}(M.Component),w=y))||w)||w),V=R;t.default=V}}]);