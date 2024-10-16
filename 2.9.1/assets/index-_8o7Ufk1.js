import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as t}from"./index-CTjT7uj6.js";import{q as g,A as U}from"./styled-components.browser.esm-CkXiwQaI.js";import{c as R}from"./index-C7IrpltL.js";import{_ as S}from"./extends-CF3RwP-h.js";import{$ as P,b as j,c as k,d as x,e as Q,f as D,g as w,h as z}from"./DSProvider-DZ2BDZS9.js";import{S as G,I as W}from"./index-BsP7FXMl.js";import{g as q,c as H}from"./index-ndiHb6d5.js";import"./index-BifjOJLR.js";import{T as E,a as y,b as L}from"./index-CUGQ8N4L.js";import"./index-C1kpn3a9.js";import{S as K}from"./space.enums-aJQ33HT_.js";import{C as Y}from"./constants-CgU6e_L6.js";import{S as F}from"./index-Dc3BNA-e.js";import{I as J}from"./Inline.enums-CsgpNQwN.js";import{P as X}from"./Padbox-DpT_ILeC.js";import{I as V}from"./Icon-C0fNGvgr.js";import"./Snippet-9MtOH0iz.js";const _="Collapsible",[Z,Te]=P(_),[ee,$]=Z(_),Ae=t.forwardRef((A,i)=>{const{__scopeCollapsible:s,open:o,defaultOpen:l,disabled:n,onOpenChange:a,...u}=A,[d=!1,C]=j({prop:o,defaultProp:l,onChange:a});return t.createElement(ee,{scope:s,disabled:n,contentId:k(),open:d,onOpenToggle:t.useCallback(()=>C(f=>!f),[C])},t.createElement(x.div,S({"data-state":I(d),"data-disabled":n?"":void 0},u,{ref:i})))}),ne="CollapsibleTrigger",te=t.forwardRef((A,i)=>{const{__scopeCollapsible:s,...o}=A,l=$(ne,s);return t.createElement(x.button,S({type:"button","aria-controls":l.contentId,"aria-expanded":l.open||!1,"data-state":I(l.open),"data-disabled":l.disabled?"":void 0,disabled:l.disabled},o,{ref:i,onClick:Q(A.onClick,l.onOpenToggle)}))}),N="CollapsibleContent",oe=t.forwardRef((A,i)=>{const{forceMount:s,...o}=A,l=$(N,A.__scopeCollapsible);return t.createElement(D,{present:s||l.open},({present:n})=>t.createElement(le,S({},o,{ref:i,present:n})))}),le=t.forwardRef((A,i)=>{const{__scopeCollapsible:s,present:o,children:l,...n}=A,a=$(N,s),[u,d]=t.useState(o),C=t.useRef(null),f=w(i,C),p=t.useRef(0),b=p.current,m=t.useRef(0),M=m.current,h=a.open||u,O=t.useRef(h),B=t.useRef();return t.useEffect(()=>{const c=requestAnimationFrame(()=>O.current=!1);return()=>cancelAnimationFrame(c)},[]),z(()=>{const c=C.current;if(c){B.current=B.current||{transitionDuration:c.style.transitionDuration,animationName:c.style.animationName},c.style.transitionDuration="0s",c.style.animationName="none";const v=c.getBoundingClientRect();p.current=v.height,m.current=v.width,O.current||(c.style.transitionDuration=B.current.transitionDuration,c.style.animationName=B.current.animationName),d(o)}},[a.open,o]),t.createElement(x.div,S({"data-state":I(a.open),"data-disabled":a.disabled?"":void 0,id:a.contentId,hidden:!h},n,{ref:f,style:{"--radix-collapsible-content-height":b?`${b}px`:void 0,"--radix-collapsible-content-width":M?`${M}px`:void 0,...A.style}}),h&&l)});function I(A){return A?"open":"closed"}const ae=Ae,se=te,ie=oe;function e(){var A="/Users/radekpodrazky/Projects/design-system/src/components/Collapsible/Collapsible.tsx",i="7b4afe1104972d3e912844335e5ddf85f1971528",s=window,o="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/Collapsible/Collapsible.tsx",statementMap:{0:{start:{line:15,column:15},end:{line:20,column:108}},1:{start:{line:20,column:6},end:{line:20,column:83}},2:{start:{line:21,column:22},end:{line:24,column:15}},3:{start:{line:25,column:16},end:{line:34,column:3}},4:{start:{line:30,column:6},end:{line:34,column:2}},5:{start:{line:35,column:19},end:{line:38,column:35}},6:{start:{line:39,column:20},end:{line:75,column:1}},7:{start:{line:49,column:23},end:{line:49,column:57}},8:{start:{line:50,column:30},end:{line:50,column:53}},9:{start:{line:51,column:25},end:{line:51,column:51}},10:{start:{line:52,column:28},end:{line:61,column:3}},11:{start:{line:53,column:4},end:{line:57,column:5}},12:{start:{line:54,column:6},end:{line:54,column:25}},13:{start:{line:56,column:6},end:{line:56,column:22}},14:{start:{line:58,column:4},end:{line:60,column:5}},15:{start:{line:59,column:6},end:{line:59,column:17}},16:{start:{line:62,column:2},end:{line:74,column:10}},17:{start:{line:78,column:0},end:{line:165,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:18,column:105},end:{line:18,column:106}},loc:{start:{line:20,column:6},end:{line:20,column:83}},line:20},1:{name:"(anonymous_1)",decl:{start:{line:28,column:60},end:{line:28,column:61}},loc:{start:{line:30,column:6},end:{line:34,column:2}},line:30},2:{name:"(anonymous_2)",decl:{start:{line:39,column:20},end:{line:39,column:21}},loc:{start:{line:48,column:6},end:{line:75,column:1}},line:48},3:{name:"(anonymous_3)",decl:{start:{line:52,column:28},end:{line:52,column:29}},loc:{start:{line:52,column:38},end:{line:61,column:3}},line:52}},branchMap:{0:{loc:{start:{line:20,column:6},end:{line:20,column:83}},type:"binary-expr",locations:[{start:{line:20,column:6},end:{line:20,column:13}},{start:{line:20,column:17},end:{line:20,column:83}}],line:20},1:{loc:{start:{line:42,column:2},end:{line:42,column:23}},type:"default-arg",locations:[{start:{line:42,column:18},end:{line:42,column:23}}],line:42},2:{loc:{start:{line:51,column:25},end:{line:51,column:51}},type:"binary-expr",locations:[{start:{line:51,column:25},end:{line:51,column:41}},{start:{line:51,column:45},end:{line:51,column:51}}],line:51},3:{loc:{start:{line:53,column:4},end:{line:57,column:5}},type:"if",locations:[{start:{line:53,column:4},end:{line:57,column:5}},{start:{line:55,column:11},end:{line:57,column:5}}],line:53},4:{loc:{start:{line:58,column:4},end:{line:60,column:5}},type:"if",locations:[{start:{line:58,column:4},end:{line:60,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:58},5:{loc:{start:{line:58,column:8},end:{line:58,column:29}},type:"binary-expr",locations:[{start:{line:58,column:8},end:{line:58,column:21}},{start:{line:58,column:25},end:{line:58,column:29}}],line:58},6:{loc:{start:{line:67,column:81},end:{line:67,column:109}},type:"cond-expr",locations:[{start:{line:67,column:98},end:{line:67,column:100}},{start:{line:67,column:103},end:{line:67,column:109}}],line:67},7:{loc:{start:{line:70,column:8},end:{line:70,column:112}},type:"binary-expr",locations:[{start:{line:70,column:8},end:{line:70,column:15}},{start:{line:70,column:35},end:{line:70,column:112}}],line:70},8:{loc:{start:{line:73,column:4},end:{line:73,column:136}},type:"binary-expr",locations:[{start:{line:73,column:4},end:{line:73,column:18}},{start:{line:73,column:38},end:{line:73,column:136}}],line:73}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0},f:{0:0,1:0,2:0,3:0},b:{0:[0,0],1:[0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0]},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/Collapsible/Collapsible.tsx"],names:["useState","styled","css","cls","RadixCollapsible","IconTypes","SSCIconNames","createPadding","getColor","Icon","Text","TextSizes","TextVariants","Inline","SpaceSizes","CLX_COMPONENT","Padbox","Surface","Header","withConfig","displayName","componentId","$isOpen","HeaderContent","div","Content","theme","paddingType","paddingSize","StyledIcon","Collapsible","children","className","defaultIsOpen","subject","title","onOpen","onOpenChange","isOpen","controlledIsOpen","isControlled","setIsOpen","internalIsOpen","handleHeaderClick","open","display","flexDirection","md","angleRight","undefined","ssc","secondary","lg"],mappings:"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"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"7b4afe1104972d3e912844335e5ddf85f1971528"},n=s[o]||(s[o]={});(!n[A]||n[A].hash!==i)&&(n[A]=l);var a=n[A];return e=function(){return a},a}e();const re=(e().s[0]++,g(X).withConfig({displayName:"Collapsible__Header",componentId:"sc-s5uhil-0"})(["width:100%;cursor:pointer;border-radius:var(--sscds-radius);"," &:hover{background-color:",";}"],({$isOpen:A})=>(e().f[0]++,e().s[1]++,e().b[0][0]++,A&&(e().b[0][1]++,U(["border-bottom-right-radius:0;border-bottom-left-radius:0;"]))),q("primary.50"))),ce=(e().s[2]++,g.div.withConfig({displayName:"Collapsible__HeaderContent",componentId:"sc-s5uhil-1"})(["flex:1;"])),de=(e().s[3]++,g(ie).withConfig({displayName:"Collapsible__Content",componentId:"sc-s5uhil-2"})(["border-top:1px solid var(--sscds-border-color);",""],({theme:A})=>(e().f[1]++,e().s[4]++,H({paddingType:"squish",paddingSize:"lg",theme:A})))),Ce=(e().s[5]++,g(V).withConfig({displayName:"Collapsible__StyledIcon",componentId:"sc-s5uhil-3"})(["transition:transform 200ms;"]));e().s[6]++;const pe=({children:A,className:i,defaultIsOpen:s=(e().b[1][0]++,!1),subject:o,title:l,onOpen:n,onOpenChange:a,isOpen:u})=>{e().f[2]++;const d=(e().s[7]++,typeof a=="function"),[C,f]=(e().s[8]++,t.useState(s)),p=(e().s[9]++,e().b[2][0]++,u??(e().b[2][1]++,C));e().s[10]++;const b=m=>{e().f[3]++,e().s[11]++,d?(e().b[3][0]++,e().s[12]++,a(m)):(e().b[3][1]++,e().s[13]++,f(m)),e().s[14]++,e().b[5][0]++,!d&&(e().b[5][1]++,m)?(e().b[4][0]++,e().s[15]++,n==null||n()):e().b[4][1]++};return e().s[16]++,r.jsx(ae,{open:p,onOpenChange:b,children:r.jsxs(F,{className:R(Y,i),radius:"sm",style:{display:"flex",flexDirection:"column"},hasBorder:!0,children:[r.jsx(se,{children:r.jsx(re,{$isOpen:p,paddingSize:"mdPlus",paddingType:"squish",children:r.jsxs(J,{align:"center",gap:K.md,children:[r.jsx(Ce,{name:G.angleRight,rotation:p?(e().b[6][0]++,90):(e().b[6][1]++,void 0),type:W.ssc}),r.jsxs(ce,{children:[r.jsx(E,{as:"div",size:y.md,variant:L.secondary,children:l}),(e().b[7][0]++,o&&(e().b[7][1]++,r.jsx(E,{as:"div",size:y.lg,isBold:!0,children:o})))]})]})})}),(e().b[8][0]++,p&&(e().b[8][1]++,r.jsx(de,{children:r.jsx(E,{as:"div",size:y.md,children:A})})))]})})};e().s[17]++;pe.__docgenInfo={description:"",methods:[],displayName:"Collapsible",props:{title:{required:!0,tsType:{name:"ReactNode"},description:"Main title, accepts custom react node"},children:{required:!0,tsType:{name:"ReactNode"},description:"Content of collapsible panel"},subject:{required:!1,tsType:{name:"string"},description:"Second header line"},defaultIsOpen:{required:!1,tsType:{name:"boolean"},description:"(UNCONTROLLED) Default state of collapsible panel",defaultValue:{value:"false",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"(UNCONTROLLED) Callback fired when collapsible panel is opened"},isOpen:{required:!1,tsType:{name:"boolean"},description:"(CONTROLLED) Collapsible panel external state"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"(CONTROLLED) Callback fired on collapsible panel state change"},className:{required:!1,tsType:{name:"string"},description:""}}};function T(){var A="/Users/radekpodrazky/Projects/design-system/src/components/Snippet/index.ts",i="9c7fa58addeaf8795e5eb643bfde998c4aa394b8",s=window,o="__coverage__",l={path:"/Users/radekpodrazky/Projects/design-system/src/components/Snippet/index.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/Snippet/index.ts"],names:["default","Snippet"],mappings:"AAAA,SAASA,WAAWC,eAAe;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9c7fa58addeaf8795e5eb643bfde998c4aa394b8"},n=s[o]||(s[o]={});(!n[A]||n[A].hash!==i)&&(n[A]=l);var a=n[A];return T=function(){return a},a}T();export{pe as C};
//# sourceMappingURL=index-_8o7Ufk1.js.map
