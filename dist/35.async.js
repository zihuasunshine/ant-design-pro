(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{FD7R:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("p0pE")),s=n(a("d6i3")),p=a("dCQc"),u={namespace:"pgjg",state:{},effects:{getPgjgListById:s.default.mark(function e(t,a){var n,r,u,c;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,u=a.put,e.next=4,r(p.getPgjgListById,n);case 4:return c=e.sent,e.next=7,u({type:"pgjgList1Handle",payload:c});case 7:case"end":return e.stop()}},e)}),getPgjgListBySchool:s.default.mark(function e(t,a){var n,r,u,c;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,u=a.put,e.next=4,r(p.getPgjgListBySchool,n);case 4:return c=e.sent,e.next=7,u({type:"pgjgList2Handle",payload:c});case 7:case"end":return e.stop()}},e)})},reducers:{pgjgList1Handle:function(e,t){var a=t.payload;return(0,r.default)({},e,{pgjgList1Res:a})},pgjgList2Handle:function(e,t){var a=t.payload;return(0,r.default)({},e,{pgjgList2Res:a})}}};t.default=u}}]);