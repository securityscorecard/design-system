import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{B as s}from"./Badge-C5fMk0B8.js";import{B as b}from"./Button-CUz70Qo-.js";import"./index-UyBh8dRE.js";import{I as B}from"./Inline.enums-B2crYYgS.js";import"./index-CTjT7uj6.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-C7IrpltL.js";import"./components-CEAZ8Niy.js";import"./index-Do5YN-r4.js";import"./Icon-D2McLPVS.js";import"./index-CajKmcpa.js";import"./index-BRV0Se7Z.js";import"./index-CrKmLWnD.js";import"./constants-l-41uwkI.js";import"./space.enums-Dn0LioXL.js";import"./_isObject-BZZHHNGj.js";import"./useLogger-BUVDCBjf.js";import"./DSProvider-BD6Crr4Z.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-DdGAx8Lu.js";import"./Spinner-BZdjEwis.js";import"./prop-DthtuCpe.js";import"./index-dJwzZQsw.js";import"./Padbox-C9-4IgMJ.js";import"./index-BFpmPCJD.js";import"./Cluster-_Y3KuvTf.js";const Y={title:"components/Badge",component:s,args:{children:o.jsx(b,{variant:"subtle",children:"Notifications"})},argTypes:{variant:{description:"Badge visual variant. If set to `standard` the `count` property is required. If set to `dot` the `isVisible` property is required.",control:"select",options:["standard","dot"],table:{defaultValue:{summary:"'standard'"},type:{summary:"'standard' | 'dot'"}}},isVisible:{description:"Controls visibility of Badge in `dot` variant. Required for `dot` variant.",control:"boolean",table:{type:{summary:"boolean"}}},count:{description:"Set the badge count in the `standard` variant. Required for `standard` variant."},positionOffset:{description:"Available only on `standard` variant. Set the position offset to fix potentional issues where the badge doesn't fit to base position. The value will be set to transform-translate CSS property.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"50%, -50%"}}}},parameters:{docs:{description:{component:"```jsx\nimport { Badge } from '@securityscorecard/design-system';\n```"}}}},r={args:{variant:"standard",count:56},parameters:{screenshot:{skip:!0}}},e={args:r.args},t={args:{variant:"dot",isVisible:!0}},a={args:r.args,render:i=>o.jsxs(B,{gap:"md",children:[o.jsx(s,{count:56,children:i.children}),o.jsx(s,{variant:"dot",isVisible:!0,children:i.children})]}),parameters:{themes:{themeOverride:"Dark"}}};var n,d,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: 'standard',
    count: 56
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: Playground.args
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'dot',
    isVisible: true
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,v,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const Z=["Playground","StandardBadge","DotBadge","DarkMode"];export{a as DarkMode,t as DotBadge,r as Playground,e as StandardBadge,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=Badge.stories-DVWPzppP.js.map
