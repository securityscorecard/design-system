import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as k}from"./index-CTjT7uj6.js";import{S as r,a as t}from"./index-BoMx8HCg.js";import{S as h}from"./index-C1FT5pTy.js";import{S as x}from"./index-DPJ-F9hp.js";import{T as C}from"./index-DXjoAeTX.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./BaseTabLabel-iB9XYzfz.js";import"./index-B-CeicLq.js";import"./index--b1-fK-k.js";import"./Padbox-DLePQqEe.js";import"./Inline-CVToOADQ.js";import"./flex.types-BrkCVx66.js";import"./prop-B-t2KTqT.js";import"./Cluster-DZ_NL6w4.js";import"./useLogger-_RKsn3HX.js";import"./DSProvider-O0hTpwSp.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-BL8xHceO.js";import"./colors-BJBAFLAc.js";import"./subtract-jb88rU-3.js";import"./noop-DhoWYSxJ.js";const Y={title:"components/forms/SegmentedToggle",component:r,argTypes:{name:{control:{disable:!0},description:"Name parameter for the form"}}},a=o=>e.jsxs(r,{...o,children:[e.jsx(t,{itemId:"input1",label:"One",value:"1",defaultChecked:!0}),e.jsx(t,{itemId:"input2",label:"Two",value:"2"}),e.jsx(t,{itemId:"input3",label:"Three",value:"3"})]});a.args={group:"playground"};a.parameters={screenshot:{skip:!0}};const s=()=>e.jsxs(r,{group:"default",children:[e.jsx(t,{itemId:"default_input1",label:"One",value:"1",defaultChecked:!0}),e.jsx(t,{itemId:"default_input2",label:"Two",value:"2"}),e.jsx(t,{itemId:"default_input3",label:"Three",value:"3"})]}),d=()=>e.jsx(x,{gap:h.lg,justify:"flex-start",children:e.jsxs(r,{group:"sizes_md_disabled",isDisabled:!0,children:[e.jsx(t,{itemId:"disabled_md_input1",label:"One",value:"1",defaultChecked:!0}),e.jsx(t,{itemId:"disabled_md_input2",label:"Two",value:"2"}),e.jsx(t,{itemId:"disabled_md_input3",label:"Three",value:"3"})]})}),l=()=>{const[o,_]=k.useState("1"),v=j=>{_(j.target.value)};return e.jsxs(x,{gap:h.lg,justify:"flex-start",children:[e.jsxs(r,{group:"state",onChange:v,children:[e.jsx(t,{itemId:"state_input1",label:"One",value:"1",defaultChecked:!0}),e.jsx(t,{itemId:"state_input2",label:"Two",value:"2"}),e.jsx(t,{itemId:"state_input3",label:"Three",value:"3"})]}),e.jsxs(C,{children:["Selected value: ",o]})]})};l.parameters={screenshot:{skip:!0}};var m,n,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => <SegmentedToggle {...args}>
    <SegmentedToggleItem itemId="input1" label="One" value="1" defaultChecked />
    <SegmentedToggleItem itemId="input2" label="Two" value="2" />
    <SegmentedToggleItem itemId="input3" label="Three" value="3" />
  </SegmentedToggle>`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var u,g,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => <SegmentedToggle group="default">
    <SegmentedToggleItem itemId="default_input1" label="One" value="1" defaultChecked />
    <SegmentedToggleItem itemId="default_input2" label="Two" value="2" />
    <SegmentedToggleItem itemId="default_input3" label="Three" value="3" />
  </SegmentedToggle>`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var c,S,T;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Stack gap={SpaceSizes.lg} justify="flex-start">
    <SegmentedToggle group="sizes_md_disabled" isDisabled>
      <SegmentedToggleItem itemId="disabled_md_input1" label="One" value="1" defaultChecked />
      <SegmentedToggleItem itemId="disabled_md_input2" label="Two" value="2" />
      <SegmentedToggleItem itemId="disabled_md_input3" label="Three" value="3" />
    </SegmentedToggle>
  </Stack>`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var b,I,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState('1');
  const handleChange = e => {
    setSelected(e.target.value);
  };
  return <Stack gap={SpaceSizes.lg} justify="flex-start">
      <SegmentedToggle group="state" onChange={handleChange}>
        <SegmentedToggleItem itemId="state_input1" label="One" value="1" defaultChecked />
        <SegmentedToggleItem itemId="state_input2" label="Two" value="2" />
        <SegmentedToggleItem itemId="state_input3" label="Three" value="3" />
      </SegmentedToggle>
      <Text>Selected value: {selected}</Text>
    </Stack>;
}`,...(f=(I=l.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const Z=["Playground","Default","Disabled","StateManagement"];export{s as Default,d as Disabled,a as Playground,l as StateManagement,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=SegmentedToggle.stories-CMVLrlAC.js.map
