(this["webpackJsonpblogme-ui"]=this["webpackJsonpblogme-ui"]||[]).push([[7],{53:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),i=n.n(c),r=n(10),l=n(15),u=n(24),o=n(5),s=(n(52),n(33),function(e){var t=e.value,n=e.onChange,a="input-".concat(+new Date);return Object(c.useEffect)((function(){var e=function(e){e.attachment.file&&o.a.upload("/articles/upload",e.attachment.file,(function(t){return e.attachment.setUploadProgress(t)})).then((function(t){e.attachment.setAttributes(Object(u.a)({url:t.url,href:t.url},/(jpe?g|png|gif)$/i.test(t.url)?{filesize:null,filename:null}:{}))}))};return window.addEventListener("trix-attachment-add",e),function(){window.removeEventListener("trix-attachment-add",e)}}),[]),Object(c.useEffect)((function(){var e=function(e){return n(e.target.value)};return window.addEventListener("trix-change",e),function(){window.removeEventListener("trix-change",e)}}),[n]),i.a.createElement("div",null,i.a.createElement("input",{id:a,type:"hidden",name:"content",value:t}),i.a.createElement("trix-editor",{input:a,class:"content is-trix"}))}),m=n(14);t.default=function(e){var t=e.item,n=void 0===t?{}:t,u=Object(c.useState)(n.subject||""),d=Object(a.a)(u,2),f=d[0],v=d[1],b=Object(c.useState)(n.content||""),E=Object(a.a)(b,2),h=E[0],p=E[1],g=Object(c.useState)(!1),j=Object(a.a)(g,2),w=j[0],N=j[1],O=Object(r.f)();return i.a.createElement("div",{className:"container editor"},i.a.createElement(l.Helmet,null,i.a.createElement("title",null,"".concat(n.id?"\u7f16\u8f91":"\u53d1\u5e03","\u6587\u7ae0"))),i.a.createElement("form",null,i.a.createElement("div",{className:"has-text-right"},i.a.createElement("button",{type:"button",className:"button is-info ".concat(w?"is-loading":""),onClick:function(){N(!0),function(e,t,n){if(!e)return Promise.reject("\u8bf7\u8f93\u5165\u6807\u9898");var a={subject:e,content:t};return n?o.a.put("/articles/".concat(n),a):o.a.post("/articles",a)}(f,h,n.id).then((function(e){m.a.success("\u4fdd\u5b58\u6210\u529f"),O.push("/p/".concat(e.id||n.id))})).catch(m.a.error).finally((function(e){return N(!1)}))}},n.id?"\u4fdd\u5b58":"\u53d1\u5e03")),i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label"},"\u6807\u9898"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{className:"input",type:"text",value:f,onChange:function(e){return v(e.target.value)}}))),i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label"},"\u6b63\u6587"),i.a.createElement("div",{className:"control"},i.a.createElement(s,{value:h,onChange:p})))))}}}]);
//# sourceMappingURL=7.b627f4db.chunk.js.map