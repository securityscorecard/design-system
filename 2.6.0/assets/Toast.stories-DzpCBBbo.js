import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{a as J}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./index-DozTNYRt.js";import"./index-DEer-CVx.js";import{T as s}from"./Toast-xVJ0huX2.js";import{T as K}from"./Toast.enums-CSEygTvg.js";import{g as Q}from"./storybook-Crh9kOSz.js";import{B as d}from"./Button-BJCD1Rvj.js";import{S as f}from"./index-NWhnjyl5.js";import{S as g}from"./index-CbknQUej.js";import{I as X}from"./Inline.enums-DlaUPeKw.js";import"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-B0Us5nPq.js";import"./Padbox-Suafv-Ni.js";import"./index-C7IrpltL.js";import"./Cluster-CO02VLRh.js";import"./prop-CqBAad6K.js";import"./useLogger-XTihx-r2.js";import"./DSProvider-B7ofGRk-.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DY1VOCqR.js";import"./colors-BJBAFLAc.js";import"./index-CMxDd3Da.js";import"./isFunction-ORz17Qg7.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-DfX17r-U.js";import"./index-uIya-cWM.js";import"./index-BjcCWu4d.js";import"./CloseButton-DolDE5X-.js";import"./IconButton-CIf20D8_.js";import"./components-9007xTyM.js";import"./index-DUHcbkNP.js";import"./Icon-Cs9KcX0_.js";import"./index-BRV0Se7Z.js";import"./index-BIl9TMb8.js";import"./Spinner-S-AlkdOj.js";import"./index-D0Bewi1k.js";import"./isNotNilOrEmpty-DiaBY2VY.js";import"./isNilOrEmpty-4N7MeV5x.js";import"./isNil-CUap-F7z.js";import"./zipObj-Di5u6WK6.js";const H=r.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere velit magna, id scelerisque neque tristique sit amet. Nam mollis odio enim, sit amet auctor arcu elementum ut. Ut eget iaculis tortor."}),_r={title:"components/Toast",component:s,args:{onClose:J("close-toast")},argTypes:{variant:{...Q("select",K),description:"Color variant of the toast notification",table:{type:{summary:"'success' | 'info' | 'warn' | 'error' | 'loading'"}}},onClose:{description:"Callback triggered on close button click"}},parameters:{docs:{story:{inline:!1,height:250},description:{component:"```js\nimport { Toast } from '@securityscorecard/design-system';\n```"}}}},e={args:{children:r.jsxs(f,{gap:g.sm,justify:"flex-start",children:[r.jsx("p",{children:"This is a notification."}),r.jsx(d,{size:"sm",variant:"subtle",children:"Action"})]})},parameters:{screenshot:{skip:!0}}},n={args:{children:r.jsxs(f,{gap:g.sm,justify:"flex-start",children:[H,r.jsx(d,{size:"sm",variant:"subtle",children:"Action"})]})}},o={args:{children:r.jsxs(f,{gap:g.sm,justify:"flex-start",children:[H,r.jsxs(X,{gap:g.mdPlus,children:[r.jsx(d,{size:"sm",variant:"subtle",children:"Action A"}),r.jsx(d,{size:"sm",variant:"subtle",children:"Action B"})]})]})}},i={args:{...n.args,width:470}},a={args:{children:r.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a lacus posuere."}),variant:"info"}},c={args:{...a.args,variant:"success"}},m={args:{...a.args,variant:"warn"}},p={args:{...a.args,variant:"error"}},l={args:{...a.args,variant:"loading"}},u={args:{...e.args,isStandalone:!1},render:t=>r.jsxs(f,{gap:"md",children:[r.jsx(s,{...t,variant:"info"}),r.jsx(s,{...t,variant:"success"}),r.jsx(s,{...t,variant:"warn"}),r.jsx(s,{...t,variant:"error"}),r.jsx(s,{...t,variant:"loading"})]}),parameters:{themes:{themeOverride:"Dark"}}};var h,S,v;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(S=e.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var x,j,k;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: <Stack gap={SpaceSizes.sm} justify="flex-start">
        {longContent}
        <Button size="sm" variant="subtle">
          Action
        </Button>
      </Stack>
  }
}`,...(k=(j=n.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var T,y,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(y=o.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var V,b,z;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const Rr=["Playground","LongContent","WithTwoActions","WithCustomWidth","VariantInfo","VariantSuccess","VariantWarn","VariantError","VariantLoading","ColorsDark"];export{u as ColorsDark,n as LongContent,e as Playground,p as VariantError,a as VariantInfo,l as VariantLoading,c as VariantSuccess,m as VariantWarn,i as WithCustomWidth,o as WithTwoActions,Rr as __namedExportsOrder,_r as default};
//# sourceMappingURL=Toast.stories-DzpCBBbo.js.map
