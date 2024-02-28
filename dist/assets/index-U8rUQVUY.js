(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const a=document.getElementById("main");function c(i){var s=new XMLHttpRequest;s.onreadystatechange=function(){if(this.readyState===4&&this.status===200){let o=JSON.parse(this.response);console.log(o);const t=document.createElement("section");t.setAttribute("class","bg-blue-100"),t.classList.add("rounded","mx-auto"),t.innerHTML=`<div class="p-5 rounded bg-cyan-50 space-y-3  text-center">
        <div><img src=${o.avatar_url} class="w-48 rounded-lg"></div>

      <div class="font-serif">${o.name}</div>

      <div class="font-serif">Followers : ${o.followers}</div>

      <div class="font-serif">Following : ${o.following}</div>

      <div class="font-serif">Total No Of Repos : ${o.public_repos}</div>
      
      <button
  class="bg-blue-500 hover:bg-blue-600 hover:text-gray-100 p-3 rounded-md text-white font-semibold "
>
  <a href= "https://github.com/${o.login}?tab=repositories" target="_blank">Gitup Link</a>
</button>
     
      
      </div>`,a.append(t)}},s.open("GET",`https://api.github.com/users/${i}`),s.send()}const l=["esakki2104prsnl","vk2401","suriyamassmsd","riyaz1000","hema-venkat3","yrd369","mushkir","bearcin46","dineshdevelope","jeya-rosini","swethadsalvatore","mshajid","muthuakalya","vedhatech002","danielace1","sharif-22","gayathrihg","kishorekumar-kp","muthukumarimoorthi"];l.forEach(i=>{c(i)});
