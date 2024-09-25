import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{a as L}from"./chunk-454WOBUV-CM0pFb8Z.js";import{I as o}from"./InteractiveChip-CWrVVter.js";import{C as c}from"./ChipLabel-DtWRRXex.js";import{C as p}from"./ChipIcon-CqJX1fvB.js";import"./index-DozTNYRt.js";import{S}from"./index-NWhnjyl5.js";import"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./utils-DJYzM6Bc.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./Inline.enums-DlaUPeKw.js";import"./index-C7IrpltL.js";import"./index-CbknQUej.js";import"./prop-CqBAad6K.js";import"./ElementLabel-CTPKCfMW.js";import"./index-DUHcbkNP.js";import"./Icon-Cs9KcX0_.js";import"./index-CMxDd3Da.js";import"./index-BRV0Se7Z.js";import"./useLogger-XTihx-r2.js";import"./DSProvider-B7ofGRk-.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DY1VOCqR.js";import"./colors-BJBAFLAc.js";import"./index-B0Us5nPq.js";import"./Padbox-Suafv-Ni.js";import"./Cluster-CO02VLRh.js";const oe={title:"components/Chip/InteractiveChip",component:o,subcomponents:{ChipLabel:c,ChipIcon:p},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(p,{name:"eye"}),e.jsx(c,{isStrong:!0,children:"325"}),e.jsx(c,{children:"companies"})]}),onClick:L("on chip click")},parameters:{docs:{description:{component:"```jsx\nimport { InteractiveChip, ChipLabel, ChipIcon } from '@securityscorecard/design-system';\n\n\n<InteractiveChip as={Link} to=\"/scorecard\" onClick={() => { trackEvent('navigate'); }}>\n  <ChipIcon name=\"eye\" />\n  <ChipLabel isStrong>325</ChipLabel>\n  <ChipLable>companies</ChipLable>\n</InteractiveChip>\n```\n## Using as links and with external routers\n\nIn `InteractiveChip`, you must now explicitly define the element to be rendered using the `as` prop. The default value for `as` is `button`, but you can now pass in `a` or a custom React component (like `Link` from react-router-dom) to render the appropriate element.\nThis increases type-safety, as the component can correctly infer the available props based on the `as` value."}}}},n={parameters:{screenshot:{skip:!0}}},a={render:r=>e.jsxs(S,{gap:"md",children:[e.jsx(o,{...r,size:"sm"}),e.jsx(o,{...r,size:"md"})]})},t={render:r=>e.jsxs(S,{gap:"md",children:[e.jsx(o,{...r,color:"gray"}),e.jsx(o,{...r,color:"blue"}),e.jsx(o,{...r,color:"turquoise"}),e.jsx(o,{...r,color:"teal"}),e.jsx(o,{...r,color:"green"}),e.jsx(o,{...r,color:"yellow"}),e.jsx(o,{...r,color:"orange"}),e.jsx(o,{...r,color:"red"}),e.jsx(o,{...r,color:"pink"}),e.jsx(o,{...r,color:"purple"}),e.jsx(o,{...r,color:"brown"})]})},s={...t,parameters:{themes:{themeOverride:"Dark"}}},i={args:{as:"a",href:"#"},parameters:{screenshot:{skip:!0}}};var m,l,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const te=["Playground","Sizes","Colors","ColorsDark","ExternalLink"];export{t as Colors,s as ColorsDark,i as ExternalLink,n as Playground,a as Sizes,te as __namedExportsOrder,oe as default};
//# sourceMappingURL=InteractiveChip.stories-UFyUGEy3.js.map
