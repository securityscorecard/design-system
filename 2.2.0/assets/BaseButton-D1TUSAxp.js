import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{P as a}from"./index-BRV0Se7Z.js";import{A as l,$ as o,g as T,s as X,q as H,H as G,p as k,h as j,X as W,i,a4 as J,j as K,S as w,P as Q}from"./space-1LtLrmuu.js";import{c as Y}from"./index-C7IrpltL.js";import{S as Z,a as I,I as N}from"./Icon-4JNizDXH.js";import"./DSProvider-IYcK3cWD.js";import"./DSThemeOverride-BduN1ykm.js";import"./index-DFvsTZbx.js";import"./theme-Cr_I21Pv.js";import{r as E}from"./require-router-link-DHB4GfDh.js";import{S as ee}from"./spacing.types-C9Yu1wmA.js";import{S as ae}from"./Spinner-CJrCb2wC.js";import"./Surface-DpLLkhSd.js";import{P as oe}from"./Padbox-DKEfmyAv.js";import"./Stack-D3Wl5zWT.js";import{I as ne}from"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import{i as te,u as re}from"./useLogger-Cd66DVRc.js";import{i as y,a as v}from"./isNotNull-B1xFkUZ3.js";import{n as se}from"./noop-CLoMDX4X.js";const s={solid:"solid",outline:"outline",text:"text",ghost:"ghost"},O={primary:"primary",secondary:"secondary",success:"success",danger:"danger"},ie={lg:"lg",md:"md",sm:"sm"},le=l(["text-decoration:none;background-color:",";color:",";&:hover,&.hover{color:",";background-color:",";}&:disabled,&.disabled{background-color:",";color:",";}"],e=>o(`color-action-${e.$color}`,e),o("color-action-text-solid"),o("color-action-text-solid"),e=>o(`color-action-${e.$color}-hover`,e),o("color-action-background-disabled"),o("color-action-text-disabled")),de=l(["background-color:transparent;border:2px solid ",";color:",";&:hover,&.hover{background-color:",";color:",";border-color:",";}&:disabled,&.disabled{color:",";border-color:",";}"],e=>o(`color-action-${e.$color}`,e),e=>o(`color-action-${e.$color}`,e),e=>o(`color-action-background-${e.$color}-active`,e),e=>o(`color-action-${e.$color}-hover`,e),e=>o(`color-action-${e.$color}-hover`,e),o("color-action-text-disabled"),o("color-action-text-disabled")),S=l(["background-color:transparent;border-color:transparent;padding-left:0;padding-right:0;font-weight:var(--sscds-font-weight-elementlabel-default);color:",";&:hover,&.hover{color:",";background:",";}&:disabled,&.disabled{color:",";}"],e=>o(`color-action-${e.$color}`,e),e=>o(`color-action-${e.$color}-hover`,e),e=>o(`color-action-background-${e.$color}-focus`,e),o("color-action-text-disabled")),ce=l([""," padding-left:",";padding-right:",";"],S,T("sm"),T("sm")),ue={[s.solid]:le,[s.outline]:de,[s.text]:S,[s.ghost]:ce},h=X(oe).withConfig({shouldForwardProp:e=>!te(e,["theme","paddingType","paddingSize"])}).withConfig({displayName:"BaseStyledButton",componentId:"sc-mjfkuu-0"})(["display:inline-flex;align-items:center;justify-content:center;border:none;border-radius:",";font-family:var(--sscds-font-family-body);font-weight:var(--sscds-font-weight-body-default);cursor:pointer;text-align:center;white-space:nowrap;transition:var(--sscds-action-transition),transform 50ms var(--sscds-transition-fn);",";",";",";",";height:",";line-height:1;font-size:",";",";",";&,&:hover,&:focus-visible,&:active{text-decoration:none;}&:active,&&&.active{transform:scale(0.98);}@media (prefers-reduced-motion){&:active,&&&.active{transform:scale(1);}}"],H("default"),({$margin:e})=>G(e),({$isExpanded:e})=>e&&"width: 100%;",({disabled:e})=>e&&"cursor: not-allowed;",({$isLoading:e})=>e&&"cursor: progress;",k(o("size-action-size"),j),o("font-action-size"),({$hasOnlyIcon:e})=>e&&l(["width:",";"],k(o("size-action-size"),j)),({$variant:e})=>ue[e]);try{h.displayName="BaseStyledButton",h.__docgenInfo={description:"",displayName:"BaseStyledButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const b=({children:e,variant:z=s.solid,color:_=O.primary,iconStart:r,iconEnd:t,iconName:x,iconType:C=I.ssc,as:B=null,href:m=null,to:p=null,margin:P="none",onClick:L=se,isDisabled:V=!1,isLoading:d=!1,isExpanded:A=!1,loadingText:R="Loading",className:M,...c})=>{let f=null;const $=W(),{warn:U}=re("Button");y(B)&&v(p)&&(f=E()),V&&m&&U('"isDisabled" prop in <Button> component will be ignored if the "href" prop is defined');const q=B??(v(m)?"a":v(p)?f:"button");if(y(f)&&y(q))return null;const g=i(x)||i(r),D=g||i(t),u=g&&J(e),F=d?n.jsxs(n.Fragment,{children:[n.jsx(ae,{borderWidth:2,height:$.tokens["font-action-size"],verticalMargin:0,width:$.tokens["font-action-size"],dark:!0}),!u&&n.jsx("span",{children:R})]}):D?n.jsxs(n.Fragment,{children:[g&&n.jsx(N,{name:(r==null?void 0:r.name)??x,type:(r==null?void 0:r.type)??C}),i(e)&&n.jsx("span",{children:e}),i(t)&&!u&&n.jsx(N,{name:t==null?void 0:t.name,type:(t==null?void 0:t.type)??"ssc"})]}):e;return n.jsx(h,{$color:_,$hasOnlyIcon:u,$isExpanded:A,$isLoading:d,$margin:P,$variant:z,as:q,className:Y(K,M),disabled:V||d,href:m,paddingSize:w.md,paddingType:Q.squish,to:p,onClick:L,...c,"aria-label":d&&u?"Loading":c==null?void 0:c["aria-label"],children:n.jsx(ne,{align:"center",gap:w.sm,children:F})})};b.propTypes={variant:a.oneOf(Object.values(s)),size:a.oneOf(Object.values(ie)),color:a.oneOf(Object.values(O)),isDisabled:a.bool,isLoading:a.bool,isExpanded:a.bool,margin:ee,href:a.string,to:a.oneOfType([a.string,a.shape({pathname:a.string,search:a.string,hash:a.string})]),className:a.string,iconName:a.oneOfType([a.oneOf(Object.values(Z)),a.string]),iconType:a.oneOfType([a.oneOf(Object.values(I)),a.string]),loadingText:a.string,onClick:a.func};try{b.displayName="BaseButton",b.__docgenInfo={description:"",displayName:"BaseButton",props:{variant:{defaultValue:{value:"solid"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"solid"'},{value:'"outline"'},{value:'"ghost"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isExpanded:{defaultValue:{value:"false"},description:"",name:"isExpanded",required:!1,type:{name:"boolean"}},margin:{defaultValue:{value:"none"},description:"",name:"margin",required:!1,type:{name:"SpacingSizeValue"}},href:{defaultValue:{value:"null"},description:"",name:"href",required:!1,type:{name:"string"}},to:{defaultValue:{value:"null"},description:"",name:"to",required:!1,type:{name:"To"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"BaseIcon"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"BaseIcon"}},iconName:{defaultValue:null,description:"@deprecated Use iconStart property instead",name:"iconName",required:!1,type:{name:"IconNames"}},iconType:{defaultValue:{value:"ssc"},description:"@deprecated Use iconStart property instead",name:"iconType",required:!1,type:{name:"enum",value:[{value:'"ssc"'},{value:'"far"'},{value:'"fab"'}]}},loadingText:{defaultValue:{value:"Loading"},description:"",name:"loadingText",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:{value:"null"},description:"",name:"as",required:!1,type:{name:"string | ComponentType<any>"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"string | ComponentType<any>"}}}}}catch{}export{b as B,s as a,O as b};
