import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{_ as g,ad as x,ae as j,p as T,h as E,s as v}from"./space-B9R18Mwn.js";import"./Surface-Cs7tekjF.js";import"./Padbox-BrtZqAZY.js";import{S as z}from"./Stack-B_iJg7G-.js";import{I as _}from"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import{u as B}from"./useLogger-D4I9buOf.js";import{T as a}from"./Text-C1sA-5dj.js";import{L as p}from"./Link-C_aB62BF.js";import{f as I}from"./flip-BqWK4A3v.js";import{p as d}from"./prop-3Huj0iT1.js";function w(e){return g(function(t,n){return x(Math.max(0,t.length-n.length),function(){return t.apply(this,e(n,arguments))})})}var C=w(I(j));const N={sm:24,md:48,lg:64},l=T(d("size"),C(d,[N]),E),u=v.div.withConfig({displayName:"ErrorBoundary__IllustrationContainer",componentId:"sc-794fj5-0"})(["width:",";height:",";"],l,l),y="We cannot show this information now",f="If the problem persists, contact support.",S=({content:e="Failed to load."})=>r.jsx(a,{size:"md",variant:"secondary",children:e}),q=({title:e=y,content:t=f,illustration:n,onClick:o,size:s})=>r.jsxs(_,{align:"center",gap:"md",children:[n&&r.jsx(u,{size:s,children:n}),r.jsx(a,{size:"md",variant:"secondary",isBold:!0,children:e}),r.jsx(a,{size:"md",variant:"secondary",children:t}),o&&r.jsx(p,{onClick:o,children:"Try Again"})]}),m=({illustration:e,title:t=y,content:n=f,justify:o="center",size:s,onClick:i})=>r.jsxs(z,{gap:"sm",justify:o,children:[e&&r.jsx(u,{size:s,children:e}),r.jsx(a,{size:"h4",variant:"secondary",children:t}),r.jsx(a,{variant:"secondary",children:n}),i&&r.jsx(p,{onClick:i,children:"Try Again"})]}),c={xs:S,sm:q,md:m,lg:m},h=e=>{const{size:t}=e,{error:n}=B("ErrorBoundary"),o=c[t];return typeof o>"u"?(n(`Wrong size (${t}) was provided to ErrorBoundary component. Valid values are ${Object.keys(c)}`),null):r.jsx(o,{...e})},W=h;h.__docgenInfo={description:"",methods:[],displayName:"ErrorBoundary",props:{size:{required:!0,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},justify:{required:!1,tsType:{name:"Property.JustifyContent"},description:""},illustration:{required:!1,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},content:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{W as E};
