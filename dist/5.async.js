(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{elf0:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("MVZn")),u=n(a("o0o1")),s=(a("7DNP"),a("Qyje"),a("dCQc")),d=(a("34ay"),a("+n12"),a("HZnN"),{namespace:"center",state:{status:void 0},effects:{addTag:u.default.mark(function e(t,a){var n,r,d,l,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.tag,r=t.token,d=a.call,l=a.put,e.next=4,d(s.addTag,n,r);case 4:return c=e.sent,e.next=7,l({type:"addTagHandle",payload:c});case 7:case"end":return e.stop()}},e,this)}),deleteTag:u.default.mark(function e(t,a){var n,r,d,l,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.tagId,r=t.token,d=a.call,l=a.put,e.next=4,d(s.deleteTag,n,r);case 4:return c=e.sent,e.next=7,l({type:"deleteTagHandle",payload:c});case 7:case"end":return e.stop()}},e,this)}),getMyQuestion:u.default.mark(function e(t,a){var n,r,d,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,d=a.put,e.next=4,r(s.myQuestion,n);case 4:return l=e.sent,e.next=7,d({type:"myQuestionHandle",payload:l});case 7:case"end":return e.stop()}},e,this)}),getMyAnswer:u.default.mark(function e(t,a){var n,r,d,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,d=a.put,e.next=4,r(s.myAnswer,n);case 4:l=e.sent,d({type:"myAnswerHandle",payload:l});case 6:case"end":return e.stop()}},e,this)})},reducers:{addTagHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{addTagRes:a})},deleteTagHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{deleteTagRes:a})},myQuestionHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{myQuestionRes:a})},myAnswerHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{myAnswerRes:a})}}});t.default=d}}]);