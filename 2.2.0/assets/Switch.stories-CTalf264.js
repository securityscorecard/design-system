import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{S as s}from"./space-1LtLrmuu.js";import{g as I}from"./storybook-BpZQCxPY.js";import"./Surface-DpLLkhSd.js";import"./Padbox-DKEfmyAv.js";import{S as x}from"./Stack-D3Wl5zWT.js";import{I as r}from"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import{P as c}from"./Paragraph-4LRW5eCl.js";import{S as t,a}from"./Switch-BouC_1R9.js";import"./index-CTjT7uj6.js";import"./zipObj-DVsQulIT.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./flex.types-BrkCVx66.js";import"./useLogger-Cd66DVRc.js";import"./DSProvider-IYcK3cWD.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-Cr_I21Pv.js";import"./colors-CyEChGtp.js";import"./prop-DG2n0FAQ.js";import"./spacing.types-C9Yu1wmA.js";import"./Text-DTP2ysh1.js";import"./subtract-BgQ2JsUW.js";const M={title:"components/forms/Switch",component:t,argTypes:{defaultChecked:{control:{type:"boolean"}},size:{...I("select",a)}}},i=b=>e.jsx(t,{...b});i.args={switchId:"playground"};i.parameters={screenshot:{skip:!0}};const d=()=>e.jsx(t,{switchId:"default"}),o=()=>e.jsxs(x,{gap:"md",children:[e.jsx(c,{children:"Not Checked"}),e.jsxs(r,{align:"center",gap:s.md,children:[e.jsx(t,{switchId:"withoutLabel1"}),e.jsx(t,{size:a.sm,switchId:"withoutLabel1Sm"})]}),e.jsx(c,{children:"Not Checked and disabled"}),e.jsxs(r,{align:"center",gap:s.md,children:[e.jsx(t,{switchId:"withoutLabel2",isDisabled:!0}),e.jsx(t,{size:a.sm,switchId:"withoutLabel2Sm",isDisabled:!0})]}),e.jsx(c,{children:"Checked"}),e.jsxs(r,{align:"center",gap:s.md,children:[e.jsx(t,{switchId:"withoutLabel3",defaultChecked:!0}),e.jsx(t,{size:a.sm,switchId:"withoutLabel3Sm",defaultChecked:!0})]}),e.jsx(c,{children:"Checked and disabled"}),e.jsxs(r,{align:"center",gap:s.md,children:[e.jsx(t,{switchId:"withoutLabel4",defaultChecked:!0,isDisabled:!0}),e.jsx(t,{size:a.sm,switchId:"withoutLabel4Sm",defaultChecked:!0,isDisabled:!0})]})]});var h,n,l;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Switch {...args} />",...(l=(n=i.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,p,u;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:'() => <Switch switchId="default" />',...(u=(p=d.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var w,S,g;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`() => <Stack gap="md">
    <Paragraph>Not Checked</Paragraph>
    <Inline align="center" gap={SpaceSizes.md}>
      <Switch switchId="withoutLabel1" />
      <Switch size={SwitchSizes.sm} switchId="withoutLabel1Sm" />
    </Inline>
    <Paragraph>Not Checked and disabled</Paragraph>
    <Inline align="center" gap={SpaceSizes.md}>
      <Switch switchId="withoutLabel2" isDisabled />
      <Switch size={SwitchSizes.sm} switchId="withoutLabel2Sm" isDisabled />
    </Inline>
    <Paragraph>Checked</Paragraph>
    <Inline align="center" gap={SpaceSizes.md}>
      <Switch switchId="withoutLabel3" defaultChecked />
      <Switch size={SwitchSizes.sm} switchId="withoutLabel3Sm" defaultChecked />
    </Inline>
    <Paragraph>Checked and disabled</Paragraph>
    <Inline align="center" gap={SpaceSizes.md}>
      <Switch switchId="withoutLabel4" defaultChecked isDisabled />
      <Switch size={SwitchSizes.sm} switchId="withoutLabel4Sm" defaultChecked isDisabled />
    </Inline>
  </Stack>`,...(g=(S=o.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const Q=["Playground","Default","WithoutLabel"];export{d as Default,i as Playground,o as WithoutLabel,Q as __namedExportsOrder,M as default};
