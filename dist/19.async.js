(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{vcPf:function(t,e,a){"use strict";var n=a("g09b"),o=a("tAuX");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,l,u,i=n(a("p0pE")),c=n(a("2Taf")),d=n(a("vZ4D")),s=n(a("l4Ni")),p=n(a("ujKo")),f=n(a("MhPg")),g=o(a("q1tI")),h=a("MuoO"),v=(n(a("wd/R")),n(a("4n44"))),D=10,w=(r=(0,h.connect)(function(t){var e=t.center;return{center:e}}),r((u=function(t){function e(){var t,a;(0,c.default)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return a=(0,s.default)(this,(t=(0,p.default)(e)).call.apply(t,[this].concat(o))),a.pager={pageno:1,pageSize:D},a.state={listData:[],total:0,loading:!0},a.handleChange=function(t,e){a.pager={pageno:t,pageSize:e},a.getDataSource()},a.getDataSource=function(){var t=a.props.dispatch;t({type:"center/getMyPlease",params:(0,i.default)({state:-1},a.pager)}).then(function(){var t=a.props.center.myPleaseRes,e=[],n=0;t&&200===t.code&&(e=t.data.list,n=t.data.total),a.setState({total:n,listData:e,loading:!1})})},a}return(0,f.default)(e,t),(0,d.default)(e,[{key:"componentDidMount",value:function(){this.getDataSource()}},{key:"render",value:function(){var t=this.state,e=t.listData,a=t.total,n=t.loading;return g.default.createElement(v.default,{listData:e,loading:n,total:a,onChange:this.handleChange})}}]),e}(g.PureComponent),l=u))||l),y=w;e.default=y}}]);