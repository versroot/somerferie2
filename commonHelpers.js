import{S as l}from"./assets/vendor-10cb7c31.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const a=[{preview:"../img/gdansk1.jpg",original:"../img/gdansk1.jpg",description:"Gdansk--Polen"},{preview:"../img/turkey1.jpg",original:"../img/turkey1.jpg",description:"Alania--Tyrkiet"},{preview:"../img/aarhus1.jpg",original:"../img/aarhus1.jpg",description:"Aarhus--Denmark"}],c=a.map(t=>`<li class="gallery-item">
  <a class="gallery-link" href=${t.original}> 
    <img
      class="gallery-image"
      src=${t.preview}

      alt=${t.description}
    />
  </a>
</li>`).join(""),g=document.querySelector(".gallery");g.insertAdjacentHTML("beforeend",c);let p=new l(".gallery a",{captionsData:"alt",captionDelay:250});p.on("show.simplelightbox",function(){});
//# sourceMappingURL=commonHelpers.js.map
