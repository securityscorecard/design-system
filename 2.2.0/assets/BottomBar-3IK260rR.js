import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{P as e}from"./index-BRV0Se7Z.js";import{s as b,g as h,S as o}from"./space-1LtLrmuu.js";import"./Surface-DpLLkhSd.js";import"./Padbox-DKEfmyAv.js";import"./Stack-D3Wl5zWT.js";import{I as i}from"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import{P as B}from"./Paragraph-4LRW5eCl.js";import{B as a}from"./Button-vDRI25at.js";import"./DSProvider-IYcK3cWD.js";import"./DSThemeOverride-BduN1ykm.js";import"./index-DFvsTZbx.js";import"./theme-Cr_I21Pv.js";const E=b(a).withConfig({displayName:"BottomBar__AddFilterButton",componentId:"sc-puu9w9-0"})(["padding-left:",";"],h(o.sm)),l=({onSubmit:r,onAdd:d,onClearAll:u,onClose:p,onCancel:m,isCancelEnabled:c=!0,isLoading:f=!1,hasUnappliedFilters:v,isApplyDisabled:y=!1,hasCloseButton:C,hasApplyButton:t=!0})=>{const s=c&&f;return n.jsxs(i,{gap:o.lg,justify:"space-between",children:[n.jsxs(i,{gap:o.lg,children:[n.jsx(E,{color:"primary",iconStart:{name:"plus"},variant:"text",onClick:d,children:"Add criteria"}),n.jsx(a,{color:"primary",variant:"text",onClick:u,children:"Clear all criteria"})]}),n.jsxs(i,{align:"center",gap:o.md,children:[v&&t&&n.jsx(B,{as:"div",margin:"none",size:"md",variant:"secondary",children:"You have unapplied filters"}),s&&t?n.jsx(a,{color:"primary",variant:"outline",onClick:m,children:"Cancel"}):C?n.jsx(a,{color:"primary",variant:"outline",onClick:p,children:"Close"}):null,t&&n.jsx(a,{color:"primary",isDisabled:y,isLoading:s,variant:"solid",onClick:r,children:"Apply"})]})]})},H=l;l.propTypes={hasUnappliedFilters:e.bool.isRequired,onSubmit:e.func.isRequired,onAdd:e.func.isRequired,onCancel:e.func.isRequired,onClearAll:e.func.isRequired,onClose:e.func.isRequired,isCancelEnabled:e.bool,isLoading:e.bool,isApplyDisabled:e.bool,hasCloseButton:e.bool,hasApplyButton:e.bool};try{l.displayName="BottomBar",l.__docgenInfo={description:"",displayName:"BottomBar",props:{onAdd:{defaultValue:null,description:"",name:"onAdd",required:!0,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>) => void"}},onClearAll:{defaultValue:null,description:"",name:"onClearAll",required:!0,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>) => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>) => void"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>) => void"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>) => void"}},hasUnappliedFilters:{defaultValue:null,description:"",name:"hasUnappliedFilters",required:!0,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isCancelEnabled:{defaultValue:{value:"true"},description:"",name:"isCancelEnabled",required:!1,type:{name:"boolean"}},isApplyDisabled:{defaultValue:{value:"false"},description:"",name:"isApplyDisabled",required:!1,type:{name:"boolean"}},hasCloseButton:{defaultValue:null,description:"",name:"hasCloseButton",required:!1,type:{name:"boolean"}},hasApplyButton:{defaultValue:{value:"true"},description:"",name:"hasApplyButton",required:!1,type:{name:"boolean"}}}}}catch{}export{H as B};
