(this["webpackJsonpblogme-ui"]=this["webpackJsonpblogme-ui"]||[]).push([[7],{54:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),l=n.n(c),r=n(10),i=n(15),u=n(24),s=n(5),o=(n(53),n(33),function(e){var t=e.value,n=e.onChange,a="input-".concat(+new Date),r=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=function(e){e.attachment.file&&s.a.upload("/articles/upload",e.attachment.file,(function(t){return e.attachment.setUploadProgress(t)})).then((function(t){e.attachment.setAttributes(Object(u.a)({url:t.url,href:t.url},/(jpe?g|png|gif)$/i.test(t.url)?{filesize:null,filename:null}:{}))}))};return window.addEventListener("trix-attachment-add",e),function(){window.removeEventListener("trix-attachment-add",e)}}),[]),Object(c.useEffect)((function(){var e=null,t=setInterval((function(){if(r){var t=r.current.value;null===e||e===t||n(t),e=t}}),500);return function(){clearInterval(t)}}),[n]),l.a.createElement("div",null,l.a.createElement("input",{id:a,ref:r,type:"hidden",name:"content",value:t}),l.a.createElement("trix-editor",{input:a,class:"content trix-content"}))}),m=n(14);t.default=function(e){var t=e.item,n=void 0===t?{}:t,u=Object(c.useState)(n.subject||""),f=Object(a.a)(u,2),d=f[0],v=f[1],b=Object(c.useState)(n.content||""),p=Object(a.a)(b,2),E=p[0],h=p[1],j=Object(c.useState)(!1),g=Object(a.a)(j,2),O=g[0],N=g[1],w=Object(r.f)();return l.a.createElement("div",{className:"container editor"},l.a.createElement(i.Helmet,null,l.a.createElement("title",null,"".concat(n.id?"\u7f16\u8f91":"\u53d1\u5e03","\u6587\u7ae0"))),l.a.createElement("form",null,l.a.createElement("div",{className:"has-text-right"},l.a.createElement("button",{type:"button",className:"button is-info ".concat(O?"is-loading":""),onClick:function(){N(!0),function(e,t,n){if(!e)return Promise.reject("\u8bf7\u8f93\u5165\u6807\u9898");var a={subject:e,content:t};return n?s.a.put("/articles/".concat(n),a):s.a.post("/articles",a)}(d,E,n.id).then((function(e){m.a.success("\u4fdd\u5b58\u6210\u529f"),w.push("/p/".concat(e.id||n.id))})).catch(m.a.error).finally((function(e){return N(!1)}))}},n.id?"\u4fdd\u5b58":"\u53d1\u5e03")),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"\u6807\u9898"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",value:d,onChange:function(e){return v(e.target.value)}}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"\u6b63\u6587"),l.a.createElement("div",{className:"control"},l.a.createElement(o,{value:E,onChange:h})))))}}}]);
//# sourceMappingURL=7.217f1079.chunk.js.map