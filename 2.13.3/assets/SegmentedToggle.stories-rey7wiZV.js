import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as E}from"./index-ClcD9ViR.js";import{S as M,a as i}from"./SegmentedToggle-DBC4DABx.js";import{S as w}from"./space.enums-FzolKu9U.js";import{S as O}from"./index-CLVl6jk_.js";import{T as R}from"./index-CpAvg4Hc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DxcpycWO.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-UOk5nvl2.js";import"./index-CUb24YOv.js";import"./constants-C4Oh6sKJ.js";import"./_isObject-BZZHHNGj.js";import"./index-BaexK_kB.js";import"./Padbox-DmYWNoOJ.js";import"./Inline.enums-BdnhnZ8J.js";import"./prop-C6y-wj7q.js";import"./Cluster-CGQQQZ4I.js";import"./useLogger-CGEbE2mZ.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./ElementLabel-Kzoagp5M.js";const ae={title:"components/forms/SegmentedToggle",component:M,argTypes:{children:{description:"List of SegmentedToggleItem components that will be rendered as options",table:{type:{summary:"ReactNode"}},type:{required:!0}},group:{description:"The group is used to identify the SegmentedToggle within the form"},isDisabled:{description:"Indicates if the SegmentedToggle is disabled or not.",table:{type:{summary:"boolean"}}},isExpanded:{description:"Should the SegmentedToggle be expanded to full available width.",table:{type:{summary:"boolean"}}},onChange:{description:"Callback when the SegmentedToggle has changed.",table:{type:{summary:"(event: ChangeEvent<HTMLInputElement>) => void"}}}},parameters:{docs:{description:{component:"```jsx\nimport { SegmentedToggle, SegmentedToggleItem } from '@securityscorecard/design-system';\n```"}}}},r=({group:t})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{itemId:`${t}-input1`,label:"One",value:"1",defaultChecked:!0}),e.jsx(i,{itemId:`${t}-input2`,label:"Two",value:"2"}),e.jsx(i,{itemId:`${t}-input3`,label:"Three",value:"3"})]}),a={args:{group:"playground",children:r({group:"playground"})},parameters:{screenshot:{skip:!0}}},s={args:{children:r({group:"default"}),group:"default"}},o={args:{children:r({group:"disabled"}),group:"disabled",isDisabled:!0}},n={args:{children:r({group:"darkMode"}),group:"darkMode"},parameters:{themes:{themeOverride:"Dark"}}},d={args:{children:r({group:"stateManagement"}),group:"stateManagement"},render:function(j){const[D,I]=E.useState("1");return e.jsxs(O,{gap:w.lg,justify:"flex-start",children:[e.jsx(M,{...j,onChange:C=>{I(C.target.value)}}),e.jsxs(R,{children:["Selected value: ",D]})]})},parameters:{screenshot:{skip:!0}}};var p,m,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    group: 'playground',
    children: children({
      group: 'playground'
    })
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,g,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: children({
      group: 'default'
    }),
    group: 'default'
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,S,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: children({
      group: 'disabled'
    }),
    group: 'disabled',
    isDisabled: true
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var b,y,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: children({
      group: 'darkMode'
    }),
    group: 'darkMode'
  },
  parameters: {
    themes: {
      themeOverride: 'Dark'
    }
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var T,k,v;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: children({
      group: 'stateManagement'
    }),
    group: 'stateManagement'
  },
  render: function Render(args) {
    const [selected, setSelected] = useState('1');
    return <Stack gap={SpaceSizes.lg} justify="flex-start">
        <SegmentedToggle {...args} onChange={e => {
        setSelected(e.target.value);
      }} />
        <Text>Selected value: {selected}</Text>
      </Stack>;
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(v=(k=d.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const se=["Playground","Default","Disabled","DarkMode","StateManagement"];export{n as DarkMode,s as Default,o as Disabled,a as Playground,d as StateManagement,se as __namedExportsOrder,ae as default};
//# sourceMappingURL=SegmentedToggle.stories-rey7wiZV.js.map
