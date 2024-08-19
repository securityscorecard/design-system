import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{s as h,k as u}from"./space-1LtLrmuu.js";import{H as n}from"./HintTooltip-C9n5Epz2.js";import"./Surface-DpLLkhSd.js";import{P as p}from"./Padbox-DKEfmyAv.js";import{S as x}from"./Stack-D3Wl5zWT.js";import{I as s}from"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import{P as T}from"./Paragraph-4LRW5eCl.js";import{L as j}from"./Link-DgcOfROh.js";import{T as H}from"./Text-DTP2ysh1.js";import"./index-CTjT7uj6.js";import"./index-BRV0Se7Z.js";import"./Tooltip-D-FMcIGF.js";import"./DSProvider-IYcK3cWD.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-Cr_I21Pv.js";import"./colors-CyEChGtp.js";import"./FloatingContext-C7r7lnEb.js";import"./prop-DG2n0FAQ.js";import"./Icon-4JNizDXH.js";import"./index-DFvsTZbx.js";import"./index-C7IrpltL.js";import"./useLogger-Cd66DVRc.js";import"./DSThemeOverride-BduN1ykm.js";import"./flex.types-BrkCVx66.js";import"./spacing.types-C9Yu1wmA.js";import"./require-router-link-DHB4GfDh.js";import"./react-router-dom-Dge5SpE2.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./BaseLink-D20DZbIA.js";import"./isNotNull-B1xFkUZ3.js";const io={title:"components/HintTooltip",component:n,argTypes:{children:{control:{disable:!0}}},decorators:[r=>o.jsx(p,{paddingSize:"xxl",children:o.jsx(s,{justify:"center",children:r()})})]},e=o.jsxs(x,{gap:"md",children:[o.jsx(T,{size:"md",children:"This is the tooltip content"}),o.jsx(j,{children:"Here is some link"})]}),f=h(p).withConfig({displayName:"HintTooltipstories__ColorBackgroundWrapper",componentId:"sc-1hiy0h0-0"})(["background-color:",";"],u("primary.50")),i=({...r})=>o.jsxs(s,{children:[o.jsx(p,{paddingSize:"lg",children:o.jsx(n,{...r,children:e})}),o.jsx(f,{paddingSize:"lg",children:o.jsx(n,{...r,children:e})})]}),t=()=>o.jsx(x,{gap:"lg",children:o.jsxs(s,{align:"center",gap:"lg",children:[o.jsx(H,{size:"lg",children:"Heading"}),o.jsx(n,{children:e})]})});var a,l,m;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`({
  ...args
}) => <Inline>
    <Padbox paddingSize="lg">
      <HintTooltip {...args}>{Popup}</HintTooltip>
    </Padbox>
    <ColorBackgroundWrapper paddingSize="lg">
      <HintTooltip {...args}>{Popup}</HintTooltip>
    </ColorBackgroundWrapper>
  </Inline>`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,d,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Stack gap="lg">
    <Inline align="center" gap="lg">
      <Text size="lg">Heading</Text>
      <HintTooltip>{Popup}</HintTooltip>
    </Inline>
  </Stack>`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const to=["Default","InlineHintTooltip"];export{i as Default,t as InlineHintTooltip,to as __namedExportsOrder,io as default};
