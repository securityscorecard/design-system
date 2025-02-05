import{j as r}from"./jsx-runtime-CfatFE5O.js";import{S as n}from"./index-DCrzxnwq.js";import{D as s}from"./Display-BTKImItF.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./index-Bb-be-4U.js";import"./constants-CHqWh-7J.js";import"./space.enums-BgYGmFKv.js";import"./_isObject-BZZHHNGj.js";import"./prop-Cr6L5s4M.js";const q={title:"typography/Display",component:s,parameters:{docs:{description:{component:"The largest text on the screen is reserved for short, important text or numerals. Can be a standalone element or is used in combination with short captions for contextual outlines."}}},argTypes:{size:{description:"Selects the font size",control:"select",options:["sm","md","lg"],table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"}}},color:{description:"Selects the font color",control:"select",options:["default","subtle","success","warning","danger"],table:{type:{summary:"'default' | 'subtle' | 'success' | 'warning' | 'danger'"},defaultValue:{summary:"'default'"}}},isSubtle:{description:"Selects the font weight. When true Display will be rendered as medium.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},hasTabularNumbers:{description:"Toggles if numbers use the same width for every digit. This aligns numbers exactly below each other.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},o={args:{children:"Playground"},parameters:{screenshot:{skip:!0}}},l={render:e=>r.jsxs(n,{gap:"sm",children:[r.jsx(s,{...e,size:"sm",children:"Small"}),r.jsx(s,{...e,size:"md",children:"Medium"}),r.jsx(s,{...e,size:"lg",children:"Large"})]}),args:{children:"Display size"}},a={render:e=>r.jsxs(n,{gap:"sm",children:[r.jsx(s,{...e,color:"default",children:"Default"}),r.jsx(s,{...e,color:"subtle",children:"Subtle"}),r.jsx(s,{...e,color:"success",children:"Success"}),r.jsx(s,{...e,color:"warning",children:"Warning"}),r.jsx(s,{...e,color:"danger",children:"Danger"})]}),args:{children:"ElementLabel color"}},t={render:a.render,args:a.args,decorators:[e=>r.jsx("div",{className:"dark",style:{background:"var(--sscds-color-background-body)"},children:e()})],name:"Colors (Dark mode)"},i={render:e=>r.jsxs(n,{gap:"sm",children:[r.jsx(s,{...e,isSubtle:!1,children:"Default"}),r.jsx(s,{...e,isSubtle:!0,children:"Subtle"})]}),args:{children:"Display font weight"}},c={render:e=>r.jsxs(n,{gap:"sm",children:[r.jsx(s,{...e,hasTabularNumbers:!0}),r.jsx(s,{...e,hasTabularNumbers:!1})]}),args:{children:"0123456789"}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Playground'
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,y;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Stack gap="sm">
      <Display {...args} size="sm">
        Small
      </Display>
      <Display {...args} size="md">
        Medium
      </Display>
      <Display {...args} size="lg">
        Large
      </Display>
    </Stack>,
  args: {
    children: 'Display size'
  }
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,b,D;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Stack gap="sm">
      <Display {...args} color="default">
        Default
      </Display>
      <Display {...args} color="subtle">
        Subtle
      </Display>
      <Display {...args} color="success">
        Success
      </Display>
      <Display {...args} color="warning">
        Warning
      </Display>
      <Display {...args} color="danger">
        Danger
      </Display>
    </Stack>,
  args: {
    children: 'ElementLabel color'
  }
}`,...(D=(b=a.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var S,f,x;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Colors.render,
  args: Colors.args,
  decorators: [storyFn => <div className="dark" style={{
    background: 'var(--sscds-color-background-body)'
  }}>
        {storyFn()}
      </div>],
  name: 'Colors (Dark mode)'
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var k,j,z;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Stack gap="sm">
      <Display {...args} isSubtle={false}>
        Default
      </Display>
      <Display {...args} isSubtle>
        Subtle
      </Display>
    </Stack>,
  args: {
    children: 'Display font weight'
  }
}`,...(z=(j=i.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var w,T,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Stack gap="sm">
      <Display {...args} hasTabularNumbers />
      <Display {...args} hasTabularNumbers={false} />
    </Stack>,
  args: {
    children: '0123456789'
  }
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const A=["Playground","Sizes","Colors","ColorsDark","Weights","TabularNumbers"];export{a as Colors,t as ColorsDark,o as Playground,l as Sizes,c as TabularNumbers,i as Weights,A as __namedExportsOrder,q as default};
//# sourceMappingURL=Display.stories-zkol2fkS.js.map
