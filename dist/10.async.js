(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"49dJ":function(e,t,a){"use strict";var l=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=n(a("2Taf")),r=n(a("vZ4D")),u=n(a("l4Ni")),c=n(a("ujKo")),o=n(a("MhPg"));a("Znn+");var s=n(a("ZTPi")),i=l(a("q1tI")),f=(a("MuoO"),n(a("v99g"))),g=n(a("1f6j")),p=n(a("RGsM")),m=n(a("xEpx")),h=n(a("w2LX")),v=s.default.TabPane,y=function(e){function t(){var e,a;(0,d.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,u.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(n))),a.handleClick=function(e){a.setState({code:e})},a}return(0,o.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return i.default.createElement(f.default,null,i.default.createElement("div",{className:h.default.pgjg_box},i.default.createElement(s.default,{defaultActiveKey:"1"},i.default.createElement(v,{key:1,tab:"\u6309\u5b66\u79d1\u67e5\u8be2"},i.default.createElement(p.default,null)),i.default.createElement(v,{key:2,tab:"\u6309\u9ad8\u6821\u67e5\u8be2"},i.default.createElement(m.default,null)))),i.default.createElement(g.default,null))}}]),t}(i.Component),j=y;t.default=j},RGsM:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var d=l(a("BMrR"));a("g9YV");var r=l(a("wCAj"));a("jCWc");var u,c,o,s=l(a("kPKH")),i=l(a("2Taf")),f=l(a("vZ4D")),g=l(a("l4Ni")),p=l(a("ujKo")),m=l(a("MhPg")),h=n(a("q1tI")),v=a("MuoO"),y=l(a("CsNY")),j=l(a("NbrW")),E=l(a("w2LX")),x={xs:24,sm:24,md:24,lg:24,xl:5,xxl:5},k={xs:24,sm:24,md:24,lg:24,xl:19,xxl:19},b=(u=(0,v.connect)(function(e){var t=e.global,a=e.pgjg;return{global:t,pgjg:a}}),u((o=function(e){function t(){var e,a;(0,i.default)(this,t);for(var l=arguments.length,n=new Array(l),d=0;d<l;d++)n[d]=arguments[d];return a=(0,g.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(n))),a.code="",a.state={code:"",defaultValue:1},a.columns=[{title:"\u5e8f\u53f7",align:"center",render:function(e,t,a){return h.default.createElement("span",null,a+1)}},{title:"\u5b66\u6821\u4ee3\u7801",dataIndex:"schoolCode",key:"schoolCode",align:"center"},{title:"\u5b66\u6821\u540d\u79f0",dataIndex:"schoolName",key:"schoolName",align:"center"},{title:"\u8bc4\u4f30\u7ed3\u679c",dataIndex:"subRanking",key:"subRanking",align:"center"},{title:"\u4f4d\u6b21\u767e\u5206\u767e",dataIndex:"subPercent",key:"subPercent",align:"center"}],a.handleSelect=function(e){var t=e.value,l=a.props.dispatch;l({type:"pgjg/getPgjgListById",params:{id:t}})},a.setDefalutValue=function(e){var t=e.value;a.setState({defaultValue:t})},a.handleClick=function(e){a.setState({code:a.code===e?"":e},function(){var e=a.state.code;a.code=e})},a.convertTypes=function(e){var t=[];return e instanceof Array&&e.forEach(function(e){t.push({id:e.id,label:e.code+e.name,value:e.id})}),t},a.renderTree=function(e,t){var l=a.state.code;return t.map(function(t){return h.default.createElement(h.Fragment,null,h.default.createElement("div",{onClick:function(){return a.handleClick(t.code)}},h.default.createElement(y.default,{label:t.name})),h.default.createElement("div",{className:t.code===l?E.default.show:E.default.hide},h.default.createElement(j.default,{defaultValue:e,data:a.convertTypes(t.childen),onSelect:a.handleSelect,setDefalutValue:a.setDefalutValue})))})},a}return(0,m.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"global/getPgjgTypes"}),e({type:"pgjg/getPgjgListById",params:{id:"1"}})}},{key:"render",value:function(){var e=this.state.defaultValue,t=this.props,a=t.global.pgjgTypeRes,l=t.pgjg.pgjgList1Res,n=a&&200===a.code?a.data:[],u=l&&200===l.code?l.data.details:[],c=l&&200===l.code?l.data.code+l.data.name:"",o=l&&200===l.code?l.data.info:"";return h.default.createElement(h.Fragment,null,h.default.createElement(d.default,{gutter:16},h.default.createElement(s.default,x,h.default.createElement("div",{className:E.default.left},this.renderTree(e,n))),h.default.createElement(s.default,k,h.default.createElement("div",{className:E.default.right},h.default.createElement("h3",{className:E.default.title},c),h.default.createElement("p",{dangerouslySetInnerHTML:{__html:o}}),h.default.createElement(r.default,{rowKey:function(e){return e.schoolCode},bordered:!0,columns:this.columns,dataSource:u,pagination:!1})))))}}]),t}(h.Component),c=o))||c),C=b;t.default=C},w2LX:function(e,t,a){e.exports={pgjg_box:"antd-pro\\pages\\-p-g-j-g\\style-pgjg_box",left:"antd-pro\\pages\\-p-g-j-g\\style-left",show:"antd-pro\\pages\\-p-g-j-g\\style-show",hide:"antd-pro\\pages\\-p-g-j-g\\style-hide",sch_left:"antd-pro\\pages\\-p-g-j-g\\style-sch_left",name:"antd-pro\\pages\\-p-g-j-g\\style-name",right:"antd-pro\\pages\\-p-g-j-g\\style-right",title:"antd-pro\\pages\\-p-g-j-g\\style-title"}},xEpx:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var d=l(a("BMrR"));a("g9YV");var r=l(a("wCAj"));a("jCWc");var u=l(a("kPKH"));a("+L6B");var c=l(a("2/Rp"));a("5NDa");var o,s,i,f=l(a("5rEg")),g=l(a("2Taf")),p=l(a("vZ4D")),m=l(a("l4Ni")),h=l(a("ujKo")),v=l(a("MhPg")),y=n(a("q1tI")),j=a("MuoO"),E=a("LLXN"),x=(l(a("v99g")),l(a("w2LX"))),k={xs:24,sm:24,md:24,lg:24,xl:5,xxl:5},b={xs:24,sm:24,md:24,lg:24,xl:19,xxl:19},C=(o=(0,j.connect)(function(e){var t=e.pgjg;return{pgjg:t}}),o((i=function(e){function t(){var e,a;(0,g.default)(this,t);for(var l=arguments.length,n=new Array(l),d=0;d<l;d++)n[d]=arguments[d];return a=(0,m.default)(this,(e=(0,h.default)(t)).call.apply(e,[this].concat(n))),a.name="\u5317\u4eac\u5927\u5b66",a.columns=[{title:"\u5e8f\u53f7",align:"center",render:function(e,t,a){return y.default.createElement("span",null,a+1)}},{title:"\u5b66\u6821\u4ee3\u7801",dataIndex:"schoolCode",key:"schoolCode",align:"center"},{title:"\u5b66\u6821\u540d\u79f0",dataIndex:"schoolName",key:"schoolName",align:"center"},{title:"\u4e00\u7ea7\u5b66\u79d1\u4ee3\u7801",dataIndex:"majorCode",key:"majorCode",align:"center"},{title:"\u4e00\u7ea7\u5b66\u79d1\u540d\u79f0",dataIndex:"majorName",key:"majorName",align:"center"},{title:"\u8bc4\u4f30\u7ed3\u679c",dataIndex:"subRanking",key:"subRanking",align:"center"},{title:"\u4f4d\u6b21\u767e\u5206\u767e",dataIndex:"subPercent",key:"subPercent",align:"center"}],a.handleChange=function(e){a.name=e.target.value?e.target.value:"\u5317\u4eac\u5927\u5b66"},a.handleClick=function(){var e=a.props.dispatch;e({type:"pgjg/getPgjgListBySchool",params:{name:a.name}})},a}return(0,v.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"pgjg/getPgjgListBySchool",params:{name:this.name}})}},{key:"render",value:function(){var e=this.props.pgjg.pgjgList2Res,t=e&&200===e.code?e.data:[];return y.default.createElement(y.Fragment,null,y.default.createElement(d.default,{gutter:16},y.default.createElement(u.default,k,y.default.createElement("div",{className:x.default.sch_left},y.default.createElement(f.default,{className:x.default.name,placeholder:(0,E.formatMessage)({id:"form.school.placeholder"}),onChange:this.handleChange}),y.default.createElement(c.default,{type:"primary",onClick:this.handleClick},"\u67e5\u8be2"))),y.default.createElement(u.default,b,y.default.createElement("div",{className:x.default.right},y.default.createElement("h3",{className:x.default.title},this.name),y.default.createElement(r.default,{rowKey:function(e){return e.schoolCode},bordered:!0,columns:this.columns,dataSource:t,pagination:!1})))))}}]),t}(y.Component),s=i))||s),N=C;t.default=N}}]);