(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{Q1Ae:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("MVZn")),u=n(a("ZDp4")),s=n(a("o0o1")),l=a("dCQc"),o={namespace:"question",state:{moreCommentRes:{}},effects:{upload:s.default.mark(function e(t,a){var n,r,u,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,u=a.put,e.next=4,r(l.fileUpload,n);case 4:return o=e.sent,e.next=7,u({type:"uploadHandle",payload:o});case 7:case"end":return e.stop()}},e,this)}),submit:s.default.mark(function e(t,a){var n,r,u,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,u=a.put,e.next=4,r(l.addQuestion,n);case 4:return o=e.sent,e.next=7,u({type:"addQuestionHandle",payload:o});case 7:case"end":return e.stop()}},e,this)}),getDetail:s.default.mark(function e(t,a){var n,r,u,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.id,r=a.call,u=a.put,e.next=4,r(l.getQdetail,n);case 4:return o=e.sent,e.next=7,u({type:"getDetailHandel",payload:o});case 7:case"end":return e.stop()}},e,this)}),isVote:s.default.mark(function e(t,a){var n,r,u,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,u=a.put,e.next=4,r(l.isVote,n);case 4:return o=e.sent,e.next=7,u({type:"isVoteHandle",payload:o});case 7:case"end":return e.stop()}},e,this)}),getComment:s.default.mark(function e(t,a){var n,r,u,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,u=a.put,e.next=4,r(l.getComment,n);case 4:return o=e.sent,e.next=7,u({type:"getCommentHandle",payload:o});case 7:case"end":return e.stop()}},e,this)}),getMoreComment:s.default.mark(function e(t,a){var n,r,u,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,u=a.put,e.next=4,r(l.getMoreComment,n);case 4:return o=e.sent,e.next=7,u({type:"getMoreCommentHandle",payload:o});case 7:case"end":return e.stop()}},e,this)}),vote:s.default.mark(function e(t,a){var n,r,u,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,u=a.put,e.next=4,r(l.vote,n);case 4:return o=e.sent,e.next=7,u({type:"voteHandle",payload:o});case 7:case"end":return e.stop()}},e,this)}),comment:s.default.mark(function e(t,a){var n,r,u,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,u=a.put,e.next=4,r(l.comment,n);case 4:return o=e.sent,e.next=7,u({type:"commentHandle",payload:o});case 7:case"end":return e.stop()}},e,this)}),perfectAnswer:s.default.mark(function e(t,a){var n,r,u,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,u=a.put,e.next=4,r(l.perfect,n);case 4:return o=e.sent,e.next=7,u({type:"perfectAnswerHandle",payload:o});case 7:case"end":return e.stop()}},e,this)}),answer:s.default.mark(function e(t,a){var n,r,u,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,u=a.put,e.next=4,r(l.answer,n);case 4:return o=e.sent,e.next=7,u({type:"answerHandle",payload:o});case 7:case"end":return e.stop()}},e,this)}),destory:s.default.mark(function e(t,a){var n;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return(0,u.default)(t),n=a.put,e.next=4,n({type:"destroyHandle",payload:{moreCommentRes:{}}});case 4:case"end":return e.stop()}},e,this)})},reducers:{uploadHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{uploadRes:a})},addQuestionHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{addQuestionRes:a})},getDetailHandel:function(e,t){var a=t.payload;return(0,r.default)({},e,{qDetailRes:a})},perfectAnswerHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{pAnswerRes:a})},answerHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{answerRes:a})},isVoteHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{isVoteRes:a})},voteHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{voteRes:a})},commentHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{commentRes:a})},getCommentHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{commentRes:a})},getMoreCommentHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{moreCommentRes:a})},destroyHandle:function(e,t){var a=t.payload;return(0,r.default)({},a)}}};t.default=o}}]);