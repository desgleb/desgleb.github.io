if(!self.define){let s,l={};const n=(n,i)=>(n=new URL(n+".js",i).href,l[n]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=l,document.head.appendChild(s)}else s=n,importScripts(n),l()})).then((()=>{let s=l[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,e)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let o={};const u=s=>n(s,r),c={module:{uri:r},exports:o,require:u};l[r]=Promise.all(i.map((s=>c[s]||u(s)))).then((s=>(e(...s),o)))}}define(["./workbox-6567b62a"],(function(s){"use strict";s.setCacheNameDetails({prefix:"money-catcher"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/404.html",revision:"d4b2aef333ba47c04e1606128b781a9f"},{url:"/css/131.a9a91eb7.css",revision:null},{url:"/css/25.312c0cfb.css",revision:null},{url:"/css/272.9f68ca41.css",revision:null},{url:"/css/326.aace4cdc.css",revision:null},{url:"/css/427.484841c9.css",revision:null},{url:"/css/669.6a257267.css",revision:null},{url:"/css/768.8a71f542.css",revision:null},{url:"/css/835.b197f489.css",revision:null},{url:"/css/941.c4dc6664.css",revision:null},{url:"/css/app.2db02a0c.css",revision:null},{url:"/css/chunk-vendors.b16aa9a2.css",revision:null},{url:"/favicon.png",revision:"3ba03eb8b80055304dd15905de5a7873"},{url:"/fonts/material-icons-outlined.78a93b20.woff",revision:null},{url:"/fonts/material-icons-outlined.f86cb7b0.woff2",revision:null},{url:"/fonts/material-icons-round.92dc7ca2.woff",revision:null},{url:"/fonts/material-icons-round.b10ec9db.woff2",revision:null},{url:"/fonts/material-icons-sharp.3885863e.woff2",revision:null},{url:"/fonts/material-icons-sharp.a71cb2bf.woff",revision:null},{url:"/fonts/material-icons-two-tone.588d6313.woff",revision:null},{url:"/fonts/material-icons-two-tone.675bd578.woff2",revision:null},{url:"/fonts/material-icons.4ad034d2.woff",revision:null},{url:"/fonts/material-icons.59322316.woff2",revision:null},{url:"/index.html",revision:"eb17669929ce386e551902d54e35dee8"},{url:"/js/131.82cf9b35.js",revision:null},{url:"/js/25.71901051.js",revision:null},{url:"/js/272.45c2c8d7.js",revision:null},{url:"/js/326.35690047.js",revision:null},{url:"/js/427.fb9d435a.js",revision:null},{url:"/js/484.4f3a32f8.js",revision:null},{url:"/js/669.cd731a67.js",revision:null},{url:"/js/768.b6dc0a59.js",revision:null},{url:"/js/812.8934dd7e.js",revision:null},{url:"/js/835.c668b63d.js",revision:null},{url:"/js/941.402b222f.js",revision:null},{url:"/js/app.ad4c1573.js",revision:null},{url:"/js/chunk-vendors.be4cfbb8.js",revision:null},{url:"/manifest.json",revision:"85744f1de8b2065fd34e47ebad2675df"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"},{url:"/vercel.json",revision:"8acb3d203eb3b58892150975e38904e4"}],{})}));
