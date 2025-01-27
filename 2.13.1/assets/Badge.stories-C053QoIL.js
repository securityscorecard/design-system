import{j as o}from"./jsx-runtime-CfatFE5O.js";import{B as i}from"./Badge-CHgN_PNr.js";import{B as O}from"./Button-vEOnW8Bm.js";import"./index-C0tcqiOb.js";import{I as V}from"./Inline.enums-CFrWSfFs.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./components-MIUzfLU3.js";import"./index-DYDjgMG1.js";import"./Icon-CHceuV7K.js";import"./index-CeOnF3dB.js";import"./index-DbwGX_n3.js";import"./index-CUb24YOv.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./useLogger-CGEbE2mZ.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-CGIPeC-W.js";import"./Spinner-CScYiCuC.js";import"./prop-C6y-wj7q.js";import"./index-BaexK_kB.js";import"./Padbox-DmYWNoOJ.js";import"./index-DocoHESx.js";import"./Cluster-BKESMogL.js";const tr={title:"components/Badge",component:i,args:{children:o.jsx(O,{variant:"subtle",children:"Notifications"})},argTypes:{variant:{description:"Badge visual variant. If set to `standard` the `count` property is required. If set to `dot` the `isVisible` property is required.",control:"select",options:["standard","dot"],table:{defaultValue:{summary:"'standard'"},type:{summary:"'standard' | 'dot'"}}},isVisible:{description:"Controls visibility of Badge in `dot` variant. Required for `dot` variant.",control:"boolean",table:{type:{summary:"boolean"}}},count:{description:"Set the badge count in the `standard` variant. Required for `standard` variant."},positionOffset:{description:"Available only on `standard` variant. Set the position offset to fix potentional issues where the badge doesn't fit to base position. The value will be set to transform-translate CSS property.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"50%, -50%"}}}},parameters:{docs:{description:{component:"```jsx\nimport { Badge } from '@securityscorecard/design-system';\n```"}}}},r={args:{variant:"standard",count:56},parameters:{screenshot:{skip:!0}}},t={args:r.args},e={args:{variant:"dot",isVisible:!0}},a={args:{variant:"standard",count:56,positionOffset:"20%, -20%"}},s={args:r.args,render:n=>o.jsxs(V,{gap:"md",children:[o.jsx(i,{count:56,children:n.children}),o.jsx(i,{variant:"dot",isVisible:!0,children:n.children})]}),parameters:{themes:{themeOverride:"Dark"}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var B,x,S;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const er=["Playground","StandardBadge","DotBadge","WithCustomOffset","DarkMode"];export{s as DarkMode,e as DotBadge,r as Playground,t as StandardBadge,a as WithCustomOffset,er as __namedExportsOrder,tr as default};
//# sourceMappingURL=Badge.stories-C053QoIL.js.map
