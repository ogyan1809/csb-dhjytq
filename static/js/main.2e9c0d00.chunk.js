(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(7),i=c.n(o),r=c(2),l=c(5),a=(c(15),c(0)),s={backgroundColor:"#c1ffff",width:"400px",height:"30px",padding:"8px",margin:"8px",borderRadius:"8px"},j=function(e){var t=e.todoText,c=e.onChange,n=e.onClick,o=e.disabled;return Object(a.jsxs)("div",{style:s,children:[Object(a.jsx)("input",{disabled:o,placeholder:"TODO\u3092\u5165\u529b",value:t,onChange:c}),Object(a.jsx)("button",{disabled:o,onClick:n,children:"\u8ffd\u52a0"})]})},d=function(e){var t=e.todos,c=e.onClickComplete,n=e.onClickDelete;return Object(a.jsxs)("div",{className:"incomplete-area",children:[Object(a.jsx)("p",{className:"title",children:"\u672a\u5b8c\u4e86\u306eTODO"}),Object(a.jsx)("ul",{children:t.map((function(e,t){return Object(a.jsxs)("div",{className:"list-row",children:[Object(a.jsx)("li",{children:e}),Object(a.jsx)("button",{onClick:function(){return c(e,t)},children:"\u5b8c\u4e86"}),Object(a.jsx)("button",{onClick:function(){return n(t)},children:"\u524a\u9664"})]},e)}))})]})},b=function(e){var t=e.todos,c=e.onClickBack;return Object(a.jsxs)("div",{className:"complete-area",children:[Object(a.jsx)("p",{className:"title",children:"\u5b8c\u4e86\u306eTODO"}),Object(a.jsx)("ul",{children:t.map((function(e,t){return Object(a.jsxs)("div",{className:"list-row",children:[Object(a.jsx)("li",{children:e}),Object(a.jsx)("button",{onClick:function(){return c(e,t)},children:"\u623b\u3059"})]},e)}))})]})},u=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],o=t[1],i=Object(n.useState)([]),s=Object(l.a)(i,2),u=s[0],O=s[1],h=Object(n.useState)([]),x=Object(l.a)(h,2),p=x[0],f=x[1],C=function(e){var t=Object(r.a)(u);t.splice(e,1),O(t)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j,{todoText:c,onChange:function(e){return o(e.target.value)},onClick:function(){if(""!==c){var e=[].concat(Object(r.a)(u),[c]);O(e),o("")}},disabled:u.length>=5}),u.length>=5&&Object(a.jsx)("p",{style:{color:"red"},children:"\u767b\u9332\u3067\u304d\u308btodo\u306f5\u500b\u307e\u3067\u3067\u3059\u3002"}),Object(a.jsx)(d,{todos:u,onClickComplete:function(e,t){var c=[].concat(Object(r.a)(p),[e]);f(c),C(t)},onClickDelete:C}),Object(a.jsx)(b,{todos:p,onClickBack:function(e,t){var c=[].concat(Object(r.a)(u),[e]);O(c);var n=Object(r.a)(p);n.splice(t,1),f(n)}})]})};i.a.render(Object(a.jsx)(u,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2e9c0d00.chunk.js.map