import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{S as d}from"./space-BY85GhUc.js";import{g as I}from"./storybook-ByffxkSu.js";import"./Surface-CvF-S7pg.js";import"./Padbox-CsIyVOa3.js";import{S as f}from"./Stack-vWwwEz_d.js";import{I as c}from"./Inline-CNottUT6.js";import"./Cluster-BOKWm1iB.js";import{P as o}from"./Paragraph-DLn62-bA.js";import{S as t,a}from"./Switch-0dtb0Z-n.js";import"./index-CTjT7uj6.js";import"./zipObj-C9fmdzRH.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./flex.types-BrkCVx66.js";import"./useLogger-CziYgifR.js";import"./DSProvider-eD554_K8.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DztFT9GZ.js";import"./colors-DAn332pn.js";import"./prop-Cw0eZkJ_.js";import"./spacing.types-C9Yu1wmA.js";import"./Text-CQej7zPl.js";import"./subtract-C6lrP-Nx.js";const M={title:"components/forms/Switch",component:t,argTypes:{defaultChecked:{control:{type:"boolean"}},size:{...I("select",a)}}},i=b=>e.jsx(t,{...b});i.args={switchId:"playground"};i.parameters={screenshot:{skip:!0}};const s=()=>e.jsx(t,{switchId:"default"}),r=()=>e.jsxs(f,{gap:"md",children:[e.jsx(o,{children:"Not Checked"}),e.jsxs(c,{align:"center",gap:d.md,children:[e.jsx(t,{switchId:"withoutLabel1"}),e.jsx(t,{size:a.sm,switchId:"withoutLabel1Sm"})]}),e.jsx(o,{children:"Not Checked and disabled"}),e.jsxs(c,{align:"center",gap:d.md,children:[e.jsx(t,{switchId:"withoutLabel2",isDisabled:!0}),e.jsx(t,{size:a.sm,switchId:"withoutLabel2Sm",isDisabled:!0})]}),e.jsx(o,{children:"Checked"}),e.jsxs(c,{align:"center",gap:d.md,children:[e.jsx(t,{switchId:"withoutLabel3",defaultChecked:!0}),e.jsx(t,{size:a.sm,switchId:"withoutLabel3Sm",defaultChecked:!0})]}),e.jsx(o,{children:"Checked and disabled"}),e.jsxs(c,{align:"center",gap:d.md,children:[e.jsx(t,{switchId:"withoutLabel4",defaultChecked:!0,isDisabled:!0}),e.jsx(t,{size:a.sm,switchId:"withoutLabel4Sm",defaultChecked:!0,isDisabled:!0})]})]});i.__docgenInfo={description:"",methods:[],displayName:"Playground"};s.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"WithoutLabel"};var n,h,l;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:"args => <Switch {...args} />",...(l=(h=i.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:'() => <Switch switchId="default" />',...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var w,S,g;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`() => <Stack gap="md">
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
  </Stack>`,...(g=(S=r.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const Q=["Playground","Default","WithoutLabel"];export{s as Default,i as Playground,r as WithoutLabel,Q as __namedExportsOrder,M as default};
