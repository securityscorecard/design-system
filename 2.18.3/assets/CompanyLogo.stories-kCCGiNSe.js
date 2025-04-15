import{j as O}from"./jsx-runtime-CfatFE5O.js";import{i as fe,d as q,s as pe,c as ge,R as he,t as ye,g as ve,n as I,a as Ae,b as we}from"./decorators-uTMKE_pn.js";import{r as H}from"./index-ClcD9ViR.js";import{q as xe}from"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DGqv0G-5.js";import"./index-U7rWlclI.js";import{S as Ee}from"./Spinner-CK2vC9iP.js";import{I as Ce}from"./Icon-Bik-9-TI.js";import{I as be}from"./Inline-CzyJe68E.js";function Te(){fe(typeof URL<"u",q.formatMessage(`Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`))}function Re(e,n){return e.toLowerCase()===n.toLowerCase()}function Se(e){return e<300?"#69AB32":e<400?"#F0BB4B":"#E95F5D"}async function _e(e){const r=await e.clone().text();return{url:new URL(e.url),method:e.method,headers:Object.fromEntries(e.headers.entries()),body:r}}const{message:je}=pe;async function Oe(e){const n=e.clone(),r=await n.text(),t=n.status||200,o=n.statusText||je[t]||"OK";return{status:t,statusText:o,headers:Object.fromEntries(n.headers.entries()),body:r}}function Pe(e){for(var n=[],r=0;r<e.length;){var t=e[r];if(t==="*"||t==="+"||t==="?"){n.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(t==="\\"){n.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(t==="{"){n.push({type:"OPEN",index:r,value:e[r++]});continue}if(t==="}"){n.push({type:"CLOSE",index:r,value:e[r++]});continue}if(t===":"){for(var o="",a=r+1;a<e.length;){var i=e.charCodeAt(a);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===95){o+=e[a++];continue}break}if(!o)throw new TypeError("Missing parameter name at ".concat(r));n.push({type:"NAME",index:r,value:o}),r=a;continue}if(t==="("){var f=1,E="",a=r+1;if(e[a]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(a));for(;a<e.length;){if(e[a]==="\\"){E+=e[a++]+e[a++];continue}if(e[a]===")"){if(f--,f===0){a++;break}}else if(e[a]==="("&&(f++,e[a+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(a));E+=e[a++]}if(f)throw new TypeError("Unbalanced pattern at ".concat(r));if(!E)throw new TypeError("Missing pattern at ".concat(r));n.push({type:"PATTERN",index:r,value:E}),r=a;continue}n.push({type:"CHAR",index:r,value:e[r++]})}return n.push({type:"END",index:r,value:""}),n}function Le(e,n){n===void 0&&(n={});for(var r=Pe(e),t=n.prefixes,o=t===void 0?"./":t,a=n.delimiter,i=a===void 0?"/#?":a,f=[],E=0,x=0,A="",p=function(v){if(x<r.length&&r[x].type===v)return r[x++].value},T=function(v){var h=p(v);if(h!==void 0)return h;var b=r[x],M=b.type,me=b.index;throw new TypeError("Unexpected ".concat(M," at ").concat(me,", expected ").concat(v))},w=function(){for(var v="",h;h=p("CHAR")||p("ESCAPED_CHAR");)v+=h;return v},l=function(v){for(var h=0,b=i;h<b.length;h++){var M=b[h];if(v.indexOf(M)>-1)return!0}return!1},g=function(v){var h=f[f.length-1],b=v||(h&&typeof h=="string"?h:"");if(h&&!b)throw new TypeError('Must have text between two parameters, missing text after "'.concat(h.name,'"'));return!b||l(b)?"[^".concat(k(i),"]+?"):"(?:(?!".concat(k(b),")[^").concat(k(i),"])+?")};x<r.length;){var s=p("CHAR"),m=p("NAME"),R=p("PATTERN");if(m||R){var u=s||"";o.indexOf(u)===-1&&(A+=u,u=""),A&&(f.push(A),A=""),f.push({name:m||E++,prefix:u,suffix:"",pattern:R||g(u),modifier:p("MODIFIER")||""});continue}var d=s||p("ESCAPED_CHAR");if(d){A+=d;continue}A&&(f.push(A),A="");var y=p("OPEN");if(y){var u=w(),C=p("NAME")||"",_=p("PATTERN")||"",j=w();T("CLOSE"),f.push({name:C||(_?E++:""),pattern:C&&!_?g(u):_,prefix:u,suffix:j,modifier:p("MODIFIER")||""});continue}T("END")}return f}function ke(e,n){var r=[],t=se(e,r,n);return Ie(t,r,n)}function Ie(e,n,r){r===void 0&&(r={});var t=r.decode,o=t===void 0?function(a){return a}:t;return function(a){var i=e.exec(a);if(!i)return!1;for(var f=i[0],E=i.index,x=Object.create(null),A=function(T){if(i[T]===void 0)return"continue";var w=n[T-1];w.modifier==="*"||w.modifier==="+"?x[w.name]=i[T].split(w.prefix+w.suffix).map(function(l){return o(l,w)}):x[w.name]=o(i[T],w)},p=1;p<i.length;p++)A(p);return{path:f,index:E,params:x}}}function k(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ae(e){return e&&e.sensitive?"":"i"}function Ue(e,n){if(!n)return e;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,t=0,o=r.exec(e.source);o;)n.push({name:o[1]||t++,prefix:"",suffix:"",modifier:"",pattern:""}),o=r.exec(e.source);return e}function ze(e,n,r){var t=e.map(function(o){return se(o,n,r).source});return new RegExp("(?:".concat(t.join("|"),")"),ae(r))}function De(e,n,r){return Ne(Le(e,r),n,r)}function Ne(e,n,r){r===void 0&&(r={});for(var t=r.strict,o=t===void 0?!1:t,a=r.start,i=a===void 0?!0:a,f=r.end,E=f===void 0?!0:f,x=r.encode,A=x===void 0?function(h){return h}:x,p=r.delimiter,T=p===void 0?"/#?":p,w=r.endsWith,l=w===void 0?"":w,g="[".concat(k(l),"]|$"),s="[".concat(k(T),"]"),m=i?"^":"",R=0,u=e;R<u.length;R++){var d=u[R];if(typeof d=="string")m+=k(A(d));else{var y=k(A(d.prefix)),C=k(A(d.suffix));if(d.pattern)if(n&&n.push(d),y||C)if(d.modifier==="+"||d.modifier==="*"){var _=d.modifier==="*"?"?":"";m+="(?:".concat(y,"((?:").concat(d.pattern,")(?:").concat(C).concat(y,"(?:").concat(d.pattern,"))*)").concat(C,")").concat(_)}else m+="(?:".concat(y,"(").concat(d.pattern,")").concat(C,")").concat(d.modifier);else{if(d.modifier==="+"||d.modifier==="*")throw new TypeError('Can not repeat "'.concat(d.name,'" without a prefix and suffix'));m+="(".concat(d.pattern,")").concat(d.modifier)}else m+="(?:".concat(y).concat(C,")").concat(d.modifier)}}if(E)o||(m+="".concat(s,"?")),m+=r.endsWith?"(?=".concat(g,")"):"$";else{var j=e[e.length-1],v=typeof j=="string"?s.indexOf(j[j.length-1])>-1:j===void 0;o||(m+="(?:".concat(s,"(?=").concat(g,"))?")),v||(m+="(?=".concat(s,"|").concat(g,")"))}return new RegExp(m,ae(r))}function se(e,n,r){return e instanceof RegExp?Ue(e,n):Array.isArray(e)?ze(e,n,r):De(e,n,r)}function $e(e,n=!0){return[n&&e.origin,e.pathname].filter(Boolean).join("")}const Be=/[\?|#].*$/g;function Me(e){return new URL(`/${e}`,"http://localhost").searchParams}function ie(e){return e.endsWith("?")?e:e.replace(Be,"")}function qe(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}function He(e,n){if(qe(e)||e.startsWith("*"))return e;const r=n||typeof document<"u"&&document.baseURI;return r?decodeURI(new URL(encodeURI(e),r).href):e}function Fe(e,n){if(e instanceof RegExp)return e;const r=He(e,n);return ie(r)}function Ve(e){return e.replace(/([:a-zA-Z_-]*)(\*{1,2})+/g,(n,r,t)=>{const o="(.*)";return r?r.startsWith(":")?`${r}${t}`:`${r}${o}`:o}).replace(/([^\/])(:)(?=\d+)/,"$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/,"$1\\$2")}function We(e,n,r){const t=Fe(n,r),o=typeof t=="string"?Ve(t):t,a=$e(e),i=ke(o,{decode:decodeURIComponent})(a),f=i&&i.params||{};return{matches:i!==!1,params:f}}var Ge=Object.create,ce=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,le=Object.getOwnPropertyNames,Je=Object.getPrototypeOf,Qe=Object.prototype.hasOwnProperty,Xe=(e,n)=>function(){return n||(0,e[le(e)[0]])((n={exports:{}}).exports,n),n.exports},Ze=(e,n,r,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of le(n))!Qe.call(e,o)&&o!==r&&ce(e,o,{get:()=>n[o],enumerable:!(t=Ke(n,o))||t.enumerable});return e},Ye=(e,n,r)=>(r=e!=null?Ge(Je(e)):{},Ze(ce(r,"default",{value:e,enumerable:!0}),e)),en=Xe({"node_modules/cookie/index.js"(e){e.parse=f,e.serialize=A;var n=Object.prototype.toString,r=Object.prototype.hasOwnProperty,t=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,o=/^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,a=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/;function f(l,g){if(typeof l!="string")throw new TypeError("argument str must be a string");var s={},m=l.length;if(m<2)return s;var R=g&&g.decode||p,u=0,d=0,y=0;do{if(d=l.indexOf("=",u),d===-1)break;if(y=l.indexOf(";",u),y===-1)y=m;else if(d>y){u=l.lastIndexOf(";",d-1)+1;continue}var C=E(l,u,d),_=x(l,d,C),j=l.slice(C,_);if(!r.call(s,j)){var v=E(l,d+1,y),h=x(l,y,v);l.charCodeAt(v)===34&&l.charCodeAt(h-1)===34&&(v++,h--);var b=l.slice(v,h);s[j]=w(b,R)}u=y+1}while(u<m);return s}function E(l,g,s){do{var m=l.charCodeAt(g);if(m!==32&&m!==9)return g}while(++g<s);return s}function x(l,g,s){for(;g>s;){var m=l.charCodeAt(--g);if(m!==32&&m!==9)return g+1}return s}function A(l,g,s){var m=s&&s.encode||encodeURIComponent;if(typeof m!="function")throw new TypeError("option encode is invalid");if(!t.test(l))throw new TypeError("argument name is invalid");var R=m(g);if(!o.test(R))throw new TypeError("argument val is invalid");var u=l+"="+R;if(!s)return u;if(s.maxAge!=null){var d=Math.floor(s.maxAge);if(!isFinite(d))throw new TypeError("option maxAge is invalid");u+="; Max-Age="+d}if(s.domain){if(!a.test(s.domain))throw new TypeError("option domain is invalid");u+="; Domain="+s.domain}if(s.path){if(!i.test(s.path))throw new TypeError("option path is invalid");u+="; Path="+s.path}if(s.expires){var y=s.expires;if(!T(y)||isNaN(y.valueOf()))throw new TypeError("option expires is invalid");u+="; Expires="+y.toUTCString()}if(s.httpOnly&&(u+="; HttpOnly"),s.secure&&(u+="; Secure"),s.partitioned&&(u+="; Partitioned"),s.priority){var C=typeof s.priority=="string"?s.priority.toLowerCase():s.priority;switch(C){case"low":u+="; Priority=Low";break;case"medium":u+="; Priority=Medium";break;case"high":u+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(s.sameSite){var _=typeof s.sameSite=="string"?s.sameSite.toLowerCase():s.sameSite;switch(_){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;case"none":u+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return u}function p(l){return l.indexOf("%")!==-1?decodeURIComponent(l):l}function T(l){return n.call(l)==="[object Date]"}function w(l,g){try{return g(l)}catch{return l}}}}),nn=Ye(en()),ue=nn.default;/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/function de(e){const n=ue.parse(e),r={};for(const t in n)typeof n[t]<"u"&&(r[t]=n[t]);return r}function F(){return de(document.cookie)}function rn(e){if(typeof document>"u"||typeof location>"u")return{};switch(e.credentials){case"same-origin":{const n=new URL(e.url);return location.origin===n.origin?F():{}}case"include":return F();default:return{}}}function tn(e){const n=e.headers.get("cookie"),r=n?de(n):{},t=rn(e);for(const i in t)e.headers.append("cookie",ue.serialize(i,t[i]));const o=ge.getCookiesSync(e.url),a=Object.fromEntries(o.map(i=>[i.key,i.value]));for(const i of o)e.headers.append("cookie",i.toString());return{...t,...a,...r}}var L=(e=>(e.HEAD="HEAD",e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.OPTIONS="OPTIONS",e.DELETE="DELETE",e))(L||{});class on extends he{constructor(n,r,t,o){super({info:{header:`${n} ${r}`,path:r,method:n},resolver:t,options:o}),this.checkRedundantQueryParameters()}checkRedundantQueryParameters(){const{method:n,path:r}=this.info;if(r instanceof RegExp||ie(r)===r)return;Me(r).forEach((a,i)=>{}),q.warn(`Found a redundant usage of query parameters in the request handler URL for "${n} ${r}". Please match against a path instead and access query parameters using "new URL(request.url).searchParams" instead. Learn more: https://mswjs.io/docs/recipes/query-parameters`)}async parse(n){var a;const r=new URL(n.request.url),t=We(r,this.info.path,(a=n.resolutionContext)==null?void 0:a.baseUrl),o=tn(n.request);return{match:t,cookies:o}}predicate(n){const r=this.matchMethod(n.request.method),t=n.parsedResult.match.matches;return r&&t}matchMethod(n){return this.info.method instanceof RegExp?this.info.method.test(n):Re(this.info.method,n)}extendResolverArgs(n){var r;return{params:((r=n.parsedResult.match)==null?void 0:r.params)||{},cookies:n.parsedResult.cookies}}async log(n){const r=ye(n.request.url),t=await _e(n.request),o=await Oe(n.response),a=Se(o.status);console.groupCollapsed(q.formatMessage(`${ve()} ${n.request.method} ${r} (%c${o.status} ${o.statusText}%c)`),`color:${a}`,"color:inherit"),console.log("Request",t),console.log("Handler:",this),console.log("Response",o),console.groupEnd()}}function P(e){return(n,r,t={})=>new on(e,n,r,t)}const B={all:P(/.+/),head:P(L.HEAD),get:P(L.GET),post:P(L.POST),put:P(L.PUT),delete:P(L.DELETE),patch:P(L.PATCH),options:P(L.OPTIONS)};class S extends Response{constructor(n,r){const t=I(r);super(n,t),Ae(this,t)}static text(n,r){const t=I(r);return t.headers.has("Content-Type")||t.headers.set("Content-Type","text/plain"),t.headers.has("Content-Length")||t.headers.set("Content-Length",n?new Blob([n]).size.toString():"0"),new S(n,t)}static json(n,r){const t=I(r);t.headers.has("Content-Type")||t.headers.set("Content-Type","application/json");const o=JSON.stringify(n);return t.headers.has("Content-Length")||t.headers.set("Content-Length",o?new Blob([o]).size.toString():"0"),new S(o,t)}static xml(n,r){const t=I(r);return t.headers.has("Content-Type")||t.headers.set("Content-Type","text/xml"),new S(n,t)}static html(n,r){const t=I(r);return t.headers.has("Content-Type")||t.headers.set("Content-Type","text/html"),new S(n,t)}static arrayBuffer(n,r){const t=I(r);return t.headers.has("Content-Type")||t.headers.set("Content-Type","application/octet-stream"),n&&!t.headers.has("Content-Length")&&t.headers.set("Content-Length",n.byteLength.toString()),new S(n,t)}static formData(n,r){return new S(n,I(r))}}const an=2147483647,V=100,sn=400,cn=5;function ln(){return we()?cn:Math.floor(Math.random()*(sn-V)+V)}async function un(e){let n;switch(e){case"infinite":{n=an;break}case"real":{n=ln();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${e}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`)}return new Promise(r=>setTimeout(r,n))}Te();function c(){var e="/home/runner/work/design-system/design-system/src/components/CompanyLogo/CompanyLogo.tsx",n="7ededc1fefb5d1830f49bc421efc00417ad3e53e",r=window,t="__coverage__",o={path:"/home/runner/work/design-system/design-system/src/components/CompanyLogo/CompanyLogo.tsx",statementMap:{0:{start:{line:6,column:24},end:{line:9,column:533}},1:{start:{line:10,column:21},end:{line:15,column:1}},2:{start:{line:16,column:20},end:{line:39,column:1}},3:{start:{line:22,column:28},end:{line:22,column:47}},4:{start:{line:23,column:26},end:{line:25,column:13}},5:{start:{line:23,column:41},end:{line:25,column:3}},6:{start:{line:26,column:2},end:{line:28,column:3}},7:{start:{line:27,column:4},end:{line:27,column:16}},8:{start:{line:29,column:2},end:{line:38,column:7}},9:{start:{line:34,column:6},end:{line:34,column:24}},10:{start:{line:36,column:6},end:{line:36,column:26}},11:{start:{line:41,column:0},end:{line:47,column:50}},12:{start:{line:43,column:4},end:{line:43,column:44}},13:{start:{line:45,column:4},end:{line:45,column:958}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:16,column:20},end:{line:16,column:21}},loc:{start:{line:21,column:6},end:{line:39,column:1}},line:21},1:{name:"(anonymous_1)",decl:{start:{line:23,column:34},end:{line:23,column:35}},loc:{start:{line:23,column:41},end:{line:25,column:3}},line:23},2:{name:"(anonymous_2)",decl:{start:{line:33,column:52},end:{line:33,column:53}},loc:{start:{line:33,column:58},end:{line:35,column:5}},line:33},3:{name:"(anonymous_3)",decl:{start:{line:35,column:15},end:{line:35,column:16}},loc:{start:{line:35,column:21},end:{line:37,column:5}},line:35}},branchMap:{0:{loc:{start:{line:19,column:2},end:{line:19,column:31}},type:"default-arg",locations:[{start:{line:19,column:26},end:{line:19,column:31}}],line:19},1:{loc:{start:{line:20,column:2},end:{line:20,column:13}},type:"default-arg",locations:[{start:{line:20,column:9},end:{line:20,column:13}}],line:20},2:{loc:{start:{line:24,column:32},end:{line:24,column:119}},type:"cond-expr",locations:[{start:{line:24,column:48},end:{line:24,column:56}},{start:{line:24,column:59},end:{line:24,column:119}}],line:24},3:{loc:{start:{line:24,column:59},end:{line:24,column:119}},type:"cond-expr",locations:[{start:{line:24,column:75},end:{line:24,column:81}},{start:{line:24,column:84},end:{line:24,column:119}}],line:24},4:{loc:{start:{line:24,column:84},end:{line:24,column:119}},type:"cond-expr",locations:[{start:{line:24,column:100},end:{line:24,column:108}},{start:{line:24,column:111},end:{line:24,column:119}}],line:24},5:{loc:{start:{line:26,column:2},end:{line:28,column:3}},type:"if",locations:[{start:{line:26,column:2},end:{line:28,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:26},6:{loc:{start:{line:26,column:6},end:{line:26,column:48}},type:"binary-expr",locations:[{start:{line:26,column:6},end:{line:26,column:23}},{start:{line:26,column:27},end:{line:26,column:48}}],line:26},7:{loc:{start:{line:30,column:4},end:{line:32,column:15}},type:"cond-expr",locations:[{start:{line:30,column:42},end:{line:30,column:157}},{start:{line:30,column:160},end:{line:32,column:15}}],line:30},8:{loc:{start:{line:30,column:160},end:{line:32,column:15}},type:"cond-expr",locations:[{start:{line:30,column:196},end:{line:32,column:8}},{start:{line:32,column:11},end:{line:32,column:15}}],line:30}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0},f:{0:0,1:0,2:0,3:0},b:{0:[0],1:[0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/CompanyLogo/CompanyLogo.tsx"],names:["src","alt","state","setState"],mappings:"AA2FI;AA3FJ;AACA;AAEA;AACA;AAiBA;AAAkC;AAAA;AAAA;AAkClC;AAAqB;AACf;AACA;AACA;AAEN;AAEA;AAAqB;AACnBA;AACAC;AACwB;AAER;AAChB;AAIA;AACS;AAQC;AAKV;AACE;AAAO;AAGT;AAEKC;AAaU;AACsB;AAG7B;AAKAC;AAAgB;AAGhBA;AAAkB;AAClB;AAIV;AAEA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"7ededc1fefb5d1830f49bc421efc00417ad3e53e"},a=r[t]||(r[t]={});(!a[e]||a[e].hash!==n)&&(a[e]=o);var i=a[e];return c=function(){return i},i}c();const dn=(c().s[0]++,xe.div.withConfig({displayName:"CompanyLogo__CompanyLogoRoot",componentId:"sc-1n5nxg8-0"})(["aspect-ratio:1;border-radius:var(--sscds-radii-surface-md);box-shadow:0 0 0 1px var(--sscds-color-border-surface-dynamic);background-color:var(--sscds-color-background-surface-dynamic);position:relative;display:grid;place-items:center;overflow:hidden;width:var(--sscds-companylogo-size);&[data-state='success']{background-color:var(--sscds-color-white);> img{visibility:visible;}}&[data-state='error'],&[data-state='loading']{> img{visibility:hidden;}}> img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}"])),W=(c().s[1]++,{sm:"0.625rem",md:"0.75rem",lg:"1rem",xl:"1.5rem"});c().s[2]++;const U=({src:e,alt:n,shouldHideOnLoadError:r=(c().b[0][0]++,!1),size:t=(c().b[1][0]++,"md")})=>{c().f[0]++;const[o,a]=(c().s[3]++,H.useState("loading")),i=(c().s[4]++,H.useMemo(()=>(c().f[1]++,c().s[5]++,{"--sscds-companylogo-size":t==="sm"?(c().b[2][0]++,"1.5rem"):(c().b[2][1]++,t==="md"?(c().b[3][0]++,"2rem"):(c().b[3][1]++,t==="lg"?(c().b[4][0]++,"2.5rem"):(c().b[4][1]++,"3.5rem")))}),[t]));return c().s[6]++,c().b[6][0]++,o==="error"&&(c().b[6][1]++,r)?(c().b[5][0]++,c().s[7]++,null):(c().b[5][1]++,c().s[8]++,O.jsxs(dn,{"data-state":o,style:i,children:[o==="loading"?(c().b[7][0]++,O.jsx(Ee,{borderWidth:3,"data-testid":"spinner",size:W[t],verticalMargin:0,dark:!0})):(c().b[7][1]++,o==="error"?(c().b[8][0]++,O.jsx(Ce,{color:"var(--sscds-color-icon-subtle)","data-testid":"fallback-icon",name:"company",style:{fontSize:W[t]}})):(c().b[8][1]++,null)),O.jsx("img",{alt:n,src:e,onError:()=>{c().f[2]++,c().s[9]++,a("error")},onLoad:()=>{c().f[3]++,c().s[10]++,a("success")}})]}))};c().s[11]++;try{c().s[12]++,U.displayName="CompanyLogo",c().s[13]++,U.__docgenInfo={description:"",displayName:"CompanyLogo",props:{src:{defaultValue:null,description:"URL where the company logo is stored",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"Alternative text, use empty string if used for decorative purposes",name:"alt",required:!0,type:{name:"string"}},shouldHideOnLoadError:{defaultValue:{value:"false"},description:"When `false` fallback icon will be used instead of logo\nWhen `true` logo won't be rendered if error will occur during load.",name:"shouldHideOnLoadError",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Logo size",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}}}catch{}const mn={component:U,args:{alt:"Company Logo",size:"xl"},tags:["!autodocs","new"]},z={args:{src:"/store/companies/logo.jpg"},parameters:{msw:{handlers:{imageSuccess:[B.get("/store/companies/logo.jpg",async()=>{const e=await fetch("./images/logo.jpg").then(n=>n.arrayBuffer());return S.arrayBuffer(e,{headers:{"Content-Type":"image/jpg"}})})]}},screenshot:{skip:!0}}},D={args:{src:"/store/companies/loading.jpg"},parameters:{msw:{handlers:{imageLoading:[B.get("/store/companies/loading.jpg",async()=>(await un("infinite"),S.json()))]}}}},N={args:{src:"/store/companies/error.jpg"},parameters:{msw:{handlers:{imageError:[B.get("/store/companies/error.jpg",async()=>new S(null,{status:404}))]}}}},$={args:{src:"/store/companies/logo.jpg"},parameters:{msw:{handlers:{imageSuccess:[B.get("/store/companies/logo.jpg",async()=>{const e=await fetch("./images/logo.jpg").then(n=>n.arrayBuffer());return S.arrayBuffer(e,{headers:{"Content-Type":"image/jpg"}})})]}},screenshot:{skip:!0}},render:e=>O.jsxs(be,{align:"flex-start",gap:"8x",justify:"center",children:[O.jsx(U,{...e,size:"sm"}),O.jsx(U,{...e,size:"md"}),O.jsx(U,{...e,size:"lg"}),O.jsx(U,{...e,size:"xl"})]})};var G,K,J;z.parameters={...z.parameters,docs:{...(G=z.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    src: '/store/companies/logo.jpg'
  },
  parameters: {
    msw: {
      handlers: {
        imageSuccess: [http.get('/store/companies/logo.jpg', async () => {
          const buffer = await fetch('./images/logo.jpg').then(response => response.arrayBuffer());
          return HttpResponse.arrayBuffer(buffer, {
            headers: {
              'Content-Type': 'image/jpg'
            }
          });
        })]
      }
    },
    screenshot: {
      skip: true
    }
  }
}`,...(J=(K=z.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,X,Z;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    src: '/store/companies/loading.jpg'
  },
  parameters: {
    msw: {
      handlers: {
        imageLoading: [http.get('/store/companies/loading.jpg', async () => {
          await delay('infinite');
          return HttpResponse.json();
        })]
      }
    }
  }
}`,...(Z=(X=D.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var Y,ee,ne;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    src: '/store/companies/error.jpg'
  },
  parameters: {
    msw: {
      handlers: {
        imageError: [http.get('/store/companies/error.jpg', async () => {
          return new HttpResponse(null, {
            status: 404
          });
        })]
      }
    }
  }
}`,...(ne=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,oe;$.parameters={...$.parameters,docs:{...(re=$.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    src: '/store/companies/logo.jpg'
  },
  parameters: {
    msw: {
      handlers: {
        imageSuccess: [http.get('/store/companies/logo.jpg', async () => {
          const buffer = await fetch('./images/logo.jpg').then(response => response.arrayBuffer());
          return HttpResponse.arrayBuffer(buffer, {
            headers: {
              'Content-Type': 'image/jpg'
            }
          });
        })]
      }
    },
    screenshot: {
      skip: true
    }
  },
  render: args => <Inline align="flex-start" gap="8x" justify="center">
      <CompanyLogo {...args} size="sm" />
      <CompanyLogo {...args} size="md" />
      <CompanyLogo {...args} size="lg" />
      <CompanyLogo {...args} size="xl" />
    </Inline>
}`,...(oe=(te=$.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const fn=["Default","Loading","Error","Sizes"],Cn=Object.freeze(Object.defineProperty({__proto__:null,Default:z,Error:N,Loading:D,Sizes:$,__namedExportsOrder:fn,default:mn},Symbol.toStringTag,{value:"Module"}));export{Cn as C,z as D,$ as S};
//# sourceMappingURL=CompanyLogo.stories-kCCGiNSe.js.map
