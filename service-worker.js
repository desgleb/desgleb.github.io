if(!self.define){let s,l={};const n=(n,e)=>(n=new URL(n+".js",e).href,l[n]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=l,document.head.appendChild(s)}else s=n,importScripts(n),l()})).then((()=>{let s=l[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(e,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let o={};const u=s=>n(s,r),c={module:{uri:r},exports:o,require:u};l[r]=Promise.all(e.map((s=>c[s]||u(s)))).then((s=>(i(...s),o)))}}define(["./workbox-5b385ed2"],(function(s){"use strict";s.setCacheNameDetails({prefix:"money-catcher"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/108.8f6ef8e9.css",revision:null},{url:"/css/177.aace4cdc.css",revision:null},{url:"/css/430.c075e0a1.css",revision:null},{url:"/css/478.b197f489.css",revision:null},{url:"/css/522.7ebf7be4.css",revision:null},{url:"/css/531.1d4ba553.css",revision:null},{url:"/css/533.6d15f556.css",revision:null},{url:"/css/743.a9a91eb7.css",revision:null},{url:"/css/948.9f68ca41.css",revision:null},{url:"/css/app.f41b4cf8.css",revision:null},{url:"/css/chunk-vendors.b16aa9a2.css",revision:null},{url:"/favicon.png",revision:"3ba03eb8b80055304dd15905de5a7873"},{url:"/fonts/material-icons-outlined.78a93b20.woff",revision:null},{url:"/fonts/material-icons-outlined.f86cb7b0.woff2",revision:null},{url:"/fonts/material-icons-round.92dc7ca2.woff",revision:null},{url:"/fonts/material-icons-round.b10ec9db.woff2",revision:null},{url:"/fonts/material-icons-sharp.3885863e.woff2",revision:null},{url:"/fonts/material-icons-sharp.a71cb2bf.woff",revision:null},{url:"/fonts/material-icons-two-tone.588d6313.woff",revision:null},{url:"/fonts/material-icons-two-tone.675bd578.woff2",revision:null},{url:"/fonts/material-icons.4ad034d2.woff",revision:null},{url:"/fonts/material-icons.59322316.woff2",revision:null},{url:"/index.html",revision:"36d4d6e67847a5295c0e8ae13807f556"},{url:"/js/108.97f0e220.js",revision:null},{url:"/js/177.bfa2911f.js",revision:null},{url:"/js/28.9b692392.js",revision:null},{url:"/js/430.27169ad5.js",revision:null},{url:"/js/478.8d87b9e4.js",revision:null},{url:"/js/522.4c3f1488.js",revision:null},{url:"/js/531.fbeb82d9.js",revision:null},{url:"/js/533.de968b8b.js",revision:null},{url:"/js/743.f38de31b.js",revision:null},{url:"/js/944.4bc41aef.js",revision:null},{url:"/js/948.ca44f390.js",revision:null},{url:"/js/app.ed53428f.js",revision:null},{url:"/js/chunk-vendors.0520649e.js",revision:null},{url:"/manifest.json",revision:"85744f1de8b2065fd34e47ebad2675df"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
