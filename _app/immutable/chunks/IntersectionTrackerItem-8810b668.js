import{S as A,i as V,s as D,N as F,O as K,P as L,Q as N,q as Q,o as U,F as q,r as Z,v as $,U as B,E as v,I as X,T as S,e as ee,c as te,a as ne,d as G,b as C,g as se,V as re}from"./index-a7a7ee42.js";import{d as oe,w as x}from"./index-404e988e.js";const z=Symbol("contextKey");function ie(e){let s;const n=e[6].default,r=F(n,e,e[5],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,i){r&&r.m(t,i),s=!0},p(t,[i]){r&&r.p&&(!s||i&32)&&K(r,n,t,t[5],s?N(n,t[5],i,null):L(t[5]),null)},i(t){s||(Q(r,t),s=!0)},o(t){U(r,t),s=!1},d(t){r&&r.d(t)}}}function H(e){return Math.ceil(e*100)/100}function ce(e,s,n){let r,t=v,i=()=>(t(),t=q(c,o=>n(7,r=o)),c),u,d=v,E=()=>(d(),d=q(f,o=>n(8,u=o)),f),_,P=v,I=()=>(P(),P=q(p,o=>n(9,_=o)),p);e.$$.on_destroy.push(()=>t()),e.$$.on_destroy.push(()=>d()),e.$$.on_destroy.push(()=>P());let{$$slots:O={},$$scope:k}=s;const p=x(null);I();const f=x({});E();const c=x({});i();const m=oe(c,o=>{const a=Object.entries(o).map(([w,y])=>{const b=Object.values(y);if(b.length>0&&b.some(h=>h!==0)){const h=Math.max(...b),j=Object.entries(y).reduce((R,l)=>{const[T,Y]=l;return Y===h&&R.push(T),R},[]);return[w,j]}else return[w,[]]});return Object.fromEntries(a)});Z(z,{observer:p,intersecting:f,percentages:c,maxPercentageIds:m});let{options:g={}}=s;$(()=>{var h,j,R;if(!("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype))return;const a=(h=g.fineness)!=null?h:100,w={root:y(g.root),rootMargin:(j=g.rootMargin)!=null?j:"0px",threshold:(R=g.threshold)!=null?R:Array.from({length:a},(l,T)=>T/a).concat(1)};function y(l){return l instanceof Element&&l||typeof l=="string"&&document.getElementById(l)||null}B(p,_=new IntersectionObserver(M,w),_);const b=new Set([...document.querySelectorAll("[data-group]")].map(l=>l.dataset.group));for(let l of b)B(f,u[l]={},u),B(c,r[l]={},r);return()=>_.disconnect()});function M(o){o.forEach(a=>{var R,l;const w=a.target,y=w.id,b=w.dataset.group;B(f,u[b][y]=a.isIntersecting,u);const h=a.intersectionRatio;a.intersectionRect||console.error("entry.intersectionRect not available - running sandboxed?"),a.rootBounds||console.error("entry.rootBounds not available - running sandboxed?");const j=((R=a.intersectionRect)==null?void 0:R.height)/((l=a.rootBounds)==null?void 0:l.height);B(c,r[b][y]=Math.max(H(h),H(j)),r)})}return e.$$set=o=>{"options"in o&&n(4,g=o.options),"$$scope"in o&&n(5,k=o.$$scope)},[p,f,c,m,g,k,O]}class me extends A{constructor(s){super(),V(this,s,ce,ie,D,{observer:0,intersecting:1,percentages:2,maxPercentageIds:3,options:4})}get observer(){return this.$$.ctx[0]}get intersecting(){return this.$$.ctx[1]}get percentages(){return this.$$.ctx[2]}get maxPercentageIds(){return this.$$.ctx[3]}}const ue=e=>({percentage:e&2,current:e&1,isIntersecting:e&4}),J=e=>({percentage:e[1],current:e[0],isIntersecting:e[2]});function ae(e){let s;const n=e[12].default,r=F(n,e,e[11],J);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,i){r&&r.m(t,i),s=!0},p(t,[i]){r&&r.p&&(!s||i&2055)&&K(r,n,t,t[11],s?N(n,t[11],i,ue):L(t[11]),J)},i(t){s||(Q(r,t),s=!0)},o(t){U(r,t),s=!1},d(t){r&&r.d(t)}}}function le(e,s,n){let r,t,i,u,d,E,{$$slots:_={},$$scope:P}=s,{group:I=0}=s,{id:O}=s;const{intersecting:k,percentages:p,maxPercentageIds:f}=X(z);return S(e,k,c=>n(10,E=c)),S(e,p,c=>n(9,d=c)),S(e,f,c=>n(8,u=c)),e.$$set=c=>{"group"in c&&n(6,I=c.group),"id"in c&&n(7,O=c.id),"$$scope"in c&&n(11,P=c.$$scope)},e.$$.update=()=>{var c,m,g,M,o,a;e.$$.dirty&1216&&n(2,r=(m=(c=E[I])==null?void 0:c[O])!=null?m:!1),e.$$.dirty&704&&n(1,t=(M=(g=d[I])==null?void 0:g[O])!=null?M:0),e.$$.dirty&448&&n(0,i=(a=(o=u[I])==null?void 0:o.includes(O))!=null?a:!1)},[i,t,r,k,p,f,I,O,u,d,E,P,_]}class be extends A{constructor(s){super(),V(this,s,le,ae,D,{group:6,id:7})}}const ge=e=>({isIntersecting:e&32,percentage:e&16,current:e&8}),W=e=>({isIntersecting:e[5],percentage:e[4],current:e[3]});function fe(e){let s,n;const r=e[15].default,t=F(r,e,e[14],W);return{c(){s=ee("div"),t&&t.c(),this.h()},l(i){s=te(i,"DIV",{id:!0,"data-group":!0,class:!0});var u=ne(s);t&&t.l(u),u.forEach(G),this.h()},h(){C(s,"id",e[1]),C(s,"data-group",e[0]),C(s,"class","svelte-intersection-tracker-item")},m(i,u){se(i,s,u),t&&t.m(s,null),e[16](s),n=!0},p(i,[u]){t&&t.p&&(!n||u&16440)&&K(t,r,i,i[14],n?N(r,i[14],u,ge):L(i[14]),W),(!n||u&2)&&C(s,"id",i[1]),(!n||u&1)&&C(s,"data-group",i[0])},i(i){n||(Q(t,i),n=!0)},o(i){U(t,i),n=!1},d(i){i&&G(s),t&&t.d(i),e[16](null)}}}function de(e,s,n){let r,t,i,u,d,E,_,{$$slots:P={},$$scope:I}=s;const{observer:O,intersecting:k,percentages:p,maxPercentageIds:f}=X(z);S(e,O,o=>n(13,_=o)),S(e,k,o=>n(12,E=o)),S(e,p,o=>n(11,d=o)),S(e,f,o=>n(10,u=o));let{group:c=0}=s,{id:m}=s,g;function M(o){re[o?"unshift":"push"](()=>{g=o,n(2,g)})}return e.$$set=o=>{"group"in o&&n(0,c=o.group),"id"in o&&n(1,m=o.id),"$$scope"in o&&n(14,I=o.$$scope)},e.$$.update=()=>{var o,a,w,y,b,h;e.$$.dirty&8196&&_&&_.observe(g),e.$$.dirty&4099&&n(5,r=(a=(o=E[c])==null?void 0:o[m])!=null?a:!1),e.$$.dirty&2051&&n(4,t=(y=(w=d[c])==null?void 0:w[m])!=null?y:0),e.$$.dirty&1027&&n(3,i=(h=(b=u[c])==null?void 0:b.includes(m))!=null?h:!1)},[c,m,g,i,t,r,O,k,p,f,u,d,E,_,I,P,M]}class he extends A{constructor(s){super(),V(this,s,de,fe,D,{group:0,id:1})}}export{me as I,be as a,he as b};
