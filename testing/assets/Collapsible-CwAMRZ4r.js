import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{r as e}from"./index-CTjT7uj6.js";import{s as h,A as P,k as j,c as L,j as q,S as D}from"./space-BY85GhUc.js";import{c as A}from"./index-C7IrpltL.js";import{_ as x}from"./extends-CF3RwP-h.js";import{$ as k,b as M,c as z,d as N,e as H,f as B,g as F,h as G}from"./DSProvider-eD554_K8.js";import{S as U,a as V,I as X}from"./Icon-DSPfH_8v.js";import{T as y,a as _,b as J}from"./Text-CQej7zPl.js";import{I as K}from"./Inline-CNottUT6.js";import{S as Q}from"./Surface-CvF-S7pg.js";import{P as W}from"./Padbox-CsIyVOa3.js";import"./Stack-vWwwEz_d.js";import"./Cluster-BOKWm1iB.js";const E="Collapsible",[Y,Te]=k(E),[Z,v]=Y(E),ee=e.forwardRef((t,l)=>{const{__scopeCollapsible:c,open:s,defaultOpen:n,disabled:a,onOpenChange:r,...m}=t,[d=!1,p]=M({prop:s,defaultProp:n,onChange:r});return e.createElement(Z,{scope:c,disabled:a,contentId:z(),open:d,onOpenToggle:e.useCallback(()=>p(b=>!b),[p])},e.createElement(N.div,x({"data-state":T(d),"data-disabled":a?"":void 0},m,{ref:l})))}),te="CollapsibleTrigger",ne=e.forwardRef((t,l)=>{const{__scopeCollapsible:c,...s}=t,n=v(te,c);return e.createElement(N.button,x({type:"button","aria-controls":n.contentId,"aria-expanded":n.open||!1,"data-state":T(n.open),"data-disabled":n.disabled?"":void 0,disabled:n.disabled},s,{ref:l,onClick:H(t.onClick,n.onOpenToggle)}))}),S="CollapsibleContent",se=e.forwardRef((t,l)=>{const{forceMount:c,...s}=t,n=v(S,t.__scopeCollapsible);return e.createElement(B,{present:c||n.open},({present:a})=>e.createElement(oe,x({},s,{ref:l,present:a})))}),oe=e.forwardRef((t,l)=>{const{__scopeCollapsible:c,present:s,children:n,...a}=t,r=v(S,c),[m,d]=e.useState(s),p=e.useRef(null),b=F(l,p),f=e.useRef(0),$=f.current,u=e.useRef(0),O=u.current,g=r.open||m,R=e.useRef(g),C=e.useRef();return e.useEffect(()=>{const i=requestAnimationFrame(()=>R.current=!1);return()=>cancelAnimationFrame(i)},[]),G(()=>{const i=p.current;if(i){C.current=C.current||{transitionDuration:i.style.transitionDuration,animationName:i.style.animationName},i.style.transitionDuration="0s",i.style.animationName="none";const I=i.getBoundingClientRect();f.current=I.height,u.current=I.width,R.current||(i.style.transitionDuration=C.current.transitionDuration,i.style.animationName=C.current.animationName),d(s)}},[r.open,s]),e.createElement(N.div,x({"data-state":T(r.open),"data-disabled":r.disabled?"":void 0,id:r.contentId,hidden:!g},a,{ref:b,style:{"--radix-collapsible-content-height":$?`${$}px`:void 0,"--radix-collapsible-content-width":O?`${O}px`:void 0,...t.style}}),g&&n)});function T(t){return t?"open":"closed"}const ae=ee,re=ne,ie=se,le=h(W).withConfig({displayName:"Collapsible__Header",componentId:"sc-s5uhil-0"})(["width:100%;cursor:pointer;border-radius:var(--sscds-radius);"," &:hover{background-color:",";}"],({$isOpen:t})=>t&&P(["border-bottom-right-radius:0;border-bottom-left-radius:0;"]),j("primary.50")),ce=h.div.withConfig({displayName:"Collapsible__HeaderContent",componentId:"sc-s5uhil-1"})(["flex:1;"]),de=h(ie).withConfig({displayName:"Collapsible__Content",componentId:"sc-s5uhil-2"})(["border-top:1px solid var(--sscds-border-color);",""],({theme:t})=>L({paddingType:"squish",paddingSize:"lg",theme:t})),pe=h(X).withConfig({displayName:"Collapsible__StyledIcon",componentId:"sc-s5uhil-3"})(["transition:transform 200ms;"]),w=({children:t,className:l,defaultIsOpen:c=!1,subject:s,title:n,onOpen:a,onOpenChange:r,isOpen:m})=>{const d=typeof r=="function",[p,b]=e.useState(c),f=m??p,$=u=>{d?r(u):b(u),!d&&u&&(a==null||a())};return o.jsx(ae,{open:f,onOpenChange:$,children:o.jsxs(Q,{className:A(q,l),radius:"sm",style:{display:"flex",flexDirection:"column"},hasBorder:!0,children:[o.jsx(re,{children:o.jsx(le,{$isOpen:f,paddingSize:"mdPlus",paddingType:"squish",children:o.jsxs(K,{align:"center",gap:D.md,children:[o.jsx(pe,{name:U.angleRight,rotation:f?90:void 0,type:V.ssc}),o.jsxs(ce,{children:[o.jsx(y,{as:"div",size:_.md,variant:J.secondary,children:n}),s&&o.jsx(y,{as:"div",size:_.lg,isBold:!0,children:s})]})]})})}),f&&o.jsx(de,{children:o.jsx(y,{as:"div",size:_.md,children:t})})]})})},Oe=w;w.__docgenInfo={description:"",methods:[],displayName:"Collapsible",props:{title:{required:!0,tsType:{name:"ReactNode"},description:"Main title, accepts custom react node"},children:{required:!0,tsType:{name:"ReactNode"},description:"Content of collapsible panel"},subject:{required:!1,tsType:{name:"string"},description:"Second header line"},defaultIsOpen:{required:!1,tsType:{name:"boolean"},description:"(UNCONTROLLED) Default state of collapsible panel",defaultValue:{value:"false",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"(UNCONTROLLED) Callback fired when collapsible panel is opened"},isOpen:{required:!1,tsType:{name:"boolean"},description:"(CONTROLLED) Collapsible panel external state"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"(CONTROLLED) Callback fired on collapsible panel state change"},className:{required:!1,tsType:{name:"string"},description:""}}};export{Oe as C};
