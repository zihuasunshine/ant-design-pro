(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{ac7y:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var i=l(a("BMrR"));a("g9YV");var r=l(a("wCAj"));a("jCWc");var u=l(a("kPKH"));a("+L6B");var d=l(a("2/Rp"));a("5NDa");var c,s,o,f=l(a("5rEg")),v=l(a("2Taf")),m=l(a("vZ4D")),p=l(a("l4Ni")),g=l(a("ujKo")),y=l(a("MhPg")),h=n(a("q1tI")),b=a("MuoO"),k=a("LLXN"),x=l(a("v99g")),E=l(a("1f6j")),w=l(a("CsNY")),N=l(a("NbrW")),V=l(a("jAUp")),I=(a("erV9"),{xs:24,sm:24,md:24,lg:24,xl:5,xxl:5}),S={xs:24,sm:24,md:24,lg:24,xl:19,xxl:19},C=window.screen.availWidth,P=[{id:1,label:"\u4e00\u6d41\u5927\u5b66",value:"\u4e00\u6d41\u5927\u5b66"},{id:2,label:"\u4e00\u6d41\u5b66\u79d1",value:"\u4e00\u6d41\u5b66\u79d1"},{id:3,label:"985\u9ad8\u6821",value:"985"},{id:4,label:"211\u9ad8\u6821",value:"211"}],T=(c=(0,b.connect)(function(e){var t=e.global,a=e.university;return{global:t,university:a}}),c((o=function(e){function t(){var e,a;(0,v.default)(this,t);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return a=(0,p.default)(this,(e=(0,g.default)(t)).call.apply(e,[this].concat(n))),a.title="\u4e00\u6d41\u5927\u5b66",a.state={name:"",tag:!1,province:!1,initTagValue:"\u4e00\u6d41\u5927\u5b66",initProvinceValue:""},a.columns1=[{title:"\u5e8f\u53f7",align:"center",render:function(e,t,a){return h.default.createElement("span",null,a+1)}},{title:"\u5b66\u6821\u6807\u8bc6\u7801",dataIndex:"code",key:"code",align:"center"},{title:"\u5b66\u6821\u540d\u79f0",dataIndex:"mc",key:"mc",align:"center",render:function(e,t,a){return h.default.createElement("a",{href:t.xxwz,target:"_blank"},e)}},{title:"\u6240\u5728\u5730\u533a",dataIndex:"province",key:"province",align:"center"},{title:"\u6240\u5728\u57ce\u5e02",dataIndex:"city",key:"city",align:"center"},{title:"\u4e3b\u7ba1\u90e8\u95e8",dataIndex:"department",key:"department",align:"center"},{title:"\u529e\u5b66\u5c42\u6b21",dataIndex:"level",key:"level",align:"center"},{title:"\u9ad8\u6821\u7c7b\u578b",dataIndex:"tag",key:"tag",align:"center"}],a.columns2=[{title:"\u5e8f\u53f7",align:"center",render:function(e,t,a){return h.default.createElement("span",null,a+1)},className:V.default.mobile},{title:"\u5b66\u6821\u540d\u79f0",dataIndex:"mc",key:"mc",align:"center",className:V.default.mobile,render:function(e,t,a){return h.default.createElement("a",{href:t.xxwz,target:"_blank"},e)}},{title:"\u6240\u5728\u5730\u533a",dataIndex:"province",key:"province",align:"center",className:V.default.mobile},{title:"\u6240\u5728\u57ce\u5e02",dataIndex:"city",key:"city",align:"center",className:V.default.mobile},{title:"\u4e3b\u7ba1\u90e8\u95e8",dataIndex:"department",key:"department",align:"center",className:V.default.mobile},{title:"\u529e\u5b66\u5c42\u6b21",dataIndex:"level",key:"level",align:"center",className:V.default.mobile},{title:"\u9ad8\u6821\u7c7b\u578b",dataIndex:"tag",key:"tag",align:"center",className:V.default.mobile}],a.handleSelectTag=function(e){var t=a.props.dispatch,l=e.value;t({type:"university/getUniversityInfo",params:{key:"tag",word:l}}),a.title=l,a.setState({initProvinceValue:"",name:""})},a.handleSelectProvince=function(e){var t=a.props.dispatch,l=e.value;t({type:"university/getUniversityInfo",params:{key:"sf",word:l}}),a.title=l,a.setState({initTagValue:"",name:""})},a.handleClick=function(e){var t=a.state,l=t.tag,n=t.province;"tag"===e?a.setState({tag:!l,province:!1}):a.setState({province:!n,tag:!1})},a.handleChange=function(e){a.setState({name:e.target.value})},a.handleSubmit=function(){var e=a.props.dispatch,t=a.state.name;e({type:"university/getUniversityInfo",params:{key:"mc",word:t||"\u5317\u4eac\u5927\u5b66"}}),a.title=t||"\u5317\u4eac\u5927\u5b66",a.setState({initTagValue:"",initProvinceValue:""})},a.setDefalutValue=function(e){var t=e.id,l=e.value,n="number"===typeof t?{initTagValue:l}:{initProvinceValue:l};a.setState(n)},a.convertTypes=function(e){var t=[];return e instanceof Array&&e.forEach(function(e){t.push({id:e.provinceid,label:e.province,value:e.province})}),t},a}return(0,y.default)(t,e),(0,m.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"global/getProvince"}),e({type:"university/getUniversityInfo",params:{key:"tag",word:this.title}})}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,l=t.tag,n=t.province,c=t.initTagValue,s=t.initProvinceValue,o=this.props,v=o.global.provinceRes,m=o.university.universityRes,p=v&&200===v.code?v.data:[],g=m&&200===m.code?m.data:[],y=C<576?this.columns2:this.columns1;return h.default.createElement(x.default,null,h.default.createElement("div",{className:V.default.university_box},h.default.createElement(i.default,{gutter:16},h.default.createElement(u.default,I,h.default.createElement("div",{className:V.default.left},h.default.createElement(h.Fragment,null,h.default.createElement("div",{onClick:function(){return e.handleClick("tag")}},h.default.createElement(w.default,{label:"\u9ad8\u6821\u7c7b\u578b"})),h.default.createElement("div",{className:l?V.default.show:V.default.hide},h.default.createElement(N.default,{defaultValue:c,data:P,onSelect:this.handleSelectTag,setDefalutValue:this.setDefalutValue}))),h.default.createElement(h.Fragment,null,h.default.createElement("div",{onClick:function(){return e.handleClick("sf")}},h.default.createElement(w.default,{label:"\u6240\u5728\u5730\u533a"})),h.default.createElement("div",{className:n?V.default.show:V.default.hide},h.default.createElement(N.default,{defaultValue:s,data:this.convertTypes(p),onSelect:this.handleSelectProvince,setDefalutValue:this.setDefalutValue}))),h.default.createElement("div",{className:V.default.input_wrapper},h.default.createElement(f.default,{value:a,className:V.default.name,placeholder:(0,k.formatMessage)({id:"form.schoolKey.placeholder"}),onChange:this.handleChange}),h.default.createElement(d.default,{type:"primary",onClick:this.handleSubmit},"\u67e5\u8be2")))),h.default.createElement(u.default,S,h.default.createElement("div",{className:V.default.right},h.default.createElement("h3",{className:V.default.title},this.title),h.default.createElement(r.default,{bordered:!0,columns:y,dataSource:g,pagination:!1}))))),h.default.createElement(E.default,null))}}]),t}(h.Component),s=o))||s),_=T;t.default=_},jAUp:function(e,t,a){e.exports={university_box:"antd-pro\\pages\\-university\\style-university_box",left:"antd-pro\\pages\\-university\\style-left",show:"antd-pro\\pages\\-university\\style-show",hide:"antd-pro\\pages\\-university\\style-hide",input_wrapper:"antd-pro\\pages\\-university\\style-input_wrapper",name:"antd-pro\\pages\\-university\\style-name",right:"antd-pro\\pages\\-university\\style-right",title:"antd-pro\\pages\\-university\\style-title",mobile:"antd-pro\\pages\\-university\\style-mobile"}}}]);