import{j as e}from"./jsx-runtime-BbjHj44Y.js";import{r as L}from"./index-C6mWTJJr.js";import{S as R,a as r}from"./SegmentedToggle-5--DnFDt.js";import{S as P}from"./space.enums-DGrZwzIk.js";import{S as _}from"./index-C8Uj0hRh.js";import{T as q}from"./index-p3Ne9M6I.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CVyJwDg7.js";import"./styled-components.browser.esm-DdpL0cfT.js";import"./index-7bldAnOT.js";import"./index-BzkxN2vn.js";import"./constants-l-41uwkI.js";import"./_isObject-dmcfxmtS.js";import"./index-DCKWONtv.js";import"./Padbox-BDqsTa65.js";import"./Inline-C4eBN8Ve.js";import"./prop-gA1VFyoz.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-C53_rRpf.js";import"./useLogger-D6HktrB1.js";import"./DSProvider-0V0etiPX.js";import"./index-CWFZYRor.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./ElementLabel-B8jQdsnd.js";const me={title:"components/forms/SegmentedToggle",component:R,argTypes:{children:{description:"List of SegmentedToggleItem components that will be rendered as options",table:{type:{summary:"ReactNode"}},type:{required:!0}},group:{description:"The group is used to identify the SegmentedToggle within the form"},isDisabled:{description:"Indicates if the SegmentedToggle is disabled or not.",table:{type:{summary:"boolean"}}},isExpanded:{description:"Should the SegmentedToggle be expanded to full available width.",table:{type:{summary:"boolean"}}},onChange:{description:"Callback when the SegmentedToggle has changed.",table:{type:{summary:"(event: ChangeEvent<HTMLInputElement>) => void"}}}},parameters:{docs:{description:{component:"```jsx\nimport { SegmentedToggle, SegmentedToggleItem } from '@securityscorecard/design-system';\n```"}}}},a=({group:n})=>e.jsxs(e.Fragment,{children:[e.jsx(r,{itemId:`${n}-input1`,label:"One",value:"1",defaultChecked:!0}),e.jsx(r,{itemId:`${n}-input2`,label:"Two",value:"2"}),e.jsx(r,{itemId:`${n}-input3`,label:"Three",value:"3"})]}),o={args:{group:"playground",children:a({group:"playground"})},parameters:{screenshot:{skip:!0}}},s={args:{children:a({group:"default"}),group:"default"}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{itemId:"counter-input1",label:"One",value:"1",defaultChecked:!0}),e.jsx(r,{count:10,itemId:"counter-input2",label:"Two",value:"2"}),e.jsx(r,{count:20,itemId:"counter-input3",label:"Three",value:"3"})]}),group:"counter"}},d={args:{...t.args,isExpanded:!0}},i={args:{children:a({group:"disabled"}),group:"disabled",isDisabled:!0}},p={args:{children:a({group:"darkMode"}),group:"darkMode"},parameters:{themes:{themeOverride:"Dark"}}},c={args:{children:a({group:"stateManagement"}),group:"stateManagement"},render:function(W){const[$,z]=L.useState("1");return e.jsxs(_,{gap:P.lg,justify:"flex-start",children:[e.jsx(R,{...W,onChange:F=>{z(F.target.value)}}),e.jsxs(q,{children:["Selected value: ",$]})]})},parameters:{screenshot:{skip:!0}}};var l,m,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: children({
      group: 'default'
    }),
    group: 'default'
  }
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var b,f,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: <>
        <SegmentedToggleItem itemId="counter-input1" label="One" value="1" defaultChecked />
        <SegmentedToggleItem count={10} itemId="counter-input2" label="Two" value="2" />
        <SegmentedToggleItem count={20} itemId="counter-input3" label="Three" value="3" />
      </>,
    group: 'counter'
  }
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var T,y,k;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...WithCount.args,
    isExpanded: true
  }
}`,...(k=(y=d.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var v,I,j;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: children({
      group: 'disabled'
    }),
    group: 'disabled',
    isDisabled: true
  }
}`,...(j=(I=i.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var M,C,D;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(D=(C=p.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var E,w,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(w=c.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};const ue=["Playground","Default","WithCount","Expanded","Disabled","DarkMode","StateManagement"];export{p as DarkMode,s as Default,i as Disabled,d as Expanded,o as Playground,c as StateManagement,t as WithCount,ue as __namedExportsOrder,me as default};
//# sourceMappingURL=SegmentedToggle.stories-s4_72lQt.js.map
