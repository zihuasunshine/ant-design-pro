(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"0C3M":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("lwsE")),r=n(a("W8MJ")),u=n(a("a1gu")),i=n(a("Nsbk")),s=n(a("7W2i"));a("Lzxq");var d=n(a("q1tI")),o=n(a("yEr3")),f=n(a("q6al")),c=function(e){function t(){var e,a;(0,l.default)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return a=(0,u.default)(this,(e=(0,i.default)(t)).call.apply(e,[this].concat(r))),a.state={editorState:o.default.createEditorState("<p>Hello <b>World!</b></p>"),outputHTML:"<p></p>"},a.handleChange=function(e){a.setState({editorState:e,outputHTML:e.toHTML()})},a.setEditorContentAsync=function(){a.isLivinig&&a.setState({editorState:o.default.createEditorState("<p>\u4f60\u597d\uff0c<b>\u4e16\u754c!</b><p>")})},a}return(0,s.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.isLivinig=!0,setTimeout(this.setEditorContentAsync,3e3)}},{key:"componentWillUnmount",value:function(){this.isLivinig=!1}},{key:"render",value:function(){var e=this.state,t=(e.editorState,e.outputHTML,["bold","italic","underline","text-color","separator","link","separator","media"]);return d.default.createElement("div",null,d.default.createElement("div",{className:f.default.editor_wrapper},d.default.createElement(o.default,{contentClassName:f.default.height,controls:t,onChange:this.handleChange})))}}]),t}(d.default.Component);t.default=c},"9NTl":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFmklEQVRYR62Xe2yTVRjGn+d83dxoGxFpJ8ZE1AVZ0RgRoqjBS6IGQRJQLlFjEDNBE2JQoviPQ4yJGuP9DyKKUaKCIDFeuZgoKnchakJbFEQhkrTjIq7dxvZ95zFf241ua9cxPX8157zneX/nfd/zfqfEIIcEk0033COjw+FI8ttByoCD2agTI4dmOmq/JDnB30+qMRhJvDUYrYoA/klbj146xVpnrDHWQvxR4CIAN512KAF4TdQnBggBvFLSoVA0+W4lqIoAmXTDKwAfqSRUZn1uKBp/p7+9/QJICGTTsSyI6sEACFoXjibuHDRAtrlhhMQjvQRcQB9Aej9Ya/f4a5lT5jICY2G5AOTIbnvpl1Bd4opBA7SkYzMIfNQlIGmrE8Bj1sMNACZCvCq3Ru0GsDEYObk82zz0DQD35+aFDjiaHBqe+LocRMkUZI6PvlwuZ1J8/HT4tQoGb8tiLcGzSwoKO43jTvc8p4lkY1EkNjln2Xm1Q/cd7L2vD0B7atTFLp39/uUqqvK/aLxp1jqLKfu0DIeVAjC0WWsDH4aqM+OzHaENAMYXRe9YKJqIkrDFe/sAtB4bPcF6ZmsPI6rRWtxOstYPOIDbegMY2bv8oFuajwG8A9nVoFnfw05t54XqDqb6BZDgZJsbDgMckc+j2gLwLvOjIvEEoM0Afynk3u8Ffg9AtfHmd1hnGYHrARjVdtahtWovyUhBZ0eoLnFNxRT4BtnmWJOEJXn/2gbiVYKrAO2R+Fmp8DuOu9zzAo0EnvTrhkbTrOUiAtfldOjdHI7s+2ZAAJlUwy0gN+aN9QXJzyQsA9AJYL2glCEOWcvZNPpc4h2OwRxrsaPLAWnnSZwKcLI/Z4x7wZDhv/41IICWVGwJiaZCBLY7wAuWXFcAWpFLj5AA8aiAvwkdMIYP9wAwmiYPi0FeXdBZFq5LPFQRoD1Vf0knq39irqfna8CpMqM9V3/m827vhszzENb4AP66iJ0B4CkXeCZXA2J7sNa9MNvmHAZZUwCXU4WLas9J5HUKo88tyKQaXgK5sIcR7YOynAj/ChlugsVKUk9ZcSGBcwBthOgEiPkutA/iKzQ2KZk3e+mMC0aSftMqD5BNxyYJ+hygOW2mIwHamzuteY7gLSCCEn4H/ZZMLx8ZBQDO8n8ZehMlswvg+V0aAtaEo/GZFVPgG+R6gZvr6/7drips2oWAfQCuWQmgZH8X8IOhN0syLwPMO5PaQS4NRuLPkfkr228Eihez6YbbBX5RNPezArqXnZgE4kYBQQIpCLuNw81G3t+d1qwgeW0h79Y4un7IucltvR2XrYHukAlO2/H6EZ5XneguyPyiC+ArCXtA7AVts/8IkTgD4N0AAt3OpIMB4raaaOK3MwLwX0GZ5thqB95qD+ZZgqPKCfQ7L23yowSD18ORxKpStn1uQf6xGXsPxD0SljL/GFk8KADY+wXzOqEghDmhusR7/daABGbTsZW+81z9QP8AbHQcexgy/ldMxnOPunSaAN7XQ0z2RQNsk9F2ibdSpkbEVACTCvWgUhDdEcg5b4693f2YKHNkH8oxvNXzMJfEgxBaRfsEYcZW2utfCVLzgpHk8j5FmEnHVlQWKJwFyFTRG+da1QRZdaAVminAhx/QEOyCcDTpv5zy/wuUHhPK0BtXskhk+nzBBKwNReKzSeSakE6OGZY5pS0ERvdMC1IydnZv3QCgmuHJLSTcATzLYz2ah4RPQ9H49C7nXeItLfURtFV/Vwwh4EA4Gq/vLyxnBFBwfqdPXkq0ALGVQM6pgEQ4Go/9XwAbgpH4lHLOu5xk0mPOE/R9DuK/Pst90Uw6l4INwQinkns7BlJlpyF0MhRNlKytPregnHAmHVt/Js6LIwHZl0J1Cb89lx0Va0AaWUP+0T6Qk/e2kerPIvef6m/vv5ZDhj+aFityAAAAAElFTkSuQmCC"},BpJf:function(e,t,a){e.exports={main:"antd-pro\\pages\\-question\\-answer-main",qtitle:"antd-pro\\pages\\-question\\-answer-qtitle",qicon:"antd-pro\\pages\\-question\\-answer-qicon",title_wrapper:"antd-pro\\pages\\-question\\-answer-title_wrapper",title:"antd-pro\\pages\\-question\\-answer-title",answer:"antd-pro\\pages\\-question\\-answer-answer",btn_wrapper:"antd-pro\\pages\\-question\\-answer-btn_wrapper",answer_btn:"antd-pro\\pages\\-question\\-answer-answer_btn"}},gdxr:function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("pVnL"));a("+L6B");var u=n(a("2/Rp"));a("14J3");var i=n(a("BMrR"));a("Pwec");var s=n(a("CtXQ"));a("jCWc");var d,o,f=n(a("kPKH")),c=n(a("lwsE")),p=n(a("W8MJ")),m=n(a("a1gu")),A=n(a("Nsbk")),g=n(a("7W2i")),w=l(a("q1tI")),h=a("MuoO"),E=n(a("v99g")),v=n(a("0C3M")),q=a("LLXN"),C=n(a("BpJf")),k=n(a("9NTl")),y={xs:24,sm:24,md:24,lg:16,xl:16,xxl:16},L=(d=(0,h.connect)(function(e){var t=e.question;return{question:t}}),d(o=function(e){function t(e){var a;return(0,c.default)(this,t),a=(0,m.default)(this,(0,A.default)(t).call(this,e)),a.item=e.location.state,console.log(a.item),a}return(0,g.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){return w.default.createElement(E.default,null,w.default.createElement("div",{className:C.default.main},w.default.createElement(i.default,null,w.default.createElement(f.default,y,w.default.createElement("h4",null,this.item.category_f_name&&this.item.category_f_name+">"+this.item.category_s_name+">"+this.item.category_t_name)),w.default.createElement(f.default,y,w.default.createElement("div",{className:C.default.qtitle},w.default.createElement(s.default,{type:"question-circle",className:C.default.qicon}),w.default.createElement("a",null,this.item.qtitle))),this.item.baid?w.default.createElement(f.default,y,w.default.createElement("div",{className:C.default.title_wrapper},w.default.createElement("img",{alt:"best",src:k.default}),w.default.createElement("h3",{className:C.default.title},"\u6700\u4f73\u7b54\u6848")),w.default.createElement("div",{className:C.default.answer},this.item.acontent)):null,w.default.createElement(f.default,y,w.default.createElement(v.default,null))),w.default.createElement(i.default,null,w.default.createElement(f.default,(0,r.default)({},y,{className:C.default.btn_wrapper}),w.default.createElement(u.default,{type:"primary",className:C.default.answer_btn},this.item.baid?(0,q.formatMessage)({id:"app.settings.perfect"}):(0,q.formatMessage)({id:"app.settings.answer"}))))))}}]),t}(w.PureComponent))||o),b=L;t.default=b},q6al:function(e,t,a){e.exports={editor_wrapper:"antd-pro\\components\\-rich-text-editor\\style-editor_wrapper",height:"antd-pro\\components\\-rich-text-editor\\style-height"}}}]);