import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{_ as x,a8 as g,a9 as j,p as v,h as E,s as _}from"./space-1LtLrmuu.js";import"./Surface-DpLLkhSd.js";import"./Padbox-DKEfmyAv.js";import{S as z}from"./Stack-D3Wl5zWT.js";import{I as B}from"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import{u as I}from"./useLogger-Cd66DVRc.js";import{T as o}from"./Text-DTP2ysh1.js";import{L as p}from"./Link-DgcOfROh.js";import{f as T}from"./flip-CEUNNqfM.js";import{p as d}from"./prop-DG2n0FAQ.js";function C(e){return x(function(t,n){return g(Math.max(0,t.length-n.length),function(){return t.apply(this,e(n,arguments))})})}var N=C(T(j));const w={sm:24,md:48,lg:64},c=v(d("size"),N(d,[w]),E),f=_.div.withConfig({displayName:"ErrorBoundary__IllustrationContainer",componentId:"sc-794fj5-0"})(["width:",";height:",";"],c,c),y="We cannot show this information now",h="If the problem persists, contact support.",S=({content:e="Failed to load."})=>r.jsx(o,{size:"md",variant:"secondary",children:e}),V=({title:e=y,content:t=h,illustration:n,onClick:a,size:i})=>r.jsxs(B,{align:"center",gap:"md",children:[n&&r.jsx(f,{size:i,children:n}),r.jsx(o,{size:"md",variant:"secondary",isBold:!0,children:e}),r.jsx(o,{size:"md",variant:"secondary",children:t}),a&&r.jsx(p,{onClick:a,children:"Try Again"})]}),u=({illustration:e,title:t=y,content:n=h,justify:a="center",size:i,onClick:l})=>r.jsxs(z,{gap:"sm",justify:a,children:[e&&r.jsx(f,{size:i,children:e}),r.jsx(o,{size:"h4",variant:"secondary",children:t}),r.jsx(o,{variant:"secondary",children:n}),l&&r.jsx(p,{onClick:l,children:"Try Again"})]}),m={xs:S,sm:V,md:u,lg:u},s=e=>{const{size:t}=e,{error:n}=I("ErrorBoundary"),a=m[t];return typeof a>"u"?(n(`Wrong size (${t}) was provided to ErrorBoundary component. Valid values are ${Object.keys(m)}`),null):r.jsx(a,{...e})},U=s;try{s.displayName="ErrorBoundary",s.__docgenInfo={description:"",displayName:"ErrorBoundary",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},justify:{defaultValue:{value:"center"},description:"",name:"justify",required:!1,type:{name:"JustifyContent"}},illustration:{defaultValue:null,description:"",name:"illustration",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},title:{defaultValue:{value:"We cannot show this information now"},description:"",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:{value:"If the problem persists, contact support."},description:"",name:"content",required:!1,type:{name:"ReactNode"}}}}}catch{}export{U as E};
