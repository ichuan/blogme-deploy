(this["webpackJsonpblogme-ui"]=this["webpackJsonpblogme-ui"]||[]).push([[7],{53:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),i=n(10),o=n(15),l=n(23),u=n(5),s=(n(52),n(33),r.a.forwardRef((function(e,t){var n=e.value,a=e.onChange,i=e.onUploadStart,o=e.onUploadEnd,s="input-".concat(+new Date);return Object(c.useEffect)((function(){var e=function(e){e.attachment.file&&(i&&i(),u.a.upload("/articles/upload",e.attachment.file,(function(t){return e.attachment.setUploadProgress(t)})).then((function(t){e.attachment.setAttributes(Object(l.a)({url:t.url,href:t.url},/(jpe?g|png|gif)$/i.test(t.url)?{filesize:null,filename:null}:{}))})).finally((function(e){o&&o()})))};return window.addEventListener("trix-attachment-add",e),function(){window.removeEventListener("trix-attachment-add",e)}}),[i,o]),Object(c.useEffect)((function(){var e=function(e){return a(e.target.value)};return window.addEventListener("trix-change",e),function(){window.removeEventListener("trix-change",e)}}),[a]),r.a.createElement("div",null,r.a.createElement("input",{id:s,type:"hidden",name:"content",value:n}),r.a.createElement("trix-editor",{ref:t,input:s,class:"content is-trix"}))}))),d=n(11),f={_key:"bm.draft",get:function(){var e=window.localStorage.getItem(this._key);return e?JSON.parse(e):""},set:function(e){return window.localStorage.setItem(this._key,JSON.stringify(e))},remove:function(){return window.localStorage.removeItem(this._key)}};t.default=function(e){var t=e.item,n=void 0===t?{}:t,l=Object(c.useState)(n.subject||""),m=Object(a.a)(l,2),v=m[0],b=m[1],p=Object(c.useState)(n.content||""),E=Object(a.a)(p,2),h=E[0],g=E[1],w=Object(c.useRef)(null),j=Object(c.useState)(!1),O=Object(a.a)(j,2),N=O[0],S=O[1],y=Object(i.f)();return Object(c.useEffect)((function(){var e=f.get();!n.id&&e&&(window.confirm("\u53d1\u73b0\u6709\u4e4b\u524d\u672a\u4fdd\u5b58\u7684\u8349\u7a3f\uff0c\u662f\u5426\u6062\u590d\uff1f")?(b(e.subject),g(e.content),w.current.editor.loadJSON(e.state)):f.remove())}),[n.id]),Object(c.useEffect)((function(){!n.id&&v&&h&&f.set({subject:v,content:h,state:w.current.editor})}),[n.id,v,h]),r.a.createElement("div",{className:"container editor"},r.a.createElement(o.Helmet,null,r.a.createElement("title",null,"".concat(n.id?"\u7f16\u8f91":"\u53d1\u5e03","\u6587\u7ae0"))),r.a.createElement("form",null,r.a.createElement("div",{className:"has-text-right"},r.a.createElement("button",{type:"button",className:"button is-info ".concat(N?"is-loading":""),onClick:function(){S(!0),function(e,t,n){if(!e)return Promise.reject("\u8bf7\u8f93\u5165\u6807\u9898");var a={subject:e,content:t};return n?u.a.put("/articles/".concat(n),a):u.a.post("/articles",a)}(v,h,n.id).then((function(e){d.a.success("\u4fdd\u5b58\u6210\u529f"),f.remove(),y.push("/p/".concat(e.id||n.id))})).catch(d.a.error).finally((function(e){return S(!1)}))}},n.id?"\u4fdd\u5b58":"\u53d1\u5e03")),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"\u6807\u9898"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"text",value:v,onChange:function(e){return b(e.target.value)}}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"\u6b63\u6587"),r.a.createElement("div",{className:"control"},r.a.createElement(s,{ref:w,value:h,onChange:g,onUploadStart:function(){return S(!0)},onUploadEnd:function(){return S(!1)}})))))}}}]);
//# sourceMappingURL=7.99926a80.chunk.js.map