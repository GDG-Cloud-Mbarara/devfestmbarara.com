if(!self.define){let i,l={};const e=(e,n)=>(e=new URL(e+".js",n).href,l[e]||new Promise((l=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=l,document.head.appendChild(i)}else i=e,importScripts(e),l()})).then((()=>{let i=l[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(n,s)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const o=i=>e(i,r),f={module:{uri:r},exports:u,require:o};l[r]=Promise.all(n.map((i=>f[i]||o(i)))).then((i=>(s(...i),u)))}}define(["./workbox-6567b62a"],(function(i){"use strict";i.setCacheNameDetails({prefix:"devfestmbarara.com"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/169.7cb2f691.css",revision:null},{url:"/css/app.845f58f2.css",revision:null},{url:"/css/badge.e0bdb4ec.css",revision:null},{url:"/css/chunk-vendors.5626b657.css",revision:null},{url:"/css/faq.4b3be043.css",revision:null},{url:"/css/schedule.f2f6a951.css",revision:null},{url:"/fonts/google-font.6ceb8d26.woff2",revision:null},{url:"/fonts/materialdesignicons-webfont.0766edc9.eot",revision:null},{url:"/fonts/materialdesignicons-webfont.714a4eee.ttf",revision:null},{url:"/fonts/materialdesignicons-webfont.e659bf56.woff",revision:null},{url:"/fonts/materialdesignicons-webfont.fbaef2a9.woff2",revision:null},{url:"/img/badge.ebfcdd79.png",revision:null},{url:"/img/cover.94405e36.png",revision:null},{url:"/img/df23img1.da4821a3.jpg",revision:null},{url:"/img/df23img2.653c0d3f.jpg",revision:null},{url:"/img/df23img3.bac23b51.jpg",revision:null},{url:"/img/df23img4.0f8ce2ba.jpg",revision:null},{url:"/img/df23img6.9d43dbca.jpg",revision:null},{url:"/img/df24mbralogo.77d34afd.png",revision:null},{url:"/img/gdsc-kab.1a464651.png",revision:null},{url:"/img/gdsc-kiu.4f2b2fef.png",revision:null},{url:"/img/gdsc-must.3cf86ced.png",revision:null},{url:"/img/google-final.2e5f0bab.png",revision:null},{url:"/img/kreativecampus-final.b3f14c74.png",revision:null},{url:"/img/tiv-final.cafaed0b.png",revision:null},{url:"/img/wesley-kambale.7aadc883.jpg",revision:null},{url:"/img/wtm-mbra.08d69e47.png",revision:null},{url:"/index.html",revision:"66ded13ae89c256a870f4900f320efcd"},{url:"/js/169.96264feb.js",revision:null},{url:"/js/app.adb8eaf2.js",revision:null},{url:"/js/badge.8f5d6a8b.js",revision:null},{url:"/js/chunk-vendors.c4bd9f27.js",revision:null},{url:"/js/coc.71fc6e05.js",revision:null},{url:"/js/faq.b9daa9d3.js",revision:null},{url:"/js/schedule.81b31b0f.js",revision:null},{url:"/js/speakers.d6b12f9e.js",revision:null},{url:"/manifest.json",revision:"b07411111620a0116309532af13db95a"}],{})}));
