import{j as p}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as pt}from"./index-DSkyVWTJ.js";import{av as C,as as oe,I as J,aw as E,X as Ht,ae as Lt}from"./index-CsfP6ry2.js";import{a as ut,r as w,R as O}from"./index-CTjT7uj6.js";import{q as se}from"./styled-components.browser.esm-CkXiwQaI.js";import{_ as re}from"./_isObject-BZZHHNGj.js";import{h as He,j as zt,f as It,e as Ft}from"./space.enums-Dn0LioXL.js";import"./index-CbtSpW2v.js";import{t as Dt}from"./theme-B4UkYPRv.js";import"./iframe-Dhcyyg6o.js";import"../sb-preview/runtime.js";import"./index-DIVhMF2i.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CgFWNHQ8.js";import"./index-DrFu-skq.js";import"./constants-l-41uwkI.js";import"./index-CajKmcpa.js";import"./DSProvider-BD6Crr4Z.js";import"./isFunction-ueona4bl.js";import"./prop-DthtuCpe.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./colors-BJBAFLAc.js";var Ut=function(){function i(e,t){this.xf=t,this.n=e}return i.prototype["@@transducer/init"]=He.init,i.prototype["@@transducer/result"]=He.result,i.prototype["@@transducer/step"]=function(e,t){return this.n>0?(this.n-=1,e):this.xf["@@transducer/step"](e,t)},i}(),Vt=re(function(e,t){return new Ut(e,t)}),Yt=re(zt(["drop"],Vt,function(e,t){return It(Math.max(0,e),1/0,t)})),Wt=re(function(e,t){return Yt(e>=0?t.length-e:0,t)}),Xt=re(function(i,e){return Ft(Wt(i.length,e),i)});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=window,Ne=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Be=Symbol(),Le=new WeakMap;let ft=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==Be)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ne&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=Le.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Le.set(t,e))}return e}toString(){return this.cssText}};const Zt=i=>new ft(typeof i=="string"?i:i+"",void 0,Be),B=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new ft(t,i,Be)},Gt=(i,e)=>{Ne?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const o=document.createElement("style"),s=q.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=t.cssText,i.appendChild(o)})},ze=Ne?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return Zt(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var he;const Q=window,Ie=Q.trustedTypes,qt=Ie?Ie.emptyScript:"",Fe=Q.reactiveElementPolyfillSupport,xe={toAttribute(i,e){switch(e){case Boolean:i=i?qt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},gt=(i,e)=>e!==i&&(e==e||i==i),pe={attribute:!0,type:String,converter:xe,reflect:!1,hasChanged:gt},we="finalized";let R=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,o)=>{const s=this._$Ep(o,t);s!==void 0&&(this._$Ev.set(s,o),e.push(s))}),e}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,o,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||pe}static finalize(){if(this.hasOwnProperty(we))return!1;this[we]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,o=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of o)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const s of o)t.unshift(ze(s))}else e!==void 0&&t.push(ze(e));return t}static _$Ep(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,o;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Gt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostConnected)===null||o===void 0?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostDisconnected)===null||o===void 0?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=pe){var s;const r=this.constructor._$Ep(e,o);if(r!==void 0&&o.reflect===!0){const n=(((s=o.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?o.converter:xe).toAttribute(t,o.type);this._$El=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(e,t){var o;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const n=s.getPropertyOptions(r),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:xe;this._$El=r,this[r]=c.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,o){let s=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||gt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,o))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(o)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdated)===null||s===void 0?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,o)=>this._$EO(o,this[o],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};R[we]=!0,R.elementProperties=new Map,R.elementStyles=[],R.shadowRootOptions={mode:"open"},Fe==null||Fe({ReactiveElement:R}),((he=Q.reactiveElementVersions)!==null&&he!==void 0?he:Q.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ue;const ee=window,z=ee.trustedTypes,De=z?z.createPolicy("lit-html",{createHTML:i=>i}):void 0,_e="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,mt="?"+k,Kt=`<${mt}>`,T=document,V=()=>T.createComment(""),Y=i=>i===null||typeof i!="object"&&typeof i!="function",vt=Array.isArray,Jt=i=>vt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",fe=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ue=/-->/g,Ve=/>/g,M=RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ye=/'/g,We=/"/g,bt=/^(?:script|style|textarea|title)$/i,yt=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),b=yt(1),A=yt(2),N=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Xe=new WeakMap,P=T.createTreeWalker(T,129,null,!1);function $t(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return De!==void 0?De.createHTML(e):e}const Qt=(i,e)=>{const t=i.length-1,o=[];let s,r=e===2?"<svg>":"",n=F;for(let c=0;c<t;c++){const a=i[c];let d,l,h=-1,f=0;for(;f<a.length&&(n.lastIndex=f,l=n.exec(a),l!==null);)f=n.lastIndex,n===F?l[1]==="!--"?n=Ue:l[1]!==void 0?n=Ve:l[2]!==void 0?(bt.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=M):l[3]!==void 0&&(n=M):n===M?l[0]===">"?(n=s??F,h=-1):l[1]===void 0?h=-2:(h=n.lastIndex-l[2].length,d=l[1],n=l[3]===void 0?M:l[3]==='"'?We:Ye):n===We||n===Ye?n=M:n===Ue||n===Ve?n=F:(n=M,s=void 0);const g=n===M&&i[c+1].startsWith("/>")?" ":"";r+=n===F?a+Kt:h>=0?(o.push(d),a.slice(0,h)+_e+a.slice(h)+k+g):a+k+(h===-2?(o.push(void 0),c):g)}return[$t(i,r+(i[t]||"<?>")+(e===2?"</svg>":"")),o]};let Ee=class xt{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let r=0,n=0;const c=e.length-1,a=this.parts,[d,l]=Qt(e,t);if(this.el=xt.createElement(d,o),P.currentNode=this.el.content,t===2){const h=this.el.content,f=h.firstChild;f.remove(),h.append(...f.childNodes)}for(;(s=P.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const f of s.getAttributeNames())if(f.endsWith(_e)||f.startsWith(k)){const g=l[n++];if(h.push(f),g!==void 0){const u=s.getAttribute(g.toLowerCase()+_e).split(k),m=/([.?@])?(.*)/.exec(g);a.push({type:1,index:r,name:m[2],strings:u,ctor:m[1]==="."?ti:m[1]==="?"?oi:m[1]==="@"?si:ne})}else a.push({type:6,index:r})}for(const f of h)s.removeAttribute(f)}if(bt.test(s.tagName)){const h=s.textContent.split(k),f=h.length-1;if(f>0){s.textContent=z?z.emptyScript:"";for(let g=0;g<f;g++)s.append(h[g],V()),P.nextNode(),a.push({type:2,index:++r});s.append(h[f],V())}}}else if(s.nodeType===8)if(s.data===mt)a.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(k,h+1))!==-1;)a.push({type:7,index:r}),h+=k.length-1}r++}}static createElement(e,t){const o=T.createElement("template");return o.innerHTML=e,o}};function I(i,e,t=i,o){var s,r,n,c;if(e===N)return e;let a=o!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[o]:t._$Cl;const d=Y(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==d&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),d===void 0?a=void 0:(a=new d(i),a._$AT(i,t,o)),o!==void 0?((n=(c=t)._$Co)!==null&&n!==void 0?n:c._$Co=[])[o]=a:t._$Cl=a),a!==void 0&&(e=I(i,a._$AS(i,e.values),a,o)),e}class ei{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:o},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:T).importNode(o,!0);P.currentNode=r;let n=P.nextNode(),c=0,a=0,d=s[0];for(;d!==void 0;){if(c===d.index){let l;d.type===2?l=new X(n,n.nextSibling,this,e):d.type===1?l=new d.ctor(n,d.name,d.strings,this,e):d.type===6&&(l=new ri(n,this,e)),this._$AV.push(l),d=s[++a]}c!==(d==null?void 0:d.index)&&(n=P.nextNode(),c++)}return P.currentNode=T,r}v(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class X{constructor(e,t,o,s){var r;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),Y(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==N&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Jt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==y&&Y(this._$AH)?this._$AA.nextSibling.data=e:this.$(T.createTextNode(e)),this._$AH=e}g(e){var t;const{values:o,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Ee.createElement($t(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(o);else{const n=new ei(r,this),c=n.u(this.options);n.v(o),this.$(c),this._$AH=n}}_$AC(e){let t=Xe.get(e.strings);return t===void 0&&Xe.set(e.strings,t=new Ee(e)),t}T(e){vt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,s=0;for(const r of e)s===t.length?t.push(o=new X(this.k(V()),this.k(V()),this,this.options)):o=t[s],o._$AI(r),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class ne{constructor(e,t,o,s,r){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,s){const r=this.strings;let n=!1;if(r===void 0)e=I(this,e,t,0),n=!Y(e)||e!==this._$AH&&e!==N,n&&(this._$AH=e);else{const c=e;let a,d;for(e=r[0],a=0;a<r.length-1;a++)d=I(this,c[o+a],t,a),d===N&&(d=this._$AH[a]),n||(n=!Y(d)||d!==this._$AH[a]),d===y?e=y:e!==y&&(e+=(d??"")+r[a+1]),this._$AH[a]=d}n&&!s&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let ti=class extends ne{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}};const ii=z?z.emptyScript:"";let oi=class extends ne{constructor(){super(...arguments),this.type=4}j(e){e&&e!==y?this.element.setAttribute(this.name,ii):this.element.removeAttribute(this.name)}};class si extends ne{constructor(e,t,o,s,r){super(e,t,o,s,r),this.type=5}_$AI(e,t=this){var o;if((e=(o=I(this,e,t,0))!==null&&o!==void 0?o:y)===N)return;const s=this._$AH,r=e===y&&s!==y||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==y&&(s===y||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;typeof this._$AH=="function"?this._$AH.call((o=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}}class ri{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}const Ze=ee.litHtmlPolyfillSupport;Ze==null||Ze(Ee,X),((ue=ee.litHtmlVersions)!==null&&ue!==void 0?ue:ee.litHtmlVersions=[]).push("2.8.0");const ni=(i,e,t)=>{var o,s;const r=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:e;let n=r._$litPart$;if(n===void 0){const c=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=n=new X(e.insertBefore(V(),c),c,void 0,t??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ge,me;let H=class extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ni(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return N}};H.finalized=!0,H._$litElement$=!0,(ge=globalThis.litElementHydrateSupport)===null||ge===void 0||ge.call(globalThis,{LitElement:H});const Ge=globalThis.litElementPolyfillSupport;Ge==null||Ge({LitElement:H});((me=globalThis.litElementVersions)!==null&&me!==void 0?me:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ai=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},li=(i,e,t)=>{e.constructor.createProperty(t,i)};function _(i){return(e,t)=>t!==void 0?li(i,e,t):ai(i,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ve;((ve=window.HTMLSlotElement)===null||ve===void 0?void 0:ve.prototype.assignedElements)!=null;const L=({title:i,children:e})=>b`
  <div class="error-background">
    <div class="error-container">
      <span class="error-title"
        ><span class="error-badge">Error</span>${i}</span
      >
      <span class="error-description">${e}</span>
    </div>
  </div>
`,ci=B`
  .error-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: var(--error-bg);
    color: var(--error-fg);
  }

  .error-container {
    max-width: 800px;
    margin: auto;
    padding: 1em;
  }

  .error-badge {
    display: inline-block;
    font-size: 0.8em;
    padding: 0.2em 0.5em;
    margin-inline-end: 0.5em;

    background: var(--error-color);
    border-radius: 2px;
    color: var(--error-bg);
    text-transform: uppercase;
  }

  .error-title {
    display: block;
    font-size: 1.2em;

    font-weight: bold;
    text-transform: capitalize;
  }

  .error-description {
    display: block;
    margin-block-start: 1em;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const di={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},hi=i=>(...e)=>({_$litDirective$:i,values:e});let pi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt="important",ui=" !"+wt,te=hi(class extends pi{constructor(i){var e;if(super(i),i.type!==di.ATTRIBUTE||i.name!=="style"||((e=i.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((e,t)=>{const o=i[t];return o==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(i,[e]){const{style:t}=i.element;if(this.ht===void 0){this.ht=new Set;for(const o in e)this.ht.add(o);return this.render(e)}this.ht.forEach(o=>{e[o]==null&&(this.ht.delete(o),o.includes("-")?t.removeProperty(o):t[o]="")});for(const o in e){const s=e[o];if(s!=null){this.ht.add(o);const r=typeof s=="string"&&s.endsWith(ui);o.includes("-")||r?t.setProperty(o,r?s.slice(0,-11):s,r?wt:""):t[o]=s}}return N}});function qe(i){return{top:i.y,right:i.x+i.width,bottom:i.y+i.height,left:i.x}}function fi(i,e){const t=qe(i),o=qe(e),s=!(t.top>o.bottom||t.bottom<o.top),r=!(t.left>o.right||t.right<o.left);if(r&&s){const l={x:(Math.max(t.left,o.left)+Math.min(t.right,o.right))/2,y:(Math.max(t.top,o.top)+Math.min(t.bottom,o.bottom))/2};return[{points:[{x:t.left,y:l.y},{x:o.left,y:l.y}]},{points:[{x:t.right,y:l.y},{x:o.right,y:l.y}]},{points:[{y:t.top,x:l.x},{y:o.top,x:l.x}]},{points:[{y:t.bottom,x:l.x},{y:o.bottom,x:l.x}]}]}const n=t.left>o.right,c=t.top>o.bottom,a={x:i.x+i.width/2,y:i.y+i.height/2};return[r?null:{points:[{x:n?t.left:t.right,y:a.y},{x:n?o.right:o.left,y:a.y}],bisector:s?void 0:[{x:n?o.right:o.left,y:a.y},{x:n?o.right:o.left,y:c?o.bottom:o.top}]},s?null:{points:[{y:c?t.top:t.bottom,x:a.x},{y:c?o.bottom:o.top,x:a.x}],bisector:r?void 0:[{y:c?o.bottom:o.top,x:a.x},{y:c?o.bottom:o.top,x:n?o.right:o.left}]}].filter(l=>!!l)}function Ae(i){return Math.round(i*100)/100}function _t(i,e){return[...Ke(i),...Ke(e)]}function Ke(i){return i?i instanceof Array?i:[i]:[]}var gi=function(i,e,t,o){var s=arguments.length,r=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,o);else for(var c=i.length-1;c>=0;c--)(n=i[c])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const mi=i=>{class e extends i{constructor(...o){super(...o),this.selectedNode=null}updated(o){super.updated(o),o.has("selectedNode")&&this.dispatchEvent(new CustomEvent("nodeselect",{detail:{selectedNode:this.selectedNode}}))}}return gi([_({attribute:!1})],e.prototype,"selectedNode",void 0),e};function Z(i){return i.touches.length===0||i.touches.length>2}function vi(i,e){return Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2))}const bi=i=>class extends i{constructor(...t){super(...t),this.previousTouches=null,this.addEventListener("touchstart",o=>{Z(o)||(o.preventDefault(),this.previousTouches=o.touches)}),this.addEventListener("touchend",o=>{Z(o)||(o.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchcancel",o=>{Z(o)||(o.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchmove",o=>{if(Z(o))return;const s=Array.from(this.previousTouches||[]),r=Array.from(o.touches);if(this.previousTouches=o.touches,!(r.length!==s.length||!r.every(n=>s.some(c=>c.identifier===n.identifier)))){if(r.length===1){this.onTouchPan({x:r[0].pageX-s[0].pageX,y:r[0].pageY-s[0].pageY});return}this.onTouchPinch(vi({x:r[0].pageX,y:r[0].pageY},{x:s[0].pageX,y:s[0].pageY}))}})}get isTouching(){return!!(this.previousTouches&&this.previousTouches.length>0)}onTouchPan(t){}onTouchPinch(t){}};var D=function(i,e,t,o){var s=arguments.length,r=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,o);else for(var c=i.length-1;c>=0;c--)(n=i[c])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},S=function(i,e,t,o){if(t==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!o:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?o:t==="a"?o.call(i):o?o.value:e.get(i)},Je=function(i,e,t,o,s){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?i!==e||!s:!e.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?s.call(i,t):s?s.value=t:e.set(i,t),t};const yi=i=>{var e,t,o,s,r;class n extends bi(i){constructor(...a){super(...a),this.panX=0,this.panY=0,this.scale=1,this.zoomSpeed=500,this.panSpeed=500,e.set(this,!1),t.set(this,(l,h)=>{this.panX+=l/this.scale/window.devicePixelRatio,this.panY+=h/this.scale/window.devicePixelRatio}),o.set(this,l=>{l.code==="Space"&&!S(this,e,"f")&&(Je(this,e,!0,"f"),document.body.style.cursor="grab")}),s.set(this,l=>{l.code==="Space"&&S(this,e,"f")&&(Je(this,e,!1,"f"),document.body.style.cursor="auto")}),r.set(this,()=>{document.addEventListener("keyup",S(this,s,"f")),document.addEventListener("keydown",S(this,o,"f"))}),this.addEventListener("wheel",l=>{if(this.isMovable)if(l.preventDefault(),l.ctrlKey){let{deltaY:h}=l;l.deltaMode===1&&(h*=15);const f=this.scale;this.scale*=1-h/((1e3-this.zoomSpeed)*.5);const g=l.offsetX-this.offsetWidth/2,u=l.offsetY-this.offsetHeight/2;this.panX+=g/this.scale-g/f,this.panY+=u/this.scale-u/f}else{const h=this.panSpeed*.002;this.panX-=l.deltaX*h/this.scale,this.panY-=l.deltaY*h/this.scale}},{passive:!1});let d=1;this.addEventListener("gesturestart",l=>{l.preventDefault(),d=this.scale}),this.addEventListener("gesturechange",l=>{const h=l;h.preventDefault(),this.scale=d*h.scale}),this.addEventListener("pointermove",l=>{l.buttons&4&&(l.preventDefault(),S(this,t,"f").call(this,l.movementX,l.movementY))}),S(this,r,"f").call(this),this.onmousedown=()=>{S(this,e,"f")&&(document.body.style.cursor="grabbing",this.onmousemove=({movementX:l,movementY:h})=>{S(this,t,"f").call(this,l,h)},this.onmouseup=()=>{document.body.style.cursor="grab",this.onmousemove=null,this.onmouseup=null})}}get isMovable(){return!0}get canvasTransform(){return[`scale(${this.scale})`,`translate(${this.panX}px, ${this.panY}px)`]}disconnectedCallback(){document.removeEventListener("keyup",S(this,s,"f")),document.removeEventListener("keydown",S(this,o,"f")),super.disconnectedCallback()}updated(a){super.updated(a),a.has("scale")&&this.dispatchEvent(new CustomEvent("scalechange",{detail:{scale:this.scale}})),(a.has("panX")||a.has("panY"))&&this.dispatchEvent(new CustomEvent("positionchange",{detail:{x:this.panX,y:this.panY}}))}onTouchPan(a){this.panX+=a.x/this.scale,this.panY+=a.y/this.scale}onTouchPinch(a){this.scale*=1-a/1e3}}return e=new WeakMap,t=new WeakMap,o=new WeakMap,s=new WeakMap,r=new WeakMap,D([_({attribute:!1})],n.prototype,"panX",void 0),D([_({attribute:!1})],n.prototype,"panY",void 0),D([_({attribute:!1})],n.prototype,"scale",void 0),D([_({type:Number,attribute:"zoom-speed"})],n.prototype,"zoomSpeed",void 0),D([_({type:Number,attribute:"pan-speed"})],n.prototype,"panSpeed",void 0),n},$i=({guide:i,reverseScale:e})=>{const t=Math.abs(i.points[0].x-i.points[1].x),o=Math.abs(i.points[0].y-i.points[1].y);return t===0&&o===0?null:A`
    <line
      class="distance-line"
      x1=${i.points[0].x}
      y1=${i.points[0].y}
      x2=${i.points[1].x}
      y2=${i.points[1].y}
    />

    ${i.bisector&&A`
        <line
          class="distance-line"
          x1=${i.bisector[0].x}
          y1=${i.bisector[0].y}
          x2=${i.bisector[1].x}
          y2=${i.bisector[1].y}
          style=${te({strokeDasharray:`${4*e}`})}
          shape-rendering="geometricPrecision"
          fill="none"
        />
      `}
  `},xi=({guide:i,reverseScale:e,fontSize:t})=>{const o=Math.abs(i.points[0].x-i.points[1].x),s=Math.abs(i.points[0].y-i.points[1].y);if(o===0&&s===0)return null;const r=Ae(Math.max(o,s)).toString(10),n=r.length*t*.5,c=t*.25,a=t*.25,d=t*.5,l=o>s?(i.points[0].x+i.points[1].x)/2-n/2:i.points[0].x,h=o>s?i.points[0].y:(i.points[0].y+i.points[1].y)/2-t/2,f=[`scale(${e})`,o>s?`translate(0, ${c+a})`:`translate(${c+d}, 0)`].join(" "),g=l+n/2,u=h+t/2,m=o>s?`${g} ${h}`:`${l} ${u}`;return A`
    <g class="distance-tooltip">
      <rect
        x=${l-d}
        y=${h-a}
        rx="2"
        width=${n+d*2}
        height=${t+a*2}
        transform=${f}
        transform-origin=${m}
        stroke="none"
      />

      <text
        x=${g}
        y=${h+t-a/2}
        text-anchor="middle"
        transform=${f}
        transform-origin=${m}
        stroke="none"
        fill="white"
        style="font-size: ${t}px"
      >
        ${r}
      </text>
    </g>
  `},Qe=new Map,wi=({node:i,distanceTo:e,reverseScale:t,fontSize:o})=>{const s=i.id+`
`+e.id;let r=Qe.get(s);return r||(r=fi(i.absoluteBoundingBox,e.absoluteBoundingBox),Qe.set(s,r)),[...r.map(n=>$i({guide:n,reverseScale:t})),...r.map(n=>xi({guide:n,reverseScale:t,fontSize:o}))]},_i=B`
  .distance-line {
    shape-rendering: geometricPrecision;
    fill: none;
    opacity: 0;
  }

  .distance-tooltip {
    opacity: 0;
  }

  .guide:hover ~ .distance-line,
  .guide:hover ~ .distance-tooltip {
    opacity: 1;
  }
`,Ei=({onClick:i=()=>{}})=>A`
  <svg @click=${i} title="close icon" width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M1 19L19 1M19 19L1 1" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Et=({onClick:i=()=>{}})=>A`
  <svg @click=${i} title="copy icon" width="14" height="14" viewBox="0 0 30 30" fill="none">
  <path d="M21 25.5C21 24.9477 20.5523 24.5 20 24.5C19.4477 24.5 19 24.9477 19 25.5H21ZM13 2H25V0H13V2ZM28 5V21H30V5H28ZM25 24H13V26H25V24ZM10 21V5H8V21H10ZM13 24C11.3431 24 10 22.6569 10 21H8C8 23.7614 10.2386 26 13 26V24ZM28 21C28 22.6569 26.6569 24 25 24V26C27.7614 26 30 23.7614 30 21H28ZM25 2C26.6569 2 28 3.34315 28 5H30C30 2.23858 27.7614 0 25 0V2ZM13 0C10.2386 0 8 2.23858 8 5H10C10 3.34315 11.3431 2 13 2V0ZM16.5 28H5V30H16.5V28ZM2 25V10H0V25H2ZM5 28C3.34315 28 2 26.6569 2 25H0C0 27.7614 2.23858 30 5 30V28ZM5 7H8V5H5V7ZM2 10C2 8.34315 3.34315 7 5 7V5C2.23858 5 0 7.23858 0 10H2ZM16.5 30C18.9853 30 21 27.9853 21 25.5H19C19 26.8807 17.8807 28 16.5 28V30Z" fill="#B3B3B3"/>
</svg>
`,Ai=()=>A`
  <svg title="horizontal padding" width="14" height="14" viewBox="0 0 29 28" fill="none">
    <rect x="7" y="8" width="14" height="14" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M27 1V28" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 0V28" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Si=()=>A`
  <svg title="vertical padding" width="14" height="14" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="21" width="14" height="14" transform="rotate(-90 8 21)" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 1L28 0.999999" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M0 27L28 27" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Ci=()=>A`
  <svg title="figma logo" width="11" height="16" viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 1.5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm-5 2c0 1.043.533 1.963 1.341 2.5C1.033 6.537.5 7.457.5 8.5c0 1.043.533 1.963 1.341 2.5C1.033 11.537.5 12.457.5 13.5c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3V10.736c.53.475 1.232.764 2 .764 1.657 0 3-1.343 3-3 0-1.043-.533-1.963-1.341-2.5.808-.537 1.341-1.457 1.341-2.5 0-1.657-1.343-3-3-3h-5c-1.657 0-3 1.343-3 3zm1 5c0-1.105.895-2 2-2h2v4h-2c-1.105 0-2-.895-2-2zm0 5c0-1.105.895-2 2-2h2v2c0 1.105-.895 2-2 2-1.105 0-2-.895-2-2zm7-3c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2 1.105 0 2 .895 2 2 0 1.105-.895 2-2 2zm0-5h-2v-4h2c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2z"
      fill-rule="evenodd"
      fill-opacity="1"
      fill="#000"
      stroke="none"
    ></path>
  </svg>
`,j=i=>i.a===0?"transparent":i.a<1?`rgba(${At(i).join(", ")}, ${i.a.toFixed(2)})`:Ti(i),ki=i=>new Mi(i).cssColor;class Mi{constructor(e){this.gradientHandles={start:e.gradientHandlePositions[0],end:e.gradientHandlePositions[1]},this.colors=e.gradientStops,this.colorObjects=this.createColorObjects(this.colors),this.angle=this.calculateAngle(this.gradientHandles.start,this.gradientHandles.end)}get cssGradientArray(){return this.colorObjects.map((e,t)=>{const o=this.floatToPercent(this.colors[t].position);return e+" "+o})}get cssColor(){const e=this.cssGradientArray;return e.unshift(this.angle+"deg"),`linear-gradient(${e.join(", ")})`}createColorObjects(e){return e.map(({color:t})=>j(t))}floatToPercent(e){return(e*=100).toFixed(0)+"%"}calculateAngle(e,t){const o=Math.atan(this.calculateGradient(e,t));return parseInt(this.radToDeg(o).toFixed(1))}calculateGradient(e,t){return(t.y-e.y)/(t.x-e.x)*-1}radToDeg(e){return 180*e/Math.PI}}class Pi{constructor(e){var t,o,s;if(this.hasPadding=!1,this.height=`${Math.trunc(e.absoluteBoundingBox.height)}px`,this.width=`${Math.trunc(e.absoluteBoundingBox.width)}px`,(e.horizontalPadding||e.verticalPadding)&&(this.hasPadding=!0,this.horizontalPadding=`${e.horizontalPadding}px`,this.verticalPadding=`${e.verticalPadding}px`),e.style&&(this.fontFamily=e.style.fontFamily,this.fontPostScriptName=(t=e.style.fontPostScriptName)===null||t===void 0?void 0:t.replace("-"," "),this.fontWeight=e.style.fontWeight,this.fontSize=`${Math.ceil(e.style.fontSize)}px`,this.lineHeight=`${Math.trunc(e.style.lineHeightPx)}px`),e.rectangleCornerRadii&&(this.borderRadius=e.rectangleCornerRadii.filter(n=>n===e.cornerRadius).length<4?`${e.rectangleCornerRadii.join("px ")}px`:`${e.cornerRadius}px`),e.backgroundColor||e.backgroundColor){const n=e.backgroundColor||((o=e.background)===null||o===void 0?void 0:o[0].color);this.background=j(n)}const r=(s=e.fills)===null||s===void 0?void 0:s[0];if(r&&r.visible!==!1&&(e.type==="TEXT"?this.color=j(r.color):r.type.includes("GRADIENT")?this.backgroundImage=ki(r):r.type==="SOLID"&&(this.background=j(r.color))),e.strokes&&e.strokes.length>0&&(this.borderColor=j(e.strokes[0].color),this.border=`${e.strokeWeight}px solid ${this.borderColor}`),e.effects&&e.effects.length>0){const{offset:n,radius:c,color:a}=e.effects[0];this.boxShadowColor=j(a),this.boxShadow=`${(n==null?void 0:n.x)||0}px ${(n==null?void 0:n.y)||0}px 0 ${c} ${this.boxShadowColor}`}}getStyles(){return[this.height&&{property:"height",value:this.height},this.width&&{property:"width",value:this.width},this.fontFamily&&{property:"font-family",value:this.fontFamily},this.fontSize&&{property:"font-size",value:this.fontSize},this.fontWeight&&{property:"font-weight",value:this.fontWeight},this.lineHeight&&{property:"line-height",value:this.lineHeight},this.borderRadius&&{property:"border-radius",value:this.borderRadius},this.backgroundImage&&{property:"background-image",value:this.backgroundImage},this.boxShadow&&{property:"box-shadow",value:this.boxShadow,color:this.boxShadowColor},this.border&&{property:"border",value:this.border,color:this.borderColor},this.background&&{property:"background",value:this.background,color:this.background},this.color&&{property:"color",value:this.color,color:this.color}].filter(Boolean)}getStyleSheet(){return this.getStyles().map(St).join(`
`)}}const At=i=>[Math.trunc(255*i.r),Math.trunc(255*i.g),Math.trunc(255*i.b)],Ti=i=>{const[e,t,o]=At(i);return"#"+((1<<24)+(e<<16)+(t<<8)+o).toString(16).slice(1)},St=({property:i,value:e})=>`${i}: ${e};`;var Ni=function(i,e,t,o){function s(r){return r instanceof t?r:new t(function(n){n(r)})}return new(t||(t=Promise))(function(r,n){function c(l){try{d(o.next(l))}catch(h){n(h)}}function a(l){try{d(o.throw(l))}catch(h){n(h)}}function d(l){l.done?r(l.value):s(l.value).then(c,a)}d((o=o.apply(i,e||[])).next())})};const Re=i=>Ni(void 0,void 0,void 0,function*(){yield navigator.clipboard.writeText(i)}),Bi=({node:i,onClose:e})=>{if(!i)return null;const t=new Pi(i),o=s=>s.stopPropagation();return b`
    <div
      class="inspector-view"
      @click=${o}
      @wheel=${o}
      @keydown=${o}
      @keyup=${o}
      @pointermove=${o}
    >
      <div class="inspector-section selectable-content">
        <div class="title-section">
          <h4>${i.name}</h4>
          ${Ei({onClick:e})}
        </div>
        <div class="properties-overview">
          <div class="title-section">
            <p class="inspector-property">
              <span>W: </span>${t.width}
            </p>
            <p class="inspector-property" style="margin-left: 16px;">
              <span>H: </span>${t.height}
            </p>
          </div>
          ${t.fontPostScriptName?b`<p class="inspector-property">
                <span>Font:</span>
                ${t.fontPostScriptName}
              </p>`:null}
        </div>
      </div>
      ${t.hasPadding?b`<div class="inspector-section">
            <h4>Layout</h4>
            ${t.horizontalPadding&&b`<p class="inspector-property">
              ${Ai()} ${t.horizontalPadding}
            </p>`}
            ${t.verticalPadding&&b`<p class="inspector-property">
              ${Si()} ${t.verticalPadding}
            </p>`}
          </div>`:null}
      ${i.characters?b`<div class="inspector-section">
            <div class="title-section">
              <h4>Content</h4>
              ${Et({onClick:()=>Re(i.characters)})}
            </div>
            <p class="node-content code-section selectable-content">
              ${i.characters}
            </p>
          </div>`:null}
      ${Ri(t)}
    </div>
  `},Ri=i=>{const e=()=>Re(i.getStyleSheet()),t=i.getStyles();return b`<div class="inspector-section">
    <div class="title-section style-section">
      <h4>CSS</h4>
      ${Et({onClick:e})}
    </div>
    <div class="code-section selectable-content">
      ${t.map(ji)}
    </div>
  </div>`},ji=i=>{const{property:e,value:t,color:o}=i;let s=null;switch(e){case"background":case"fill":case"border":case"box-shadow":case"color":s=b`<span
        class="color-preview"
        style="background-color: ${o}"
      ></span>`;break;case"background-image":s=b`<span
        class="color-preview"
        style="background-image: ${t}"
      ></span>`;break}return b`<div class="css-property" @click=${()=>Re(St(i))}>
    <span>${e}:</span>${s}<span class="css-value">${t}</span>;</span>
  </div>`},Oi=B`
  .inspector-view {
    height: 100%;
    width: 300px;
    position: absolute;
    right: 0;
    background: white;
    border-left: 1px solid #ccc;
    overflow-y: auto;
    z-index: calc(var(--z-index) + 2);
  }

  .inspector-view h4 {
    font-size: 16px;
    margin: 0;
  }

  .style-section {
    margin-bottom: 12px;
  }

  .title-section {
    display: flex;
    align-items: center;
  }

  .code-section {
    padding: 8px;
    background: #f3f3f3;
    font-family: monospace;
  }

  .title-section svg {
    cursor: pointer;
    margin-left: auto;
  }

  .inspector-section {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .properties-overview {
    font-family: monospace;
    color: #518785;
  }

  .properties-overview p span {
    color: #121212;
  }

  .inspector-property {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .inspector-property span {
    color: #b3b3b3;
    margin-right: 4px;
  }

  .inspector-property svg {
    margin-right: 8px;
  }

  .css-property {
    margin: 8px;
    transition: background-color ease-in-out 100ms;
  }

  .css-property:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }

  .css-value {
    color: #518785;
    margin-left: 4px;
  }

  .color-preview {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    margin-left: 4px;
    vertical-align: middle;
  }

  .selectable-content {
    cursor: text;
    user-select: text;
  }
`,et=({node:i,selected:e=!1,computedThickness:t,onClick:o})=>{const{x:s,y:r,width:n,height:c}=i.absoluteBoundingBox,a="cornerRadius"in i&&i.cornerRadius?{topLeft:i.cornerRadius,topRight:i.cornerRadius,bottomRight:i.cornerRadius,bottomLeft:i.cornerRadius}:"rectangleCornerRadii"in i&&i.rectangleCornerRadii?{topLeft:i.rectangleCornerRadii[0],topRight:i.rectangleCornerRadii[1],bottomRight:i.rectangleCornerRadii[2],bottomLeft:i.rectangleCornerRadii[3]}:{topLeft:0,topRight:0,bottomRight:0,bottomLeft:0},d=t/2,l=(u,m)=>`M${u},${m}`,h=(u,m)=>`L${u},${m}`,f=(u,m,$)=>`A${u},${u} 0 0 1 ${m},${$}`,g=[l(a.topLeft+d,d),h(n-a.topRight,d),f(a.topRight-d,n-d,a.topRight),h(n-d,c-a.bottomRight),f(a.bottomRight-d,n-a.bottomRight,c-d),h(a.bottomLeft,c-d),f(a.bottomLeft-d,d,c-a.bottomLeft),h(d,a.topLeft),f(a.topLeft-d,a.topLeft,d),"Z"].join(" ");return A`
    <path
      class="guide"
      d=${g}
      shape-rendering="geometricPrecision"
      fill="none"
      transform="translate(${s}, ${r})"
      ?data-selected=${e}
      @click=${o}
    />
  `},Hi=({nodeSize:{x:i,y:e,width:t,height:o},offsetX:s,offsetY:r,reverseScale:n})=>{const c={top:`${r+e+o}px`,left:`${s+i+t/2}px`,transform:`translateX(-50%) scale(${n}) translateY(0.25em)`};return b`
    <div class="tooltip" style="${te(c)}">
      ${Ae(t)} x ${Ae(o)}
    </div>
  `},Li=B`
  .guide {
    /*
     * SVGs cannot be pixel perfect, especially floating values.
     * Since many platform renders them visually incorrectly (probably they
     * are following the spec), it's safe to set overflow to visible.
     * Cropped borders are hard to visible and ugly.
     */
    overflow: visible;

    pointer-events: all;

    opacity: 0;
  }
  .guide:hover {
    opacity: 1;
  }
  .guide[data-selected] {
    opacity: 1;
    stroke: var(--guide-selected-color);
  }

  .tooltip {
    position: absolute;
    padding: 0.25em 0.5em;
    font-size: var(--guide-tooltip-font-size);

    color: var(--guide-selected-tooltip-fg);
    background-color: var(--guide-selected-tooltip-bg);
    border-radius: 2px;
    pointer-events: none;
    z-index: calc(var(--z-index) + 1);

    transform-origin: top center;
  }
`,Se=1e3,Ce=60*Se,ke=60*Ce,W=24*ke,tt=7*W,it=30*W,ot=365*W,zi=[{gte:ot,divisor:ot,unit:"year"},{gte:it,divisor:it,unit:"month"},{gte:tt,divisor:tt,unit:"week"},{gte:W,divisor:W,unit:"day"},{gte:ke,divisor:ke,unit:"hour"},{gte:Ce,divisor:Ce,unit:"minute"},{gte:30*Se,divisor:Se,unit:"seconds"},{gte:0,divisor:1,text:"just now"}],st=i=>(typeof i=="object"?i:new Date(i)).getTime(),Ii=(i,e=Date.now(),t=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}))=>{const s=st(e)-st(i),r=Math.abs(s);for(const n of zi)if(r>=n.gte){const c=Math.round(Math.abs(s)/n.divisor),a=s<0,d=n.unit;return d?t.format(a?c:-c,d):n.text}},Fi=B`
  .figma-footer {
    flex: 0;
    z-index: calc(var(--z-index) + 1);
    border-top: 1px solid #ccc;
    min-height: 48px;
    padding: 0 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    overflow-x: auto;
    cursor: pointer;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
  }

  .figma-footer--icon {
    margin-right: 12px;
  }

  .figma-footer--title {
    font-weight: 600;
    margin-right: 4px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .figma-footer--timestamp {
    white-space: nowrap;
    overflow: hidden;
  }
`,Di=i=>{if(!i||!i.link||i.link===void 0||i.link==="undefined")return null;const{link:e,timestamp:t,fileName:o}=i;return b`<a
    class="figma-footer"
    target="_blank"
    rel="noopener"
    title="Open in Figma"
    href="${e}"
  >
    <span class="figma-footer--icon"> ${Ci()} </span>
    <span class="figma-footer--title"> ${o} </span>
    <span
      title="Last time edited: ${new Date(t).toUTCString()}"
      class="figma-footer--timestamp"
    >
      Edited ${Ii(t)}
    </span>
  </a>`};var rt=function(i,e,t,o){var s=arguments.length,r=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,o);else for(var c=i.length-1;c>=0;c--)(n=i[c])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},x=function(i,e,t,o){if(t==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!o:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?o:t==="a"?o.call(i):o?o.value:e.get(i)},be=function(i,e,t,o,s){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?i!==e||!s:!e.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?s.call(i,t):s?s.value=t:e.set(i,t),t};const Ct=i=>{var e,t,o,s,r;class n extends mi(yi(i)){constructor(...a){super(...a),this.zoomMargin=50,this.link="",e.set(this,void 0),t.set(this,void 0),o.set(this,void 0),s.set(this,d=>l=>{l.preventDefault(),l.stopPropagation(),this.selectedNode=d}),r.set(this,d=>{var l,h;return(h=(l=x(this,o,"f"))===null||l===void 0?void 0:l.find(f=>f.id===d))!==null&&h!==void 0?h:null})}static get styles(){const a=super.styles;return _t(a,[B`
          :host {
            --default-error-bg: #fff;
            --default-error-fg: #333;

            --bg: var(--figspec-viewer-bg, #e5e5e5);
            --z-index: var(--figspec-viewer-z-index, 0);
            --error-bg: var(--figspec-viewer-error-bg, var(--default-error-bg));
            --error-fg: var(--figspec-viewer-error-fg, var(--default-error-fg));
            --error-color: var(--figspec-viewer-error-color, tomato);

            --guide-thickness: var(--figspec-viewer-guide-thickness, 1.5px);
            --guide-color: var(--figspec-viewer-guide-color, tomato);
            --guide-selected-color: var(
              --figspec-viewer-guide-selected-color,
              dodgerblue
            );
            --guide-tooltip-fg: var(--figspec-viewer-guide-tooltip-fg, white);
            --guide-selected-tooltip-fg: var(
              --figspec-viewer-guide-selected-tooltip-fg,
              white
            );
            --guide-tooltip-bg: var(
              --figspec-viewer-guide-tooltip-bg,
              var(--guide-color)
            );
            --guide-selected-tooltip-bg: var(
              --figspec-viewer-guide-selected-tooltip-bg,
              var(--guide-selected-color)
            );
            --guide-tooltip-font-size: var(
              --figspec-viewer-guide-tooltip-font-size,
              12px
            );

            position: relative;
            display: block;

            background-color: var(--bg);
            user-select: none;
            overflow: hidden;
            z-index: var(--z-index);
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --default-error-bg: #222;
              --default-error-fg: #fff;
            }
          }

          .spec-canvas-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column-reverse;
          }

          .canvas {
            position: absolute;
            top: 50%;
            left: 50%;
            flex: 1;
          }

          .rendered-image {
            position: absolute;
            top: 0;
            left: 0;
          }

          .guides {
            position: absolute;

            overflow: visible;
            stroke: var(--guide-color);
            fill: var(--guide-color);
            pointer-events: none;
            z-index: calc(var(--z-index) + 2);
          }
        `,Li,ci,_i,Oi,Fi])}get __images(){return{}}deselectNode(){this.selectedNode=null}get error(){return!x(this,e,"f")||!x(this,o,"f")?L({title:"Error",children:"Please call `__updateTree/1` method with a valid parameter."}):null}render(){if(this.error)return this.error instanceof Error?L({title:this.error.name||"Error",children:this.error.message}):typeof this.error=="string"?L({title:"Error",children:this.error}):this.error;const a=x(this,e,"f"),d=1/this.scale,l=`calc(var(--guide-thickness) * ${d})`,h=parseFloat(getComputedStyle(this).getPropertyValue("--guide-thickness")),f=parseFloat(getComputedStyle(this).getPropertyValue("--guide-tooltip-font-size"));return b`
        <div class="spec-canvas-wrapper" @click=${this.deselectNode}>
          <div
            class="canvas"
            style="
          width: ${a.width}px;
          height: ${a.height}px;

          transform: translate(-50%, -50%) ${this.canvasTransform.join(" ")}
        "
          >
            ${Object.entries(this.__images).map(([g,u])=>{var m;const $=x(this,r,"f").call(this,g);if(!$||!("absoluteBoundingBox"in $)||!(!((m=x(this,t,"f"))===null||m===void 0)&&m[$.id]))return null;const v=x(this,t,"f")[$.id];return b`
                <img
                  class="rendered-image"
                  src="${u}"
                  style=${te({top:`${$.absoluteBoundingBox.y-a.y}px`,left:`${$.absoluteBoundingBox.x-a.x}px`,marginTop:`${-v.top}px`,marginLeft:`${-v.left}px`,width:$.absoluteBoundingBox.width+v.left+v.right+"px",height:$.absoluteBoundingBox.height+v.top+v.bottom+"px"})}
                />
              `})}
            ${this.selectedNode&&Hi({nodeSize:this.selectedNode.absoluteBoundingBox,offsetX:-a.x,offsetY:-a.y,reverseScale:d})}
            ${A`
            <svg
              class="guides"
              viewBox="0 0 ${a.width} ${a.height}"
              width=${a.width}
              height=${a.height}
              style=${te({left:`${-a.x}px`,top:`${-a.y}px`,strokeWidth:l})}
            >
              ${this.selectedNode&&et({node:this.selectedNode,selected:!0,computedThickness:h*d})}

              ${x(this,o,"f").map(g=>{var u;return g.id===((u=this.selectedNode)===null||u===void 0?void 0:u.id)?null:A`
                  <g>
                    ${et({node:g,computedThickness:h*d,onClick:x(this,s,"f").call(this,g)})}
                    ${this.selectedNode&&wi({node:g,distanceTo:this.selectedNode,reverseScale:d,fontSize:f})}
                  </g>
                `})}
            </svg>
          `}
          </div>
          ${Bi({node:this.selectedNode,onClose:this.deselectNode})}
          ${Di(this.getMetadata())}
        </div>
      `}getMetadata(){}connectedCallback(){super.connectedCallback(),this.resetZoom()}updated(a){super.updated(a)}__updateTree(a){if(!(a.type==="CANVAS"||a.type==="FRAME"||a.type==="COMPONENT"||a.type==="COMPONENT_SET"))throw new Error("Cannot update node tree: Top level node MUST be one of CANVAS, FRAME, COMPONENT, or COMPONENT_SET");be(this,e,a.type==="CANVAS"?Ui(a):a.absoluteBoundingBox,"f"),be(this,o,ie(a),"f"),this.requestUpdate()}__updateEffectMargins(){if(!this.__images)return;const a=Object.keys(this.__images).map(x(this,r,"f")).filter(d=>!!d);be(this,t,a.reduce((d,l)=>"absoluteBoundingBox"in l?Object.assign(Object.assign({},d),{[l.id]:Vi(l,ie(l))}):d,{}),"f"),this.requestUpdate()}resetZoom(){if(x(this,e,"f")){const{width:a,height:d}=x(this,e,"f"),{width:l,height:h}=this.getBoundingClientRect(),f=l/(a+this.zoomMargin*2),g=h/(d+this.zoomMargin*2);this.scale=Math.min(f,g,1)}}}return e=new WeakMap,t=new WeakMap,o=new WeakMap,s=new WeakMap,r=new WeakMap,rt([_({type:Number,attribute:"zoom-margin"})],n.prototype,"zoomMargin",void 0),rt([_({type:String,attribute:"link"})],n.prototype,"link",void 0),n};function Ui(i){const e=[],t=[],o=[],s=[];for(const c of i.children){if(c.type!=="FRAME"&&c.type!=="COMPONENT")continue;const{x:a,y:d,width:l,height:h}=c.absoluteBoundingBox;e.push(a),t.push(a+l),o.push(d),s.push(d+h)}const r=Math.min(...e),n=Math.min(...o);return{x:r,y:n,width:Math.abs(Math.max(...t)-r),height:Math.abs(Math.min(...s)-n)}}function Vi(i,e){const t=e.map(s=>{if(!("effects"in s))return{top:s.absoluteBoundingBox.y,right:s.absoluteBoundingBox.x+s.absoluteBoundingBox.width,bottom:s.absoluteBoundingBox.y+s.absoluteBoundingBox.height,left:s.absoluteBoundingBox.x};const r=s.effects.filter(a=>a.visible&&a.type==="LAYER_BLUR").map(a=>a.radius),n=s.effects.filter(a=>a.visible&&a.type==="DROP_SHADOW"&&!!a.offset).map(a=>({left:a.radius-a.offset.x,top:a.radius-a.offset.y,right:a.radius+a.offset.x,bottom:a.radius+a.offset.y})),c={top:Math.max(0,...r,...n.map(a=>a.top)),right:Math.max(0,...r,...n.map(a=>a.right)),bottom:Math.max(0,...r,...n.map(a=>a.bottom)),left:Math.max(0,...r,...n.map(a=>a.left))};return{top:s.absoluteBoundingBox.y-c.top,right:s.absoluteBoundingBox.x+s.absoluteBoundingBox.width+c.right,bottom:s.absoluteBoundingBox.y+s.absoluteBoundingBox.height+c.bottom,left:s.absoluteBoundingBox.x-c.left}}),o={top:Math.min(...t.map(s=>s.top)),right:Math.max(...t.map(s=>s.right)),bottom:Math.max(...t.map(s=>s.bottom)),left:Math.min(...t.map(s=>s.left))};return{top:i.absoluteBoundingBox.y-o.top,right:o.right-i.absoluteBoundingBox.x-i.absoluteBoundingBox.width,bottom:o.bottom-i.absoluteBoundingBox.y-i.absoluteBoundingBox.height,left:i.absoluteBoundingBox.x-o.left}}function ie(i,e=0){return"absoluteBoundingBox"in i?!("children"in i)||i.children.length===0?[Object.assign(Object.assign({},i),{depth:e})]:[Object.assign(Object.assign({},i),{depth:e}),...i.children.map(t=>ie(t,e+1)).flat()]:i.children.map(t=>ie(t,e+1)).flat()}var kt=function(i,e,t,o){var s=arguments.length,r=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,o);else for(var c=i.length-1;c>=0;c--)(n=i[c])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let ae=class extends Ct(H){constructor(){super(...arguments),this.nodes=null,this.renderedImage=null}get isMovable(){return!!(this.nodes&&this.renderedImage&&this.documentNode)}get documentNode(){if(!this.nodes)return null;const e=Object.values(this.nodes.nodes)[0];return!e||!("absoluteBoundingBox"in e.document)?null:e.document}get __images(){return!this.documentNode||!this.renderedImage?{}:{[this.documentNode.id]:this.renderedImage}}get error(){if(!this.nodes||!this.renderedImage)return L({title:"Parameter error",children:b`<span>
          Both <code>nodes</code> and <code>rendered-image</code> are required.
        </span>`});if(!this.documentNode)return L({title:"Parameter Error",children:b`
          <span> Document node is empty or does not have size. </span>
        `});if(super.error)return super.error}getMetadata(){return{fileName:this.nodes.name,timestamp:this.nodes.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(this.__updateTree(this.documentNode),this.__updateEffectMargins(),this.resetZoom())}updated(e){if(super.updated(e),e.has("nodes")){if(!this.documentNode)return;this.__updateTree(this.documentNode),this.resetZoom()}e.has("renderedImage")&&this.__updateEffectMargins()}};kt([_({type:Object})],ae.prototype,"nodes",void 0);kt([_({type:String,attribute:"rendered-image"})],ae.prototype,"renderedImage",void 0);var Mt=function(i,e,t,o){var s=arguments.length,r=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,o);else for(var c=i.length-1;c>=0;c--)(n=i[c])&&(r=(s<3?n(r):s>3?n(e,t,r):n(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},ye=function(i,e,t,o){if(t==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!o:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?o:t==="a"?o.call(i):o?o.value:e.get(i)},K,Me;let le=class extends Ct(H){constructor(){super(...arguments),this.documentNode=null,this.renderedImages=null,this.selectedPage=null,K.set(this,()=>{var e;if(!this.documentNode){this.selectedPage=null;return}this.selectedPage=(e=this.documentNode.document.children.filter(t=>t.type==="CANVAS")[0])!==null&&e!==void 0?e:null}),Me.set(this,e=>{var t,o;const s=e.currentTarget;this.selectedPage=(o=(t=this.documentNode)===null||t===void 0?void 0:t.document.children.find(r=>r.id===s.value))!==null&&o!==void 0?o:null,this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom(),this.__updateEffectMargins(),this.panX=0,this.panY=0)})}get isMovable(){return!!(this.renderedImages&&this.documentNode)}get __images(){return this.renderedImages||{}}get error(){if(!this.documentNode||!this.renderedImages)return L({title:"Parameter error",children:b`<span>
          Both <code>document-node</code> and <code>rendered-images</code> are
          required.
        </span>`});if(super.error)return super.error}static get styles(){return _t(super.styles,[B`
        :host {
          --figspec-control-bg-default: #fcfcfc;
          --figspec-control-fg-default: #333;

          --control-bg: var(
            --figspec-control-bg,
            var(--figspec-control-bg-default)
          );
          --control-fg: var(
            --figspec-control-bg,
            var(--figspec-control-fg-default)
          );
          --control-shadow: var(
            --figspec-control-shadow,
            0 2px 4px rgba(0, 0, 0, 0.3)
          );
          --padding: var(--figspec-control-padding, 8px 16px);

          display: flex;
          flex-direction: column;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --figspec-control-bg-default: #222;
            --figspec-control-fg-default: #fff;
          }
        }

        .controls {
          flex-shrink: 0;
          padding: var(--padding);

          background-color: var(--control-bg);
          box-shadow: var(--control-shadow);
          color: var(--control-fg);
          z-index: 1;
        }

        .view {
          position: relative;
          flex-grow: 1;
          flex-shrink: 1;
        }
      `])}render(){var e;return b`
      <div class="controls">
        <select @change=${ye(this,Me,"f")}>
          ${(e=this.documentNode)===null||e===void 0?void 0:e.document.children.map(t=>b`<option value=${t.id}>${t.name}</option>`)}
        </select>
      </div>

      <div class="view">${super.render()}</div>
    `}getMetadata(){return{fileName:this.documentNode.name,timestamp:this.documentNode.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(ye(this,K,"f").call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom()))}updated(e){super.updated(e),e.has("documentNode")&&(ye(this,K,"f").call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom())),e.has("renderedImages")&&this.__updateEffectMargins()}};K=new WeakMap,Me=new WeakMap;Mt([_({type:Object,attribute:"document-node"})],le.prototype,"documentNode",void 0);Mt([_({type:Object,attribute:"rendered-images"})],le.prototype,"renderedImages",void 0);customElements.get("figspec-file-viewer")||customElements.define("figspec-file-viewer",le);customElements.get("figspec-frame-viewer")||customElements.define("figspec-frame-viewer",ae);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yi=new Set(["children","localName","ref","style","className"]),nt=new WeakMap,Wi=(i,e,t,o,s)=>{const r=s==null?void 0:s[e];r===void 0||t===o?t==null&&e in HTMLElement.prototype?i.removeAttribute(e):i[e]=t:((n,c,a)=>{let d=nt.get(n);d===void 0&&nt.set(n,d=new Map);let l=d.get(c);a!==void 0?l===void 0?(d.set(c,l={handleEvent:a}),n.addEventListener(c,l)):l.handleEvent=a:l!==void 0&&(d.delete(c),n.removeEventListener(c,l))})(i,r,t)},Xi=(i,e)=>{typeof i=="function"?i(e):i.current=e};function Pt(i=window.React,e,t,o,s){let r,n,c;if(e===void 0){const g=i;({tagName:n,elementClass:c,events:o,displayName:s}=g),r=g.react}else r=i,c=t,n=e;const a=r.Component,d=r.createElement,l=new Set(Object.keys(o??{}));class h extends a{constructor(){super(...arguments),this.o=null}t(u){if(this.o!==null)for(const m in this.i)Wi(this.o,m,this.props[m],u?u[m]:void 0,o)}componentDidMount(){var u;this.t(),(u=this.o)===null||u===void 0||u.removeAttribute("defer-hydration")}componentDidUpdate(u){this.t(u)}render(){const{_$Gl:u,...m}=this.props;this.h!==u&&(this.u=v=>{u!==null&&Xi(u,v),this.o=v,this.h=u}),this.i={};const $={ref:this.u};for(const[v,de]of Object.entries(m))Yi.has(v)?$[v==="className"?"class":v]=de:l.has(v)||v in c.prototype?this.i[v]=de:$[v]=de;return $.suppressHydrationWarning=!0,d(n,$)}}h.displayName=s??c.name;const f=r.forwardRef((g,u)=>d(h,{...g,_$Gl:u},g==null?void 0:g.children));return f.displayName=h.displayName,f}const Zi=Pt(ut,"figspec-frame-viewer",ae,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"}),Gi=Pt(ut,"figspec-file-viewer",le,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"});var qi={},Ki=Object.defineProperty,je=(i,e)=>()=>(i&&(e=i(i=0)),e),Ji=(i,e)=>{for(var t in e)Ki(i,t,{get:e[t],enumerable:!0})},Tt,at,lt,ct,ce=je(()=>{Tt=({config:i,defer:e=!1})=>{let[t,o]=w.useState(e?void 0:i.url),[s,r]=w.useState(!1);return w.useEffect(()=>{if(!e)return;let n=requestAnimationFrame(()=>{o(i.url)});return()=>cancelAnimationFrame(n)},[e,i.url]),w.useEffect(()=>{r(!1)},[t]),E("div",{css:at},!s&&E(J,{css:lt},"Loading..."),E("iframe",{css:ct,src:t,allowFullScreen:i.allowFullscreen,onLoad:()=>r(!0)}))},at=C`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`,lt=C`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`,ct=C`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`}),Pe,dt,Nt,Oe=je(()=>{ce(),Pe=/https:\/\/[\w.-]+\.?figma.com\/([\w-]+)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/,dt=i=>Pe.test(i),Nt=({config:i})=>{let e=w.useMemo(()=>dt(i.url)?{url:`https://www.figma.com/embed?embed_host=${i.embedHost||location.hostname}&url=${i.url}`,allowFullscreen:i.allowFullscreen}:(console.warn(`[storybook-addon-designs] The URL you specified is not valid Figma URL.
The addon fallbacks to normal iframe mode.For more detail, please check <https://www.figma.com/developers/embed>.`),i),[i.url,i.allowFullscreen,i.embedHost]);return E(Tt,{defer:!0,config:e})}}),Bt={};Ji(Bt,{Figspec:()=>Te,default:()=>jt});function G(i){return i.status!==200?Promise.reject(i.statusText):i.json()}function Qi(i){if(i.accessToken)return i.accessToken;try{return qi.STORYBOOK_FIGMA_ACCESS_TOKEN??null}catch{return null}}function Rt(i){return"absoluteBoundingBox"in i?[i]:!i.children||i.children.length===0?[]:i.children.map(Rt).reduce((e,t)=>e.concat(t),[])}var $e,Te,jt,Ot=je(()=>{Oe(),$e=C`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,Te=({config:i})=>{let[e,t]=w.useState({state:"loading"}),o=async s=>{t({state:"loading"});try{let r=i.url.match(Pe);if(!r)throw new Error(i.url+" is not a valid Figma URL.");let[,,n]=r,c=new URL(i.url).searchParams.get("node-id"),a=Qi(i);if(!a)throw new Error("Personal Access Token is required.");let d={"X-FIGMA-TOKEN":a},l=new URL(`https://api.figma.com/v1/files/${n}`),h=new URL(`https://api.figma.com/v1/images/${n}`);if(h.searchParams.set("format","svg"),!c){let u=await fetch(l.href,{headers:d,signal:s}).then(v=>G(v)),m=Rt(u.document);h.searchParams.set("ids",m.map(v=>v.id).join(","));let $=await fetch(h.href,{headers:d,signal:s}).then(v=>G(v));t({state:"fetched",value:{type:"file",props:{documentNode:u,renderedImages:$.images,link:i.url}}});return}l.pathname+="/nodes",l.searchParams.set("ids",c),h.searchParams.set("ids",c);let[f,g]=await Promise.all([fetch(l.href,{headers:d,signal:s}).then(u=>G(u)),fetch(h.href,{headers:d,signal:s}).then(u=>G(u))]);t({state:"fetched",value:{type:"frame",props:{nodes:f,renderedImage:Object.values(g.images)[0],link:i.url}}})}catch(r){if(r instanceof DOMException&&r.code===DOMException.ABORT_ERR)return;console.error(r),t({state:"failed",error:r instanceof Error?r.message:String(r)})}};switch(w.useEffect(()=>{let s=!1,r=()=>{s=!0},n=new AbortController;return o(n.signal).then(r,r),()=>{s||n.abort()}},[i.url]),e.state){case"loading":return E(J,null,E(w.Fragment,null,"Loading Figma file..."));case"failed":return E(J,null,E(w.Fragment,null,"Failed to load Figma file"),E(w.Fragment,null,e.error));case"fetched":return e.value.type==="file"?E(Gi,{css:$e,...e.value.props}):E(Zi,{css:$e,...e.value.props})}},jt=Te});Oe();Ot();ce();C`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`;C`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;C`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;C`
  flex-grow: 1;
`;C`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`;Oe();ce();C`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;ce();w.lazy(()=>Promise.resolve().then(()=>(Ot(),Bt)));var eo=oe.div(({theme:i})=>`
  font-family: ${i.typography.fonts.base};
  font-size: ${i.typography.size.s3}px;
  margin: 0;
`),to=oe.div(({theme:i,height:e="60%",collapsed:t})=>`
  position: relative;
  width: 100%;
  height: 0;
  padding: 0;
  padding-top: ${t?"3em":typeof e=="string"?e:e+"px"};
  margin: 25px 0 40px;
  border: 1px solid ${i.appBorderColor};

  border-radius: ${i.appBorderRadius}px;
  box-shadow:
    ${i.base==="light"?"rgba(0, 0, 0, 0.10) 0 1px 3px 0":"rgba(0, 0, 0, 0.20) 0 2px 5px 0"};
`),io=oe(J)`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`,oo=({children:i,collapsable:e=!0,defaultCollapsed:t=!1,placeholder:o,showLink:s=!0,onCollapsedChange:r,...n})=>{let[c,a]=w.useState(!!t),d=s&&"url"in n;return O.createElement(eo,null,O.createElement(to,{collapsed:e&&c,...n},e&&c?O.createElement(io,null,o):i,O.createElement(Ht,{actionItems:[e&&{title:c?"Show":"Hide",onClick:()=>{let l=!c;r&&r(l,c),a(l)}},d&&{title:"Open in new tab",onClick:()=>window.open(n.url,"_blank")}].filter(l=>!!l)})))},U=({placeholder:i,...e})=>O.createElement(oo,{placeholder:i??"Design (Figma)",...e},O.createElement(Nt,{config:{type:"figma",...e}}));oe.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: auto;
`;const so=se.table.withConfig({displayName:"components__Table",componentId:"sc-hc0fwf-0"})(['font-family:"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;width:100%;font-size:14px;border-collapse:collapse;color:#2a2a2a;']),ro=se.thead.withConfig({displayName:"components__TableHead",componentId:"sc-hc0fwf-1"})(["background-color:#f3f3f3;tr{border-bottom:2px solid #dadada;> th + th{border-left:1px solid #dadada}}th{text-align:left;font-weight:700;padding:1rem 0.5rem;}"]),no=se.tbody.withConfig({displayName:"components__TableBody",componentId:"sc-hc0fwf-2"})(["tr{border-bottom:1px solid #dadada;}td{padding:0.75rem 0.5rem;}"]),ao=se.code.withConfig({displayName:"components__Token",componentId:"sc-hc0fwf-3"})(["background:#f3f3f3;border:1px solid #dadada;border-radius:4px;padding:0.25rem 0.5rem;"]),lo=({scale:i})=>{const e=Object.keys(i);return p.jsxs(so,{children:[p.jsx(ro,{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Size"}),p.jsx("th",{children:"rem"}),p.jsx("th",{children:"px"}),p.jsx("th",{children:"Example"})]})}),p.jsx(no,{children:e.map(t=>p.jsxs("tr",{children:[p.jsx("td",{children:p.jsxs(ao,{children:["theme.space.",t]})}),p.jsx("td",{children:i[t]/16}),p.jsx("td",{children:i[t]}),p.jsx("td",{children:p.jsx("div",{style:{width:`${i[t]}px`,height:`${i[t]}px`,backgroundColor:Xt("Plus",t)?"#FF79C9":"#0275D8"}})})]},t))})]})};function ht(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...pt(),...i.components};return p.jsxs(p.Fragment,{children:[p.jsx(Lt,{title:"Theme/Space"}),`
`,p.jsx(e.h1,{id:"space",children:"Space"}),`
`,p.jsx(e.p,{children:`Spacing is an important part of design system. Instead of using arbitrary amounts of spacing
in our components and layouts, we are limiting ourselves to standardised spacing scale.`}),`
`,p.jsx(e.h2,{id:"scale",children:"Scale"}),`
`,p.jsxs(e.p,{children:[`Our scale is based on "power of two" rule with several custom steps to smooth the scale. Each of
the customized steps is marked with the `,p.jsx(e.code,{children:"Plus"})," suffix."]}),`
`,p.jsx(lo,{scale:Dt.space}),`
`,p.jsx(e.h2,{id:"stacking",children:"Stacking"}),`
`,p.jsx(e.p,{children:`For stacking we can use any value from our scale and we can stack both vertically and horizontally.
In code the stacking is implemented by margins.`}),`
`,p.jsx(U,{url:"https://www.figma.com/file/vnzYfrwIISRYkr2iYE5TcD/Platform-Atoms?node-id=2314%3A51"}),`
`,p.jsx(U,{url:"https://www.figma.com/file/vnzYfrwIISRYkr2iYE5TcD/Platform-Atoms?node-id=2314%3A53"}),`
`,p.jsx(e.h2,{id:"inseting",children:"Inseting"}),`
`,p.jsx(e.p,{children:"We have three different kinds of inset:"}),`
`,p.jsxs(e.ol,{children:[`
`,p.jsxs(e.li,{children:[p.jsx(e.code,{children:"square"})," - vertical and horizontal inset are equal"]}),`
`,p.jsxs(e.li,{children:[p.jsx(e.code,{children:"squish"})," - vertical inset is half of horizontal"]}),`
`,p.jsxs(e.li,{children:[p.jsx(e.code,{children:"stretch"})," - horizontal inset is half of vertical"]}),`
`]}),`
`,p.jsx(e.p,{children:`Each inset kind has only restricted set of values from the scale (see below). In code inset is
implemented by padding.`}),`
`,p.jsx(U,{url:"https://www.figma.com/file/vnzYfrwIISRYkr2iYE5TcD/Platform-Atoms?node-id=2314%3A115"}),`
`,p.jsx(U,{url:"https://www.figma.com/file/vnzYfrwIISRYkr2iYE5TcD/Platform-Atoms?node-id=2315%3A734"}),`
`,p.jsx(U,{url:"https://www.figma.com/file/vnzYfrwIISRYkr2iYE5TcD/Platform-Atoms?node-id=2315%3A736"})]})}function Yo(i={}){const{wrapper:e}={...pt(),...i.components};return e?p.jsx(e,{...i,children:p.jsx(ht,{...i})}):ht(i)}export{Yo as default};
//# sourceMappingURL=space-B1hwk1aB.js.map
