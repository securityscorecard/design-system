import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{a as L}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{I as o}from"./InteractiveChip-B5ofAbdp.js";import{C as c}from"./ChipLabel-NKHAo6oF.js";import{C as p}from"./ChipIcon-BPoCPqBn.js";import"./index-BeaoyfpW.js";import{S}from"./index-CHCeFjJF.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./utils-CQmt_RG6.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./Inline.enums-Cxnp2INc.js";import"./index-CVyJwDg7.js";import"./index-DseqSOhp.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./prop-C6y-wj7q.js";import"./ElementLabel-CLZwawJK.js";import"./index-nYlI4MS_.js";import"./Icon-BDYv1UkU.js";import"./index-CajKmcpa.js";import"./index-Dk74W0Oi.js";import"./useLogger-BV2AIPN5.js";import"./DSProvider-CJQA90er.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-B9Ea3eoS.js";import"./Padbox-D7p1agbO.js";import"./Cluster-x6SODxoc.js";const sr={title:"components/Chip/InteractiveChip",component:o,subcomponents:{ChipLabel:c,ChipIcon:p},args:{children:r.jsxs(r.Fragment,{children:[r.jsx(p,{name:"eye"}),r.jsx(c,{isStrong:!0,children:"325"}),r.jsx(c,{children:"companies"})]}),onClick:L("on chip click")},parameters:{docs:{description:{component:"```jsx\nimport { InteractiveChip, ChipLabel, ChipIcon } from '@securityscorecard/design-system';\n\n\n<InteractiveChip as={Link} to=\"/scorecard\" onClick={() => { trackEvent('navigate'); }}>\n  <ChipIcon name=\"eye\" />\n  <ChipLabel isStrong>325</ChipLabel>\n  <ChipLabel>companies</ChipLabel>\n</InteractiveChip>\n```\n## Using as links and with external routers\n\nIn `InteractiveChip`, you must now explicitly define the element to be rendered using the `as` prop. The default value for `as` is `button`, but you can now pass in `a` or a custom React component (like `Link` from react-router-dom) to render the appropriate element.\nThis increases type-safety, as the component can correctly infer the available props based on the `as` value."}}}},n={parameters:{screenshot:{skip:!0}}},a={render:e=>r.jsxs(S,{gap:"md",children:[r.jsx(o,{...e,size:"sm"}),r.jsx(o,{...e,size:"md"})]})},t={render:e=>r.jsxs(S,{gap:"md",children:[r.jsx(o,{...e,color:"gray"}),r.jsx(o,{...e,color:"blue"}),r.jsx(o,{...e,color:"turquoise"}),r.jsx(o,{...e,color:"teal"}),r.jsx(o,{...e,color:"green"}),r.jsx(o,{...e,color:"yellow"}),r.jsx(o,{...e,color:"orange"}),r.jsx(o,{...e,color:"red"}),r.jsx(o,{...e,color:"pink"}),r.jsx(o,{...e,color:"purple"}),r.jsx(o,{...e,color:"brown"})]})},s={...t,parameters:{themes:{themeOverride:"Dark"}}},i={args:{as:"a",href:"#"},parameters:{screenshot:{skip:!0}}};var m,l,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(h=(l=n.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var d,u,C;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Stack gap="md">
      <InteractiveChip {...args} size="sm" />
      <InteractiveChip {...args} size="md" />
    </Stack>
}`,...(C=(u=a.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var g,x,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Stack gap="md">
      <InteractiveChip {...args} color="gray" />
      <InteractiveChip {...args} color="blue" />
      <InteractiveChip {...args} color="turquoise" />
      <InteractiveChip {...args} color="teal" />
      <InteractiveChip {...args} color="green" />
      <InteractiveChip {...args} color="yellow" />
      <InteractiveChip {...args} color="orange" />
      <InteractiveChip {...args} color="red" />
      <InteractiveChip {...args} color="pink" />
      <InteractiveChip {...args} color="purple" />
      <InteractiveChip {...args} color="brown" />
    </Stack>
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var k,I,j;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Colors,
  parameters: {
    themes: {
      themeOverride: 'Dark'
    }
  }
}`,...(j=(I=s.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var b,f,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    as: 'a',
    href: '#'
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const ir=["Playground","Sizes","Colors","ColorsDark","ExternalLink"];export{t as Colors,s as ColorsDark,i as ExternalLink,n as Playground,a as Sizes,ir as __namedExportsOrder,sr as default};
//# sourceMappingURL=InteractiveChip.stories-CtRFQITB.js.map
