(this["webpackJsonpblogme-ui"]=this["webpackJsonpblogme-ui"]||[]).push([[1],{10:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(30),i={config:{},user:null,accessToken:a(5).a.loadTokenFromCache()};t.a=Object(r.a)(c.a,i,{setConfig:function(e,t){e.setState({config:t})},setUser:function(e,t){e.setState({user:t})},setAccessToken:function(e,t){e.setState({accessToken:t})}})},12:function(e,t,a){"use strict";var n=a(32),c=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"top-center";n.toast({message:e,type:t,position:a})};t.a={info:function(e){return c(e,"is-info")},success:function(e){return c(e,"is-success")},warning:function(e){return c(e,"is-warning")},error:function(e){return c(e,"is-danger")}}},15:function(e,t,a){"use strict";var n=a(24),c=a(0),r=a.n(c),i={position:"absolute",animation:"spinAround 0.5s infinite linear",border:"2px solid #dbdbdb",borderRadius:"290486px",borderRightColor:"transparent",borderTopColor:"transparent",display:"block"};t.a=function(e){var t=e.size,a=void 0===t?6:t;return r.a.createElement("div",{style:{position:"relative",paddingTop:"".concat(a/2,"em"),paddingBottom:"".concat(a/2,"em")}},r.a.createElement("div",{style:Object(n.a)({},i,{height:"".concat(a,"em"),width:"".concat(a,"em"),left:"calc(50% - (".concat(a,"em / 2))"),top:"calc(50% - (".concat(a,"em / 2))"),borderWidth:"".concat(a>=6?4:2,"px")})}," "))}},25:function(e,t,a){"use strict";var n=a(22),c=a(0),r=a.n(c);t.a=function(e){var t=e.items,a=e.curParams,c=e.onClick,i=e.limit,o=e.idKey;i=parseInt(i||a.limit||10,10),o=o||"id";var l,s=(l=c,function(e){l(e),window.scrollTo(0,0)});if(!t||!t.length&&!a.starting_after)return"";var u=a.ending_before||t.length===i,m=a.starting_after||a.ending_before&&t.length===i,d=Math.min.apply(Math,Object(n.a)(t.map((function(e){return e[o]})))),f=Math.max.apply(Math,Object(n.a)(t.map((function(e){return e[o]}))));return r.a.createElement("nav",{className:"pagination is-centered",role:"navigation","aria-label":"pagination"},r.a.createElement("ul",{className:"pagination-list"},r.a.createElement("li",null,r.a.createElement("button",{className:"button pagination-link",disabled:!m,onClick:function(){return s({limit:i,ending_before:f})}},"\u4e0a\u4e00\u9875")),r.a.createElement("li",null,r.a.createElement("button",{className:"button pagination-link",disabled:!u,onClick:function(){return s({limit:i,starting_after:d})}},"\u4e0b\u4e00\u9875"))))}},28:function(e,t,a){"use strict";var n={text:null};t.a={setText:function(e){if(n.text!==e){n.text=e;var t=document.createElement("canvas"),a=t.getContext("2d");t.width=256,t.height=256,a.fillStyle="#209CEE",a.fillRect(0,0,256,256),a.fillStyle="#fff",a.font="bold ".concat(Math.floor(192),"px/").concat(256,"px sans-serif"),a.textBaseline="middle",a.textAlign="center",a.fillText(e,128,128,256);var c=document.querySelector('head link[rel="icon"]');window.URL?t.toBlob((function(e){c.href=URL.createObjectURL(e)})):c.href=t.toDataURL("image/png")}},setWithDomainDefault:function(e){var t=e?e[0]:window.location.hostname[0].toUpperCase();return this.setText(t)}}},44:function(e,t,a){e.exports=a(62)},5:function(e,t,a){"use strict";var n=a(31),c="",r=window._API_BASE,i=/https?:\/\/[^/]+/i.exec(r)[0],o={};t.a={onStatus:function(e,t,a){if(o[e]||(o[e]=[]),a){t.__osid=a;var n=!0,c=!1,r=void 0;try{for(var i,l=o[e][Symbol.iterator]();!(n=(i=l.next()).done);n=!0){if(i.value.__osid===a)return}}catch(s){c=!0,r=s}finally{try{n||null==l.return||l.return()}finally{if(c)throw r}}}o[e].push(t)},fetch:function(e,t,a){var i={headers:c?{Authorization:"Bearer ".concat(c)}:{},method:e};return!a||"POST"!==e&&"PUT"!==e||(i.body=a,a instanceof FormData||(i.body=JSON.stringify(a),i.headers["Content-Type"]="application/json")),Object(n.a)("".concat(r).concat(t),i).then((function(e){if(o[e.status]){var t=!0,a=!1,n=void 0;try{for(var c,r=o[e.status][Symbol.iterator]();!(t=(c=r.next()).done);t=!0){(0,c.value)(e)}}catch(l){a=!0,n=l}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}}var i=e.json();return e.ok?i:i.then((function(e){return Promise.reject(e.detail||e)}))}))},get:function(e,t){return t&&(t=Object.keys(t).map((function(e){return"".concat(e,"=").concat(t[e])})).join("&"),e="".concat(e,"?").concat(t)),this.fetch("GET",e)},post:function(e,t){return this.fetch("POST",e,t)},put:function(e,t){return this.fetch("PUT",e,t)},delete:function(e){return this.fetch("DELETE",e)},login:function(e,t,a){var n=new FormData;return n.append("username",t),n.append("password",a),this.post(e,n).then((function(e){return e&&e.access_token?e.access_token:e}))},upload:function(e,t,a){return new Promise((function(n,o){var l=new FormData,s=new XMLHttpRequest,u=r+e;l.append("file",t),s.open("POST",u,!0),s.setRequestHeader("Authorization","Bearer ".concat(c)),s.upload.addEventListener("progress",(function(e){a&&a(e.loaded/e.total*100)})),s.addEventListener("load",(function(e){if(s.readyState===s.DONE)try{var t=JSON.parse(s.responseText);200===s.status?n({url:"".concat(i).concat(t.url)}):o(t.detail||t)}catch(e){o(e)}})),s.send(l)}))},loadTokenFromCache:function(){return window.localStorage.getItem("token")||""},saveTokenToCache:function(e){return c=e||"",window.localStorage.setItem("token",c)}}},50:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),i=a.n(r),o=(a(49),a(1)),l=a(4),s=a(11),u=a(10),m=a(12),d=a(5),f=function(e){var t=e.isActive,a=e.onClose,r=e.onLoggedin,i=Object(n.useState)(""),l=Object(o.a)(i,2),s=l[0],u=l[1],f=Object(n.useState)(""),b=Object(o.a)(f,2),h=b[0],v=b[1],g=Object(n.useState)(!1),p=Object(o.a)(g,2),E=p[0],N=p[1],j=Object(n.useRef)(null),k=function(){N(!0),function(e,t){return e&&t?d.a.login("/users/access-token",e,t):Promise.reject("\u8bf7\u586b\u5199\u5b8c\u6574")}(s,h).then((function(e){m.a.success("\u767b\u5f55\u6210\u529f"),r(e)})).catch(m.a.error).finally((function(e){return N(!1)}))};return Object(n.useEffect)((function(){t&&j.current&&j.current.focus()}),[t]),c.a.createElement("div",{className:"modal login ".concat(t?"is-active":"")},c.a.createElement("div",{className:"modal-background"}),c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"box"},c.a.createElement("h1",{className:"title has-text-centered"},"\u767b\u5f55"),c.a.createElement("form",null,c.a.createElement("div",{className:"field"},c.a.createElement("label",{className:"label"},"\u7528\u6237\u540d"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input",type:"text",ref:j,onChange:function(e){return u(e.target.value)}}))),c.a.createElement("div",{className:"field"},c.a.createElement("label",{className:"label"},"\u5bc6\u7801"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input",type:"password",onChange:function(e){return v(e.target.value)},onKeyPress:function(e){return 13===e.charCode&&k()}}))),c.a.createElement("div",{className:"field is-grouped"},c.a.createElement("div",{className:"control"},c.a.createElement("button",{type:"button",className:"button is-link ".concat(E?"is-loading":""),onClick:k},"\u767b\u5f55")),c.a.createElement("div",{className:"control"},c.a.createElement("button",{type:"button",className:"button is-link is-light",onClick:a},"\u53d6\u6d88")))))),c.a.createElement("button",{type:"button",className:"modal-close is-large",onClick:a}))},b=function(e){var t=e.className,a=e.href,n=e.children,r=e.onClick,i={href:"#"};return t&&(i.className=t),a&&(i.href=a),i.onClick=r?function(e){e.preventDefault(),r(e)}:function(e){return e.preventDefault()},c.a.createElement("a",i,n)},h=(a(50),function(){var e=Object(u.a)(),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),d=Object(o.a)(i,2),h=d[0],v=d[1],g=Object(n.useState)(!1),p=Object(o.a)(g,2),E=p[0],N=p[1],j=Object(s.f)();return c.a.createElement("section",{className:"hero header is-info is-medium",style:a.config["site.header-bg"]?{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),url(".concat(a.config["site.header-bg"],")")}:{}},c.a.createElement("div",{className:"hero-head"},c.a.createElement("nav",{className:"navbar is-info"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"navbar-brand"},c.a.createElement(b,{className:"navbar-burger burger ".concat(h?"is-active":""),onClick:function(){return v(!h)}},c.a.createElement("span",{"aria-hidden":"true"}),c.a.createElement("span",{"aria-hidden":"true"}),c.a.createElement("span",{"aria-hidden":"true"}))),c.a.createElement("div",{className:"navbar-menu ".concat(h?"is-active":"")},c.a.createElement("div",{className:"navbar-end"},a.user?c.a.createElement(c.a.Fragment,null,c.a.createElement(l.c,{className:"navbar-item",to:"/new",activeClassName:"is-active",onClick:function(){return v(!1)}},"\u53d1\u5e03"),c.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},c.a.createElement(b,{className:"navbar-link"},"\u7ba1\u7406"),c.a.createElement("div",{className:"navbar-dropdown is-right"},c.a.createElement(l.c,{className:"navbar-item",to:"/admin/article",activeClassName:"is-active",onClick:function(){return v(!1)}},"\u6587\u7ae0"),c.a.createElement(l.c,{className:"navbar-item",to:"/admin/user",activeClassName:"is-active",onClick:function(){return v(!1)}},"\u7528\u6237"),c.a.createElement(l.c,{className:"navbar-item",to:"/admin/site",activeClassName:"is-active",onClick:function(){return v(!1)}},"\u7f51\u7ad9"))),c.a.createElement(b,{className:"navbar-item",onClick:function(){v(!1),r.setAccessToken(""),m.a.success("\u5df2\u9000\u51fa\u767b\u5f55"),j.push("/")}},"\u9000\u51fa")):c.a.createElement(b,{className:"navbar-item",onClick:function(){v(!1),N(!0)}},"\u767b\u5f55")))))),c.a.createElement("div",{className:"hero-body"},c.a.createElement("div",{className:"container has-text-centered"},c.a.createElement("h1",{className:"title"},c.a.createElement(l.b,{to:"/"},a.config["site.name"])),c.a.createElement("h2",{className:"subtitle"},a.config["site.desc"]))),c.a.createElement(f,{isActive:E,onClose:function(){return N(!1)},onLoggedin:function(e){N(!1),r.setAccessToken(e)}}))}),v=function(){var e=(new Date).getFullYear(),t=window.location.hostname;return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"level is-mobile container"},c.a.createElement("div",{className:"level-left"},c.a.createElement("div",{className:"level-item"},c.a.createElement("p",null,"\xa9 ",e," ",t))),c.a.createElement("div",{className:"level-right"},c.a.createElement("div",{className:"level-item"},c.a.createElement("p",null,c.a.createElement(l.b,{to:"/archive",className:"has-text-grey-dark"},"\u6587\u7ae0\u7d22\u5f15")," ","\xb7"," ",c.a.createElement("a",{href:"/feed/",target:"_blank",className:"has-text-grey-dark"},"RSS"))))))},g=a(16),p=a(14),E=a(15),N=a(8),j=a.n(N),k=a(35),y=a.n(k),w=a(36),O=a.n(w),C=a(37),S=a.n(C),x=a(38),T=a.n(x),_=a(39),L=a.n(_),A=a(40),P=a.n(A),R=a(41),D=a.n(R),U=a(42),W=a.n(U);a(59);j.a.registerLanguage("javascript",y.a),j.a.registerLanguage("xml",O.a),j.a.registerLanguage("css",S.a),j.a.registerLanguage("bash",T.a),j.a.registerLanguage("json",L.a),j.a.registerLanguage("python",P.a),j.a.registerLanguage("shell",D.a),j.a.registerLanguage("sql",W.a);var I=function(e){return j.a.highlightAuto(e).value},z=(a(60),a(43),function(e){var t,a=e.item,r=Object(n.useState)(a||{}),i=Object(o.a)(r,2),m=i[0],f=i[1],b=Object(n.useState)(a||!1),h=Object(o.a)(b,2),v=h[0],N=h[1],j=Object(u.a)()[0],k=!1,y=m.created_at?m.created_at.split("T")[0]:"-";if(!a){k=!0;var w=Object(s.g)().articleId;Object(n.useEffect)((function(){d.a.get("/articles/".concat(w)).then((function(e){return f(e)})).finally((function(e){return N(!0)}))}),[w])}return c.a.createElement("div",{className:"article"},k&&m.id&&c.a.createElement(g.Helmet,null,c.a.createElement("title",null,"".concat(m.subject," - ").concat(j.config["site.name"]))),!v&&c.a.createElement(E.a,null),c.a.createElement("h1",{className:"title"},k?m.subject:c.a.createElement(l.b,{to:"/p/".concat(m.id)},m.subject)),c.a.createElement("ul",{className:"meta"},c.a.createElement("li",{title:m.username},c.a.createElement(p.d,{icon:p.c}),m.display_name||m.username),c.a.createElement("li",{title:m.created_at},c.a.createElement(p.d,{icon:p.a}),y),j.user&&(j.user.id===m.user_id||j.user.is_superuser)&&c.a.createElement("li",null,c.a.createElement(l.b,{to:"/edit/".concat(m.id)},c.a.createElement(p.d,{icon:p.b}),"\u7f16\u8f91"))),c.a.createElement("div",{className:"content is-trix",dangerouslySetInnerHTML:{__html:(t=m.content||"",t.replace(/<pre>([\s\S]+?)<\/pre>/gm,(function(e,t){var a=t.replace(/^<code>|<\/code>$/g,"").replace(/<br>/g,"\n").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">");try{return'<pre class="hljs">'.concat(I(a),"</pre>")}catch(n){return e}})))}}))}),B=a(25),F=function(){var e=Object(u.a)()[0],t=Object(s.f)(),a=Object(n.useState)([]),r=Object(o.a)(a,2),i=r[0],l=r[1],m=Object(n.useState)(!1),f=Object(o.a)(m,2),b=f[0],h=f[1],v=Object(s.g)().encodedParams,p=Object(n.useState)({}),N=Object(o.a)(p,2),j=N[0],k=N[1];return Object(n.useEffect)((function(){var e={};if(v)try{e=JSON.parse(window.atob(v))}catch(t){}h(!0),k(e),d.a.get("/articles",e).then((function(e){return l(e)})).finally((function(e){return h(!1)}))}),[v]),c.a.createElement("div",{className:"container"},c.a.createElement(g.Helmet,null,c.a.createElement("title",null,e.config["site.name"]||"")),b?c.a.createElement(E.a,null):i.map((function(e){return c.a.createElement(z,{item:e,key:e.id})})),c.a.createElement(B.a,{items:i,curParams:j,onClick:function(e){return t.push("/_/".concat(window.btoa(JSON.stringify(e))))}}))},M=a(28),J=(a(61),Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,64))}))),H=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,69))})),q=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,70))})),K=Object(n.lazy)((function(){return a.e(9).then(a.bind(null,73))})),$=Object(n.lazy)((function(){return a.e(8).then(a.bind(null,71))})),G=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,72))})),X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(c.a.createElement((function(){var e=Object(u.a)(),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){d.a.get("/config").then((function(e){r.setConfig(e),M.a.setWithDomainDefault(e["site.favtext"])}))}),[r]),Object(n.useEffect)((function(){d.a.onStatus(401,(function(){return r.setAccessToken("")}))}),[r]),Object(n.useEffect)((function(){d.a.saveTokenToCache(a.accessToken),a.accessToken?d.a.post("/users/test-token").then((function(e){e.username&&r.setUser(e)})).catch(m.a.error):r.setUser(null)}),[r,a.accessToken]),c.a.createElement(l.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(h,null),c.a.createElement(n.Suspense,{fallback:c.a.createElement("div",{className:"container"},c.a.createElement(E.a,null))},c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/edit/:articleId",component:H}),c.a.createElement(s.a,{exact:!0,path:"/new",component:J}),c.a.createElement(s.a,{exact:!0,path:"/admin/article",component:q}),c.a.createElement(s.a,{exact:!0,path:"/admin/user",component:K}),c.a.createElement(s.a,{exact:!0,path:"/admin/site",component:$}),c.a.createElement(s.a,{exact:!0,path:"/archive",component:G}),c.a.createElement(s.a,{exact:!0,path:"/p/:articleId"},c.a.createElement("div",{className:"container"},c.a.createElement(z,null))),c.a.createElement(s.a,{exact:!0,path:["/_/:encodedParams","/"]},c.a.createElement(F,null)))),c.a.createElement(v,null)))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");X?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Y(t,e)}))}}()}},[[44,2,3]]]);
//# sourceMappingURL=main.18d26da4.chunk.js.map