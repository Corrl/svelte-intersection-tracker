import{I as E,S as x,i as L,s as P,e as b,t as q,k as S,c as v,a as g,h as A,d as f,m as w,b as h,J as j,g as y,K as d,L as C,M as I,N,O,q as z,o as B,P as J,Q as K}from"../chunks/index-6acf43bd.js";import{b as p}from"../chunks/paths-396f020f.js";const M=()=>{const t=E("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session,updated:t.updated}},Q={subscribe(t){return M().page.subscribe(t)}};function $(t,s,a){const i=t.slice();return i[4]=s[a][0],i[5]=s[a][1],i}function k(t){let s,a,i=t[5]+"",c,u,l;return{c(){s=b("li"),a=b("a"),c=q(i),l=S(),this.h()},l(o){s=v(o,"LI",{class:!0});var n=g(s);a=v(n,"A",{href:!0,class:!0});var e=g(a);c=A(e,i),e.forEach(f),l=w(n),n.forEach(f),this.h()},h(){h(a,"href",u=""+(p+t[4])),h(a,"class","svelte-jvmybm"),j(a,"open",`${p}${t[0].url.pathname}`===t[4]),h(s,"class","svelte-jvmybm")},m(o,n){y(o,s,n),d(s,a),d(a,c),d(s,l)},p(o,n){n&3&&j(a,"open",`${p}${o[0].url.pathname}`===o[4])},d(o){o&&f(s)}}}function U(t){let s,a,i,c,u=t[1],l=[];for(let e=0;e<u.length;e+=1)l[e]=k($(t,u,e));const o=t[3].default,n=C(o,t,t[2],null);return{c(){s=b("nav"),a=b("ul");for(let e=0;e<l.length;e+=1)l[e].c();i=S(),n&&n.c(),this.h()},l(e){s=v(e,"NAV",{class:!0});var m=g(s);a=v(m,"UL",{class:!0});var r=g(a);for(let _=0;_<l.length;_+=1)l[_].l(r);r.forEach(f),m.forEach(f),i=w(e),n&&n.l(e),this.h()},h(){h(a,"class","svelte-jvmybm"),h(s,"class","svelte-jvmybm")},m(e,m){y(e,s,m),d(s,a);for(let r=0;r<l.length;r+=1)l[r].m(a,null);y(e,i,m),n&&n.m(e,m),c=!0},p(e,[m]){if(m&3){u=e[1];let r;for(r=0;r<u.length;r+=1){const _=$(e,u,r);l[r]?l[r].p(_,m):(l[r]=k(_),l[r].c(),l[r].m(a,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=u.length}n&&n.p&&(!c||m&4)&&I(n,o,e,e[2],c?O(o,e[2],m,null):N(e[2]),null)},i(e){c||(z(n,e),c=!0)},o(e){B(n,e),c=!1},d(e){e&&f(s),J(l,e),e&&f(i),n&&n.d(e)}}}function V(t,s,a){let i;K(t,Q,o=>a(0,i=o));let{$$slots:c={},$$scope:u}=s;const l=[["/","Basic"],["/percentage1/","Percentage 1"],["/percentage2/","Percentage 2"],["/subsections/","SubSections"]];return t.$$set=o=>{"$$scope"in o&&a(2,u=o.$$scope)},[i,l,u,c]}class G extends x{constructor(s){super(),L(this,s,V,U,P,{})}}export{G as default};
