import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{r as f}from"./index-CTjT7uj6.js";import{P as o}from"./index-BRV0Se7Z.js";import{s as r,g as y,S as n,h as g,c as P,P as w,j as I,D as b}from"./space-1LtLrmuu.js";import{c as _}from"./index-C7IrpltL.js";import{I as h,S as i,a as v}from"./Icon-4JNizDXH.js";import{I as x}from"./Input-CflEDIf9.js";import"./DSProvider-IYcK3cWD.js";import"./DSThemeOverride-BduN1ykm.js";import"./index-DFvsTZbx.js";import"./theme-Cr_I21Pv.js";const N=r.div.withConfig({displayName:"Password__PasswordWrapper",componentId:"sc-1sypm9m-0"})(["position:relative;"]),S=r(x).withConfig({displayName:"Password__PasswordInput",componentId:"sc-1sypm9m-1"})(["padding-right:",";"],y(n.lgPlus)),T=r.button.withConfig({displayName:"Password__ToggleButton",componentId:"sc-1sypm9m-2"})(["border:0;appearance:none;background:none;box-sizing:content-box;width:",";position:absolute;top:0;bottom:0;right:0;",";display:flex;align-items:center;justify-content:center;"],g(16),({theme:e})=>P({paddingSize:n.md,paddingType:w.squish,theme:e})),t=({isInvalid:e=!1,isDisabled:l=!1,defaultIsRevealed:d=!1,className:p,...m})=>{const[s,c]=f.useState(d),u=()=>{c(!s)};return a.jsxs(N,{className:_(I,p),children:[a.jsx(S,{isDisabled:l,isInvalid:e,...m,type:s?"text":"password"}),a.jsx(T,{"aria-label":`${s?"Hide":"Show"} password`,onClick:u,children:a.jsx(h,{color:b.neutral700,name:s?i.eyeSlash:i.eye,type:v.ssc})})]})};t.propTypes={isInvalid:o.bool,isDisabled:o.bool,defaultIsRevealed:o.bool,className:o.string};const L=t;try{t.displayName="Password",t.__docgenInfo={description:"",displayName:"Password",props:{defaultIsRevealed:{defaultValue:{value:"false"},description:"",name:"defaultIsRevealed",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isInvalid:{defaultValue:{value:"false"},description:"",name:"isInvalid",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}}}}}catch{}export{L as P};
