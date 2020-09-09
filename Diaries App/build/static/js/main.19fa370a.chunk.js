(this["webpackJsonpdiaries-app"]=this["webpackJsonpdiaries-app"]||[]).push([[1],{144:function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return c}));var i=t(10),r=Object(i.b)({name:"auth",initialState:{token:null,isAuthenticated:!1},reducers:{saveToken:function(n,e){var t=e.payload;t&&(n.token=t)},clearToken:function(n){n.token=null},setAuthState:function(n,e){var t=e.payload;n.isAuthenticated=t}}}),a=r.actions,o=a.saveToken,c=(a.clearToken,a.setAuthState);e.a=r.reducer},147:function(n,e,t){n.exports=t.p+"static/media/Loading.18d85f10.gif"},159:function(n,e,t){n.exports=t(267)},164:function(n,e,t){},174:function(n,e){},176:function(n,e){},186:function(n,e){},188:function(n,e){},215:function(n,e){},216:function(n,e){},221:function(n,e){},223:function(n,e){},247:function(n,e){},267:function(n,e,t){"use strict";t.r(e);var i=t(0),r=t.n(i),a=t(52),o=t.n(a),c=(t(164),t(86)),u=t(5),s=t(33),d=t(147),l=t.n(d),f=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(4),t.e(5)]).then(t.bind(null,315))})),v=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,316))})),p=function(){var n=Object(s.c)((function(n){return n.auth.isAuthenticated}));return r.a.createElement(c.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/"},r.a.createElement(i.Suspense,{fallback:r.a.createElement("img",{src:l.a,style:{backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center",width:"100%",height:"100%"}})},n?r.a.createElement(v,null):r.a.createElement(f,null)))))},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}t(17),t(157),t(22),t(42);var y=t(85);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:y.a},r.a.createElement(p,null))),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");h?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):b(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(e,n)}))}}()},85:function(n,e,t){"use strict";t.d(e,"b",(function(){return v}));var i=t(10),r=t(16),a=t(144),o=t(89),c=t(87),u=t(91),s=t(88),d=Object(r.c)({auth:a.a,diaries:c.b,entries:u.a,user:o.a,editor:s.a}),l=t(33),f=Object(i.a)({reducer:d}),v=function(){return Object(l.b)()};e.a=f},87:function(n,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"c",(function(){return u}));var i=t(145),r=t(10),a=Object(r.b)({name:"diaries",initialState:[],reducers:{addDiary:function(n,e){var t=e.payload.filter((function(e){return-1===n.findIndex((function(n){return n.id===e.id}))}));n.push.apply(n,Object(i.a)(t))},updateDiary:function(n,e){var t=e.payload,i=t.id,r=n.findIndex((function(n){return n.id===i}));-1!==r&&n.splice(r,1,t)}}}),o=a.actions,c=o.addDiary,u=o.updateDiary;e.b=a.reducer},88:function(n,e,t){"use strict";t.d(e,"c",(function(){return o})),t.d(e,"d",(function(){return c})),t.d(e,"b",(function(){return u}));var i=t(10),r=Object(i.b)({name:"editor",initialState:{canEdit:!1,currentlyEditing:null,activeDiaryId:null},reducers:{setCanEdit:function(n,e){var t=e.payload;n.canEdit=null!=t?t:!n.canEdit},setCurrentlyEditing:function(n,e){var t=e.payload;n.currentlyEditing=t},setActiveDiaryId:function(n,e){var t=e.payload;n.activeDiaryId=t}}}),a=r.actions,o=a.setCanEdit,c=a.setCurrentlyEditing,u=a.setActiveDiaryId;e.a=r.reducer},89:function(n,e,t){"use strict";t.d(e,"b",(function(){return a}));var i=t(10),r=Object(i.b)({name:"user",initialState:null,reducers:{setUser:function(n,e){return e.payload}}}),a=r.actions.setUser;e.a=r.reducer},91:function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return c}));var i=t(10),r=Object(i.b)({name:"entries",initialState:[],reducers:{setEntries:function(n,e){var t=e.payload;return null!=t?t:[]},updateEntry:function(n,e){var t=e.payload,i=t.id,r=n.findIndex((function(n){return n.id===i}));-1!==r&&n.splice(r,1,t)}}}),a=r.actions,o=a.setEntries,c=a.updateEntry;e.a=r.reducer}},[[159,2,3]]]);
//# sourceMappingURL=main.19fa370a.chunk.js.map