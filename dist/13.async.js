(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"0C3M":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a("lwsE")),l=n(a("W8MJ")),r=n(a("a1gu")),i=n(a("Nsbk")),o=n(a("7W2i"));a("Lzxq");var d=n(a("q1tI")),u=n(a("yEr3")),m=n(a("q6al")),c=function(e){function t(){var e,a;(0,s.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,r.default)(this,(e=(0,i.default)(t)).call.apply(e,[this].concat(l))),a.state={editorState:u.default.createEditorState("<p>Hello <b>World!</b></p>"),outputHTML:"<p></p>"},a.handleChange=function(e){console.log(e),a.setState({editorState:e,outputHTML:e.toHTML()})},a.setEditorContentAsync=function(){a.isLivinig&&a.setState({editorState:u.default.createEditorState("<p>\u4f60\u597d\uff0c<b>\u4e16\u754c!</b><p>")})},a}return(0,o.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.isLivinig=!0,setTimeout(this.setEditorContentAsync,3e3)}},{key:"componentWillUnmount",value:function(){this.isLivinig=!1}},{key:"render",value:function(){var e=this.state,t=(e.editorState,e.outputHTML,["bold","italic","underline","text-color","separator","link","separator","media"]);return d.default.createElement("div",null,d.default.createElement("div",{className:m.default.editor_wrapper},d.default.createElement(u.default,{contentClassName:m.default.height,controls:t,onChange:this.handleChange})))}}]),t}(d.default.Component);t.default=c},"8eKy":function(e,t,a){e.exports={comment_box:"antd-pro\\components\\-comment-list\\style-comment_box",list_wrapper:"antd-pro\\components\\-comment-list\\style-list_wrapper",add_time:"antd-pro\\components\\-comment-list\\style-add_time",sub_comment:"antd-pro\\components\\-comment-list\\style-sub_comment",comment_wraper:"antd-pro\\components\\-comment-list\\style-comment_wraper",comment_btn_wrapper:"antd-pro\\components\\-comment-list\\style-comment_btn_wrapper",cancle_comment:"antd-pro\\components\\-comment-list\\style-cancle_comment",comment:"antd-pro\\components\\-comment-list\\style-comment","ant-list-empty-text":"antd-pro\\components\\-comment-list\\style-ant-list-empty-text"}},BpJf:function(e,t,a){e.exports={main:"antd-pro\\pages\\-question\\-answer-main",qdetailInfo:"antd-pro\\pages\\-question\\-answer-qdetailInfo",qtitle:"antd-pro\\pages\\-question\\-answer-qtitle",qicon:"antd-pro\\pages\\-question\\-answer-qicon",qTime:"antd-pro\\pages\\-question\\-answer-qTime",view_wrapper:"antd-pro\\pages\\-question\\-answer-view_wrapper",view:"antd-pro\\pages\\-question\\-answer-view",title_wrapper:"antd-pro\\pages\\-question\\-answer-title_wrapper",answer_avatar:"antd-pro\\pages\\-question\\-answer-answer_avatar",title:"antd-pro\\pages\\-question\\-answer-title",img_wrapper:"antd-pro\\pages\\-question\\-answer-img_wrapper",qDetail:"antd-pro\\pages\\-question\\-answer-qDetail",answer:"antd-pro\\pages\\-question\\-answer-answer",operator:"antd-pro\\pages\\-question\\-answer-operator",icon_wrapper:"antd-pro\\pages\\-question\\-answer-icon_wrapper",icon:"antd-pro\\pages\\-question\\-answer-icon",iconSelected:"antd-pro\\pages\\-question\\-answer-iconSelected",answer_btn:"antd-pro\\pages\\-question\\-answer-answer_btn",answer_center:"antd-pro\\pages\\-question\\-answer-answer_center",comment_wraper:"antd-pro\\pages\\-question\\-answer-comment_wraper",flex_wrapper:"antd-pro\\pages\\-question\\-answer-flex_wrapper",flex_left:"antd-pro\\pages\\-question\\-answer-flex_left",flex_right:"antd-pro\\pages\\-question\\-answer-flex_right",comment_btn_wrapper:"antd-pro\\pages\\-question\\-answer-comment_btn_wrapper",cancle_comment:"antd-pro\\pages\\-question\\-answer-cancle_comment",comment:"antd-pro\\pages\\-question\\-answer-comment",btn_wrapper:"antd-pro\\pages\\-question\\-answer-btn_wrapper",form_box:"antd-pro\\pages\\-question\\-answer-form_box",formitem:"antd-pro\\pages\\-question\\-answer-formitem",align_right:"antd-pro\\pages\\-question\\-answer-align_right",submit:"antd-pro\\pages\\-question\\-answer-submit",my_editor:"antd-pro\\pages\\-question\\-answer-my_editor",height:"antd-pro\\pages\\-question\\-answer-height"}},"I/0H":function(e,t,a){"use strict";var n=a("284h"),s=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var l=s(a("BMrR")),r=s(a("pVnL"));a("jCWc");var i=s(a("kPKH"));a("5NDa");var o=s(a("5rEg"));a("Mwp2");var d=s(a("VXEj"));a("Telt");var u=s(a("Tckk"));a("+L6B");var m=s(a("2/Rp")),c=s(a("lwsE")),p=s(a("W8MJ")),f=s(a("a1gu")),h=s(a("Nsbk")),w=s(a("7W2i"));a("Pwec");var g=s(a("CtXQ")),v=n(a("q1tI")),E=a("LLXN"),y=(s(a("mOP9")),s(a("wd/R"))),C=s(a("8eKy")),I={xs:24,sm:18,md:19,lg:20,xl:21,xxl:21},b={xs:24,sm:6,md:5,lg:4,xl:3,xxl:3},N=function(e){function t(e){var a;return(0,c.default)(this,t),a=(0,f.default)(this,(0,h.default)(t).call(this,e)),a.showInput=function(){var e=a.state.inputVisible;a.setState({inputVisible:!e})},a.saveInputRef=function(e){a.input=e},a.handleInputChange=function(e){a.setState({inputValue:e.target.value})},a.handleInputConfirm=function(){var e=a.state.inputValue;e||a.setState({inputVisible:!1})},a.handleClick=function(e){a.setState({currentId:e})},a.hideCommentBox=function(){a.setState({currentId:""})},a.handleComment=function(e,t){var n=a.state.inputValue,s=a.props.onHandleComment;s(n,e,t),a.setState({inputValue:""})},a.onLoadMore=function(e){var t=a.props.onGetMoreComment;t(e)},a.state={inputVisible:!0,inputValue:"",currentId:""},a}return(0,w.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this,t=this.props.listData,a=this.state,n=(a.inputVisible,a.inputValue),s=a.currentId,c=function(t){var a=t.commentId;return v.default.createElement("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"}},v.default.createElement(m.default,{onClick:function(){return e.onLoadMore(a)}},"\u67e5\u770b\u66f4\u591a"))};return v.default.createElement(d.default,{className:C.default.comment_box,size:"middle",itemLayout:"verticle",locale:{emptyText:" "},pagination:t.length>0&&{onChange:function(e){console.log(e)},pageSize:8},dataSource:t,renderItem:function(t){return v.default.createElement("div",{className:C.default.list_wrapper},v.default.createElement(d.default.Item,{key:t.addTime,actions:[v.default.createElement("span",{style:{marginLeft:46},onClick:function(){e.handleClick(t.id)}},v.default.createElement(g.default,{type:"message",style:{marginRight:8}}),0==t.commentsCount?"":t.commentsCount)]},v.default.createElement(d.default.Item.Meta,{avatar:v.default.createElement(u.default,{src:t.avatarFile}),title:v.default.createElement("div",null,v.default.createElement("a",null,t.userName),v.default.createElement("span",{className:C.default.add_time},(0,y.default)(t.addTime).format("YYYY-MM-DD HH:mm"))),description:t.message})),t.id===s&&v.default.createElement("div",{className:C.default.comment_wraper},v.default.createElement(l.default,{gutter:8},v.default.createElement(i.default,I,v.default.createElement(o.default,{ref:e.saveInputRef,type:"text",style:{width:"100%"},value:n,placeholder:(0,E.formatMessage)({id:"rate_to_best_answer"}),onChange:e.handleInputChange,onPressEnter:e.handleInputConfirm})),v.default.createElement(i.default,(0,r.default)({},b,{className:C.default.comment_btn_wrapper}),v.default.createElement("span",{className:C.default.cancle_comment,onClick:e.hideCommentBox},"\u53d6\u6d88"),v.default.createElement(m.default,{className:C.default.comment,type:"primary",onClick:function(){return e.handleComment(t.answerId,t.id)}},"\u8bc4\u8bba")))),v.default.createElement("div",{className:C.default.sub_comment},v.default.createElement(d.default,{locale:{emptyText:" "},loadMore:t.commentsCount>3&&3==t.commentlist.length?v.default.createElement(c,{commentId:t.id}):null,dataSource:t.commentlist,renderItem:function(e){return v.default.createElement(d.default.Item,{key:t.addTime},v.default.createElement(d.default.Item.Meta,{avatar:v.default.createElement(u.default,{src:e.avatarFile,size:"small"}),title:v.default.createElement("div",null,v.default.createElement("a",null,e.userName),v.default.createElement("span",{className:C.default.add_time},(0,y.default)(e.addTime).format("YYYY-MM-DD mm:ss"))),description:e.message}))}})))}})}}]),t}(v.Component),q=N;t.default=q},bQDc:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MzQyY2ZiYy01NmI5LTk4NDUtYTk5Mi0wYzEyYzA2NjAxMWQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTZFQzA0NjcxRDYwMTFFOUFGQzI4MDIyNEUzRTFGOTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTZFQzA0NjYxRDYwMTFFOUFGQzI4MDIyNEUzRTFGOTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRhODA4ZmRlLWU1ZDctM2Q0YS1hZWI5LTRiMzk3MmE2NjgwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MzQyY2ZiYy01NmI5LTk4NDUtYTk5Mi0wYzEyYzA2NjAxMWQiLz4gPC9y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"},gdxr:function(e,t,a){"use strict";var n=a("TqRt"),s=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var l=n(a("2/Rp"));a("14J3");var r=n(a("BMrR"));a("/zsF");var i=n(a("PArb"));a("jCWc");var o=n(a("kPKH"));a("DZo9");var d=n(a("8z0m"));a("Pwec");var u=n(a("CtXQ")),m=n(a("RIqP")),c=n(a("lwsE")),p=n(a("W8MJ")),f=n(a("a1gu")),h=n(a("Nsbk")),w=n(a("7W2i"));a("5NDa");var g=n(a("5rEg"));a("y8nQ");var v,E,y,C,I=n(a("Vl3Y")),b=s(a("q1tI")),N=a("MuoO"),q=n(a("usdK")),M=n(a("v99g")),k=(n(a("0C3M")),n(a("I/0H"))),x=n(a("yEr3")),S=a("Psm9"),V=(a("6xfc"),a("+n12")),j=a("LLXN"),T=n(a("wd/R")),R=n(a("BpJf")),Y=n(a("bQDc")),W={xs:24,sm:24,md:24,lg:24,xl:24,xxl:24},A=I.default.Item,L=g.default.TextArea,Z=["bold","italic","underline","text-color","separator","link","separator"],G=(v=(0,N.connect)(function(e){var t=e.global,a=e.question;return{global:t,question:a}}),E=I.default.create(),v(y=E((C=function(e){function t(e){var a;return(0,c.default)(this,t),a=(0,f.default)(this,(0,h.default)(t).call(this,e)),a.showInput=function(){var e=a.state.inputVisible;a.setState({inputVisible:!e})},a.saveInputRef=function(e){a.input=e},a.handleInputChange=function(e){a.setState({inputValue:e.target.value})},a.handleInputConfirm=function(){var e=a.state.inputValue;e||a.setState({inputVisible:!1})},a.getQuestionDetail=function(){var e=a.props.dispatch;e({type:"question/getDetail",id:a.id}).then(function(){var t=a.props.question.qDetailRes;if(t&&200==t.code){var n=t.data.answer;n&&e({type:"global/getOtherUserInfo",params:{uid:n.uid}}),n&&a.isVote(n.answerId),n&&a.getComment(n.answerId)}else setTimeout(function(){q.default.push("/")},500)})},a.isVote=function(e){if(sessionStorage.getItem("access_token")){var t=a.props.dispatch;t({type:"question/isVote",params:{answerId:e}})}},a.getComment=function(e){var t=a.props.dispatch;t({type:"question/getComment",params:{answerId:e}})},a.getMoreComment=function(e){a.commentId=e;var t=a.props.dispatch;t({type:"question/getMoreComment",params:{id:e}}).then(function(){var e=a.props.question.moreCommentRes;if(e&&200===e.code){var t=a.state.messages,n=(0,m.default)(t);n.forEach(function(t){t.id===a.commentId&&(t.commentlist=e.data)}),a.setState({messages:n})}})},a.handleVote=function(e,t){var n=a.props,s=n.dispatch,l=n.question.isVoteRes;if(l){var r=l.data;a.handleVoteTip(r,e,t)}else s({type:"question/isVote",params:{answerId:t}}).then(function(){var n=a.props,s=(n.dispatch,n.question.isVoteRes);s&&200===s.code&&a.handleVoteTip(s.data,e,t)})},a.handleVoteTip=function(e,t,n){var s=a.props.dispatch;1!==e?-1!==e?0===e&&s({type:"question/vote",params:{answerId:n,voteValue:t}}).then(function(){var e=a.props.question.isVoteRes;if(e&&200===e.code){var s=a.state,l=s.likeCount,r=s.dislikeCount;1==t?(l+=1,a.setState({likeCount:l})):(r++,a.setState({dislikeCount:r++})),a.isVote(n)}}):(0,V.notificationTip)((0,j.formatMessage)({id:"has_voted_dislike"}),!1):(0,V.notificationTip)((0,j.formatMessage)({id:"has_voted_like"}),!0)},a.handleComment=function(e,t,n){var s=a.props.dispatch;e?s({type:"question/comment",params:{answerId:t,message:e,commentId:n}}).then(function(){var s=a.props.question.commentedRes;if(s&&200===s.code){var l=JSON.parse(sessionStorage.getItem("user")),r=a.state,i=r.messages,o=r.commentCount,d=o,u=(0,m.default)(i);n?u.forEach(function(a){a.id===n&&(++a.commentsCount,a.commentlist.unshift({addTime:(new Date).getTime(),answerId:t,userName:l.userName,avatarFile:l.avatarFile,commentsCount:0,message:e}))}):u.unshift({id:s.data,addTime:(new Date).getTime(),answerId:t,userName:l.userName,avatarFile:l.avatarFile,commentsCount:0,commentlist:[],message:e}),a.setState({messages:u,inputValue:"",commentCount:++d})}}):(0,V.notificationTip)((0,j.formatMessage)({id:"not_edit_content"}))},a.handleChange=function(e){a.setState({editorState:e})},a.handleClick=function(){a.setState(function(e){var t=e.isFormVisible;return{isFormVisible:!t}})},a.uploadHandler=function(e){if(!e.file)return!1;var t=a.props.dispatch;t({type:"question/upload",payload:{type:"answer",file:e.file}}).then(function(){var e=a.props.question.uploadRes.data;a.setState({editorState:S.ContentUtils.insertMedias(a.state.editorState,[{type:"IMAGE",url:e.url}])})})},a.handlePlease=function(e){var t=a.props.dispatch;t({type:"question/perfectAnswer",params:{answerId:e,reason:(0,j.formatMessage)({id:"app.setting.user.please.answer"}),perfectAnswer:""}}).then(function(){(0,V.notificationTip)((0,j.formatMessage)({id:"app.setting.admin.answer"}),!0)})},a.handleSubmit=function(e,t,n){e.preventDefault();var s=a.props,l=s.dispatch,r=s.form.validateFields,i=a.state.editorState;if(t)r(function(e,a){e||l({type:"question/perfectAnswer",params:{answerId:t,reason:a.reason,perfectAnswer:i.toHTML()}}).then(function(){q.default.push({pathname:"/"})})});else{if(!i.toText())return void(0,V.notificationTip)((0,j.formatMessage)({id:"not_edit_content"}));l({type:"question/answer",params:{questionId:n,content:i.toHTML()}}).then(function(){q.default.push({pathname:"/"})})}},a.state={inputVisible:!1,inputValue:"",isFormVisible:!1,editorState:x.default.createEditorState(null),likeCount:0,dislikeCount:0,commentCount:0,messages:[]},a._comments=[],a.count=0,a.commentId=-1,a.id=e.match.params.id,a}return(0,w.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){this.getQuestionDetail()}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"question/destory"})}},{key:"render",value:function(){var e=this,t=this.props,a=t.question,n=a.qDetailRes,s=a.isVoteRes,m=a.commentRes,c=(a.moreCommentRes,t.form.getFieldDecorator,t.global.otherUserRes),p=this.state,f=p.isFormVisible,h=p.likeCount,w=p.dislikeCount,g=p.commentCount,v=p.messages,E={},y={};if(0===this.count&&n&&200===n.code&&m&&200===m.code){var C=n.data.answer;m.data;this.state.likeCount=C.agreeCount,this.state.dislikeCount=C.againstCount,this.state.commentCount=C.commentCount,this.state.messages=m.data,this.count=1}var N=[{key:"antd-uploader",type:"component",component:b.default.createElement(d.default,{accept:"image/*",showUploadList:!1,customRequest:this.uploadHandler},b.default.createElement("button",{type:"button",className:"control-item button upload-button","data-title":"\u63d2\u5165\u56fe\u7247"},b.default.createElement(u.default,{type:"picture",theme:"filled"})))}],q=!c||c&&200===c.code&&8===c.data.uid?Y.default:c.data.avatarFile,S=!c||c&&200===c.code&&8===c.data.uid?"\u5c0f\u767d\u8003\u7814":c.data.nickname||c.data.userName,V=0==h&&n&&n.data&&n.data.answer?n.data.answer.agreeCount:h,G=0==w&&n&&n.data&&n.data.answer?n.data.answer.againstCount:w,D=0==g&&n&&n.data&&n.data.answer?n.data.answer.commentCount:g,F=0==v.length&&m&&m.data?m.data:v,H=s&&1==s.data,_=(s&&s.data,s&&-1==s.data);n&&200===n.code&&(E=n.data.answer,y=n.data.question),m&&200===m.code&&(this._comments=m.data);var J=this.state,U=J.inputVisible,z=J.inputValue,P=J.editorState;return b.default.createElement(M.default,null,b.default.createElement("div",{className:R.default.main},b.default.createElement(r.default,null,b.default.createElement(o.default,W,b.default.createElement("div",{className:R.default.qdetailInfo},b.default.createElement("div",{className:R.default.qtitle},b.default.createElement(u.default,{type:"question",className:R.default.qicon}),b.default.createElement("span",null,y.title)),b.default.createElement("div",{className:R.default.qTime},b.default.createElement("span",null,"#\u63d0\u95ee\u65f6\u95f4\uff1a",(0,T.default)(y.addTime).format("YYYY-MM-DD")),b.default.createElement("span",{className:R.default.view_wrapper},b.default.createElement(u.default,{type:"eye",className:R.default.view}),y.viewCount))),b.default.createElement("div",{className:R.default.qDetail,dangerouslySetInnerHTML:{__html:y.detail}}),b.default.createElement("div",{className:R.default.img_wrapper},y.imgs&&y.imgs.map(function(e){return b.default.createElement("img",{src:e})}))),E&&E.answerId?b.default.createElement(o.default,W,b.default.createElement("div",{className:R.default.title_wrapper},b.default.createElement("img",{className:R.default.answer_avatar,src:q}),b.default.createElement("h3",{className:R.default.title},S)),b.default.createElement("div",{className:R.default.answer,dangerouslySetInnerHTML:{__html:E.answerContent}}),b.default.createElement("div",{className:R.default.operator},b.default.createElement("span",{className:R.default.icon_wrapper,onClick:function(){return e.handleVote(1,E.answerId)}},b.default.createElement(u.default,{type:"like",theme:H?"filled":"",className:H?R.default.iconSelected:R.default.icon}),V),b.default.createElement("span",{className:R.default.icon_wrapper,onClick:function(){return e.handleVote(-1,E.answerId)}},b.default.createElement(u.default,{type:"dislike",theme:_?"filled":"",className:R.default.icon}),G),b.default.createElement("span",{title:"\u8bc4\u8bba",className:R.default.icon_wrapper,onClick:this.showInput},b.default.createElement(u.default,{type:"message",className:R.default.icon}),D)),b.default.createElement(r.default,{className:R.default.answer_btn},b.default.createElement(o.default,{span:11,className:R.default.answer_center,onClick:function(){e.handlePlease(E.answerId)}},b.default.createElement(u.default,{type:"user-add",className:R.default.icon}),E&&E.answerId?(0,j.formatMessage)({id:"app.settings.pleasePerfect"}):(0,j.formatMessage)({id:"app.settings.pleaseAnswer"})),b.default.createElement(o.default,{span:2,className:R.default.answer_center},b.default.createElement(i.default,{type:"vertical"})),b.default.createElement(o.default,{span:11,className:R.default.answer_center,onClick:this.handleClick},b.default.createElement(u.default,{type:"form",className:R.default.icon}),E&&E.answerId?(0,j.formatMessage)({id:"app.settings.perfect"}):(0,j.formatMessage)({id:"app.settings.answer"}))),U&&b.default.createElement("div",{className:R.default.comment_wraper},b.default.createElement("div",{className:R.default.flex_wrapper},b.default.createElement("img",{className:R.default.flex_left,src:q}),b.default.createElement("div",{className:R.default.flex_right},b.default.createElement(L,{ref:this.saveInputRef,type:"text",rows:3,value:z,placeholder:(0,j.formatMessage)({id:"rate_to_best_answer"}),onChange:this.handleInputChange,onPressEnter:this.handleInputConfirm}),b.default.createElement("div",{className:R.default.comment_btn_wrapper},b.default.createElement(l.default,{type:"primary",className:R.default.comment,onClick:function(){return e.handleComment(z,E.answerId)}},"\u8bc4\u8bba")))),b.default.createElement(k.default,{listData:F,onHandleComment:this.handleComment,onGetMoreComment:this.getMoreComment}))):null),b.default.createElement(r.default,{className:R.default.form_box,style:{display:f?"block":"none"}},b.default.createElement(o.default,W,b.default.createElement(I.default,{onSubmit:function(t){return e.handleSubmit(t,y.bestAnswer,y.id)}},b.default.createElement(A,null,b.default.createElement(x.default,{value:P,placeholder:(0,j.formatMessage)({id:"form.answer.placeholder"}),contentClassName:R.default.height,className:R.default.my_editor,onChange:this.handleChange,controls:Z,extendControls:N})),b.default.createElement("div",{className:R.default.align_right},b.default.createElement(l.default,{htmlType:"submit",type:"primary",className:R.default.submit},(0,j.formatMessage)({id:"app.settings.submit.answer"}))))))))}}]),t}(b.PureComponent),y=C))||y)||y),D=G;t.default=D},q6al:function(e,t,a){e.exports={editor_wrapper:"antd-pro\\components\\-rich-text-editor\\style-editor_wrapper",height:"antd-pro\\components\\-rich-text-editor\\style-height"}}}]);