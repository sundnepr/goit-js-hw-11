var f=Object.defineProperty;var g=(t,e,r)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var c=(t,e,r)=>(g(t,typeof e!="symbol"?e+"":e,r),r),y=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var l=(t,e,r)=>(y(t,e,"read from private field"),r?r.call(t):e.get(t)),m=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)};import{i as h}from"./assets/vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const L={};var n;class p{constructor(){c(this,"query","");m(this,n,10);c(this,"page",1);c(this,"total_pages",1)}getArticles(){new URLSearchParams({q:this.query,page_size:l(this,n),page:this.page});const e="https://pixabay.com/api/?key=44530588-77e4763ebb7280f93ce94dd82&q=yellow+flowers&image_type=photo";return console.log(e),fetch(e,L).then(r=>r.json())}get pageSize(){return l(this,n)}}n=new WeakMap;const u={formElem:document.querySelector(".js-search-form"),articleListElem:document.querySelector(".js-article-list"),btnLoadMore:document.querySelector(".js-btn-load"),loadElem:document.querySelector(".js-loader")},a=new p;u.formElem.addEventListener("submit",b);async function b(t){console.log("submit ok"),t.preventDefault();const e=t.target.elements.query.value.trim();a.page=1,a.query=e;try{const r=await a.getArticles();console.log(r),a.totalResult=r.totalResults,S(r.hits)}catch(r){a.totalResult=0,h.error({title:"Error",message:r.message})}w()}function q(t){const{userImageURL:e,likes:r}=t;return`<li class="card news-card">
  <img loading="lazy"
    class="news-image"
    src="${e}"
    alt=""
  />
  <h3 class="card-title">
    ${r}
  </h3>
  // <p class="card-desc">
  // ${r}
  // </p>
  // <div class="card-footer">
  //   <span>${r}</span>
  //   <span>${r}</span>
  // </div>
</li>
`}function P(t){return t.map(q).join("")}function S(t){const e=P(t);u.articleListElem.insertAdjacentHTML("beforeend",e)}function w(){console.log(a.totalResult),console.log(a.page),Math.ceil(a.totalResult/p.PAGE_SIZE)<=a.page&&u.btnLoadMore.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
