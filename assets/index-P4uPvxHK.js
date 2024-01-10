(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const a=document.getElementById("main");function c(o){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(this.readyState===4&&this.status===200){let s=JSON.parse(this.response);console.log(s);const i=document.createElement("section");i.setAttribute("class","bg-blue-100"),i.classList.add("rounded","mx-auto"),i.innerHTML=`<div>
        <div><img src=${s.avatar_url} class="w-48 rounded-lg"></div>

      <div class="font-serif">${s.name}</div>

      <div class="font-serif">Followers : ${s.followers}</div>

      <div class="font-serif">Following : ${s.following}</div>

      
      </div>`,a.append(i)}},r.open("GET",`https://api.github.com/users/${o}`),r.send()}const l=["esakki2104prsnl","vk2401","suriyamassmsd","riyaz1000","hema-venkat3","yrd369","mushkir","bearcin46","dineshdevelope","jeya-rosini","swethadsalvatore","mshajid","muthuakalya","vedhatech002","danielace1","sharif-22","gayathrihg","kishorekumar-kp","muthukumarimoorthi"];l.forEach(o=>{c(o)});
