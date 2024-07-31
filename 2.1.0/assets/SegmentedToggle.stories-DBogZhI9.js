import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as k}from"./index-BwDkhjyp.js";import{S as r,a as t}from"./SegmentedToggleItem-DDZuede1.js";import{S as b}from"./space-B9R18Mwn.js";import{S as h}from"./Stack-B_iJg7G-.js";import{T as y}from"./Text-C1sA-5dj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./index-CVyJwDg7.js";import"./BaseTabLabel-CtrAa1KX.js";import"./Surface-Cs7tekjF.js";import"./flex.types-q2tZp175.js";import"./useLogger-D4I9buOf.js";import"./DSProvider-DzIDhM_J.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-BW2FcxSF.js";import"./colors-DAn332pn.js";import"./prop-3Huj0iT1.js";import"./Padbox-BrtZqAZY.js";import"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import"./subtract-Cjqc-chC.js";import"./noop-Bk6XfTLC.js";const Y={title:"components/forms/SegmentedToggle",component:r,argTypes:{name:{control:{disable:!0},description:"Name parameter for the form"}}},a=o=>e.jsxs(r,{...o,children:[e.jsx(t,{itemId:"input1",label:"One",value:"1",defaultChecked:!0}),e.jsx(t,{itemId:"input2",label:"Two",value:"2"}),e.jsx(t,{itemId:"input3",label:"Three",value:"3"})]});a.args={group:"playground"};a.parameters={screenshot:{skip:!0}};const s=()=>e.jsxs(r,{group:"default",children:[e.jsx(t,{itemId:"default_input1",label:"One",value:"1",defaultChecked:!0}),e.jsx(t,{itemId:"default_input2",label:"Two",value:"2"}),e.jsx(t,{itemId:"default_input3",label:"Three",value:"3"})]}),d=()=>e.jsx(h,{gap:b.lg,justify:"flex-start",children:e.jsxs(r,{group:"sizes_md_disabled",isDisabled:!0,children:[e.jsx(t,{itemId:"disabled_md_input1",label:"One",value:"1",defaultChecked:!0}),e.jsx(t,{itemId:"disabled_md_input2",label:"Two",value:"2"}),e.jsx(t,{itemId:"disabled_md_input3",label:"Three",value:"3"})]})}),l=()=>{const[o,x]=k.useState("1"),v=j=>{x(j.target.value)};return e.jsxs(h,{gap:b.lg,justify:"flex-start",children:[e.jsxs(r,{group:"state",onChange:v,children:[e.jsx(t,{itemId:"state_input1",label:"One",value:"1",defaultChecked:!0}),e.jsx(t,{itemId:"state_input2",label:"Two",value:"2"}),e.jsx(t,{itemId:"state_input3",label:"Three",value:"3"})]}),e.jsxs(y,{children:["Selected value: ",o]})]})};l.parameters={screenshot:{skip:!0}};a.__docgenInfo={description:"",methods:[],displayName:"Playground"};s.__docgenInfo={description:"",methods:[],displayName:"Default"};d.__docgenInfo={description:"",methods:[],displayName:"Disabled"};l.__docgenInfo={description:"",methods:[],displayName:"StateManagement"};var m,n,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => <SegmentedToggle {...args}>
    <SegmentedToggleItem itemId="input1" label="One" value="1" defaultChecked />
    <SegmentedToggleItem itemId="input2" label="Two" value="2" />
    <SegmentedToggleItem itemId="input3" label="Three" value="3" />
  </SegmentedToggle>`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var g,u,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => <SegmentedToggle group="default">
    <SegmentedToggleItem itemId="default_input1" label="One" value="1" defaultChecked />
    <SegmentedToggleItem itemId="default_input2" label="Two" value="2" />
    <SegmentedToggleItem itemId="default_input3" label="Three" value="3" />
  </SegmentedToggle>`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,S,T;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Stack gap={SpaceSizes.lg} justify="flex-start">
    <SegmentedToggle group="sizes_md_disabled" isDisabled>
      <SegmentedToggleItem itemId="disabled_md_input1" label="One" value="1" defaultChecked />
      <SegmentedToggleItem itemId="disabled_md_input2" label="Two" value="2" />
      <SegmentedToggleItem itemId="disabled_md_input3" label="Three" value="3" />
    </SegmentedToggle>
  </Stack>`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var f,I,_;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(_=(I=l.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const Z=["Playground","Default","Disabled","StateManagement"];export{s as Default,d as Disabled,a as Playground,l as StateManagement,Z as __namedExportsOrder,Y as default};
