(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{Q1Ae:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("MVZn")),u=n(a("o0o1")),s=a("dCQc"),l={namespace:"question",state:{moreCommentRes:{}},effects:{upload:u.default.mark(function e(t,a){var n,r,l,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,l=a.put,e.next=4,r(s.fileUpload,n);case 4:return o=e.sent,e.next=7,l({type:"uploadHandle",payload:o});case 7:case"end":return e.stop()}},e,this)}),submit:u.default.mark(function e(t,a){var n,r,l,o,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=t.token,l=a.call,o=a.put,e.next=4,l(s.addQuestion,n,r);case 4:return c=e.sent,e.next=7,o({type:"addQuestionHandle",payload:c});case 7:case"end":return e.stop()}},e,this)}),getDetail:u.default.mark(function e(t,a){var n,r,l,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.id,r=a.call,l=a.put,e.next=4,r(s.getQdetail,n);case 4:return o=e.sent,e.next=7,l({type:"getDetailHandel",payload:o});case 7:case"end":return e.stop()}},e,this)}),isVote:u.default.mark(function e(t,a){var n,r,l,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,l=a.put,e.next=4,r(s.isVote,n);case 4:return o=e.sent,e.next=7,l({type:"isVoteHandle",payload:o});case 7:case"end":return e.stop()}},e,this)}),getComment:u.default.mark(function e(t,a){var n,r,l,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,l=a.put,e.next=4,r(s.getComment,n);case 4:return o=e.sent,e.next=7,l({type:"getCommentHandle",payload:o});case 7:case"end":return e.stop()}},e,this)}),getMoreComment:u.default.mark(function e(t,a){var n,r,l,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,l=a.put,e.next=4,r(s.getMoreComment,n);case 4:return o=e.sent,e.next=7,l({type:"getMoreCommentHandle",payload:o});case 7:case"end":return e.stop()}},e,this)}),vote:u.default.mark(function e(t,a){var n,r,l,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,l=a.put,e.next=4,r(s.vote,n);case 4:return o=e.sent,e.next=7,l({type:"voteHandle",payload:o});case 7:case"end":return e.stop()}},e,this)}),comment:u.default.mark(function e(t,a){var n,r,l,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,l=a.put,e.next=4,r(s.comment,n);case 4:return o=e.sent,e.next=7,l({type:"commentHandle",payload:o});case 7:case"end":return e.stop()}},e,this)}),perfectAnswer:u.default.mark(function e(t,a){var n,r,l,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,l=a.put,e.next=4,r(s.perfect,n);case 4:return o=e.sent,e.next=7,l({type:"perfectAnswerHandle",payload:o});case 7:case"end":return e.stop()}},e,this)}),answer:u.default.mark(function e(t,a){var n,r,l,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,l=a.put,e.next=4,r(s.answer,n);case 4:return o=e.sent,e.next=7,l({type:"answerHandle",payload:o});case 7:case"end":return e.stop()}},e,this)})},reducers:{uploadHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{uploadRes:a})},addQuestionHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{addQuestionRes:a})},getDetailHandel:function(e,t){var a=t.payload;return(0,r.default)({},e,{qDetailRes:a})},perfectAnswerHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{pAnswerRes:a})},answerHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{answerRes:a})},isVoteHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{isVoteRes:a})},voteHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{voteRes:a})},commentHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{commentRes:a})},getCommentHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{commentRes:a})},getMoreCommentHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{moreCommentRes:a})}}};t.default=l}}]);