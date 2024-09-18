import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{a as U}from"./chunk-454WOBUV-DWuJqIWT.js";import{C as o}from"./Checkbox-3u6GrbOk.js";import"./index-Nbgc27zk.js";import"./index-Djj9NU8F.js";import{T as b}from"./index-CL66zYYS.js";import{I as z}from"./Icon-DXON6kdo.js";import{I as N}from"./Inline.enums-CsFZc2ym.js";import"./index-CTjT7uj6.js";import"./v4-D8aEg3BZ.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-C7IrpltL.js";import"./index-CECIl5yl.js";import"./index-DT7C7tog.js";import"./index-uyLpYamY.js";import"./DSProvider-OItu1eMI.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-D0PvF__4.js";import"./colors-BJBAFLAc.js";import"./isFunction-CoLsl8nV.js";import"./prop-BK8rocxd.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-c2yW22LY.js";import"./Label-XTEYc6pz.js";import"./index-B2xEckfB.js";import"./Padbox-DcClumXL.js";import"./index-BYvZ6SHf.js";import"./Cluster-BEmEoxq8.js";import"./useLogger-BRbW6gx4.js";import"./index-BRV0Se7Z.js";const a="Use the same details for billing & shipping on my invoice",m={labelAsComponent:e.jsx(b,{size:"md",variant:"secondary",children:"Checkbox label inside a Text component"}),labelAsString:"Checkbox label",labelAsIconAndText:e.jsxs(N,{align:"center",gap:"sm",children:[e.jsx(z,{color:"neutral.900",name:"wrench"}),e.jsx(b,{children:a})]})},ue={title:"components/forms/Checkbox",component:o,argTypes:{name:{description:"Name property of the form",control:{disable:!0}},checkboxId:{description:"ID property of the form",control:{disable:!0}},defaultChecked:{description:"Default value of the checkbox",table:{type:{summary:"boolean"}}},isDisabled:{description:"Make element not interactive when certain condition is met"},isIndeterminate:{description:"Subordinate checkboxes might have various values"},isInvalid:{description:"It marks the selection when wrong"},label:{description:"Adds text to the checkbox",options:Object.keys(m),mapping:m,control:{type:"select",labels:{labelAsComponent:"Label as Text component",labelAsString:"Label as string",labelAsIconAndText:"Label as Icon and Text"}}}}},c=R=>e.jsx(o,{...R});c.args={name:"playground",checkboxId:"playground",label:m.labelAsString,defaultChecked:!1};c.parameters={screenshot:{skip:!0}};const r=()=>e.jsx(o,{checkboxId:"defaultCheckbox",label:a,name:"defaultCheckbox",onChange:U("Checkbox clicked")}),t=()=>e.jsx(o,{checkboxId:"checkedCheckbox",label:a,name:"checkedCheckbox",defaultChecked:!0}),s=()=>e.jsx(o,{checkboxId:"indeterminateCheckbox",label:a,name:"indeterminateCheckbox",isIndeterminate:!0}),i=()=>e.jsx(o,{checkboxId:"invalidCheckbox",label:a,name:"invalidCheckbox",isInvalid:!0}),n=()=>e.jsx(o,{checkboxId:"disabledCheckbox",label:a,name:"disabledCheckbox",isDisabled:!0}),l=()=>e.jsx(o,{checkboxId:"disabledCheckbox",label:e.jsx(b,{children:a}),name:"disabledCheckbox",isDisabled:!0}),d=()=>e.jsx(o,{checkboxId:"disabledCheckbox",label:e.jsxs(N,{align:"center",gap:"sm",children:[e.jsx(z,{color:"neutral.900",name:"wrench"}),e.jsx(b,{children:a})]}),name:"disabledCheckbox",isDisabled:!0});var x,h,p;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Checkbox {...args} />",...(p=(h=c.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var k,C,u;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Checkbox checkboxId="defaultCheckbox" label={textExample} name="defaultCheckbox" onChange={action('Checkbox clicked')} />`,...(u=(C=r.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};var I,g,f;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:'() => <Checkbox checkboxId="checkedCheckbox" label={textExample} name="checkedCheckbox" defaultChecked />',...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var j,v,A;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:'() => <Checkbox checkboxId="indeterminateCheckbox" label={textExample} name="indeterminateCheckbox" isIndeterminate />',...(A=(v=s.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var y,D,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:'() => <Checkbox checkboxId="invalidCheckbox" label={textExample} name="invalidCheckbox" isInvalid />',...(S=(D=i.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var T,E,L;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:'() => <Checkbox checkboxId="disabledCheckbox" label={textExample} name="disabledCheckbox" isDisabled />',...(L=(E=n.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var w,W,_;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:'() => <Checkbox checkboxId="disabledCheckbox" label={<Text>{textExample}</Text>} name="disabledCheckbox" isDisabled />',...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var M,O,P;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`() => <Checkbox checkboxId="disabledCheckbox" label={<Inline align="center" gap="sm">
        <Icon color="neutral.900" name="wrench" />
        <Text>{textExample}</Text>
      </Inline>} name="disabledCheckbox" isDisabled />`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const Ie=["Playground","DefaultCheckbox","CheckedCheckbox","IndeterminateCheckbox","InvalidCheckbox","DisabledCheckbox","CheckboxWithLabelAsComponent","CheckboxWithLabelAsComponentWithIcon"];export{l as CheckboxWithLabelAsComponent,d as CheckboxWithLabelAsComponentWithIcon,t as CheckedCheckbox,r as DefaultCheckbox,n as DisabledCheckbox,s as IndeterminateCheckbox,i as InvalidCheckbox,c as Playground,Ie as __namedExportsOrder,ue as default};
//# sourceMappingURL=Checkbox.stories-C7SZceUi.js.map
