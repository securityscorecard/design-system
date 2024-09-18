import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{a as J}from"./chunk-454WOBUV-DWuJqIWT.js";import"./index-DR5XHNKF.js";import"./index-CECIl5yl.js";import{T as s}from"./Toast-D-GvWAUG.js";import{T as K}from"./Toast.enums-DTf2PO03.js";import{g as Q}from"./storybook-BltFH4CS.js";import{B as d}from"./Button-DCr2txsF.js";import{S as f}from"./index-nwGNxYyI.js";import{S as g}from"./index-DT7C7tog.js";import{I as X}from"./Inline.enums-DB1XHHNB.js";import"./index-CTjT7uj6.js";import"./v4-D8aEg3BZ.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-BbaO5Nb4.js";import"./Padbox-DcClumXL.js";import"./index-C7IrpltL.js";import"./Cluster-C2ONgLd-.js";import"./prop-BK8rocxd.js";import"./useLogger-BRbW6gx4.js";import"./DSProvider-OItu1eMI.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-D0PvF__4.js";import"./colors-BJBAFLAc.js";import"./index-uyLpYamY.js";import"./isFunction-CoLsl8nV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-CHxAjElR.js";import"./index-BIxA6EUN.js";import"./index-DUZS25O0.js";import"./CloseButton-g4GwbAmN.js";import"./IconButton-BfF2jWqp.js";import"./components-BojOatfK.js";import"./index-DCTvgOp1.js";import"./Icon-B9Y_mYIL.js";import"./index-BRV0Se7Z.js";import"./index-CY6BXmKt.js";import"./Spinner-B9l4ubnC.js";import"./index-fbS_tvU0.js";import"./isNotNilOrEmpty-BN_BASDr.js";import"./isNilOrEmpty-B_sjZgCr.js";import"./isNil-DBsJ5Qwu.js";import"./zipObj-Cc13prBD.js";const H=r.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere velit magna, id scelerisque neque tristique sit amet. Nam mollis odio enim, sit amet auctor arcu elementum ut. Ut eget iaculis tortor."}),_r={title:"components/Toast",component:s,args:{onClose:J("close-toast")},argTypes:{variant:{...Q("select",K),description:"Color variant of the toast notification",table:{type:{summary:"'success' | 'info' | 'warn' | 'error' | 'loading'"}}},onClose:{description:"Callback triggered on close button click"}},parameters:{docs:{story:{inline:!1,height:250},description:{component:"```js\nimport { Toast } from '@securityscorecard/design-system';\n```"}}}},e={args:{children:r.jsxs(f,{gap:g.sm,justify:"flex-start",children:[r.jsx("p",{children:"This is a notification."}),r.jsx(d,{size:"sm",variant:"subtle",children:"Action"})]})},parameters:{screenshot:{skip:!0}}},n={args:{children:r.jsxs(f,{gap:g.sm,justify:"flex-start",children:[H,r.jsx(d,{size:"sm",variant:"subtle",children:"Action"})]})}},o={args:{children:r.jsxs(f,{gap:g.sm,justify:"flex-start",children:[H,r.jsxs(X,{gap:g.mdPlus,children:[r.jsx(d,{size:"sm",variant:"subtle",children:"Action A"}),r.jsx(d,{size:"sm",variant:"subtle",children:"Action B"})]})]})}},i={args:{...n.args,width:470}},a={args:{children:r.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a lacus posuere."}),variant:"info"}},c={args:{...a.args,variant:"success"}},m={args:{...a.args,variant:"warn"}},p={args:{...a.args,variant:"error"}},l={args:{...a.args,variant:"loading"}},u={args:{...e.args,isStandalone:!1},render:t=>r.jsxs(f,{gap:"md",children:[r.jsx(s,{...t,variant:"info"}),r.jsx(s,{...t,variant:"success"}),r.jsx(s,{...t,variant:"warn"}),r.jsx(s,{...t,variant:"error"}),r.jsx(s,{...t,variant:"loading"})]}),parameters:{themes:{themeOverride:"Dark"}}};var h,S,v;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
//# sourceMappingURL=Toast.stories-Bd8WB4tz.js.map
