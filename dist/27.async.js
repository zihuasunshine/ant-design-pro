(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{kUDz:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("p0pE")),u=n(a("d6i3")),c=a("dCQc"),d={namespace:"cpa",state:{current:1,loading:!0},effects:{setCurrent:u.default.mark(function e(t,a){var n,r;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.current,r=a.put,e.next=4,r({type:"currentHandle",current:n});case 4:case"end":return e.stop()}},e)}),loading:u.default.mark(function e(t,a){var n,r;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.loading,r=a.put,e.next=4,r({type:"loadingHandle",loading:n});case 4:case"end":return e.stop()}},e)}),getCpaList:u.default.mark(function e(t,a){var n,r,d,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,d=a.put,e.next=4,r(c.getCpaList,n);case 4:return l=e.sent,e.next=7,d({type:"cpatDataHandle",payload:l,loading:!1});case 7:case"end":return e.stop()}},e)}),getDetail:u.default.mark(function e(t,a){var n,r,c,d;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,c=a.put,e.next=4,r(getAdjustDetail,n);case 4:return d=e.sent,e.next=7,c({type:"adjustDetailHandle",payload:d});case 7:case"end":return e.stop()}},e)}),getAdjustRecommended:function(e){var t=u.default.mark(a);function a(a,n){var r=arguments;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.delegateYield(e.apply(this,r),"t0",1);case 1:return t.abrupt("return",t.t0);case 2:case"end":return t.stop()}},t,this)}return a.toString=function(){return e.toString()},a}(u.default.mark(function e(t,a){var n,r,c,d;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params,r=a.call,c=a.put,e.next=4,r(getAdjustRecommended,n);case 4:return d=e.sent,e.next=7,c({type:"recommendHandle",payload:d});case 7:case"end":return e.stop()}},e)}))},reducers:{cpatDataHandle:function(e,t){var a=t.payload,n=t.loading,u=t.params;return(0,r.default)({},e,{cpaDataRes:a,loading:n,params:u})},adjustDetailHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{adjustDetailRes:a})},recommendHandle:function(e,t){var a=t.payload;return(0,r.default)({},e,{recommendRes:a})},loadingHandle:function(e,t){var a=t.loading;return(0,r.default)({},e,{loading:a})},currentHandle:function(e,t){var a=t.current;return(0,r.default)({},e,{current:a})}}};t.default=d}}]);