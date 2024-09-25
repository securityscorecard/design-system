import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{a as g}from"./chunk-454WOBUV-CM0pFb8Z.js";import{B as a,a as z}from"./Banner-taWe2n8j.js";import{g as F}from"./storybook-Crh9kOSz.js";import"./index-DozTNYRt.js";import{S as G}from"./index-NWhnjyl5.js";import"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-C7IrpltL.js";import"./index-O0QocxG4.js";import"./index-D2mRoxDo.js";import"./index-CMxDd3Da.js";import"./index-DEer-CVx.js";import"./index-CbknQUej.js";import"./DSProvider-B7ofGRk-.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DY1VOCqR.js";import"./colors-BJBAFLAc.js";import"./isFunction-ORz17Qg7.js";import"./prop-CqBAad6K.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-CU3avibx.js";import"./react-router-dom-B-6Qbk9C.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-XTihx-r2.js";import"./index-BIl9TMb8.js";import"./Spinner-S-AlkdOj.js";import"./index-DUHcbkNP.js";import"./Icon-Cs9KcX0_.js";import"./Padbox-Suafv-Ni.js";import"./index-B0Us5nPq.js";import"./isNull-D6Q9WflV.js";import"./isNotNull-CcOpPpmr.js";import"./Inline.enums-DlaUPeKw.js";import"./noop-BfmH62Vh.js";import"./Button-DfVLVEQy.js";import"./index-uIya-cWM.js";import"./index-BjcCWu4d.js";import"./CloseButton-DolDE5X-.js";import"./IconButton-CIf20D8_.js";import"./components-9007xTyM.js";import"./index-D0Bewi1k.js";import"./isNotNilOrEmpty-DiaBY2VY.js";import"./isNilOrEmpty-4N7MeV5x.js";import"./isNil-CUap-F7z.js";import"./useContainerQuery-DqIcbuCK.js";import"./isNonEmptyArray-0RkcjJFH.js";import"./isNotEmpty-CRWDvOhW.js";import"./zipObj-Di5u6WK6.js";import"./Cluster-CO02VLRh.js";const o=[{label:"Action A",name:"Action A",onClick:g("click-action-a")},{label:"Action B",name:"Action B",onClick:g("click-action-b")}],Xr={title:"components/Banner",component:a,args:{children:"Banner text",onClose:g("close-banner")},argTypes:{variant:{...F("select",z),table:{type:{summary:"'success' | 'info' | 'warn' | 'error'"}}},actions:{table:{type:{summary:"ActionKinds<[React.MouseEvent]>[]",detail:`Array<
  | HandlerActionKind<[React.MouseEvent]>
  | AbsoluteLinkActionKind<[React.MouseEvent]>
  | RelativeLinkActionKind<[React.MouseEvent]>
>`}}}},parameters:{docs:{description:{component:"```js\nimport { Banner } from '@securityscorecard/design-system';\n```"}}}},s={parameters:{screenshot:{skip:!0}}},n={args:{actions:o,variant:"info"}},i={args:{actions:o,variant:"success"}},c={args:{actions:o,variant:"warn"}},t={args:{actions:o,variant:"error"}},m={args:{...n.args,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.`}},p={args:{actions:[o[0]]}},d={args:{actions:void 0}},u={args:{...t.args,isDismissable:!1}},l={render:e=>r.jsxs(G,{gap:"md",children:[r.jsx(a,{...e,variant:"info"}),r.jsx(a,{...e,variant:"success"}),r.jsx(a,{...e,variant:"warn"}),r.jsx(a,{...e,variant:"error"}),r.jsx(a,{...e,actions:o,variant:"info"})]}),parameters:{themes:{themeOverride:"Dark"}}};var v,A,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(f=(A=s.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var B,S,b;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    actions: BannerActions,
    variant: 'info'
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var k,x,h;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    actions: BannerActions,
    variant: 'success'
  }
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var V,y,j;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    actions: BannerActions,
    variant: 'warn'
  }
}`,...(j=(y=c.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var E,q,C;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    actions: BannerActions,
    variant: 'error'
  }
}`,...(C=(q=t.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var D,L,R;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...VariantInfo.args,
    children: \`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.\`
  }
}`,...(R=(L=m.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var W,w,O;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    actions: [BannerActions[0]]
  }
}`,...(O=(w=p.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var K,M,N;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    actions: undefined
  }
}`,...(N=(M=d.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var I,P,U;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...VariantError.args,
    isDismissable: false
  }
}`,...(U=(P=u.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var _,H,T;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Stack gap="md">
      <Banner {...args} variant="info" />
      <Banner {...args} variant="success" />
      <Banner {...args} variant="warn" />
      <Banner {...args} variant="error" />
      <Banner {...args} actions={BannerActions} variant="info" />
    </Stack>,
  parameters: {
    themes: {
      themeOverride: 'Dark'
    }
  }
}`,...(T=(H=l.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};const Yr=["Playground","VariantInfo","VariantSuccess","VariantWarn","VariantError","LongContent","WithOneAction","WithNoAction","NonDismissable","ColorsDark"];export{l as ColorsDark,m as LongContent,u as NonDismissable,s as Playground,t as VariantError,n as VariantInfo,i as VariantSuccess,c as VariantWarn,d as WithNoAction,p as WithOneAction,Yr as __namedExportsOrder,Xr as default};
//# sourceMappingURL=Banner.stories-DFfFHW08.js.map
