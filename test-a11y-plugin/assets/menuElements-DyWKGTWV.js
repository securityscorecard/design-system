import{j as ee}from"./jsx-runtime-Nms4Y4qS.js";import{_ as x}from"./extends-CF3RwP-h.js";import{R as T,r}from"./index-BwDkhjyp.js";import{$ as le,g as U,n as Se,o as ue,d as z,b as Xe,e as M,c as we,p as He,f as Qe,q as yt,r as St,s as wt,t as Mt,u as xt,v as It,w as Rt}from"./DSProvider-BQ8JssCJ.js";import{c as L,d as Ze,e as _t}from"./tslib.es6-BLYux4pC.js";import{q as Te}from"./styled-components.browser.esm-Dp0SDG1F.js";import{b as Tt,z as Pt}from"./index-BQWFrAEB.js";import"./index-CA8igt89.js";import"./index-0COcc321.js";import{T as Dt}from"./index-B9rA5P-U.js";import{P as Ft}from"./Padbox-DzmU9-lr.js";import{I as Ot}from"./Inline.enums-6YASdLRa.js";import{I as kt}from"./Icon-OPJ4_-kw.js";function Je(e){const t=e+"CollectionProvider",[n,o]=le(t),[a,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),u=$=>{const{scope:f,children:i}=$,v=T.useRef(null),p=T.useRef(new Map).current;return T.createElement(a,{scope:f,itemMap:p,collectionRef:v},i)},c=e+"CollectionSlot",A=T.forwardRef(($,f)=>{const{scope:i,children:v}=$,p=s(c,i),h=U(f,p.collectionRef);return T.createElement(Se,{ref:h},v)}),d=e+"CollectionItemSlot",b="data-radix-collection-item",l=T.forwardRef(($,f)=>{const{scope:i,children:v,...p}=$,h=T.useRef(null),y=U(f,h),C=s(d,i);return T.useEffect(()=>(C.itemMap.set(h,{ref:h,...p}),()=>void C.itemMap.delete(h))),T.createElement(Se,{[b]:"",ref:y},v)});function m($){const f=s(e+"CollectionConsumer",$);return T.useCallback(()=>{const v=f.collectionRef.current;if(!v)return[];const p=Array.from(v.querySelectorAll(`[${b}]`));return Array.from(f.itemMap.values()).sort((C,w)=>p.indexOf(C.ref.current)-p.indexOf(w.ref.current))},[f.collectionRef,f.itemMap])}return[{Provider:u,Slot:A,ItemSlot:l},m,o]}const Nt=r.createContext(void 0);function et(e){const t=r.useContext(Nt);return e||t||"ltr"}let ve=0;function Lt(){r.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:Le()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:Le()),ve++,()=>{ve===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(o=>o.remove()),ve--}},[])}function Le(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const be="focusScope.autoFocusOnMount",$e="focusScope.autoFocusOnUnmount",Be={bubbles:!1,cancelable:!0},Bt=r.forwardRef((e,t)=>{const{loop:n=!1,trapped:o=!1,onMountAutoFocus:a,onUnmountAutoFocus:s,...u}=e,[c,A]=r.useState(null),d=ue(a),b=ue(s),l=r.useRef(null),m=U(t,i=>A(i)),$=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;r.useEffect(()=>{if(o){let i=function(y){if($.paused||!c)return;const C=y.target;c.contains(C)?l.current=C:N(l.current,{select:!0})},v=function(y){if($.paused||!c)return;const C=y.relatedTarget;C!==null&&(c.contains(C)||N(l.current,{select:!0}))},p=function(y){if(document.activeElement===document.body)for(const w of y)w.removedNodes.length>0&&N(c)};document.addEventListener("focusin",i),document.addEventListener("focusout",v);const h=new MutationObserver(p);return c&&h.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",i),document.removeEventListener("focusout",v),h.disconnect()}}},[o,c,$.paused]),r.useEffect(()=>{if(c){Ke.add($);const i=document.activeElement;if(!c.contains(i)){const p=new CustomEvent(be,Be);c.addEventListener(be,d),c.dispatchEvent(p),p.defaultPrevented||(Ut(Vt(tt(c)),{select:!0}),document.activeElement===i&&N(c))}return()=>{c.removeEventListener(be,d),setTimeout(()=>{const p=new CustomEvent($e,Be);c.addEventListener($e,b),c.dispatchEvent(p),p.defaultPrevented||N(i??document.body,{select:!0}),c.removeEventListener($e,b),Ke.remove($)},0)}}},[c,d,b,$]);const f=r.useCallback(i=>{if(!n&&!o||$.paused)return;const v=i.key==="Tab"&&!i.altKey&&!i.ctrlKey&&!i.metaKey,p=document.activeElement;if(v&&p){const h=i.currentTarget,[y,C]=Kt(h);y&&C?!i.shiftKey&&p===C?(i.preventDefault(),n&&N(y,{select:!0})):i.shiftKey&&p===y&&(i.preventDefault(),n&&N(C,{select:!0})):p===h&&i.preventDefault()}},[n,o,$.paused]);return r.createElement(z.div,x({tabIndex:-1},u,{ref:m,onKeyDown:f}))});function Ut(e,{select:t=!1}={}){const n=document.activeElement;for(const o of e)if(N(o,{select:t}),document.activeElement!==n)return}function Kt(e){const t=tt(e),n=Ue(t,e),o=Ue(t.reverse(),e);return[n,o]}function tt(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const a=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||a?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Ue(e,t){for(const n of e)if(!Gt(n,{upTo:t}))return n}function Gt(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Wt(e){return e instanceof HTMLInputElement&&"select"in e}function N(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Wt(e)&&t&&e.select()}}const Ke=Yt();function Yt(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Ge(e,t),e.unshift(t)},remove(t){var n;e=Ge(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function Ge(e,t){const n=[...e],o=n.indexOf(t);return o!==-1&&n.splice(o,1),n}function Vt(e){return e.filter(t=>t.tagName!=="A")}const ge="rovingFocusGroup.onEntryFocus",qt={bubbles:!1,cancelable:!0},Pe="RovingFocusGroup",[Me,nt,jt]=Je(Pe),[zt,ot]=le(Pe,[jt]),[Xt,Ht]=zt(Pe),Qt=r.forwardRef((e,t)=>r.createElement(Me.Provider,{scope:e.__scopeRovingFocusGroup},r.createElement(Me.Slot,{scope:e.__scopeRovingFocusGroup},r.createElement(Zt,x({},e,{ref:t}))))),Zt=r.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:o,loop:a=!1,dir:s,currentTabStopId:u,defaultCurrentTabStopId:c,onCurrentTabStopIdChange:A,onEntryFocus:d,...b}=e,l=r.useRef(null),m=U(t,l),$=et(s),[f=null,i]=Xe({prop:u,defaultProp:c,onChange:A}),[v,p]=r.useState(!1),h=ue(d),y=nt(n),C=r.useRef(!1),[w,P]=r.useState(0);return r.useEffect(()=>{const S=l.current;if(S)return S.addEventListener(ge,h),()=>S.removeEventListener(ge,h)},[h]),r.createElement(Xt,{scope:n,orientation:o,dir:$,loop:a,currentTabStopId:f,onItemFocus:r.useCallback(S=>i(S),[i]),onItemShiftTab:r.useCallback(()=>p(!0),[]),onFocusableItemAdd:r.useCallback(()=>P(S=>S+1),[]),onFocusableItemRemove:r.useCallback(()=>P(S=>S-1),[])},r.createElement(z.div,x({tabIndex:v||w===0?-1:0,"data-orientation":o},b,{ref:m,style:{outline:"none",...e.style},onMouseDown:M(e.onMouseDown,()=>{C.current=!0}),onFocus:M(e.onFocus,S=>{const O=!C.current;if(S.target===S.currentTarget&&O&&!v){const _=new CustomEvent(ge,qt);if(S.currentTarget.dispatchEvent(_),!_.defaultPrevented){const k=y().filter(D=>D.focusable),me=k.find(D=>D.active),H=k.find(D=>D.id===f),Q=[me,H,...k].filter(Boolean).map(D=>D.ref.current);rt(Q)}}C.current=!1}),onBlur:M(e.onBlur,()=>p(!1))})))}),Jt="RovingFocusGroupItem",en=r.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:o=!0,active:a=!1,tabStopId:s,...u}=e,c=we(),A=s||c,d=Ht(Jt,n),b=d.currentTabStopId===A,l=nt(n),{onFocusableItemAdd:m,onFocusableItemRemove:$}=d;return r.useEffect(()=>{if(o)return m(),()=>$()},[o,m,$]),r.createElement(Me.ItemSlot,{scope:n,id:A,focusable:o,active:a},r.createElement(z.span,x({tabIndex:b?0:-1,"data-orientation":d.orientation},u,{ref:t,onMouseDown:M(e.onMouseDown,f=>{o?d.onItemFocus(A):f.preventDefault()}),onFocus:M(e.onFocus,()=>d.onItemFocus(A)),onKeyDown:M(e.onKeyDown,f=>{if(f.key==="Tab"&&f.shiftKey){d.onItemShiftTab();return}if(f.target!==f.currentTarget)return;const i=on(f,d.orientation,d.dir);if(i!==void 0){f.preventDefault();let p=l().filter(h=>h.focusable).map(h=>h.ref.current);if(i==="last")p.reverse();else if(i==="prev"||i==="next"){i==="prev"&&p.reverse();const h=p.indexOf(f.currentTarget);p=d.loop?rn(p,h+1):p.slice(h+1)}setTimeout(()=>rt(p))}})})))}),tn={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function nn(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function on(e,t,n){const o=nn(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return tn[o]}function rt(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function rn(e,t){return e.map((n,o)=>e[(t+o)%e.length])}const cn=Qt,an=en;var sn=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Y=new WeakMap,oe=new WeakMap,re={},he=0,ct=function(e){return e&&(e.host||ct(e.parentNode))},un=function(e,t){return t.map(function(n){if(e.contains(n))return n;var o=ct(n);return o&&e.contains(o)?o:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},ln=function(e,t,n,o){var a=un(t,Array.isArray(e)?e:[e]);re[n]||(re[n]=new WeakMap);var s=re[n],u=[],c=new Set,A=new Set(a),d=function(l){!l||c.has(l)||(c.add(l),d(l.parentNode))};a.forEach(d);var b=function(l){!l||A.has(l)||Array.prototype.forEach.call(l.children,function(m){if(c.has(m))b(m);else try{var $=m.getAttribute(o),f=$!==null&&$!=="false",i=(Y.get(m)||0)+1,v=(s.get(m)||0)+1;Y.set(m,i),s.set(m,v),u.push(m),i===1&&f&&oe.set(m,!0),v===1&&m.setAttribute(n,"true"),f||m.setAttribute(o,"true")}catch(p){console.error("aria-hidden: cannot operate on ",m,p)}})};return b(t),c.clear(),he++,function(){u.forEach(function(l){var m=Y.get(l)-1,$=s.get(l)-1;Y.set(l,m),s.set(l,$),m||(oe.has(l)||l.removeAttribute(o),oe.delete(l)),$||l.removeAttribute(n)}),he--,he||(Y=new WeakMap,Y=new WeakMap,oe=new WeakMap,re={})}},dn=function(e,t,n){n===void 0&&(n="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),a=sn(e);return a?(o.push.apply(o,Array.from(a.querySelectorAll("[aria-live]"))),ln(o,a,n,"aria-hidden")):function(){return null}},se="right-scroll-bar-position",ie="width-before-scroll-bar",fn="with-scroll-bars-hidden",mn="--removed-body-scroll-bar-size";function Ce(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function An(e,t){var n=r.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(o){var a=n.value;a!==o&&(n.value=o,n.callback(o,a))}}}})[0];return n.callback=t,n.facade}var pn=typeof window<"u"?r.useLayoutEffect:r.useEffect,We=new WeakMap;function vn(e,t){var n=An(null,function(o){return e.forEach(function(a){return Ce(a,o)})});return pn(function(){var o=We.get(n);if(o){var a=new Set(o),s=new Set(e),u=n.current;a.forEach(function(c){s.has(c)||Ce(c,null)}),s.forEach(function(c){a.has(c)||Ce(c,u)})}We.set(n,e)},[e]),n}function bn(e){return e}function $n(e,t){t===void 0&&(t=bn);var n=[],o=!1,a={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(s){var u=t(s,o);return n.push(u),function(){n=n.filter(function(c){return c!==u})}},assignSyncMedium:function(s){for(o=!0;n.length;){var u=n;n=[],u.forEach(s)}n={push:function(c){return s(c)},filter:function(){return n}}},assignMedium:function(s){o=!0;var u=[];if(n.length){var c=n;n=[],c.forEach(s),u=n}var A=function(){var b=u;u=[],b.forEach(s)},d=function(){return Promise.resolve().then(A)};d(),n={push:function(b){u.push(b),d()},filter:function(b){return u=u.filter(b),n}}}};return a}function gn(e){e===void 0&&(e={});var t=$n(null);return t.options=L({async:!0,ssr:!1},e),t}var at=function(e){var t=e.sideCar,n=Ze(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return r.createElement(o,L({},n))};at.isSideCarExport=!0;function hn(e,t){return e.useMedium(t),at}var st=gn(),Ee=function(){},de=r.forwardRef(function(e,t){var n=r.useRef(null),o=r.useState({onScrollCapture:Ee,onWheelCapture:Ee,onTouchMoveCapture:Ee}),a=o[0],s=o[1],u=e.forwardProps,c=e.children,A=e.className,d=e.removeScrollBar,b=e.enabled,l=e.shards,m=e.sideCar,$=e.noIsolation,f=e.inert,i=e.allowPinchZoom,v=e.as,p=v===void 0?"div":v,h=Ze(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),y=m,C=vn([n,t]),w=L(L({},h),a);return r.createElement(r.Fragment,null,b&&r.createElement(y,{sideCar:st,removeScrollBar:d,shards:l,noIsolation:$,inert:f,setCallbacks:s,allowPinchZoom:!!i,lockRef:n}),u?r.cloneElement(r.Children.only(c),L(L({},w),{ref:C})):r.createElement(p,L({},w,{className:A,ref:C}),c))});de.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};de.classNames={fullWidth:ie,zeroRight:se};var Cn=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function En(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Cn();return t&&e.setAttribute("nonce",t),e}function yn(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Sn(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var wn=function(){var e=0,t=null;return{add:function(n){e==0&&(t=En())&&(yn(t,n),Sn(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Mn=function(){var e=wn();return function(t,n){r.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},it=function(){var e=Mn(),t=function(n){var o=n.styles,a=n.dynamic;return e(o,a),null};return t},xn={left:0,top:0,right:0,gap:0},ye=function(e){return parseInt(e||"",10)||0},In=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[ye(n),ye(o),ye(a)]},Rn=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return xn;var t=In(e),n=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-n+t[2]-t[0])}},_n=it(),j="data-scroll-locked",Tn=function(e,t,n,o){var a=e.left,s=e.top,u=e.right,c=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(fn,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(c,"px ").concat(o,`;
  }
  body[`).concat(j,`] {
    overflow: hidden `).concat(o,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(o,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(s,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(o,`;
    `),n==="padding"&&"padding-right: ".concat(c,"px ").concat(o,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(se,` {
    right: `).concat(c,"px ").concat(o,`;
  }
  
  .`).concat(ie,` {
    margin-right: `).concat(c,"px ").concat(o,`;
  }
  
  .`).concat(se," .").concat(se,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(ie," .").concat(ie,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(j,`] {
    `).concat(mn,": ").concat(c,`px;
  }
`)},Ye=function(){var e=parseInt(document.body.getAttribute(j)||"0",10);return isFinite(e)?e:0},Pn=function(){r.useEffect(function(){return document.body.setAttribute(j,(Ye()+1).toString()),function(){var e=Ye()-1;e<=0?document.body.removeAttribute(j):document.body.setAttribute(j,e.toString())}},[])},Dn=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,a=o===void 0?"margin":o;Pn();var s=r.useMemo(function(){return Rn(a)},[a]);return r.createElement(_n,{styles:Tn(s,!t,a,n?"":"!important")})},xe=!1;if(typeof window<"u")try{var ce=Object.defineProperty({},"passive",{get:function(){return xe=!0,!0}});window.addEventListener("test",ce,ce),window.removeEventListener("test",ce,ce)}catch{xe=!1}var V=xe?{passive:!1}:!1,Fn=function(e){return e.tagName==="TEXTAREA"},ut=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Fn(e)&&n[t]==="visible")},On=function(e){return ut(e,"overflowY")},kn=function(e){return ut(e,"overflowX")},Ve=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var o=lt(e,n);if(o){var a=dt(e,n),s=a[1],u=a[2];if(s>u)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},Nn=function(e){var t=e.scrollTop,n=e.scrollHeight,o=e.clientHeight;return[t,n,o]},Ln=function(e){var t=e.scrollLeft,n=e.scrollWidth,o=e.clientWidth;return[t,n,o]},lt=function(e,t){return e==="v"?On(t):kn(t)},dt=function(e,t){return e==="v"?Nn(t):Ln(t)},Bn=function(e,t){return e==="h"&&t==="rtl"?-1:1},Un=function(e,t,n,o,a){var s=Bn(e,window.getComputedStyle(t).direction),u=s*o,c=n.target,A=t.contains(c),d=!1,b=u>0,l=0,m=0;do{var $=dt(e,c),f=$[0],i=$[1],v=$[2],p=i-v-s*f;(f||p)&&lt(e,c)&&(l+=p,m+=f),c=c.parentNode}while(!A&&c!==document.body||A&&(t.contains(c)||t===c));return(b&&(l===0||!a)||!b&&(m===0||!a))&&(d=!0),d},ae=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},qe=function(e){return[e.deltaX,e.deltaY]},je=function(e){return e&&"current"in e?e.current:e},Kn=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Gn=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Wn=0,q=[];function Yn(e){var t=r.useRef([]),n=r.useRef([0,0]),o=r.useRef(),a=r.useState(Wn++)[0],s=r.useState(function(){return it()})[0],u=r.useRef(e);r.useEffect(function(){u.current=e},[e]),r.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var i=_t([e.lockRef.current],(e.shards||[]).map(je),!0).filter(Boolean);return i.forEach(function(v){return v.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),i.forEach(function(v){return v.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var c=r.useCallback(function(i,v){if("touches"in i&&i.touches.length===2)return!u.current.allowPinchZoom;var p=ae(i),h=n.current,y="deltaX"in i?i.deltaX:h[0]-p[0],C="deltaY"in i?i.deltaY:h[1]-p[1],w,P=i.target,S=Math.abs(y)>Math.abs(C)?"h":"v";if("touches"in i&&S==="h"&&P.type==="range")return!1;var O=Ve(S,P);if(!O)return!0;if(O?w=S:(w=S==="v"?"h":"v",O=Ve(S,P)),!O)return!1;if(!o.current&&"changedTouches"in i&&(y||C)&&(o.current=w),!w)return!0;var _=o.current||w;return Un(_,v,i,_==="h"?y:C,!0)},[]),A=r.useCallback(function(i){var v=i;if(!(!q.length||q[q.length-1]!==s)){var p="deltaY"in v?qe(v):ae(v),h=t.current.filter(function(w){return w.name===v.type&&w.target===v.target&&Kn(w.delta,p)})[0];if(h&&h.should){v.cancelable&&v.preventDefault();return}if(!h){var y=(u.current.shards||[]).map(je).filter(Boolean).filter(function(w){return w.contains(v.target)}),C=y.length>0?c(v,y[0]):!u.current.noIsolation;C&&v.cancelable&&v.preventDefault()}}},[]),d=r.useCallback(function(i,v,p,h){var y={name:i,delta:v,target:p,should:h};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(C){return C!==y})},1)},[]),b=r.useCallback(function(i){n.current=ae(i),o.current=void 0},[]),l=r.useCallback(function(i){d(i.type,qe(i),i.target,c(i,e.lockRef.current))},[]),m=r.useCallback(function(i){d(i.type,ae(i),i.target,c(i,e.lockRef.current))},[]);r.useEffect(function(){return q.push(s),e.setCallbacks({onScrollCapture:l,onWheelCapture:l,onTouchMoveCapture:m}),document.addEventListener("wheel",A,V),document.addEventListener("touchmove",A,V),document.addEventListener("touchstart",b,V),function(){q=q.filter(function(i){return i!==s}),document.removeEventListener("wheel",A,V),document.removeEventListener("touchmove",A,V),document.removeEventListener("touchstart",b,V)}},[]);var $=e.removeScrollBar,f=e.inert;return r.createElement(r.Fragment,null,f?r.createElement(s,{styles:Gn(a)}):null,$?r.createElement(Dn,{gapMode:"margin"}):null)}const Vn=hn(st,Yn);var ft=r.forwardRef(function(e,t){return r.createElement(de,L({},e,{ref:t,sideCar:Vn}))});ft.classNames=de.classNames;const qn=["Enter"," "],jn=["ArrowDown","PageUp","Home"],mt=["ArrowUp","PageDown","End"],zn=[...jn,...mt],fe="Menu",[Ie,Xn,Hn]=Je(fe),[G,At]=le(fe,[Hn,He,ot]),De=He(),pt=ot(),[Qn,te]=G(fe),[Zn,Fe]=G(fe),Jn=e=>{const{__scopeMenu:t,open:n=!1,children:o,dir:a,onOpenChange:s,modal:u=!0}=e,c=De(t),[A,d]=r.useState(null),b=r.useRef(!1),l=ue(s),m=et(a);return r.useEffect(()=>{const $=()=>{b.current=!0,document.addEventListener("pointerdown",f,{capture:!0,once:!0}),document.addEventListener("pointermove",f,{capture:!0,once:!0})},f=()=>b.current=!1;return document.addEventListener("keydown",$,{capture:!0}),()=>{document.removeEventListener("keydown",$,{capture:!0}),document.removeEventListener("pointerdown",f,{capture:!0}),document.removeEventListener("pointermove",f,{capture:!0})}},[]),r.createElement(Mt,c,r.createElement(Qn,{scope:t,open:n,onOpenChange:l,content:A,onContentChange:d},r.createElement(Zn,{scope:t,onClose:r.useCallback(()=>l(!1),[l]),isUsingKeyboardRef:b,dir:m,modal:u},o)))},eo=r.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e,a=De(n);return r.createElement(xt,x({},a,o,{ref:t}))}),vt="MenuPortal",[to,no]=G(vt,{forceMount:void 0}),oo=e=>{const{__scopeMenu:t,forceMount:n,children:o,container:a}=e,s=te(vt,t);return r.createElement(to,{scope:t,forceMount:n},r.createElement(Qe,{present:n||s.open},r.createElement(It,{asChild:!0,container:a},o)))},B="MenuContent",[ro,bt]=G(B),co=r.forwardRef((e,t)=>{const n=no(B,e.__scopeMenu),{forceMount:o=n.forceMount,...a}=e,s=te(B,e.__scopeMenu),u=Fe(B,e.__scopeMenu);return r.createElement(Ie.Provider,{scope:e.__scopeMenu},r.createElement(Qe,{present:o||s.open},r.createElement(Ie.Slot,{scope:e.__scopeMenu},u.modal?r.createElement(ao,x({},a,{ref:t})):r.createElement(so,x({},a,{ref:t})))))}),ao=r.forwardRef((e,t)=>{const n=te(B,e.__scopeMenu),o=r.useRef(null),a=U(t,o);return r.useEffect(()=>{const s=o.current;if(s)return dn(s)},[]),r.createElement($t,x({},e,{ref:a,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:M(e.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)}))}),so=r.forwardRef((e,t)=>{const n=te(B,e.__scopeMenu);return r.createElement($t,x({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)}))}),$t=r.forwardRef((e,t)=>{const{__scopeMenu:n,loop:o=!1,trapFocus:a,onOpenAutoFocus:s,onCloseAutoFocus:u,disableOutsidePointerEvents:c,onEntryFocus:A,onEscapeKeyDown:d,onPointerDownOutside:b,onFocusOutside:l,onInteractOutside:m,onDismiss:$,disableOutsideScroll:f,...i}=e,v=te(B,n),p=Fe(B,n),h=De(n),y=pt(n),C=Xn(n),[w,P]=r.useState(null),S=r.useRef(null),O=U(t,S,v.onContentChange),_=r.useRef(0),k=r.useRef(""),me=r.useRef(0),H=r.useRef(null),Ae=r.useRef("right"),Q=r.useRef(0),D=f?ft:r.Fragment,Ct=f?{as:Se,allowPinchZoom:!0}:void 0,Et=g=>{var I,R;const K=k.current+g,Z=C().filter(F=>!F.disabled),pe=document.activeElement,Oe=(I=Z.find(F=>F.ref.current===pe))===null||I===void 0?void 0:I.textValue,ne=Z.map(F=>F.textValue),J=$o(ne,K,Oe),ke=(R=Z.find(F=>F.textValue===J))===null||R===void 0?void 0:R.ref.current;(function F(Ne){k.current=Ne,window.clearTimeout(_.current),Ne!==""&&(_.current=window.setTimeout(()=>F(""),1e3))})(K),ke&&setTimeout(()=>ke.focus())};r.useEffect(()=>()=>window.clearTimeout(_.current),[]),Lt();const W=r.useCallback(g=>{var I,R;return Ae.current===((I=H.current)===null||I===void 0?void 0:I.side)&&ho(g,(R=H.current)===null||R===void 0?void 0:R.area)},[]);return r.createElement(ro,{scope:n,searchRef:k,onItemEnter:r.useCallback(g=>{W(g)&&g.preventDefault()},[W]),onItemLeave:r.useCallback(g=>{var I;W(g)||((I=S.current)===null||I===void 0||I.focus(),P(null))},[W]),onTriggerLeave:r.useCallback(g=>{W(g)&&g.preventDefault()},[W]),pointerGraceTimerRef:me,onPointerGraceIntentChange:r.useCallback(g=>{H.current=g},[])},r.createElement(D,Ct,r.createElement(Bt,{asChild:!0,trapped:a,onMountAutoFocus:M(s,g=>{var I;g.preventDefault(),(I=S.current)===null||I===void 0||I.focus()}),onUnmountAutoFocus:u},r.createElement(yt,{asChild:!0,disableOutsidePointerEvents:c,onEscapeKeyDown:d,onPointerDownOutside:b,onFocusOutside:l,onInteractOutside:m,onDismiss:$},r.createElement(cn,x({asChild:!0},y,{dir:p.dir,orientation:"vertical",loop:o,currentTabStopId:w,onCurrentTabStopIdChange:P,onEntryFocus:M(A,g=>{p.isUsingKeyboardRef.current||g.preventDefault()})}),r.createElement(St,x({role:"menu","aria-orientation":"vertical","data-state":po(v.open),"data-radix-menu-content":"",dir:p.dir},h,i,{ref:O,style:{outline:"none",...i.style},onKeyDown:M(i.onKeyDown,g=>{const R=g.target.closest("[data-radix-menu-content]")===g.currentTarget,K=g.ctrlKey||g.altKey||g.metaKey,Z=g.key.length===1;R&&(g.key==="Tab"&&g.preventDefault(),!K&&Z&&Et(g.key));const pe=S.current;if(g.target!==pe||!zn.includes(g.key))return;g.preventDefault();const ne=C().filter(J=>!J.disabled).map(J=>J.ref.current);mt.includes(g.key)&&ne.reverse(),vo(ne)}),onBlur:M(e.onBlur,g=>{g.currentTarget.contains(g.target)||(window.clearTimeout(_.current),k.current="")}),onPointerMove:M(e.onPointerMove,_e(g=>{const I=g.target,R=Q.current!==g.clientX;if(g.currentTarget.contains(I)&&R){const K=g.clientX>Q.current?"right":"left";Ae.current=K,Q.current=g.clientX}}))})))))))}),Re="MenuItem",ze="menu.itemSelect",io=r.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:o,...a}=e,s=r.useRef(null),u=Fe(Re,e.__scopeMenu),c=bt(Re,e.__scopeMenu),A=U(t,s),d=r.useRef(!1),b=()=>{const l=s.current;if(!n&&l){const m=new CustomEvent(ze,{bubbles:!0,cancelable:!0});l.addEventListener(ze,$=>o==null?void 0:o($),{once:!0}),wt(l,m),m.defaultPrevented?d.current=!1:u.onClose()}};return r.createElement(uo,x({},a,{ref:A,disabled:n,onClick:M(e.onClick,b),onPointerDown:l=>{var m;(m=e.onPointerDown)===null||m===void 0||m.call(e,l),d.current=!0},onPointerUp:M(e.onPointerUp,l=>{var m;d.current||(m=l.currentTarget)===null||m===void 0||m.click()}),onKeyDown:M(e.onKeyDown,l=>{const m=c.searchRef.current!=="";n||m&&l.key===" "||qn.includes(l.key)&&(l.currentTarget.click(),l.preventDefault())})}))}),uo=r.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:o=!1,textValue:a,...s}=e,u=bt(Re,n),c=pt(n),A=r.useRef(null),d=U(t,A),[b,l]=r.useState(!1),[m,$]=r.useState("");return r.useEffect(()=>{const f=A.current;if(f){var i;$(((i=f.textContent)!==null&&i!==void 0?i:"").trim())}},[s.children]),r.createElement(Ie.ItemSlot,{scope:n,disabled:o,textValue:a??m},r.createElement(an,x({asChild:!0},c,{focusable:!o}),r.createElement(z.div,x({role:"menuitem","data-highlighted":b?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0},s,{ref:d,onPointerMove:M(e.onPointerMove,_e(f=>{o?u.onItemLeave(f):(u.onItemEnter(f),f.defaultPrevented||f.currentTarget.focus())})),onPointerLeave:M(e.onPointerLeave,_e(f=>u.onItemLeave(f))),onFocus:M(e.onFocus,()=>l(!0)),onBlur:M(e.onBlur,()=>l(!1))}))))}),lo="MenuRadioGroup";G(lo,{value:void 0,onValueChange:()=>{}});const fo="MenuItemIndicator";G(fo,{checked:!1});const mo=r.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return r.createElement(z.div,x({role:"separator","aria-orientation":"horizontal"},o,{ref:t}))}),Ao="MenuSub";G(Ao);function po(e){return e?"open":"closed"}function vo(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function bo(e,t){return e.map((n,o)=>e[(t+o)%e.length])}function $o(e,t,n){const a=t.length>1&&Array.from(t).every(d=>d===t[0])?t[0]:t,s=n?e.indexOf(n):-1;let u=bo(e,Math.max(s,0));a.length===1&&(u=u.filter(d=>d!==n));const A=u.find(d=>d.toLowerCase().startsWith(a.toLowerCase()));return A!==n?A:void 0}function go(e,t){const{x:n,y:o}=e;let a=!1;for(let s=0,u=t.length-1;s<t.length;u=s++){const c=t[s].x,A=t[s].y,d=t[u].x,b=t[u].y;A>o!=b>o&&n<(d-c)*(o-A)/(b-A)+c&&(a=!a)}return a}function ho(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return go(n,t)}function _e(e){return t=>t.pointerType==="mouse"?e(t):void 0}const Co=Jn,Eo=eo,yo=oo,So=co,wo=io,Mo=mo,gt="DropdownMenu",[xo,tr]=le(gt,[At]),X=At(),[Io,ht]=xo(gt),Ro=e=>{const{__scopeDropdownMenu:t,children:n,dir:o,open:a,defaultOpen:s,onOpenChange:u,modal:c=!0}=e,A=X(t),d=r.useRef(null),[b=!1,l]=Xe({prop:a,defaultProp:s,onChange:u});return r.createElement(Io,{scope:t,triggerId:we(),triggerRef:d,contentId:we(),open:b,onOpenChange:l,onOpenToggle:r.useCallback(()=>l(m=>!m),[l]),modal:c},r.createElement(Co,x({},A,{open:b,onOpenChange:l,dir:o,modal:c}),n))},_o="DropdownMenuTrigger",To=r.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:o=!1,...a}=e,s=ht(_o,n),u=X(n);return r.createElement(Eo,x({asChild:!0},u),r.createElement(z.button,x({type:"button",id:s.triggerId,"aria-haspopup":"menu","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":s.open?"open":"closed","data-disabled":o?"":void 0,disabled:o},a,{ref:Rt(t,s.triggerRef),onPointerDown:M(e.onPointerDown,c=>{!o&&c.button===0&&c.ctrlKey===!1&&(s.onOpenToggle(),s.open||c.preventDefault())}),onKeyDown:M(e.onKeyDown,c=>{o||(["Enter"," "].includes(c.key)&&s.onOpenToggle(),c.key==="ArrowDown"&&s.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(c.key)&&c.preventDefault())})})))}),Po=e=>{const{__scopeDropdownMenu:t,...n}=e,o=X(t);return r.createElement(yo,x({},o,n))},Do="DropdownMenuContent",Fo=r.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=ht(Do,n),s=X(n),u=r.useRef(!1);return r.createElement(So,x({id:a.contentId,"aria-labelledby":a.triggerId},s,o,{ref:t,onCloseAutoFocus:M(e.onCloseAutoFocus,c=>{var A;u.current||(A=a.triggerRef.current)===null||A===void 0||A.focus(),u.current=!1,c.preventDefault()}),onInteractOutside:M(e.onInteractOutside,c=>{const A=c.detail.originalEvent,d=A.button===0&&A.ctrlKey===!0,b=A.button===2||d;(!a.modal||b)&&(u.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),Oo=r.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=X(n);return r.createElement(wo,x({},a,o,{ref:t}))}),ko=r.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,a=X(n);return r.createElement(Mo,x({},a,o,{ref:t}))}),nr=Ro,or=To,rr=Po,No=Fo,Lo=Oo,Bo=ko;function E(){var e="/Users/radekpodrazky/Projects/design-system/src/components/_internal/BaseDropdownMenu/menuElements.tsx",t="b8d7746738a30c89f6a50f1fe80d236ae69d9bda",n=window,o="__coverage__",a={path:"/Users/radekpodrazky/Projects/design-system/src/components/_internal/BaseDropdownMenu/menuElements.tsx",statementMap:{0:{start:{line:8,column:27},end:{line:13,column:30}},1:{start:{line:13,column:6},end:{line:13,column:29}},2:{start:{line:14,column:21},end:{line:25,column:3}},3:{start:{line:19,column:6},end:{line:19,column:24}},4:{start:{line:23,column:6},end:{line:25,column:2}},5:{start:{line:26,column:24},end:{line:39,column:10}},6:{start:{line:34,column:22},end:{line:39,column:10}},7:{start:{line:35,column:2},end:{line:35,column:22}},8:{start:{line:40,column:29},end:{line:43,column:68}},9:{start:{line:45,column:0},end:{line:136,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:11,column:147},end:{line:11,column:148}},loc:{start:{line:13,column:6},end:{line:13,column:29}},line:13},1:{name:"(anonymous_1)",decl:{start:{line:17,column:75},end:{line:17,column:76}},loc:{start:{line:19,column:6},end:{line:19,column:24}},line:19},2:{name:"(anonymous_2)",decl:{start:{line:19,column:26},end:{line:19,column:27}},loc:{start:{line:23,column:6},end:{line:25,column:2}},line:23},3:{name:"(anonymous_3)",decl:{start:{line:26,column:24},end:{line:26,column:25}},loc:{start:{line:34,column:22},end:{line:39,column:10}},line:34},4:{name:"(anonymous_4)",decl:{start:{line:34,column:115},end:{line:34,column:116}},loc:{start:{line:34,column:122},end:{line:36,column:1}},line:34}},branchMap:{0:{loc:{start:{line:13,column:6},end:{line:13,column:29}},type:"cond-expr",locations:[{start:{line:13,column:22},end:{line:13,column:25}},{start:{line:13,column:28},end:{line:13,column:29}}],line:13},1:{loc:{start:{line:19,column:6},end:{line:19,column:24}},type:"cond-expr",locations:[{start:{line:19,column:17},end:{line:19,column:20}},{start:{line:19,column:23},end:{line:19,column:24}}],line:19},2:{loc:{start:{line:23,column:6},end:{line:25,column:2}},type:"cond-expr",locations:[{start:{line:23,column:17},end:{line:23,column:30}},{start:{line:23,column:33},end:{line:25,column:2}}],line:23},3:{loc:{start:{line:23,column:42},end:{line:23,column:128}},type:"cond-expr",locations:[{start:{line:23,column:59},end:{line:23,column:86}},{start:{line:23,column:89},end:{line:23,column:128}}],line:23},4:{loc:{start:{line:29,column:2},end:{line:29,column:20}},type:"default-arg",locations:[{start:{line:29,column:15},end:{line:29,column:20}}],line:29},5:{loc:{start:{line:30,column:2},end:{line:30,column:23}},type:"default-arg",locations:[{start:{line:30,column:18},end:{line:30,column:23}}],line:30},6:{loc:{start:{line:37,column:37},end:{line:37,column:80}},type:"cond-expr",locations:[{start:{line:37,column:53},end:{line:37,column:64}},{start:{line:37,column:67},end:{line:37,column:80}}],line:37}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0],5:[0],6:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/_internal/BaseDropdownMenu/menuElements.tsx"],names:["DropdownMenu","styled","getRadii","getToken","Icon","Inline","Padbox","Text","MenuContent","Content","withConfig","displayName","componentId","$isFullscreen","MenuItemRoot","Item","disabled","$isDestructive","theme","MenuItem","children","onClick","isDisabled","isDestructive","iconName","iconType","className","e","stopPropagation","MenuSeparator","Separator"],mappings:"AAgEM,SACE,KADF;AAhEN,YAAYA,kBAAkB;AAC9B,OAAOC,YAAY;AAEnB,SAASC,UAAUC,gBAAgB;AACnC,SAASC,YAAyC;AAClD,SAASC,QAAQC,cAAc;AAC/B,SAASC,YAAY;AAEd,aAAMC,cAAcP,OAAOD,aAAaS,OAAO,EAACC,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CAAA,EAAA,CAAA,qEAAA,+CAAA,GAAA,GAKpCV,SAAS,SAAS,GAGxB,CAAC;AAAA,EAAEW;AAAc,MAAOA,gBAAgB,MAAO,CAAE;AAG9D,MAAMC,eAAeb,OAAOD,aAAae,IAAI,EAACL,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CAAA,EAAA,CAAA,YAAA,uCAAA,iBAAA,GACjC,CAAC;AAAA,EAAEI;AAAS,MAAOA,WAAW,MAAM,GAI/B,CAAC;AAAA,EAAEA;AAAAA,EAAUC;AAAAA,EAAgBC;AAAM,MAC/CF,WACI,gBACAb,SACEc,iBACI,8BACA,yCACJ;AAAA,EAAEC;AAAM,CACV,CAAC;AAKJ,aAAMC,WAAWA,CAAC;AAAA,EACvBC;AAAAA,EACAC;AAAAA,EACAC,aAAa;AAAA,EACbC,gBAAgB;AAAA,EAChBC;AAAAA,EACAC;AAAAA,EACAC;AASF,MACE,oBAAC,gBACC,gBAAgBH,eAChB,WACA,UAAUD,YACV,SAAUK,OAAM;AACdA,IAAEC,gBAAgB;AACpB,GACA,UAAUP,SAEV,8BAAC,UAAO,aAAY,MAAK,aAAY,UACnC,+BAAC,UAAO,OAAM,UAAS,KAAI,MACzB;AAAA,sBAAC,QACC,OAAOE,gBAAgB,cAAc,eACrC,MAAMC,UACN,MAAK,MACL,MAAMC,UACN,cAAY,MAAA;AAAA,EAEd,oBAAC,QAAML,UAAS;AAAA,GAClB,GACF,GACF;AAGK,aAAMS,gBAAgB5B,OAAOD,aAAa8B,SAAS,EAACpB,WAAA;AAAA,EAAAC,aAAA;AAAA,EAAAC,aAAA;AAAA,CAI1D,EAAA,CAAA,8DAAA,CAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"b8d7746738a30c89f6a50f1fe80d236ae69d9bda"},s=n[o]||(n[o]={});(!s[e]||s[e].hash!==t)&&(s[e]=a);var u=s[e];return E=function(){return u},u}E();const cr=(E().s[0]++,Te(No).withConfig({displayName:"menuElements__MenuContent",componentId:"sc-1gy5gqm-0"})(["position:relative;border:1px solid rgba(0 0 0/15%);border-radius:",";background:white;padding:0.5rem 0;z-index:",";"],Tt("default"),({$isFullscreen:e})=>(E().f[0]++,E().s[1]++,e?(E().b[0][0]++,1e3):(E().b[0][1]++,2)))),Uo=(E().s[2]++,Te(Lo).withConfig({displayName:"menuElements__MenuItemRoot",componentId:"sc-1gy5gqm-1"})(["opacity:",";cursor:pointer;&:hover{background:",";outline:none;}"],({disabled:e})=>(E().f[1]++,E().s[3]++,e?(E().b[1][0]++,.6):(E().b[1][1]++,1)),({disabled:e,$isDestructive:t,theme:n})=>(E().f[2]++,E().s[4]++,e?(E().b[2][0]++,"transparent"):(E().b[2][1]++,Pt(t?(E().b[3][0]++,"color-action-danger-focus"):(E().b[3][1]++,"color-action-background-primary-focus"),{theme:n})))));E().s[5]++;const Ko=({children:e,onClick:t,isDisabled:n=(E().b[4][0]++,!1),isDestructive:o=(E().b[5][0]++,!1),iconName:a,iconType:s,className:u})=>(E().f[3]++,E().s[6]++,ee.jsx(Uo,{$isDestructive:o,className:u,disabled:n,onClick:c=>{E().f[4]++,E().s[7]++,c.stopPropagation()},onSelect:t,children:ee.jsx(Ft,{paddingSize:"md",paddingType:"squish",children:ee.jsxs(Ot,{align:"center",gap:"md",children:[ee.jsx(kt,{color:o?(E().b[6][0]++,"error.500"):(E().b[6][1]++,"neutral.700"),name:a,size:"sm",type:s,hasFixedSize:!0}),ee.jsx(Dt,{children:e})]})})})),ar=(E().s[8]++,Te(Bo).withConfig({displayName:"menuElements__MenuSeparator",componentId:"sc-1gy5gqm-2"})(["height:1px;background-color:rgba(0 0 0/15%);margin:0.5rem 0;"]));E().s[9]++;Ko.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{children:{required:!0,tsType:{name:"string"},description:""},iconName:{required:!0,tsType:{name:"union",raw:"SSCIcons | (string & {})",elements:[{name:"unknown[union]",raw:"(typeof SSCIconNames)[keyof typeof SSCIconNames]"},{name:"unknown"}]},description:""},iconType:{required:!1,tsType:{name:"Exclude",elements:[{name:"unknown[union]",raw:"(typeof IconTypes)[keyof typeof IconTypes]"},{name:"literal",value:"'fal'"}],raw:"Exclude<Types, 'fal'>"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isDestructive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};export{nr as $,cr as M,or as a,rr as b,ar as c,Ko as d};
//# sourceMappingURL=menuElements-DyWKGTWV.js.map
