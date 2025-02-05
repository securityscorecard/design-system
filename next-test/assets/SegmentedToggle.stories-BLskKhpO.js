import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as $}from"./index-ClcD9ViR.js";import{S as C,a as r}from"./SegmentedToggle-KCOv20r2.js";import{S as z}from"./space.enums-BgYGmFKv.js";import{S as F}from"./index-DCrzxnwq.js";import{T as L}from"./index-DZGjp5Sd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DxcpycWO.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-oFlQPhyy.js";import"./index-Bb-be-4U.js";import"./constants-CHqWh-7J.js";import"./_isObject-BZZHHNGj.js";import"./index-CUV4n1T7.js";import"./Padbox-N3VhyJTW.js";import"./Inline-Cltm-cZ0.js";import"./prop-Cr6L5s4M.js";import"./Inline.enums-L64S19IZ.js";import"./Cluster-C-kvLuIZ.js";import"./useLogger-CCAiqPwH.js";import"./DSProvider-mgEeOsVG.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./ElementLabel-CnVInBRH.js";const ie={title:"components/forms/SegmentedToggle",component:C,argTypes:{children:{description:"List of SegmentedToggleItem components that will be rendered as options",table:{type:{summary:"ReactNode"}},type:{required:!0}},group:{description:"The group is used to identify the SegmentedToggle within the form"},isDisabled:{description:"Indicates if the SegmentedToggle is disabled or not.",table:{type:{summary:"boolean"}}},isExpanded:{description:"Should the SegmentedToggle be expanded to full available width.",table:{type:{summary:"boolean"}}},onChange:{description:"Callback when the SegmentedToggle has changed.",table:{type:{summary:"(event: ChangeEvent<HTMLInputElement>) => void"}}}},parameters:{docs:{description:{component:"```jsx\nimport { SegmentedToggle, SegmentedToggleItem } from '@securityscorecard/design-system';\n```"}}}},t=({group:a})=>e.jsxs(e.Fragment,{children:[e.jsx(r,{itemId:`${a}-input1`,label:"One",value:"1",defaultChecked:!0}),e.jsx(r,{itemId:`${a}-input2`,label:"Two",value:"2"}),e.jsx(r,{itemId:`${a}-input3`,label:"Three",value:"3"})]}),o={args:{group:"playground",children:t({group:"playground"})},parameters:{screenshot:{skip:!0}}},n={args:{children:t({group:"default"}),group:"default"}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{itemId:"counter-input1",label:"One",value:"1",defaultChecked:!0}),e.jsx(r,{count:10,itemId:"counter-input2",label:"Two",value:"2"}),e.jsx(r,{count:20,itemId:"counter-input3",label:"Three",value:"3"})]}),group:"counter"}},d={args:{children:t({group:"disabled"}),group:"disabled",isDisabled:!0}},i={args:{children:t({group:"darkMode"}),group:"darkMode"},parameters:{themes:{themeOverride:"Dark"}}},l={args:{children:t({group:"stateManagement"}),group:"stateManagement"},render:function(w){const[E,O]=$.useState("1");return e.jsxs(F,{gap:z.lg,justify:"flex-start",children:[e.jsx(C,{...w,onChange:R=>{O(R.target.value)}}),e.jsxs(L,{children:["Selected value: ",E]})]})},parameters:{screenshot:{skip:!0}}};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,g,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: children({
      group: 'default'
    }),
    group: 'default'
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,b,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: <>
        <SegmentedToggleItem itemId="counter-input1" label="One" value="1" defaultChecked />
        <SegmentedToggleItem count={10} itemId="counter-input2" label="Two" value="2" />
        <SegmentedToggleItem count={20} itemId="counter-input3" label="Three" value="3" />
      </>,
    group: 'counter'
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var T,x,y;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: children({
      group: 'disabled'
    }),
    group: 'disabled',
    isDisabled: true
  }
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var k,v,I;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(v=i.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var j,M,D;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(D=(M=l.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const le=["Playground","Default","WithCount","Disabled","DarkMode","StateManagement"];export{i as DarkMode,n as Default,d as Disabled,o as Playground,l as StateManagement,s as WithCount,le as __namedExportsOrder,ie as default};
//# sourceMappingURL=SegmentedToggle.stories-BLskKhpO.js.map
