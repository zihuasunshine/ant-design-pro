(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{zMb4:function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var s=n(a("BMrR"));a("jCWc");var r=n(a("kPKH"));a("IzEo");var u=n(a("bx4M"));a("Pwec");var d=n(a("CtXQ"));a("5NDa");var c=n(a("5rEg"));a("+BJd");var i=n(a("mr32"));a("/zsF");var o=n(a("PArb")),f=n(a("RIqP"));a("miYZ");var p,m,h,g=n(a("tsqr")),v=n(a("lwsE")),E=n(a("W8MJ")),b=n(a("a1gu")),y=n(a("Nsbk")),k=n(a("7W2i")),w=l(a("q1tI")),C=a("MuoO"),T=(n(a("mOP9")),n(a("usdK"))),I=a("LLXN"),N=n(a("v99g")),S=n(a("YiZ1")),P=(p=(0,C.connect)(function(e){var t=e.center,a=e.loading,n=(e.user,e.project);return{center:t,listLoading:a.effects["list/fetch"],currentUserLoading:a.effects["user/fetchCurrent"],project:n,projectLoading:a.effects["project/fetchNotice"]}}),p((h=function(e){function t(e){var a;return(0,v.default)(this,t),a=(0,b.default)(this,(0,y.default)(t).call(this,e)),a.onTabChange=function(e){var t=a.props.match;switch(e){case"waitAnswer":T.default.push("".concat(t.url,"/waitAnswer/").concat(a.uid));break;case"myQuestion":T.default.push("".concat(t.url,"/myQuestion"));break;case"myAnswer":T.default.push("".concat(t.url,"/myAnswer"));break;default:break}},a.showInput=function(){a.setState({inputVisible:!0},function(){return a.input.focus()})},a.saveInputRef=function(e){a.input=e},a.handleInputChange=function(e){a.setState({inputValue:e.target.value})},a.handleInputConfirm=function(){var e=a.props.dispatch,t=a.state.inputValue,n=a.state.newTags;t?n.indexOf(t)>-1?g.default.error((0,I.formatMessage)({id:"tag_already_exists"})):(e({type:"center/addTag",tag:t,token:sessionStorage.getItem("access_token")}).then(function(){var e=a.props.center.addTagRes;200===e.code&&(n=[].concat((0,f.default)(n),[{id:"".concat(e.data),text:t}]),a.setState({newTags:n}))}),a.setState({inputVisible:!1,inputValue:""})):a.setState({inputVisible:!1})},a.handleClose=function(e){var t=a.props.dispatch;t({type:"center/deleteTag",tagId:e,token:sessionStorage.getItem("access_token")}).then(function(){var e=a.props.center.deleteTagRes;if(200===e.code);else{var t=addTagRes,n=t.msg;g.default.error((0,I.formatMessage)({id:n}))}})},a.state={newTags:e.currentUser?e.currentUser.tags:[],inputVisible:!1,inputValue:""},a.count=0,a}return(0,k.default)(t,e),(0,E.default)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.newTags,n=t.inputVisible,l=t.inputValue,f=this.props.center.otherUserRes,p=f&&200===f.code?f.data:JSON.parse(sessionStorage.getItem("user")),m=this.props,h=m.listLoading,g=m.currentUserLoading,v=(m.project.notice,m.projectLoading,m.match),E=m.location,b=m.children;0===this.count&&p&&(this.state.newTags=p.tags,this.count=1);var y=0==a.length&&p?p.tags:a,k=[{key:"myQuestion",tab:w.default.createElement("span",null,"\u6211\u7684\u63d0\u95ee ",w.default.createElement("span",{style:{fontSize:14}}))},{key:"myAnswer",tab:w.default.createElement("span",null,"\u6211\u7684\u56de\u7b54 ",w.default.createElement("span",{style:{fontSize:14}}))}];return w.default.createElement(N.default,{className:S.default.userCenter},w.default.createElement(s.default,{gutter:24},w.default.createElement(r.default,{lg:7,md:24},w.default.createElement(u.default,{bordered:!1,style:{marginBottom:24},loading:g},p&&Object.keys(p).length?w.default.createElement("div",null,w.default.createElement("div",{className:S.default.avatarHolder},w.default.createElement("img",{alt:"",src:p.avatarFile}),w.default.createElement("div",{className:S.default.name},p.nickname),w.default.createElement("div",null,"\u4e2a\u4eba\u4e3b\u9875\uff1a",p.urlToken?p.urlToken:"\u6682\u65e0")),w.default.createElement("div",{className:S.default.detail},w.default.createElement("p",null,w.default.createElement("i",{className:S.default.address}),w.default.createElement("span",null,p.province,p.city))),w.default.createElement(o.default,{dashed:!0}),w.default.createElement("div",{className:S.default.center},"\u7814\u7a76\u751f\u9662\uff1a",p.applicationSchool?p.applicationSchool:"\u6682\u65e0"),w.default.createElement("div",{className:S.default.center},"\u4e13\u4e1a\uff1a",p.applicationProfession?p.applicationProfession:"\u6682\u65e0"),w.default.createElement(o.default,{dashed:!0}),w.default.createElement("div",{className:S.default.tags},w.default.createElement("div",{className:S.default.tagsTitle},"\u6807\u7b7e"),y.map(function(t){return w.default.createElement(i.default,{closable:!0,key:"key"+t.id,onClose:function(){return e.handleClose(t.id)}},t.text)}),n&&w.default.createElement(c.default,{ref:this.saveInputRef,type:"text",size:"small",style:{width:78},value:l,onChange:this.handleInputChange,onBlur:this.handleInputConfirm,onPressEnter:this.handleInputConfirm}),!n&&w.default.createElement(i.default,{onClick:this.showInput,style:{background:"#fff",borderStyle:"dashed"}},w.default.createElement(d.default,{type:"plus"})))):"loading...")),w.default.createElement(r.default,{lg:17,md:24},w.default.createElement(u.default,{className:S.default.tabsCard,bordered:!1,tabList:k,activeTabKey:E.pathname.replace("".concat(v.path,"/"),""),onTabChange:this.onTabChange,loading:h},b))))}}]),t}(w.PureComponent),m=h))||m),V=P;t.default=V}}]);