var p=Object.defineProperty;var g=(e,t,s)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var a=(e,t,s)=>(g(e,typeof t!="symbol"?t+"":t,s),s),h=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var d=(e,t,s)=>(h(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)};import{i as y}from"./assets/vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const L="https://pixabay.com/",v="api/",E="44530588-77e4763ebb7280f93ce94dd82",b={};var c;class f{constructor(){a(this,"query","");m(this,c,10);a(this,"page",1);a(this,"total_pages",1)}getArticles(){const t=new URLSearchParams({key:E,q:this.query,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${L}${v}?${t}`;return console.log(s),fetch(s,b).then(n=>n.json())}get pageSize(){return d(this,c)}}c=new WeakMap;const l={formElem:document.querySelector(".js-search-form"),articleListElem:document.querySelector(".js-article-list"),btnLoadMore:document.querySelector(".js-btn-load"),loadElem:document.querySelector(".js-loader")},i=new f;l.formElem.addEventListener("submit",P);async function P(e){e.preventDefault();const t=e.target.elements.query.value.trim();i.page=1,i.query=t,l.articleListElem.innerHTML="";try{const s=await i.getArticles();console.log(s),i.totalResult=s.totalResults,q(s.hits)}catch(s){i.totalResult=0,y.error({title:"Error1",message:s.message})}A()}function S(e){return console.log(e),`<li class="image-list-el">
  <img loading="lazy"
    class="news-image"
    src="${e.webformatURL}"
    alt="${e.tags}"
  />
 
  <div class="card-footer">
    <div class="item"><h3>Likes</h3><p>${e.likes}</p></div>
    <div class="item"><h3>Views</h3><p>${e.views}</p></div>
    <div class="item"><h3>Comments</h3><p>${e.comments}</p></div>
    <div class="item"><h3>Downloads</h3><p>${e.downloads}</p></div>
 </div>
</li>
`}function w(e){return e.map(S).join("")}function q(e){const t=w(e);l.articleListElem.insertAdjacentHTML("beforeend",t)}function A(){console.log(i.totalResult),console.log(i.page),Math.ceil(i.totalResult/f.PAGE_SIZE)<=i.page&&l.btnLoadMore.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
