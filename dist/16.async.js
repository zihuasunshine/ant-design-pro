(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"OI/j":function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var u=l(a("BMrR"));a("g9YV");var c=l(a("wCAj"));a("jCWc");var o,r,d,s=l(a("kPKH")),f=l(a("2Taf")),p=l(a("vZ4D")),i=l(a("l4Ni")),h=l(a("ujKo")),m=l(a("MhPg")),v=n(a("q1tI")),g=a("MuoO"),y=l(a("v99g")),b=l(a("1f6j")),E=l(a("NbrW")),x=l(a("Qm0K")),_={xs:24,sm:24,md:24,lg:24,xl:5,xxl:5},k={xs:24,sm:24,md:24,lg:24,xl:19,xxl:19},w=(o=(0,g.connect)(function(e){var t=e.global,a=e.cpa;return{global:t,cpa:a}}),o((d=function(e){function t(){var e,a;(0,f.default)(this,t);for(var l=arguments.length,n=new Array(l),u=0;u<l;u++)n[u]=arguments[u];return a=(0,i.default)(this,(e=(0,h.default)(t)).call.apply(e,[this].concat(n))),a.state={defaultValue:"0351"},a.columns=[{title:"\u8bc4\u4f30\u7ed3\u679c",dataIndex:"level",key:"level",align:"center"},{title:"\u5b66\u6821\u6807\u8bc6\u7801",dataIndex:"schools",key:"schools",render:function(e){return v.default.createElement("div",{dangerouslySetInnerHTML:{__html:e.join("")}})}}],a.handleSelect=function(e){var t=e.value,l=a.props.dispatch;l({type:"cpa/getCpaList",params:{code:t}})},a.setDefalutValue=function(e){var t=e.value;a.setState({defaultValue:t})},a.convertTypes=function(e){var t=[];return e instanceof Array&&e.forEach(function(e){t.push({id:e.id,label:e.code+e.name,value:e.code})}),t},a.convertData=function(e){var t=[];return e.forEach(function(e){var a={};e.forEach(function(e,t){0===t&&(a.level=e.subRanking,a.schools=[]),a.schools.push("<p>".concat(e.schoolCode,"&nbsp;&nbsp;").concat(e.schoolName,"</p>"))}),t.push(a)}),t},a}return(0,m.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"global/getCpaTypes"}),e({type:"cpa/getCpaList",params:{code:"0351"}})}},{key:"render",value:function(){var e=this.state.defaultValue,t=this.props,a=t.global.typeRes,l=t.cpa.cpaDataRes,n=a&&200===a.code?a.data:[],o=l&&200===l.code?this.convertData(l.data.dataList):[],r=l&&200===l.code?l.data.name:"",d=l&&200===l.code?l.data.info:"";return v.default.createElement(y.default,null,v.default.createElement("div",{className:x.default.cpa_box},v.default.createElement(u.default,{gutter:16},v.default.createElement(s.default,_,v.default.createElement("div",{className:x.default.left},v.default.createElement(E.default,{defaultValue:e,data:this.convertTypes(n),onSelect:this.handleSelect,setDefalutValue:this.setDefalutValue}))),v.default.createElement(s.default,k,v.default.createElement("div",{className:x.default.right},v.default.createElement("h3",{className:x.default.title},r),v.default.createElement("p",{dangerouslySetInnerHTML:{__html:d}}),v.default.createElement(c.default,{bordered:!0,columns:this.columns,dataSource:o,pagination:!1}))))),v.default.createElement(b.default,null))}}]),t}(v.Component),r=d))||r),D=w;t.default=D},Qm0K:function(e,t,a){e.exports={cpa_box:"antd-pro\\pages\\-c-p-a\\style-cpa_box",left:"antd-pro\\pages\\-c-p-a\\style-left",right:"antd-pro\\pages\\-c-p-a\\style-right",title:"antd-pro\\pages\\-c-p-a\\style-title"}}}]);