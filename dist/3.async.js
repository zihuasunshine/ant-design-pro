(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{elf0:function(e,a,t){"use strict";var n=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t("p0pE")),u=n(t("d6i3")),s=(t("7DNP"),t("Qyje"),t("dCQc")),d=(t("34ay"),t("+n12"),t("HZnN"),{namespace:"center",state:{status:void 0},effects:{addTag:u.default.mark(function e(a,t){var n,r,d,l,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.tag,r=a.token,d=t.call,l=t.put,e.next=4,d(s.addTag,n,r);case 4:return c=e.sent,e.next=7,l({type:"addTagHandle",payload:c});case 7:case"end":return e.stop()}},e)}),deleteTag:u.default.mark(function e(a,t){var n,r,d,l,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.tagId,r=a.token,d=t.call,l=t.put,e.next=4,d(s.deleteTag,n,r);case 4:return c=e.sent,e.next=7,l({type:"deleteTagHandle",payload:c});case 7:case"end":return e.stop()}},e)}),getMyQuestion:u.default.mark(function e(a,t){var n,r,d,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.params,r=t.call,d=t.put,e.next=4,r(s.myQuestion,n);case 4:return l=e.sent,e.next=7,d({type:"myQuestionHandle",payload:l});case 7:case"end":return e.stop()}},e)}),getMyAnswer:u.default.mark(function e(a,t){var n,r,d,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.params,r=t.call,d=t.put,e.next=4,r(s.myAnswer,n);case 4:return l=e.sent,e.next=7,d({type:"myAnswerHandle",payload:l});case 7:case"end":return e.stop()}},e)}),getMyFocus:u.default.mark(function e(a,t){var n,r,d,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.params,r=t.call,d=t.put,e.next=4,r(s.myFocus,n);case 4:return l=e.sent,e.next=7,d({type:"myFocusHandle",payload:l});case 7:case"end":return e.stop()}},e)}),getMyPlease:u.default.mark(function e(a,t){var n,r,d,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.params,r=t.call,d=t.put,e.next=4,r(s.myPlease,n);case 4:return l=e.sent,e.next=7,d({type:"myPleaseHandle",payload:l});case 7:case"end":return e.stop()}},e)})},reducers:{addTagHandle:function(e,a){var t=a.payload;return(0,r.default)({},e,{addTagRes:t})},deleteTagHandle:function(e,a){var t=a.payload;return(0,r.default)({},e,{deleteTagRes:t})},myQuestionHandle:function(e,a){var t=a.payload;return(0,r.default)({},e,{myQuestionRes:t})},myAnswerHandle:function(e,a){var t=a.payload;return(0,r.default)({},e,{myAnswerRes:t})},myFocusHandle:function(e,a){var t=a.payload;return(0,r.default)({},e,{myFocusRes:t})},myPleaseHandle:function(e,a){var t=a.payload;return(0,r.default)({},e,{myPleaseRes:t})}}});a.default=d}}]);