(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{Q1Ae:function(e,a,t){"use strict";var n=t("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var u=n(t("MVZn")),d=n(t("o0o1")),r=t("dCQc"),o={namespace:"question",state:{},effects:{upload:d.default.mark(function e(a,t){var n,u,o,s;return d.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,u=t.call,o=t.put,e.next=4,u(r.fileUpload,n);case 4:return s=e.sent,e.next=7,o({type:"uploadHandle",payload:s});case 7:case"end":return e.stop()}},e,this)}),submit:d.default.mark(function e(a,t){var n,u,o,s,l;return d.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,u=a.token,o=t.call,s=t.put,e.next=4,o(r.addQuestion,n,u);case 4:return l=e.sent,e.next=7,s({type:"addQuestionHandle",payload:l});case 7:case"end":return e.stop()}},e,this)})},reducers:{uploadHandle:function(e,a){var t=a.payload;return(0,u.default)({},e,{uploadRes:t})},addQuestionHandle:function(e,a){var t=a.payload;return(0,u.default)({},e,{addQuestionRes:t})}}};a.default=o}}]);