import{r as o}from"./index-BwDkhjyp.js";import{r as K}from"./index-DhoXBIRq.js";var I=function(l){var t=o.useRef(l);return t.current=l,t},L=function(l,t){t===void 0&&(t=100);var n=setTimeout(function(){clearTimeout(n),l()},t)},R=function(l){return Array.isArray(l)?l.every(function(t){return!Array.from(document.getElementsByClassName(t)).length}):l},T=function(t){var n=document.createElement("div");return n.setAttribute("id",t),document.body.appendChild(n),n},P=function(l,t,n,c,u){return function(r){var s=r.children,m=o.useState(),i=m[0],h=m[1];return o.useEffect(function(){return n?(h(document.getElementById(l)||T(l)),function(){i&&L(function(){t&&i.innerHTML===""&&i.remove()})}):function(){return null}},[i]),o.useEffect(function(){if(!n||!i)return function(){return null};var d=!1,f=function(A){d=!i.contains(A.target)},y=function(A){d&&c(A)},C=function(A){A.key==="Escape"&&u(A)};return c&&(document.addEventListener("mousedown",f),document.addEventListener("click",y)),u&&document.addEventListener("keydown",C),function(){c&&(document.removeEventListener("mousedown",f),document.removeEventListener("click",y)),u&&document.removeEventListener("keydown",C)}},[i]),n&&i?K.createPortal(s,i):null}},W="react-cool-portal",F=function(t){var n=t===void 0?{}:t,c=n.containerId,u=c===void 0?W:c,r=n.autoRemoveContainer,s=r===void 0?!0:r,m=n.defaultShow,i=m===void 0?!0:m,h=n.clickOutsideToHide,d=h===void 0?!0:h,f=n.escToHide,y=f===void 0?!0:f,C=n.internalShowHide,v=C===void 0?!0:C,A=n.onShow,D=n.onHide,g=o.useState(i),p=g[0],H=g[1],b=o.useRef(!1),w=I(A),B=I(D),E=o.useRef(i),S=o.useCallback(function(){d&&(b.current=!0,L(function(){b.current=!1}))},[d]),M=o.useCallback(function(a){S(),!E.current&&(H(!0),E.current=!0,w.current&&w.current(a))},[w,S]),k=o.useCallback(function(a){S(),E.current&&(H(!1),E.current=!1,B.current&&B.current(a))},[B,S]),O=o.useCallback(function(a){E.current?k(a):M(a)},[k,M]),_=o.useCallback(function(a){b.current||(a.type==="click"&&R(d)||a.type==="keydown"&&R(y))&&k(a)},[k]),U=o.useCallback(P(u,s,!v||p,_,_),[v,p]);return{Portal:U,isShow:p,show:M,hide:k,toggle:O}};function e(){var l="/Users/radekpodrazky/Projects/design-system/src/hooks/useOuterCallback.ts",t="54862d444107279d7153631385b67a7f1005625e",n=window,c="__coverage__",u={path:"/Users/radekpodrazky/Projects/design-system/src/hooks/useOuterCallback.ts",statementMap:{0:{start:{line:2,column:29},end:{line:27,column:1}},1:{start:{line:3,column:19},end:{line:3,column:31}},2:{start:{line:4,column:22},end:{line:4,column:34}},3:{start:{line:5,column:2},end:{line:7,column:5}},4:{start:{line:6,column:4},end:{line:6,column:35}},5:{start:{line:8,column:2},end:{line:25,column:9}},6:{start:{line:9,column:25},end:{line:13,column:5}},7:{start:{line:10,column:6},end:{line:12,column:7}},8:{start:{line:11,column:8},end:{line:11,column:31}},9:{start:{line:14,column:27},end:{line:18,column:5}},10:{start:{line:15,column:6},end:{line:17,column:7}},11:{start:{line:16,column:8},end:{line:16,column:24}},12:{start:{line:19,column:4},end:{line:19,column:57}},13:{start:{line:20,column:4},end:{line:20,column:53}},14:{start:{line:21,column:4},end:{line:24,column:6}},15:{start:{line:22,column:6},end:{line:22,column:62}},16:{start:{line:23,column:6},end:{line:23,column:58}},17:{start:{line:26,column:2},end:{line:26,column:18}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:29},end:{line:2,column:30}},loc:{start:{line:2,column:43},end:{line:27,column:1}},line:2},1:{name:"(anonymous_1)",decl:{start:{line:5,column:12},end:{line:5,column:13}},loc:{start:{line:5,column:18},end:{line:7,column:3}},line:5},2:{name:"(anonymous_2)",decl:{start:{line:8,column:12},end:{line:8,column:13}},loc:{start:{line:8,column:18},end:{line:25,column:3}},line:8},3:{name:"(anonymous_3)",decl:{start:{line:9,column:25},end:{line:9,column:26}},loc:{start:{line:9,column:32},end:{line:13,column:5}},line:9},4:{name:"(anonymous_4)",decl:{start:{line:14,column:27},end:{line:14,column:28}},loc:{start:{line:14,column:34},end:{line:18,column:5}},line:14},5:{name:"(anonymous_5)",decl:{start:{line:21,column:11},end:{line:21,column:12}},loc:{start:{line:21,column:17},end:{line:24,column:5}},line:21}},branchMap:{0:{loc:{start:{line:10,column:6},end:{line:12,column:7}},type:"if",locations:[{start:{line:10,column:6},end:{line:12,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:10},1:{loc:{start:{line:10,column:10},end:{line:10,column:125}},type:"binary-expr",locations:[{start:{line:10,column:10},end:{line:10,column:26}},{start:{line:10,column:30},end:{line:10,column:49}},{start:{line:10,column:53},end:{line:10,column:89}},{start:{line:10,column:93},end:{line:10,column:125}}],line:10},2:{loc:{start:{line:15,column:6},end:{line:17,column:7}},type:"if",locations:[{start:{line:15,column:6},end:{line:17,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:15}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0},f:{0:0,1:0,2:0,3:0,4:0,5:0},b:{0:[0,0],1:[0,0,0,0],2:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/hooks/useOuterCallback.ts"],names:["useEffect","useRef","useOuterClick","callback","innerRef","callbackRef","current","fireCallback","e","contains","target","document","body","handleKeypress","key","addEventListener","removeEventListener"],mappings:"AAAA,SAGEA,WACAC,cACK;AAEA,aAAMC,gBAAgB,CAC3BC,aACwB;AACxB,QAAMC,WAAWH,OAAU,IAAI;AAC/B,QAAMI,cAAcJ,OAAO,IAAI;AAG/BD,YAAU,MAAM;AAEdK,gBAAYC,UAAUH;AAAAA,EACxB,CAAC;AAEDH,YAAU,MAAM;AAEd,UAAMO,eAAeA,CAACC,MAAwC;AAC5D,UACEJ,SAASE,WACTD,YAAYC,WACZ,CAACF,SAASE,QAAQG,SAASD,EAAEE,MAAc,KAC3CC,SAASC,KAAKH,SAASD,EAAEE,MAAc,GACvC;AACAL,oBAAYC,QAAQE,CAAC;AAAA,MACvB;AAAA,IACF;AAEA,UAAMK,iBAAiBA,CAACL,MAAqB;AAC3C,UAAIA,EAAEM,QAAQ,UAAU;AACtBP,qBAAaC,CAAC;AAAA,MAChB;AAAA,IACF;AAEAG,aAASI,iBAAiB,WAAWF,cAAc;AACnDF,aAASI,iBAAiB,SAASR,YAAY;AAE/C,WAAO,MAAM;AACXI,eAASK,oBAAoB,WAAWH,cAAc;AACtDF,eAASK,oBAAoB,SAAST,YAAY;AAAA,IACpD;AAAA,EACF,GAAG,EAAE;AAEL,SAAOH;AACT;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"54862d444107279d7153631385b67a7f1005625e"},r=n[c]||(n[c]={});(!r[l]||r[l].hash!==t)&&(r[l]=u);var s=r[l];return e=function(){return s},s}e();e().s[0]++;const G=l=>{e().f[0]++;const t=(e().s[1]++,o.useRef(null)),n=(e().s[2]++,o.useRef(null));return e().s[3]++,o.useEffect(()=>{e().f[1]++,e().s[4]++,n.current=l}),e().s[5]++,o.useEffect(()=>{e().f[2]++,e().s[6]++;const c=r=>{e().f[3]++,e().s[7]++,e().b[1][0]++,t.current&&(e().b[1][1]++,n.current)&&(e().b[1][2]++,!t.current.contains(r.target))&&(e().b[1][3]++,document.body.contains(r.target))?(e().b[0][0]++,e().s[8]++,n.current(r)):e().b[0][1]++};e().s[9]++;const u=r=>{e().f[4]++,e().s[10]++,r.key==="Escape"?(e().b[2][0]++,e().s[11]++,c(r)):e().b[2][1]++};return e().s[12]++,document.addEventListener("keydown",u),e().s[13]++,document.addEventListener("click",c),e().s[14]++,()=>{e().f[5]++,e().s[15]++,document.removeEventListener("keydown",u),e().s[16]++,document.removeEventListener("click",c)}},[]),e().s[17]++,t};export{G as a,F as u};
//# sourceMappingURL=useOuterCallback-D-FgCOcm.js.map
