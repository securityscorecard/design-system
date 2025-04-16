import{j as e}from"./jsx-runtime-CfatFE5O.js";import{a as U}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{C as o}from"./Checkbox-xfOTOUl8.js";import"./index-B1oE8qgv.js";import"./index-U7rWlclI.js";import{T as m}from"./index-NGm66y6o.js";import{I as z}from"./Inline-BnvQG4P8.js";import{I as N}from"./Icon-Bik-9-TI.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./minus-C2f59QhV.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./index-zG1Ob1bl.js";import"./Label-DV_70g_N.js";import"./ElementLabel-Kzoagp5M.js";import"./mergeRefs-C43w_hK8.js";import"./index-DV1EfWHB.js";import"./Padbox-DhupY5rO.js";import"./index-BJfwPkfN.js";import"./prop-gA1VFyoz.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-B_3C_5JL.js";import"./useLogger-DBZ2KDnn.js";import"./DSProvider-BIwlM2Bl.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./index-DRm3KUNF.js";import"./index-DbwGX_n3.js";const a="Use the same details for billing & shipping on my invoice",b={labelAsComponent:e.jsx(m,{size:"md",variant:"secondary",children:"Checkbox label inside a Text component"}),labelAsString:"Checkbox label",labelAsIconAndText:e.jsxs(z,{align:"center",gap:"sm",children:[e.jsx(N,{color:"neutral.900",name:"wrench"}),e.jsx(m,{children:a})]})},je={title:"components/forms/Checkbox",component:o,argTypes:{name:{description:"Name property of the form",control:{disable:!0}},checkboxId:{description:"ID property of the form",control:{disable:!0}},defaultChecked:{description:"Default value of the checkbox",table:{type:{summary:"boolean"}}},isDisabled:{description:"Make element not interactive when certain condition is met"},isIndeterminate:{description:"Subordinate checkboxes might have various values"},isInvalid:{description:"It marks the selection when wrong"},label:{description:"Adds text to the checkbox",options:Object.keys(b),mapping:b,control:{type:"select",labels:{labelAsComponent:"Label as Text component",labelAsString:"Label as string",labelAsIconAndText:"Label as Icon and Text"}}}}},c=R=>e.jsx(o,{...R});c.args={name:"playground",checkboxId:"playground",label:b.labelAsString,defaultChecked:!1};c.parameters={screenshot:{skip:!0}};const r=()=>e.jsx(o,{checkboxId:"defaultCheckbox",label:a,name:"defaultCheckbox",onChange:U("Checkbox clicked")}),t=()=>e.jsx(o,{checkboxId:"checkedCheckbox",label:a,name:"checkedCheckbox",defaultChecked:!0}),s=()=>e.jsx(o,{checkboxId:"indeterminateCheckbox",label:a,name:"indeterminateCheckbox",isIndeterminate:!0}),i=()=>e.jsx(o,{checkboxId:"invalidCheckbox",label:a,name:"invalidCheckbox",isInvalid:!0}),n=()=>e.jsx(o,{checkboxId:"disabledCheckbox",label:a,name:"disabledCheckbox",isDisabled:!0}),l=()=>e.jsx(o,{checkboxId:"disabledCheckbox",label:e.jsx(m,{children:a}),name:"disabledCheckbox"}),d=()=>e.jsx(o,{checkboxId:"disabledCheckbox",label:e.jsxs(z,{align:"center",gap:"sm",children:[e.jsx(N,{color:"neutral.900",name:"wrench"}),e.jsx(m,{children:a})]}),name:"disabledCheckbox"});var x,p,h;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Checkbox {...args} />",...(h=(p=c.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var k,C,u;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Checkbox checkboxId="defaultCheckbox" label={textExample} name="defaultCheckbox" onChange={action('Checkbox clicked')} />`,...(u=(C=r.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};var I,g,f;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:'() => <Checkbox checkboxId="checkedCheckbox" label={textExample} name="checkedCheckbox" defaultChecked />',...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var j,v,A;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:'() => <Checkbox checkboxId="indeterminateCheckbox" label={textExample} name="indeterminateCheckbox" isIndeterminate />',...(A=(v=s.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var y,S,T;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:'() => <Checkbox checkboxId="invalidCheckbox" label={textExample} name="invalidCheckbox" isInvalid />',...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var E,D,L;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:'() => <Checkbox checkboxId="disabledCheckbox" label={textExample} name="disabledCheckbox" isDisabled />',...(L=(D=n.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var w,W,_;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:'() => <Checkbox checkboxId="disabledCheckbox" label={<Text>{textExample}</Text>} name="disabledCheckbox" />',...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var M,O,P;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`() => <Checkbox checkboxId="disabledCheckbox" label={<Inline align="center" gap="sm">
        <Icon color="neutral.900" name="wrench" />
        <Text>{textExample}</Text>
      </Inline>} name="disabledCheckbox" />`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const ve=["Playground","DefaultCheckbox","CheckedCheckbox","IndeterminateCheckbox","InvalidCheckbox","DisabledCheckbox","CheckboxWithLabelAsComponent","CheckboxWithLabelAsComponentWithIcon"];export{l as CheckboxWithLabelAsComponent,d as CheckboxWithLabelAsComponentWithIcon,t as CheckedCheckbox,r as DefaultCheckbox,n as DisabledCheckbox,s as IndeterminateCheckbox,i as InvalidCheckbox,c as Playground,ve as __namedExportsOrder,je as default};
//# sourceMappingURL=Checkbox.stories-D5oNBf6f.js.map
