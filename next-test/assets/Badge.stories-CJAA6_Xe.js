import{j as s}from"./jsx-runtime-CfatFE5O.js";import{B as i}from"./Badge-NN_ecmT_.js";import{B as O}from"./Button-F6ZYDBEp.js";import"./index-D-VPAycD.js";import{I as V}from"./Inline-CJoeeTWo.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./components-C9ZynCTM.js";import"./index-t408_oKr.js";import"./Icon-CwDBfXxP.js";import"./index-BLQl-HhB.js";import"./index-DbwGX_n3.js";import"./index-C2fNon3Z.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./slice-a4xO8Rfj.js";import"./useLogger-BIFF4Ira.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./index-DKZQhKLO.js";import"./Spinner-C4Y4qwgQ.js";import"./index-D4bv78R3.js";import"./Padbox-QeDNAg-Y.js";import"./index-CJqnHCRB.js";import"./prop-DxwKVRPv.js";import"./Inline.enums-L64S19IZ.js";import"./Cluster-EcHytK4z.js";const ar={title:"components/Badge",component:i,args:{children:s.jsx(O,{variant:"subtle",children:"Notifications"})},argTypes:{variant:{description:"Badge visual variant. If set to `standard` the `count` property is required. If set to `dot` the `isVisible` property is required.",control:"select",options:["standard","dot"],table:{defaultValue:{summary:"'standard'"},type:{summary:"'standard' | 'dot'"}}},isVisible:{description:"Controls visibility of Badge in `dot` variant. Required for `dot` variant.",control:"boolean",table:{type:{summary:"boolean"}}},count:{description:"Set the badge count in the `standard` variant. Required for `standard` variant."},positionOffset:{description:"Available only on `standard` variant. Set the position offset to fix potentional issues where the badge doesn't fit to base position. The value will be set to transform-translate CSS property.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"50%, -50%"}}}},parameters:{docs:{description:{component:"```jsx\nimport { Badge } from '@securityscorecard/design-system';\n```"}}}},r={args:{variant:"standard",count:56},parameters:{screenshot:{skip:!0}}},t={args:r.args},e={args:{variant:"dot",isVisible:!0}},a={args:{variant:"standard",count:56,positionOffset:"20%, -20%"}},o={args:r.args,render:n=>s.jsxs(V,{gap:"md",children:[s.jsx(i,{count:56,children:n.children}),s.jsx(i,{variant:"dot",isVisible:!0,children:n.children})]}),parameters:{themes:{themeOverride:"Dark"}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const or=["Playground","StandardBadge","DotBadge","WithCustomOffset","DarkMode"];export{o as DarkMode,e as DotBadge,r as Playground,t as StandardBadge,a as WithCustomOffset,or as __namedExportsOrder,ar as default};
//# sourceMappingURL=Badge.stories-CJAA6_Xe.js.map
