import{j as se}from"./jsx-runtime-CfatFE5O.js";import{g as J,a as W,I as q,R as ae,l as re}from"./en-US-DTEh3xIi.js";import{r as y}from"./index-ClcD9ViR.js";import{G as ie,v as oe,H as le}from"./index-CeGY6Ei3.js";import{g as ce}from"./_commonjsHelpers-Cpj98o6Y.js";var ue={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};const Ae=ce(ue);var fe=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function D(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(Ae[t[1]]||e.charAt(e.length-2)==="/")&&(n.voidElement=!0),n.name.startsWith("!--"))){var a=e.indexOf("-->");return{type:"comment",comment:a!==-1?e.slice(4,a):""}}for(var A=new RegExp(fe),s=null;(s=A.exec(e))!==null;)if(s[0].trim())if(s[1]){var o=s[1].trim(),g=[o,""];o.indexOf("=")>-1&&(g=o.split("=")),n.attrs[g[0]]=g[1],A.lastIndex--}else s[2]&&(n.attrs[s[2]]=s[3].trim().substring(1,s[3].length-1));return n}var me=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,pe=/^\s*$/,de=Object.create(null);function Y(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(t){var a=[];for(var A in t)a.push(A+'="'+t[A]+'"');return a.length?" "+a.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(Y,"")+"</"+n.name+">";case"comment":return e+"<!--"+n.comment+"-->"}}var he={parse:function(e,n){n||(n={}),n.components||(n.components=de);var t,a=[],A=[],s=-1,o=!1;if(e.indexOf("<")!==0){var g=e.indexOf("<");a.push({type:"text",content:g===-1?e:e.substring(0,g)})}return e.replace(me,function(u,c){if(o){if(u!=="</"+t.name+">")return;o=!1}var f,v=u.charAt(1)!=="/",N=u.startsWith("<!--"),x=c+u.length,m=e.charAt(x);if(N){var k=D(u);return s<0?(a.push(k),a):((f=A[s]).children.push(k),a)}if(v&&(s++,(t=D(u)).type==="tag"&&n.components[t.name]&&(t.type="component",o=!0),t.voidElement||o||!m||m==="<"||t.children.push({type:"text",content:e.slice(x,e.indexOf("<",x))}),s===0&&a.push(t),(f=A[s-1])&&f.children.push(t),A[s]=t),(!v||t.voidElement)&&(s>-1&&(t.voidElement||t.name===u.slice(2,-1))&&(s--,t=s===-1?a:A[s]),!o&&m!=="<"&&m)){f=s===-1?a:A[s].children;var i=e.indexOf("<",x),p=e.slice(x,i===-1?void 0:i);pe.test(p)&&(p=" "),(i>-1&&s+f.length>=0||p!==" ")&&f.push({type:"text",content:p})}}),a},stringify:function(e){return e.reduce(function(n,t){return n+Y("",t)},"")}};const V=(...e)=>{console!=null&&console.warn&&(j(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e))},Q={},z=(...e)=>{j(e[0])&&Q[e[0]]||(j(e[0])&&(Q[e[0]]=new Date),V(...e))},X=(e,n)=>()=>{if(e.isInitialized)n();else{const t=()=>{setTimeout(()=>{e.off("initialized",t)},0),n()};e.on("initialized",t)}},R=(e,n,t)=>{e.loadNamespaces(n,X(e,t))},U=(e,n,t,a)=>{j(t)&&(t=[t]),t.forEach(A=>{e.options.ns.indexOf(A)<0&&e.options.ns.push(A)}),e.loadLanguages(n,X(e,a))},ge=(e,n,t={})=>!n.languages||!n.languages.length?(z("i18n.languages were undefined or empty",n.languages),!0):n.hasLoadedNamespace(e,{lng:t.lng,precheck:(a,A)=>{var s;if(((s=t.bindI18n)==null?void 0:s.indexOf("languageChanging"))>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!A(a.isLanguageChangingTo,e))return!1}}),j=e=>typeof e=="string",B=e=>typeof e=="object"&&e!==null,H=(e,n)=>{var a;if(!e)return!1;const t=((a=e.props)==null?void 0:a.children)??e.children;return n?t.length>0:!!t},_=e=>{var t,a;if(!e)return[];const n=((t=e.props)==null?void 0:t.children)??e.children;return(a=e.props)!=null&&a.i18nIsDynamicList?K(n):n},ye=e=>Array.isArray(e)&&e.every(y.isValidElement),K=e=>Array.isArray(e)?e:[e],Ce=(e,n)=>{const t={...n};return t.props=Object.assign(e.props,n.props),t},Z=(e,n)=>{if(!e)return"";let t="";const a=K(e),A=n!=null&&n.transSupportBasicHtmlNodes?n.transKeepBasicHtmlNodesFor??[]:[];return a.forEach((s,o)=>{if(j(s))t+=`${s}`;else if(y.isValidElement(s)){const{props:g,type:u}=s,c=Object.keys(g).length,f=A.indexOf(u)>-1,v=g.children;if(!v&&f&&!c)t+=`<${u}/>`;else if(!v&&(!f||c)||g.i18nIsDynamicList)t+=`<${o}></${o}>`;else if(f&&c===1&&j(v))t+=`<${u}>${v}</${u}>`;else{const N=Z(v,n);t+=`<${o}>${N}</${o}>`}}else if(s===null)V("Trans: the passed in value is invalid - seems you passed in a null child.");else if(B(s)){const{format:g,...u}=s,c=Object.keys(u);if(c.length===1){const f=g?`${c[0]}, ${g}`:c[0];t+=`{{${f}}}`}else V("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",s)}else V("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",s)}),t},Ee=(e,n,t,a,A,s)=>{if(n==="")return[];const o=a.transKeepBasicHtmlNodesFor||[],g=n&&new RegExp(o.map(i=>`<${i}`).join("|")).test(n);if(!e&&!g&&!s)return[n];const u={},c=i=>{K(i).forEach(l=>{j(l)||(H(l)?c(_(l)):B(l)&&!y.isValidElement(l)&&Object.assign(u,l))})};c(e);const f=he.parse(`<0>${n}</0>`),v={...u,...A},N=(i,p,l)=>{var d;const C=_(i),I=m(C,p.children,l);return ye(C)&&I.length===0||(d=i.props)!=null&&d.i18nIsDynamicList?C:I},x=(i,p,l,C,I)=>{i.dummy?(i.children=p,l.push(y.cloneElement(i,{key:C},I?void 0:p))):l.push(...y.Children.map([i],d=>{const r={...d.props};return delete r.i18nIsDynamicList,y.createElement(d.type,{...r,key:C,ref:d.ref},I?null:p)}))},m=(i,p,l)=>{const C=K(i);return K(p).reduce((d,r,h)=>{var $,w;const T=((w=($=r.children)==null?void 0:$[0])==null?void 0:w.content)&&t.services.interpolator.interpolate(r.children[0].content,v,t.language);if(r.type==="tag"){let O=C[parseInt(r.name,10)];l.length===1&&!O&&(O=l[0][r.name]),O||(O={});const b=Object.keys(r.attrs).length!==0?Ce({props:r.attrs},O):O,M=y.isValidElement(b),G=M&&H(r,!0)&&!r.voidElement,F=g&&B(b)&&b.dummy&&!M,P=B(e)&&Object.hasOwnProperty.call(e,r.name);if(j(b)){const E=t.services.interpolator.interpolate(b,v,t.language);d.push(E)}else if(H(b)||G){const E=N(b,r,l);x(b,E,d,h)}else if(F){const E=m(C,r.children,l);x(b,E,d,h)}else if(Number.isNaN(parseFloat(r.name)))if(P){const E=N(b,r,l);x(b,E,d,h,r.voidElement)}else if(a.transSupportBasicHtmlNodes&&o.indexOf(r.name)>-1)if(r.voidElement)d.push(y.createElement(r.name,{key:`${r.name}-${h}`}));else{const E=m(C,r.children,l);d.push(y.createElement(r.name,{key:`${r.name}-${h}`},E))}else if(r.voidElement)d.push(`<${r.name} />`);else{const E=m(C,r.children,l);d.push(`<${r.name}>${E}</${r.name}>`)}else if(B(b)&&!M){const E=r.children[0]?T:null;E&&d.push(E)}else x(b,T,d,h,r.children.length!==1||!T)}else if(r.type==="text"){const O=a.transWrapTextNodes,b=s?a.unescape(t.services.interpolator.interpolate(r.content,v,t.language)):t.services.interpolator.interpolate(r.content,v,t.language);O?d.push(y.createElement(O,{key:`${r.name}-${h}`},b)):d.push(b)}return d},[])},k=m([{dummy:!0,children:e||[]}],f,K(e||[]));return _(k[0])};function ve({children:e,count:n,parent:t,i18nKey:a,context:A,tOptions:s={},values:o,defaults:g,components:u,ns:c,i18n:f,t:v,shouldUnescape:N,...x}){var O,b,M,G,F,P;const m=f||W();if(!m)return z("You will need to pass in an i18next instance by using i18nextReactModule"),e;const k=v||m.t.bind(m)||(E=>E),i={...J(),...(O=m.options)==null?void 0:O.react};let p=c||k.ns||((b=m.options)==null?void 0:b.defaultNS);p=j(p)?[p]:p||["translation"];const l=Z(e,i),C=g||l||i.transEmptyNodeValue||a,{hashTransKey:I}=i,d=a||(I?I(l||C):l||C);(G=(M=m.options)==null?void 0:M.interpolation)!=null&&G.defaultVariables&&(o=o&&Object.keys(o).length>0?{...o,...m.options.interpolation.defaultVariables}:{...m.options.interpolation.defaultVariables});const r=o||n!==void 0&&!((P=(F=m.options)==null?void 0:F.interpolation)!=null&&P.alwaysFormat)||!e?s.interpolation:{interpolation:{...s.interpolation,prefix:"#$?",suffix:"?$#"}},h={...s,context:A||s.context,count:n,...o,...r,defaultValue:C,ns:p},T=d?k(d,h):C;u&&Object.keys(u).forEach(E=>{const L=u[E];if(typeof L.type=="function"||!L.props||!L.props.children||T.indexOf(`${E}/>`)<0&&T.indexOf(`${E} />`)<0)return;function te(){return y.createElement(y.Fragment,null,L)}u[E]=y.createElement(te)});const $=Ee(u||e,T,m,i,h,N),w=t??i.defaultTransParent;return w?y.createElement(w,x,$):$}function xe({children:e,count:n,parent:t,i18nKey:a,context:A,tOptions:s={},values:o,defaults:g,components:u,ns:c,i18n:f,t:v,shouldUnescape:N,...x}){var l;const{i18n:m,defaultNS:k}=y.useContext(q)||{},i=f||m||W(),p=v||(i==null?void 0:i.t.bind(i));return ve({children:e,count:n,parent:t,i18nKey:a,context:A,tOptions:s,values:o,defaults:g,components:u,ns:c||(p==null?void 0:p.ns)||k||((l=i==null?void 0:i.options)==null?void 0:l.defaultNS),i18n:i,t:v,shouldUnescape:N,...x})}const be=(e,n)=>{const t=y.useRef();return y.useEffect(()=>{t.current=e},[e,n]),t.current},ee=(e,n,t,a)=>e.getFixedT(n,t,a),Te=(e,n,t,a)=>y.useCallback(ee(e,n,t,a),[e,n,t,a]),Se=(e,n={})=>{var I,d,r;const{i18n:t}=n,{i18n:a,defaultNS:A}=y.useContext(q)||{},s=t||a||W();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new ae),!s){z("You will need to pass in an i18next instance by using initReactI18next");const h=($,w)=>j(w)?w:B(w)&&j(w.defaultValue)?w.defaultValue:Array.isArray($)?$[$.length-1]:$,T=[h,{},!1];return T.t=h,T.i18n={},T.ready=!1,T}(I=s.options.react)!=null&&I.wait&&z("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const o={...J(),...s.options.react,...n},{useSuspense:g,keyPrefix:u}=o;let c=e;c=j(c)?[c]:c||["translation"],(r=(d=s.reportNamespaces).addUsedNamespaces)==null||r.call(d,c);const f=(s.isInitialized||s.initializedStoreOnce)&&c.every(h=>ge(h,s,o)),v=Te(s,n.lng||null,o.nsMode==="fallback"?c:c[0],u),N=()=>v,x=()=>ee(s,n.lng||null,o.nsMode==="fallback"?c:c[0],u),[m,k]=y.useState(N);let i=c.join();n.lng&&(i=`${n.lng}${i}`);const p=be(i),l=y.useRef(!0);y.useEffect(()=>{const{bindI18n:h,bindI18nStore:T}=o;l.current=!0,!f&&!g&&(n.lng?U(s,n.lng,c,()=>{l.current&&k(x)}):R(s,c,()=>{l.current&&k(x)})),f&&p&&p!==i&&l.current&&k(x);const $=()=>{l.current&&k(x)};return h&&(s==null||s.on(h,$)),T&&(s==null||s.store.on(T,$)),()=>{l.current=!1,s&&(h==null||h.split(" ").forEach(w=>s.off(w,$))),T&&s&&T.split(" ").forEach(w=>s.store.off(w,$))}},[s,i]),y.useEffect(()=>{l.current&&f&&k(N)},[s,u,f]);const C=[m,s,f];if(C.t=m,C.i18n=s,C.ready=f,f||!f&&!g)return C;throw new Promise(h=>{n.lng?U(s,n.lng,c,()=>h()):R(s,c,()=>h())})};function S(){var e="/Users/radekpodrazky/Projects/design-system/src/hooks/useSafeTranslation.tsx",n="3fdeaadc36e36f4e4d62d7731c73509dfd11a815",t=window,a="__coverage__",A={path:"/Users/radekpodrazky/Projects/design-system/src/hooks/useSafeTranslation.tsx",statementMap:{0:{start:{line:5,column:24},end:{line:5,column:69}},1:{start:{line:5,column:33},end:{line:5,column:69}},2:{start:{line:6,column:34},end:{line:18,column:1}},3:{start:{line:10,column:6},end:{line:10,column:29}},4:{start:{line:11,column:2},end:{line:17,column:4}},5:{start:{line:12,column:25},end:{line:15,column:6}},6:{start:{line:25,column:6},end:{line:25,column:26}},7:{start:{line:26,column:2},end:{line:26,column:102}},8:{start:{line:29,column:0},end:{line:61,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:5,column:24},end:{line:5,column:25}},loc:{start:{line:5,column:33},end:{line:5,column:69}},line:5},1:{name:"(anonymous_1)",decl:{start:{line:6,column:34},end:{line:6,column:35}},loc:{start:{line:6,column:40},end:{line:18,column:1}},line:6},2:{name:"(anonymous_2)",decl:{start:{line:12,column:7},end:{line:12,column:8}},loc:{start:{line:12,column:25},end:{line:15,column:6}},line:12},3:{name:"SafeTrans",decl:{start:{line:19,column:16},end:{line:19,column:25}},loc:{start:{line:22,column:3},end:{line:27,column:1}},line:22}},branchMap:{0:{loc:{start:{line:13,column:9},end:{line:13,column:22}},type:"binary-expr",locations:[{start:{line:13,column:9},end:{line:13,column:16}},{start:{line:13,column:20},end:{line:13,column:22}}],line:13}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},f:{0:0,1:0,2:0,3:0},b:{0:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/hooks/useSafeTranslation.tsx"],names:["Trans","useTranslation","path","split","useWith","en","getDefaultValue","key","useSafeTranslation","t","i18n","options","defaultValue","lng","language","SafeTrans","i18nKey","props"],mappings:"AAwCI;AArCJ,SAASA,OAAOC,sBAAsB;AACtC,SAASC,MAAMC,OAAOC,eAAe;AAIrC,OAAOC,QAAQ;AAKf,MAAMC,kBAAkBA,CAACC,QAAaH,QAAQF,MAAM,CAACC,MAAM,GAAG,CAAC,CAAC,EAAEI,KAAKF,EAAE;AAClE,aAAMG,qBAAqBA,MAG7B;AACH,QAAM;AAAA,IAAEC;AAAAA,IAAGC;AAAAA,EAAK,IAAIT,eAAe,OAAO;AAE1C,SAAO;AAAA,IACLQ,GAAGA,CAACF,KAAKI,YACPF,EAAEF,KAAK;AAAA,MACL,GAAII,WAAW,CAAC;AAAA,MAChBC,cAAcN,gBAAgBC,GAAG;AAAA,IACnC,CAAC;AAAA,IAEHM,KAAKH,KAAKI;AAAAA,EACZ;AACF;AAEO,gBAASC,UAAU;AAAA,EACxBC;AAAAA,EACA,GAAGC;AAG8D,GAAG;AACpE,QAAM;AAAA,IAAER;AAAAA,EAAE,IAAID,mBAAmB;AAEjC,SACE,oBAAC,SACKS,GAAAA,OACJ,cAAcX,gBAAgBU,OAAO,GACrC,SACA,GACA;AAEN;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"3fdeaadc36e36f4e4d62d7731c73509dfd11a815"},s=t[a]||(t[a]={});(!s[e]||s[e].hash!==n)&&(s[e]=A);var o=s[e];return S=function(){return o},o}S();S().s[0]++;const ne=e=>(S().f[0]++,S().s[1]++,ie(oe,[le(".")])(e,re));S().s[2]++;const ke=()=>{S().f[1]++;const{t:e,i18n:n}=(S().s[3]++,Se("sscds"));return S().s[4]++,{t:(t,a)=>(S().f[2]++,S().s[5]++,e(t,{...(S().b[0][0]++,a??(S().b[0][1]++,{})),defaultValue:ne(t)})),lng:n.language}};function $e({i18nKey:e,...n}){S().f[3]++;const{t}=(S().s[6]++,ke());return S().s[7]++,se.jsx(xe,{...n,defaultValue:ne(e),i18nKey:e,t})}S().s[8]++;$e.__docgenInfo={description:"",methods:[],displayName:"SafeTrans",props:{i18nKey:{required:!0,tsType:{name:"union",raw:"ParseKeys<['sscds'], TOptions, undefined> | TemplateStringsArray",elements:[{name:"ParseKeys",elements:[{name:"tuple",raw:"['sscds']",elements:[{name:"literal",value:"'sscds'"}]},{name:"TOptions"},{name:"undefined"}],raw:"ParseKeys<['sscds'], TOptions, undefined>"},{name:"TemplateStringsArray"}]},description:""}}};export{$e as S,ke as u};
//# sourceMappingURL=useSafeTranslation-BoMGciE_.js.map
