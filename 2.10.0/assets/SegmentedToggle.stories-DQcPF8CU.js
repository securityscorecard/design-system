import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as E}from"./index-BwDkhjyp.js";import{S as M,a as i}from"./SegmentedToggle-BR1sUzPQ.js";import{S as w}from"./isNotUndefined-BKMziht-.js";import{S as O}from"./index-D5s2qWpv.js";import{T as R}from"./index-iel8gM5l.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CVyJwDg7.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-Dii5kbWS.js";import"./index-DIvwzgjZ.js";import"./constants-C4Oh6sKJ.js";import"./_isObject-BZZHHNGj.js";import"./index-8M-BrxK9.js";import"./Padbox-YpISqXAr.js";import"./Inline.enums-Dg90oR_c.js";import"./prop-BraK_cHP.js";import"./Cluster-hENBaGjg.js";import"./useLogger-DBrb0845.js";import"./DSProvider-DOa9IzhU.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./ElementLabel-CLZwawJK.js";const se={title:"components/forms/SegmentedToggle",component:M,argTypes:{children:{description:"List of SegmentedToggleItem components that will be rendered as options",table:{type:{summary:"ReactNode"}},type:{required:!0}},group:{description:"The group is used to identify the SegmentedToggle within the form"},isDisabled:{description:"Indicates if the SegmentedToggle is disabled or not.",table:{type:{summary:"boolean"}}},isExpanded:{description:"Should the SegmentedToggle be expanded to full available width.",table:{type:{summary:"boolean"}}},onChange:{description:"Callback when the SegmentedToggle has changed.",table:{type:{summary:"(event: ChangeEvent<HTMLInputElement>) => void"}}}},parameters:{docs:{description:{component:"```jsx\nimport { SegmentedToggle, SegmentedToggleItem } from '@securityscorecard/design-system';\n```"}}}},r=({group:t})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{itemId:`${t}-input1`,label:"One",value:"1",defaultChecked:!0}),e.jsx(i,{itemId:`${t}-input2`,label:"Two",value:"2"}),e.jsx(i,{itemId:`${t}-input3`,label:"Three",value:"3"})]}),a={args:{group:"playground",children:r({group:"playground"})},parameters:{screenshot:{skip:!0}}},s={args:{children:r({group:"default"}),group:"default"}},o={args:{children:r({group:"disabled"}),group:"disabled",isDisabled:!0}},n={args:{children:r({group:"darkMode"}),group:"darkMode"},parameters:{themes:{themeOverride:"Dark"}}},d={args:{children:r({group:"stateManagement"}),group:"stateManagement"},render:function(j){const[D,I]=E.useState("1");return e.jsxs(O,{gap:w.lg,justify:"flex-start",children:[e.jsx(M,{...j,onChange:C=>{I(C.target.value)}}),e.jsxs(R,{children:["Selected value: ",D]})]})},parameters:{screenshot:{skip:!0}}};var p,m,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(v=(k=d.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const oe=["Playground","Default","Disabled","DarkMode","StateManagement"];export{n as DarkMode,s as Default,o as Disabled,a as Playground,d as StateManagement,oe as __namedExportsOrder,se as default};
//# sourceMappingURL=SegmentedToggle.stories-DQcPF8CU.js.map
