import{j as s}from"./jsx-runtime-BbjHj44Y.js";import{B as i}from"./Badge-uzof5H1u.js";import{B as O}from"./Button-I8Y2XdcJ.js";import"./index-DllgY1-W.js";import{I as V}from"./Inline-B7NzMb1T.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./styled-components.browser.esm-DdpL0cfT.js";import"./index-CVyJwDg7.js";import"./components-C9sJjMsI.js";import"./index-CzFpmkVR.js";import"./Icon-D9Bd8CnO.js";import"./index-DRm3KUNF.js";import"./index-Dk74W0Oi.js";import"./index-BzkxN2vn.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./useLogger-D6HktrB1.js";import"./DSProvider-0V0etiPX.js";import"./index-CWFZYRor.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./index-DOkAu5-S.js";import"./Spinner-Frn9DgHt.js";import"./index-jYxijnXQ.js";import"./Padbox-BqHnR5yd.js";import"./index-CcmHmzDo.js";import"./prop-gA1VFyoz.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-C53_rRpf.js";const er={title:"components/Badge",component:i,args:{children:s.jsx(O,{variant:"subtle",children:"Notifications"})},argTypes:{variant:{description:"Badge visual variant. If set to `standard` the `count` property is required. If set to `dot` the `isVisible` property is required.",control:"select",options:["standard","dot"],table:{defaultValue:{summary:"'standard'"},type:{summary:"'standard' | 'dot'"}}},isVisible:{description:"Controls visibility of Badge in `dot` variant. Required for `dot` variant.",control:"boolean",table:{type:{summary:"boolean"}}},count:{description:"Set the badge count in the `standard` variant. Required for `standard` variant."},positionOffset:{description:"Available only on `standard` variant. Set the position offset to fix potentional issues where the badge doesn't fit to base position. The value will be set to transform-translate CSS property.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"50%, -50%"}}}},parameters:{docs:{description:{component:"```jsx\nimport { Badge } from '@securityscorecard/design-system';\n```"}}}},r={args:{variant:"standard",count:56},parameters:{screenshot:{skip:!0}}},t={args:r.args},e={args:{variant:"dot",isVisible:!0}},a={args:{variant:"standard",count:56,positionOffset:"20%, -20%"}},o={args:r.args,render:n=>s.jsxs(V,{gap:"md",children:[s.jsx(i,{count:56,children:n.children}),s.jsx(i,{variant:"dot",isVisible:!0,children:n.children})]}),parameters:{themes:{themeOverride:"Dark"}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'standard',
    count: 56
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,u,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: Playground.args
}`,...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,f,h;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'dot',
    isVisible: true
  }
}`,...(h=(f=e.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,y,b;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'standard',
    count: 56,
    positionOffset: '20%, -20%'
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var B,x,S;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: Playground.args,
  render: args => <Inline gap="md">
      <Badge count={56}>{args.children}</Badge>
      <Badge variant="dot" isVisible>
        {args.children}
      </Badge>
    </Inline>,
  parameters: {
    themes: {
      themeOverride: 'Dark'
    }
  }
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const ar=["Playground","StandardBadge","DotBadge","WithCustomOffset","DarkMode"];export{o as DarkMode,e as DotBadge,r as Playground,t as StandardBadge,a as WithCustomOffset,ar as __namedExportsOrder,er as default};
//# sourceMappingURL=Badge.stories-CEtt6bth.js.map
