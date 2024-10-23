import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{a as J}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./index-0COcc321.js";import"./index-BC9WaV5B.js";import{T as s}from"./Toast-BH0ypa3_.js";import{T as K}from"./Toast.enums-DSGegFkx.js";import{g as Q}from"./storybook-WT-kyym6.js";import{B as d}from"./Button-Y7NUWBaW.js";import{S as f}from"./index-iY2rO5S8.js";import{S as g}from"./isNotUndefined-DxARNfZG.js";import{I as X}from"./Inline.enums-6YASdLRa.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-BQWFrAEB.js";import"./constants-CHqWh-7J.js";import"./_isObject-BZZHHNGj.js";import"./slice-DUYrgxkR.js";import"./index-CKrVqi-N.js";import"./Padbox-DzmU9-lr.js";import"./index-CVyJwDg7.js";import"./Cluster-CjJ089XP.js";import"./prop-qecTCRZr.js";import"./useLogger-DZJuabeR.js";import"./DSProvider-BQ8JssCJ.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./index-BsP7FXMl.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./index-DmfpuQjN.js";import"./index-B9rA5P-U.js";import"./index-DRQu5xX2.js";import"./CloseButton-DldEAqTZ.js";import"./IconButton-ClFQ-YsQ.js";import"./components-B6h-HAd3.js";import"./index-CA8igt89.js";import"./Icon-OPJ4_-kw.js";import"./index-Dk74W0Oi.js";import"./index-B2Sxccu3.js";import"./Spinner-h6IgF5Nn.js";import"./index-DtDdqmR8.js";import"./isNotNilOrEmpty-DhZRuYOd.js";import"./isNilOrEmpty-DInJvbXo.js";import"./isNil-qfCNC9HL.js";import"./zipObj-C0uoDeoJ.js";const H=r.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere velit magna, id scelerisque neque tristique sit amet. Nam mollis odio enim, sit amet auctor arcu elementum ut. Ut eget iaculis tortor."}),Hr={title:"components/Toast",component:s,args:{onClose:J("close-toast")},argTypes:{variant:{...Q("select",K),description:"Color variant of the toast notification",table:{type:{summary:"'success' | 'info' | 'warn' | 'error' | 'loading'"}}},onClose:{description:"Callback triggered on close button click"}},parameters:{docs:{story:{inline:!1,height:250},description:{component:"```js\nimport { Toast } from '@securityscorecard/design-system';\n```"}}}},e={args:{children:r.jsxs(f,{gap:g.sm,justify:"flex-start",children:[r.jsx("p",{children:"This is a notification."}),r.jsx(d,{size:"sm",variant:"subtle",children:"Action"})]})},parameters:{screenshot:{skip:!0}}},o={args:{children:r.jsxs(f,{gap:g.sm,justify:"flex-start",children:[H,r.jsx(d,{size:"sm",variant:"subtle",children:"Action"})]})}},n={args:{children:r.jsxs(f,{gap:g.sm,justify:"flex-start",children:[H,r.jsxs(X,{gap:g.mdPlus,children:[r.jsx(d,{size:"sm",variant:"subtle",children:"Action A"}),r.jsx(d,{size:"sm",variant:"subtle",children:"Action B"})]})]})}},i={args:{...o.args,width:470}},a={args:{children:r.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a lacus posuere."}),variant:"info"}},c={args:{...a.args,variant:"success"}},m={args:{...a.args,variant:"warn"}},p={args:{...a.args,variant:"error"}},l={args:{...a.args,variant:"loading"}},u={args:{...e.args,isStandalone:!1},render:t=>r.jsxs(f,{gap:"md",children:[r.jsx(s,{...t,variant:"info"}),r.jsx(s,{...t,variant:"success"}),r.jsx(s,{...t,variant:"warn"}),r.jsx(s,{...t,variant:"error"}),r.jsx(s,{...t,variant:"loading"})]}),parameters:{themes:{themeOverride:"Dark"}}};var h,S,v;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <Stack gap={SpaceSizes.sm} justify="flex-start">
        <p>This is a notification.</p>
        <Button size="sm" variant="subtle">
          Action
        </Button>
      </Stack>
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(v=(S=e.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var x,j,k;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: <Stack gap={SpaceSizes.sm} justify="flex-start">
        {longContent}
        <Button size="sm" variant="subtle">
          Action
        </Button>
      </Stack>
  }
}`,...(k=(j=o.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var T,y,C;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: <Stack gap={SpaceSizes.sm} justify="flex-start">
        {longContent}
        <Inline gap={SpaceSizes.mdPlus}>
          <Button size="sm" variant="subtle">
            Action A
          </Button>
          <Button size="sm" variant="subtle">
            Action B
          </Button>
        </Inline>
      </Stack>
  }
}`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var V,b,z;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...LongContent.args,
    width: 470
  }
}`,...(z=(b=i.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var A,B,I;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa
        a lacus posuere.
      </p>,
    variant: 'info'
  }
}`,...(I=(B=a.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var w,L,W;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...VariantInfo.args,
    variant: 'success'
  }
}`,...(W=(L=c.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var P,D,E;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...VariantInfo.args,
    variant: 'warn'
  }
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var q,O,M;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...VariantInfo.args,
    variant: 'error'
  }
}`,...(M=(O=p.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var N,_,R;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...VariantInfo.args,
    variant: 'loading'
  }
}`,...(R=(_=l.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var U,F,G;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    isStandalone: false
  },
  render: args => <Stack gap="md">
      <Toast {...args} variant="info" />
      <Toast {...args} variant="success" />
      <Toast {...args} variant="warn" />
      <Toast {...args} variant="error" />
      <Toast {...args} variant="loading" />
    </Stack>,
  parameters: {
    themes: {
      themeOverride: 'Dark'
    }
  }
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const Jr=["Playground","LongContent","WithTwoActions","WithCustomWidth","VariantInfo","VariantSuccess","VariantWarn","VariantError","VariantLoading","ColorsDark"];export{u as ColorsDark,o as LongContent,e as Playground,p as VariantError,a as VariantInfo,l as VariantLoading,c as VariantSuccess,m as VariantWarn,i as WithCustomWidth,n as WithTwoActions,Jr as __namedExportsOrder,Hr as default};
//# sourceMappingURL=Toast.stories-CwWY3wt2.js.map
