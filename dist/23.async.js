(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{Prfc:function(e,t,a){"use strict";var l=a("TqRt"),o=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+BJd");var n=l(a("mr32")),d=l(a("MVZn")),r=l(a("pVnL"));a("14J3");var s=l(a("BMrR"));a("jCWc");var u=l(a("kPKH")),i=l(a("RIqP")),c=l(a("lwsE")),p=l(a("W8MJ")),f=l(a("a1gu")),m=l(a("Nsbk")),h=l(a("7W2i")),g=l(a("lSNA"));a("IzEo");var b=l(a("bx4M"));a("OaEy");var v=l(a("2fM7"));a("Znn+");var y,E,x,_,C,k,w=l(a("ZTPi")),q=o(a("q1tI")),N=a("MuoO"),O=l(a("usdK")),S=l(a("mOP9")),T=l(a("v99g")),M=l(a("l5z0")),P=w.default.TabPane,R=v.default.Option,L=(b.default.Meta,y={xs:24,sm:24,md:12,lg:12,xl:6},(0,g.default)(y,"xl",6),(0,g.default)(y,"xxl",6),y),z=(E={xs:6,sm:6,md:6,lg:6,xl:6},(0,g.default)(E,"xl",6),(0,g.default)(E,"xxl",6),E),I=(x={xs:18,sm:18,md:18,lg:18,xl:18},(0,g.default)(x,"xl",18),(0,g.default)(x,"xxl",18),x),J="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";var j=(_=(0,N.connect)(function(e){var t=e.home,a=e.loading;return{home:t,listLoading:a.effects["list/fetch"]}}),_((k=function(e){function t(e){var a;return(0,c.default)(this,t),a=(0,f.default)(this,(0,m.default)(t).call(this,e)),a.getCategory=function(e,t,l){var o=a.props.dispatch;o({type:"home/category",params:{pId:e}}).then(function(){var o=a.props.home.categoryRes,n=a.state,d=n.options1;n.options2,n.options3;if(o&&200===o.code){var r=o.data;2===l&&a.setState({options2:[],options3:[],options4:[],lastOption:""}),3===l&&a.setState({options3:[],options4:[],lastOption:""}),4===l&&a.setState({lastOption:""}),1===l?a.setState((0,g.default)({},"options"+l,[].concat((0,i.default)(d),(0,i.default)(r)))):r.length>0?a.setState((0,g.default)({},"options"+l,[{id:e,name:t.props.children}].concat((0,i.default)(r)))):a.setState({lastOption:t.props.children})}})},a.article=function(e){return q.default.createElement("div",null,q.default.createElement(S.default,{to:"/home/article/".concat(e.id)},q.default.createElement(s.default,{className:M.default.article_box},q.default.createElement(u.default,z,q.default.createElement("div",{style:{backgroundImage:e.img?"url(".concat(e.img,")"):"url(".concat(J,")")},className:M.default.article_img})),q.default.createElement(u.default,I,q.default.createElement("div",{className:M.default.article_text},q.default.createElement(S.default,{className:M.default.a,to:"/home/article/".concat(e.id)},e.title),q.default.createElement("div",{className:M.default.source},q.default.createElement("span",null,"\u6765\u6e90\uff1a",e.source)))))))},a.articles=function(e){return q.default.createElement("div",{className:M.default.article_container},q.default.createElement(s.default,null,e&&e.data.map(function(e,t){if(0!==t)return q.default.createElement(u.default,(0,r.default)({key:e.id},L,{className:M.default.article_col}),a.article(e))})))},a.handleChange=function(e,t,l){a.getCategory(e,t,l);var o=a.props.dispatch,n=["category_f","category_s","category_t"];o({type:"home/getCategoryParam",params:(0,g.default)({},n[l-2],e)}),o({type:"home/fetchList",params:(0,d.default)({question:a.question,qtype:a.qtype},a.pager,{category:(0,g.default)({},n[l-2],e)})})},a.handleSelect=function(e){var t=a.props.dispatch;a.state.options2;1===e&&(t({type:"home/fetchList",params:(0,d.default)({question:a.question,qtype:a.qtype},a.pager)}),a.setState({options2:[],options3:[],options4:[],lastOption:""}))},a.onTabChange=function(e){var t=a.props.match;switch(e){case"new":O.default.push("".concat(t.url,"/new"));break;case"hot":O.default.push("".concat(t.url,"/hot"));break;case"discuss":O.default.push("".concat(t.url,"/discuss"));break;default:break}},a.state={options1:[{id:1,name:"\u5168\u90e8\u95ee\u9898"}],options2:[],options3:[],options4:[],lastOption:""},a.question="",a.qtype=1,a.pager={page:1,size:10},a}return(0,h.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"home/articleList"}),this.getCategory(1,{},1)}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,l=t.home.articlelistRes,o=this.state,d=o.options1,r=o.options2,i=o.options3,c=o.options4,p=o.lastOption;return console.log(d),q.default.createElement(q.Fragment,null,q.default.createElement(T.default,{className:M.default.userCenter},q.default.createElement("div",{className:M.default.banner},this.articles(l)),q.default.createElement(s.default,{gutter:24},q.default.createElement(u.default,{lg:24,md:24},q.default.createElement("div",{className:M.default.category_box},d.length>0?q.default.createElement(v.default,{value:d[0].id,style:{width:140,marginRight:8},onChange:function(t,a){return e.handleChange(t,a,2)},onSelect:this.handleSelect},d.map(function(e){return q.default.createElement(R,{key:"option"+e.id,value:e.id},e.name)})):null,r.length>0?q.default.createElement(v.default,{value:r[0].id,style:{width:140,marginRight:8},onChange:function(t,a){return e.handleChange(t,a,3)}},r.map(function(e){return q.default.createElement(R,{key:"option"+e.id,value:e.id},e.name)})):null,i.length>0?q.default.createElement(v.default,{value:i[0].id,style:{width:140,marginRight:8},onChange:function(t,a){return e.handleChange(t,a,4)}},i.map(function(e){return q.default.createElement(R,{key:"option"+e.id,value:e.id},e.name)})):null,c.length>0?q.default.createElement(v.default,{value:i[0].id,style:{width:140}},i.map(function(e){return q.default.createElement(R,{key:"option"+e.id,value:e.id},e.name)})):null,p?q.default.createElement(n.default,{className:M.default.tag},p):null),q.default.createElement("div",{className:M.default.tabs},q.default.createElement(w.default,{onChange:this.onTabChange,type:"card"},q.default.createElement(P,{tab:"\u65b0\u95ee\u9898",key:"new"},a),q.default.createElement(P,{tab:"\u70ed\u95e8\u95ee\u9898",key:"hot"},a),q.default.createElement(P,{tab:"\u795e\u8ba8\u8bba",key:"discuss"},a)))))))}}]),t}(q.PureComponent),C=k))||C),H=j;t.default=H},l5z0:function(e,t,a){e.exports={a:"antd-pro\\pages\\-dashboard\\-home-a",category_box:"antd-pro\\pages\\-dashboard\\-home-category_box",tag:"antd-pro\\pages\\-dashboard\\-home-tag",cascader:"antd-pro\\pages\\-dashboard\\-home-cascader",tabs:"antd-pro\\pages\\-dashboard\\-home-tabs",avatarHolder:"antd-pro\\pages\\-dashboard\\-home-avatarHolder",name:"antd-pro\\pages\\-dashboard\\-home-name",detail:"antd-pro\\pages\\-dashboard\\-home-detail",title:"antd-pro\\pages\\-dashboard\\-home-title",group:"antd-pro\\pages\\-dashboard\\-home-group",address:"antd-pro\\pages\\-dashboard\\-home-address",tagsTitle:"antd-pro\\pages\\-dashboard\\-home-tagsTitle",teamTitle:"antd-pro\\pages\\-dashboard\\-home-teamTitle",tags:"antd-pro\\pages\\-dashboard\\-home-tags",team:"antd-pro\\pages\\-dashboard\\-home-team",tabsCard:"antd-pro\\pages\\-dashboard\\-home-tabsCard",banner:"antd-pro\\pages\\-dashboard\\-home-banner",article_container:"antd-pro\\pages\\-dashboard\\-home-article_container",article_col:"antd-pro\\pages\\-dashboard\\-home-article_col",article_box:"antd-pro\\pages\\-dashboard\\-home-article_box",article_img:"antd-pro\\pages\\-dashboard\\-home-article_img",article_text:"antd-pro\\pages\\-dashboard\\-home-article_text",source:"antd-pro\\pages\\-dashboard\\-home-source"}}}]);