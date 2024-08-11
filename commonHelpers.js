import{S as a}from"./assets/vendor-10cb7c31.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const c=[{preview:"https://raw.githubusercontent.com/versroot/somerferie2/main/src/img/gdansk1.jpg",original:"https://raw.githubusercontent.com/versroot/somerferie2/main/src/img/gdansk1.jpg",description:"Gdansk--Polen"},{preview:"https://raw.githubusercontent.com/versroot/somerferie2/main/src/img/turkey1.jpg",original:"https://raw.githubusercontent.com/versroot/somerferie2/main/src/img/turkey1.jpg",description:"Alania--Tyrkiet"},{preview:"https://raw.githubusercontent.com/versroot/somerferie2/main/src/img/aarhus1.jpg",original:"https://raw.githubusercontent.com/versroot/somerferie2/main/src/img/aarhus1.jpg",description:"Aarhus--Denmark"}],l=c.map(t=>`<li class="gallery-item">
  <a class="gallery-link" href=${t.original}> 
    <img
      class="gallery-image"
      src=${t.preview}

      alt=${t.description}
    />
  </a>
</li>`).join(""),u=document.querySelector(".gallery");u.insertAdjacentHTML("beforeend",l);let m=new a(".gallery a",{captionsData:"alt",captionDelay:250});m.on("show.simplelightbox",function(){});
//# sourceMappingURL=commonHelpers.js.map
