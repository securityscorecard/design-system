import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{a as g}from"./chunk-454WOBUV-DWuJqIWT.js";import{B as a,a as z}from"./Banner-D5pOduIk.js";import{g as F}from"./storybook-CcMDNGsQ.js";import"./index-BfLWfhlY.js";import{S as G}from"./index-BcSnSfQB.js";import"./index-CTjT7uj6.js";import"./v4-D8aEg3BZ.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-C7IrpltL.js";import"./index-Jlc1e3xA.js";import"./index-Cq8-NMvO.js";import"./index-uyLpYamY.js";import"./index-4aEyDaIq.js";import"./index-DzAsfYvZ.js";import"./DSProvider-DXXID37Q.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-rODdEdpT.js";import"./colors-BJBAFLAc.js";import"./isFunction-BtTpAfvx.js";import"./prop-CePbk9wh.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-CwDqj7nA.js";import"./react-router-dom-DzSrOeqf.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BRV0Se7Z.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-IjsioYUQ.js";import"./index-DNjKNlmW.js";import"./Spinner-qeMxdFSS.js";import"./index-DoZinuF4.js";import"./Icon-DCTBW-fe.js";import"./Padbox-ugjOsLS7.js";import"./index-BawZj8GX.js";import"./isNull-CdyG0a3O.js";import"./isNotNull-DhaqNAj6.js";import"./Inline-Cg9jPAAE.js";import"./flex.types-BrkCVx66.js";import"./noop-00w40azb.js";import"./Button-CsnXVoMf.js";import"./index-BiHv5IcS.js";import"./index-Dgakt_4W.js";import"./CloseButton-BWqOiFUV.js";import"./IconButton-Bd-lF6sc.js";import"./components-BItAEv9I.js";import"./index-BUa1P_95.js";import"./isNotNilOrEmpty-B-_nLQ11.js";import"./isNilOrEmpty-UzWf3Ql9.js";import"./isNil-DLd5MEJk.js";import"./useContainerQuery-DqIcbuCK.js";import"./isNonEmptyArray-DAdRooc_.js";import"./isNotEmpty-CH4q73Ls.js";import"./isArray-bAA5N6OD.js";import"./both-goGvyUqW.js";import"./zipObj-D_Us9sqw.js";import"./Cluster-HoiIP47J.js";const o=[{label:"Action A",name:"Action A",onClick:g("click-action-a")},{label:"Action B",name:"Action B",onClick:g("click-action-b")}],$r={title:"components/Banner",component:a,args:{children:"Banner text",onClose:g("close-banner")},argTypes:{variant:{...F("select",z),table:{type:{summary:"'success' | 'info' | 'warn' | 'error'"}}},actions:{table:{type:{summary:"ActionKinds<[React.MouseEvent]>[]",detail:`Array<
  | HandlerActionKind<[React.MouseEvent]>
  | AbsoluteLinkActionKind<[React.MouseEvent]>
  | RelativeLinkActionKind<[React.MouseEvent]>
>`}}}},parameters:{docs:{description:{component:"```js\nimport { Banner } from '@securityscorecard/design-system';\n```"}}}},s={parameters:{screenshot:{skip:!0}}},t={args:{actions:o,variant:"info"}},i={args:{actions:o,variant:"success"}},c={args:{actions:o,variant:"warn"}},n={args:{actions:o,variant:"error"}},m={args:{...t.args,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.`}},p={args:{actions:[o[0]]}},d={args:{actions:void 0}},u={args:{...n.args,isDismissable:!1}},l={render:e=>r.jsxs(G,{gap:"md",children:[r.jsx(a,{...e,variant:"info"}),r.jsx(a,{...e,variant:"success"}),r.jsx(a,{...e,variant:"warn"}),r.jsx(a,{...e,variant:"error"}),r.jsx(a,{...e,actions:o,variant:"info"})]}),parameters:{themes:{themeOverride:"Dark"}}};var v,A,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(f=(A=s.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var B,S,b;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    actions: BannerActions,
    variant: 'info'
  }
}`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var k,x,h;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    actions: BannerActions,
    variant: 'success'
  }
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var V,y,j;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    actions: BannerActions,
    variant: 'warn'
  }
}`,...(j=(y=c.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var E,q,C;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    actions: BannerActions,
    variant: 'error'
  }
}`,...(C=(q=n.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var D,L,R;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(H=l.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};const ra=["Playground","VariantInfo","VariantSuccess","VariantWarn","VariantError","LongContent","WithOneAction","WithNoAction","NonDismissable","ColorsDark"];export{l as ColorsDark,m as LongContent,u as NonDismissable,s as Playground,n as VariantError,t as VariantInfo,i as VariantSuccess,c as VariantWarn,d as WithNoAction,p as WithOneAction,ra as __namedExportsOrder,$r as default};
//# sourceMappingURL=Banner.stories-Ca0TC7xG.js.map
