"use strict";(self["webpackChunkgeorgeagsamosam_github_io"]=self["webpackChunkgeorgeagsamosam_github_io"]||[]).push([[541],{3541:(e,t,i)=>{i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>o,copyVisualViewport:()=>k,keyboardDidClose:()=>f,keyboardDidOpen:()=>u,keyboardDidResize:()=>w,resetKeyboardAssist:()=>n,setKeyboardClose:()=>c,setKeyboardOpen:()=>b,startKeyboardAssist:()=>g,trackViewportChanges:()=>D});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o="ionKeyboardDidShow",s="ionKeyboardDidHide",a=150;let d={},r={},h=!1;const n=()=>{d={},r={},h=!1},g=e=>{p(e),e.visualViewport&&(r=k(e.visualViewport),e.visualViewport.onresize=()=>{D(e),u()||w(e)?b(e):f(e)&&c(e)})},p=e=>{e.addEventListener("keyboardDidShow",(t=>b(e,t))),e.addEventListener("keyboardDidHide",(()=>c(e)))},b=(e,t)=>{l(e,t),h=!0},c=e=>{y(e),h=!1},u=()=>{const e=(d.height-r.height)*r.scale;return!h&&d.width===r.width&&e>a},w=e=>h&&!f(e),f=e=>h&&r.height===e.innerHeight,l=(e,t)=>{const i=t?t.keyboardHeight:e.innerHeight-r.height,s=new CustomEvent(o,{detail:{keyboardHeight:i}});e.dispatchEvent(s)},y=e=>{const t=new CustomEvent(s);e.dispatchEvent(t)},D=e=>{d=Object.assign({},r),r=k(e.visualViewport)},k=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);
//# sourceMappingURL=541.eafc4136.js.map