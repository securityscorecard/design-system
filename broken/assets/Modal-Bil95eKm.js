import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as c}from"./index-BwDkhjyp.js";import{P as a}from"./index-Dk74W0Oi.js";import{u as M,a as q}from"./useOuterCallback-D_VzbQoG.js";import{S as s,s as i,h as N,r as P,k as f,i as u,j as S}from"./space-B9R18Mwn.js";import{c as _}from"./index-CVyJwDg7.js";import{u as w,O as I}from"./BaseOverlay-DOzxuK0O.js";import"./Surface-Cs7tekjF.js";import{P as n}from"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import{I as R,S as T}from"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import{f as O}from"./Heading-Doa2oxzU.js";import{m as z}from"./mergeRefs-CX7C4EOn.js";import{a as b}from"./DSProvider-DzIDhM_J.js";import"./theme-BW2FcxSF.js";import"./index-DFvsTZbx.js";import{C as F}from"./CloseButton-CuyKiBXp.js";import{F as k}from"./FloatingContext-nGTlWJDF.js";const o={xs:"xs",sm:"sm",md:"md",lg:"lg"},B={[o.xs]:320,[o.sm]:430,[o.md]:600,[o.lg]:900},E={[o.xs]:s.lg,[o.sm]:s.lg,[o.md]:s.lgPlus,[o.lg]:s.lgPlus},V=i.div.withConfig({displayName:"Modal__BaseModal",componentId:"sc-12at288-0"})(["display:flex;flex-direction:column;max-height:90vh;width:100%;max-width:",";border-radius:",";background-color:",";"],({$maxWidth:t})=>N(t),P("large"),f("neutral.0")),H=i(O).withConfig({displayName:"Modal__Title",componentId:"sc-12at288-1"})(["margin:0;"]),L=i(n).withConfig({displayName:"Modal__Content",componentId:"sc-12at288-2"})(["padding-top:0;overflow-y:auto;"]),$=i(n).withConfig({displayName:"Modal__Footer",componentId:"sc-12at288-3"})(["border-top:1px solid ",";"],f("neutral.300")),r=c.forwardRef(({title:t,onClose:d,footer:l,size:m=o.md,children:g,className:h,...x},y)=>{const{portalsContainerId:C}=c.useContext(b),{Portal:j}=M({containerId:C,internalShowHide:!1,autoRemoveContainer:!1}),p=u(l),v=q(d);return w(),e.jsx(k,{children:e.jsx(j,{children:e.jsx(I,{"data-testid":"dialog-overlay",placement:"center",children:e.jsxs(V,{ref:z(v,y),$maxWidth:B[m],className:_(S,h,"ssc-ui-styled"),...x,children:[e.jsxs(R,{stretch:T.start,children:[e.jsx(n,{paddingSize:s.lgPlus,paddingType:"squish",children:u(t)&&e.jsx(H,{children:t})}),d&&e.jsx(F,{marginCompensation:s.none,onClose:d})]}),e.jsx(L,{paddingSize:E[m],paddingType:p?"squish":"square",children:g}),p&&e.jsx($,{paddingSize:s.lgPlus,paddingType:"squish",children:l})]})})})})});r.displayName="Modal";const ne=r;r.propTypes={children:a.node.isRequired,onClose:a.func.isRequired,title:a.string,footer:a.node,size:a.oneOf(Object.values(o)),className:a.string};r.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{size:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:'"xs"',computed:!1},{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1}]},required:!1},children:{description:"",type:{name:"node"},required:!0},onClose:{description:"",type:{name:"func"},required:!0},title:{description:"",type:{name:"string"},required:!1},footer:{description:"",type:{name:"node"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};export{ne as M,o as a};
