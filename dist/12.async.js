(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"0C3M":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("2Taf")),s=n(a("vZ4D")),r=n(a("l4Ni")),o=n(a("ujKo")),i=n(a("MhPg"));a("Lzxq");var u=n(a("q1tI")),d=n(a("yEr3")),c=n(a("q6al")),m=function(e){function t(){var e,a;(0,l.default)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return a=(0,r.default)(this,(e=(0,o.default)(t)).call.apply(e,[this].concat(s))),a.state={editorState:d.default.createEditorState("<p>Hello <b>World!</b></p>"),outputHTML:"<p></p>"},a.handleChange=function(e){console.log(e),a.setState({editorState:e,outputHTML:e.toHTML()})},a.setEditorContentAsync=function(){a.isLivinig&&a.setState({editorState:d.default.createEditorState("<p>\u4f60\u597d\uff0c<b>\u4e16\u754c!</b><p>")})},a}return(0,i.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.isLivinig=!0,setTimeout(this.setEditorContentAsync,3e3)}},{key:"componentWillUnmount",value:function(){this.isLivinig=!1}},{key:"render",value:function(){var e=this.state,t=(e.editorState,e.outputHTML,["bold","italic","underline","text-color","separator","link","separator","media"]);return u.default.createElement("div",null,u.default.createElement("div",{className:c.default.editor_wrapper},u.default.createElement(d.default,{contentClassName:c.default.height,controls:t,onChange:this.handleChange})))}}]),t}(u.default.Component);t.default=m},"8eKy":function(e,t,a){e.exports={comment_box:"antd-pro\\components\\-comment-list\\style-comment_box",add_time:"antd-pro\\components\\-comment-list\\style-add_time",modify_span:"antd-pro\\components\\-comment-list\\style-modify_span",modify_input:"antd-pro\\components\\-comment-list\\style-modify_input",sub_comment:"antd-pro\\components\\-comment-list\\style-sub_comment",comment_wraper:"antd-pro\\components\\-comment-list\\style-comment_wraper",comment_btn_wrapper:"antd-pro\\components\\-comment-list\\style-comment_btn_wrapper",cancle_comment:"antd-pro\\components\\-comment-list\\style-cancle_comment",comment:"antd-pro\\components\\-comment-list\\style-comment"}},BpJf:function(e,t,a){e.exports={main:"antd-pro\\pages\\-question\\-answer-main",qdetailInfo:"antd-pro\\pages\\-question\\-answer-qdetailInfo",qtitle:"antd-pro\\pages\\-question\\-answer-qtitle",qicon:"antd-pro\\pages\\-question\\-answer-qicon",qTime:"antd-pro\\pages\\-question\\-answer-qTime",view_wrapper:"antd-pro\\pages\\-question\\-answer-view_wrapper",view:"antd-pro\\pages\\-question\\-answer-view",heart_wrapper:"antd-pro\\pages\\-question\\-answer-heart_wrapper",heart:"antd-pro\\pages\\-question\\-answer-heart",title_wrapper:"antd-pro\\pages\\-question\\-answer-title_wrapper",answer_avatar:"antd-pro\\pages\\-question\\-answer-answer_avatar",title:"antd-pro\\pages\\-question\\-answer-title",img_wrapper:"antd-pro\\pages\\-question\\-answer-img_wrapper",qDetail:"antd-pro\\pages\\-question\\-answer-qDetail",answer:"antd-pro\\pages\\-question\\-answer-answer",operator:"antd-pro\\pages\\-question\\-answer-operator",icon_wrapper:"antd-pro\\pages\\-question\\-answer-icon_wrapper",icon:"antd-pro\\pages\\-question\\-answer-icon",iconSelected:"antd-pro\\pages\\-question\\-answer-iconSelected",answer_btn:"antd-pro\\pages\\-question\\-answer-answer_btn",answer_center:"antd-pro\\pages\\-question\\-answer-answer_center",comment_wraper:"antd-pro\\pages\\-question\\-answer-comment_wraper",flex_wrapper:"antd-pro\\pages\\-question\\-answer-flex_wrapper",flex_left:"antd-pro\\pages\\-question\\-answer-flex_left",flex_right:"antd-pro\\pages\\-question\\-answer-flex_right",textarea:"antd-pro\\pages\\-question\\-answer-textarea",comment_btn_wrapper:"antd-pro\\pages\\-question\\-answer-comment_btn_wrapper",cancle_comment:"antd-pro\\pages\\-question\\-answer-cancle_comment",comment:"antd-pro\\pages\\-question\\-answer-comment",btn_wrapper:"antd-pro\\pages\\-question\\-answer-btn_wrapper",form_box:"antd-pro\\pages\\-question\\-answer-form_box",formitem:"antd-pro\\pages\\-question\\-answer-formitem",align_right:"antd-pro\\pages\\-question\\-answer-align_right",submit:"antd-pro\\pages\\-question\\-answer-submit",my_editor:"antd-pro\\pages\\-question\\-answer-my_editor",height:"antd-pro\\pages\\-question\\-answer-height"}},DdK8:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=l(a("2Taf")),r=l(a("vZ4D")),o=l(a("l4Ni")),i=l(a("ujKo")),u=l(a("MhPg"));a("5NDa");var d=l(a("5rEg")),c=n(a("q1tI")),m=a("LLXN"),p=d.default.Search,f=function(e){function t(){return(0,s.default)(this,t),(0,o.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(p,{placeholder:(0,m.formatMessage)({id:"input.share.placeholder"}),onSearch:function(e){return console.log(e)},enterButton:!0}))}}]),t}(c.Component),h=f;t.default=h},"I/0H":function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var s=l(a("BMrR")),r=l(a("jehZ"));a("jCWc");var o=l(a("kPKH"));a("Mwp2");var i=l(a("VXEj"));a("5NDa");var u=l(a("5rEg"));a("Telt");var d=l(a("Tckk"));a("+L6B");var c=l(a("2/Rp")),m=l(a("gWZ8")),p=l(a("2Taf")),f=l(a("vZ4D")),h=l(a("l4Ni")),g=l(a("ujKo")),v=l(a("MhPg"));a("Pwec");var w=l(a("CtXQ")),y=n(a("q1tI")),C=a("LLXN"),E=(l(a("mOP9")),a("+n12")),I=l(a("wd/R")),b=l(a("8eKy")),N={xs:24,sm:18,md:19,lg:20,xl:21,xxl:21},q={xs:24,sm:6,md:5,lg:4,xl:3,xxl:3},M=function(e){var t=e.title,a=e.type,n=e.text,l=e.handleClick;return y.default.createElement("span",{onClick:l,style:{margin:"0 4px"}},y.default.createElement(w.default,{title:t,type:a,style:{marginRight:4}}),n)},S=function(e){function t(e){var a;return(0,p.default)(this,t),a=(0,h.default)(this,(0,g.default)(t).call(this,e)),a.showInput=function(){var e=a.state.inputVisible;a.setState({inputVisible:!e})},a.saveInputRef=function(e){a.input=e},a.getActions=function(e,t,n){var l=JSON.parse(sessionStorage.getItem("user")),s=[];return 0===e&&s.push(y.default.createElement(M,{title:"\u8bc4\u8bba",type:"message",text:0==n.commentsCount?"":n.commentsCount,handleClick:function(){return a.setCurrentId(n.id)}})),l&&l.uid===n.uid&&(s.push(y.default.createElement(M,{title:"\u4fee\u6539",type:"edit",text:"",handleClick:function(){return a.handleFocus(e,t,n)}})),s.push(y.default.createElement(M,{title:"\u5220\u9664",type:"delete",text:"",handleClick:function(){return a.handleDeleteComment(t,n)}}))),s},a.handleInputChange=function(e){a.setState({inputValue:e.target.value})},a.handleInputConfirm=function(){var e=a.state.inputValue;e||a.setState({inputVisible:!1})},a.setCurrentId=function(e){a.setState({currentId:e})},a.hideCommentBox=function(){a.setState({currentId:""})},a.handleComment=function(e,t){var n=a.state,l=n.prevValue,s=n.subPrevValue,r=(0,m.default)(l),o=(0,m.default)(s),i=t?o:r,u=a.state.inputValue;i.splice(0,0,u);var d=a.props.onHandleComment;d(u,e,t),a.setState({inputValue:"",prevValue:r,subPrevValue:o})},a.handleFocus=function(e,t,n){a.setState({currentInputId:n.id},function(){0===e?a["modifyInput".concat(t)].focus():a["subModifyInput".concat(t)].focus()})},a.handleModifyComment=function(e,t){a.setState({currentInputId:""});var n=a.state,l=n.prevValue,s=n.subPrevValue,r=(0,m.default)(l),o=(0,m.default)(s),i=t.commentId?o:r,u=t.commentId?a["subModifyInput".concat(e)]:a["modifyInput".concat(e)],d=u.state.value;if(d){if(d!==i[e]){var c=a.props.onHandleModifyComment;i[e]=d,c(d,t)}a.setState({prevValue:r,subPrevValue:o})}else u.setValue(i[e]||t.message)},a.handleDeleteComment=function(e,t){var n=a.state,l=n.prevValue,s=n.subPrevValue,r=(0,m.default)(l),o=(0,m.default)(s),i=t.commentId?o:r;i.splice(e,1);var u=a.props.onHandleDeleteComment;u(e,t),a.setState({prevValue:r,subPrevValue:o})},a.onLoadMore=function(e){var t=a.props.onGetMoreComment;t(e)},a.state={inputVisible:!0,inputValue:"",currentId:"",currentInputId:"",prevValue:[],subPrevValue:[]},a}return(0,v.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.listData,n=t.loading,l=this.state,m=(l.inputVisible,l.inputValue),p=l.currentId,f=l.currentInputId,h=l.prevValue,g=l.subPrevValue;console.log(g);var v=function(t){var a=t.commentId;return y.default.createElement("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"}},y.default.createElement(c.default,{onClick:function(){return e.onLoadMore(a)}},"\u67e5\u770b\u66f4\u591a"))};return y.default.createElement(i.default,{className:b.default.comment_box,loading:n,size:"middle",itemLayout:(0,E.isMobile)()?"vertical":"-",locale:{emptyText:" "},pagination:a.length>0&&{onChange:function(e){console.log(e)},pageSize:8},dataSource:a,renderItem:function(t,a){return y.default.createElement(y.Fragment,null,y.default.createElement(i.default.Item,{key:t.addTime,actions:e.getActions(0,a,t)},y.default.createElement(i.default.Item.Meta,{avatar:y.default.createElement(d.default,{src:t.avatarFile}),title:y.default.createElement("div",null,y.default.createElement("a",null,t.userName),y.default.createElement("span",{className:b.default.add_time},(0,I.default)(t.addTime).format("YYYY-MM-DD HH:mm"))),description:y.default.createElement(y.Fragment,null,y.default.createElement("span",{className:b.default.modify_span,style:{display:t.id===f?"none":"inline-block"}},h[a]||t.message),y.default.createElement(u.default,{defaultValue:t.message,className:b.default.modify_input,style:{display:t.id===f?"inline-block":"none"},ref:function(t){return e["modifyInput".concat(a)]=t},onBlur:function(){return e.handleModifyComment(a,t)}}))})),t.id===p&&y.default.createElement("div",{className:b.default.comment_wraper},y.default.createElement(s.default,{gutter:8},y.default.createElement(o.default,N,y.default.createElement(u.default,{ref:e.saveInputRef,type:"text",style:{width:"100%"},value:m,placeholder:(0,C.formatMessage)({id:"rate_to_best_answer"}),onChange:e.handleInputChange,onPressEnter:e.handleInputConfirm})),y.default.createElement(o.default,(0,r.default)({},q,{className:b.default.comment_btn_wrapper}),y.default.createElement("span",{className:b.default.cancle_comment,onClick:e.hideCommentBox},"\u53d6\u6d88"),y.default.createElement(c.default,{className:b.default.comment,type:"primary",onClick:function(){return e.handleComment(t.answerId,t.id)}},"\u8bc4\u8bba")))),y.default.createElement("div",{className:b.default.sub_comment},y.default.createElement(i.default,{locale:{emptyText:" "},itemLayout:(0,E.isMobile)()?"vertical":"-",loadMore:t.commentsCount>3&&t.commentlist.length<3||t.commentsCount>3&&3==t.commentlist.length?y.default.createElement(v,{commentId:t.id}):null,dataSource:t.commentlist,renderItem:function(a,n){return y.default.createElement(i.default.Item,{key:t.addTime,actions:e.getActions(1,n,a)},y.default.createElement(i.default.Item.Meta,{avatar:y.default.createElement(d.default,{src:a.avatarFile,size:"small"}),title:y.default.createElement("div",null,y.default.createElement("a",null,a.userName),y.default.createElement("span",{className:b.default.add_time},(0,I.default)(a.addTime).format("YYYY-MM-DD HH:mm"))),description:y.default.createElement(y.Fragment,null,y.default.createElement("span",{className:b.default.modify_span,style:{display:a.id===f?"none":"inline-block"}},g[n]||a.message),y.default.createElement(u.default,{defaultValue:a.message,ref:function(t){return e["subModifyInput".concat(n)]=t},className:b.default.modify_input,style:{display:a.id===f?"inline-block":"none"},onBlur:function(){e.handleModifyComment(n,a)}}))}))}})))}})}}]),t}(y.Component),V=S;t.default=V},bQDc:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MzQyY2ZiYy01NmI5LTk4NDUtYTk5Mi0wYzEyYzA2NjAxMWQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTZFQzA0NjcxRDYwMTFFOUFGQzI4MDIyNEUzRTFGOTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTZFQzA0NjYxRDYwMTFFOUFGQzI4MDIyNEUzRTFGOTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRhODA4ZmRlLWU1ZDctM2Q0YS1hZWI5LTRiMzk3MmE2NjgwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MzQyY2ZiYy01NmI5LTk4NDUtYTk5Mi0wYzEyYzA2NjAxMWQiLz4gPC9y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"},gdxr:function(e,t,a){"use strict";var n=a("g09b"),l=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bbsP");var s=n(a("/wGt"));a("+L6B");var r=n(a("2/Rp"));a("Telt");var o=n(a("Tckk"));a("14J3");var i=n(a("BMrR"));a("/zsF");var u=n(a("PArb"));a("jCWc");var d=n(a("kPKH"));a("DZo9");var c=n(a("8z0m"));a("Pwec");var m=n(a("CtXQ")),p=n(a("gWZ8")),f=n(a("2Taf")),h=n(a("vZ4D")),g=n(a("l4Ni")),v=n(a("ujKo")),w=n(a("MhPg"));a("5NDa");var y=n(a("5rEg"));a("y8nQ");var C,E,I,b,N=n(a("Vl3Y")),q=l(a("q1tI")),M=a("MuoO"),S=n(a("usdK")),V=n(a("v99g")),x=(n(a("0C3M")),n(a("I/0H"))),k=n(a("DdK8")),j=n(a("yEr3")),T=a("Psm9"),R=(a("6xfc"),a("+n12")),A=a("LLXN"),D=n(a("wd/R")),F=n(a("BpJf")),Y=n(a("bQDc")),Z={xs:24,sm:24,md:24,lg:24,xl:24,xxl:24},L=N.default.Item,W=y.default.TextArea,_=["bold","italic","underline","text-color","separator","link","separator"],G=(C=(0,M.connect)(function(e){var t=e.global,a=e.question;return{global:t,question:a}}),E=N.default.create(),C(I=E((b=function(e){function t(e){var a;return(0,f.default)(this,t),a=(0,g.default)(this,(0,v.default)(t).call(this,e)),a.saveInputRef=function(e){a.input=e},a.handleInputChange=function(e){a.setState({inputValue:e.target.value})},a.handleInputConfirm=function(){var e=a.state.inputValue;e||a.setState({inputVisible:!1})},a.getQuestionDetail=function(){var e=a.props.dispatch;e({type:"question/getDetail",id:a.id}).then(function(){var t=a.props.question.qDetailRes;if(t&&200==t.code){var n=t.data.answer;if(n&&e({type:"global/getOtherUserInfo",params:{uid:n.uid}}),n){a.isVote(n.answerId);var l=n.agreeCount,s=n.againstCount,r=n.commentCount;a.setState({agreeCount:l,againstCount:s,commentCount:r})}}else setTimeout(function(){S.default.push("/")},500)})},a.isVote=function(e){if(localStorage.getItem("access_token")){var t=a.props.dispatch;t({type:"question/isVote",params:{answerId:e}}).then(function(){var e=a.props.question.isVoteRes;e&&200===e.code&&a.setState({isAgree:e.data})})}},a.isFocus=function(e){if(localStorage.getItem("access_token")){var t=a.props.dispatch;t({type:"question/isFocus",payload:{questionId:e}}).then(function(){var e=a.props.question.isFocusRes;e&&200===e.code&&a.setState({isFocus:e.data})})}},a.showComment=function(e){var t=a.state.inputVisible;a.setState({inputVisible:!t}),0===a.requestCommetCount&&(a.getComment(e),a.requestCommetCount=1)},a.getComment=function(e){var t=a.props.dispatch;t({type:"question/getComment",params:{answerId:e}}).then(function(){var e=a.props.question.commentRes;e&&200===e.code&&a.setState({comments:e.data,loading:!1})})},a.getMoreComment=function(e){a.commentId=e;var t=a.props.dispatch;t({type:"question/getMoreComment",params:{id:e}}).then(function(){var e=a.props.question.moreCommentRes;if(e&&200===e.code){var t=a.state.comments,n=(0,p.default)(t);n.forEach(function(t){t.id===a.commentId&&(t.commentlist=e.data)}),a.setState({comments:n})}})},a.handleVote=function(e,t){var n=a.props,l=n.dispatch,s=n.question.isVoteRes;if(s){var r=s.data;a.handleVoteTip(r,e,t)}else l({type:"question/isVote",params:{answerId:t}}).then(function(){var n=a.props,l=(n.dispatch,n.question.isVoteRes);l&&200===l.code&&a.handleVoteTip(l.data,e,t)})},a.handleVoteTip=function(e,t,n){var l=a.props.dispatch;1!==e?-1!==e?0===e&&l({type:"question/vote",params:{answerId:n,voteValue:t}}).then(function(){var e=a.props.question.isVoteRes;if(e&&200===e.code){var l=a.state,s=l.agreeCount,r=l.againstCount;1==t?(s+=1,a.setState({agreeCount:s})):(r++,a.setState({againstCount:r++})),a.isVote(n)}}):(0,R.notificationTip)((0,A.formatMessage)({id:"has_voted_dislike"}),!1):(0,R.notificationTip)((0,A.formatMessage)({id:"has_voted_like"}),!0)},a.handleFocus=function(e,t){var n=a.props.dispatch;n({type:"question/focus",payload:{questionId:e,type:t}}).then(function(){var t=a.props.question.focusRes;t&&200===t.code&&a.isFocus(e)})},a.handleShare=function(){var e=a.props.dispatch;e({type:"question/setShareDrawer",payload:!0})},a.handleCancleShare=function(){var e=a.props.dispatch;e({type:"question/setShareDrawer",payload:!1})},a.handleComment=function(e,t,n){var l=a.props.dispatch;e?l({type:"question/comment",params:{answerId:t,message:e,commentId:n}}).then(function(){var l=a.props.question.commentedRes;if(l&&200===l.code){var s=JSON.parse(sessionStorage.getItem("user")),r=a.state,o=r.comments,i=r.commentCount,u=i,d=(0,p.default)(o);n?d.forEach(function(a){a.id===n&&(++a.commentsCount,a.commentlist.unshift({addTime:(new Date).getTime(),answerId:t,userName:s.userName,avatarFile:s.avatarFile,commentsCount:0,message:e,uid:s.uid}))}):d.unshift({id:l.data,addTime:(new Date).getTime(),answerId:t,userName:s.userName,avatarFile:s.avatarFile,commentsCount:0,commentlist:[],message:e,uid:s.uid}),a.setState({comments:d,inputValue:"",commentCount:++u})}}):(0,R.notificationTip)((0,A.formatMessage)({id:"not_edit_content"}))},a.handleModifyComment=function(e,t){var n=a.props.dispatch;n({type:"question/modifyComment",params:{message:e,commentId:t.id}}).then(function(){var e=a.props.question;e&&e.code})},a.handleDeleteComment=function(e,t){var n=a.state,l=n.comments,s=n.commentCount,r=a.props.dispatch,o=(0,p.default)(l),i=s;r({type:"question/deleteComment",params:{commentId:t.id}}).then(function(){var n=a.props.question.deleteCommentRes;if(n&&200===n.code){if(i--,t.commentId){for(var l=[],s=0,r=o.length;s<r;s++)if(t.commentId===o[s].id){l=o[s].commentlist,o[s].commentsCount--;break}l.splice(e,1)}else o.splice(e,1);a.setState({comments:o,commentCount:i}),a.setState({comments:o})}})},a.handleChange=function(e){a.setState({editorState:e})},a.handleClick=function(){a.setState(function(e){var t=e.isFormVisible;return{isFormVisible:!t}})},a.uploadHandler=function(e){if(!e.file)return!1;var t=a.props.dispatch;t({type:"global/upload",payload:{type:"answer",file:e.file}}).then(function(){var e=a.props.global.uploadRes.data;a.setState({editorState:T.ContentUtils.insertMedias(a.state.editorState,[{type:"IMAGE",url:e.url}])})})},a.handlePlease=function(e){var t=a.props.dispatch;t({type:"question/perfectAnswer",params:{answerId:e,reason:(0,A.formatMessage)({id:"app.setting.user.please.answer"}),perfectAnswer:""}}).then(function(){var e=a.props.question.pAnswerRes;e&&200===e.code&&(0,R.notificationTip)((0,A.formatMessage)({id:"app.setting.admin.answer"}),!0)})},a.handleSubmit=function(e,t,n){e.preventDefault();var l=a.props,s=l.dispatch,r=l.form.validateFields,o=a.state.editorState;if(t)r(function(e,n){e||s({type:"question/perfectAnswer",params:{answerId:t,reason:(0,A.formatMessage)({id:"app.setting.user.answer"}),perfectAnswer:o.toHTML()}}).then(function(){var e=a.props.question.pAnswerRes;e&&200===e.code&&((0,R.notificationTip)((0,A.formatMessage)({id:"app.setting.answer.check"}),!0),S.default.push({pathname:"/"}))})});else{if(!o.toText())return void(0,R.notificationTip)((0,A.formatMessage)({id:"not_edit_content"}));s({type:"question/answer",params:{questionId:n,content:o.toHTML()}}).then(function(){var e=a.props.question.answerRes;e&&200===e.code&&((0,R.notificationTip)((0,A.formatMessage)({id:"app.setting.answer.check"}),!0),S.default.push({pathname:"/"})),S.default.push({pathname:"/"})})}},a.state={inputVisible:!1,inputValue:"",isFormVisible:!1,editorState:j.default.createEditorState(null),agreeCount:0,againstCount:0,commentCount:0,comments:[],isFocus:!1,isAgree:0,loading:!0},a.requestCommetCount=0,a.commentId=-1,a.id=e.match.params.id,a.currentUser=sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")):null,a}return(0,w.default)(t,e),(0,h.default)(t,[{key:"componentDidMount",value:function(){this.getQuestionDetail(),this.isFocus(this.id)}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"question/destory"})}},{key:"render",value:function(){var e=this,t={},a={},n=this.props,l=n.question,p=l.qDetailRes,f=l.shareDrawerlVisible,h=n.form.getFieldDecorator,g=n.global.otherUserRes,v=this.state,w=v.inputVisible,C=v.inputValue,E=v.editorState,I=v.isFormVisible,b=v.agreeCount,M=v.againstCount,S=v.commentCount,T=v.comments,G=v.loading,H=v.isFocus,P=v.isAgree,J=[{key:"antd-uploader",type:"component",component:q.default.createElement(c.default,{accept:"image/*",showUploadList:!1,customRequest:this.uploadHandler},q.default.createElement("button",{type:"button",className:"control-item button upload-button","data-title":"\u63d2\u5165\u56fe\u7247"},q.default.createElement(m.default,{type:"picture",theme:"filled"})))}],U=!g||g&&200===g.code&&8===g.data.uid?Y.default:g.data.avatarFile,K=!g||g&&200===g.code&&8===g.data.uid?"\u5c0f\u767d\u8003\u7814":g.data.nickname||g.data.userName;return p&&200===p.code&&(t=p.data.answer,a=p.data.question),q.default.createElement(V.default,null,q.default.createElement("div",{className:F.default.main},q.default.createElement(i.default,null,q.default.createElement(d.default,Z,q.default.createElement("div",{className:F.default.qdetailInfo},q.default.createElement("div",{className:F.default.qtitle},q.default.createElement(m.default,{type:"question",className:F.default.qicon}),q.default.createElement("span",null,a.title)),q.default.createElement("div",{className:F.default.qTime},q.default.createElement("span",null,"#\u63d0\u95ee\u65f6\u95f4\uff1a",(0,D.default)(a.addTime).format("YYYY-MM-DD")),q.default.createElement("span",{className:F.default.view_wrapper,title:"\u6d4f\u89c8\u91cf"},q.default.createElement(m.default,{type:"eye",className:F.default.view}),a.viewCount),q.default.createElement("span",{className:F.default.heart_wrapper,onClick:function(){return e.handleFocus(a.id,H?"0":"1")},title:H?"\u53d6\u6d88\u5173\u6ce8":"\u5173\u6ce8"},q.default.createElement(m.default,{type:"heart",className:F.default.heart,theme:H?"filled":""})),q.default.createElement("span",{className:F.default.heart_wrapper,onClick:this.handleShare,title:"\u5206\u4eab"},q.default.createElement(m.default,{type:"share-alt",className:F.default.heart})))),q.default.createElement("div",{className:F.default.qDetail,dangerouslySetInnerHTML:{__html:a.detail}}),q.default.createElement("div",{className:F.default.img_wrapper},a.imgs&&a.imgs.map(function(e){return q.default.createElement("img",{src:e})}))),t?null:q.default.createElement(i.default,{className:F.default.answer_btn},q.default.createElement(d.default,{span:11,className:F.default.answer_center,onClick:function(){e.handlePlease(t.answerId)}},q.default.createElement(m.default,{type:"user-add",className:F.default.icon}),t&&t.answerId?(0,A.formatMessage)({id:"app.settings.pleasePerfect"}):(0,A.formatMessage)({id:"app.settings.pleaseAnswer"})),q.default.createElement(d.default,{span:2,className:F.default.answer_center},q.default.createElement(u.default,{type:"vertical"})),q.default.createElement(d.default,{span:11,className:F.default.answer_center,onClick:this.handleClick},q.default.createElement(m.default,{type:"form",className:F.default.icon}),t&&t.answerId?(0,A.formatMessage)({id:"app.settings.perfect"}):(0,A.formatMessage)({id:"app.settings.answer"}))),t&&t.answerId?q.default.createElement(d.default,Z,q.default.createElement("div",{className:F.default.title_wrapper},q.default.createElement("img",{className:F.default.answer_avatar,src:U}),q.default.createElement("h3",{className:F.default.title},K)),q.default.createElement("div",{className:F.default.answer,dangerouslySetInnerHTML:{__html:t.answerContent}}),q.default.createElement("div",{className:F.default.operator},q.default.createElement("span",{className:F.default.icon_wrapper,onClick:function(){return e.handleVote(1,t.answerId)}},q.default.createElement(m.default,{type:"like",theme:1===P?"filled":"",className:1===P?F.default.iconSelected:F.default.icon}),b),q.default.createElement("span",{className:F.default.icon_wrapper,onClick:function(){return e.handleVote(-1,t.answerId)}},q.default.createElement(m.default,{type:"dislike",theme:-1===P?"filled":"",className:-1===P?F.default.iconSelected:F.default.icon}),M),q.default.createElement("span",{title:"\u8bc4\u8bba",className:F.default.icon_wrapper,onClick:function(){return e.showComment(t.answerId)}},q.default.createElement(m.default,{type:"message",className:F.default.icon}),S)),q.default.createElement(i.default,{className:F.default.answer_btn},q.default.createElement(d.default,{span:11,className:F.default.answer_center,onClick:function(){e.handlePlease(t.answerId)}},q.default.createElement(m.default,{type:"user-add",className:F.default.icon}),t&&t.answerId?(0,A.formatMessage)({id:"app.settings.pleasePerfect"}):(0,A.formatMessage)({id:"app.settings.pleaseAnswer"})),q.default.createElement(d.default,{span:2,className:F.default.answer_center},q.default.createElement(u.default,{type:"vertical"})),q.default.createElement(d.default,{span:11,className:F.default.answer_center,onClick:this.handleClick},q.default.createElement(m.default,{type:"form",className:F.default.icon}),t&&t.answerId?(0,A.formatMessage)({id:"app.settings.perfect"}):(0,A.formatMessage)({id:"app.settings.answer"}))),w&&q.default.createElement("div",{className:F.default.comment_wraper},q.default.createElement("div",{className:F.default.flex_wrapper},this.currentUser?q.default.createElement("img",{className:F.default.flex_left,src:this.currentUser.avatarFile}):q.default.createElement(o.default,{size:32,icon:"user"}),q.default.createElement("div",{className:F.default.flex_right},q.default.createElement(W,{className:F.default.textarea,ref:this.saveInputRef,type:"text",rows:3,value:C,placeholder:(0,A.formatMessage)({id:"rate_to_best_answer"}),onChange:this.handleInputChange,onPressEnter:this.handleInputConfirm}),q.default.createElement("div",{className:F.default.comment_btn_wrapper},q.default.createElement(r.default,{type:"primary",className:F.default.comment,onClick:function(){return e.handleComment(C,t.answerId)}},"\u8bc4\u8bba")))),q.default.createElement(x.default,{listData:T,loading:G,onHandleComment:this.handleComment,onHandleModifyComment:this.handleModifyComment,onHandleDeleteComment:this.handleDeleteComment,onGetMoreComment:this.getMoreComment}))):null),q.default.createElement(i.default,{className:F.default.form_box,style:{display:I?"block":"none"}},q.default.createElement(d.default,Z,q.default.createElement(N.default,{onSubmit:function(t){return e.handleSubmit(t,a.bestAnswer,a.id)}},a.bestAnswer?q.default.createElement(L,{className:F.default.formitem},h("reason",{rules:[{required:!0,message:(0,A.formatMessage)({id:"validation.reason.required"})}]})(q.default.createElement(y.default,{size:"large",placeholder:(0,A.formatMessage)({id:"form.reason.placeholder"})}))):null,q.default.createElement(L,null,q.default.createElement(j.default,{value:E,placeholder:(0,A.formatMessage)({id:"form.answer.placeholder"}),contentClassName:F.default.height,className:F.default.my_editor,onChange:this.handleChange,controls:_,extendControls:J})),q.default.createElement("div",{className:F.default.align_right},q.default.createElement(r.default,{htmlType:"submit",type:"primary",className:F.default.submit},(0,A.formatMessage)({id:"app.settings.submit.answer"}))))))),q.default.createElement(s.default,{width:(0,R.isMobile)()?256:400,closable:!1,visible:f,footer:!1,onClose:this.handleCancleShare},q.default.createElement(k.default,null)))}}]),t}(q.PureComponent),I=b))||I)||I),H=G;t.default=H},q6al:function(e,t,a){e.exports={editor_wrapper:"antd-pro\\components\\-rich-text-editor\\style-editor_wrapper",height:"antd-pro\\components\\-rich-text-editor\\style-height"}}}]);