import{j as p}from"./jsx-runtime-Nms4Y4qS.js";import{r}from"./index-BwDkhjyp.js";import{s as u,F as I,G as C,H as L,E as e,A as s,h as i,r as j,k as v,g as F,i as f,j as H}from"./space-B9R18Mwn.js";import{c as R}from"./index-CVyJwDg7.js";import"./Surface-Cs7tekjF.js";import{P as $}from"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import{m as V}from"./mergeRefs-CX7C4EOn.js";const M=(o,a)=>{const t=r.useCallback(()=>{o&&(o.style.height="auto",o.style.height=`${o.scrollHeight}px`)},[o]);r.useLayoutEffect(()=>{t()},[t,a]),r.useEffect(()=>(window.addEventListener("resize",t),document.fonts.addEventListener("loadingdone",t),()=>{window.removeEventListener("resize",t),document.fonts.removeEventListener("loadingdone",t)}),[t])},P=u.textarea.withConfig({displayName:"TextArea__TextareaStyled",componentId:"sc-1rg490e-0"})(["display:block;border:0 none;width:100%;background-color:transparent;resize:none;font-family:",";font-size:",";line-height:",";color:",";padding:0;",";",";&:focus{outline:none;}::placeholder,::-webkit-input-placeholder{color:",";}:-ms-input-placeholder{color:",";}"],I("base"),C("md"),L("lg"),e("color"),({$minHeight:o})=>o&&s(["min-height:",";"],i(o)),({$maxHeight:o})=>o&&s(["max-height:",";"],i(o)),e("placeholderColor"),e("placeholderColor")),O=u($).withConfig({displayName:"TextArea__TextareaRoot",componentId:"sc-1rg490e-1"})(["position:relative;border:"," solid ",";border-radius:",";box-shadow:inset 0px 0px 0px 1px ",";color:",";cursor:text;background-color:",";",";",";",";&:focus-within{outline:none;border-color:",";box-shadow:inset 0px 0px 0px 1px ",";}"],e("borderWidth"),e("borderColor"),j("default"),e("bgColor"),e("color"),v("neutral.0"),({$hasMaxLength:o})=>o&&s(["padding-bottom:",";"],F("lg")),({$isDisabled:o})=>o&&s(["background:",";border-color:",";box-shadow:inset 0px 0px 0px 1px ",";"],e("disabledBgColor"),e("disabledBorderColor"),e("disabledBgColor")),({$isInvalid:o})=>o&&s(["border-color:",";box-shadow:inset 0px 0px 0px 1px ",";"],e("invalidBorderColor"),e("invalidBorderColor")),e("focusBorderColor"),e("focusBorderColor")),q=u.span.withConfig({displayName:"TextArea__Counter",componentId:"sc-1rg490e-2"})(["position:absolute;right:",";bottom:",";font-size:",";color:",";",""],i(14),i(8),C("md"),v("text.secondary"),({$isInvalid:o})=>o&&s(["color:",";"],e("invalidBorderColor"))),b=(o,a)=>o?o-(a?32:16)-16:null,m=r.forwardRef(({maxLength:o,isInvalid:a,isDisabled:t,className:y,maxHeight:w=600,minHeight:T,...E},B)=>{const{value:n,defaultValue:N,..._}=E,[l,k]=r.useState(N||""),[g,z]=r.useState(null),A=V(B,z),d=n!==void 0,x=d?n.length:l.length,h=a||x>o,c=f(o);return M(g,d?n:l),p.jsxs(O,{$hasMaxLength:c,$isDisabled:t,$isInvalid:h,className:R(H,y),paddingSize:"md",onClick:()=>{g.focus()},children:[p.jsx(P,{ref:A,..._,$maxHeight:b(w,c),$minHeight:b(T,c),disabled:t,...d?{value:n}:{value:l,onChange:S=>k(S.target.value)}}),f(o)&&p.jsx(q,{$isInvalid:h,children:o-x})]})});m.displayName="TextArea";const oo=m;m.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{maxHeight:{defaultValue:{value:"600",computed:!1},required:!1}}};export{oo as T};
