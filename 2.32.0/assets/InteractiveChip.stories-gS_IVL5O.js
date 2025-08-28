import{j as r}from"./jsx-runtime-BbjHj44Y.js";import{a as L}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{I as o}from"./InteractiveChip-Cy06Bl2i.js";import{C as c}from"./ChipLabel-Cp7ySSOL.js";import{C as p}from"./ChipIcon-O4t58TZI.js";import"./index-7bldAnOT.js";import{S}from"./index-C8Uj0hRh.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./utils-D66-ohHo.js";import"./styled-components.browser.esm-DdpL0cfT.js";import"./Inline-C4eBN8Ve.js";import"./index-CVyJwDg7.js";import"./index-BzkxN2vn.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./prop-gA1VFyoz.js";import"./ElementLabel-B8jQdsnd.js";import"./index-CzFpmkVR.js";import"./Icon-D9Bd8CnO.js";import"./index-DRm3KUNF.js";import"./index-Dk74W0Oi.js";import"./useLogger-D6HktrB1.js";import"./DSProvider-0V0etiPX.js";import"./index-CWFZYRor.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./index-DCKWONtv.js";import"./Padbox-BDqsTa65.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-C53_rRpf.js";const sr={title:"components/Chip/InteractiveChip",component:o,subcomponents:{ChipLabel:c,ChipIcon:p},args:{children:r.jsxs(r.Fragment,{children:[r.jsx(p,{name:"eye"}),r.jsx(c,{isStrong:!0,children:"325"}),r.jsx(c,{children:"companies"})]}),onClick:L("on chip click")},parameters:{docs:{description:{component:"```jsx\nimport { InteractiveChip, ChipLabel, ChipIcon } from '@securityscorecard/design-system';\n\n\n<InteractiveChip as={Link} to=\"/scorecard\" onClick={() => { trackEvent('navigate'); }}>\n  <ChipIcon name=\"eye\" />\n  <ChipLabel isStrong>325</ChipLabel>\n  <ChipLabel>companies</ChipLabel>\n</InteractiveChip>\n```\n## Using as links and with external routers\n\nIn `InteractiveChip`, you must now explicitly define the element to be rendered using the `as` prop. The default value for `as` is `button`, but you can now pass in `a` or a custom React component (like `Link` from react-router-dom) to render the appropriate element.\nThis increases type-safety, as the component can correctly infer the available props based on the `as` value."}}}},n={parameters:{screenshot:{skip:!0}}},a={render:e=>r.jsxs(S,{gap:"md",children:[r.jsx(o,{...e,size:"sm"}),r.jsx(o,{...e,size:"md"})]})},t={render:e=>r.jsxs(S,{gap:"md",children:[r.jsx(o,{...e,color:"gray"}),r.jsx(o,{...e,color:"blue"}),r.jsx(o,{...e,color:"turquoise"}),r.jsx(o,{...e,color:"teal"}),r.jsx(o,{...e,color:"green"}),r.jsx(o,{...e,color:"yellow"}),r.jsx(o,{...e,color:"orange"}),r.jsx(o,{...e,color:"red"}),r.jsx(o,{...e,color:"pink"}),r.jsx(o,{...e,color:"purple"}),r.jsx(o,{...e,color:"brown"})]})},s={...t,parameters:{themes:{themeOverride:"Dark"}}},i={args:{as:"a",href:"#"},parameters:{screenshot:{skip:!0}}};var m,l,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
//# sourceMappingURL=InteractiveChip.stories-gS_IVL5O.js.map
