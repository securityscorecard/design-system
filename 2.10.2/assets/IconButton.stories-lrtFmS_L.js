import{a as K}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{I as Q}from"./IconButton-DByWM6Xn.js";import{S as X}from"./index-CajKmcpa.js";import{g as Y}from"./storybook-CBhUmier.js";import"./v4-CQkTLCs1.js";import"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CVyJwDg7.js";import"./components-CbPQWOa6.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-CodEEOgp.js";import"./Icon-CCnW0-hW.js";import"./index-Dk74W0Oi.js";import"./index-DseqSOhp.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./useLogger-CeNh0Atc.js";import"./DSProvider-DOa9IzhU.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-BZ_qC4EF.js";import"./Spinner-CMiMP2Eh.js";import"./prop-C6y-wj7q.js";import"./zipObj-C0uoDeoJ.js";const ka={component:Q,argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"],name:"size",description:"Sizing variant",table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"}}},variant:{control:{type:"select"},options:["base","highlight","danger","subtle","ghost","highlight-ghost","danger-ghost"],name:"variant",description:"Visual variant of the button",table:{type:{summary:"'base' | 'highlight' | 'danger' | 'subtle' | 'ghost' | 'highlight-ghost' | 'danger-ghost'"},defaultValue:{summary:"'base'"}}},iconName:{name:"iconName",type:{required:!0},description:"Name of the used icon",table:{type:{summary:"SSCIcons | (string & {})"}},...Y("select",X)},label:{control:{type:"text"},name:"label",type:{name:"string",required:!0},description:"Human-readable label used for accessibility",table:{type:{summary:"string"}}},iconType:{control:{type:"object"},name:"iconType",description:"Icon family from where the icon is used",table:{type:{summary:"'ssc' | 'far'"},defaultValue:{summary:"'ssc'"}}},iconRotation:{control:{type:"radio"},options:[90,180,270],name:"iconRotation",description:"Icon rotation property",table:{type:{summary:"90 | 180 | 270"}}},isDisabled:{control:{type:"boolean"},name:"isDisabled",description:"Disable the button to prevent clicking",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},name:"isLoading",description:"Display loading spinner and disable button to prevent clicking",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},as:{control:{type:"object"},name:"as",description:"Used to type-safe property inference. By default `button` element is used, other common options will be `a` or `Link` from react-router",table:{type:{summary:"Element"}}}},args:{onClick:K("button click")},parameters:{docs:{description:{component:"A Button is a fundamental interactive element in user interfaces,\nallowing users to trigger actions or navigate through an application. It serves\nas a clear call-to-action, prompting user engagement and facilitating task\ncompletion.\n\n```js\nimport { IconButton } from '@securityscorecard/design-system';\n```\n## Using as links and with external routers\n\nIn `ButtonV2`, you must now explicitly define the element to be rendered using the `as` prop. The default value for `as` is `button`, but you can now pass in `a` or a custom React component (like `Link` from react-router-dom) to render the appropriate element.\nThis increases type-safety, as the component can correctly infer the available props based on the `as` value.\n\n## Coming from original Button component?\nWe prepared a comprehensive [migration guide](?path=/docs/guides-buttonv2-migration-guide--documentation) that should cover all main differences and help you with this transition."}}}},e={args:{size:"md",variant:"base",iconName:"cog",label:"Button"},parameters:{screenshot:{skip:!0}}},a={args:{size:"md",variant:"base",iconName:"cog",label:"Button"}},r={args:{...a.args,variant:"subtle"}},t={args:{...a.args,variant:"ghost"}},s={args:{...a.args,variant:"highlight"}},n={args:{...a.args,variant:"danger"}},o={args:{...a.args,variant:"danger-ghost"}},i={args:{...a.args,size:"sm"}},m={args:{...a.args,size:"md"}},c={args:{...a.args,size:"lg"}},p={args:{...a.args,isDisabled:!0}},g={args:{...a.args,isLoading:!0}};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'base',
    iconName: 'cog',
    label: 'Button'
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,b,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'base',
    iconName: 'cog',
    label: 'Button'
  }
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,v,V;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    variant: 'subtle'
  }
}`,...(V=(v=r.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var S,z,M;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    variant: 'ghost'
  }
}`,...(M=(z=t.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var I,D,k;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    variant: 'highlight'
  }
}`,...(k=(D=s.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var B,L,N;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    variant: 'danger'
  }
}`,...(N=(L=n.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var w,x,C;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    variant: 'danger-ghost'
  }
}`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var T,G,j;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    size: 'sm'
  }
}`,...(j=(G=i.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var H,R,q;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    size: 'md'
  }
}`,...(q=(R=m.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var E,P,U;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    size: 'lg'
  }
}`,...(U=(P=c.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var _,A,O;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    isDisabled: true
  }
}`,...(O=(A=p.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var W,F,J;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    isLoading: true
  }
}`,...(J=(F=g.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};const Ba=["Playground","VariantMain","VariantSubtle","VariantGhost","VariantHighlight","VariantDanger","VariantDangerGhost","SizeSmall","SizeMedium","SizeLarge","IsDisabled","IsLoading"];export{p as IsDisabled,g as IsLoading,e as Playground,c as SizeLarge,m as SizeMedium,i as SizeSmall,n as VariantDanger,o as VariantDangerGhost,t as VariantGhost,s as VariantHighlight,a as VariantMain,r as VariantSubtle,Ba as __namedExportsOrder,ka as default};
//# sourceMappingURL=IconButton.stories-lrtFmS_L.js.map
