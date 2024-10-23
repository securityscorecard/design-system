import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{a as U}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{C as o}from"./Checkbox-CO5yYsbB.js";import"./index-Dii5kbWS.js";import"./index-KsdgvOjZ.js";import{T as m}from"./index-iel8gM5l.js";import{I as z}from"./Inline.enums-Dg90oR_c.js";import{I as N}from"./Icon-CYAM9BRr.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-CVyJwDg7.js";import"./minus-C2f59QhV.js";import"./index-DIvwzgjZ.js";import"./constants-C4Oh6sKJ.js";import"./isNotUndefined-BKMziht-.js";import"./_isObject-BZZHHNGj.js";import"./index-ClIdIR2o.js";import"./Label-D8V9yQtD.js";import"./ElementLabel-CLZwawJK.js";import"./index-8M-BrxK9.js";import"./Padbox-YpISqXAr.js";import"./index-D5s2qWpv.js";import"./prop-BraK_cHP.js";import"./Cluster-hENBaGjg.js";import"./useLogger-DBrb0845.js";import"./DSProvider-DOa9IzhU.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-CajKmcpa.js";import"./index-Dk74W0Oi.js";const a="Use the same details for billing & shipping on my invoice",b={labelAsComponent:e.jsx(m,{size:"md",variant:"secondary",children:"Checkbox label inside a Text component"}),labelAsString:"Checkbox label",labelAsIconAndText:e.jsxs(z,{align:"center",gap:"sm",children:[e.jsx(N,{color:"neutral.900",name:"wrench"}),e.jsx(m,{children:a})]})},fe={title:"components/forms/Checkbox",component:o,argTypes:{name:{description:"Name property of the form",control:{disable:!0}},checkboxId:{description:"ID property of the form",control:{disable:!0}},defaultChecked:{description:"Default value of the checkbox",table:{type:{summary:"boolean"}}},isDisabled:{description:"Make element not interactive when certain condition is met"},isIndeterminate:{description:"Subordinate checkboxes might have various values"},isInvalid:{description:"It marks the selection when wrong"},label:{description:"Adds text to the checkbox",options:Object.keys(b),mapping:b,control:{type:"select",labels:{labelAsComponent:"Label as Text component",labelAsString:"Label as string",labelAsIconAndText:"Label as Icon and Text"}}}}},c=R=>e.jsx(o,{...R});c.args={name:"playground",checkboxId:"playground",label:b.labelAsString,defaultChecked:!1};c.parameters={screenshot:{skip:!0}};const r=()=>e.jsx(o,{checkboxId:"defaultCheckbox",label:a,name:"defaultCheckbox",onChange:U("Checkbox clicked")}),t=()=>e.jsx(o,{checkboxId:"checkedCheckbox",label:a,name:"checkedCheckbox",defaultChecked:!0}),s=()=>e.jsx(o,{checkboxId:"indeterminateCheckbox",label:a,name:"indeterminateCheckbox",isIndeterminate:!0}),i=()=>e.jsx(o,{checkboxId:"invalidCheckbox",label:a,name:"invalidCheckbox",isInvalid:!0}),n=()=>e.jsx(o,{checkboxId:"disabledCheckbox",label:a,name:"disabledCheckbox",isDisabled:!0}),l=()=>e.jsx(o,{checkboxId:"disabledCheckbox",label:e.jsx(m,{children:a}),name:"disabledCheckbox"}),d=()=>e.jsx(o,{checkboxId:"disabledCheckbox",label:e.jsxs(z,{align:"center",gap:"sm",children:[e.jsx(N,{color:"neutral.900",name:"wrench"}),e.jsx(m,{children:a})]}),name:"disabledCheckbox"});var x,h,p;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Checkbox {...args} />",...(p=(h=c.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var k,C,u;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Checkbox checkboxId="defaultCheckbox" label={textExample} name="defaultCheckbox" onChange={action('Checkbox clicked')} />`,...(u=(C=r.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};var I,g,f;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:'() => <Checkbox checkboxId="checkedCheckbox" label={textExample} name="checkedCheckbox" defaultChecked />',...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var j,v,A;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:'() => <Checkbox checkboxId="indeterminateCheckbox" label={textExample} name="indeterminateCheckbox" isIndeterminate />',...(A=(v=s.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var y,S,T;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:'() => <Checkbox checkboxId="invalidCheckbox" label={textExample} name="invalidCheckbox" isInvalid />',...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var E,D,L;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:'() => <Checkbox checkboxId="disabledCheckbox" label={textExample} name="disabledCheckbox" isDisabled />',...(L=(D=n.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var w,W,_;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:'() => <Checkbox checkboxId="disabledCheckbox" label={<Text>{textExample}</Text>} name="disabledCheckbox" />',...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var M,O,P;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`() => <Checkbox checkboxId="disabledCheckbox" label={<Inline align="center" gap="sm">
        <Icon color="neutral.900" name="wrench" />
        <Text>{textExample}</Text>
      </Inline>} name="disabledCheckbox" />`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const je=["Playground","DefaultCheckbox","CheckedCheckbox","IndeterminateCheckbox","InvalidCheckbox","DisabledCheckbox","CheckboxWithLabelAsComponent","CheckboxWithLabelAsComponentWithIcon"];export{l as CheckboxWithLabelAsComponent,d as CheckboxWithLabelAsComponentWithIcon,t as CheckedCheckbox,r as DefaultCheckbox,n as DisabledCheckbox,s as IndeterminateCheckbox,i as InvalidCheckbox,c as Playground,je as __namedExportsOrder,fe as default};
//# sourceMappingURL=Checkbox.stories-DcDBBdjY.js.map
