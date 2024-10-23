import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{a as g}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{B as a,a as z}from"./Banner-ES7EMlfI.js";import{g as F}from"./storybook-D0JVylcB.js";import"./index-Dii5kbWS.js";import{S as G}from"./index-D5s2qWpv.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-CVyJwDg7.js";import"./index-CfzITaHV.js";import"./index-BfdLNWmY.js";import"./index-CajKmcpa.js";import"./index-D97QikPo.js";import"./constants-C4Oh6sKJ.js";import"./isNotUndefined-BKMziht-.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-DOa9IzhU.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./isFunction-DHFK1UxZ.js";import"./prop-BraK_cHP.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./require-router-link-k4I0c-EH.js";import"./react-router-dom-DwuZB8Qo.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Dk74W0Oi.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./useLogger-DBrb0845.js";import"./index-DIvwzgjZ.js";import"./index-sYlzTV1h.js";import"./Spinner-CaS15r7b.js";import"./index-KsdgvOjZ.js";import"./Icon-CYAM9BRr.js";import"./Padbox-YpISqXAr.js";import"./index-8M-BrxK9.js";import"./isNull-CY6zyd1L.js";import"./isNotNull-DgOaR-Mp.js";import"./Inline.enums-Dg90oR_c.js";import"./noop-HYpN8PIr.js";import"./Button-BC4WdvK_.js";import"./index-iel8gM5l.js";import"./index-Dosn2Gf1.js";import"./CloseButton-a1TgeEoF.js";import"./IconButton-DqReE266.js";import"./components-D4rQYKk1.js";import"./index-C62XSTcc.js";import"./isNotNilOrEmpty-BlMC5YZZ.js";import"./isNilOrEmpty-kE3Ef-KC.js";import"./isNil-qfCNC9HL.js";import"./useContainerQuery-BBrWYpwZ.js";import"./isNonEmptyArray-CUFiEkiN.js";import"./isNotEmpty-CZrJ5H-_.js";import"./zipObj-C0uoDeoJ.js";import"./Cluster-hENBaGjg.js";const o=[{label:"Action A",name:"Action A",onClick:g("click-action-a")},{label:"Action B",name:"Action B",onClick:g("click-action-b")}],aa={title:"components/Banner",component:a,args:{children:"Banner text",onClose:g("close-banner")},argTypes:{variant:{...F("select",z),table:{type:{summary:"'success' | 'info' | 'warn' | 'error'"}}},actions:{table:{type:{summary:"ActionKinds<[React.MouseEvent]>[]",detail:`Array<
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
}`,...(T=(H=l.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};const oa=["Playground","VariantInfo","VariantSuccess","VariantWarn","VariantError","LongContent","WithOneAction","WithNoAction","NonDismissable","ColorsDark"];export{l as ColorsDark,m as LongContent,u as NonDismissable,s as Playground,n as VariantError,t as VariantInfo,i as VariantSuccess,c as VariantWarn,d as WithNoAction,p as WithOneAction,oa as __namedExportsOrder,aa as default};
//# sourceMappingURL=Banner.stories-C1WhsFfX.js.map
