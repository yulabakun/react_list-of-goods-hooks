(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o,c=n(7),s=n.n(c),a=n(6),i=n(8),r=n(1),u=(n(13),n(4)),l=n.n(u),b=(n(14),n(0));!function(t){t.Name="name",t.Length="length",t.None="no-sorting"}(o||(o={}));var h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(t,e){return{name:t,id:e}}));var m=function(){var t=Object(r.useState)(o.None),e=Object(a.a)(t,2),n=e[0],c=e[1],s=Object(r.useState)(!1),u=Object(a.a)(s,2),m=u[0],j=u[1],d=function(t,e,n){var c=Object(i.a)(t);return e===o.Name&&c.sort((function(t,e){return t.name.localeCompare(e.name)})),e===o.Length&&c.sort((function(t,e){return t.name.length-e.name.length})),n?c.reverse():c}(h,n,m),g=n!==o.None||m;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":n!==o.Name}),onClick:function(){return c(o.Name)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":n!==o.Length}),onClick:function(){return c(o.Length)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!m}),onClick:function(){j(!m)},children:"Reverse"}),g&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(o.None),j(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:d.map((function(t){var e=t.name,n=t.id;return Object(b.jsx)("li",{"data-cy":"Good",children:e},n)}))})]})};s.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2d49a963.chunk.js.map