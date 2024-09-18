import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as t}from"./index-CTjT7uj6.js";import{s as g,A as j}from"./styled-components.browser.esm-xOyuSOjK.js";import{c as T}from"./index-C7IrpltL.js";import{_ as $}from"./extends-CF3RwP-h.js";import{$ as P,b as D,c as k,d as E,e as q,f as L,g as V,h as z}from"./DSProvider-OItu1eMI.js";import{S as G,I as F}from"./index-uyLpYamY.js";import{j as H,c as W,h as K,S as U}from"./index-DT7C7tog.js";import"./index-CHR41AfE.js";import{T as x,a as v,b as Q}from"./index-XqRGyOl1.js";import"./index-h7qFssqm.js";import{S as X}from"./index-B2xEckfB.js";import{I as J}from"./Inline.enums-Dxp6-wcT.js";import{I as Y}from"./Icon-CG4jHxtF.js";import{P as Z}from"./Padbox-DcClumXL.js";import"./Snippet-C19nuQxQ.js";const w="Collapsible",[ee,Re]=P(w),[ne,O]=ee(w),le=t.forwardRef((n,c)=>{const{__scopeCollapsible:i,open:o,defaultOpen:a,disabled:l,onOpenChange:s,...f}=n,[u=!1,m]=D({prop:o,defaultProp:a,onChange:s});return t.createElement(ne,{scope:i,disabled:l,contentId:k(),open:u,onOpenToggle:t.useCallback(()=>m(b=>!b),[m])},t.createElement(E.div,$({"data-state":N(u),"data-disabled":l?"":void 0},f,{ref:c})))}),te="CollapsibleTrigger",oe=t.forwardRef((n,c)=>{const{__scopeCollapsible:i,...o}=n,a=O(te,i);return t.createElement(E.button,$({type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":N(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled},o,{ref:c,onClick:q(n.onClick,a.onOpenToggle)}))}),B="CollapsibleContent",ae=t.forwardRef((n,c)=>{const{forceMount:i,...o}=n,a=O(B,n.__scopeCollapsible);return t.createElement(L,{present:i||a.open},({present:l})=>t.createElement(se,$({},o,{ref:c,present:l})))}),se=t.forwardRef((n,c)=>{const{__scopeCollapsible:i,present:o,children:a,...l}=n,s=O(B,i),[f,u]=t.useState(o),m=t.useRef(null),b=V(c,m),A=t.useRef(0),C=A.current,p=t.useRef(0),S=p.current,y=s.open||f,I=t.useRef(y),h=t.useRef();return t.useEffect(()=>{const d=requestAnimationFrame(()=>I.current=!1);return()=>cancelAnimationFrame(d)},[]),z(()=>{const d=m.current;if(d){h.current=h.current||{transitionDuration:d.style.transitionDuration,animationName:d.style.animationName},d.style.transitionDuration="0s",d.style.animationName="none";const R=d.getBoundingClientRect();A.current=R.height,p.current=R.width,I.current||(d.style.transitionDuration=h.current.transitionDuration,d.style.animationName=h.current.animationName),u(o)}},[s.open,o]),t.createElement(E.div,$({"data-state":N(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!y},l,{ref:b,style:{"--radix-collapsible-content-height":C?`${C}px`:void 0,"--radix-collapsible-content-width":S?`${S}px`:void 0,...n.style}}),y&&a)});function N(n){return n?"open":"closed"}const ie=le,ce=oe,re=ae;function e(){var n="/home/runner/work/design-system/design-system/src/components/Collapsible/Collapsible.tsx",c="28cc08262163ef25b057d8337bcdfbfdd66fa646",i=window,o="__coverage__",a={path:"/home/runner/work/design-system/design-system/src/components/Collapsible/Collapsible.tsx",statementMap:{0:{start:{line:15,column:15},end:{line:20,column:108}},1:{start:{line:20,column:6},end:{line:20,column:83}},2:{start:{line:21,column:22},end:{line:24,column:15}},3:{start:{line:25,column:16},end:{line:34,column:3}},4:{start:{line:30,column:6},end:{line:34,column:2}},5:{start:{line:35,column:19},end:{line:38,column:35}},6:{start:{line:39,column:20},end:{line:75,column:1}},7:{start:{line:49,column:23},end:{line:49,column:57}},8:{start:{line:50,column:30},end:{line:50,column:53}},9:{start:{line:51,column:25},end:{line:51,column:51}},10:{start:{line:52,column:28},end:{line:61,column:3}},11:{start:{line:53,column:4},end:{line:57,column:5}},12:{start:{line:54,column:6},end:{line:54,column:25}},13:{start:{line:56,column:6},end:{line:56,column:22}},14:{start:{line:58,column:4},end:{line:60,column:5}},15:{start:{line:59,column:6},end:{line:59,column:17}},16:{start:{line:62,column:2},end:{line:74,column:10}},17:{start:{line:77,column:0},end:{line:83,column:50}},18:{start:{line:79,column:4},end:{line:79,column:44}},19:{start:{line:81,column:4},end:{line:81,column:1449}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:18,column:105},end:{line:18,column:106}},loc:{start:{line:20,column:6},end:{line:20,column:83}},line:20},1:{name:"(anonymous_1)",decl:{start:{line:28,column:60},end:{line:28,column:61}},loc:{start:{line:30,column:6},end:{line:34,column:2}},line:30},2:{name:"(anonymous_2)",decl:{start:{line:39,column:20},end:{line:39,column:21}},loc:{start:{line:48,column:6},end:{line:75,column:1}},line:48},3:{name:"(anonymous_3)",decl:{start:{line:52,column:28},end:{line:52,column:29}},loc:{start:{line:52,column:38},end:{line:61,column:3}},line:52}},branchMap:{0:{loc:{start:{line:20,column:6},end:{line:20,column:83}},type:"binary-expr",locations:[{start:{line:20,column:6},end:{line:20,column:13}},{start:{line:20,column:17},end:{line:20,column:83}}],line:20},1:{loc:{start:{line:42,column:2},end:{line:42,column:23}},type:"default-arg",locations:[{start:{line:42,column:18},end:{line:42,column:23}}],line:42},2:{loc:{start:{line:51,column:25},end:{line:51,column:51}},type:"binary-expr",locations:[{start:{line:51,column:25},end:{line:51,column:41}},{start:{line:51,column:45},end:{line:51,column:51}}],line:51},3:{loc:{start:{line:53,column:4},end:{line:57,column:5}},type:"if",locations:[{start:{line:53,column:4},end:{line:57,column:5}},{start:{line:55,column:11},end:{line:57,column:5}}],line:53},4:{loc:{start:{line:58,column:4},end:{line:60,column:5}},type:"if",locations:[{start:{line:58,column:4},end:{line:60,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:58},5:{loc:{start:{line:58,column:8},end:{line:58,column:29}},type:"binary-expr",locations:[{start:{line:58,column:8},end:{line:58,column:21}},{start:{line:58,column:25},end:{line:58,column:29}}],line:58},6:{loc:{start:{line:67,column:81},end:{line:67,column:109}},type:"cond-expr",locations:[{start:{line:67,column:98},end:{line:67,column:100}},{start:{line:67,column:103},end:{line:67,column:109}}],line:67},7:{loc:{start:{line:70,column:8},end:{line:70,column:112}},type:"binary-expr",locations:[{start:{line:70,column:8},end:{line:70,column:15}},{start:{line:70,column:35},end:{line:70,column:112}}],line:70},8:{loc:{start:{line:73,column:4},end:{line:73,column:136}},type:"binary-expr",locations:[{start:{line:73,column:4},end:{line:73,column:18}},{start:{line:73,column:38},end:{line:73,column:136}}],line:73}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0},f:{0:0,1:0,2:0,3:0},b:{0:[0,0],1:[0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/Collapsible/Collapsible.tsx"],names:["children","className","subject","title","onOpen","onOpenChange","setIsOpen"],mappings:"AAyFc;AAzFd;AACA;AACA;AACA;AAEA;AACA;AACA;AACA;AACA;AAEA;AACA;AACA;AACA;AAEA;AAA6B;AAAA;AAAA;AAKxB;AAAU;AAWf;AAAgC;AAAA;AAAA;AAIhC;AAAgD;AAAA;AAAA;AAE3C;AAAQ;AACK;AAAe;AAAuB;AAAY;AAGpE;AAA+B;AAAA;AAAA;AAI/B;AAAqB;AACnBA;AACAC;AACgB;AAChBC;AACAC;AACAC;AACAC;AAEgB;AAChB;AACA;AACA;AAEA;AACE;AACEA;AAAiB;AAEjBC;AAAc;AAEhB;AACEF;AAAS;AACX;AAGF;AAQa;AAAW;AAAuB;AAGzC;AAOM;AAGsB;AAGpB;AAMA;AAIE;AAEJ;AAGN;AAME;AAKV;AAEA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"28cc08262163ef25b057d8337bcdfbfdd66fa646"},l=i[o]||(i[o]={});(!l[n]||l[n].hash!==c)&&(l[n]=a);var s=l[n];return e=function(){return s},s}e();const de=(e().s[0]++,g(Z).withConfig({displayName:"Collapsible__Header",componentId:"sc-s5uhil-0"})(["width:100%;cursor:pointer;border-radius:var(--sscds-radius);"," &:hover{background-color:",";}"],({$isOpen:n})=>(e().f[0]++,e().s[1]++,e().b[0][0]++,n&&(e().b[0][1]++,j(["border-bottom-right-radius:0;border-bottom-left-radius:0;"]))),H("primary.50"))),ue=(e().s[2]++,g.div.withConfig({displayName:"Collapsible__HeaderContent",componentId:"sc-s5uhil-1"})(["flex:1;"])),me=(e().s[3]++,g(re).withConfig({displayName:"Collapsible__Content",componentId:"sc-s5uhil-2"})(["border-top:1px solid var(--sscds-border-color);",""],({theme:n})=>(e().f[1]++,e().s[4]++,W({paddingType:"squish",paddingSize:"lg",theme:n})))),Ae=(e().s[5]++,g(Y).withConfig({displayName:"Collapsible__StyledIcon",componentId:"sc-s5uhil-3"})(["transition:transform 200ms;"]));e().s[6]++;const _=({children:n,className:c,defaultIsOpen:i=(e().b[1][0]++,!1),subject:o,title:a,onOpen:l,onOpenChange:s,isOpen:f})=>{e().f[2]++;const u=(e().s[7]++,typeof s=="function"),[m,b]=(e().s[8]++,t.useState(i)),A=(e().s[9]++,e().b[2][0]++,f??(e().b[2][1]++,m));e().s[10]++;const C=p=>{e().f[3]++,e().s[11]++,u?(e().b[3][0]++,e().s[12]++,s(p)):(e().b[3][1]++,e().s[13]++,b(p)),e().s[14]++,e().b[5][0]++,!u&&(e().b[5][1]++,p)?(e().b[4][0]++,e().s[15]++,l==null||l()):e().b[4][1]++};return e().s[16]++,r.jsx(ie,{open:A,onOpenChange:C,children:r.jsxs(X,{className:T(K,c),radius:"sm",style:{display:"flex",flexDirection:"column"},hasBorder:!0,children:[r.jsx(ce,{children:r.jsx(de,{$isOpen:A,paddingSize:"mdPlus",paddingType:"squish",children:r.jsxs(J,{align:"center",gap:U.md,children:[r.jsx(Ae,{name:G.angleRight,rotation:A?(e().b[6][0]++,90):(e().b[6][1]++,void 0),type:F.ssc}),r.jsxs(ue,{children:[r.jsx(x,{as:"div",size:v.md,variant:Q.secondary,children:a}),(e().b[7][0]++,o&&(e().b[7][1]++,r.jsx(x,{as:"div",size:v.lg,isBold:!0,children:o})))]})]})})}),(e().b[8][0]++,A&&(e().b[8][1]++,r.jsx(me,{children:r.jsx(x,{as:"div",size:v.md,children:n})})))]})})},we=_;e().s[17]++;try{e().s[18]++,_.displayName="Collapsible",e().s[19]++,_.__docgenInfo={description:"",displayName:"Collapsible",props:{title:{defaultValue:null,description:"Main title, accepts custom react node",name:"title",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Content of collapsible panel",name:"children",required:!0,type:{name:"ReactNode"}},subject:{defaultValue:null,description:"Second header line",name:"subject",required:!1,type:{name:"string"}},defaultIsOpen:{defaultValue:{value:"false"},description:"(UNCONTROLLED) Default state of collapsible panel",name:"defaultIsOpen",required:!1,type:{name:"boolean"}},onOpen:{defaultValue:null,description:"(UNCONTROLLED) Callback fired when collapsible panel is opened",name:"onOpen",required:!1,type:{name:"() => void"}},isOpen:{defaultValue:null,description:"(CONTROLLED) Collapsible panel external state",name:"isOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"(CONTROLLED) Callback fired on collapsible panel state change",name:"onOpenChange",required:!1,type:{name:"(open: boolean) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}function M(){var n="/home/runner/work/design-system/design-system/src/components/Snippet/index.ts",c="c18aa90b3a8ee2901bed1dcd79d669afc6549227",i=window,o="__coverage__",a={path:"/home/runner/work/design-system/design-system/src/components/Snippet/index.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/Snippet/index.ts"],names:["default","Snippet"],mappings:"AAAA,SAASA,WAAWC,eAAe;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c18aa90b3a8ee2901bed1dcd79d669afc6549227"},l=i[o]||(i[o]={});(!l[n]||l[n].hash!==c)&&(l[n]=a);var s=l[n];return M=function(){return s},s}M();export{we as C};
//# sourceMappingURL=index-CwNI0cHs.js.map
