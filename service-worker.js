if(!self.define){let s,l={};const n=(n,i)=>(n=new URL(n+".js",i).href,l[n]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=l,document.head.appendChild(s)}else s=n,importScripts(n),l()})).then((()=>{let s=l[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,e)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let o={};const u=s=>n(s,r),c={module:{uri:r},exports:o,require:u};l[r]=Promise.all(i.map((s=>c[s]||u(s)))).then((s=>(e(...s),o)))}}define(["./workbox-5b385ed2"],(function(s){"use strict";s.setCacheNameDetails({prefix:"money-catcher"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/347.da574a68.css",revision:null},{url:"/css/45.b97b4d7d.css",revision:null},{url:"/css/46.21728027.css",revision:null},{url:"/css/478.b197f489.css",revision:null},{url:"/css/531.1d4ba553.css",revision:null},{url:"/css/882.ca336c14.css",revision:null},{url:"/css/app.6f1e89f5.css",revision:null},{url:"/css/chunk-vendors.b16aa9a2.css",revision:null},{url:"/fonts/material-icons-outlined.78a93b20.woff",revision:null},{url:"/fonts/material-icons-outlined.f86cb7b0.woff2",revision:null},{url:"/fonts/material-icons-round.92dc7ca2.woff",revision:null},{url:"/fonts/material-icons-round.b10ec9db.woff2",revision:null},{url:"/fonts/material-icons-sharp.3885863e.woff2",revision:null},{url:"/fonts/material-icons-sharp.a71cb2bf.woff",revision:null},{url:"/fonts/material-icons-two-tone.588d6313.woff",revision:null},{url:"/fonts/material-icons-two-tone.675bd578.woff2",revision:null},{url:"/fonts/material-icons.4ad034d2.woff",revision:null},{url:"/fonts/material-icons.59322316.woff2",revision:null},{url:"/index.html",revision:"cd11b8e4466714c130cca80bf0d1493d"},{url:"/js/252.bc6d6c25.js",revision:null},{url:"/js/347.521934c3.js",revision:null},{url:"/js/45.929f0b52.js",revision:null},{url:"/js/46.bc53b954.js",revision:null},{url:"/js/471.3b714e54.js",revision:null},{url:"/js/478.fe885004.js",revision:null},{url:"/js/531.5c646897.js",revision:null},{url:"/js/58.c3115005.js",revision:null},{url:"/js/882.be0ad695.js",revision:null},{url:"/js/944.38b51d35.js",revision:null},{url:"/js/app.5a7ce64d.js",revision:null},{url:"/js/chunk-vendors.57d95e83.js",revision:null},{url:"/manifest.json",revision:"85744f1de8b2065fd34e47ebad2675df"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
