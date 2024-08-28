import{c as oe,r as Ve}from"./index-CTjT7uj6.js";import{r as Ke}from"./index-DIVhMF2i.js";var ce={},de={};Object.defineProperty(de,"__esModule",{value:!0});function Je(n){for(var t=[],r=0,e=Object.keys(n);r<e.length;r++){var a=e[r],s=n[a];t.push({minWidth:s.minWidth!=null?s.minWidth:0,maxWidth:s.maxWidth!=null?s.maxWidth:1/0,minHeight:s.minHeight!=null?s.minHeight:0,maxHeight:s.maxHeight!=null?s.maxHeight:1/0,className:a})}return function(u){for(var o=u.height,c=u.width,h={},b=0,x=t;b<x.length;b++){var w=x[b],O=w.className,E=w.minWidth,L=w.maxWidth,g=w.minHeight,A=w.maxHeight;o!=null&&c!=null?h[O]=E<=c&&c<=L&&g<=o&&o<=A:o==null&&c!=null?h[O]=E<=c&&c<=L:o!=null&&c==null?h[O]=g<=o&&o<=A:h[O]=!0}return h}}de.default=Je;var fe={},he={},Le={exports:{}},Xe=Le.exports={};Xe.forEach=function(n,t){for(var r=0;r<n.length;r++){var e=t(n[r]);if(e)return e}};var Me=Le.exports,Ze=function(n){var t=n.stateHandler.getState;function r(u){var o=t(u);return o&&!!o.isDetectable}function e(u){t(u).isDetectable=!0}function a(u){return!!t(u).busy}function s(u,o){t(u).busy=!!o}return{isDetectable:r,markAsDetectable:e,isBusy:a,markBusy:s}},et=function(n){var t={};function r(u){var o=n.get(u);return o===void 0?[]:t[o]||[]}function e(u,o){var c=n.get(u);t[c]||(t[c]=[]),t[c].push(o)}function a(u,o){for(var c=r(u),h=0,b=c.length;h<b;++h)if(c[h]===o){c.splice(h,1);break}}function s(u){var o=r(u);o&&(o.length=0)}return{get:r,add:e,removeListener:a,removeAllListeners:s}},tt=function(){var n=1;function t(){return n++}return{generate:t}},nt=function(n){var t=n.idGenerator,r=n.stateHandler.getState;function e(s){var u=r(s);return u&&u.id!==void 0?u.id:null}function a(s){var u=r(s);if(!u)throw new Error("setId required the element to have a resize detection state.");var o=t.generate();return u.id=o,o}return{get:e,set:a}},rt=function(n){function t(){}var r={log:t,warn:t,error:t};if(!n&&window.console){var e=function(a,s){a[s]=function(){var o=console[s];if(o.apply)o.apply(console,arguments);else for(var c=0;c<arguments.length;c++)o(arguments[c])}};e(r,"log"),e(r,"warn"),e(r,"error")}return r},je={exports:{}},Ie=je.exports={};Ie.isIE=function(n){function t(){var e=navigator.userAgent.toLowerCase();return e.indexOf("msie")!==-1||e.indexOf("trident")!==-1||e.indexOf(" edge/")!==-1}if(!t())return!1;if(!n)return!0;var r=function(){var e,a=3,s=document.createElement("div"),u=s.getElementsByTagName("i");do s.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]-->";while(u[0]);return a>4?a:e}();return n===r};Ie.isLegacyOpera=function(){return!!window.opera};var Pe=je.exports,qe={exports:{}},it=qe.exports={};it.getOption=at;function at(n,t,r){var e=n[t];return e==null&&r!==void 0?r:e}var ot=qe.exports,Ce=ot,st=function(t){t=t||{};var r=t.reporter,e=Ce.getOption(t,"async",!0),a=Ce.getOption(t,"auto",!0);a&&!e&&(r&&r.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),e=!0);var s=xe(),u,o=!1;function c(E,L){!o&&a&&e&&s.size()===0&&x(),s.add(E,L)}function h(){for(o=!0;s.size();){var E=s;s=xe(),E.process()}o=!1}function b(E){o||(E===void 0&&(E=e),u&&(w(u),u=null),E?x():h())}function x(){u=O(h)}function w(E){var L=clearTimeout;return L(E)}function O(E){var L=function(g){return setTimeout(g,0)};return L(E)}return{add:c,force:b}};function xe(){var n={},t=0,r=0,e=0;function a(o,c){c||(c=o,o=0),o>r?r=o:o<e&&(e=o),n[o]||(n[o]=[]),n[o].push(c),t++}function s(){for(var o=e;o<=r;o++)for(var c=n[o],h=0;h<c.length;h++){var b=c[h];b()}}function u(){return t}return{add:a,process:s,size:u}}var ve="_erd";function ct(n){return n[ve]={},We(n)}function We(n){return n[ve]}function dt(n){delete n[ve]}var ut={initState:ct,getState:We,cleanState:dt},X=Pe,lt=function(n){n=n||{};var t=n.reporter,r=n.batchProcessor,e=n.stateHandler.getState;if(!t)throw new Error("Missing required dependency: reporter.");function a(c,h){if(!u(c))throw new Error("Element is not detectable by this strategy.");function b(){h(c)}if(X.isIE(8))e(c).object={proxy:b},c.attachEvent("onresize",b);else{var x=u(c);x.contentDocument.defaultView.addEventListener("resize",b)}}function s(c,h,b){b||(b=h,h=c,c=null),c=c||{},c.debug;function x(w,O){var E="display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;",L=!1,g=window.getComputedStyle(w),A=w.offsetWidth,f=w.offsetHeight;e(w).startSize={width:A,height:f};function i(){function S(){if(g.position==="static"){w.style.position="relative";var C=function(D,k,y,m){function T(q){return q.replace(/[^-\d\.]/g,"")}var M=y[m];M!=="auto"&&T(M)!=="0"&&(D.warn("An element that is positioned static has style."+m+"="+M+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+m+" will be set to 0. Element: ",k),k.style[m]=0)};C(t,w,g,"top"),C(t,w,g,"right"),C(t,w,g,"bottom"),C(t,w,g,"left")}}function l(){L||S();function C(k,y){if(!k.contentDocument){setTimeout(function(){C(k,y)},100);return}y(k.contentDocument)}var D=this;C(D,function(y){O(w)})}g.position!==""&&(S(),L=!0);var z=document.createElement("object");z.style.cssText=E,z.tabIndex=-1,z.type="text/html",z.onload=l,X.isIE()||(z.data="about:blank"),w.appendChild(z),e(w).object=z,X.isIE()&&(z.data="about:blank")}r?r.add(i):i()}X.isIE(8)?b(h):x(h,b)}function u(c){return e(c).object}function o(c){X.isIE(8)?c.detachEvent("onresize",e(c).object.proxy):c.removeChild(u(c)),delete e(c).object}return{makeDetectable:s,addListener:a,uninstall:o}},ft=Me.forEach,ht=function(n){n=n||{};var t=n.reporter,r=n.batchProcessor,e=n.stateHandler.getState;n.stateHandler.hasState;var a=n.idHandler;if(!r)throw new Error("Missing required dependency: batchProcessor");if(!t)throw new Error("Missing required dependency: reporter.");var s=c(),u="erd_scroll_detection_scrollbar_style",o="erd_scroll_detection_container";h(u,o);function c(){var f=500,i=500,S=document.createElement("div");S.style.cssText="position: absolute; width: "+f*2+"px; height: "+i*2+"px; visibility: hidden; margin: 0; padding: 0;";var l=document.createElement("div");l.style.cssText="position: absolute; width: "+f+"px; height: "+i+"px; overflow: scroll; visibility: none; top: "+-f*3+"px; left: "+-i*3+"px; visibility: hidden; margin: 0; padding: 0;",l.appendChild(S),document.body.insertBefore(l,document.body.firstChild);var z=f-l.clientWidth,C=i-l.clientHeight;return document.body.removeChild(l),{width:z,height:C}}function h(f,i){function S(D,k){k=k||function(m){document.head.appendChild(m)};var y=document.createElement("style");return y.innerHTML=D,y.id=f,k(y),y}if(!document.getElementById(f)){var l=i+"_animation",z=i+"_animation_active",C=`/* Created by the element-resize-detector library. */
`;C+="."+i+` > div::-webkit-scrollbar { display: none; }

`,C+="."+z+" { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: "+l+"; animation-name: "+l+`; }
`,C+="@-webkit-keyframes "+l+` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`,C+="@keyframes "+l+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",S(C)}}function b(f){f.className+=" "+o+"_animation_active"}function x(f,i,S){if(f.addEventListener)f.addEventListener(i,S);else if(f.attachEvent)f.attachEvent("on"+i,S);else return t.error("[scroll] Don't know how to add event listeners.")}function w(f,i,S){if(f.removeEventListener)f.removeEventListener(i,S);else if(f.detachEvent)f.detachEvent("on"+i,S);else return t.error("[scroll] Don't know how to remove event listeners.")}function O(f){return e(f).container.childNodes[0].childNodes[0].childNodes[0]}function E(f){return e(f).container.childNodes[0].childNodes[0].childNodes[1]}function L(f,i){var S=e(f).listeners;if(!S.push)throw new Error("Cannot add listener to an element that is not detectable.");e(f).listeners.push(i)}function g(f,i,S){S||(S=i,i=f,f=null),f=f||{};function l(){if(f.debug){var d=Array.prototype.slice.call(arguments);if(d.unshift(a.get(i),"Scroll: "),t.log.apply)t.log.apply(null,d);else for(var v=0;v<d.length;v++)t.log(d[v])}}function z(d){function v(_){return _===_.ownerDocument.body||_.ownerDocument.body.contains(_)}return!v(d)||getComputedStyle(d)===null}function C(d){var v=e(d).container.childNodes[0],_=getComputedStyle(v);return!_.width||_.width.indexOf("px")===-1}function D(){var d=getComputedStyle(i),v={};return v.position=d.position,v.width=i.offsetWidth,v.height=i.offsetHeight,v.top=d.top,v.right=d.right,v.bottom=d.bottom,v.left=d.left,v.widthCSS=d.width,v.heightCSS=d.height,v}function k(){var d=D();e(i).startSize={width:d.width,height:d.height},l("Element start size",e(i).startSize)}function y(){e(i).listeners=[]}function m(){if(l("storeStyle invoked."),!e(i)){l("Aborting because element has been uninstalled");return}var d=D();e(i).style=d}function T(d,v,_){e(d).lastWidth=v,e(d).lastHeight=_}function M(d){return O(d).childNodes[0]}function q(){return 2*s.width+1}function ee(){return 2*s.height+1}function te(d){return d+10+q()}function ne(d){return d+10+ee()}function Re(d){return d*2+q()}function Te(d){return d*2+ee()}function ye(d,v,_){var Q=O(d),$=E(d),G=te(v),V=ne(_),H=Re(v),p=Te(_);Q.scrollLeft=G,Q.scrollTop=V,$.scrollLeft=H,$.scrollTop=p}function be(){var d=e(i).container;if(!d){d=document.createElement("div"),d.className=o,d.style.cssText="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;",e(i).container=d,b(d),i.appendChild(d);var v=function(){e(i).onRendered&&e(i).onRendered()};x(d,"animationstart",v),e(i).onAnimationStart=v}return d}function Qe(){function d(){var I=e(i).style;if(I.position==="static"){i.style.position="relative";var R=function(J,U,Fe,ae){function Ye(Ge){return Ge.replace(/[^-\d\.]/g,"")}var le=Fe[ae];le!=="auto"&&Ye(le)!=="0"&&(J.warn("An element that is positioned static has style."+ae+"="+le+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+ae+" will be set to 0. Element: ",U),U.style[ae]=0)};R(t,i,I,"top"),R(t,i,I,"right"),R(t,i,I,"bottom"),R(t,i,I,"left")}}function v(I,R,J,U){return I=I?I+"px":"0",R=R?R+"px":"0",J=J?J+"px":"0",U=U?U+"px":"0","left: "+I+"; top: "+R+"; right: "+U+"; bottom: "+J+";"}if(l("Injecting elements"),!e(i)){l("Aborting because element has been uninstalled");return}d();var _=e(i).container;_||(_=be());var Q=s.width,$=s.height,G="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;",V="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; "+v(-(1+Q),-(1+$),-$,-Q),H="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",p="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",j="position: absolute; left: 0; top: 0;",K="position: absolute; width: 200%; height: 200%;",W=document.createElement("div"),N=document.createElement("div"),re=document.createElement("div"),me=document.createElement("div"),ie=document.createElement("div"),Ae=document.createElement("div");W.dir="ltr",W.style.cssText=G,W.className=o,N.className=o,N.style.cssText=V,re.style.cssText=H,me.style.cssText=j,ie.style.cssText=p,Ae.style.cssText=K,re.appendChild(me),ie.appendChild(Ae),N.appendChild(re),N.appendChild(ie),W.appendChild(N),_.appendChild(W);function Se(){e(i).onExpand&&e(i).onExpand()}function Ee(){e(i).onShrink&&e(i).onShrink()}x(re,"scroll",Se),x(ie,"scroll",Ee),e(i).onExpandScroll=Se,e(i).onShrinkScroll=Ee}function Be(){function d(H,p,j){var K=M(H),W=te(p),N=ne(j);K.style.width=W+"px",K.style.height=N+"px"}function v(H){var p=i.offsetWidth,j=i.offsetHeight;l("Storing current size",p,j),T(i,p,j),r.add(0,function(){if(!e(i)){l("Aborting because element has been uninstalled");return}if(!_()){l("Aborting because element container has not been initialized");return}if(f.debug){var W=i.offsetWidth,N=i.offsetHeight;(W!==p||N!==j)&&t.warn(a.get(i),"Scroll: Size changed before updating detector elements.")}d(i,p,j)}),r.add(1,function(){if(!e(i)){l("Aborting because element has been uninstalled");return}if(!_()){l("Aborting because element container has not been initialized");return}ye(i,p,j)}),H&&r.add(2,function(){if(!e(i)){l("Aborting because element has been uninstalled");return}if(!_()){l("Aborting because element container has not been initialized");return}H()})}function _(){return!!e(i).container}function Q(){function H(){return e(i).lastNotifiedWidth===void 0}l("notifyListenersIfNeeded invoked");var p=e(i);if(H()&&p.lastWidth===p.startSize.width&&p.lastHeight===p.startSize.height)return l("Not notifying: Size is the same as the start size, and there has been no notification yet.");if(p.lastWidth===p.lastNotifiedWidth&&p.lastHeight===p.lastNotifiedHeight)return l("Not notifying: Size already notified");l("Current size not notified, notifying..."),p.lastNotifiedWidth=p.lastWidth,p.lastNotifiedHeight=p.lastHeight,ft(e(i).listeners,function(j){j(i)})}function $(){if(l("startanimation triggered."),C(i)){l("Ignoring since element is still unrendered...");return}l("Element rendered.");var H=O(i),p=E(i);(H.scrollLeft===0||H.scrollTop===0||p.scrollLeft===0||p.scrollTop===0)&&(l("Scrollbars out of sync. Updating detector elements..."),v(Q))}function G(){if(l("Scroll detected."),C(i)){l("Scroll event fired while unrendered. Ignoring...");return}var H=i.offsetWidth,p=i.offsetHeight;H!==e(i).lastWidth||p!==e(i).lastHeight?(l("Element size changed."),v(Q)):l("Element size has not changed ("+H+"x"+p+").")}if(l("registerListenersAndPositionElements invoked."),!e(i)){l("Aborting because element has been uninstalled");return}e(i).onRendered=$,e(i).onExpand=G,e(i).onShrink=G;var V=e(i).style;d(i,V.width,V.height)}function $e(){if(l("finalizeDomMutation invoked."),!e(i)){l("Aborting because element has been uninstalled");return}var d=e(i).style;T(i,d.width,d.height),ye(i,d.width,d.height)}function Ue(){S(i)}function we(){l("Installing..."),y(),k(),r.add(0,m),r.add(1,Qe),r.add(2,Be),r.add(3,$e),r.add(4,Ue)}l("Making detectable..."),z(i)?(l("Element is detached"),be(),l("Waiting until element is attached..."),e(i).onRendered=function(){l("Element is now attached"),we()}):we()}function A(f){var i=e(f);i&&(i.onExpandScroll&&w(O(f),"scroll",i.onExpandScroll),i.onShrinkScroll&&w(E(f),"scroll",i.onShrinkScroll),i.onAnimationStart&&w(i.container,"animationstart",i.onAnimationStart),i.container&&f.removeChild(i.container))}return{makeDetectable:g,addListener:L,uninstall:A}},Z=Me.forEach,vt=Ze,gt=et,pt=tt,yt=nt,bt=rt,Oe=Pe,wt=st,B=ut,mt=lt,At=ht;function ke(n){return Array.isArray(n)||n.length!==void 0}function _e(n){if(Array.isArray(n))return n;var t=[];return Z(n,function(r){t.push(r)}),t}function ze(n){return n&&n.nodeType===1}var St=function(n){n=n||{};var t;if(n.idHandler)t={get:function(g){return n.idHandler.get(g,!0)},set:n.idHandler.set};else{var r=pt(),e=yt({idGenerator:r,stateHandler:B});t=e}var a=n.reporter;if(!a){var s=a===!1;a=bt(s)}var u=F(n,"batchProcessor",wt({reporter:a})),o={};o.callOnAdd=!!F(n,"callOnAdd",!0),o.debug=!!F(n,"debug",!1);var c=gt(t),h=vt({stateHandler:B}),b,x=F(n,"strategy","object"),w={reporter:a,batchProcessor:u,stateHandler:B,idHandler:t};if(x==="scroll"&&(Oe.isLegacyOpera()?(a.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),x="object"):Oe.isIE(9)&&(a.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),x="object")),x==="scroll")b=At(w);else if(x==="object")b=mt(w);else throw new Error("Invalid strategy name: "+x);var O={};function E(g,A,f){function i(k){var y=c.get(k);Z(y,function(T){T(k)})}function S(k,y,m){c.add(y,m),k&&m(y)}if(f||(f=A,A=g,g={}),!A)throw new Error("At least one element required.");if(!f)throw new Error("Listener required.");if(ze(A))A=[A];else if(ke(A))A=_e(A);else return a.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");var l=0,z=F(g,"callOnAdd",o.callOnAdd),C=F(g,"onReady",function(){}),D=F(g,"debug",o.debug);Z(A,function(y){B.getState(y)||(B.initState(y),t.set(y));var m=t.get(y);if(D&&a.log("Attaching listener to element",m,y),!h.isDetectable(y)){if(D&&a.log(m,"Not detectable."),h.isBusy(y)){D&&a.log(m,"System busy making it detectable"),S(z,y,f),O[m]=O[m]||[],O[m].push(function(){l++,l===A.length&&C()});return}return D&&a.log(m,"Making detectable..."),h.markBusy(y,!0),b.makeDetectable({debug:D},y,function(M){if(D&&a.log(m,"onElementDetectable"),B.getState(M)){h.markAsDetectable(M),h.markBusy(M,!1),b.addListener(M,i),S(z,M,f);var q=B.getState(M);if(q&&q.startSize){var ee=M.offsetWidth,te=M.offsetHeight;(q.startSize.width!==ee||q.startSize.height!==te)&&i(M)}O[m]&&Z(O[m],function(ne){ne()})}else D&&a.log(m,"Element uninstalled before being detectable.");delete O[m],l++,l===A.length&&C()})}D&&a.log(m,"Already detecable, adding listener."),S(z,y,f),l++}),l===A.length&&C()}function L(g){if(!g)return a.error("At least one element is required.");if(ze(g))g=[g];else if(ke(g))g=_e(g);else return a.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");Z(g,function(A){c.removeAllListeners(A),b.uninstall(A),B.cleanState(A)})}return{listenTo:E,removeListener:c.removeListener,removeAllListeners:c.removeAllListeners,uninstall:L}};function F(n,t,r){var e=n[t];return e==null&&r!==void 0?r:e}Object.defineProperty(he,"__esModule",{value:!0});var Et=St,Ct=function(){function n(t){var r=this;this.handler=t,this.listenedElement=null,this.hasResizeObserver=typeof window.ResizeObserver<"u",this.hasResizeObserver?this.rz=new ResizeObserver(function(e){r.handler(De(e[0].target))}):this.erd=Et({strategy:"scroll"})}return n.prototype.observe=function(t){var r=this;this.listenedElement!==t&&(this.listenedElement&&this.disconnect(),t&&(this.hasResizeObserver?this.rz.observe(t):this.erd.listenTo(t,function(e){r.handler(De(e))})),this.listenedElement=t)},n.prototype.disconnect=function(){this.listenedElement&&(this.hasResizeObserver?this.rz.disconnect():this.erd.uninstall(this.listenedElement),this.listenedElement=null)},n}();he.default=Ct;function De(n){return{width:He(window.getComputedStyle(n).width),height:He(window.getComputedStyle(n).height)}}function He(n){var t=/^([0-9\.]+)px$/.exec(n);return t?parseFloat(t[1]):0}var ue={};Object.defineProperty(ue,"__esModule",{value:!0});var xt=Object.prototype.hasOwnProperty;function Ot(n,t){var r=Object.keys(n),e=Object.keys(t);if(r.length!==e.length)return!1;for(var a=0;a<r.length;a++)if(!xt.call(t,r[a])||n[r[a]]!==t[r[a]])return!1;return!0}ue.default=Ot;Object.defineProperty(fe,"__esModule",{value:!0});var kt=he,_t=de,zt=ue,Dt=function(){function n(t,r){var e=this;this.result={},this.animationFrameRequestId=null,this.rol=new kt.default(function(a){e.animationFrameRequestId=window.requestAnimationFrame(function(){var s=_t.default(t)(a);zt.default(e.result,s)||(r(s),e.result=s)})})}return n.prototype.observe=function(t){this.rol.observe(t)},n.prototype.disconnect=function(){this.animationFrameRequestId&&window.cancelAnimationFrame(this.animationFrameRequestId),this.rol.disconnect()},n}();fe.default=Dt;var Ne=oe&&oe.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])};return function(t,r){n(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}}(),Ht=oe&&oe.__assign||Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n};Object.defineProperty(ce,"__esModule",{value:!0});var Y=Ve,se=Ke,ge=de,pe=fe,Lt=ue,Mt=ce.useContainerQuery=function(n,t){var r=Y.useState(function(){return t?ge.default(n)(t):{}}),e=r[0],a=r[1],s=Y.useState(null),u=s[0],o=s[1],c=Y.useCallback(function(h){o(h)},[o]);return Y.useEffect(function(){if(u){var h=new pe.default(n,function(b){a(b)});return h.observe(u),function(){h.disconnect(),h=null}}},[n,u,a]),[e,c]},jt=function(n){Ne(t,n);function t(r){var e=n.call(this,r)||this;return e.cqCore=null,e.state={params:r.initialSize?ge.default(r.query)(r.initialSize):{}},e}return t.prototype.componentDidMount=function(){this._startObserving(this.props.query)},t.prototype.UNSAFE_componentWillReceiveProps=function(r){this.cqCore&&!qt(this.props.query,r.query)&&(this.cqCore.disconnect(),this.cqCore=null,this._startObserving(r.query))},t.prototype.componentDidUpdate=function(){this.cqCore.observe(se.findDOMNode(this))},t.prototype.componentWillUnmount=function(){this.cqCore.disconnect(),this.cqCore=null},t.prototype.render=function(){return this.props.children(this.state.params)},t.prototype._startObserving=function(r){var e=this;this.cqCore=new pe.default(r,function(a){e.setState({params:a})}),this.cqCore.observe(se.findDOMNode(this))},t}(Y.Component);ce.ContainerQuery=jt;function It(n,t,r){return e=function(a){Ne(s,a);function s(u){var o=a.call(this,u)||this;return o.cqCore=null,o.state={params:r?ge.default(t)(r):{}},o}return s.prototype.componentDidMount=function(){var u=this;this.cqCore=new pe.default(t,function(o){u.setState({params:o})}),this.cqCore.observe(se.findDOMNode(this))},s.prototype.componentDidUpdate=function(){this.cqCore.observe(se.findDOMNode(this))},s.prototype.componentWillUnmount=function(){this.cqCore.disconnect(),this.cqCore=null},s.prototype.render=function(){return Y.createElement(n,Ht({},this.props,{containerQuery:this.state.params}))},s}(Y.Component),e.displayName=n.displayName?"ContainerQuery("+n.displayName+")":"ContainerQuery",e;var e}ce.applyContainerQuery=It;var Pt=Object.prototype.hasOwnProperty;function qt(n,t){var r=Object.keys(n),e=Object.keys(t);if(r.length!==e.length)return!1;for(var a=0;a<r.length;a++)if(!Pt.call(t,r[a])||!Lt.default(n[r[a]],t[r[a]]))return!1;return!0}function P(){var n="/home/runner/work/design-system/design-system/src/hooks/useContainerQuery.ts",t="d598dc751b30764c11cc1762dede96b18127cc34",r=window,e="__coverage__",a={path:"/home/runner/work/design-system/design-system/src/hooks/useContainerQuery.ts",statementMap:{0:{start:{line:2,column:33},end:{line:8,column:1}},1:{start:{line:3,column:32},end:{line:3,column:50}},2:{start:{line:4,column:2},end:{line:6,column:3}},3:{start:{line:5,column:4},end:{line:5,column:30}},4:{start:{line:7,column:2},end:{line:7,column:31}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:33},end:{line:2,column:34}},loc:{start:{line:2,column:41},end:{line:8,column:1}},line:2}},branchMap:{0:{loc:{start:{line:4,column:2},end:{line:6,column:3}},type:"if",locations:[{start:{line:4,column:2},end:{line:6,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:4}},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0},b:{0:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/hooks/useContainerQuery.ts"],names:["useContainerQuery","useRCQ","cq","query","containerRef","undefined","window","__STORYBOOK_PREVIEW__"],mappings:"AAAA,SAASA,qBAAqBC,cAAc;AAYrC,aAAMD,oBAAoBA,CAACE,OAAc;AAC9C,QAAM,CAACC,OAAOC,YAAY,IAAIH,OAAOC,IAAIG,MAAS;AAIlD,MAAIC,QAAQC,uBAAuB;AACjC,WAAO,CAAC,CAAC,GAAGH,YAAY;AAAA,EAC1B;AAEA,SAAO,CAACD,OAAOC,YAAY;AAC7B;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d598dc751b30764c11cc1762dede96b18127cc34"},s=r[e]||(r[e]={});(!s[n]||s[n].hash!==t)&&(s[n]=a);var u=s[n];return P=function(){return u},u}P();P().s[0]++;const Rt=n=>{P().f[0]++;const[t,r]=(P().s[1]++,Mt(n,void 0));return P().s[2]++,window!=null&&window.__STORYBOOK_PREVIEW__?(P().b[0][0]++,P().s[3]++,[{},r]):(P().b[0][1]++,P().s[4]++,[t,r])};export{Rt as u};
//# sourceMappingURL=useContainerQuery-DqIcbuCK.js.map
