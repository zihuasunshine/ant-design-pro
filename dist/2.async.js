(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{uYTg:function(e,a,t){"use strict";var n=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t("p0pE")),u=n(t("d6i3")),d=t("dCQc"),s={namespace:"baseView",state:{},effects:{uploadAvatar:u.default.mark(function e(a,t){var n,r,s,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.params,r=t.call,s=t.put,e.next=4,r(d.uploadAvatar,n);case 4:return o=e.sent,e.next=7,s({type:"uploadAvatarHandle",payload:o});case 7:case"end":return e.stop()}},e)}),submit:u.default.mark(function e(a,t){var n,r,s,o,p;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.token,s=t.call,o=t.put,e.next=4,s(d.modifyUserInfo,n,r);case 4:return p=e.sent,e.next=7,o({type:"userInfoHandle",payload:p});case 7:case"end":return e.stop()}},e)})},reducers:{uploadAvatarHandle:function(e,a){var t=a.payload;return(0,r.default)({},e,{uploadImgRes:t})},userInfoHandle:function(e,a){var t=a.payload;return(0,r.default)({},e,{updateRes:t})}}};a.default=s}}]);