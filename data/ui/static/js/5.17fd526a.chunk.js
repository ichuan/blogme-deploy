(this["webpackJsonpblogme-ui"]=this["webpackJsonpblogme-ui"]||[]).push([[5],{57:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(0),c=a.n(l),r=a(13),u=a(7),i=a(4),m=a(20),s=a(9),o=function(e){var t=e.item,a=e.onDelete;return c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(u.b,{className:"is-block",to:"/edit/".concat(t.id)},t.subject)),c.a.createElement("td",{title:t.username},t.display_name),c.a.createElement("td",null,t.created_at),c.a.createElement("td",null,c.a.createElement("div",{className:"buttons are-small"},c.a.createElement("button",{type:"button",className:"button is-danger is-light",onClick:a},"\u5220\u9664"))))};t.default=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),a=t[0],u=t[1],b=Object(l.useState)({limit:20}),E=Object(n.a)(b,2),d=E[0],f=E[1],h=Object(s.a)()[0];return Object(l.useEffect)((function(){h.user&&i.a.get("/articles/archive",d).then((function(e){return u(e)}))}),[d,h.user]),c.a.createElement("div",{className:"container"},c.a.createElement(r.Helmet,null,c.a.createElement("title",null,"\u7ba1\u7406\u6587\u7ae0")),c.a.createElement("div",{className:"table-container"},c.a.createElement("table",{className:"table is-hoverable is-fullwidth"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"\u6807\u9898"),c.a.createElement("th",null,"\u4f5c\u8005"),c.a.createElement("th",null,"\u65f6\u95f4"),c.a.createElement("th",null,"\u64cd\u4f5c"))),c.a.createElement("tbody",null,a.map((function(e){return c.a.createElement(o,{item:e,key:e.id,onDelete:function(){return window.confirm("\u786e\u5b9a\u5220\u9664\u6587\u7ae0\u300c".concat(e.subject,"\u300d\uff1f"))&&(t=e.id,i.a.delete("/articles/".concat(t))).then((function(){u(a.filter((function(t){return t.id!==e.id})))})).catch((function(e){return alert(e)}));var t}})}))))),c.a.createElement(m.a,{items:a,curParams:d,onClick:function(e){return f(e)}}))}}}]);
//# sourceMappingURL=5.17fd526a.chunk.js.map