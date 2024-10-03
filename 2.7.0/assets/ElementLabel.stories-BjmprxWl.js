import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{S as c}from"./index-Bdemn2ub.js";import{E as s}from"./ElementLabel-Dhfs1z0U.js";import"./index-CTjT7uj6.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-C7IrpltL.js";import"./index-DxUWnzkt.js";import"./prop-DvyrXmKl.js";const V={title:"typography/ElementLabel",component:s,parameters:{docs:{description:{component:"ElementLabel is used for short and mostly interactive text elements like button, links, form field labels, and dropdown options/lists."}}},argTypes:{size:{description:"Selects the font size",control:"select",options:["sm","md"],table:{type:{summary:"'sm' | 'md'"},defaultValue:{summary:"'sm'"}}},color:{description:"Selects the font color",control:"select",options:["default","subtle","disabled","danger","inverse","white","link"],table:{type:{summary:"'default' | 'subtle' | 'disabled' | 'danger' | 'inverse' | 'white' | 'link'"},defaultValue:{summary:"'default'"}}},isStrong:{description:"Selects the font weight. When true ElementLabel will be rendered as bold ",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},l={args:{children:"Playground"},parameters:{screenshot:{skip:!0}}},o={render:e=>r.jsxs(c,{gap:"sm",children:[r.jsx(s,{...e,size:"sm",children:"Small"}),r.jsx(s,{...e,size:"md",children:"Medium"})]}),args:{children:"ElementLabel size"}},a={render:e=>r.jsxs(c,{gap:"sm",children:[r.jsx(s,{...e,color:"default",children:"Default"}),r.jsx(s,{...e,color:"subtle",children:"Subtle"}),r.jsx(s,{...e,color:"disabled",children:"Disabled"}),r.jsx(s,{...e,color:"danger",children:"Danger"}),r.jsx(s,{...e,color:"inverse",style:{background:"var(--sscds-color-neutral-12)"},children:"Inverse"}),r.jsx(s,{...e,color:"white",style:{background:"var(--sscds-color-black)"},children:"White"}),r.jsx(s,{...e,color:"link",children:"Link"})]}),args:{children:"ElementLabel color"}},t={render:a.render,args:a.args,decorators:[e=>r.jsx("div",{className:"dark",style:{background:"var(--sscds-color-background-body)"},children:e()})],name:"Colors (Dark mode)"},n={render:e=>r.jsxs(c,{gap:"sm",children:[r.jsx(s,{...e,isStrong:!1,children:"Default"}),r.jsx(s,{...e,isStrong:!0,children:"Strong"})]}),args:{children:"ElementLabel font weight"}};var d,i,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Playground'
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(m=(i=l.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,b,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Stack gap="sm">
      <ElementLabel {...args} size="sm">
        Small
      </ElementLabel>
      <ElementLabel {...args} size="md">
        Medium
      </ElementLabel>
    </Stack>,
  args: {
    children: 'ElementLabel size'
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var p,h,E;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Stack gap="sm">
      <ElementLabel {...args} color="default">
        Default
      </ElementLabel>
      <ElementLabel {...args} color="subtle">
        Subtle
      </ElementLabel>
      <ElementLabel {...args} color="disabled">
        Disabled
      </ElementLabel>
      <ElementLabel {...args} color="danger">
        Danger
      </ElementLabel>
      <ElementLabel {...args} color="inverse" style={{
      background: 'var(--sscds-color-neutral-12)'
    }}>
        Inverse
      </ElementLabel>
      <ElementLabel {...args} color="white" style={{
      background: 'var(--sscds-color-black)'
    }}>
        White
      </ElementLabel>
      <ElementLabel {...args} color="link">
        Link
      </ElementLabel>
    </Stack>,
  args: {
    children: 'ElementLabel color'
  }
}`,...(E=(h=a.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var L,k,S;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Colors.render,
  args: Colors.args,
  decorators: [storyFn => <div className="dark" style={{
    background: 'var(--sscds-color-background-body)'
  }}>
        {storyFn()}
      </div>],
  name: 'Colors (Dark mode)'
}`,...(S=(k=t.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var f,y,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Stack gap="sm">
      <ElementLabel {...args} isStrong={false}>
        Default
      </ElementLabel>
      <ElementLabel {...args} isStrong>
        Strong
      </ElementLabel>
    </Stack>,
  args: {
    children: 'ElementLabel font weight'
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const F=["Playground","Sizes","Colors","ColorsDark","Weights"];export{a as Colors,t as ColorsDark,l as Playground,o as Sizes,n as Weights,F as __namedExportsOrder,V as default};
//# sourceMappingURL=ElementLabel.stories-BjmprxWl.js.map
