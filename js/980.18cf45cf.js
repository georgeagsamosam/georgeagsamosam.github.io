"use strict";(self["webpackChunkgeorgeagsamosam_github_io"]=self["webpackChunkgeorgeagsamosam_github_io"]||[]).push([[980],{5980:(e,t,n)=>{n.d(t,{c:()=>y});var o=n(6587),i=n(6645);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let a;const r=e=>(e.forEach((e=>{for(const t in e)if(e.hasOwnProperty(t)){const n=e[t];if("easing"===t){const o="animation-timing-function";e[o]=n,delete e[t]}else{const o=s(t);o!==t&&(e[o]=n,delete e[t])}}})),e),s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=e=>{if(void 0===a){const t=void 0!==e.style.animationName,n=void 0!==e.style.webkitAnimationName;a=!t&&n?"-webkit-":""}return a},f=(e,t,n)=>{const o=t.startsWith("animation")?l(e):"";e.style.setProperty(o+t,n)},c=(e,t)=>{const n=t.startsWith("animation")?l(e):"";e.style.removeProperty(n+t)},d=(e,t)=>{let n;const o={passive:!0},i=()=>{n&&n()},a=n=>{e===n.target&&(i(),t(n))};return e&&(e.addEventListener("webkitAnimationEnd",a,o),e.addEventListener("animationend",a,o),n=()=>{e.removeEventListener("webkitAnimationEnd",a,o),e.removeEventListener("animationend",a,o)}),i},m=(e=[])=>e.map((e=>{const t=e.offset,n=[];for(const o in e)e.hasOwnProperty(o)&&"offset"!==o&&n.push(`${o}: ${e[o]};`);return`${100*t}% { ${n.join(" ")} }`})).join(" "),h=[],u=e=>{let t=h.indexOf(e);return t<0&&(t=h.push(e)-1),`ion-animation-${t}`},g=e=>{const t=void 0!==e.getRootNode?e.getRootNode():e;return t.head||t},p=(e,t,n)=>{var o;const i=g(n),a=l(n),r=i.querySelector("#"+e);if(r)return r;const s=(null!==(o=n.ownerDocument)&&void 0!==o?o:document).createElement("style");return s.id=e,s.textContent=`@${a}keyframes ${e} { ${t} } @${a}keyframes ${e}-alt { ${t} }`,i.appendChild(s),s},v=(e=[],t)=>{if(void 0!==t){const n=Array.isArray(t)?t:[t];return[...e,...n]}return e},y=e=>{let t,n,a,s,l,h,g,y,E,$,b,A,C,w=[],k=[],T=[],S=!1,D={},L=[],P=[],R={},F=0,N=!1,O=!1,W=!0,K=!1,_=!0,x=!1;const I=e,j=[],M=[],q=[],z=[],Z=[],B=[],G=[],H=[],J=[],Q=[],U="function"===typeof AnimationEffect||void 0!==i.w&&"function"===typeof i.w.AnimationEffect,V="function"===typeof Element&&"function"===typeof Element.prototype.animate&&U,X=100,Y=()=>Q,ee=e=>(z.forEach((t=>{t.destroy(e)})),te(e),q.length=0,z.length=0,w.length=0,ae(),S=!1,_=!0,C),te=e=>{re(),e&&se()},ne=()=>{N=!1,O=!1,_=!0,E=void 0,$=void 0,b=void 0,F=0,K=!1,W=!0,x=!1},oe=()=>0!==F&&!x,ie=(e,t)=>{const n=(null===t||void 0===t?void 0:t.oneTimeCallback)?M:j;return n.push({c:e,o:t}),C},ae=()=>(j.length=0,M.length=0,C),re=()=>{if(V)Q.forEach((e=>{e.cancel()})),Q.length=0;else{const e=q.slice();(0,o.r)((()=>{e.forEach((e=>{c(e,"animation-name"),c(e,"animation-duration"),c(e,"animation-timing-function"),c(e,"animation-iteration-count"),c(e,"animation-delay"),c(e,"animation-play-state"),c(e,"animation-fill-mode"),c(e,"animation-direction")}))}))}},se=()=>{Z.forEach((e=>{(null===e||void 0===e?void 0:e.parentNode)&&e.parentNode.removeChild(e)})),Z.length=0},le=e=>(B.push(e),C),fe=e=>(G.push(e),C),ce=e=>(H.push(e),C),de=e=>(J.push(e),C),me=e=>(k=v(k,e),C),he=e=>(T=v(T,e),C),ue=(e={})=>(D=e,C),ge=(e=[])=>{for(const t of e)D[t]="";return C},pe=e=>(L=v(L,e),C),ve=e=>(P=v(P,e),C),ye=(e={})=>(R=e,C),Ee=(e=[])=>{for(const t of e)R[t]="";return C},$e=()=>void 0!==l?l:g?g.getFill():"both",be=()=>void 0!==E?E:void 0!==h?h:g?g.getDirection():"normal",Ae=()=>N?"linear":void 0!==a?a:g?g.getEasing():"linear",Ce=()=>O?0:void 0!==$?$:void 0!==n?n:g?g.getDuration():0,we=()=>void 0!==s?s:g?g.getIterations():1,ke=()=>void 0!==b?b:void 0!==t?t:g?g.getDelay():0,Te=()=>w,Se=e=>(h=e,He(!0),C),De=e=>(l=e,He(!0),C),Le=e=>(t=e,He(!0),C),Pe=e=>(a=e,He(!0),C),Re=e=>(V||0!==e||(e=1),n=e,He(!0),C),Fe=e=>(s=e,He(!0),C),Ne=e=>(g=e,C),Oe=e=>{if(null!=e)if(1===e.nodeType)q.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)q.push(e[t]);else console.error("Invalid addElement value");return C},We=e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent(C),z.push(t);else e.parent(C),z.push(e);return C},Ke=e=>{const t=w!==e;return w=e,t&&_e(w),C},_e=e=>{V?Y().forEach((t=>{if(t.effect.setKeyframes)t.effect.setKeyframes(e);else{const n=new KeyframeEffect(t.effect.target,e,t.effect.getTiming());t.effect=n}})):Me()},xe=()=>{B.forEach((e=>e())),G.forEach((e=>e()));const e=k,t=T,n=D;q.forEach((o=>{const i=o.classList;e.forEach((e=>i.add(e))),t.forEach((e=>i.remove(e)));for(const e in n)n.hasOwnProperty(e)&&f(o,e,n[e])}))},Ie=()=>{et(),H.forEach((e=>e())),J.forEach((e=>e()));const e=W?1:0,t=L,n=P,o=R;q.forEach((e=>{const i=e.classList;t.forEach((e=>i.add(e))),n.forEach((e=>i.remove(e)));for(const t in o)o.hasOwnProperty(t)&&f(e,t,o[t])})),j.forEach((t=>t.c(e,C))),M.forEach((t=>t.c(e,C))),M.length=0,_=!0,W&&(K=!0),W=!0},je=()=>{0!==F&&(F--,0===F&&(Ie(),g&&g.animationFinish()))},Me=(t=!0)=>{se();const n=r(w);q.forEach((i=>{if(n.length>0){const a=m(n);A=void 0!==e?e:u(a);const r=p(A,a,i);Z.push(r),f(i,"animation-duration",`${Ce()}ms`),f(i,"animation-timing-function",Ae()),f(i,"animation-delay",`${ke()}ms`),f(i,"animation-fill-mode",$e()),f(i,"animation-direction",be());const s=we()===1/0?"infinite":we().toString();f(i,"animation-iteration-count",s),f(i,"animation-play-state","paused"),t&&f(i,"animation-name",`${r.id}-alt`),(0,o.r)((()=>{f(i,"animation-name",r.id||null)}))}}))},qe=()=>{q.forEach((e=>{const t=e.animate(w,{id:I,delay:ke(),duration:Ce(),easing:Ae(),iterations:we(),fill:$e(),direction:be()});t.pause(),Q.push(t)})),Q.length>0&&(Q[0].onfinish=()=>{je()})},ze=(e=!0)=>{xe(),w.length>0&&(V?qe():Me(e)),S=!0},Ze=e=>{if(e=Math.min(Math.max(e,0),.9999),V)Q.forEach((t=>{t.currentTime=t.effect.getComputedTiming().delay+Ce()*e,t.pause()}));else{const t=`-${Ce()*e}ms`;q.forEach((e=>{w.length>0&&(f(e,"animation-delay",t),f(e,"animation-play-state","paused"))}))}},Be=e=>{Q.forEach((e=>{e.effect.updateTiming({delay:ke(),duration:Ce(),easing:Ae(),iterations:we(),fill:$e(),direction:be()})})),void 0!==e&&Ze(e)},Ge=(e=!0,t)=>{(0,o.r)((()=>{q.forEach((n=>{f(n,"animation-name",A||null),f(n,"animation-duration",`${Ce()}ms`),f(n,"animation-timing-function",Ae()),f(n,"animation-delay",void 0!==t?`-${t*Ce()}ms`:`${ke()}ms`),f(n,"animation-fill-mode",$e()||null),f(n,"animation-direction",be()||null);const i=we()===1/0?"infinite":we().toString();f(n,"animation-iteration-count",i),e&&f(n,"animation-name",`${A}-alt`),(0,o.r)((()=>{f(n,"animation-name",A||null)}))}))}))},He=(e=!1,t=!0,n)=>(e&&z.forEach((o=>{o.update(e,t,n)})),V?Be(n):Ge(t,n),C),Je=(e=!1,t)=>(z.forEach((n=>{n.progressStart(e,t)})),Ve(),N=e,S||ze(),He(!1,!0,t),C),Qe=e=>(z.forEach((t=>{t.progressStep(e)})),Ze(e),C),Ue=(e,t,n)=>(N=!1,z.forEach((o=>{o.progressEnd(e,t,n)})),void 0!==n&&($=n),K=!1,W=!0,0===e?(E="reverse"===be()?"normal":"reverse","reverse"===E&&(W=!1),V?(He(),Ze(1-t)):(b=(1-t)*Ce()*-1,He(!1,!1))):1===e&&(V?(He(),Ze(t)):(b=t*Ce()*-1,He(!1,!1))),void 0!==e&&(ie((()=>{$=void 0,E=void 0,b=void 0}),{oneTimeCallback:!0}),g||at()),C),Ve=()=>{S&&(V?Q.forEach((e=>{e.pause()})):q.forEach((e=>{f(e,"animation-play-state","paused")})),x=!0)},Xe=()=>(z.forEach((e=>{e.pause()})),Ve(),C),Ye=()=>{y=void 0,je()},et=()=>{y&&clearTimeout(y)},tt=()=>{if(et(),(0,o.r)((()=>{q.forEach((e=>{w.length>0&&f(e,"animation-play-state","running")}))})),0===w.length||0===q.length)je();else{const e=ke()||0,t=Ce()||0,n=we()||1;isFinite(n)&&(y=setTimeout(Ye,e+t*n+X)),d(q[0],(()=>{et(),(0,o.r)((()=>{nt(),(0,o.r)(je)}))}))}},nt=()=>{q.forEach((e=>{c(e,"animation-duration"),c(e,"animation-delay"),c(e,"animation-play-state")}))},ot=()=>{Q.forEach((e=>{e.play()})),0!==w.length&&0!==q.length||je()},it=()=>{V?(Ze(0),Be()):Ge()},at=e=>new Promise((t=>{(null===e||void 0===e?void 0:e.sync)&&(O=!0,ie((()=>O=!1),{oneTimeCallback:!0})),S||ze(),K&&(it(),K=!1),_&&(F=z.length+1,_=!1),ie((()=>t()),{oneTimeCallback:!0}),z.forEach((e=>{e.play()})),V?ot():tt(),x=!1})),rt=()=>{z.forEach((e=>{e.stop()})),S&&(re(),S=!1),ne()},st=(e,t)=>{const n=w[0];return void 0===n||void 0!==n.offset&&0!==n.offset?w=[{offset:0,[e]:t},...w]:n[e]=t,C},lt=(e,t)=>{const n=w[w.length-1];return void 0===n||void 0!==n.offset&&1!==n.offset?w=[...w,{offset:1,[e]:t}]:n[e]=t,C},ft=(e,t,n)=>st(e,t).to(e,n);return C={parentAnimation:g,elements:q,childAnimations:z,id:I,animationFinish:je,from:st,to:lt,fromTo:ft,parent:Ne,play:at,pause:Xe,stop:rt,destroy:ee,keyframes:Ke,addAnimation:We,addElement:Oe,update:He,fill:De,direction:Se,iterations:Fe,duration:Re,easing:Pe,delay:Le,getWebAnimations:Y,getKeyframes:Te,getFill:$e,getDirection:be,getDelay:ke,getIterations:we,getEasing:Ae,getDuration:Ce,afterAddRead:ce,afterAddWrite:de,afterClearStyles:Ee,afterStyles:ye,afterRemoveClass:ve,afterAddClass:pe,beforeAddRead:le,beforeAddWrite:fe,beforeClearStyles:ge,beforeStyles:ue,beforeRemoveClass:he,beforeAddClass:me,onFinish:ie,isRunning:oe,progressStart:Je,progressStep:Qe,progressEnd:Ue}}}}]);
//# sourceMappingURL=980.18cf45cf.js.map